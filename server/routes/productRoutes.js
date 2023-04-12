const express = require("express");
const asyncHandler = require('express-async-handler');
const db = require('..');
const { ObjectId } = require("mongodb");
const productRoutes = require("express").Router();

// All Products
productRoutes.get("/", asyncHandler(
    async (req, res) => {
        db.Connection()
            .then(async (collections) => {
                const result = await collections.find((clt) => clt.collectionName === 'products').find({}).toArray();
                res.json(result);
            })
            .catch(() => {
                res.status(500)
            })
    }
))

// Single Products
productRoutes.get("/:id", asyncHandler(
    async (req, res) => {
        db.Connection()
            .then(async (collections) => {
                const result = await collections.find((clt) => clt.collectionName === 'products').findOne({ _id: new ObjectId(req.params.id) });
                console.log(result);
                res.json(result);
            })
            .catch(() => {
                res.status(500)
            })
    }
))

productRoutes.delete("/:id", asyncHandler(
    async (req, res) => {
        db.Connection()
            .then(async (collections) => {
                const result = await collections.find((clt) => clt.collectionName === 'products').findOneAndDelete({ _id: new ObjectId(req.params.id) });
                console.log(result);
                res.json(result);
            })
            .catch(() => {
                res.status(500)
            })
    }
))

productRoutes.put("/:id", asyncHandler(
    async (req, res) => {
        db.Connection()
            .then(async (collections) => {
                const result = await collections.find((clt) => clt.collectionName === 'products').findOneAndUpdate({ _id: new ObjectId(req.params.id) }, {
                    title: req.body.title,
                    category: req.body.category,
                    description: req.body.description,
                    price: req.body.price
                });
                res.json(result);
            })
            .catch(() => {
                res.status(500)
            })
    }
))

module.exports = productRoutes;