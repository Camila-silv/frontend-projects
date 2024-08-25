export const BUY_PRODUCT = "BUY_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const CHANGE_QUANTIFY_PIECES = "CHANGE_QUANTIFY_PIECES";

const cartReducer = (state, action) => {
  switch (action.type) {
    case BUY_PRODUCT:
      return buyProduct(state, action.value);
    case REMOVE_PRODUCT:
      return removeProduct(state, action.value);
    case CHANGE_QUANTIFY_PIECES:
      return changeQuantityPieces(state, action.value, action.selector);
  }
};

export default cartReducer;

const buyProduct = (list, value) => {
  if (list.some((item) => item.id === value.id)) {
    return list;
  }
  localStorage.setItem("cart", JSON.stringify([...list, value]));
  return [...list, value];
};

const removeProduct = (list, product) => {
  const updatedList = list.filter((item) => item.id !== product.id);

  localStorage.setItem("cart", JSON.stringify(updatedList));
  return updatedList;
};

const changeQuantityPieces = (list, product, selector) => {
  const listaParaAtualizacao = [...list];
  const index = list.findIndex((item) => item.id === product.id);

  if (selector === "addition") {
    listaParaAtualizacao.splice(index, 1, {
      ...product,
      qtd: product.qtd + 1,
    });

    localStorage.setItem("cart", JSON.stringify(listaParaAtualizacao));
    return listaParaAtualizacao;
  }

  if (product.qtd === 1) {
    return list;
  }

  listaParaAtualizacao.splice(index, 1, {
    ...product,
    qtd: product.qtd - 1,
  });

  localStorage.setItem("cart", JSON.stringify(listaParaAtualizacao));
  return listaParaAtualizacao;
};
