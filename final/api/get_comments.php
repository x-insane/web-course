<?php
header("Content-Type: application/json; charset=UTF-8");

try {
	$dbh = require "./Db.php";
	$stmt = $dbh->prepare("SELECT * FROM message WHERE `delete_time` IS NULL AND (`public` = 1 OR `salt` = :salt) ORDER BY id DESC LIMIT 20");
	$stmt->execute([':salt' => $_POST["salt"]]);
	$messages = $stmt->fetchAll(PDO::FETCH_CLASS);
	foreach ($messages as &$message) {
		$message->name = htmlspecialchars($message->name);
		$message->content = nl2br(htmlspecialchars($message->content));
		$message->deleteable = $message->salt == $_POST["salt"];
		unset($message->salt);
		$message->public = $message->public == "1" ? true : false;
	}
	echo json_encode([
		"error"    => 0,
		"messages" => $messages
	]);
} catch (PDOException $e) {
	echo json_encode([
		"error" => 1,
		"msg"   => $e->getMessage()
	]);
}
