<?php
$config = require "./config.php";
$dsn = "mysql:host=" . $config["db_host"] . ";dbname=" . $config["db_name"] . ";charset=utf8";
$dbh = new PDO($dsn, $config["db_user"], $config["db_pass"]);
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
return $dbh;