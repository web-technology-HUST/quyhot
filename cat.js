// var cat = {
// 	name: "hen",
// 	sex: "male"
// }
function cat(name){
	this.name = name;
	this.stomach = [];
}

cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
}

module.exports = Cat;
// var array = [1, 2, 3];