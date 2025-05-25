document.getElementById("floatingInput").addEventListener(
    "submit",function (event) {
        event.preventDefault();
        let email = document.getElementById("floatingInput").Value
        let password = document.getElementById("floatingPassword").Value
        let validemail = "user@example.com";
        let validpassword = "123456789";
    
    
        if (email==validemail && password==validpassword) {
            document.getElementById("message").textContent="login successfull"
            document.getElementById("message").style.color="green";
            window.location.href="index.html";
        }else{
            document.getElementById("message").textContent="invalid email or invalid password";
            document.getElementById("message").style.color="red";
        }
     }
     );