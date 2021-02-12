# 03-JavaScript-Password-Generator
Due Date: 2/10/2021 @ 11:59 PM
Coding Bootcamping assigned #3, 1st Javascript assignment

# 03 JavaScript
The primary objectives of this exercise were to demonstrate the following:

* functions 
    * declarations
    * argument passing
* variables
    * use of different variable types
    * pitfalls of vartype mismatch (arrays and strings)
* random number generator
* practical use of basic logic
* acting on basic user input

# References / Resources 

##### (best viewed in PREVIEW mode if you are presently inspecting raw markdown)

|Description|Link|
|-----------|----|
|ASCII chart|https://www.rapidtables.com/code/text/ascii-table.html|
|OWASP defination of acceptable special characters for password|https://owasp.org/www-community/password-special-characters|
|I created a chart that provided the DEC values for the OWASP specials|https://docs.google.com/spreadsheets/d/17oWPJ3x0biuTS77ADcNflrXFdUI-YjPXpGfeJ3DG5m8/edit#gid=0|
|How to convert DEC value to ASCII value|https://www.w3schools.com/jsref/jsref_fromcharcode.asp|
|I'm a while true freak it's just a construct for some reason i use all the time|https://www.w3schools.com/js/js_loop_while.asp|
|I wondered if there was such a thing as CONSTANTS in JS, and there sorta is|https://www.w3schools.com/js/js_const.asp|
|I tried just doing BigArray = Array1 + Array2 and that doesn't do what you think.  You need concat - which was for sure shown in class but I just needed a reminder|https://www.w3schools.com/jsref/jsref_concat_array.asp|
|I stumbled on to JSDoc so I figured I'd put that to use in this project|https://gomakethings.com/whats-the-best-way-to-document-javascript/|
|If you let Visual Studio Code talk to you, sometimes it might tell you cool things.  Especially for me since I'm so dense.  "Template literals"|https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals|

# Screenshots
### Screen 1: **Initial Screen**

![<img src=assets/images/03-javascript-password-generator-01.png>](assets/images/03-javascript-password-generator-01.png)

* When you click the Generate Password (which the click is captured by the `.addEventListener` on the `generateBtn`) the main process of generating the password initiates (that is, we're waiting for a `click` action in the `generateBtn.addEventListener` and once we get that click we fire the function `writePassword()`)  

        generateBtn.addEventListener("click", writePassword);

* `writePassword()` fires `generatePassword()` which is *where the party is!* (the majority of the work on this homework was done here.  Returns `password` variable.

### Screen 2: **Enter the length of the password between 8 and 128**

![<img src=assets/images/03-javascript-password-generator-02.png>](assets/images/03-javascript-password-generator-02.png)

* we perform some basic checking to ensure the user has entered a value between `passwordMinLength` and `passwordMaxLength`;
    
### Screen 3: **Failed range check**

![<img src=assets/images/03-javascript-password-generator-03.png>](assets/images/03-javascript-password-generator-03.png)

* Here's the feedback on the failed range check using `window.alert`.  
* Note - It seemed if I insisted on using  `passwordMinLength` and `passwordMaxLength` as `const` variables, I should consistently use these not just on logic checks but on user feedback.  At first I created the window.prompt piecing things together:

#### My Line 

    passwordLength = window.prompt("How Many characters in your password? (" + passwordMinLength + "-" + passwordMaxLength +")",12);

I thought that looked bad, and so did Visual Studio Code - which recommended I consider using a [template string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), so I did!

#### New Line 

    window.prompt('How many characters in your password? (${passwordMinLength}-${passwordMaxLength})',12);

Kinda scratchin my head on the `'` vs `"` but whatever.

### Screens 4, 5, 6: **Asking for UPPER CASE, numerals, and special characters**

![<img src=assets/images/03-javascript-password-generator-04.png>](assets/images/03-javascript-password-generator-04.png)
![<img src=assets/images/03-javascript-password-generator-05.png>](assets/images/03-javascript-password-generator-05.png)
![<img src=assets/images/03-javascript-password-generator-06.png>](assets/images/03-javascript-password-generator-06.png)

### Screen 7: **If they answers NO to UPPER, NUMERALS, and SPECIALS, then they are getting lowercase**

![<img src=assets/images/03-javascript-password-generator-07.png>](assets/images/03-javascript-password-generator-07.png)

### Screen 8: **Your password awaits you**

![<img src=assets/images/03-javascript-password-generator-08.png>](assets/images/03-javascript-password-generator-08.png)

# Things I learned that I don't recall being explicitly taught

## JSDoc

        /**
        * Build an array given a lower and upper ASCII decimal value
        * @author Jason Jones <jason.e.jones@gmail.com>
        * @param  {Number} lowerRange   lower range of the ASCII table
        * @param  {Number} upperRange   upper range of the ASCII table
        * @return {Object} returnArray  the array that has the ASCII characters between lowerRange and upperRange
        */

        function makeCharArray(lowerRange,upperRange) {
        var i, j, returnArray;
        j = 0;
        returnArray = [];
        for (i = lowerRange; i <= upperRange; i++) {
            returnArray[j] = (String.fromCharCode(i));
            j++;
        }
        return (returnArray);
        }

Adding extended comments in front of function declarations gets noticed by Visual Studio Code, so it seems like a good thjing to do:

### Here VSC provides some feedback about the formatting of the function
![<img src=assets/images/03-javascript-password-generator-10.png>](assets/images/03-javascript-password-generator-10.png)

### And here's what VSC does with it:
![<img src=assets/images/03-javascript-password-generator-09.png>](assets/images/03-javascript-password-generator-09.png)

I think that's pretty cool so I super commented a couple functions.

## Template String (Template Litrerals)
`${expression}` is just so much more familar to me and I was glad that VSC suggested I change a particularly ugly line to something less ugly.

## While Loops
`while` loops are something I use all the time and have for ~30 years.  It's a very familar place for me so I wanted to revisit this here.

## Programatically building the arrays vs hard coding
I was bound and determined to programmatically build the arrays (see `makeCharArray`) vs just hand type each upper case and lower case and numeral and special.  So I started there in fact, and found that whole process enjoyable.  

## Links
* This repo is located [on github](https://github.com/jonesjsc/03-JavaScript-Password-Generator)
* This site is deployed on [github pages](https://jonesjsc.github.io/03-JavaScript-Password-Generator/)

## License
* ![License](https://img.shields.io/github/license/jonesjsc/03-JavaScript-Password-Generator)

## Fun Stats
* ![Last Commit](https://img.shields.io/github/last-commit/jonesjsc/03-JavaScript-Password-Generator)
* ![Current Understanding level](https://img.shields.io/badge/Understanding%20Level-Gettin%20There-yellow)