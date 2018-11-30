<?php
header("Content-Type: application/json; charset=UTF-8");

try {
	$dbh = require "./Db.php";
	$stmt = $dbh->prepare("INSERT INTO message (name, content, salt, public) VALUES (:name, :content, :salt, :public)");
	$stmt->bindValue(':name', $_POST["name"]);
	$stmt->bindValue(':content', $_POST["content"]);
	$stmt->bindValue(':salt', $_POST["salt"]);
	$stmt->bindValue(':public', (isset($_POST["private"]) && $_POST["private"]) ? 0 : 1);
	$stmt->execute();
	$id = $dbh->lastInsertId();
	$message = $dbh->query("SELECT * FROM message WHERE id = $id")->fetchAll(PDO::FETCH_CLASS)[0];
	$message->name = htmlspecialchars($message->name);
	$message->content = nl2br(htmlspecialchars($message->content));
	$message->deleteable = $message->salt == $_POST["salt"];
	unset($message->salt);
	$message->public = $message->public == "1" ? true : false;
	echo json_encode([
		"error"   => 0,
		"message" => $message
	]);
} catch (PDOException $e) {
	echo json_encode([
		"error" => 1,
		"msg"   => $e->getMessage()
	]);
}