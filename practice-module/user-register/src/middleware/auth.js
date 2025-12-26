const auth = (req, res, next) => {
  console.log("User verified");
  next();
};

export default auth;

