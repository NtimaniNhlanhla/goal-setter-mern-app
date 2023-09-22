const mongoose = require('mongoose')

const connectDB = async () => {

  try {
    const conn = await mongoose.connect('mongodb+srv://Nhlanhla123:Nhlanhla123@cluster0.rj9yfkp.mongodb.net/goals?retryWrites=true&w=majority')

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
