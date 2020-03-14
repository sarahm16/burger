
$(function() {

    //api call to router when user creates new burger
    $('#submit-burger').on('click', function() {
        event.preventDefault();
        let newBurger = {
            name: $('#new-burger').val(),
        }
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function() {
            console.log('created a new burger');
            location.reload();
        })
    })
    
    // api call to router when user presses button to devour burger
    $('.devour').on('click', function() {
        let id = $(this).data('id');
        console.log('hello')
        let newDevouredState = {
          devoured: 1
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
})
