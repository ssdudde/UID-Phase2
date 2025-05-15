document.addEventListener("DOMContentLoaded", function () {
    const chooser = document.getElementById("chooser");
    chooser.addEventListener("click", function () {
        const currenttext = document.getElementById("picker").innerText;
        if (currenttext == "Login"){
            document.getElementById("picker").innerText = "Sign Up";
            document.getElementById("chooser").innerText = "Already have an account? Log in.";
            document.getElementById("submit").value = "Sign Up";

            document.getElementsByClassName("card")[0].style.height = "75vh";
            document.getElementsByClassName("card")[0].style.marginTop = "15vh";

            
            document.getElementById("uname").placeholder = "Username";
            const newInput = document.createElement("input");
            newInput.type = "text";
            newInput.id = "email";
            newInput.className = "tbox";
            newInput.placeholder = "Email";
            newInput.style.opacity = "0";
            
            const uname = document.getElementById("uname");
            uname.parentNode.insertBefore(newInput, uname.nextSibling);
            
            setTimeout(() => {
                newInput.style.opacity = "1";
                newInput.style.transition = "opacity 0.5s ease-in";
            }, 200);
            
            
            const newInput2 = document.createElement("input");
            newInput2.type = "text";
            newInput2.id = "password2";
            newInput2.className = "tbox";
            newInput2.placeholder = "Re-enter Password";
            newInput2.style.opacity = "0";
            
            const chs = document.getElementById("pass");
            chs.parentNode.insertBefore(newInput2, chs.nextSibling);
            
            setTimeout(() => {
                newInput2.style.opacity = "1";
                newInput2.style.transition = "opacity 0.5s ease-in";
            }, 200);
            
            
        } else {
            document.getElementById("picker").innerText = "Login";
            document.getElementById("chooser").innerText = "Don't have an account? Sign Up.";
            document.getElementById("submit").value = "Login";

            document.getElementsByClassName("card")[0].style.height = "56vh"
            document.getElementsByClassName("card")[0].style.marginTop = "0vh";
            document.getElementsByClassName("card")[0].style.margin = "auto";

            document.getElementById("email").remove();
            document.getElementById("password2").remove();
        }

    });
});