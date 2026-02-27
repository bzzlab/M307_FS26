fetch('https://openlibrary.org/subjects/web_programming.json?limit=15', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
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




