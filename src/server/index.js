const db = require("./models");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const apiMock = require("./api/mockdata");
const PORT = 3001;

var expressApp = express();
expressApp.use(cors());
expressApp.use(bodyParser.json());

apiMock(expressApp, db);  // load the model definition and controllers

// expressApp.get('/mocks', function (req, res) {
//     MockData.fetcj
// })

// epilogue.initialize({app: expressApp, sequelize: db.sequelize});
//
// // Create REST resources based on database
// let mocks = epilogue.resource({
//     model: db.MockData,
//     endpoints: ["/mocks", "/mocks/:id"]
// });

db.sequelize.sync().then(() => {
    expressApp.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
});