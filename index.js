const http = require('http');

// Dokploy normalmente asigna el puerto mediante variables de entorno
const PORT = process.env.PORT || 3000;

const htmlContent = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VilladaStudios - Impresión 3D</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #121212;
            color: #ffffff;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }
        .container {
            background-color: #1e1e1e;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 8px 32px rgba(0, 210, 255, 0.15);
            max-width: 650px;
            text-align: center;
            border-top: 5px solid #00d2ff;
        }
        h1 {
            color: #00d2ff;
            margin-bottom: 5px;
            letter-spacing: 1px;
        }
        h2 {
            font-size: 1.1rem;
            color: #aaaaaa;
            margin-bottom: 25px;
            font-weight: 400;
        }
        p {
            line-height: 1.6;
            margin-bottom: 25px;
            font-size: 1.05rem;
        }
        .products {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            justify-content: center;
            margin-bottom: 35px;
        }
        .badge {
            background-color: #2a2a2a;
            color: #00d2ff;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            border: 1px solid rgba(0, 210, 255, 0.3);
            transition: all 0.3s ease;
        }
        .badge:hover {
            background-color: #00d2ff;
            color: #121212;
        }
        .socials {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }
        .socials a {
            color: #ffffff;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s;
            padding: 5px 10px;
            border-radius: 5px;
            background-color: #333;
        }
        .socials a:hover {
            color: #121212;
            background-color: #00d2ff;
        }
        .footer {
            margin-top: 35px;
            font-size: 0.85rem;
            color: #555;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>VilladaStudios</h1>
        <h2>Impresión 3D y Diseño Personalizado | Armenia, Quindío</h2>
        
        <p>Transformamos ideas en realidad utilizando tecnología de impresión FDM en PLA de alta calidad. Desde piezas exclusivas hasta tus personajes favoritos de la cultura pop.</p>
        
        <div class="products">
            <span class="badge">Dragones Articulados</span>
            <span class="badge">Materas Personalizadas</span>
            <span class="badge">Escudos Deportivos</span>
            <span class="badge">Chimuelo & Furia Luminosa</span>
            <span class="badge">Deadpool & Wolverine</span>
            <span class="badge">One Piece</span>
        </div>

        <div class="socials">
            <a href="https://wa.me/573104254209" target="_blank">📱 +57 3104254209</a>
            <a href="https://instagram.com/VilladaStudios" target="_blank">📸 Instagram</a>
            <a href="https://tiktok.com/@VilladaStudios" target="_blank">🎵 TikTok</a>
            <a href="#" target="_blank">📘 Facebook</a>
        </div>
        
        <div class="footer">
            Manufacturado con Creality Ender 3 V3 • Desplegado en Dokploy
        </div>
    </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    // Configurar los encabezados para devolver HTML
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(htmlContent);
});

server.listen(PORT, () => {
    console.log(\`Servidor de VilladaStudios corriendo en el puerto \${PORT}\`);
});