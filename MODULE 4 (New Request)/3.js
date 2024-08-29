function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Completed after ${ms} milliseconds`);
        }, ms);
    });
}

delay(5000)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
