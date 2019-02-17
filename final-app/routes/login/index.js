const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/login", bookRoutes);

module.exports = router;
