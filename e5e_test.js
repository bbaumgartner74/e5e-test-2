// const user = process.env.USER;
// console.log(`Your name is ${user}`);

exports.myfunction = (event, context) => {
  console.log(event);
  console.log(context);
  
  let cities = event.params.cities;
  let user = event.params.user[0]

  return {
    data: `Hello ${user}, you live in ${cities[0]}!`,
  };
};
