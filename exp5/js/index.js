$(function() {
	"use strict"

	var items = null
	var template = $("#todo-template").html()
	var edit_id = null

	// 重置hash状态
	if (location.pathname && location.search != undefined)
		history.replaceState({}, '', location.pathname + location.search)
	else
		location.hash = ""

	$(window).on('beforeunload', function() {
		// 提示用户先保存
		if (location.hash === "#edit")
			return false
	})

	var old_scroll // 编辑时保存滚动条位置

	$(window).on("hashchange", function() {
		if (location.hash === "#edit") {
			old_scroll = $(window).scrollTop()
			$(".main-page").hide()
			$(".edit-page").show()
		} else {
			if (edit_id !== null) {
				// 保存编辑状态
				var title = $(".edit-title input").val()
				var content = $(".edit-content textarea").val()
				if (edit_id !== "new" || title.trim() !== "" || content.trim() !== "") {
					title = title || "无标题"
					if (edit_id === "new") {
						var time = new Date()
						items[guid()] = {
							title: title,
							content: content,
							time: (time.getYear()+1900) + "-" + time.getMonth() + "-" + time.getDate()
						}
					} else {
						items[edit_id].title = title
						items[edit_id].content = content
					}
					render()
				}
				edit_id = null
				save()
			}
			$(".main-page").show()
			$(".edit-page").hide()
			if (location.hash !== "#select") {
				$(".todo-item.selected").removeClass("selected")
				$(".todos").removeClass("select-frame")
				$(".add-button").show()
				$(".delete-button").hide()
				$(".select-button").hide()
				$(".main-page .return-button").hide()
			} else {
				$(".todos").addClass("select-frame")
				$(".add-button").hide()
				$(".delete-button").show()
				$(".select-button").show()
				$(".main-page .return-button").show()
			}
			// 编辑结束时恢复滚动条位置
			if (old_scroll) {
				$(window).scrollTop(old_scroll)
				old_scroll = null
			}
		}
	})

	$(window).on('keydown', function(e) {
		// Esc 键盘事件
		if (e.keyCode === 27)
			history.back()
	})

	// 过滤HTML特殊字符
	function escapeHtml(text) {
		var map = {
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;',
			'"': '&quot;',
			"'": '&#039;',
			'\n': '<br>',
			' ': '&nbsp;'
		}
		return text.replace(/[&<>"' \n]/g, function(m) { return map[m] })
	}

	// 获取随机GUID
	function guid() {
		function s4() { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1) }
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
	}

	function render() {
		var target = $("#content").html("")
		Object.keys(items).forEach(function(k) {
			var e = items[k];
			(function(t) {
				var item = $(
					t.replace("{{id}}", k)
					.replace("{{title}}", escapeHtml(e.title))
					.replace("{{content}}", escapeHtml(e.content))
					.replace("{{time}}", e.time)
				)
				item.click(function() {
					if (location.hash === "#select")
						$(this).toggleClass("selected")
					else {
						$(".edit-title input").val(e.title)
						$(".edit-content textarea").val(e.content)
						var ele = $(".edit-content textarea")[0]
						setTimeout(function() {
							// 必须要等页面显示出来之后才能正确获取scrollHeight
							ele.style.height = "auto"
							ele.style.height = ele.scrollHeight + 20 + "px"
						}, 0)
						edit_id = k
						location.hash = "edit"
					}
				})
				var timer = null
				var start = null
				item.on('touchstart', function(e) {
					start = {
						x: e.touches[0].screenX,
						y: e.touches[0].screenY
					}
					var $item = $(this)
					timer = setTimeout(function() {
						if (location.hash !== "#select") {
							$item.addClass("selected")
							location.hash = "select"
							return false
						}
					}, 400)
				})
				item.on('touchmove', function(e) {
					var point = {
						x: e.touches[0].screenX,
						y: e.touches[0].screenY
					}
					if (start) {
						if (Math.abs(point.x - start.x) > 10 || Math.abs(point.y - start.y) > 10) {
							clearTimeout(timer)
							timer = null
							start = null
						}
					}
				})
				item.on('touchend', function(e) {
					if (start) {
						clearTimeout(timer)
						timer = null
						start = null
					}
				})
				item.find(".checkbox").click(function() {
					if (location.hash !== "#select") {
						$(this).parents(".todo-item").addClass("selected")
						location.hash = "select"
						return false
					}
				})
				item.appendTo(target)
			})(template)
		})
	}

	function save() {
		// 通过localStorage保存数据到本地
		if (localStorage)
			localStorage.setItem("list", JSON.stringify(items))
	}

	$("textarea").on('keyup', function() {
		// textarea 自适应高度
		if (this.scrollHeight < window.innerHeight - 150) {
			this.style.height = "auto"
			this.style.height = this.scrollHeight + 20 + "px"
		}
	})

	$(".add-button").click(function() {
		$(".edit-title input").val("")
		$(".edit-content textarea").val("")
		edit_id = "new"
		location.hash = "edit"
	})

	$(".return-button").click(function() {
		// location.hash = ""
		history.back()
	})

	$(".delete-button").click(function() {
		$(".todo-item.selected").each(function(index, item) {
			item = $(item)
			delete items[item.data("id")]
			item.remove()
		})
		save()
	})

	$(".select-button").click(function() {
		if (location.hash !== "select")
			location.hash = "select"
		if ($(".todo-item:not(.selected)").length !== 0)
			$(".todo-item").addClass("selected")
		else
			$(".todo-item").removeClass("selected")
	})

	if (localStorage)
		items = JSON.parse(localStorage.getItem("list"))

	if (items === null) {
		$.get("./data.json")
		.done(function(data) {
			items = data
			render()
		})
		.catch(function(err) {
			console.log("网络有点问题哦~")
			items = []
		})
	} else
		render()
})