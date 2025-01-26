// console.log('connected')
// const button = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// button.forEach((button) => {
//     button.addEventListener('click', () => {
//         body.style.backgroundColor = button.style.backgroundColor;
//     });
// });


// body.style.backgroundColor = button.style.backgroundColor;

// The problem is that button.style.backgroundColor refers to the inline style of the button,
//  not its computed or inherited styles. If the button’s background color is set via CSS
//  (e.g., in an external stylesheet or a <style> block), 
// button.style.backgroundColor will return an empty string because the inline style isn't explicitly set.
// To fix this, you should use the getComputedStyle function to retrieve the computed background color of the button



// console.log('connected');
// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         const buttonBgColor = window.getComputedStyle(button).backgroundColor;
//         body.style.backgroundColor = buttonBgColor;
//     });
// });


// Explanation of the Fix:
// window.getComputedStyle(element).backgroundColor: This retrieves the computed value of 
// the backgroundColor property for the button, regardless of whether it is set inline or in a stylesheet.
// The variable buttonBgColor stores the computed background color, which is then applied to the body.

// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.addEventListener('click', (e) => {
//     if (e.target.id === 'grey') {
//         body.style.backgroundColor = e.target.id;
//       }
// });
const body = document.querySelector('body'); // Define the body element

// document.addEventListener('click', (e) => {
//     if (e.target.classList.contains('button')) {
//         body.style.backgroundColor = e.target.id; // Ensure the id is a valid color
//     }
// });

const buttons = document.querySelectorAll('.button');

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        
            body.style.backgroundColor = e.target.id;
    });
});