const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    //stop the form from submitting
    e.preventDefault();
    //get height  # for id
    //why .value bcoz we get a string from the input
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
      //apply checks 

      if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
      } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
      } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi }</span><br>`;

        if(bmi<18.5){
            results.innerHTML += `<span>Underweight</span>`
      }
      else if(bmi>=18.5 && bmi<=24.9){
        results.innerHTML += ` <span>Normal</span>`
      }
      else{
        results.innerHTML += `<span>Overweight</span>`
      }
    }
});

// const form = document.querySelector('form');

// form.addEventListener('submit', function(e) {
//     // Stop the form from submitting
//     e.preventDefault();

//     // Get height and weight from input fields
//     const height = parseInt(document.querySelector("#height").value);
//     const weight = parseInt(document.querySelector("#weight").value);
//     const result = document.querySelector("#results");

//     // Validate height and weight
//     if (isNaN(height) || height <= 0) {
//         result.innerHTML = `Please enter a valid height.`;
//     } else if (isNaN(weight) || weight <= 0) {
//         result.innerHTML = `Please enter a valid weight.`;
//     } else {
//         // Calculate BMI
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2);

//         // Show the BMI result
//         result.innerHTML = `<span>BMI: ${bmi}</span><br>`;

//         // Provide BMI category
//         if (bmi < 18.5) {
//             result.innerHTML += `<span>Category: Underweight</span>`;
//         } else if (bmi >= 18.5 && bmi <= 24.9) {
//             result.innerHTML += `<span>Category: Normal</span>`;
//         } else {
//             result.innerHTML += `<span>Category: Overweight</span>`;
//         }
//     }
// });
