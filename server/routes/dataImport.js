const express = require("express");
const products = require("../data/data");
const Connection = require('../index')
const ImportData = require("express").Router();


// import products file js
ImportData.post("/products", (req, res) => {
    Connection.Connection()
        .then(async (collections) => {
            const result = await collections.find((clt) => clt.collectionName === 'products').insertMany(products);
            res.json(result);
        })
        .catch(console.error)
})


// import single product
ImportData.post('/singleproduct', (req, res) => {
    const importProduct = req.body;
    Connection.Connection()
        .then(async (collections) => {
            const result = await collections.find((clt) => clt.collectionName === 'products').insertOne(importProduct);
            res.json(result);
        })
        .catch(() => {
            res.status(500)
        })
})


// import Products
ImportData.post('/order', (req, res) => {
    const ImportData = req.body
    Connection.Connection()
        .then(async (collections) => {
            const result = await collections.find((clt) => clt.collectionName === 'orders').insertOne(ImportData);
            res.json(result);
        })
        .catch(() => {
            res.status(500)
        })
})

module.exports = ImportData;