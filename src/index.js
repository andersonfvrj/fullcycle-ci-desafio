const express = require('express');
let app = express();
const port = 3000

app.get('/', (res) => {
    res.send("<h1> A soma é: " + soma(5,2) + "</h1>");
});

function soma(x, y) {

    return x + y;

}

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})

exports.soma = soma;

