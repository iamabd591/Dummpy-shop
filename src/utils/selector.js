export const calculateSubTotal = (qty, price) => {
  const subTotal = qty * price;
  return subTotal ? subTotal : 0;
};
