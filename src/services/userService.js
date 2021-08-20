import http from './httpService';

export function getUsers() {
    return http.get('/');
};

export function getUser(userId) {
    return http.get(`/${userId}`);
};
