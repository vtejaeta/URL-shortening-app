import mongoose from 'mongoose'

const linkSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    url: {
      type: String,
      required: true,
    },
    shortenedUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Link = mongoose.model('Link', linkSchema)

export default Link
