// działa require z poniższą deklaracją choc nie do konca wiem czemu. TO DO

// import mongoose from 'mongoose';
export const mongoose = require('mongoose')

const mongoURI: string = 'mongodb://127.0.0.1:27017/task-manager';
// const options = {
//   // useNew UrlParser: true,
//   useUnifiedTopology: true,
// };

mongoose
  .connect(mongoURI)
  .then((): void => {
    console.log('Connected to MongoDB');
    // Start your application or perform additional operations
  })
  .catch((error: any): void => {
    console.error('Error connecting to MongoDB:', error);
  });