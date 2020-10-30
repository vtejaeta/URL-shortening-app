import Link from '../models/LinkModel.js'
import axios from 'axios'
import asyncHandler from 'express-async-handler'

// @desc Get all links associated with user
// GET /api/link
// Private
export const getLinks = asyncHandler(async (req, res) => {
  const userId = req.user._id

  const links = await Link.find({ user: userId })

  if (links.length !== 0) {
    res.json(links)
  } else {
    res.status(404)
    throw new Error('No links are present')
  }
})

// @desc Get all links associated with user
// GET /api/link
// Private
export const shortenLink = asyncHandler(async (req, res) => {
  try {
    const userId = req.user._id
    const { url } = req.body
    const { data } = await axios.post('https://cleanuri.com/api/v1/shorten', {
      url,
    })

    const newUrl = new Link({
      url: url,
      shortenedUrl: data.result_url,
      user: userId,
    })

    const link = await newUrl.save()
    res.status(201).json(link)
  } catch (error) {
    res.status(400)
    throw new Error('Bad request')
  }
})

// @desc Get all links associated with user
// GET /api/link
// Private
export const deleteLink = asyncHandler(async (req, res) => {
  try {
    const userId = req.user._id
    const linkId = req.body.linkId
    const links = await Link.find({ user: userId })

    const newLinks = links.filter((link) => link._id != linkId)

    await Link.deleteMany()
    await Link.insertMany(newLinks)

    res.status(201).json(newLinks)
  } catch (error) {
    res.status(400)
    throw new Error('Bad request')
  }
})
