export default function dealWithItemQuantity(
  operation,
  cartList,
  setCartList,
  product,
  numberSnacks = 1
) {
  if (operation === "negative") {
    if (cartList.some((item) => item["title"] === product["title"])) {
      const index = cartList.findIndex(
        (item) => item["title"] === product["title"]
      );

      if (cartList[index].qtr <= 1) return;

      return setCartList((prevList) =>
        prevList.map((item, i) =>
          i === index ? { ...item, qtr: item.qtr - numberSnacks } : item
        )
      );
    } 
  }

  if (operation === "positive") {
    if (cartList.some((item) => item["title"] === product["title"])) {
      const index = cartList.findIndex(
        (item) => item["title"] === product["title"]
      );

      if (cartList[index].qtr >= 10) return;

      return setCartList((prevList) =>
        prevList.map((item, i) =>
          i === index ? { ...item, qtr: item.qtr + numberSnacks } : item
        )
      );
    }
  } 
}
