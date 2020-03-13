$(function() {
    $('#submit-burger').on('submit', function() {
        event.preventDefault();
        let newBurger = {
            burger_name: $('#new-burger').val().trim(),
            devoured: 0
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
})
