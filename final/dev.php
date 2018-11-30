<?php function stamp($file) { echo filemtime('./' . $file); } ?>
<!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>我❤重庆 - 行千里，致广大</title>
	<link rel="stylesheet/less" type="text/css" href="./less/preload.less?t=<?php stamp('less/preload.less'); ?>">
	<link rel="stylesheet/less" type="text/css" href="./less/index.less?t=<?php stamp('less/index.less'); ?>">
	<script src="https://cdn.bootcss.com/less.js/3.8.1/less.min.js"></script>
</head>
<body>

<?php include("./partial/main.html"); ?>

<script src="./js/jquery.min.js"></script>
<script src="./js/jquery.cookie.min.js"></script>
<script src="https://webapi.amap.com/maps?v=1.4.10&key=b94416106f72b23dedc69c6b5443aeac"></script>
<script src="./js/router.js?t=<?php stamp('js/router.js'); ?>"></script>
<script src="./js/index.js?t=<?php stamp('js/index.js'); ?>"></script>

</body>
</html>