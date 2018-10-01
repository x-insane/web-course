(function() {
	"use strict"

	var header = document.getElementsByClassName("navbar-header")[0]
	var hamburger = document.getElementsByClassName("hamburger-button")[0]
	var nav = document.getElementsByClassName("navbar-nav")[0]

	window.addEventListener('scroll', function() {
		if (getScrollPosition().y === 0)
			header.className = "navbar-header"
		else
			header.className = "navbar-shrinked navbar-header"
	})

	hamburger.addEventListener('click', function() {
		navbar_event()
	})

	// 手机模式下点击主内容应收起顶部导航
	document.getElementsByClassName("app-content")[0].addEventListener('touchstart', function() {
		navbar_event(false)
	})

	// 手机模式下点击导航链接应收起顶部导航
	var links = document.querySelectorAll(".nav-list a")
	for (var i = 0; i < links.length; ++i) {
		links[i].addEventListener('click', function() {
			navbar_event(false)
		})
	}

	// 收起或展开顶部导航
	function navbar_event(collapse) {
		if (typeof collapse === "undefined")
			collapse = hamburger.dataset.active !== "true"
		if (collapse) {
			header.dataset.navActive = true
			hamburger.dataset.active = true
			nav.className = "navbar-nav navbar-collapse nav-list"
		} else {
			header.dataset.navActive = false
			hamburger.dataset.active = false
			nav.className = "navbar-nav nav-list"
		}
	}

	// 获取滚动条位置
	function getScrollPosition(el) {
		el = el || window
		return {
			x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
			y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
		}
	}
})()