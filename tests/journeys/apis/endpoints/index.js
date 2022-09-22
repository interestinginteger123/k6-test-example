const { appStatus } = require('./appstatus.js');
const { appText } = require('./apptext.js');

const ALL_ENDPOINTS = [
    appStatus,
    appText
];

function endpoints(auth) {
    return ALL_ENDPOINTS.map(endpoint => {
        return {
            ...endpoint,
            params: {
                headers: {
                    'Authorization': `${auth}`
                }
            }
        };
    });
}

exports.endpoints = endpoints;