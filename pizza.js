const takeOrder = ( ) => {
  console.log('Order : pizza')
}

// calling a function
const takeOrder = ( ) => {
  console.log('Order : pizza')
 
}

takeOrder()

//adding a parameter: topping
const takeOrder = (topping) => {
  console.log('Order : pizza')
 
}

takeOrder()

//incorporating the parameter in the function
const takeOrder = (topping) => {
  console.log('Order : pizza topped with ' + topping);
 
}

takeOrder('olives')

//calling the function three times
const takeOrder = (topping,crustType) => {
  console.log('Order : ' + crustType +  ' pizza topped with ' + topping);
 
}

takeOrder('bacon', 'thin crust')
takeOrder('mushroom', 'thick crust')
takeOrder('olives', 'pan crust')

//using itemCount to calculate cost 
let orderCount = 0;
const takeOrder = (topping,crustType) => {
  console.log('Order : ' + crustType +  ' pizza topped with ' + topping);
 orderCount += 1;
}

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
  
}
takeOrder('bacon', 'thin crust')
takeOrder('mushroom', 'thick crust')
takeOrder('olives', 'pan crust')

// get total cost
let orderCount = 0;
const takeOrder = (topping,crustType) => {
  console.log('Order : ' + crustType +  ' pizza topped with ' + topping);
 orderCount += 1;
}

const getSubTotal = (orderCount) => {
  return orderCount * 7.5;
  
}
takeOrder('bacon', 'thin crust')
takeOrder('mushroom', 'thick crust')
takeOrder('olives', 'pan crust')
console.log(getSubTotal(orderCount))

// with addition of tax @ 6%
let orderCount = 0;
const takeOrder = (topping,crustType) => {
  console.log('Order : ' + crustType +  ' pizza topped with ' + topping);
 orderCount += 1;
}

const getSubTotal = (orderCount) => {
  return orderCount * 7.5;
  
}
const getTax = (orderCount) => {
  return getSubTotal(orderCount) * 0.06;
  
}
const getTotal = () => {
  return getSubTotal(orderCount) + getTax(orderCount);
}
takeOrder('bacon', 'thin crust')
takeOrder('mushroom', 'thick crust')
takeOrder('olives', 'pan crust')
console.log(getSubTotal(orderCount))
console.log(getTotal())