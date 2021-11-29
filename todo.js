// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


function myClick(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
          var response = JSON.parse(this.responseText);
          var output = "";
          for(var i=0; i<response.length;i++){
              output += "<li id='li' class><input class='check' id='chk' onclick='countbox()' type='checkbox'><label>"+response[i].title+
  "</label><span class='close'>×</span></li>"
            }

          // Click on a close button to hide the current list item
          document.getElementById("container").innerHTML ="<ul id='myUL'>"+output+"</ul>";
          var close = document.getElementsByClassName("close");
          var i;
          for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
              var div = this.parentElement;
              div.style.display = "none";
            }
          }       
        }      
  }
  xhttp.open("GET",'https://jsonplaceholder.typicode.com/todos',true);
  xhttp.send();  
}


// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  li.setAttribute("id","li");
  li.setAttribute("class","");
  var checkbox = document.createElement("input");
  var label = document.createElement("label");
  checkbox.setAttribute("type","checkbox");
  checkbox.setAttribute("class","check");
  checkbox.setAttribute("onclick","isChecked()");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li).appendChild(checkbox);
    li.appendChild(label);
    label.appendChild(t);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  var close = document.getElementsByClassName("close");

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// alert when 5 items are checked

  function countbox(){
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  if (checkboxes.length == 5) {
    alert(' Congrats. 5 Tasks have been Successfully Completed');
  } 
}

