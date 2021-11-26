function validate(callback)
	{
        console.log("Hi");

        var username= document.getElementById("u_name").value;
        var pwd= document.getElementById("pwd").value;  
        
            
    
            if(username.trim()==""||pwd.trim()==""){
                alert("Fields cannot be empty");
                
            }
           
            else if(username == "admin" && pwd == "12345"){
            
                loginpage();
                
            }
            else{
                console.log("login failed");

                alert("Invalid");
            }
                
    }
    function loginpage(){
        window.open("./todo.html")

    }
    