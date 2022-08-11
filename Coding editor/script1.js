
var dropdown1 = document.getElementsByClassName("dropdown-btn1");
var i;
var arrowdown=document.getElementsByClassName("fa fa-caret-down");
var arrowup=document.getElementsByClassName("fa fa-caret-up");
for (i = 0; i < dropdown1.length; i++) {
  dropdown1[i].addEventListener("click", function() {
  this.classList.toggle("active2");
  var dropdownContent = this.nextElementSibling;
  console.log("Hello");
  if (dropdownContent.style.display === "block") { 
  dropdownContent.style.display = "none";
  arrowup[0].style.display = "none";
  arrowdown[0].style.display = "block";
  } else {
  dropdownContent.style.display = "block";
  arrowdown[0].style.display = "none";
  arrowup[0].style.display = "block";
  //dropdownContent.style.display = "none";
   }
  });
}


var dropdown2 = document.getElementsByClassName("dropdown-btn2");
for (i = 0; i < dropdown2.length; i++) {
  dropdown2[i].addEventListener("click", function() {
  this.classList.toggle("active2");
  var dropdownContent = this.nextElementSibling;
  console.log("Hello");
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  arrowup[1].style.display = "none";
  arrowdown[1].style.display = "block";
  } else {
  dropdownContent.style.display = "block";
  arrowdown[1].style.display = "none";
  arrowup[1].style.display = "block";
  //dropdownContent.style.display = "none";
   }
  });
}




function openNav() {
  document.querySelector("#editor").style.marginLeft = "315px";
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("main").style.marginLeft = "315px";
  document.querySelector(".topnav").style.marginLeft = "315px";
}

function closeNav() {
  document.querySelector("#editor").style.marginLeft = "20px";
  document.getElementById("mySidenav").style.width = "0px";
  document.getElementById("main").style.marginLeft= "20px";
  document.querySelector(".topnav").style.marginLeft = "20px";
}

const ForButton=document.querySelector(".forbutton")
const WhileButton=document.querySelector(".whilebutton")
const DoWhileButton=document.querySelector(".dowhilebutton")
const CoutButton=document.querySelector(".coutbutton")
const txtarea=document.querySelector(".use-keyboard-input")

// function for_functionality(){
// 	ForButton.addEventListener("click", myFunction1);
// }
var button1=false;
var button2=false;
var button3=false;
var button4=false;
// function myFunction1(){
// 	if(button1==true){
// 		txtarea.innerHTML+="for(int i=0;i<n;i++){}";
// 	}
// 	else
// 	if(button2==true){
// 		txtarea.innerHTML+="for(int i=0;i<n;i++){}";
// 	}
// 	else
// 	if(button3==true){
// 		txtarea.innerHTML+="for x in range:";
// 	}
// 	else
// 	if(button4==true){
// 		txtarea.innerHTML+="for(let i=0;i<n;i++){}";
// 	}
// 	else{
// 		txtarea.innerHTML+="for(int i=0;i<n;i++){}";
// 	}
// }
// function myFunction2(){
// 	// txtarea.innerHTML+="while(i<n)\n{}";
// 	if(button1==true){
// 		txtarea.innerHTML+="while(i<n){}";
// 	}
// 	else
// 	if(button2==true){
// 		txtarea.innerHTML+="while(i<n){}";
// 	}
// 	else
// 	if(button3==true){
// 		txtarea.innerHTML+="while i < n:";
// 	}
// 	else
// 	if(button4==true){
// 		txtarea.innerHTML+="while(i<n){}";
// 	}
// 	else{
// 		txtarea.innerHTML+="while(i<n){}";
// 	}
// }
// function myFunction3(){
// 	// txtarea.innerHTML+="do\n{}while(i>0);";
// 	if(button1==true){
// 		txtarea.innerHTML+="do{}while(i<n);";
// 	}
// 	else
// 	if(button2==true){
// 		txtarea.innerHTML+="do{}while(i<n);";
// 	}
// 	else
// 	if(button3==true){
// 		txtarea.innerHTML+="";
// 	}
// 	else
// 	if(button4==true){
// 		txtarea.innerHTML+="do{}while(i<n);";
// 	}
// 	else{
// 		txtarea.innerHTML+="do{}while(i<n);";
// 	}
// }

// function myFunction4(){
// 	// txtarea.innerHTML+="do\n{}while(i>0);";
// 	if(button1==true){
// 		txtarea.innerHTML+="cout<<i;";
// 	}
// 	else
// 	if(button2==true){
// 		txtarea.innerHTML+="System.out.println(i);";
// 	}
// 	else
// 	if(button3==true){
// 		txtarea.innerHTML+="print(i)";
// 	}
// 	else
// 	if(button4==true){
// 		txtarea.innerHTML+="console.log(i);";
// 	}
// 	else{
// 		txtarea.innerHTML+="cout<<i;";
// 	}
// }
// ForButton.addEventListener("click", myFunction1, false);
// WhileButton.addEventListener("click", myFunction2, false);
// DoWhileButton.addEventListener("click", myFunction3, false);
// CoutButton.addEventListener("click", myFunction4, false);

document.addEventListener('DOMContentLoaded', () => {

    let myBtns1=document.querySelectorAll('.content-itinerary__buttons');
    myBtns1.forEach(function(btn) {
        btn.addEventListener('click', () => {
        	if(btn.id=="button1"){
        		button1=true
        		button2=false;
				button3=false;
				button4=false;
        	}
        	else
        	if(btn.id=="button2"){
        		button2=true
        		button1=false;
				button3=false;
				button4=false;
        	}
        	else
        	if(btn.id=="button3"){
        		button3=true
        		button1=false;
				button2=false;
				button4=false;
        	}
        	else
        	if(btn.id=="button4"){
        		button4=true
        		button1=false;
				button2=false;
				button3=false;
        	}
          myBtns1.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
 
    });
    // let myBtns2=document.querySelectorAll('.content-itinerary__buttons_b2');
    // myBtns2.forEach(function(btn) {
    //     btn.addEventListener('click', () => {
    //       myBtns2.forEach(b => b.classList.remove('active'));
    //       btn.classList.add('active');
    //     });
 
    // });
    // let myBtns3=document.querySelectorAll('.content-itinerary__buttons_b3');
    // myBtns3.forEach(function(btn) {
    //     btn.addEventListener('click', () => {
    //       myBtns3.forEach(b => b.classList.remove('active'));
    //       btn.classList.add('active');
    //     });
 
    // });
    // let myBtns4=document.querySelectorAll('.content-itinerary__buttons_b4');
    // myBtns4.forEach(function(btn) {
    //     btn.addEventListener('click', () => {
    //       myBtns4.forEach(b => b.classList.remove('active'));
    //       btn.classList.add('active');
    //     });
 
    // });

});


