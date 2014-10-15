var CatAdv = function (name) {
	this.name = name;
	this.saying = 'meow';
}
.inherits(Mammal)
.method('purr', function (n) {
	var i, s = '';
	for (i = 0; i < n; i += 1) {
		if (s) {
			s += '-';
		}
		s += 'r';
	}
	return s;
})
.method('get_name', function ( ) {
	return this.says( ) + ' ' + this.name + ' ' + this.says( );
});