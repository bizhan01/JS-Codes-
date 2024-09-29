fetch('https://aws.random.cat/meow')
    .then(response => response.json())
    .then(data => console.log(data.file))
    .catch(error => console.log('Error fetching data:', error));


    // javascript tutorial code
    // Author: Rahmatullah Bizhan
    // Email: rahmatullahbizhan@gmail.com
