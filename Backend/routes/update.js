const express = require("express");
const supabase = require("../service/supabaseClient");
const router = express.Router();

router.patch("/", async (req, res) => {
    const {
        firstName,
        lastName,
        username,
        email,
        contactNumber,
        collegeName,
        address_line_1,
        address_line_2,
        date_of_birth,
        pincode,
    } = req.body;
    const { error } = await supabase
        .from("User Data")
        .update({
            first_name: firstName,
            last_name: lastName,
            username: username,
            email: email,
            contact_number: contactNumber,
            college_name: collegeName,
            address_line_1: address_line_1,
            address_line_2: address_line_2,
            date_of_birth: date_of_birth,
            pincode: pincode,
        })
        .match({ email: email });
    if (error) {
        res.status(400).json({ error: error.message });
        return;
    }
    res.status(200).json({ message: "User data updated" });
});

module.exports = router;
