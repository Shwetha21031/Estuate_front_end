// regex==========================
/*
A regular expression is a sequence of characters that forms a search pattern.( text search and text replace operations.)
/pattern/modifiers;
/w3schools/i  is a regular expression.
- w3schools  is a pattern (to be used in a search).
- i  is a modifier (modifies the search to be case-insensitive).
regular expressions are often used with the two string methods: search() and replace().
*/
let text = "Visit W3Schools!";
let n = text.search("W3Schools");
// console.log(n)

// i	Perform case-insensitive matching
 text = "tip tip barsa paani";
 n = text.search(/Paani/i);
// console.log(n)

// g	Perform a global match (find all matches rather than stopping after the first match)
 text = "Is this all there is?";
 n = text.match(/[h]/g);
//  console.log(n)

/*
The replace() method replaces a specified value with another value in a string:
let text = "Visit Microsoft!";
let result = text.replace(/microsoft/i, "W3Schools");
	
m	Perform multiline matching
[abc]	Find any of the characters between the brackets	
[0-9]	Find any of the digits between the brackets	
(x|y)	Find any of the alternatives separated with |
\d	Find a digit	
\s	Find a whitespace character	
\b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b	
\uxxxx	Find the Unicode character specified by the hexadecimal number xxxx
n+	Matches any string that contains at least one n
n*	Matches any string that contains zero or more occurrences of n
n?	Matches any string that contains zero or one occurrences of n
*/

// The test() method is a RegExp expression method.
const pattern = /e/;
// console.log(pattern.test("The best things in life are free!"));

/e/.test("The best things in life are free!");

/*
The exec() method is a RegExp expression method.
It searches a string for a specified pattern, and returns the found text as an object.
If no match is found, it returns an empty (null) object.
/e/.exec("The best things in life are free!");
*/




// regex===================================
// Regular expressions are patterns used to match character combinations in strings
// These patterns are used with the 
// exec() and test() methods of RegExp, and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String

// Creating a regular expression
// 1.  Using a regular expression literal, which consists of a pattern enclosed between slashes
const re1 = /abc/;
// the pattern /abc/ matches character combinations in strings only when the exact sequence "abc" occurs

// 2. calling the constructor function of the RegExp object, 
// Use the constructor function when you know the regular expression pattern will be changing
//  you don't know the pattern and are getting it from another source, such as user input

const re2 = new RegExp("ab+c")

// to match a single "a" followed by zero or more "b"s followed by "c", you'd use the pattern /ab*c/

// Syntax
// /pattern/modifier(s);
let pattern1 = /w3schools/i;


// Expression	Description
// [abc]	Find any character between the brackets
// [^abc]	Find any character NOT between the brackets
// [0-9]	Find any character between the brackets (any digit)
// [^0-9]	Find any character NOT between the brackets (any non-digit)
// (x|y)	Find any of the alternatives specified