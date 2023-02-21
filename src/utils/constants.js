// Setup for Apis
export const baseURL = process.env.REACT_APP_BASE_URL;
export const paypalClientID = process.env.REACT_APP_PAYPAL_CLIENT_ID;

// Routes
export const routes = {
  DEFAULT: '/',
  SIGN_IN: '/auth/sign-in',
};

export const urls = {
  USERS: 'users',
};

// Value to compare
export const AUTH_SCREEN_PATH = 'auth';

// Price Currency list
export const CURRENCY_LIST = [
  {
    id: 0,
    price: 10,
    coin: 15,
    selected: false,
  },
  {
    id: 1,
    price: 50,
    coin: 75,
    selected: false,
  },
  {
    id: 2,
    price: 100,
    coin: 150,
    selected: false,
  },
  {
    id: 3,
    price: 200,
    coin: 300,
    selected: false,
  },
  { id: 4, price: 500, coin: 750, selected: false },
  {
    id: 5,
    price: 1000,
    coin: 1500,
    selected: false,
  },
];

// Paypal
export const StorageConstants = {
  ACCESS_TOKEN: 'access_token',
  SOCIAL: 'SOCIAL',
  ID_USER: 'ID_USER',
  TRANSACTION: 'TRANSACTION',
  CURRENT_ROLE: 'CURRENT_ROLE',
};
