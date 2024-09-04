 
// const number = [
//     first= {},
//     second={},
    
// ]

// function greet(name) {
//     console.log(`Hello ${name} !`);
// }


// greet("Onunkwor");

// const numbers = 

// console.log('one');
// setTimeout(()=>{
//     console.log('two');
// } , 2000); // 2s delay




const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cart = [];
let products = ['Crop Tops', 'Sequin dress', 'Gowns', 'Jeans', 'Shirts'];
let wishlists = [];

function displayMenu() {
  console.log('Welcome to House of J Store. We bring Luxury and great apparel to you \n');
  console.log('1. View Products');
  console.log('2. Add to Cart');
  console.log('3. Checkout');
  console.log('4. Add to Wishlist');
  console.log('5. View Wishlist');
  console.log('6. Exit');
}

function viewCart() {
  console.log('\n These are the product(s) you are buying from us:');
  for (let i = 0; i < cart.length; i++) {
    console.log(`${i + 1}. ${cart[i]}`);
  }
}

function viewProducts() {
  console.log('Below are our products:');
  for (let i = 0; i < products.length; i++) {
    console.log(`${i + 1}. ${products[i]}`);
  }
}

function viewWishlist() {
  console.log('\n These are the product(s) in your wishlist:');
  for (let i = 0; i < wishlists.length; i++) {
    console.log(`${i + 1}. ${wishlists[i]}`);
  }
}

function addToCart() {
  viewProducts();
  rl.question("\n Select the product you want to add to cart: ", itemNumber => {
    const index = parseInt(itemNumber) - 1;
    if (index >= 0 && index < products.length) {
      cart.push(products[index]);
      console.log(`${products[index]} added to cart`);
      displayMenu();
      getMenuOption();
    } else {
      console.log('Please select a valid product');
      addToCart();
    }
  });
}

function addTowishlist() {
  viewProducts();
  rl.question("\n Select the product you want to add to wishlist: ", itemNumber => {
    const index = parseInt(itemNumber) - 1;
    if (index >= 0 && index < products.length) {
      wishlists.push(products[index]);
      console.log(`${products[index]} added to wishlist`);
      displayMenu();
      getMenuOption();
    } else {
      console.log('Please select a valid product');
      addTowishlist();
    }
  });
}

function checkout() {
  if (cart.length === 0) {
    console.log('\n Your cart is empty \n \n');
    displayMenu();
    getMenuOption();
  } else {
    console.log('\n Thank you for shopping with House of J  E-shop! \n');
    viewCart();
    rl.close();
  }
}

function getMenuOption() {
  rl.question('Enter your choice: ', option => {
    switch (option) {
      case '1':
        viewProducts();
        displayMenu();
        getMenuOption();
        break;
      case '2':
        addToCart();
        break;
      case '3':
        checkout();
        break;
      case '4':
        addTowishlist();
        break;
      case '5':
        viewWishlist();
        displayMenu();
        getMenuOption();
        break;
      case '6':
        rl.close();
        break;
      default:
        console.log('Please select a valid option');
        displayMenu();
        getMenuOption();
    }
  });
}

displayMenu();
getMenuOption();















  