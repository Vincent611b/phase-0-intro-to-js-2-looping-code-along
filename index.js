// Code your solutions in this file
function writeCards(names, eventName) {
    let thankYouMessages = []; // create a new array to hold the messages

    for (let i = 0; i < names.length; i++) { // iterate through the input array
        let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`; // build the 'thank you' message
        thankYouMessages.push(message); // add the message to the new array
    }

    return thankYouMessages; // return the new array
}

// Example usage:
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));


function countDown(startingNumber) {
    while (startingNumber >= 0) {
        console.log(startingNumber);
        startingNumber--;
    }
}

// Example usage:
countDown(10);
