export const HOST = import.meta.env.VITE_SERVER_URL;

export const AUTH_ROUTES = "api/auth";
export const SIGNUP_ROUTE = `${AUTH_ROUTES}/signup`;
export const LOGIN_ROUTE = `${AUTH_ROUTES}/login`;
export const GET_USER_INFO = `${AUTH_ROUTES}/userInfo`;
export const UPDATE_PROFILE = `${AUTH_ROUTES}/updateProfile`;
export const ADD_PROFILE_IMAGE = `${AUTH_ROUTES}/addProfileImage`;
export const REMOVE_PROFILE_IMAGE = `${AUTH_ROUTES}/removeProfileImage`;
export const LOGOUT_ROUTE = `${AUTH_ROUTES}/logout`;

export const CONTACT_ROUTES = "api/contacts";
export const SEARCH_CONTACT_ROUTES = `${CONTACT_ROUTES}/search`;
export const GET_CONTACTS_ROUTES = `${CONTACT_ROUTES}/get-contacts`;

export const MESSAGES_ROUTES = "api/messages";
export const GET_MESSAGES = `${MESSAGES_ROUTES}/get-messages`;