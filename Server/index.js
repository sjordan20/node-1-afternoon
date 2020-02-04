const express = require('express')
let products = require('../products.json')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')


const app = express()

const port = 5555

app.get('/api/products', getProducts)

app.get('/api/product/:id', getProduct)



app.listen(port, () => {
    console.log(`Am I working ${port}`)
})