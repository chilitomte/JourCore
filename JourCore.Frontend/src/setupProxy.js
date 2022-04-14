﻿const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/jours",
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7070',
        secure: false
    });

    app.use(appProxy);
};
