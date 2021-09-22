"use strict";

//constructed from starter code from lab hint
//   $('.add-to-order').on('click', () => {
//     ${'#cart-items'}.append(`
//     <tr>
//     <td>${itemName}</td>
//     </tr>
//     `)
// });

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

//original lab code // with event jandler present, 
//when commented out, still shows browser in but 
//no coffee price or ability to add when pressing add to cart button
const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

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

    //1           //2  //3     //4       
$('.add-to-order').on('click', () => {
    addItemToCart('Coffee'); //4-1
    incrementCartTotal(1.50); //4-2
});

//1 jQuery accessing add-to-order id html attribute (. bc CSS class selector)
//2 jQuery .on() method: attaches event handlers to jQ object
//3 parameter: mouse event type 
//4 callback function
//4-1 refers addItemToCart() function returning str 'Coffee'
//4-2 refers incrementCartTotal() returning float (price)


//my original answer
// ${"place-order"}.on('click', ()) => {
//   resetCart();
// });

    // 1         //2   //3    //4
$('#place-order').on('click', () => {
  //4-1                  //4-2          //4-3      //4-4
  incrementCoffeeSold($('#cart-items').children().length);
    //4-5
  resetCart();
});

//1 jQuery accessing place-to-order id html attribute (# bc CSS id)
//2 jQuery .on() method: attaches event handlers element in jQ object
//3 parameter: mouse even type
//4 callback function
//4-1 refers incrementCoffeeSold function returning:
//4-2 jQ accessing cart-items id html attribute attached to
//4-3 jQ .children() method attached to
//4-4 the length property 
//4-5 refers to resertCart() function returning '0.00' & remove cart items
        //jQ referencing cart-total id, using .html() method to 
        //set to set <span> to '0.00'
        //jQ referencing cart-items id to remove added 
        // child <tr> elements


//.html - Get the HTML contents of the first element in the set of matched elements.

//.empty() - Remove all child nodes of the set of matched elements from the DOM.