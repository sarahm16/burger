

// where the api calls go

// when user presses all burgers button
// api call to '/'
// sends data to views to display all burgers


// user creates burger
// api call to /api/burgers
// name = burger_name
// devoured = false
// append to list of burgers on index

$('#submit').on('click', function() {
    let newBurger = {
        burger_name = $('#new-burger').text(),
        devoured: false
    }
    $.ajax('/api/burgers', {
        type: 'POST',
        data: newBurger
    }).then(function() {
        console.log('created a new burger');
        location.reload();
    })
})


// user updates burger
// presses devour button
// api call to /api/burgers/:id
// changes devour attribute to true
// moves burger to devoured list

// $('#devour').on('click', function() {
//   let id = this.attr('#id');
//   $.ajax({
//       url: `api/burger/${id}`,
//       method:

//   }) 
// })
