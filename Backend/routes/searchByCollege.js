const express = require("express");
const router = express.Router();
const supabase = require("../service/supabaseClient");

router.post("/", async (req, res) => {
    const { college_name } = req.body;
    if (college_name) {
        const { data, error } = await supabase
            .from("User Data")
            .select("*")
            .match({ college_name: college_name });
        if (error) {
            res.status(400).json({ error: error.message });
            return;
        }
        res.status(200).json(data);
    } else {
        res.status(400).json({ error: "Please provide college name" });
        return;
    }
});

module.exports = router;
