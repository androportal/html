var request=null;
var queryString;   //will hold the POSTed data
var hostname=window.location.host;
var demoCode = new Array();
var clicked = false;
var x; 
var y;
var element;
var Xoffset;
var Yoffset;
var filename="";
var flag_save=0;
var filename1="";
var flag_save1=0;
reg = new RegExp("([0-9]*)px", "i");


demoCode[0]=null;

function clearForm(){
	myCodeMirror.setValue("");
        request=null;
        queryString=""; 
	document.sciForm.graphicsmode.checked=false;
}

function executeCode(){
	
    	flag_save=0;
    	flag_save1=0;
	document.getElementById('execute').src="execute.gif";
    	setQueryString();
    	var url="http://"+hostname+"/cgi-bin/scilab.cgi";
    	httpRequest("POST",url,true);
}

//event handler for XMLHttpRequest
function handleResponse(){
	if(request.readyState == 4){
		if(request.status == 200){
			window.status="Done.";
			results = eval('(' + request.responseText + ')'); 
			result="Done.";
			result=results.output;
			result=result.replace(/exit();/g,"");
			error=results.error;
			image=results.image;
			if (error){
 				document.getElementById('execute').src="e1.png";
				/*lekha's addtion for reloading shellinabox webview*/
				android.reloadConsole();
				/*lekha's addition ends*/
        			return;
			}
			if (image){
				/*lekha's addtion for reloading shellinabox webview and displaying plot in imageview*/
				android.showPlot();
				document.getElementById('execute').src="e1.png";
				android.reloadConsole();
				/*lekha's addition ends*/
			}
			else{
				document.getElementById('execute').src="e1.png";
				/*lekha's addtion for reloading shellinabox webview*/
				android.reloadConsole();
				/*lekha's addition ends*/
				
			}
 			document.getElementById('execute').src="e1.png";
		}
		else {
	            alert("A problem occurred with communicating between the XMLHttpRequest object and the server program:"+request.statusText+" Code: "+request.status);
 		document.getElementById('execute').src="e1.png";//Hide the progressbar gif
	      	}
	}
	flag_save=0;
	flag_save1=0;

}


/* Initialize a Request object that is already constructed */

function initReq(reqType,url,bool){	
    request.onreadystatechange=handleResponse;               /* Specify the function that will handle the HTTP response */
    request.open(reqType,url,bool);
    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");   /* Only works in Mozilla-based browsers */
    request.send(queryString);
}

/* Wrapper function for constructing a Request object.
 Parameters:
  reqType: The HTTP request type such as GET or POST.
  url: The URL of the server program.
  asynch: Whether to send the request asynchronously or not. */

function httpRequest(reqType,url,asynch)
{
    if(window.XMLHttpRequest){					//Mozilla-based browsers
        request = new XMLHttpRequest();
    } else if (window.ActiveXObject){
        request=new ActiveXObject("Msxml2.XMLHTTP");
        if (! request){
            request=new ActiveXObject("Microsoft.XMLHTTP");
        }
     }
    if(request){							//the request could still be null if neither ActiveXObject
       initReq(reqType,url,asynch);					//initializations succeeded
    
    }  else {
        alert("Your browser does not permit the use of all of this application's features!");}
}

function setQueryString(){
    queryString="";
    code=encodeURIComponent(myCodeMirror.getValue());
    graphicsmode=document.sciForm.graphicsmode.checked ?document.sciForm.graphicsmode.value: 0; 
    queryString = "code="+code+"&graphicsmode="+graphicsmode+"&flag_save="+flag_save+"&filename="+filename+"&flag_save1="+flag_save1+"&filename1="+filename1;
  
}
function showHelp(){
	helpwin.show();return false
     
}
function makepage(src){
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

function saveImg(){
	filename=prompt("Enter the name of the image to be saved: ","new_image");	
	flag_save=1;
	setQueryString();
        var url="http://"+hostname+"/cgi-bin/scilab.cgi";
        httpRequest("POST",url,true);
	alert("Image saved to SdCard/APL/scilab/image/"+filename);
}

function savecode(){
	filename1=prompt("Enter the name of the code file to be saved: ","new_file");	
	flag_save1=1;
	setQueryString();
        var url="http://"+hostname+"/cgi-bin/scilab.cgi";
        httpRequest("POST",url,true);
	alert("File saved to SdCard/APL/scilab/code/"+filename1);
}

/*---- reads the file and puts it to the editor ----*/
function example_file()
{

var oRequest = new XMLHttpRequest();
var sURL = "http://"+hostname+"/html/scilab/exbind/.open_file.cde";
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
var sURL = "http://"+hostname+"/html/scilab/code/.open_file.cde";
oRequest.open("GET",sURL,false);
oRequest.setRequestHeader("User-Agent",navigator.userAgent);
oRequest.send(null);
if (oRequest.status==200)
{
myCodeMirror.setValue(oRequest.responseText);
}
else alert("Error executing XMLHttpRequest call!");
}


