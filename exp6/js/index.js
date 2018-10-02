var map = new AMap.Map('container', {
	center: [113.40891, 23.049311],
	zoom: 16
});

map.plugin(["AMap.ToolBar"], function() {
	//加载工具条
	var tool = new AMap.ToolBar();
	map.addControl(tool);    
});

map.on('click', function(e) {
	alert('[' + e.lnglat.getLng() + ', ' + e.lnglat.getLat() + ']');
});