/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-anonymous-default-export
export default (username, message) => {
    console.log('hello, ');
    return username + message;
}

// ---------- 1) Omitting parameter list parentheses

// If your arrow functions takes exactly one parameter, 
// you may omit the wrapping parentheses.
// Instead of

(userName) => {
    console.log('with bracket')
}
// you could write
userName => {
    console.log('Arrow function without bracket')
}


// 2) Omitting function body curly braces


// If your arrow function contains no other logic but a return statement, 
// you may omit the curly braces and the return keyword.
// Instead of
number => { 
  return number * 3;
}
// you could write
number => number * 3;

// The following code would be invalid:
// number => return number * 3;                 // invalid because return keyword must also be omitted!
// number => if (number === 2) { return 5 };    // invalid because if statements can't be returned


// ---------- 3) Special case: Just returning an object


number => { age: number }; // trying to return an object
// This code would be invalid because JavaScript treats the curly braces as function body 
// wrappers
// To "tell" JavaScript that an object should be created (and returned) instead, 
// the code would need to be adjusted like this:
number => ({ age: number }); // wrapping the object in extra parentheses
// By wrapping the object and its curly braces with an extra pair of parentheses, 
// JavaScript understands that the curly braces are not there to define a function body 
// but instead to create an object. Hence that object then gets returned.