var request=null;
var queryString;   //will hold the POSTed data
var hostname=window.location.host;
var demoCode = new Array();
var filename1="";
var flag_save1=0;
demoCode[0]="";
demoCode[1]='#include <iostream>\nusing namespace std;\nint main()\n{cout << "Hello World!" << endl;\n cout << "Welcome to C++ Programming"\n << endl;}';
demoCode[2]='#include <iostream>\nusing namespace std;\nint main()\n{\n int a=5, b=8, total ;\n  total = a + b ;\ncout <<"The sum is"<< total << endl;\n  return 0;\n}';


demoCode[3]='#include <iostream>\n#include <cstdlib>\n#include <ctime>\nusing namespace std;\nint RollDie();\nint main()\n{srandom(time(NULL));\n   int  outcome = RollDie();\n   cout << "\\n"<<outcome << endl;\n   outcome = RollDie();\n  cout <<outcome << endl;\nreturn 0;\n}\nint RollDie() \n{  int randomNumber, die;\n  randomNumber = random();\n   die = 1 + randomNumber % 6;\n   return die;}';



demoCode[4]='#include <iostream>\n#define VIEW \'$\'\nusing namespace std;\nint main(void)\n{\nint i, j;\ncout<<"Money pyramid!\\n"<<endl;\nfor(i=1; i<=35; i++)\n{for(j=1; j<=35-i; j++)\ncout<<" ";\nfor(j=1; j<=2*i-1; j++)\ncout<<VIEW;\ncout<<"\\n";}\nreturn 0;\n}';
function clearForm(){
	myCodeMirror.setValue("");        
	request=null;
        queryString=""; 
}
function executeCode(){
	
	flag_save1=0;
	document.getElementById('execute').src="execute.gif";
   	 setQueryString();
   	 var url="http://"+hostname+"/cgi-bin/cpp.cgi";
   	 httpRequest("POST",url,true);
	
}

//event handler for XMLHttpRequest
function handleResponse()
{
	if(request.readyState == 4)
	{
		if(request.status == 200)
		{
			
			window.status="Done.";
			results = eval('(' + request.responseText + ')'); 
			result="Done.";
			result=results.output;
			result=result.replace(/exit();/g,"");
			error=results.error;
			image=results.image;
			if (error)
			{ 
				/*lekha's addtion for reloading shellinabox webview*/
				android.reloadConsole();
				/*lekha's addition ends*/
				return;
			}
			document.getElementById('execute').src="e1.png";
			/*lekha's addtion for reloading shellinabox webview*/
			android.reloadConsole();
			/*lekha's addition ends*/
		}
		else
		{
			alert("A problem occurred with communicating between the XMLHttpRequest object and the server 	program:"+request.statusText+" Code: "+request.status);

	      	}
	}//end outer if
	flag_save1=0;

}


/* Initialize a Request object that is already constructed */
function initReq(reqType,url,bool)
{
    /* Specify the function that will handle the HTTP response */
    request.onreadystatechange=handleResponse;
    request.open(reqType,url,bool);
    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
    /* Only works in Mozilla-based browsers */
    //request.overrideMimeType("text/XML");
    request.send(queryString);
}

/* Wrapper function for constructing a Request object.
 Parameters:
  reqType: The HTTP request type such as GET or POST.
  url: The URL of the server program.
  asynch: Whether to send the request asynchronously or not. */

function httpRequest(reqType,url,asynch)
{
	//Mozilla-based browsers
	if(window.XMLHttpRequest)
	{
		request = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		request=new ActiveXObject("Msxml2.XMLHTTP");
		if (! request)
		{
			request=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	//the request could still be null if neither ActiveXObject
	//initializations succeeded
	if(request)
	{
		initReq(reqType,url,asynch);
	}
	else
	{
		alert("Your browser does not permit the use of all of this application's features!");
	}
}

function setQueryString()
{
	queryString="";
	code=encodeURIComponent(myCodeMirror.getValue());
	graphicsmode=document.sciForm.graphicsmode.checked ?document.sciForm.graphicsmode.value: 0; 
	queryString = "code="+code+"&graphicsmode="+graphicsmode+"&flag_save1="+flag_save1+"&filename1="+filename1;
}

function makepage(src)
{
	// We break the closing script tag in half to prevent
	// the HTML parser from seeing it as a part of
	// the *main* page.
	return "<html>\n" +
    "<head>\n" +
    "<title>W3 Scilab - NRCFOSS,India</title>\n" +
    "<script>\n" +
    "function step1() {\n" +
    "  setTimeout('step2()', 10);\n" +
    "}\n" +
    "function step2() {\n" +
    "  window.print();\n" +
    "  window.close();\n" +
    "}\n" +
    "</scr" + "ipt>\n" +
    "</head>\n" +
    "<body onLoad='step1()'>\n" +
    "<img src='" + src + "'/>\n" +
    "</body>\n" +
    "</html>\n";
}

function savecode(){
	filename1=prompt("Enter the name of the code file to be saved: ","new_file");	
	flag_save1=1;
	setQueryString();
        var url="http://"+hostname+"/cgi-bin/cpp.cgi";
        httpRequest("POST",url,true);
	alert("File saved to SdCard/APL/cpp/code"+filename1);
}


/*---- reads the file and puts it to the editor ----*/
function example_file()
{

var oRequest = new XMLHttpRequest();
var sURL = "http://"+hostname+"/html/cpp/exbind/.open_file.cpp";
oRequest.open("GET",sURL,false);
oRequest.setRequestHeader("User-Agent",navigator.userAgent);
oRequest.send(null);
if (oRequest.status==200)
{
myCodeMirror.setValue(oRequest.responseText);
}
else alert("Error executing XMLHttpRequest call!");
}

function submit_file()
{

var oRequest = new XMLHttpRequest();
var sURL = "http://"+hostname+"/html/cpp/code/.open_file.cpp";
oRequest.open("GET",sURL,false);
oRequest.setRequestHeader("User-Agent",navigator.userAgent);
oRequest.send(null);
if (oRequest.status==200)
{
myCodeMirror.setValue(oRequest.responseText);
}
else alert("Error executing XMLHttpRequest call!");
}
