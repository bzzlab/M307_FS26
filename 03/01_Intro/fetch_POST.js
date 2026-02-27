
let inputData = {
    name: 'Max'
};

let jsonInputData = JSON.stringify(inputData);

fetch('https://easypost.toiwxr.easypanel.host/hello', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: jsonInputData,
})
.then(response => {
    return response.json();

})
.then(data => {
    console.log(data);

})
.catch(err => {
    // Ein Fehler ist aufgetreten
    console.log(err);
});




