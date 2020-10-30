import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc Register a new user
// route POST /api/users
// @access Public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    // Bad request
    res.status(400)
    throw new Error('User already exists')
  }

  const newUser = await User.create({ name, email, password })

  if (newUser) {
    //Something is created
    res.status(201).json({
      id: newUser._id,
      name,
      email,
      token: generateToken(newUser._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid User data')
  }
})

// @desc Auth user and get token
// POST /api/login
// Public
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    const { _id, name, email } = user

    res.json({
      _id,
      name,
      email,
      token: generateToken(_id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})
