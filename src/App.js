function calcularTotal(quantity, price, state) {
  subTotal = quantity * price;
  var tax;
    switch(state){
        case "UT":
            
            break;
        case "NV":
            
            break;
        case "TX":
            
            break;
        case "AL":
            
            break;
        case "CA":
            
            break;
        default:
            
            break;
    }
  return subTotal+(subTotal*tax);
}

export default calcularTotal;
