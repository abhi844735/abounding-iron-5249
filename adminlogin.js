let form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let username = document.getElementById("log_mail").value;
    let password = document.getElementById("log_pass").value;
    if(username=="Admin" &&password=="Admin"){
        alert("logged in successfully");
        window.location.href="adminpanel.html"
    }else{
        alert("wrong credentials");
    }

})