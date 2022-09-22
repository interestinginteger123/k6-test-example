import { check } from 'k6';
import http from 'k6/http';

export default function login(email, password) {
    const payload = JSON.stringify({
        email: email,
        password: password,
        rememberMe: false
    });

    let res = http.post(`${__ENV.ENDPOINT}/api/login`, payload);

    check(res, {
        'Login succesfully': (r) => r.status == 200 && r.headers.Authorization != undefined,
    });

    return res.headers.Authorization;
}