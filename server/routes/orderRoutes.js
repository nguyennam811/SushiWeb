const express = require("express");
const asyncHandler = require('express-async-handler');
const orderRoutes = require("express").Router();
const db = require('..')

// get All Order
orderRoutes.get("/", asyncHandler(
    async (req, res) => {
        db.Connection()
            .then(async (collections) => {
                const result = await collections.find((clt) => clt.collectionName === 'orders').find({}).toArray();
                res.json(result);
            })
            .catch(() => {
                res.status(500)
            })
    }
))


// get Single Order
orderRoutes.get("/:id", asyncHandler(
    async (req, res) => {
        db.Connection()
            .then(async (collections) => {
                const result = await collections.find((clt) => clt.collectionName === 'orders').findOne({ _id: new ObjectId(req.params.id) });
                res.json(result);
            })
            .catch(() => {
                res.status(500)
            })
    }
))

module.exports = orderRoutes;