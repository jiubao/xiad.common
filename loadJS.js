XIAD.loadJS: function() {
	function load() {
		if (urls.length == 0) {
			callback && callback();
			return;
		}

		url = urls.shift();
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = url;

		//if(navigator.userAgent.toLowerCase().indexOf("msie") > -1) {
		if (script.readyState) {
			script.onreadystatechange = function() {
				if ((script.readyState === "loaded" || script.readyState === "complete") && !script.loaded) {
					script.onload = script.onreadystatechange = null;
					load();
				}
			}
		}
		else script.onload = function() {
			load();
			script.onload = null;
		}

		document.getElementsByTagName("head")[0].appendChild(script);
	}

	for (var urls=[], callback, i=0; i < arguments.length; i++) {
		var para = arguments[i];
		if (typeof para == "function") {
			callback = para;
			break;
		}
		urls.push(para);
	}

	load();
}

window.onload = function () {
    XIAD.loadJS('//code.jquery.com/jquery-1.11.0.min.js','/javascripts/app/desktop.min.js', XIAD.startUp);
}
