<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

try {
    $pdo = new PDO("mysql:host=localhost; dbname=clube_livro", "root", "admin25");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 


    $stmt = $pdo->prepare("SELECT nome FROM resenha_livro;"); 
    $stmt->execute();

    $itens = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($itens);
} catch (PDOException $e) {
    echo json_encode(["erro" => $e->getMessage()]);
}
?>
