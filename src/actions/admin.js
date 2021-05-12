export const SET_NEW_PROMO_CODE = 'SET_NEW_PROMO_CODE';

export const setNewPromoCode = (element) => ({
  type: SET_NEW_PROMO_CODE,
  element
});

export const SET_NEW_PROMO_POURCENT = 'SET_NEW_PROMO_POURCENT';

export const setNewPromoPourcent = (element) => ({
  type: SET_NEW_PROMO_POURCENT,
  element
});

export const SET_NEW_PROMO_START_DATE = 'SET_NEW_PROMO_START_DATE';

export const setNewPromoStartDate = (element) => ({
  type: SET_NEW_PROMO_START_DATE,
  element
});

export const SET_NEW_PROMO_END_DATE = 'SET_NEW_PROMO_END_DATE';

export const setNewPromoEndDate = (element) => ({
  type: SET_NEW_PROMO_END_DATE,
  element
});

export const SEARCH_CODE_PROMO = 'SEARCH_CODE_PROMO';

export const searchCodePromo = (promoCodeSearched) => ({
  type: SEARCH_CODE_PROMO,
  promoCodeSearched,
});

export const MODIFY_CODE_PROMO = 'MODIFY_CODE_PROMO';

export const modifyCodePromo = (promoCode, promoPourcent, promoStartDate, promoEndDate,) => ({
  type: MODIFY_CODE_PROMO,
  promoCode,
  promoPourcent,
  promoStartDate,
  promoEndDate,
});

