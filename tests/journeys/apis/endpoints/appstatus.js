exports.appStatus = {
    method: 'GET',
    url: `${__ENV.ENDPOINT}/api/appStatus`,
    expectBody: [
        "works",
    ]
};