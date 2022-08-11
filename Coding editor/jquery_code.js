// $("#emojis span").on("click", function () {
// 	  var caretPos = $("#input")[0].selectionStart;
// 	  var textAreaTxt = $("#input").val();
// 	  var txtToAdd = $(this).text();
// 	  $("#input").val(
// 	    textAreaTxt.substring(0, caretPos) +
// 	      txtToAdd +
// 	      textAreaTxt.substring(caretPos)
// 	  );
// 	  $("#input").get(0).setSelectionRange(caretPos, caretPos);
// });
var editor = ace.edit("editor"); 
var button1=false;
var button2=false;
var button3=false;
var button4=false;

$("#button1").on("click", function () {
		editor.session.setMode("ace/mode/c_cpp");
	  	button1=true
	  	button2=false;
		button3=false;
		button4=false;
});

$("#button2").on("click", function () {
		editor.session.setMode("ace/mode/java");
	  	button2=true
		button1=false;
		button3=false;
		button4=false;
});

$("#button3").on("click", function () {
		editor.session.setMode("ace/mode/python");
	  	button3=true
		button1=false;
		button2=false;
		button4=false;
});

$("#button4").on("click", function () {
		editor.session.setMode("ace/mode/javascript");
		button4=true
		button1=false;
		button2=false;
		button3=false;
});

$(".forbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  //var txtToAdd = $(this).text();
	  //var txtToAdd ="for(int i=0;i<n;i++){}";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  //console.log("textAreaTxt ",textAreaTxt);
	  var space_num=editor.getCursorPosition().column;
	  if(button1==true){
	  	/*txtToAdd ="for(int i=0;i<N;i++)\n{\n\t\n}\n";*/
	  	var result = " ".repeat(space_num);
	  	txtToAdd="for(int i=0;i<N;i++)\n"+result+"{\n\n"+result+"}\n";
	  }
	  else
	  if(button2==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd="for(int i=0;i<N;i++)\n"+result+"{\n\n"+result+"}\n"
	  }
	  else
	  if(button3==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd="for x in range:\n"+result+"\t"
	  	// txtToAdd ="for x in range:\n\t";
	  }
	  else
	  if(button4==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="for(int i=0;i<N;i++)\n"+result+"{\n\n"+result+"}\n";
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="for(int i=0;i<N;i++)\n"+result+"{\n\n"+result+"}\n";
	  }
	  // $("#editor").val(
	  //   textAreaTxt.substring(0, caretPos) +
	  //     txtToAdd +
	  //     textAreaTxt.substring(caretPos)
	  // );
	  // editor.setValue(textAreaTxt.substring(0, caretPos) +
	  //     txtToAdd +
	  //     textAreaTxt.substring(caretPos));
	  editor.insert(txtToAdd);
	  // console.log( $("#editor").val);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});




// $(".forbutton").on("click", function () {
// 	  var caretPos = $(".use-keyboard-input")[0].selectionStart;
// 	  var textAreaTxt = $(".use-keyboard-input").val();
// 	  //var txtToAdd = $(this).text();
// 	  //var txtToAdd ="for(int i=0;i<n;i++){}";
// 	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
// 	  var txtToAdd;
// 	  if(button1==true){
// 	  	txtToAdd ="for(int i=0;i<N;i++)\n{\n\t\n}\n";
// 	  }
// 	  else
// 	  if(button2==true){
// 	  	txtToAdd ="for(int i=0;i<N;i++)\n{\n\t\n}\n";
// 	  }
// 	  else
// 	  if(button3==true){
// 	  	txtToAdd ="for x in range:\n\t";
// 	  }
// 	  else
// 	  if(button4==true){
// 	  	txtToAdd ="for(let i=0;i<N;i++)\n{\n\t\n}\n";
// 	  }
// 	  else{
// 	  	txtToAdd ="for(int i=0;i<N;i++)\n{\n\t\n}\n";
// 	  }
// 	  $(".use-keyboard-input").val(
// 	    textAreaTxt.substring(0, caretPos) +
// 	      txtToAdd +
// 	      textAreaTxt.substring(caretPos)
// 	  );
// 	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
// });

$(".whilebutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="while(i<n){}";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="while(i<N)\n"+result+"{\n"+result+"    i++;\n"+result+"}\n";
	  }
	  else
	  if(button2==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="while(i<N)\n"+result+"{\n"+result+"    i++;\n"+result+"}\n";
	  }
	  else
	  if(button3==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="while i<n:\n"+result+"    i=i+1";
	  }
	  else
	  if(button4==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="while(i<N)\n"+result+"{\n"+result+"    i++;\n"+result+"}\n";
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="while(i<N)\n"+result+"{\n"+result+"    i++;\n"+result+"}\n";
	  }
	  // $(".use-keyboard-input").val(
	  //   textAreaTxt.substring(0, caretPos) +
	  //     txtToAdd +
	  //     textAreaTxt.substring(caretPos)
	  // );
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".dowhilebutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	// txtToAdd ="do\n{\n\ti++;\n}while(i<N)\n";
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="do\n"+result+"{\n"+result+"    i++;\n"+result+"}while(i<N);";
	  }
	  else
	  if(button2==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="do\n"+result+"{\n"+result+"    i++;\n"+result+"}while(i<N);";
	  }
	  else
	  if(button3==true){
	  	txtToAdd ="";
	  }
	  else
	  if(button4==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="do\n"+result+"{\n"+result+"    i++;\n"+result+"}while(i<N);";
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="do\n"+result+"{\n"+result+"    i++;\n"+result+"}while(i<N);";
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".cinbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	txtToAdd ="cin>>i;\n";
	  }
	  else
	  if(button2==true){
	  	txtToAdd ="Scanner i = new Scanner(System.in);\n";
	  }
	  else
	  if(button3==true){
	  	txtToAdd ="i=input()\n";
	  }
	  else
	  if(button4==true){
	  	txtToAdd ="var i=prompt();\n";
	  }
	  else{
	  	txtToAdd ="cin>>i;\n";
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});


