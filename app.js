let inputString = window.prompt("Input a string:");

function sort(string) {
    let capitalArr = string.match(/[A-Z]/g, '');
    let lowercaseArr = string.match(/[^A-Z]/g, '');
    let numberArr = string.match(/\d+/g);

    capitalArr.push(lowercaseArr.join(''));
    capitalArr.push(numberArr.join(''));

    return capitalArr
}

const outputString = sort(inputString)
document.write(outputString.join(''));