function getMessage(){
    let username = document.getElementById("Uname").value;
    let password = document.getElementById("Pword").value;
    alert("Hello Validation " + password);

    let RegEx = /[a-z A-Z \-/{8,15}]/;

    if (regEx.test(passWord)){
        alert("valid");
    }

}


document.getElementById('btnLogin').addEventListener("click" , getMessage);



