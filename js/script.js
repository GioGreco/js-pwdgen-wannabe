const userName = prompt('What is your name?');
const userSurname = prompt('What is your surname?');
const favouriteColour = prompt('What is your favourite colour?');
let userAge = prompt('How old are you?');

userAge = new Date().getFullYear() - userAge;

let hello = `<p class="userName">Name: ${userName}</p>
<p class="userSurname">Surname: ${userSurname}</p>
<p class="favouriteColour">Favourite colour: ${favouriteColour}</p>
<p class="userAge">Age: ${userAge}</p>
`;

let paragraph = document.getElementById('app-js');

paragraph.innerHTML = hello;