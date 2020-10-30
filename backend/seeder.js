import User from './models/userModel.js'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'
import users from './data/users.js'
import { links } from './data/links.js'
import Link from './models/LinkModel.js'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const sampleUser = createdUsers[0]._id

    const sampleLinks = links.map((link) => {
      return { ...link, user: sampleUser }
    })

    await Link.insertMany(sampleLinks)

    console.log('Data imported')
    process.exit()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

const deleteData = async () => {
  try {
    await User.deleteMany()
    await Link.deleteMany()

    console.log('Data deleted')
    process.exit()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  deleteData()
} else {
  importData()
}
