
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

//alert('test');

/*document.querySelector('html').onclick=function() {
    alert('clicked');
}*/

document.querySelector('button').onclick=function() {
    var name = prompt('clicked');
    alert(name);
}