"use strict";

//constructed from starter code from lab hint
  $('.add-to-order').on('click', () => {
    ${'#cart-items'}.append(`
    <tr>
    <td>${itemName}</td>
    </tr>
    `)
});

//both lab hint/following code appear to work the same in browser
//what we worked on creating
// const button = $('.add-to-order')

// button.querySelector('click', (itemName) => {
//   ${'#cart-items'}.append(`
//     <tr>
//       <td>${itemName}</td>
//     </tr>
//   `)
// }

//original lab code 
// const addItemToCart = (itemName) => {
//   $('#cart-items').append(`
//     <tr>
//       <td>${itemName}</td>
//     </tr>
//   `);
// };

//changing html on browser page to show action: adding additional rows(items)

// HTMLElement.addEventListener(eventType, callback);

const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//
