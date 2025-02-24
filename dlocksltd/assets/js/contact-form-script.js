/*==============================================================*/
// Contact Form JS
/*==============================================================*/
$(document).ready(function(event){

        let validator = $("#ajax_contact").validate({
            rules: {
                name: "required",
                email: {
                    required: true,
                    email: true
                },
                phone:"required",
                subject:"required",
                msg1:"required",
                //gridCheck: "required",
            },
            messages: {
                name:"Please enter your name",
                email:"Please enter your email",
                phone:"Please enter your phone",
                subject:"Please enter your subject",
                msg1:"Please enter message",
            },
            submitHandler:function(form){
                let formData = {
                    name: form.name.value,
                    email: form.email.value,
                    phone: form.phone.value,
                    subject: form.subject.value,
                    message:form.msg1.value,
                };
                console.log();
                document.querySelector('#message').innerHTML = 'Processing...';
                // event.preventDefault();
                fetch('https://acomal.top/send-mail/73/',{
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method:'POST',
                    body: JSON.stringify(formData),
                }).then((response)=>{
                   return response.json()
                }).then((response)=>{
                    if (response.msg=='success')
                    {
                        document.querySelector('#message').innerHTML = ''
                            document.querySelector('#message').innerHTML = 'Message Sent';
                            setTimeout(function(){
                                document.querySelector('#message').innerHTML = '';
                            },2000);
                            $(form).trigger('reset');
                    }
                })
            }
    
        });

        let validator1 = $("#checkout_contact").validate({
            rules: {
                first_name: "required",
                email: {
                    required: true,
                    email: true
                },
                last_name:"required",
                company:"required",
                address:"required",
                town:"required",
                country:"required",
                zip:"required",
                phone:"required",

                //gridCheck: "required",
            },
            messages: {
                first_name:"Please enter first name",
                email:"Pleae enter email",
                last_name:"Please enter last name",
                company:"please enter company",
                country:"please enter country",
                town:"please enter town",
                zip:"please enter zip",
                phone:"Please enter your phone",
            },
            submitHandler:function(form){

                let formData = {
                    firstname: form.first_name.value,
                    email: form.email.value,
                    lastname:form.last_name.value,
                    company: form.company.value,
                    country: form.country.value,
                    town:form.town.value,
                    zip:form.zip.value,
                    phone:form.phone.value,
                    message:form.msg1.value,
                };

                document.querySelector('#message').innerHTML = 'Processing....';
                
                fetch('https://acomal.top/send-mail/72/',{
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method:'POST',
                    body: JSON.stringify(formData),
                }).then((response)=>{
                   return response.json()
                }).then((response)=>{
                    if (response.msg=='success')
                    {
                        document.querySelector('#message').innerHTML = ''
                            document.querySelector('#message').innerHTML = 'Message Sent';
                            setTimeout(function(){
                                document.querySelector('#message').innerHTML = '';
                            },2000);
                            $(form).trigger('reset');
                    }
                })
            }
    
        });




})