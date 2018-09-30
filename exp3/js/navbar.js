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
		if (hamburger.dataset.active === "true") {
			header.dataset.navActive = false
			hamburger.dataset.active = false
			nav.className = "navbar-nav nav-list"
		} else {
			header.dataset.navActive = true
			hamburger.dataset.active = true
			nav.className = "navbar-nav navbar-collapse nav-list"
		}
	})

	// 获取滚动条位置
	function getScrollPosition(el) {
		el = el || window
		return {
			x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
			y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
		}
	}
})()