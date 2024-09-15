const {
  login,
  register,
  logout,
  profile,
} = require('../services/userServices');

exports.login = async (req, res) => {
  try {
    const data = await login(req, res);
    if (data.success) {
      res.status(200).json(data);
    } else {
      res.status(400).json(data);
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
exports.register = async (req, res) => {
  try {
    const data = await register(req, res);
    if (data.success) {
      res.status(200).json(data);
    } else {
      res.status(400).json(data);
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.logout = async (req, res) => {
  try {
    const data = await logout(req, res);
    if (data.success) {
      res.status(200).json(data);
    } else {
      res.status(400).json(data);
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.profile = async (req, res) => {
  try {
    const data = await profile(req, res);
    if (data.success) {
      res.status(200).json(data);
    } else {
      res.status(400).json(data);
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
