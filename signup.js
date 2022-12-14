let form = document.querySelector("form");
let signupData=JSON.parse(localStorage.getItem("signup-data"))||[];
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj={
        name:form.name.value,
        email:form.mail.value,
        password:form.password.value,
        confirmPassword:form.password2.value
    }
    let flag=true;
    signupData.forEach((elem)=>{
        if(elem.email==obj.email){
            flag=false;
        
        }

    });
    if(flag==false){
        alert("email already registered");
    }else{
        
        
        
        // let regularExpression = /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{8,20}$/;
        // if(!regularExpression.test(obj.password)){
        //     alert("Password must contain one small, one capital and one special character");
            
    
        // }
        if(obj.password!=obj.confirmPassword){
            alert("Password not matched");
        }
        
        else{
            signupData.push(obj);
            let user_api_data={
                username: obj.name,
                password:obj.password
            }
            // console.log(user_api_data)
            add_users_api(user_api_data);
            localStorage.setItem("signup-data",JSON.stringify(signupData));
            alert("Sign Up successfully");
            window.location.href="login.html";
        }
    }


    

});
async function add_users_api(user_api_data){
    let res = await fetch("https://63983534044fa481d694c51f.mockapi.io/users",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user_api_data)
    })
    if(res.status){
        let data = await res.json();
        console.log(data);
    }
}