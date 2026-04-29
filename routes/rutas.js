const express = require("express");
const router = express.Router();

const { obtenerRuta } = require("../controllers/rutasController");

// Endpoint
router.get("/ruta/:nombre", obtenerRuta);

module.exports = router;