//格式化日期
Date.prototype.format = function(fmt) {
	var o = {
		"y+": this.getFullYear(),
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S+": this.getMilliseconds()
	};
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(fmt)){
			if(k == "y+")
				fmt = fmt.replace(RegExp.$1, ("" + o[k]).substr(4 - RegExp.$1.length));
			else if(k=="S+") {
				var lens = RegExp.$1.length;
				lens = lens==1?3:lens;
				fmt = fmt.replace(RegExp.$1, ("00" + o[k]).substr(("" + o[k]).length - 1,lens));
			}
			else
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		}
	}
	return fmt;
}

// 展开与收起标签
$("p>.more").click(function() {
	if (this.dataset.open) {
		$(this.parentNode).css("height", "54px")
		this.innerHTML = "展开"
		delete this.dataset.open
	}
	else {
		$(this.parentNode).css("height", this.parentNode.scrollHeight + "px")
		this.innerHTML = "收起"
		this.dataset.open = true
	}
});

// 故事页切换
$(".page-story .image-nav").click(function() {
	if ($(this).hasClass("active"))
		return
	$(".page-story .image-nav").removeClass("active")
	$(this).addClass("active")
	var src = "./img/story/" + this.dataset.image
	var $cover = $(".page-story .cover")
	var $this = $(this)
	$cover.css("opacity", 0)
	setTimeout(function() {
		// 预加载图片信息
		var $img = $('<img src="' + src + '">').bind('load', function() {
			$cover.css("background-image", "url(" + src + ")").css("opacity", 1)
		})
		if ($img[0].width)
			$img.trigger('load')
		// 加载文字
		$(".page-story .cover .content").html($this.data("text") || "")
	}, 300)
});

// 故事页默认图片
$(".page-story .image-nav.active").removeClass("active").click()

// 论坛页地图
var map = new AMap.Map('map-container', {
	center: [106.548433, 29.568745],
	zoom: 10,
	scrollWheel: false // 禁止滚轮缩放
});

// 加载地图工具条
map.plugin(["AMap.ToolBar"], function() {
	var tool = new AMap.ToolBar();
	map.addControl(tool);
});

;(function() {
	var host = "https://cq.xinsane.com";
	var status = true; // 是否能够连接到服务器
	var local_messages = []; // 本地保存的数据
	var local_message_count = 0;
	if (window.localStorage) {
		local_messages = window.localStorage.getItem("messages") || "[]";
		local_messages = JSON.parse(local_messages);
		local_message_count = window.localStorage.getItem("message_count") || "0";
		local_message_count = parseInt(local_message_count)
	}
	function save_local() {
		if (window.localStorage) {
			window.localStorage.setItem("messages", JSON.stringify(local_messages));
			window.localStorage.setItem("message_count", local_message_count);
		}
	}

	// 生成会话salt
	if (!$.cookie("salt"))
		$.cookie("salt", random(64), { expires: 3650 /*十年有效期*/ });

	// 从cookie获取name
	$("form.message-area [name=name]").val($.cookie("name") || "")

	// 公共结点
	var $target = $(".message-history .messages").html("");
	var $template = $("#message-item-template").html();
	function generate(message, t) {
		var $e =  $(t.replace("{id}", message.id)
			.replace("{name}", message.name)
			.replace("{time}", message.create_time)
			.replace("{content}", message.content)
			.replace("{private}", message.public ? "" : "仅自己可见"))
		// 可删除结点
		if (message.deleteable) {
			$e.find(".delete").html("删除").click(function() {
				if (confirm("删除不可逆，确认删除？")) {
					if (!status) {
						local_messages = local_messages.filter(function(m) {
							return m.id !== message.id
						});
						save_local();
						$e.remove();
						return
					}
					$.post(host + "/api/delete_comment.php", {
						id: message.id,
						salt: $.cookie("salt")
					}).done(function(res) {
						if (res && res.error === 0)
							$e.remove()
						else
							alert("删除失败")
					}).fail(function() {
						alert("网络有点问题哦~")
					})
				}
			})
		}
		return $e
	}

	// 获取评论数据
	$.post(host + "/api/get_comments.php", {
		salt: $.cookie("salt")
	}).done(function(res) {
		if (res && res.error === 0) {
			res.messages.forEach(function(message) {
				generate(message, $template).appendTo($target)
			})
		}
	}).fail(function() {
		// 无法获取数据
		$(".message-frame .error").html("当前无法连接到服务器，数据仅自己可见");
		status = false;
		$(".input-group.checkbox").remove();
		// 从本地加载数据
		local_messages.forEach(function(message) {
			generate(message, $template).prependTo($target)
		})
	})

	// 添加一条评论
	$("form.message-area").submit(function() {
		$.cookie("name", $("form.message-area [name=name]").val(), { expires: 3650 /*十年有效期*/ })
		if (!status) {
			var message = {
				id: local_message_count + 1,
				name: $(this).find("[name=name]").val(),
				content: $(this).find("[name=content]").val(),
				create_time: new Date().format("yyyy-MM-dd hh:mm:ss"),
				deleteable: true
			};
			$("form.message-area [name=content]").val("");
			generate(message, $template).prependTo($target);
			local_messages.push(message);
			local_message_count ++;
			save_local();
			return
		}
		$.post(host + "/api/comment.php", $(this).serialize() + "&salt=" + $.cookie("salt")).done(function(res) {
			if (res && res.error === 0)
				generate(res.message, $template).prependTo($target);
			$("form.message-area [name=content]").val("")
		}).fail(function() {
			alert("网络有点问题哦~")
		})
	})

	// 生成随机字符串
	function random(length) {
	    var $chars = 'ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	    var maxPos = $chars.length;
	    var text = '';
	    for (i = 0; i < length; i++)
	        text += $chars.charAt(Math.floor(Math.random() * maxPos));
	    return text;
	}
})();

