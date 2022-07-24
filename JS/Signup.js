document.querySelector("form").addEventListener("submit", Signed);

function Signed(){
    event.preventDefault();
    let user = JSON.parse(localStorage.getItem("Sign-up")) || [];
    let obj = {
        mail: document.querySelector("#mail").value,
        password: document.querySelector("#password").value,
    };
    if (obj.mail==="" || obj.password===""){
        alert("Fill all required fields");
        return;
    }
    user.push(obj);
    localStorage.setItem("Sign-up", JSON.stringify(user));
    alert("Sign-Up Successfull")
    window.location.href="./Login.html";
}