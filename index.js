const groceryItem1 = { item: 'apples', quantity: 6 }; // creates an object
const groceryItem2 = { item: 'bananas', quantity: 4 }; // creates an object
const groceryItem3 = { item: 'carrots', quantity: 2 }; // creates an object

const newGroceryItem = { item: 'eggs', quantity: 12 };

const groceries = [groceryItem1, groceryItem2]; // creates an array with two grocery items

groceries.push(groceryItem3); // adds an object to end of the groceries array.
groceries.push({ item: 'donuts', quantity: 12 }); // creates an object and assigns it to the end of the groceries array
groceries.push(newGroceryItem);

console.log('Buy ' + groceries[0].quantity + ' ' + groceries[0].item);
console.log('Buy ' + groceries[1].quantity + ' ' + groceries[1].item);
console.log('Buy ' + groceries[2].quantity + ' ' + groceries[2].item);
console.log('Buy ' + groceries[3].quantity + ' ' + groceries[3].item);
console.log('Buy ' + groceries[4].quantity + ' ' + groceries[4].item);
