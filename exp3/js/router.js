(function() {
	"use strict"

	// hash路由 - 简单单层路由
	function route() {
		var pages = document.getElementsByClassName("router-page")
		var $page = "page-sort" // 默认路由
		if (location.hash !== "")
			$page = "page-" + location.hash.substring(1)
		for (var i=0;i<pages.length;i++) {
			if (hasClass(pages[i], $page))
				pages[i].style.display = null
			else
				pages[i].style.display = "none"
		}
	}

	// 监听路由修改
	window.addEventListener('hashchange', function() {
		route()
	})

	function hasClass(element, cls) {
		return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1
	}

	route() // 加载时启动路由
})()