$(".coutbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	txtToAdd ="cout<<i;\n";
	  }
	  else
	  if(button2==true){
	  	txtToAdd ="System.out.println(i);\n";
	  }
	  else
	  if(button3==true){
	  	txtToAdd ="print(i)\n";
	  }
	  else
	  if(button4==true){
	  	txtToAdd ="console.log(i);\n";
	  }
	  else{
	  	txtToAdd ="cout<<i;\n";
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});


$(".ifbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="if(condition)\n"+result+"{\n"+result+"    \n"+result+"}";
	  }
	  else
	  if(button2==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="if(condition)\n"+result+"{\n"+result+"    \n"+result+"}";
	  }
	  else
	  if(button3==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="if i<n:\n"+result+"    ";
	  }
	  else
	  if(button4==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="if(condition)\n"+result+"{\n"+result+"    \n"+result+"}";
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="if(condition)\n"+result+"{\n"+result+"    \n"+result+"}";
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});


$(".elsebutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="else\n"+result+"{\n"+result+"    \n"+result+"}";
	  }
	  else
	  if(button2==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="else\n"+result+"{\n"+result+"    \n"+result+"}";
	  }
	  else
	  if(button3==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="else:\n"+result+"    ";
	  }
	  else
	  if(button4==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="else\n"+result+"{\n"+result+"    \n"+result+"}";
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="else\n"+result+"{\n"+result+"    \n"+result+"}";
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".intbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	txtToAdd ="int i;\n";
	  }
	  else
	  if(button2==true){
	  	txtToAdd ="int i;\n";
	  }
	  else
	  if(button3==true){
	  	txtToAdd ="i";
	  }
	  else
	  if(button4==true){
	  	txtToAdd ="int i;\n";
	  }
	  else{
	  	txtToAdd ="int i;\n";
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".floatbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	txtToAdd ="float i;\n";
	  }
	  else
	  if(button2==true){
	  	txtToAdd ="float i;\n";
	  }
	  else
	  if(button3==true){
	  	txtToAdd ="i";
	  }
	  else
	  if(button4==true){
	  	txtToAdd ="float i;\n";
	  }
	  else{
	  	txtToAdd ="float i;\n";
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

// Modify other than C++
$(".functionbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="data_type function_name()\n"+result+"{\n"+result+"    return();\n"+result+"}";
	  }
	  else
	  if(button2==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="data_type function_name()\n"+result+"{\n"+result+"    return();\n"+result+"}";
	  }
	  else
	  if(button3==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="def function_name()\n"+result+"{\n"+result+"    return();\n"+result+"}";
	  }
	  else
	  if(button4==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="function function_name()\n"+result+"{\n"+result+"    return();\n"+result+"}";
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="data_type function_name()\n"+result+"{\n"+result+"    return();\n"+result+"}";
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

// Modify other than C++
$(".switchbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="switch(condition)\n"+result+"{\n"+result+"    case case1:\n"+result+"    break;\n"+result+"    default:\n"+result+"    break;\n"+result+"}";
	  }
	  else
	  if(button2==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="switch(condition)\n"+result+"{\n"+result+"    case case1:\n"+result+"    break;\n"+result+"    default:\n"+result+"    break;\n"+result+"}";
	  }
	  else
	  if(button3==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="";
	  }
	  else
	  if(button4==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="switch(condition)\n"+result+"{\n"+result+"    case case1:\n"+result+"    break;\n"+result+"    default:\n"+result+"    break;\n"+result+"}";
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="switch(condition)\n"+result+"{\n"+result+"    case case1:\n"+result+"    break;\n"+result+"    default:\n"+result+"    break;\n"+result+"}";
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});


$(".classbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="class ClassName\n"+result+"{\n"+result+"    "+"ClassName()\n"+result+"    {\n"+result+"    \n"+result+"    }\n"+result+"\n"+result+"};";
	  }
	  else
	  if(button2==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="public class ClassName\n"+result+"{\n"+result+"    "+"public ClassName()\n"+result+"    {\n"+result+"    \n"+result+"    }\n"+result+"    "+"public static void main(String[] args)\n"+result+"    {"+"\n\n"+result+"    }"+"\n"+result+"};";
	  }
	  else
	  if(button3==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="Class Person:\n"+result+"    def __init__(self):\n"+result+"    ";
	  }
	  else
	  if(button4==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="class ClassName\n"+result+"{\n"+result+"    "+"constructor()\n"+result+"    {\n"+result+"    \n"+result+"    }\n"+result+"\n"+result+"};";
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="class ClassName\n"+result+"{\n"+result+"    "+"ClassName()\n"+result+"    {\n"+result+"    \n"+result+"    }\n"+result+"\n"+result+"};";
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".constructorbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="constructor_name()\n"+result+"{\n"+result+"    \n"+result+"}";
	  }
	  else
	  if(button2==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="public constructor_name()\n"+result+"{\n"+result+"    \n"+result+"}";
	  }
	  else
	  if(button3==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="def __init__(self):\n"+result+"    ";
	  }
	  else
	  if(button4==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="constructor()\n"+result+"{\n"+result+"    \n"+result+"}\n";
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="constructor_name()\n"+result+"{\n"+result+"    \n"+result+"}";
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});


