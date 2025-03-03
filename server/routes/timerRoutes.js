const express = require('express');
const router = express.Router();

// Пример маршрута
router.get('/timer', (req, res) => {
    res.send('Timer route is working!');
});

module.exports = router;
