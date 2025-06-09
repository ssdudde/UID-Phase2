function Submit() {
    const currentMode = document.getElementById("picker").innerText;

    if (currentMode === "Login") {
        const name = document.getElementById("uname").value.trim();
        const pass = document.getElementById("pass").value.trim();
        let error = "";

        if (!name) {
            error = "No username or email entered.";
            document.getElementById("uname").style.border = "3px solid red";
        } else if (!pass) {
            error = "No password entered.";
            document.getElementById("pass").style.border = "3px solid red";
        }

        if (error) {
            document.getElementById("error").style.opacity = "1";
            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerText = error;
            setTimeout(() => {
               
                document.getElementById("uname").style.transition = "border-color 1s ease";
                document.getElementById("error").style.transition = "opacity 1s ease";
                document.getElementById("error").style.opacity = "0";
                setTimeout(() => {
                    document.getElementById("error").style.display = "none";
                }, 500);
                
                document.getElementById("uname").style.border = "2px solid blue";
                document.getElementById("pass").style.border = "2px solid blue";
            }, 2000);
            return;
        }
        
        // Continue with login logic here
    }
    const username = document.getElementById("uname").value;
    const password = document.getElementById("pass").value;
    const email = document.getElementById("email").value;
    const password2 = document.getElementById("pass2").value;
    const errorElement = document.getElementById("error");


}

document.addEventListener("DOMContentLoaded", function () {
    const chooser = document.getElementById("chooser");
    chooser.addEventListener("click", function () {
        const currenttext = document.getElementById("picker").innerText;
        if (currenttext == "Login"){
            document.getElementById("picker").innerText = "Sign Up";
            document.getElementById("chooser").innerText = "Already have an account? Log in.";
            document.getElementById("submit").value = "Sign Up";

            document.getElementsByClassName("card")[0].style.height = "72.5vh";
            document.getElementsByClassName("tbox")[0].style.marginTop = "15vh";
            for (let i = 0; i < document.getElementsByClassName("tbox").length; i++) {
                document.getElementsByClassName("tbox")[i].style.margin = "0.6rem";
            }

            document.getElementById("uname").placeholder = "Username";
            document.getElementById("email").placeholder = "Email";
            
            setTimeout(() => {
                document.getElementById("email").style.display = "inline-block";
            }, 200);
            
            setTimeout(() => {
                document.getElementById("pass2").style.display = "inline-block";
            }, 200);
            
        } else {
            document.getElementById("uname").placeholder = "Username or Email";
            document.getElementById("picker").innerText = "Login";
            document.getElementById("chooser").innerText = "Don't have an account? Sign Up.";
            document.getElementById("submit").value = "Login";

            document.getElementsByClassName("card")[0].style.height = "56vh"
            document.getElementsByClassName("card")[0].style.marginTop = "0vh";
            document.getElementsByClassName("card")[0].style.margin = "auto";

            document.getElementById("email").style.display = "none";
            document.getElementById("pass2").style.display = "none";
            for (let i = 0; i < document.getElementsByClassName("tbox").length; i++) {
                document.getElementsByClassName("tbox")[i].style.margin = "0rem";
            }
        }
    });
});