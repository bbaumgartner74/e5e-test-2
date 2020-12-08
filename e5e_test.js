const user = process.env.USER;
//console.log(`Your name is ${user}`);

exports.myfunction = (event, context) => {
  console.log(event);
  console.log(context);

  return {
    data: `Hello ${user}, you are awesome!`,
  };
};
