const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

dotenv.config();

const seedAdmin = async () => {
  try {
    // 1. Connect to your database
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Database connected for seeding...');

    // 2. Clear out any existing users if you want a clean slate
    await User.deleteMany();

    // 3. Define YOUR secure credentials here
    const adminEmail = "info@stemiotsoftwares.com"; 
    const rawPassword = "stevemike14"; 

    // 4. Hash it securely using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(rawPassword, salt);

    // 5. Save to the database
    await User.create({
      name: "Stemiot Softwares",
      email: adminEmail,
      password: hashedPassword
    });

    console.log('==================================================');
    console.log('🎉 SUCCESS: Master Admin account seeded perfectly!');
    console.log(`Email: ${adminEmail}`);
    console.log('==================================================');
    
    process.exit();
  } catch (error) {
    console.error('❌ Seeder Failed:', error.message);
    process.exit(1);
  }
};

seedAdmin();