let currentDate = new Date()
alert(currentDate);

const today = new Date();
const day = today.getDay();
const daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
console.log(`Today is : ${daylist[day]}.`)
let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
let prepand = (hour >= 12)? " PM ":" AM ";
hour = (hour >= 12)? hour - 12: hour;
if (hour === 0 && prepand === " PM ") {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = "Noon";
    } else {
        hour = 12;
        prepand = " PM ";
    }
}
if (hour === 0 && prepand === " AM ") {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = 'Midnight';
    } else {
        hour = 12;
        prepand = ' AM ';
    }
}
console.log(`Current Time : ${hour}${prepand} : ${minute} ${second}`);



let request = prompt('make a guess between the numbers 1 - 10', '')
let randomNum = math.floor(math.random() * 10) + 1
 if ( request == randomNum) {
     alert('Good work!') 
 } else if ( request == null || request == '') {
     alert('input a new Number!!')
 } else {
     alert('Not Matched')
 }
 console.log(document.URL) // gets the url of the loading page

 let userPrompt = prompt('Define your first variable automatically', '');
let result =  this[userPrompt];
return result;
function sumBoth(param1, param2) {
    if (param1  !== param2) {
        return param1 + param2
    } else {
        return (param1 + param2) * 3
    }

}
function difference(param) {
    let input = param;
    if (param > 13) {
    let result = input - 13;
return result * 2;
    } else {
     let diff = 13 - input;
     return diff;
    }
}

function check(str) {
    let newArr = str.split('')
    if (newArr[0] == 'P' && newArr[1] == 'y') {
        return newArr.join('')
    } else {
       return  newArr.unshift('Py')
        .join('')
    }
}

function getFileExt(str) {
    if(str.includes('.')) {
        let position = str.getIndexOf('.');
        let extension = str.slice((position + 1))
        return extension;
    } else {
        return str;
    }
    }

function getFileEx(str) {
    return str.split('.').pop()
}

function check(par, par2) {
    if(par == 50 || par2 == 50) {
        return true;
    } else if (par + par2 == 50) {
        return true;
    } else {
        return false;
    }
    }

function printCurrentPage() {
     window.print()
}
let cal = {
    divide(par, par2) {
        return par / par2;
    } ,
    multiply(p, p2) {
        return p * p2
    }
}

cal.divide(30, 5); //calling the function as method a of the object returns the result, In this case 6
cal.multiply(5, 2); //returns the multiplication of the parameters
function checkJava(str) {
    if(str.subString(0, 4) == 'Java') {
        return true 
    } else {
        return false
    }
}
checkJava('Javascript')

let Array = [1, 5, 7];
function checkLargest(arr) {
    let num = 0;
    for(let numb in arr) {
        if (numb > num) {
            num = numb;
        }
        return num;
    }
 return num; 
}
checkLargest(Array); 

function mutateStr(str) {
    if ( str.length >= 1) {
        let newArr = str.split('')
        let first = newArr[0];
        let last = newArr[newArr.length - 1];
        newArr[0] = last;
        newArr.pop();
        newArr.push(first);
return newArr.toString('')
    } else {
        return str;
    }
}

let newString = 'iLoveNigeria'
mutateStr(newString);

let doubleAddition = (str) => { 
if(str.length >= 1) {
    let newArr = str.split('')
    let first = newArr[0];
    newArr.push(first);
    newArr.unshift(first);
    return newArr.toString();
} else {
    return str;
};
}

let checkNum = (num) => {
    if(typeof num == 'number') {

    if(num / 3 % 0 || num / 7 % 0) {
return `${num} passed the test`
    } else {
        return 'Test Failed'
    }  
    } else {
        return 'Please enter a number'
    }
}

let addThree = (str) => {
    if(str.length >= 3) {
    if(typeof str == 'string') {
        let newArray = str.split('');
        let lastThree = newArray[newArray.length - 1][newArray.length - 2][newArray.length - 3];
        newArray.unshift(lastThree);
        newArray.push(lastThree);
        return newArray.toString('')
    } else {
        return 'This is not a string'
    }
    } else {
        return 'Please enter a longer string'
    }
    }

    let checkPar = (p1,p2) => { 
        if((p1 >= 55 && p1 <= 99) || (p2 >= 55 && p2 <= 99)) {
            return true;
        } else {
            return false;
        }
    }
function checkThree(p1,p2,p3) {
    if((p1 >= 55 && p1 <= 99) || (p2 >= 55 && p2 <= 99) || (p3 >= 55 && p3 <= 99)) {
        return true
    } else {
        return false;
    }
}
function scriptCheck(str) {
    if(typeof str == 'string') {
        if(str.substring(4,10) == 'Script') {
          str.splice(4,5);
          return str;
        } else {
            return str;
        }
    } else {
        return `${str} is not a string, Please enter a string`
    }
}

function checkLar(a,b,c){
    if (a > b) {
        let large = a
    } else {
        large = b;
    };
    if (c > large) {
        return c;
    } else {
        return large
    }
}
