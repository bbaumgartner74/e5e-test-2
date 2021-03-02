const user = process.env.USER;
console.log(user);

exports.myfunction = (event, context) => {
  console.log(`event: ${event}`);
  console.log(`context: ${context}`);
  
  return {
    data: `Hello ${user}!`,
  };
};
