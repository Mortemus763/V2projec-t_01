const express = require('express')
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateLogin = [
  check('credential')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Email or username is required'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Password is required'),
  handleValidationErrors
];
router.post(
  '/',
  validateLogin,
  async (req, res, next) => {
    const { credential, password } = req.body;
    try {
      const user = await User.unscoped().findOne({
        where: {
          [Op.or]: {
            username: credential,
            email: credential
          }
        }
      });

      if (!user || !bcrypt.compareSync(password, user.hashedPassword.toString())) {
        return res.status(401).json({
          message: "Invalid credentials"
        });
      }

      const safeUser = {
        id: user.id,
        firstName: user.firstname,
        lastName: user.lastname,
        email: user.email,
        username: user.username,
      };

      await setTokenCookie(res, safeUser);

      return res.status(200).json({
        user: safeUser
      });
    } catch (error) {
      next(error);
    }
  }
);
router.post('/demo', async (req, res, next) => {
  try {
    const demoUser = await User.findOne({
      where: { username: 'Demo-lition' },
    });

    if (!demoUser) {
      return res.status(404).json({ message: 'Demo user not found' });
    }

    const safeUser = {
      id: demoUser.id,
      firstName: demoUser.firstname,
      lastName: demoUser.lastname,
      email: demoUser.email,
      username: demoUser.username,
    };

    await setTokenCookie(res, safeUser);

    return res.status(200).json({ user: safeUser });
  } catch (error) {
    console.error('Error in demo login route:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});
// Log out
router.delete(
  '/',
  (_req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'success' });
  }
);

router.get(
  '/',
  (req, res) => {
    const { user } = req;
    if (user) {
      const safeUser = {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        username: user.username,
      };
      return res.json({
        user: safeUser
      });
    } else return res.json({ user: null });
  }
);

router.use((err, req, res, next) => {
  if (err.status === 400) {
    err.message = "Bad Request";
  }
  next(err);
});
module.exports = router;