
try {
    // assume an exception occurs
    foo++;
    console.log(foo);
} catch (exception) {
    if (exception instanceof TypeError) {
        // Handle TypeError exceptions
        console.log('handling type error...');
    } else if (exception instanceof ReferenceError) {
        // Handle ReferenceError exceptions
        console.log('handling reference error...');
    } else {
        // Handle all other types of exceptions
        console.log('handling other error...');
    }
} finally {
    console.log('finally...');
}