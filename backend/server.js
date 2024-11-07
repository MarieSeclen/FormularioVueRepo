const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());


let responsesData = [];

// Ruta POST para recibir las respuestas del formulario
app.post('/api/responses', (req, res) => {
    const responses = req.body;
    console.log('Respuesta enviada:', responses);

    
    responsesData.push(responses);

    res.status(200).json({
        message: 'Respuestas enviada correctamente',
        data: responses
    });
});

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Respuestas Recibidas</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    pre { background: #f4f4f4; padding: 15px; border-radius: 5px; }
                    h1 { color: #333; }
                </style>
            </head>
            <body>
                <h1>Respuestas Recibidas</h1>
                <pre>${JSON.stringify(responsesData, null, 2)}</pre>
            </body>
        </html>
    `);
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});

