const app = require('./app');
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('connected to db');
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(`Listening: http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
