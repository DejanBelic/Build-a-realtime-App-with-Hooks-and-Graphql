const user = {
  _id: "1",
  name: "Reed",
  email: "dejan.belic8@gmail.com",
  picture: "https://cloudinary.com/asdf"
};

module.exports = {
  Query: {
    me: () => user
  }
}