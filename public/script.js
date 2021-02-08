const form = document.querySelector('#myForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // const food1 = document.querySelector('#food1').value;
    // const food2 = document.querySelector('#food2').value;
    // const food3 = document.querySelector('#food3').value;
    // const food4 = document.querySelector('#food4').value;
    // const food5 = document.querySelector('#food5').value;
    // const food6 = document.querySelector('#food6').value;
    // const food7 = document.querySelector('#food7').value;
    // const food8 = document.querySelector('#food8').value;
    // const food9 = document.querySelector('#food9').value;

    const items = {
        product: "z_amazon", 
        calories: 4.0, 
        carbs: 7.0, 
        time: "time_level_4", 
        dish: "fish", 
        heat: "optional_heat", 
        fat: 8.0, 
        no_ingredients: 4, 
        proteins: 9.2, 
        proteins_class: "fish", 
        cuisine: "Asian"
    };
     fetch('https://restaurant-api-sales.herokuapp.com/predict', {
         headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
         },
         method: "POST", 
         body: JSON.stringify(items),
         mode: "no-cors"

     })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        });
    
})