import users from './data/users.js';
import endpoints from './journeys/endpoints.js';

const sharedUsers = users.stress;
export let options = {
  vus: 1,
  stages: [
    { duration: '2m', target: 5 },
    { duration: '5m', target: 5 },
    { duration: '2m', target: 5 },
    { duration: '5m', target: 5 }
  ],
  thresholds: {
    http_req_failed: ['rate < 0.01'],
    checks: ['rate>0.99'],
    'group_duration{group:::getEndpoints}': ['avg < 400'],
  },
};

export default () => {
  endpoints()
}