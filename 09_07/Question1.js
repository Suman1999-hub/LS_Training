const students = [
  { name: "Alice", scores: [95, 85, 90] },
  { name: "Bob", scores: [70, 75, 80] },
  { name: "Charlie", scores: [88, 92, 85] },
  { name: "David", scores: [60, 65, 70] },
  { name: "Eve", scores: [98, 100, 95] },
];
// Calculate the average score for each student

let x = students.map((e) => {
  let sum = 0;
  e.scores.map((e1) => {
    sum += e1;
  });
  sum = sum / 3;
  return { name: e.name, avg: sum };
});
console.log(x);

//Find the student with the highest average score
let max = 0;
let i = -1;
let y = x.map((e, ind) => {
  if (e > max) {
    max = e;
  }
  i = ind;
});
console.log(students[i]);

//Filter out the students who have an average score below 80
let z = x.filter((e) => e.avg > 80);
console.log(z);

//An array of product objects, each with the following structure:
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 750 },
  { id: 4, name: "Monitor", price: 300 },
  { id: 5, name: "Headphones", price: 150 },
];

//An array of order objects, each with the following structure:

const orders = [
  {
    orderId: 1,
    customerId: 1,
    items: [
      { productId: 1, quantity: 1 },
      { productId: 2, quantity: 2 },
    ],
  },
  { orderId: 2, customerId: 2, items: [{ productId: 3, quantity: 1 }] },
  {
    orderId: 3,
    customerId: 1,
    items: [
      { productId: 4, quantity: 2 },
      { productId: 5, quantity: 1 },
    ],
  },
  {
    orderId: 4,
    customerId: 3,
    items: [
      { productId: 2, quantity: 3 },
      { productId: 5, quantity: 2 },
    ],
  },
];

//Calculate the total value of each order.

const ans = orders.map((curr) => {
  let sum = 0;
  curr.items.map((pe) => {
    products.map((e) => {
      if (pe.productId === e.id) {
        sum += pe.quantity * e.price;
      }
    });
  });
  return {
    orderId: curr.orderId,
    customerId: curr.customerId,
    totalValue: sum,
  };
});
console.log(ans);
// let customerBuy = 0;
// const customer = ans.map((e) => {
//   //console.log(e);
// });
let arr = [];
let totalSum = 0;
for (let i = 0; i < ans.length - 1; i++) {
  let x = ans[i].customerId;
  for (let j = i + 1; j < ans.length; j++) {
    if (x === ans[j].customerId) {
      totalSum = ans[i].totalValue + ans[j].totalValue;
      arr.push({ customerId: ans[j].customerId, mostMoneySpent: totalSum });
      break;
    }
  }
}
console.log(arr);

let mostFrequentlyOrdered = products.map((p) => {
  let count = 0;
  orders.map((e) => {
    e.items.map((curr) => {
      if (p.id == curr.productId) {
        count += curr.quantity;
      }
    });
  });
  return { products: p.id, totalQuantity: count };
});
// console.log(mostFrequentlyOrdered);

mostFrequentlyOrdered.sort((a, b) => a.totalQuantity - b.totalQuantity);
console.log(mostFrequentlyOrdered[mostFrequentlyOrdered.length - 1]);
