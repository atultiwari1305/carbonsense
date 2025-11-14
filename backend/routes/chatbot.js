const express = require('express');
const router = express.Router();
const StateProgram = require('../models/StateProgram');

// Get programs and suggestions for a specific state
router.get('/state/:stateName', async (req, res) => {
  try {
    const stateName = req.params.stateName;
    const stateData = await StateProgram.findOne({ state: stateName });

    if (!stateData) {
      return res.status(404).json({
        success: false,
        message: 'State not found',
      });
    }

    res.json({
      success: true,
      data: stateData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message,
    });
  }
});

// Get all available states
router.get('/states', async (req, res) => {
  try {
    const states = await StateProgram.find({}, 'state');
    const stateNames = states.map((s) => s.state);

    res.json({
      success: true,
      data: stateNames,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message,
    });
  }
});

module.exports = router;
