function getMessage(){
    let username = document.getElementById("Uname").value;
    let password = document.getElementById("Pword").value;
    
    //expression to validate password
    const uppercase=/[A-Z]/;
    const lowercase=/[a-z]/;
    const digit=/\d/;

    if(username === ""){
        alert("Please enter your username!");
        return;
    }
    if(password === ""){
        alert("Please enter your password!");
        return;
    }
    //Check if password contains at least one uppercase letter
    if(!uppercase.test(password)){
        alert("Password must contain at least one uppercase letter.");
        return;
    }
    //Check if password contains at least one lowercase letter
    if(!lowercase.test(password)){
        alert("Password must contain at least one lowercase letter.");
        return;
    }
    //Check if password contains at least one digit
    if(!digit.test(password)){
        alert("Password must contain at least one digit.");
        return;
    }
    
    alert("Hello Validation " + password);
}
   
    
document.getElementById('btnLogin').addEventListener("click" , getMessage);



