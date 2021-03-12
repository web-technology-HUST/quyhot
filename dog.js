function dog(name){
	this.name = name;
	this.stomach = [];
}
dog.prototype.eat = function(cat) {
	this.stomach.push(cat);
};

module.exports = Dog;