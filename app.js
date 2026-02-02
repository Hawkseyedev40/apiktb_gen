require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./services/app.service");
const { ApiLog, ApiUsers } = require('./models'); // Import the ApiLog model

const scbRouter = require("./routes/scb.routes");
const scbbiznetRouter = require("./routes/scbbiznet.routes");
const krungthai_businessRouter = require("./routes/krungthai_business.routes");

const krungthaiweb_businessRouter = require("./routes/krungthai_business.routes");

//const AdminsbRouter = require("./routes/addmin.routes");


app.use(async (req, res, next) => {
  const start = Date.now();
  const { apiUser } = req;
  const apiUserId = apiUser ? apiUser.id : null;
  const logData = {
    apiUserId: apiUserId,
    endpoint: req.originalUrl,
    method: req.method,
    requestBody: JSON.stringify(req.body),
    ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    userAgent: req.headers['user-agent'],
  };

  res.on('finish', async () => {
    const duration = Date.now() - start;
    logData.statusCode = res.statusCode;
    logData.responseBody = JSON.stringify(res.body); // Assuming you set response body in res.body
    try {
      await ApiLog.create(logData);
    } catch (error) {
      console.error('Error logging API request:', error);
    }
  });

  next();
});



app.use(express.json({ limit: "25mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


//app.use('/scbeasy', scbRouter);
app.use('/api/v3/scb', scbRouter);
app.use('/api/v3/scb_business', scbbiznetRouter);
app.use('/api/app/v3/krungthai_business', krungthai_businessRouter);
app.use('/api/web/v3/krungthai_business', krungthaiweb_businessRouter);


app.use("/storage", express.static(__dirname + "/storage"));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

app.use((error, req, res, next) => {
    res.status(500).json({ status: 500, message: error, error: 'Internal Server Error' });
});

app.get("/", (_req, res) => {
    res.json({ message: "Welcome to API" });
  });


  


// set port, listen for requests
// const PORT = process.env.APP_PORT;

const PORT = process.env.PORT || config["port"];
let server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
