var heading = document.querySelector('h1');
var button = document.querySelector('button');
button.onclick = function(){
    var name = prompt('Enter your name');
    heading.textContent = 'Hello, ' + name + '!';
}