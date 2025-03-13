<?php
  // live.php - Página para transmissão ao vivo
  session_start();
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transmissão Ao Vivo</title>
    <link rel="stylesheet" href="styles.css"> <!-- Ajuste conforme seu CSS -->
</head>
<body>
    <header>
        <h1>Live Streaming</h1>
    </header>
    <main>
        <video id="liveVideo" controls autoplay>
            <source src="http://seu-servidor/live/stream.m3u8" type="application/x-mpegURL">
            Seu navegador não suporta a reprodução ao vivo.
        </video>
    </main>
</body>
</html>
