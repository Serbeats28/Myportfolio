let header = document.querySelector("header");
window.addEventListener('scroll', function(){
    header.classList.toggle(this.scrollY > 120)
});

let menu = document.querySelector('#menu-icon');
let navbar_list = document.querySelector('.navbar_list');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar_list.classList.toggle('active')
   
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar_list.classList.remove('active')
}

sendEmail = () =>{
    (function(){
        emailjs.init("ZLk0PqjoROrVHfoBS")
    })();

   let params = {
     to: document.querySelector('#my_email').value,
     subject: document.querySelector('#subject_name').value,
     from: document.querySelector('#sender_email').value,
     message: document.querySelector('#message').value,
   };

   let serviceID = 'service_qyn5ssn';
   let email_template = 'template_1z5v4ke';

   emailjs.send(serviceID, email_template, params)
   .then(res=>{
    document.querySelector('#form').reset()
    alertify.set('notifier', 'position', 'top-right', 'color', 'white')
    alertify.success('Email Sent Successfully');
   })
   .catch(err=>{
    console.log(err)
   });
}

let text_content = document.querySelector('#text-content');
let text = `Jerwin Servito`;
let i = 0;

let IntervalID  = setInterval(()=>{
    text_content.innerHTML += text[i];
    i++
    if(i === text.length){
        clearInterval(IntervalID)
    }
},400)