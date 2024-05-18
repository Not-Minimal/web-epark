const express = require('express');
const MenuController = require('../controllers/menu');
const md_auth = require('../middlewares/authenticated');

const api = express.Router();

// ENDPOINTS
api.post("/menu", [md_auth.asureAuth], MenuController.createMenu);

module.exports = api;
