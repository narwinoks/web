module.exports = {
  apps: [
    {
      name: 'next-profile',
      script: './node_modules/next/dist/bin/next',
      args: 'start -p 8000', // Port diubah ke 8001
      cwd: '/home/narnowin/app/', // Path diperbarui ke direktori yang benar
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};