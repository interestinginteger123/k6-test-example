import * as api from './apis/index.js';
import { check, group } from 'k6';
import { endpoints } from './apis/endpoints/index.js';
import http from 'k6/http';

export default function load() {
    let user = sharedUsers[__VU - 1];

    let token;
    group("login", function () { token = api.login(user.email, user.password) });
    
    group("getEndpoints", function () {
        const endPointsArray = endpoints(token);
        http.setResponseCallback(http.expectedStatuses(200, 201));

        let responses = http.batch(endPointsArray)

        for (let i = 0; i < responses.length; i++) {

            let element = responses[i];

            check(element, { "All status 2XX": (r) => r.status == 200 || r.status == 201 });
            if (element.headers['Content-Type'].includes('application/json;')) {
                let testBodyKeys = endPointsArray[i].expectBody;
                if ((parseInt(testBodyKeys[0])) == 0 && parseInt(Object.keys(JSON.parse(element.body))[0]) == 0) // If response is just an array of items ie: star products
                {
                    check(element, { "All Expected Body matches": (e) => testBodyKeys.some((key, index) => testBodyKeys[index] == Object.keys(JSON.parse(e.body))[index]) });
                }
                else {
                    check(element, { "All Expected Body matches": (e) => testBodyKeys.every((key, index) => testBodyKeys[index] == Object.keys(JSON.parse(e.body))[index]) && Object.keys(JSON.parse(e.body)).length == testBodyKeys.length });
                }

            } else {
                check(element, { "All Expected Body matches": (e) => e.body == endPointsArray[i].expectBody });
            }
        }
    });
}