$(".classfunctionbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="data_type function_name()\n"+result+"{\n"+result+"    return();\n"+result+"}";
	  }
	  else
	  if(button2==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="data_type function_name()\n"+result+"{\n"+result+"    return();\n"+result+"}";
	  }
	  else
	  if(button3==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="def function_name()\n"+result+"{\n"+result+"    return();\n"+result+"}";
	  }
	  else
	  if(button4==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="function function_name()\n"+result+"{\n"+result+"    return();\n"+result+"}";
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="data_type function_name()\n"+result+"{\n"+result+"    return();\n"+result+"}";
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".objectbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="ClassName ObjectName;\n"+result;
	  }
	  else
	  if(button2==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="ClassName ObjectName=new ClassName();\n"+result;
	  }
	  else
	  if(button3==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="ObjectName=ClassName()\n"+result;
	  }
	  else
	  if(button4==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="let ObjectName=new ClassName();\n"+result;
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="ClassName ObjectName;\n"+result;
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".pointertoobjectbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="ClassName *ObjectName = new ClassName();\n"+result;
	  }
	  else
	  if(button2==true){
	  	txtToAdd ="";
	  }
	  else
	  if(button3==true){
	  	txtToAdd ="";
	  }
	  else
	  if(button4==true){
	  	txtToAdd ="";
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="ClassName *ObjectName = new ClassName();\n"+result;
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".publicbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="public:\n"+result+'    ';
	  }
	  else
	  if(button2==true){
	  	txtToAdd ="public ";
	  }
	  else
	  if(button3==true){
	  	txtToAdd ="";
	  }
	  else
	  if(button4==true){
	  	txtToAdd ="";
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="public:\n"+result+'    ';
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".privatebutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="private:\n"+result+'    ';
	  }
	  else
	  if(button2==true){
	  	txtToAdd ="private ";
	  }
	  else
	  if(button3==true){
	  	txtToAdd ="__";
	  }
	  else
	  if(button4==true){
	  	txtToAdd ="";
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="private:\n"+result+'    ';
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".protectedbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="protected:\n"+result+'    ';
	  }
	  else
	  if(button2==true){
	  	txtToAdd ="protected ";
	  }
	  else
	  if(button3==true){
	  	txtToAdd ="_";
	  }
	  else
	  if(button4==true){
	  	txtToAdd ="";
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="protected:\n"+result+'    ';
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".pairbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="pair<,> var_name(,);\n"+result;
	  }
	  else
	  if(button2==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="Pair<Datatype, Datatype> p = new Pair<>(Key ,Value);\n"+result;
	  }
	  else
	  if(button3==true){
	  	txtToAdd ="";
	  }
	  else
	  if(button4==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="var objectPair = _.pairs({ num1: 10, num2: 15, num3: 20, num4: 25, num5: 30 });\n"+result;
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="pair<,> var_name(,);\n"+result;
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".vectorbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="vector<> var_name;\n"+result;
	  }
	  else
	  if(button2==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="Vector<> vec = new Vector<>();\n"+result;
	  }
	  else
	  if(button3==true){
	  	txtToAdd ="";
	  }
	  else
	  if(button4==true){
	  	txtToAdd ="";
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="vector<> var_name;\n"+result;
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".stackbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="stack<> var_name;\n"+result;
	  }
	  else
	  if(button2==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="Stack<> stk= new Stack<>();\n"+result;
	  }
	  else
	  if(button3==true){
	  	txtToAdd ="";
	  }
	  else
	  if(button4==true){
	  	txtToAdd ="";
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="stack<> var_name;\n"+result;
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".queuebutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="queue<> var_name;\n"+result;
	  }
	  else
	  if(button2==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="Queue<> q= new LinkedList<>();\n"+result;
	  }
	  else
	  if(button3==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="q = Queue(maxsize = n)\n"+result;
	  }
	  else
	  if(button4==true){
	  	txtToAdd ="";
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="queue<> var_name;\n"+result;
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".dequeuebutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="deque<> var_name;\n"+result;
	  }
	  else
	  if(button2==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="Deque<> deque = new ArrayDeque<>();\n"+result;
	  }
	  else
	  if(button3==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="queue = deque(['','',''])\n"+result;
	  }
	  else
	  if(button4==true){
	  	txtToAdd ="";
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="deque<> var_name;\n"+result;
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".listbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="list<> var_name;\n"+result;
	  }
	  else
	  if(button2==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="List<> list=new ArrayList<>();\n"+result;
	  }
	  else
	  if(button3==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="list = [ , , ]\n"+result;
	  }
	  else
	  if(button4==true){
	  	txtToAdd ="";
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="list<> var_name;\n"+result;
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".minheapbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="priority_queue<, vector<>,greater<<>> var_name;\n"+result;
	  }
	  else
	  if(button2==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="PriorityQueue minHeap=new PriorityQueue();\n"+result;
	  }
	  else
	  if(button3==true){
	  	txtToAdd ="";
	  }
	  else
	  if(button4==true){
	  	txtToAdd ="";
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="priority_queue<, vector<>,greater<<>> var_name;\n"+result;
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".maxheapbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="priority_queue<> var_name;\n"+result;
	  }
	  else
	  if(button2==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="PriorityQueue<> maxHeap = new PriorityQueue<>(Collections.reverseOrder());\n"+result;
	  }
	  else
	  if(button3==true){
	  	txtToAdd ="";
	  }
	  else
	  if(button4==true){
	  	txtToAdd ="";
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="priority_queue<> var_name;\n"+result;
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".setbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="set<> var_name;\n"+result;
	  }
	  else
	  if(button2==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd =" Set<> hash_Set = new HashSet<>();\n"+result;
	  }
	  else
	  if(button3==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="set = {, , }\n"+result;
	  }
	  else
	  if(button4==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="const set = new Set();\n"+result;
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="set<> var_name;\n"+result;
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".multisetbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="multiset<> var_name;\n"+result;
	  }
	  else
	  if(button2==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="Multiset<> multiset = HashMultiset.create();\n"+result;
	  }
	  else
	  if(button3==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="Multiset()\n"+result;
	  }
	  else
	  if(button4==true){
	  	txtToAdd ="";
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="multiset<> var_name;\n"+result;
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".mapbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="map<,> var_name;\n"+result;
	  }
	  else
	  if(button2==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="Map map=new HashMap();\n"+result;
	  }
	  else
	  if(button3==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="map(,)\n"+result;
	  }
	  else
	  if(button4==true){
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="const fruits = new Map();\n"+result;
	  }
	  else{
	  	var result = " ".repeat(space_num);
	  	txtToAdd ="map<,> var_name;\n"+result;
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".beginbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	txtToAdd =".begin()";
	  }
	  else
	  if(button2==true){
	  	txtToAdd =".firstElement()";
	  }
	  else
	  if(button3==true){
	  	txtToAdd ="";
	  }
	  else
	  if(button4==true){
	  	txtToAdd ="";
	  }
	  else{
	  	txtToAdd =".begin()";
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".endbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	txtToAdd =".end()";
	  }
	  else
	  if(button2==true){
	  	txtToAdd =".lastElement()";
	  }
	  else
	  if(button3==true){
	  	txtToAdd ="";
	  }
	  else
	  if(button4==true){
	  	txtToAdd ="";
	  }
	  else{
	  	txtToAdd =".end()";
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".insertbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	txtToAdd =".insert(pos,val)";
	  }
	  else
	  if(button2==true){
	  	txtToAdd =".insertElementAt(pos,val)";
	  }
	  else
	  if(button3==true){
	  	txtToAdd =".insert(array,object,values)";
	  }
	  else
	  if(button4==true){
	  	txtToAdd ="";
	  }
	  else{
	  	txtToAdd =".insert(pos,val)";
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});

$(".countbutton").on("click", function () {
	  var textAreaTxt = $("#editor").val();
	  var space_num=editor.getCursorPosition().column;
	  //var txtToAdd = $(this).text();
	   //var txtToAdd ="do\n{}while(i>0);";
	  //var txtToAdd ="for(int i=0;i<n;i++)\n{\n\n}";
	  var txtToAdd;
	  if(button1==true){
	  	txtToAdd =".count(vec.begin(),vec.end(),n)";
	  }
	  else
	  if(button2==true){
	  	txtToAdd ="val.getValue()";
	  }
	  else
	  if(button3==true){
	  	txtToAdd =".count(n)";
	  }
	  else
	  if(button4==true){
	  	txtToAdd ="";
	  }
	  else{
	  	txtToAdd =".count(vec.begin(),vec.end(),n)";
	  }
	  editor.insert(txtToAdd);
	  //$("use-keyboard-input").get(0).setSelectionRange(caretPos, caretPos);
});