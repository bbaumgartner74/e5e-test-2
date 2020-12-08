// const user = process.env.USER;
// console.log(`Your name is ${user}`);

exports.myfunction = (event, context) => {
  console.log(event);
  console.log(context);

  let city = "Timbuktu"
  let user = "Nobody"
  let payload = "No payload."

  if (params !== null) {
    if (cities !== null) {
      city = event.params.cities[0];
    } 

    if (user !== null) {
      user = event.params.user[0];
    } 
  }

  if(data !== null){
    payload = data
  }

  return {
    data: `Hello ${user}, you live in ${city}! Payload: ${payload} :::`,
  };
};
