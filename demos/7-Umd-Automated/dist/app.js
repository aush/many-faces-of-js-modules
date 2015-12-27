var app = document.getElementById('app');

var greet = lib.greet();
var hello = lib.hello();

app.appendChild(document.createTextNode(greet));
app.appendChild(document.createElement('br'));
app.appendChild(document.createTextNode(hello));