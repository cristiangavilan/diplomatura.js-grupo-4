import mongoose from 'mongoose';

const URIS = process.env.DBCONEX;

const memegramDB = async () => {
  try {
    await mongoose.connect(`${URIS}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Memegram DB : \x1b[32m%s\x1b[0m', 'Online');
  } catch (error) {
    console.error(Error);
  }
};

export = {
  memegramDB,
};
