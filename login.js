function validate(callback)
	{
       
        var username= document.getElementById("u_name").value;
        var pwd= document.getElementById("pwd").value;    
    
            if(username.trim()==""||pwd.trim()==""){
                alert("Fields cannot be empty");         
            }
           
            else if(username == "admin" && pwd == "12345"){   
                callback();       
            }
           
            else{
                  alert("Invalid username or password");
            }
                
    }
    function loginpage(){
        window.open("./todo.html")

    }
    