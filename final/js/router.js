;(function() {
	"use strict"

	// hash路由 - 简单单层路由
	function route() {
		var pages = document.getElementsByClassName("router-page")
		var $page = "index" // 默认路由
		if (location.hash !== "")
			$page = location.hash.substring(1)

		// 处理页面导航标记
		var tabs = document.querySelectorAll("[data-tab]")
		for (var i = 0; i < tabs.length; ++i) {
			if (tabs[i].dataset.tab === $page)
				tabs[i].dataset.active = true
			else
				delete tabs[i].dataset.active
		}

		// 处理页面内容显示
		for (var i = 0; i<pages.length; i++) {
			if (hasClass(pages[i], "page-" + $page)) {
				pages[i].style.opacity = 0
				pages[i].dataset.active = true
				var target1 = pages[i]
				setTimeout(function() {
					target1.style.opacity = 1
				}, 500)
			}
			else {
				if (pages[i].dataset.active) {
					pages[i].style.opacity = 0
					var target2 = pages[i]
					setTimeout(function() {
						delete target2.dataset.active
					}, 500)
				}
			}
		}

		// 添加body标记
		setTimeout(function() {
			document.body.dataset.page = $page
		}, 500)
	}

	// 监听路由修改
	window.addEventListener('hashchange', function() {
		route()
	})

	function hasClass(element, cls) {
		return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1
	}

	route() // 加载时启动路由
})();