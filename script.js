const reviews = [
{
    id: 1,
    name: 'Shira Collado',
    job:'Humanities Teacher',
    img: 'Collado Pic for Testimonial.png',
    text:'I’ve known Makayla for three years and watched her grow into a dedicated, diligent, and determined young leader. She consistently pushes herself to excel academically, supports those around her, and develops her skills through activities like the DIY club. Her intrinsic motivation and collaborative spirit make her an asset to any group or organization.'
},

{
    id: 2,
    name: 'Didnorha Franco',
    job:'Algebra 1 Teacher',
    img: 'image.png',
    text:'Makayla’s website is organized, easy to follow, and beautifully designed with calming colors and fonts. It reflects her thoughtful, creative personality and even reveals her love for books, adding a personal touch. Her blend of skill, creativity, and kindness makes her someone anyone would be lucky to work with.',
},

{
    id: 3,
    name: 'Aminata Sako',
    job:'peer',
    img: 'IMG_8741.jpg',
    text:'Makayla is a thoughtful person willing to help others around her. She knows what shes doing and I would recomend her if you need a web designer.',
},
];

//select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn'); // make sure HTML uses .prev-btn
const nextBtn = document.querySelector('.next-btn'); // make sure HTML uses .next-btn

let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show previous person
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});































// console.log("Hello World!");

// let myString = "a2b3c";
// console.log(myString);

// let myNumVar = 123;
// console.log(typeof myNumVar);

// console.log(10 + " eggs");
// console.log(10 + 7 + "eggs");
// console.log("eggs " + 10 + 7);

// //Both conditions Need to be true
// console.log(7>3)&&(5<10);

// //Only One condition must be true 
// console.log(10>3)||(10>12);

// //If the statement is logical or not
// console.log(!5>3);


// function introduction(name,age){
//     console.log("Hello, my name is " + name + "and i am" + age + " years old.")
// }

// introduction("Makayla", 105)

// const hour = new Date().getHours();
// let greeting = "";

// if (hour<12){
//     greeting = "Good morning ☀️!";
// }else if (hour < 18){
//     greeting = "Good afternoon⛅";
// }else {
//     greeting = "Good evening 🌙";
// }

// document.getElementById("greeting").innerText = greeting;
