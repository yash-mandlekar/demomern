var express = require("express");
var cookieParser = require("cookie-parser");
var http = require("http");
var indexRouter = require("./routes/index");
var port = process.env.PORT || 4000;
var cors = require("cors");
var app = express();

app.use(
  cors({
    origin: ["http://localhost:3000","https://demomern-psi.vercel.app"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/", indexRouter);

var server = http.createServer(app);

server.listen(port, () => {
  console.log("Server started on port " + port);
});
