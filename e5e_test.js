const user = process.env.USER;
//console.log(`Your name is ${user}`);

exports.myfunction = (event, context) => {
  console.log(`event: ${event}`);
  console.log(`context: ${context}`);

  return {
    data: `Hello ${user}, you are awesome!`,
  };
};
