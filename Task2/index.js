function transform () {
    let decNum = Number(prompt("Enter your number", 0));
    // validation of the entered value;
    while (decNum < 0) {
        alert('Please, enter the positive number');
        decNum = Number(prompt("Enter your number", 0));
    }
    let resultArr = [];
    // created divNum for not changing decNum which will be necessary in the final alert;
    let divNum = decNum; 
    
    while (divNum !== 0) {
        let rest = divNum % 2;
        resultArr.push(rest);
        divNum = Math.floor(divNum / 2);
    }

    let binNum = Number(resultArr.reverse().join(''));
    alert (`${decNum} will be ${binNum} in binary form`);
};

transform();