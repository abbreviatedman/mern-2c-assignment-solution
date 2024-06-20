const express = require('express')
const { v4: uuid } = require("uuid");

const {musicArray} = require('../data')
const router = express.Router();

router.get("/v1/query", (req, res) => {
  res.status(200).json({ message: "success", payload: musicArray });
});

router.post("/v1/create-artist", (req, res) => {
  if (!req.body) {
    res.status(400).json({
      message: "failure",
      payload: "A new artist must be sent in the request body.",
    });

    return;
  }

  const artist = { ...req.body, id: uuid() };
  musicArray.push(artist);
  res.status(200).json({message: 'success', payload: artist})
});

module.exports = router;
