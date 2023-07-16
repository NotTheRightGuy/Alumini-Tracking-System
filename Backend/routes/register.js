const express = require("express");
const router = express.Router();
const supabase = require("../service/supabaseClient");

router.post("/", async (req, res) => {
    const {
        firstName,
        lastName,
        username,
        email,
        password,
        confirmPassword,
        contactNumber,
    } = req.body;
    if (!firstName || !lastName || !username || !email || !password) {
        res.status(400).json({ error: "Please fill all the fields" });
        return;
    }
    if (password !== confirmPassword) {
        res.status(400).json({ error: "Passwords do not match" });
        return;
    }
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });
    if (error) {
        res.status(400).json({ error: error.message });
        return;
    } else if (data) {
        res.status(200).json({ data: data });
        console.log("New user with username " + username + " created");
        const { error } = await supabase.from("User Data").insert({
            first_name: firstName,
            last_name: lastName,
            username: username,
            email: email,
            contact_number: contactNumber,
        });
        if (error) {
            console.log(error.message);
            return;
        }
        return;
    }
});

module.exports = router;

// First Name
// Last Name
// Username
// Email
// Password
// Confirm Password
// Contact Number

// College Name
// Address
