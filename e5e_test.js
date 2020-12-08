// const user = process.env.USER;
// console.log(`Your name is ${user}`);

exports.myfunction = (event, context) => {
  console.log(event);
  console.log(context);

  let city = "Timbuktu";
  let user = "Nobody";
  let payload = "No payload.";

  if (event.params !== null) {
    if (event.params.cities !== null) {
      city = event.params.cities[0];
    }

    if (event.params.user !== null) {
      user = event.params.user[0];
    }
    if (event.data !== null) {
      payload = event.data;
    }
  }

  return {
    data: `Hello ${user}, you live in ${city}! Payload: ${payload} :::`,
  };
};
