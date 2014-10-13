Function.prototype.method = function(name, func) {
	//if (!this.prototype[name]) //add this line to add a method only if the method is known to be missing
	this.prototype[name] = func;
	//return this;
}

Number.method('integer', function() {
	return Math[this < 0 ? 'ceil' : 'floor'](this);
});

String.method('trim', function() {
	return this.replace(/^\s+|\s+$/g, '');
});

// Define a walk_the_DOM function that visits every
// node of the tree in HTML source order, starting
// from some given node. It invokes a function,
// passing it each node in turn. walk_the_DOM calls
// itself to process each of the child nodes.
var walk_the_DOM = function walk(node, func) {
	func(node);
	node = node.firstChild;
	while(node) {
		walk(node, func);
		node = node.nextSibling;
	}
}

// Define a getElementsByAttribute function. It
// takes an attribute name string and an optional
// matching value. It calls walk_the_DOM, passing it a
// function that looks for an attribute name in the
// node. The matching nodes are accumulated in a
// results array.
var getElementsByAttribute = function (att, value) {
	var results = [];
	walk_the_DOM(document.body, function (node) {
		var actual = node.nodeType === 1 && node.getAttribute(att);
		if (typeof actual === 'string' && (actual === value || typeof value !== 'string')) {
			results.push(node);
		}
	});
	return results;
};

// Define a function that sets a DOM node's color
// to yellow and then fades it to white.
var fade = function (node) {
	var level = 1;
	var step = function () {
		var hex = level.toString(16);
		node.style.backgroundColor = '#FFFF' + hex + hex;
		if (level < 15) {
			level += 1;
			setTimeout(step, 100);
		}
	};
	setTimeout(step, 100);
};


// Function.method('curry', function () {
// 	var args = arguments, that = this;
// 	return function () {
// 		return that.apply(null, args.concat(arguments));
// 	};
// }); // Something isn't right...

Function.method('curry', function ( ) {
	var slice = Array.prototype.slice,
	args = slice.apply(arguments),
	that = this;
	return function ( ) {
		return that.apply(null, args.concat(slice.apply(arguments)));
	};
});

var add1 = add.curry(1);
console.log(add1(6)); // 7