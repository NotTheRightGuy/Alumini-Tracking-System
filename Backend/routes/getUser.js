const express = require("express");
const router = express.Router();
const supabase = require("../service/supabaseClient");

router.get("/", async (req, res) => {
    const { email, username } = req.body;
    if (email) {
        const { data, error } = await supabase
            .from("User Data")
            .select("*")
            .match({ email: email });
        if (error) {
            res.status(400).json({ error: error.message });
            return;
        }
        res.status(200).json(data);
    } else if (username) {
        const { data, error } = await supabase
            .from("User Data")
            .select("*")
            .match({ username: username });
        if (error) {
            res.status(400).json({ error: error.message });
            return;
        }
        res.status(200).json(data);
    } else {
        res.status(400).json({ error: "Please provide email or username" });
        return;
    }
});

module.exports = router;
