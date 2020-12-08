// const user = process.env.USER;
// console.log(`Your name is ${user}`);

exports.myfunction = (event, context) => {
  console.log(event);
  console.log(context);

  let city = "Timbuktu";
  let user = "Nobody";
  let payload = "No payload.";

  if (event.params !== null) {
    if (event.params.city) {
      city = event.params.city[0];
    }

    if (event.params.user) {
      user = event.params.user[0];
    }
    if (event.data !== null && event.data.message) {
      payload = event.data.message;
    }
  }

  return {
    data: `Hello ${user}, you live in ${city}! Message: ${payload}.`,
  };
};
