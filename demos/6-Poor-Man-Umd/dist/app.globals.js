var app = document.getElementById('app');

var greetings1 = lib.greetings1;
var greet = lib.greet();
var hello = lib.hello();

app.appendChild(document.createTextNode('App.globals says:'));
app.appendChild(document.createElement('br'));
app.appendChild(document.createTextNode(greetings1));
app.appendChild(document.createElement('br'));
app.appendChild(document.createTextNode(greet));
app.appendChild(document.createElement('br'));
app.appendChild(document.createTextNode(hello));