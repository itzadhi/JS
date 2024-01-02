//Resume Json format
let json = '{"name":"John", "age":30, "occupation":"software engineer"}';

let strJson = JSON.parse(json);

//iterate over all loops
for(let [key, value] of Object.entries(strJson)){
  console.log(key, value);
}

for(let i in strJson){
  console.log(i, strJson[i]);
}

Object.keys(strJson).forEach(function(key) {
  console.log(key, strJson[key]);
});

//Difference between Document Object and Window object?

// Document Object:
// The document object represents a web page that is loaded in the browser. By accessing the document object, we can access the element in the HTML page. With the help of document objects, we can add dynamic content to our web page. The document object can be accessed with a window.document or just document.

// Syntax:

// document.property_name;

// Eg:-addEventListener()

// Window Object
// The window object is the topmost object of the DOM hierarchy. It represents a browser window or frame that displays the contents of the webpage. Whenever a window appears on the screen to display the contents of the document, the window object is created. 

// Syntax:

// window.property_name;

// Eg:-Closed
