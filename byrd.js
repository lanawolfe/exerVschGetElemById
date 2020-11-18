var h = document.createElement("H1"); 
var t = document.createTextNode("Hello Class"); 
h.appendChild(t); 

document.body.appendChild(h); 

function createH1Element(text)
{
var h = document.createElement("H1");
var t = document.createTextNode("I think I might be getting it");
h.appendChild(t);
document.body.appendChild(h);
}
createH1Element("First H1");


