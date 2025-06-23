const User = require("../model/User");

const createNewUser = async (req, res) => {
  if (!req?.body?.rating) {
    return res.status(400).json({ message: "Rating is required" });
  }

  try {
    const result = await User.create({
      rating: req.body.rating,
    });
    res.status(201).json("User Rating Saved");
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createNewUser,
};
