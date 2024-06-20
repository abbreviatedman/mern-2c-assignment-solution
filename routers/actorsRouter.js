const express = require("express");
const { v4: uuid } = require("uuid");

const { actorsArray } = require("../data");
const router = express.Router();

router.get("/v1/query", (req, res) => {
  res.status(200).json({ message: "success", payload: actorsArray });
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
  actorsArray.push(artist);
  res.status(200).json({ message: "success", payload: artist });
});

router.put("/v1/update-artist-by-id/:id", (req, res) => {
  const { id } = req.params;
  const actor = req.body;
  const i = actorsArray.findIndex((actor) => actor.id === id);
  if (i === -1) {
    res
      .status(404)
      .json({ message: "failure", payload: "Actor with that ID not found." });

    return;
  }

  actor.id = id;
  actorsArray[i] = actor;
  res.status(200).json({ message: "success", payload: actor });
});

router.patch("/v1/update-artist-by-id/:id", (req, res) => {
  const { id } = req.params;
  const updatedFields = req.body;
  const actor = actorsArray.find((actor) => actor.id === id);
  if (!actor) {
    res
      .status(404)
      .json({ message: "failure", payload: "Actor with that ID not found." });

    return;
  }

  Object.assign(actor, updatedFields);
  res.status(200).json({ message: "success", payload: actor });
});

router.delete("/v1/delete-artist-by-id/:id", (req, res) => {
  const { id } = req.params;
  const i = actorsArray.findIndex((actor) => actor.id === id);
  if (i === -1) {
    res
      .status(404)
      .json({ message: "failure", payload: "Actor with that ID not found." });

    return;
  }

  const actor = actorsArray.splice(i, 1);
  res.status(200).json({ message: "success", payload: actor });
});

module.exports = router;
