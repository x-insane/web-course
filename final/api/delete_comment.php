<?php
header("Content-Type: application/json; charset=UTF-8");

try {
	$dbh = require "./Db.php";
	$stmt = $dbh->prepare("UPDATE message SET delete_time = NOW() WHERE id = :id AND salt = :salt");
	$stmt->bindValue(':id', $_POST["id"]);
	$stmt->bindValue(':salt', $_POST["salt"]);
	$stmt->execute();
	echo json_encode([
		"error" => 0
	]);
} catch (PDOException $e) {
	echo json_encode([
		"error" => 1,
		"msg"   => $e->getMessage()
	]);
}