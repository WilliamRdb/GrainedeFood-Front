export const SET_SUB_ONE_MONTH = 'SET_SUB_ONE_MONTH';

export const setSub1Month = () => ({
  type: SET_SUB_ONE_MONTH,
  
});

export const SET_SUB_THREE_MONTH = 'SET_SUB_THREE_MONTH';

export const setSub3Month = () => ({
  type: SET_SUB_THREE_MONTH,
  
});

export const SET_SUB_SIX_MONTH = 'SET_SUB_SIX_MONTH';

export const setSub6Month = () => ({
  type: SET_SUB_SIX_MONTH,
});

export const SET_FINAL_PRICE= 'SET_FINAL_PRICE';

export const setFinalPrice = (finalPrice) => ({
  type: SET_FINAL_PRICE,
  finalPrice
});

export const SET_START_DATE = 'SET_START_DATE';

export const setStartDate = (orderStartDate) => ({
  type: SET_START_DATE,
  orderStartDate,
});

export const SET_END_DATE = 'SET_END_DATE';

export const setEndDate = (orderEndDate) => ({
  type: SET_END_DATE,
  orderEndDate,
});