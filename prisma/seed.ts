/* eslint-disable */
// Gunakan sintaks 'require' dari CommonJS
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log(`Memulai proses seeding...`);
  const saltRounds = 10;

  const userWinanteng = await prisma.user.upsert({
    where: { username: 'winanteng' },
    update: {},
    create: {
      username: 'winanteng',
      password: await bcrypt.hash('passwordadmin', saltRounds),
    },
  });
  console.log(`User '${userWinanteng.username}' berhasil dibuat/ditemukan.`);

  const categoriesToSeed = [
    { id: 1, name: 'General', icon: '<IoIosOptions />' },
    { id: 2, name: 'Tech', icon: '<IoIosCode />' },
    { id: 3, name: 'Info', icon: '<AiOutlineInfoCircle />' },
    { id: 4, name: 'Personal', icon: '<AiOutlineUser />' },
  ];

  console.log('Memulai seeding kategori...');

  // Loop dan jalankan upsert untuk setiap kategori
  for (const categoryData of categoriesToSeed) {
    const category = await prisma.categories.upsert({
      where: { id: categoryData.id },
      update: {},
      create: categoryData,
    });
    console.log(
      `Kategori '${category.name}' (ID: ${category.id}) berhasil dibuat/ditemukan.`,
    );
  }

  console.log(`Proses seeding selesai.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Selalu tutup koneksi database setelah selesai
    await prisma.$disconnect();
  });
