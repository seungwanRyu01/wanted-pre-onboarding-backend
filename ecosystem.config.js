module.exports = {
    apps: [
        {
            name: 'wanted-api',
            script: 'sudo yarn node index.js',
            instances: 1,
            autorestart: false,
            watch: true
        },
    ],
};