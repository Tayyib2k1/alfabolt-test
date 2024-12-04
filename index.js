// Given a string s containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.
// 	•	A string is valid if:
// 	•	Open brackets must be closed by the same type of brackets.
// 	•	Open brackets must be closed in the correct order.


const test = (text) => {
    // if every bracket that was opened has a closing it will always be even
    if (text.length % 2 !== 0) {
        return false;
    }

    // temporary array to track opening and closing of brackets
    const arr = [];

    // map of closing bracket against every opening bracket
    const bracketsMap = {
        '(': ')',
        '{': '}',
        '[': ']',
    }

    // iterating over the string chrater by chracter
    for (let char of text) {
        switch (char) {
            // in case of opening bracket it will be added into tracking array
            case '(':
            case '{':
            case '[':
                arr.push(char)
                break;
            // in case of closing bracket check if the last opened bracket
            // is the same as the one being closed
            case ')':
            case '}':
            case ']':
                // getting last element inserted in array
                const ch = arr.pop()
                // matching against our bracket map if it's the bracket of same type
                if(bracketsMap[ch] !== char) {
                    return false;
                }
                break;
        }
    }

    // if all the bracket that was opened has closed in right order
    // array length will be equal to zero
    if(arr.length == 0) {
        return true;
    }
}

// "node index.js" to run the code

const s1 = "()[]{}"     //true
const s2 = "([)]"       //false
const s3 = "(]"         //false
const s4 = '()'         //true
const s5 = '([{}]'      //false
console.log(test(s1))
console.log(test(s2))
console.log(test(s3))
console.log(test(s4))
console.log(test(s5))