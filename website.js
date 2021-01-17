// All of this code is for the validation of the contact me page
function Contact() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (firstname == '') {
        alert ("Please enter your name");
        firstname.focus()
        return false;
    }
    else if (lastname == '') {
        alert ("Please enter your last name");
        lastname.focus()
        return false;
    }
    else if (email == '') {
        alert ("Please enter a valid email");
        email.focus()
        return false;
    }
    else if (!filter.test(email)) {
        alert("Invalid email");
        return false;
    }
    else if (message == '') {
        alert ("Please enter your message");
        message.focus()
        return false;
    }
    else {
        alert("Thank you for you message, you will be contacted shortly!")
    }
}

//For the contact me page to popup a new screen
function toggleContactMe() {
  document.querySelector(".popup").classList.toggle("open");
}

/* This code is for the easter egg */
function setNewImage() {
    document.getElementById("img1").src="TUE-Logo.png";
}

function setOldImage() {
    document.getElementById("img1").src="Fontys-Logo.png";
}

/* For toggling the menu */
function toggleMenu(ref){
    document.getElementById("menu").classList.toggle('active');
  }


