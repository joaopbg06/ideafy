const express = require('express');
const router = express.Router();
const ControllerUser = require('../Controllers/ControllerUser');
const ControllerLogin = require('../Controllers/ControllerLogin');

router.get('/usuarios',ControllerUser.UserListar);
router.post('/usuarios',ControllerUser.UserAdicionar);
router.post('/login',ControllerLogin.VerificarLogin);

module.exports = router;