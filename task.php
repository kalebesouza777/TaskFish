<?php

// Simulação de banco de dados de tarefas
$tasks = [
    ['id' => 1, 'task' => 'Estudar HTML', 'dueDate' => '2024-04-25'],
    ['id' => 2, 'task' => 'Fazer compras', 'dueDate' => '2024-04-26'],
    ['id' => 3, 'task' => 'Preparar relatório', 'dueDate' => '2024-04-27']
];

// Manipulação das requisições
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $tasks[] = ['id' => count($tasks) + 1, 'task' => $data['task'], 'dueDate' => $data['dueDate']];
    echo json_encode(['status' => 'success']);
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode($tasks);
}
?>
