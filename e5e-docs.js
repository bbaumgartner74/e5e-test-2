const user = process.env.USER;
console.log(user);

exports.myfunction = (event, context) => {
  
  return {
    data: `Hello ${user}!`,
  };
};
