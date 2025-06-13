async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    
    // Hash the data using SHA-256
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    return hashHex;
}

async function Submit() {
    const currentMode = document.getElementById("picker").innerText;

    let error = "";
    if (currentMode === "Login"){
        const name = document.getElementById("uname").value.trim();
        const pass = document.getElementById("pass").value.trim();

        if (!name) {
            error = "No username or email entered.";
            document.getElementById("uname").style.border = "3px solid red";
        } else if (!pass) {
            error = "No password entered.";
            document.getElementById("pass").style.border = "3px solid red";
        }
    } else if (currentMode === "Sign Up") {
        const name = document.getElementById("uname").value.trim();
        const email = document.getElementById("email").value.trim();
        const pass = document.getElementById("pass").value.trim();
        const pass2 = document.getElementById("pass2").value.trim();
        if (!name) {
            error = "No username or email entered.";
            document.getElementById("uname").style.border = "3px solid red";
        } else if (!email) {
            error = "No email entered";
            document.getElementById("email").style.border = "3px solid red";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            error = "Invalid email";
            document.getElementById("email").style.border = "3px solid red";
        } else if (!pass) {
            error = "No password entered.";
            document.getElementById("pass").style.border = "3px solid red";
        } else if (!pass2) {
            error = "Re-enter the password.";
            document.getElementById("pass2").style.border = "3px solid red";
        } else if (pass.length < 6){
            error = "Password is not strong enough";
            document.getElementById("pass").style.border = "3px solid red";
        } else if (pass!=pass2){
            error = "Passwords do not match";
            document.getElementById("pass").style.border = "3px solid red";
            document.getElementById("pass2").style.border = "3px solid red";
        }
    }
    if (error) {
        document.getElementById("error").style.opacity = "1";
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerText = error;
        setTimeout(() => {
           
            for (let i = 0; i < document.getElementsByClassName("tbox").length; i++) {
                document.getElementsByClassName("tbox")[i].style.transition = "border-color width 1s ease";
            }
            document.getElementById("error").style.transition = "opacity 1s ease";
            document.getElementById("error").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("error").style.display = "none";
            }, 500);
            
            document.getElementById("uname").style.border = "2px solid blue";
            document.getElementById("pass").style.border = "2px solid blue";
            document.getElementById("pass2").style.border = "2px solid blue";
            document.getElementById("email").style.border = "2px solid blue";
        }, 2000);
        return;
    }
    
    error = "";

    if (currentMode === "Login") {
        const name = document.getElementById("uname").value.trim();
        const pass = document.getElementById("pass").value.trim();
        const hashedPass = await hashPassword(pass);
        let userData;
        try {
            const storedData = localStorage.getItem('users');
            userData = storedData ? JSON.parse(storedData) : { users: [] }; 
        } catch (e) {
            userData = { users: [] };
        }

        const user = userData.users.find(u => (u.username === name || u.email === name) && u.password === hashedPass);
        if (!user) {
            error = "Invalid username or password";
            document.getElementById("uname").style.border = "3px solid red";
            document.getElementById("pass").style.border = "3px solid red";
        }

    } else if (currentMode === "Sign Up") {
        const name = document.getElementById("uname").value.trim();
        const email = document.getElementById("email").value.trim();
        const pass = document.getElementById("pass").value.trim();
        const hashedPass = await hashPassword(pass);
        
        let userData;
        try {
            const storedData = localStorage.getItem('users');
            userData = storedData ? JSON.parse(storedData) : { users: [] };
        } catch (e) {
            userData = { users: [] };
        }
        
        if (userData.users.some(u => u.username === name)) {
            error = "Username already exists";
            document.getElementById("uname").style.border = "3px solid red";
            return;
        } else if (userData.users.some(u => u.email === email)) {
            error = "Email already registered";
            document.getElementById("email").style.border = "3px solid red";
            return;
        } else {
            const newUser = {
                username: name,
                email: email,
                password: hashedPass
            };
            userData.users.push(newUser);
            localStorage.setItem('users', JSON.stringify(userData));
        }
    }
    if (error) {
        document.getElementById("error").style.opacity = "1";
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerText = error;
        setTimeout(() => {
           
            for (let i = 0; i < document.getElementsByClassName("tbox").length; i++) {
                document.getElementsByClassName("tbox")[i].style.transition = "border-color width 1s ease";
            }
            document.getElementById("error").style.transition = "opacity 1s ease";
            document.getElementById("error").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("error").style.display = "none";
            }, 500);
            
            document.getElementById("uname").style.border = "2px solid blue";
            document.getElementById("pass").style.border = "2px solid blue";
            document.getElementById("pass2").style.border = "2px solid blue";
            document.getElementById("email").style.border = "2px solid blue";
        }, 2000);
        return;
    } else {
        const card = document.querySelector('.card');
        let msg = "Your account has been created successfully.";
        if (currentMode=="Login"){
            msg = "Logged in successsfully.";
        }
        card.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <p style="color: #4CAF50; font-size: 4em; margin-top: 1em;">Success!</h2>
                <p style="font-size: 2em; margin-top: 1.5em;">${msg}</p>
                <p style="font-size: 2em;">Redirecting to home page...</p>
            </div>
        `;
        setTimeout(() => {
            window.location.href = "../home/index.html";
        }, 2000);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const chooser = document.getElementById("chooser");

    chooser.addEventListener("click", function () {
        const currenttext = document.getElementById("picker").innerText;
        if (currenttext == "Login"){
            document.getElementById("picker").innerText = "Sign Up";
            document.getElementById("chooser").innerText = "Already have an account? Log in.";
            document.getElementById("submit").style.opacity = "0";

            document.getElementsByClassName("card")[0].style.height = "72.5vh";
            document.getElementsByClassName("tbox")[0].style.marginTop = "15vh";
            for (let i = 0; i < document.getElementsByClassName("tbox").length; i++) {
                document.getElementsByClassName("tbox")[i].style.margin = "0.6rem";
            }

            document.getElementById("uname").placeholder = "Username";
            document.getElementById("email").placeholder = "Email";
            
            document.getElementById("email").style.opacity = "0";
            document.getElementById("email").style.display = "inline-block";

            document.getElementById("pass2").style.opacity = "0";
            document.getElementById("pass2").style.display = "inline-block";

            setTimeout(() => {
                document.getElementById("email").style.opacity = "1";
                document.getElementById("pass2").style.opacity = "1";
            }, 200);

            setTimeout(() => {
                document.getElementById("submit").style.opacity = "1";
                document.getElementById("submit").value = "Sign Up";
            }, 500);
            
        } else {
            document.getElementById("uname").placeholder = "Username or Email";
            document.getElementById("picker").innerText = "Login";
            document.getElementById("chooser").style.transition = "none";
            document.getElementById("chooser").style.opacity = "0";
            document.getElementById("chooser").innerText = "Don't have an account? Sign Up.";
            
            setTimeout(() => {
                document.getElementById("email").style.opacity = "0";
                document.getElementById("pass2").style.opacity = "0";    
                for (let i = 0; i < document.getElementsByClassName("tbox").length; i++) {
                    document.getElementsByClassName("tbox")[i].style.margin = "0rem";
                }
            },200);
            document.getElementById("chooser").style.transition = "opacity 1s ease-in";

            setTimeout(() => {
                document.getElementsByClassName("card")[0].style.height = "56vh";
                document.getElementsByClassName("card")[0].style.marginTop = "0vh";
                document.getElementsByClassName("card")[0].style.margin = "auto";
                document.getElementById("email").style.display = "none";
                document.getElementById("pass2").style.display = "none";
                document.getElementById("submit").value = "Login";
            }, 700);

            setTimeout(() =>
                {
                    document.getElementById("chooser").style.opacity = "1";
                }, 1500
            )
        }
    });
});