const express = require("express");
const logger = require("morgan");

const musicRouter = require("./routers/musicRouter");
const actorsRouter = require("./routers/actorsRouter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

app.use("/api/music", musicRouter);
app.use("/api/actors", actorsRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
