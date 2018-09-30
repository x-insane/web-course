(function() {
	"use strict";

	(function() {
		var action = document.querySelector(".page-sort textarea[name=input]")
		var output_in = document.getElementById("sort-output-in")
		var output_out = document.getElementById("sort-output-out")
		action.addEventListener('keyup', function() {
			var list = this.value.match(/[-+]?[0-9]*\.?[0-9]+/g)
			if (list === null)
				return
			var input = preTransform(list)
			output_in.innerHTML = input.join(", ")
			output_out.innerHTML = quickSort(input).join(", ")
		})
		
		// 预处理：将字符串转化为内置浮点数
		function preTransform(arr) {
			return arr.map(function(e) {
				return parseFloat(e)
			})
		}

		// 快速排序
		function quickSort(arr) {
			if (arr.length <= 1)
				return arr
			var pivotIndex = Math.floor(arr.length / 2)
			var pivot = arr.splice(pivotIndex, 1)[0]
			var left = []
			var right = []
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] < pivot)
					left.push(arr[i])
				else
					right.push(arr[i])
			}
			return quickSort(left).concat([pivot], quickSort(right))
		}
		window.quickSort = quickSort // 暴露给全局
	})();

	(function() {
		// 每秒改变一次颜色
		var list = document.querySelectorAll(".page-movie .section-content h4")
		var total = list.length
		var i = -1
		setTimeout(function loop() {
			setTimeout(loop, 1000)
			if (i >= 0)
				list[i].style.color = null
			i = (i + 1) % total
			list[i].style.color = "red"
		}, 1000)
	})();

	(function() {
		// DOM版：绑定第一个电影图片
		var action = document.querySelector(".section-circle img")
		action.style.cursor = "pointer"
		action.addEventListener('click', function() {
			var list = document.querySelectorAll(".page-movie .section-content h4")
			var movies = []
			for (var i=0;i<list.length;++i)
				movies.push(list[i].innerHTML)
			alert(movies.reverse())
		})
	})();

	(function() {
		// prototype.js版：绑定第二个电影图片
		var action = $$(".section-circle img")[1]
		action.setStyle({
			cursor: "pointer"
		})
		action.observe('click', function() {
			var movies = []
			$$(".page-movie .section-content h4").each(function(e) {
				movies.push(e.innerHTML)
			})
			alert(movies.reverse())
		})
	})()
		
})()