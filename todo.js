// // Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// Click on a close button to hide the current list item
function myClick(){
  console.log("buttoncicked")
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
          var response = JSON.parse(this.responseText);
          var output = "";
          for(var i=0; i<response.length;i++){
              output +=  "<li id='list' class>"+response[i].title+"<span class='close'>×</span></li>";
          }
          
          document.getElementById("container").innerHTML ="<ul id='myUL'>"+output+"</ul>";
          var close = document.getElementsByClassName("close");
          var i;
          for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
              console.log("called");
              var div = this.parentElement;
              div.style.display = "none";
            }
          }
          var list = document.querySelector('ul');
          list.addEventListener('click', function(ev) {
          if (ev.target.tagName === 'LI') {
          ev.target.classList.toggle('checked');
          }
          }, false);
        }      
  }
  xhttp.open("GET",'https://jsonplaceholder.typicode.com/todos',true);
  xhttp.send();
  
}

$( document ).ready(function() {
  console.log( "document loaded" );
});


// Add a "checked" symbol when clicking on a list item
$( document ).ready(function() {
  console.log( "document loaded" );
  
});


// document.getElementById("list").addEventListener("click", function() {
//   alert("Hello World!");
// });
// function ev() {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);



// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

