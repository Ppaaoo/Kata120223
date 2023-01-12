let inputString = window.prompt("Input a string:");

function sort(iString) {
    let capitalArr = [];
    let lowercaseArr = [];
    let numberArr = [];

    for(let i = 0; i < iString.length; i++) {
        if(iString[i] == iString[i].toUpperCase() && iString[i] != iString[i].match(/\d/g)) {
            capitalArr.push(iString[i]);
        }
        if(iString[i] == iString[i].toLowerCase() && iString[i] != iString[i].match(/\d/g)) {
            lowercaseArr.push(iString[i]);
        }
        if(iString[i] == iString[i].match(/\d/g)) {
            numberArr.push(iString[i])
        }
    }

    capitalArr.push(lowercaseArr.join(''));
    capitalArr.push(numberArr.join(''));

    return capitalArr
}

const outputString = sort(inputString)
document.write(outputString.join(''));