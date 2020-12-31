var enterbutton=document.getElementById("enter");
var input=document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
   return input.value.length;
}

function listLength(){
   return item.length;
}

function createListElement(){
   if(input.value!=""){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
   }
  /*li.onclick=function deletebutton(){
     this.parentNode.removeChild(this);
  
  }*/
  var dButton=document.createElement("button");
  dButton.appendChild(document.createTextNode("X"));
  li.appendChild(dButton);
  dButton.addEventListener("click",deleteListItem);

  function deleteListItem(){
     li.classList.add("delete");
  }

}


