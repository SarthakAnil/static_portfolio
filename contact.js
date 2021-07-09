
//UNSAFE for production ENV
function sendEmail() {
	Email.send({
		Host: "smtp.gmail.com",
		Username : "saautomailer@gmail.com",
		Password : "your password goes here",
		To : 'sarthakanil47@gmail.com',
		From : document.getElementById("input-email").value,
		Subject : document.getElementById("input-subject").value,
		Body : document.getElementById("input-message").value,
	})
	.then(function(message){
		alert("mail sent successfully")
	});
}
//

function frmVal(){  
	var name=document.getElementById("input-name").value;  
	var email = document.getElementById("input-email").value;
	var	Subject = document.getElementById("input-subject").value;
	var	Body = document.getElementById("input-message").value;
	if (name=="" ){  
	  alert("Name can't be blank");  
	  return false;  
	}
	if(email==""){  
		alert("email can't be blank");  
		return false;  
	  }
	 if(Subject==""){  
		alert("Subject can't be blank");  
		return false;  
		}
	if(Body==""){  
		alert("Body can't be blank");  
		return false;  
			}
	sendEmail()
	}  