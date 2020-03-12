$('#submit-burger').on('submit', function() {
    console.log('we did it')
    event.preventDefault();
    let newBurger = {
        name = $('#new-burger').val().trim(),
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

$('#devour').on('click', function() {
    console.log('we did it woooo')
    let id = $(this).data('id');
    let newDevouredState = {
      devoured: true
  }
  $.ajax({
      url: `api/burgers/${id}`,
      method: 'PUT',
      data: newDevouredState
  }).then(function() {
        console.log('Changed devoured state to ', newDevouredState);
        location.reload();
  })
})
