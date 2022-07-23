document.querySelector("form").addEventListener("submit", logged);

function logged(){
    event.preventDefault();
    let signed = JSON.parse(localStorage.getItem("Sign-up"));
    let obj = {
        mail: document.querySelector("#mail").value,
        password: document.querySelector("#password").value,
    };

    let flag = false;
    signed.forEach(function (ele){
        if (ele.mail===obj.mail && ele.password===obj.password){
            flag = true;
            localStorage.setItem("logged-in", JSON.stringify(ele));
            alert("Login Successfull")
            window.location.href="./index.html";
        }
    });
    if (flag===false){
        alert("Invalid User!   /   User does not exist");
    }
}