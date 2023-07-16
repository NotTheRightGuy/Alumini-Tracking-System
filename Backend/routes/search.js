const express = require("express");
const supabase = require("../service/supabaseClient");
const router = express.Router();

router.post("/", async (req, res) => {
    const { college, firstName, lastName, email, phone_number } = req.body;
    if (phone_number) {
        const { data, error } = await supabase
            .from("User Data")
            .select("*")
            .eq("contact_number", phone_number);
        if (error) {
            res.status(400).json({ error: error.message });
            return;
        }
        res.status(200).json({ data: data });
    }
    if (email) {
        const { data, error } = await supabase
            .from("User Data")
            .select("*")
            .eq("email", email);
        if (error) {
            res.status(400).json({ error: error.message });
            return;
        }
        res.status(200).json({ data: data });
    }
    if (college) {
        const { data, error } = await supabase
            .from("User Data")
            .select("*")
            .eq("college_name", college);
        if (error) {
            res.status(400).json({ error: error.message });
            return;
        }
        res.status(200).json({ data: data });
    }
    if (firstName) {
        const { data, error } = await supabase
            .from("User Data")
            .select("*")
            .eq("first_name", firstName);
        if (error) {
            res.status(400).json({ error: error.message });
            return;
        }
        res.status(200).json({ data: data });
    }
    if (lastName) {
        const { data, error } = await supabase
            .from("User Data")
            .select("*")
            .eq("last_name", lastName);
        if (error) {
            res.status(400).json({ error: error.message });
            return;
        }
        res.status(200).json({ data: data });
    }
});

module.exports = router;
