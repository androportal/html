var myCodeMirror = CodeMirror(document.getElementById("code"), {
	lineNumbers: true,
        matchBrackets: true,
        mode:  "text/x-python",
        theme:"night",
	lineWrapping: true

});
var input = document.getElementById("select");
  function selectTheme() {
    var theme = input.options[input.selectedIndex].innerHTML;
    myCodeMirror.setOption("theme", theme);
  }
  var choice = document.location.search && document.location.search.slice(1);
  if (choice) {
    input.value = choice;
    myCodeMirror.setOption("theme", choice);
}


