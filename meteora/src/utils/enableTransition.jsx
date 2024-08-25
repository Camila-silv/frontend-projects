export const enableTransition = (list, product, set, showModal) => {
    const transitionValidation = list.some((item) => item.id === product.id);

    if (!transitionValidation) {
        set({ ...showModal, alertPurchasedItem: true });

      setTimeout(() => {
        set({ ...showModal, alertPurchasedItem: false });
      }, 1000 * 2);

      return;
    }

    set({ ...showModal, itemAlreadyPurchased: true });

    setTimeout(() => {
      set({ ...showModal, itemAlreadyPurchased: false });
    }, 1000 * 2);
  }


