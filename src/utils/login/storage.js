import { ACCESS_TOKEN } from '../../store/api';

export const setTokenInitial = () => {
  return setTokenItem(ACCESS_TOKEN, JSON.stringify([]));
};

export const getTokenItem = (TokenType) => {
  return localStorage.getItem(TokenType);
};

export const setTokenItem = (TokenType, TokenValue) => {
  return localStorage.setItem(TokenType, TokenValue);
};

export const clearTokenItemAll = () => {
  localStorage.clear();
};
