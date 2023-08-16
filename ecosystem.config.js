module.exports = {
    apps: [
        {
            name: 'wanted-api',
            script: 'sudo yarn node index.js',
            cwd: '/home/ubuntu/dev/wanted-pre-onboarding-backend',
            instances: 1,
            autorestart: true,
            watch: true
        },
    ],
};