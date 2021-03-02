const user = process.env.USER;

exports.myfunction = (event, context) => {
  console.log(`User: ${user}`);
  
  return {
    data: `Hello ${user}!`,
  };
};
