export default function addProductToCart(
  snack,
  notifyPurchase,
  handleSetCartList,
  cartList,
  purchaseDeniedNotification,
  numberSnacks = 1
) {
  

  if (cartList.some((item) => item["title"] === snack["title"])) return purchaseDeniedNotification();




  notifyPurchase();
  const newSnack = { ...snack, qtr: numberSnacks };
  handleSetCartList(() => [...cartList, newSnack]);
}
