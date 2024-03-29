require("dotenv").config();
//const routes = require("./routes/index");
const express = require("express");
//const cookieSession = require("cookie-session");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
//Related middleware
app.use(
  cors({
    origin: `${process.env.FRONT_URL}`,
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Origin",
      "X-Requested-Width",
      "Accept",
      "Authorization",
      "X-HTTP_Method-Override",
      "Access-Control-Allow-Origin",
      "X-PINGOTHER",
    ],
    preflightContinue: false,
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
    optionsSuccessStatus: 200,
    maxAge: 600,
  })
);
app.use(helmet());

app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static(__dirname + "/public"));

//DB connection
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connection done");
  })
  .catch((e) => {
    console.log(e);
  });
mongoose.set("strictQuery", false);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server runs at port: ${port}...`);
});
