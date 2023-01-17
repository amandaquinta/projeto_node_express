export const NAME = "NAME";
export const COUNT_LOGIN = "COUNT_LOGIN";
export const TOKEN = "TOKEN";
export const RESET = "RESET";

export const name = name => ({
    type: NAME,
    name: name
});

export const count_login = count_login => ({
    type: COUNT_LOGIN,
    count_login: count_login
});

export const token = token => ({
    type: TOKEN,
    token: token
});

export const reset = () => ({ type: RESET });