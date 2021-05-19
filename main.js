var users = [{username: "admin", password:"admin"},
            {username: "admin", password:"root"},
            {username: "root", password:"root"},
            {username: "root", password:"toor"}];

            
var enteredUsername;
var enteredPassword;
var i;

function Check()
{
    enteredUsername = document.getElementById("username").value;
    enteredPassword = document.getElementById("userpassword").value;

    for(i of users)
    {
        if((i.username == enteredUsername) && (i.password == enteredPassword))
        {
            return true;
        }
    }
}

function loginConfirm()
{
    if(Check())
    {
        window.location.replace("index.html");
    }
    
    else
    {
        alert("Hatalı Kullanıcı Adı veya Parola Girdiniz...");
    }
}
