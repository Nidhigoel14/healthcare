let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
function validate(){
            var name=document.bookappoint.name;
            var number=document.bookappoint.number;
            var email=document.bookappoint.email;
            var dob=document.bookappoint.dob;
            if(name.value.length<=0)
            {
                alert("Name is required");
                name.focus();
                return false;
            }
            if(number.value.length<=0)
            {
                alert("Number is required");
                number.focus();
                return false;
            }
            if(email.value.length<=0)
            {
                alert("email is required");
                email.focus();
                return false;
            }
            
            if(dob.value.length<=0)
            {
                alert("dob is required");
                dob.focus();
                return false;
            }
            else{
                alert("your appointment is confirmed")
            }
            return false;
        }
