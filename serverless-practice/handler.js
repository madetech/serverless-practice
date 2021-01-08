'use strict';

module.exports.ping = async (event) => {
  return { body: JSON.stringify({message: "Pong" })};

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
