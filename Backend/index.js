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

// Setting up routes
app.use("/api/auth/register", register);
app.use("/api/auth/login", login);
app.use("/api/update", update);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
