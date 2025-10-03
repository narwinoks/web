module.exports = {
  apps: [
    {
      name: 'next-profile', // Nama aplikasi Anda
      script: './node_modules/next/dist/bin/next', // Jalankan Next.js secara langsung
      args: 'start -p 8000', // Berikan argumen start dan port di sini
      // env: {
      //   NODE_ENV: 'production',
      // },
    },
  ],
};