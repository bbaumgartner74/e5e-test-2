const user = process.env.USER;

exports.myfunction = (event, context) => {
  
  return {
    data: `Hello ${user}!`,
  };
};
