


function Spopup(){
    let verify = document.getElementById("verification");
    let username = document.getElementById("username").value;
    let emailaddress = document.getElementById("emailaddress");
    let password = document.getElementById("password")

    verify.style.opacity = "1"
    verify.style.visibility = "visible"
    verify.style.transition = "0.5s"

    if (username == ""){
        document.getElementById("verification").style.opacity = "0"
        document.getElementById("verification").style.visibility = "hidden"
    }


    emailaddress.innerHTML = username

}

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "shanukakumari5@gmail.com",
        Password : "2FFEB40DC69C9649FAE35E2EB9859901DDE6",
        To : document.getElementById("username").value,
        From : "shanukakumari5@gmail.com",
        Subject : "Socialbook Verification Code",
        Body : "Here Is Your Socialbook Verification Code: <br>769305"
    }).then(
      message => alert(message)
    );
};


