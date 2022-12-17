const container=document.querySelector(".container");
const userName=document.getElementById("username");
const password=document.getElementById("pass");
const remember=document.getElementById("remember");
const error=document.getElementById("error");
//var ui = new firebaseui.auth.AuthUI(firebase.auth());

userName.addEventListener("keyup",(event)=>{
    error.innerHTML='';
    error.style.display="block";
})

password.addEventListener("keyup",(event)=>{
    error.innerHTML='';
    error.style.display="block";
})

function isValid(){
    if(userName.value=="" || password.value=="") return false;
    return true;
}
function login(){
    error.style.display="block";
    if(!isValid()){
        error.innerHTML="Enter Valid Credentials";
    }else{
        let body=document.querySelector("body");
        let div=document.createElement("div");
        div.className="main";
        div.innerHTML="Login Success";
        div.style.color="white";
        div.style.fontSize="24px";
        container.style.display="none";
        body.appendChild(div);
    }
}