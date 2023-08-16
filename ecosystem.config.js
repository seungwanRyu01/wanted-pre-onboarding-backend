module.exports = {
    apps: [
        {
            name: 'wanted-api',
            script: 'yarn node index.js',
            cwd: '/home/ubuntu/dev/wanted-pre-onboarding-backend',
            instances: 1,
            autorestart: false,
            watch: true
        },
    ],
};