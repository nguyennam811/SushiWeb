const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("..");

const userController = {
  //GET ALL USER
  getAllUsers: async (req, res) => {
    try {
      const users = await db.collection("users").find().toArray();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE A USER
  deleteUser: async (req, res) => {
    try {
      const result = await db.collection("users").deleteOne({ _id: ObjectId(req.params.id) });
      if (result.deletedCount === 1) {
        res.status(200).json({ message: "User deleted" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;
