const { catchErrors } = require("../helpers/error");

const express = require("express");
const router = express.Router();
const { savePost, findPost } = require("../controllers/postController");

router.get("/", (req, res) => res.render("index", { title: "Writing App" }));
router.get("/:title", catchErrors(findPost));
router.post("/post", catchErrors(savePost));

module.exports = router;
