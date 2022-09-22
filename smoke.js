import endpoints from './tests/journeys/endpoints.js';
import purchaseVoucher from './tests/journeys/purchasevoucher.js';
import registerUser from "./tests/journeys/registerUser.js";
import transactionHistory from './tests/journeys/transactionHistory.js';
import users from './tests/data/users.js';

export let options = {
    vus: 1,
    iterations: 1,
    thresholds: {
        http_req_failed: ['rate <= 0.00'],
        checks: ['rate>=1.0'],
        'group_duration{group:::registerNewUser}': ['max < 10000'],
        'group_duration{group:::registerExistingUser}': ['max < 10000'],
    },
};

const sharedUsers = users.smoke;
export default () => {
    endpoints()
}
