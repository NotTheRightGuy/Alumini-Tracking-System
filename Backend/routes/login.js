const express = require("express");
const supabase = require("../service/supabaseClient");
const router = express.Router();

router.post("/", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ error: "Please fill all the fields" });
        return;
    }
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });
    if (error) {
        res.status(400).json({ error: error.message });
        return;
    }
    if (data) {
        res.status(200).json({ data: data });
        return;
    }
});

module.exports = router;
