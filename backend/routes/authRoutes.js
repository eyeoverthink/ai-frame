const express = require('express');
const router = express.Router();
const { ClerkExpressWithAuth } = require('@clerk/clerk-sdk-node');

// Middleware for Clerk authentication
router.use(ClerkExpressWithAuth());

// Route for user registration
router.post('/register', (req, res) => {
  // Logic for user registration
  res.send('User registration endpoint');
});

// Route for user login
router.post('/login', (req, res) => {
  // Logic for user login
  res.send('User login endpoint');
});

module.exports = router;
