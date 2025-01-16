function processData(data, callback) {
    let result = data * 2;
    callback(result);
}

function displayResult(result) {
    console.log(`Result is: ${result}`);
    return result;
}

function half_halfTheProcessedValue(result) {
    console.log(`Result is: ${result / 4}`);
}

processData(4.1, displayResult);

processData(4.1, half_halfTheProcessedValue);
