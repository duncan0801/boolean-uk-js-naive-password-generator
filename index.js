/* Repo: boolean-uk-js-naive-password-generator

Description
To practice today's concepts, we're going to create a naive password generator! 
We want you to grab the user's input, and then output a password for them. Since we're still learning here, the passwords won't be super secure... 

Instructions
- get the user's first name
- get the user's last name
- get the user's favourite colour
- tell the user their new password:
- the password must have the following format: first name + last name + favourite colour + 42

Tips
- You can manipulate strings in many different ways, make sure to google about it if you're not sure

Challenge
Instead of 42, can you make your passwords more secure and generate a random number between 0 and 200?
Use your Google-Fu skills!

Challenge 2
Now that we can generate a random number, can you make it so that the user can input the range in between you generate the random number?
See if you can find a way to parse the input so that you can have 2 numbers!
Again, Google is your friend... */

/* 1. Get first name: use prompt and save it as a variable
2. Get last name: Use prompt and save it as a variable
3. Get fav colour: Use prompt and save it as a variable
4. change first name to first 3 letters using .slice(0, 3)
5. Change the colour to first 3 letters
5. change last name to last 3 letters using .slice(lastName.length-4, lastName.length - 1)
*/

let firstName = prompt("What is your first name?")
let lastName = prompt("What is your last name?")
let favouriteColour = prompt("What is your favourite colour?")

let firstNameManipulated = firstName.slice(0, 3)
let favouriteColourManipulated = favouriteColour.slice(0, 3)
let lastNameManipulated = lastName.slice(lastName.length - 4, lastName.length)
let endNumber = 42

let password = firstNameManipulated + lastNameManipulated + favouriteColourManipulated + endNumber

alert(password)
console.log(password)

