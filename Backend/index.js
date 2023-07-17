const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000;

// Setting up express
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Importing Routes
const register = require("./routes/register");
const login = require("./routes/login");
const update = require("./routes/update");
const getDetails = require("./routes/getUser");
const createEvent = require("./routes/createEvent");
const getEvent = require("./routes/getEvents");
const search = require("./routes/search");
const collegeSearch = require("./routes/searchByCollege");

// Setting up routes
app.use("/api/auth/register", register);
app.use("/api/auth/login", login);
app.use("/api/user/update", update);
app.use("/api/user/getUser", getDetails);
app.use("/api/event/create", createEvent);
app.use("/api/event/getEvents", getEvent);
app.use("/api/search", search);
app.use("/api/search/college", collegeSearch);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
