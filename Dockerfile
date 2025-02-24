# Use the official PHP FPM image
FROM php:8.1-fpm

# Set the working directory
WORKDIR /var/www/html

# Copy project files into the container
COPY . .

# Install any necessary PHP extensions
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Set permissions if necessary
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 777 /var/www/html

  