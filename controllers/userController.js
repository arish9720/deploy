
import User from '../models/user.js';

export const getAllUsers = async (req, res) => {
  try {

  
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
};

export const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await User.create({ name, email });
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).send('User creation failed');
  }
};
