exports.appText = {
    method: 'GET',
    url: `${__ENV.ENDPOINT}/api/appText`,
    expectBody: [
        "TEST"
    ]
};