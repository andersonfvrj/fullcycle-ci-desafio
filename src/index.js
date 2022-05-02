const express = require('express')
const app = express()

app.get('/', (res) => {
    res.send("<h1> A soma é: " + soma(5,2) + "</h1>");
});

function soma(x, y) {

    return x + y;

}

exports.soma = soma;

