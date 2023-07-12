let userName = 'Tim';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
let userQuestion = 'What is your favorite color?';
console.log(userQuestion);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch (randomNumber) {
    case 0:
        console.log("It is certain");
        eightBall = 'It is certain';
        break;
    case 1:
        console.log("It is decidedly so");
        eightBall = 'It is decidedly so';
        break;
    case 2:
        console.log("Reply hazy try again");
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        console.log("'Cannot predict now");
        eightBall = 'Cannot predict now';
        break;
    case 4:
        console.log("Do not count on it");
        eightBall = 'Do not count on it';
        break;
    case 5:
        console.log("My sources say no");
        eightBall = 'My sources say no';
        break;
    case 6:
        console.log("Outlook not so good");
        eightBall = 'Outlook not so good';
        break;
    default:
        console.log("Signs point to yes");
        eightBall = 'It is certain';
}