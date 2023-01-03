const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Ruta raiz')
} )

app.get('/otra', (req, res) => {
    res.send('otra')
})

app.listen(8080, ()=> {
    console.log('Server running')
})