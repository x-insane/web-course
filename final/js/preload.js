window.progress = 0;

// 加载中进度条
;(function() {
	var offset = 100;
	setTimeout(function loop() {
		var attr = 120 * offset / 10000 * 60 + 22 + "px";
		var colorful = document.getElementsByClassName("colorful")[0];
		colorful.style.top = attr;
		colorful.style.backgroundPositionY = "-" + attr;
		if (offset >= 100 - window.progress)
			offset -= 5;
		if (offset >= 0)
			setTimeout(loop, 50)
		else {
			document.getElementsByClassName("preload")[0].style.display = "none"
			document.getElementsByClassName("nav-header")[0].style.display = ""
			document.getElementsByClassName("main-content")[0].style.display = ""
		}
	}, 50);
})();

;(function() {
	var list = [
		"./img/preload-gray.png",
		"./img/preload-colorful.png"
	];
	var load_number = 0
	window.preloadList = []
	function onload() {
		load_number ++;
		if (load_number === 2)
			document.getElementsByClassName("preload")[0].style.display = ""
	}
	function preloadImg(url) {
	    var img = new Image();
	    img.src = url;
	    window.preloadList.push(img) // 防止被回收
	    if (img.width)
	    	onload();
	    else
	        img.onload = onload;
	}
	list.forEach(function(img) {
		preloadImg(img)
	})
})();

// 部分资源预加载
;(function() {
	var list = [
		"./img/cover.jpg",
		"./img/culture/3oALuHdHo20.jpg",
		"./img/culture/4bfab1e8b9e0.jpg",
		"./img/culture/4ofyfvnky4307310.jpg",
		"./img/culture/9f510fb30f2442.jpg",
		"./img/culture/l8c2f6e4e4.jpg",
		"./img/culture/wKgBEFtehyqAd.jpg",
		"./img/education/28150809gulh.jpg",
		"./img/education/2018424145656626.jpg",
		"./img/history/5c33bba84681fe.jpg",
		"./img/history/6cafe0e4ga4afca.jpg",
		"./img/history/3834927614.jpg",
		"./img/history/hiq9j3v6r.jpg",
		"./img/history/W020150618372.jpg",
		"./img/history/wocm5568d4.jpg"
	];
	var load_number = 0
	function onload() {
		load_number ++;
		// console.log("load " + load_number + "/" + list.length)
		if (load_number == list.length)
			window.progress = 100
		else
			window.progress = 100 * load_number / list.length
	}
	function preloadImg(url) {
	    var img = new Image();
	    img.src = url;
	    window.preloadList.push(img) // 防止被回收
	    if (img.width)
	    	onload();
	    else
	        img.onload = onload;
	}
	list.forEach(function(img) {
		preloadImg(img)
	})
})();