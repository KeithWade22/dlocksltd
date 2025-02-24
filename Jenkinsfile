pipeline {
    agent { label 'FIFTH' }

    environment {
        GIT_REPO_URL = 'https://github.com/KeithWade22/dlocksltd.git'
        GIT_CREDENTIALS_ID = 'Git-Cred'
        BRANCH = 'main'
        DOCKER_IMAGE_NAME = 'dlocksltd-image:latest'
        DOCKER_CONTAINER_NAME = 'dlocksltd'
        //SUDO_PASSWORD = "wX5M]aP9JGN~Nr5.:rP-zyZ"
        DOCKER_COMPOSE_FILE = './docker-compose.yml'
        NGINX_CONF_DIR = '/etc/nginx/conf.d'
        DOMAIN_NAME = 'dlocksltd.com'
        PORT = '10122'
    }

    stages {
        
        stage('Clean Work Directory and Shutdown Containers') {
            steps {
                script {

                    echo 'Cleaning up the work directory...'
                    sh 'rm -rf ./dlocksltd'
                    
                    // Define container names
                    def containers = ['container_$DOCKER_CONTAINER_NAME', 'nginx-$DOCKER_CONTAINER_NAME']
                    
                    containers.each { container ->
                        // Check if each container is stopped and exists
                        def containerExists = sh(script: "docker ps -a --filter 'name=${container}' -q", returnStdout: true).trim()

                        if (containerExists) {
                            echo "Container ${container} found, removing it."

                            // Remove the container
                            sh "docker rm -f ${container}"
                            
                        } else {
                            echo "Container ${container} not found, skipping removal."
                        }
                    }
                }
            }
        }

        stage('Git Checkout') {
            steps {
                git branch: BRANCH,
                credentialsId: GIT_CREDENTIALS_ID,
                url: GIT_REPO_URL
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    sh '''
                        echo "$SUDO_PASSWORD" | sudo -S docker-compose down
                        echo "Building Docker image..."
                        echo "$SUDO_PASSWORD" | sudo -S docker-compose build --no-cache
                    '''
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    sh '''
                        echo "Starting Docker container..."
                        echo "$SUDO_PASSWORD" | sudo -S docker-compose up -d
                    '''
                }
            }
        }        

        stage('Extract Port and Create Nginx Config') {
    steps {
        script {
            // Ensure the environment variables are set
            if (!PORT || !DOMAIN_NAME || !NGINX_CONF_DIR || !DOCKER_CONTAINER_NAME) {
                error "One or more required environment variables are missing!"
            }

            // Display loaded environment variables
            echo "Loaded PORT: ${PORT}"
            echo "Loaded DOMAIN_NAME: ${DOMAIN_NAME}"
            echo "Loaded NGINX_CONF_DIR: ${NGINX_CONF_DIR}"
            echo "Loaded DOCKER_CONTAINER_NAME: ${DOCKER_CONTAINER_NAME}"

            // Ensure the Nginx config directory exists
            sh "mkdir -p ${NGINX_CONF_DIR}"

            // Write the Nginx configuration file
            sh """
cat <<'EOF' > ${NGINX_CONF_DIR}/${DOCKER_CONTAINER_NAME}.conf
server {
    listen 80;  # Listen on the dynamically extracted port
    server_name ${DOMAIN_NAME} www.${DOMAIN_NAME};  # Use domain name from environment variable

    location / {
        proxy_pass http://localhost:${PORT};  # Forward to localhost on the same port
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF
            """

            echo "Nginx reverse proxy configuration created successfully in ${NGINX_CONF_DIR}."
        }
    }
}


        
        stage('Remove Dangling Docker Images') {
            steps {
                script {
                    sh '''
                        echo "Removing dangling Docker images..."
                        echo "$SUDO_PASSWORD" | sudo -S docker image prune -f
                    '''
                }
            }
        }
        
        stage('Starting Docker container for Selenium testing') {
            steps {
                script {
                    sh '''
                        echo "Starting Docker container for Selenium"
                        echo "$SUDO_PASSWORD" | sudo -S docker start selenium-test
                    '''
                }
            }
        }
        
        stage('Starting Selenium testing') {
            steps {
                script {
                    sh '''
                        echo "Starting Docker for Selenium testing"
                        docker exec selenium-test bash -c "python3 /app/selinium_html_test.py --domain dlocksltd.com"
                        docker cp selenium-test:/app/redirection_results.txt .
                        docker exec selenium-test bash -c "rm redirection_results.txt"
                    '''
                }
            }
        }

        stage('Notify Status') {
    steps {
        script {
            // Define the file to attach and its location
            sh 'pwd'
            def fileToAttach = "redirection_results.txt"
            
            // Check if the file exists
            if (fileExists(fileToAttach)) {
                // Send email notification
                emailext(
                    subject: "Pipeline Status Notification",
                    body: """\
                        Hi Team,

                        The pipeline has completed execution. Please find the generated file attached.

                        Regards,
                        Jenkins
                    """,
                    to: "milliemurray@proton.me",  // Replace with the actual recipient(s)
                    attachmentsPattern: fileToAttach
                )
                
                // Log the email notification
                echo "Notification email sent with the file: ${fileToAttach} attached."

                // Remove the file after sending the email
                sh "rm -f ${fileToAttach}"
                echo "File ${fileToAttach} has been removed."
            } else {
                echo "File ${fileToAttach} does not exist. Skipping email notification."
            }
        }
    }
}

        
        stage('Remove selenium result and stop Docker Container') {
            steps {
                script {
                    sh '''
                        echo "Remove selenium Docker Container"
                        echo "$SUDO_PASSWORD" | sudo -S docker stop selenium-test
                    '''
                }
            }
        }
    }

    post {
        always {
            script {
                sh 'echo "$SUDO_PASSWORD" | sudo -S docker ps -a'
            }
        }
        success {
            echo 'Build and Deployment Successful!'
        }
        failure {
            echo 'Build or Deployment Failed.'
        }
    }
    
}
