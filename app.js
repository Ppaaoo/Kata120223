let inputString = window.prompt("Input a string:");

function sortString(string) {
    let capitalArr = string.replace(/[^A-Z]/g, '');
    let lowercaseArr = string.match(/[^A-Z]/g);
    let numberArr = string.match(/\d+/g);

    //capitalArr.push(lowercaseArr);
    //capitalArr.push(numberArr);

    return lowercaseArr
}

let outputString = sortString(inputString)
document.write(outputString.join(''));