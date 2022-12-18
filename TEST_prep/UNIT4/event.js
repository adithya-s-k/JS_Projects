const event = require('events');

// Create an eventEmitter object
const eventEmitter = new event.EventEmitter();

// Create an event handler as follows
const connectHandler = function connected() {
  console.log('connection successful.');

  // Fire the data_received event
  eventEmitter.emit('data_received');
};

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function () {
  console.log('data received successfully.');
});

// Fire the connection event
eventEmitter.emit('connection');

console.log('Program Ended.');

//output of the above code
// connection successful.
// data received successfully.
// Program Ended.
