
//Object Constructor
class User {
    constructor(email, password, firstName, lastName, age, address, phoneNumber, payment, color) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.payment = payment;
        this.color = color;

    }
}


////////////////////////////////////////////////////////////////////////////////////
//
//Validating information (not blank)
//return false when the user is not valid
//retunr True whien the user is valid
////////////////////////////////////////////////////////////////////////////////////
function isValid(user){
let valid=true;
    if(user.email.length==0){
    valid=false;
    console.log("Please add an email");
    $("#txtEmail").addClass("input-error");
    }
    if(user.password.length==0){
        valid=false;
        console.log("Please add a password");
        $("#txtPassword").addClass("input-error");
    }
    if(user.payment.length==0){
        valid=false;
        console.log("Please add a payment");
        $("#txtPayment").addClass("input-error");
        }
        if(user.address.length==0){
            valid=false;
            console.log("Please add an address");
            $("#txtAddress").addClass("input-error");
        }   
    return valid;
}




//Register function
function register(){
    let userName = $("#txtEmail").val();
    let userPassword = $("#txtPassword").val();
    let userFirstName = $("#txtFirstName").val();
    let userLastName = $("#txtLastName").val();
    let userAge = $("#txtAge").val();
    let userAddress = $("#txtAddress").val();
    let userPhoneNumber = $("#txtPhoneNumber").val();
    let userPayment = $("#txtPayment").val();
    let userColor = $("#txtColor").val();

    console.log(userName,userPassword,userFirstName,userLastName,userAge,userAddress,userPhoneNumber,userPayment,userColor);

    ///////////////////////////////////////////////////////////////////////////
    // Creating the object
    ///////////////////////////////////////////////////////////////////////////
    let newUser = new User(userName,userPassword,userFirstName,userLastName,userAge,userAddress,userPhoneNumber,userPayment,userColor);

    ///////////////////////////////////////////////////////////////////////////
    // Is the user valid?
    ///////////////////////////////////////////////////////////////////////////
    if(isValid(newUser)==true){
       //console.log(newUser);
       saveUser(newUser);
    ///////////////////////////////////////////////////////////////////////////
    // Clear the inputs
    ///////////////////////////////////////////////////////////////////////////
    $('input').val("");
    }
}



function init(){
    console.log("Register");

    //Hook events
    $("#btbRegister").click(register);
    $("#txtLastName").keypress(function(e){
        if(e.key=="Enter"){
            register();
        }
    });
        

}


window.onload=init;