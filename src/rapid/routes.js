const express = require('express');

const controller = require('./controller/index');

const router = express.Router();

router.post(
  '/find',
  (req, res) => {
    controller.find(res, req.body);
  }
);

module.exports = router;
