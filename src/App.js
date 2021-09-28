function calcularTotal(quantity, price, state) {
  var subTotal = quantity * price;
  var tax;
    switch(state){
      case "UT":
          tax = 0.0665;
          break;
      case "NV":
          tax = 0.08;
          break;
      case "TX":
          tax = 0.0625;
          break;
      case "AL":
          tax = 0.04;
          break;
      case "CA":
          tax = 0.0825;
          break;
      default:
          
          break;
    }
  return subTotal+(subTotal*tax);
}

export default calcularTotal;
