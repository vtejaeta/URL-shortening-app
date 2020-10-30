import express from 'express'
import {
  getLinks,
  shortenLink,
  deleteLink,
} from '../controllers/linkController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(protect, getLinks).delete(protect, deleteLink)
router.route('/shorten').post(protect, shortenLink)

export default router
