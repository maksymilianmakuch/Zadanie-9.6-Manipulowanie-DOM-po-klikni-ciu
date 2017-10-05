/*function addItem () {
var ul = document.getElementById('list');
var newElem = document.createElement('li');
ul.appendChild(newElem);
}
*/

var list = document.getElementById('list');
var add = document.getElementById('addElem');
var tagName = document.getElementsByTagName('li');
addElem.addEventListener('click', function(){
	var element = document.createElement('li');
	element.innerHTML = 'item ' + tagName.length;
	console.log(tagName.length);
	list.appendChild(element);
});
