#### HACKBRIGHT RESOURCES ####
0921 lab instructions:
https://fellowship.hackbrightacademy.com/materials/serft8/exercises/js-coffee-app/

0921 afternoon lecture (JavaScript and Event Handling):
https://fellowship.hackbrightacademy.com/materials/serft8/lectures/js-event-handling/

0921 morning lecture (JavaScript and DOM Manipulation):
https://fellowship.hackbrightacademy.com/materials/serft8/lectures/js-dom-manipulation/




## Getting Elements with jQuery ## (0921 morning lecture)

$(selector)
Return jQuery object with all elements that match the selector
Reference: jQuery API Docs: jQuery()

* jQuery                    vs          Built-in JavaScript *
$('#main-content');                     document.querySelectorAll('#main-content');

$('p');                                 document.querySelectorAll('p');

$('p').first();                         document.querySelector('p');


## Common Event Types ## (0921 afternoon lecture)

[:link:MDN Web Docs: Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)

Mouse events
    click — when you click on an element
    dblclick — when you double-click on an element
    mouseover — when the mouse is on top of an element
Input events
    change — when the value of an input element changes
Form events
    submit — when a form is submitted

#### EXCERPT FROM LAB ####
Features for Ordering Coffee

Here are the features!

Add Item to Cart

Add an event handler to the Add to cart button that will allow users to add a product to their cart like so.

[GIF]

[EVENT-TRIGGER]: When a user clicks on the Add to cart button for an item
[RESULT]: (1) the item’s name should appear in their cart and
        (2) the value of the item added to the cart’s total.

[EVENT-TYPE] 'click'

[HINT]

[NEXT-STEP]: how to select the Add to cart button with jQuery

* from index.html:
    <button class="add-to-order">
                  Add to cart
    </button>

* jQuery                    vs          Built-in JavaScript *
$('#main-content');                     document.querySelectorAll('#main-content')

DESIRED CODE for jQuery: $('.add-to-order')

<!-- You can do this one of two ways. Either way, your goal is to write a CSS selector that targets the button. You can dig through the HTML in templates/index.html until you find the button in question or you can use your browser’s dev tools — to do this, right-click on the Add to cart button in your browser and click Inspect Element. Your dev tools should open up and show you the HTML for the element that you clicked on. -->

[NEXT-STEP]: add an event listener onto the button
            Add this code to static/js/coffeeShop.js.

### EXAMPLE FROM AFTERNOON LECTURE *1

    <!-- Remember to use the functions we’ve already defined in the body of your callback function. If you need help getting started, check out the hint below. -->

    [HINT]
    <!-- Starter code for adding an item to the cart
    //$('.add-to-order').on('click', () => {
    // This is the body of your callback function -- add more
    // code here!
    //
    // (You'll want to call the functions we've already defined
    // to manipulate the DOM)
    }); -->

### EXAMPLE FROM MORNING LECTURE **2


Remember — you can test your code by going to localhost:5000 in your browser. You may need to hard-reload the page to get your browser to pull in the latest copy of your JavaScript.

When you’re finished, check your code against the solution below and move on to the next section!

### EXCERPT FROM LAB 2 ###
[NEXT-STEP] Place an Order

[EVENT-TRIGGER] user clicks on the Place Order button

[RESULT] amount of coffee ordered should be added to the total amount of coffee sold and the cart should reset.

[GIF]

Before we get to the part where you select the Place Order button with jQuery and add an event listener to it, we need to explain how you can get the number of items in the cart (so you can update the sentence in the site heading that says We've proudly served _ cups of coffee).

One way to go about this is to create a global variable to store the number of items in the cart. Then, you can increment it every time the user adds a cup of coffee to the cart. But there’s an even better way that doesn’t require a global variable at all — you can actually compute this number on the fly as long as you understand how the DOM works! Let’s talk about that.

Here’s the HTML that makes up the user’s cart. We’re interested in the tbody element since that’s where we append tr elements [EVENT-TRIGGER]whenever the user adds another coffee to their cart.

<section id="your-cart">
  <!-- (...snippet) -->

  <table>
    <thead>
      <tr>
        <th>Item</th>
      </tr>
    </thead>

    <tbody id="cart-items"></tbody>
  </table>

  <!-- (...snippet) -->
</section>

[RESULT] Here’s how tbody might look after the user has added 2 cups of coffee:

tbody in HTML
<tbody id="cart-items">
  <tr>
    <td>Coffee</td>
  </tr>
  <tr>
    <td>Coffee</td>
  </tr>
</tbody>


The tr nodes are tbody’s children. Each tr is a row in the table and each row is a cup of coffee. Since the user added 2 cups of coffee to the cart, tbody contains 2 children. If we figure out a way to get the amount of children tbody has, that will give us the number of coffee cups in the user’s cart!

jQuery has a bunch of methods related to traversing the DOM (you can check out the list of methods in this category here: jQuery Documentation - Category: Tree Traversal). One of those methods is jQuery.children — it’ll return an element’s children. FROM DOC:        .children()
            Get the children of each element in the set of matched elements, optionally filtered by a selector.


[NEXT-STEP] In the browser, click on the Add to Order button a couple of times to populate your cart.

[NEXT-STEP] open the web console and call: $('#cart-items').children()

[RESULT] should see a jQuery object that looks like a collection of elements. It has a length! 

[NEXT-STEP] in console call: ('#cart-items').children().length
    length is a property that counts the num of elements in the jQ object


[RESULT] get the number of coffee cups in the user’s cart

[NEXT-STEP]add code to static/js/coffeeShop.js that 

[EVENT-TYPE] updates the total amount of cups sold and resets the cart when 

[EVENT-TRIGGER] a user clicks on the Place Order button. 


[HINT] solution below
    $(‘#place-order’).on(‘click’, () => {
    // This is the body of your callback function! Add more code here!

    });




[SOLUTION]

$('#place-order').on('click', () => {
  incrementCoffeeSold($('#cart-items').children().length);
  resetCart();
});








### EXAMPLE *1

* EXAMPLE FROM AFTERNOON LECTURE (Adding Event Listeners):

    const button = document.querySelector('#angry-button');

    button.addEventListener('click', () => {
    alert('Stop clicking me!');
    });

    

    document.querySelector('#angry-button').addEventListener('click', () => {
    alert('Stop clicking me!');
    });

    const button = JQUERY-HERE;

    button.addEventListener('click', SOME-FUNCTION);

* ALREADY IN JS FILE *
const addItemToCart = JQUERY-HERE.addEventListener(EVENT-TRIGGER, (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
}
);

## USE THIS ##
const addItemToCart = JQUERY-HERE.addEventListener(EVENT-TRIGGER, (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
}
);

const button = $('.add-to-order')

button.querySelector('click', (itemName) => {

}

const button = document.querySelector('#angry-button');






### EXAMPLE **2

    want button to change font-family of the page
    <button class="font-changer" id="monospace">
    Change to monospace!
    </button>
    <button class="font-changer" id="sans-serif">
    Change to sans-serif!
    </button>

    $('#monospace').on('click', () => {
    $('body').css('fontFamily', 'monospace');
    });

    $('#sans-serif').on('click', () => {
    $('body').css('fontFamily', 'sans-serif');
    });

    If we take advantage of Event.target, we can avoid repetition

    $('button.font-changer').on('click', (evt) => {
    const button = $(evt.target);

    const buttonId = button.attr('id');

    $('body').css('fontFamily', buttonId);
    });