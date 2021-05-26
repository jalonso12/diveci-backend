const app = require('./app');
const mongoose = require('mongoose');

const DATABASE = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DB_PASS
);

mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection stablished!'));

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `<--- App running on localhost (Port: ${process.env.SERVER_PORT}) --->`
  );
});
