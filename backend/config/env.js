import dotenv from 'dotenv';
import path from 'path';

const currentEnv = process.env.NODE_ENV || 'local';

// firstly load the common/base env variables
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

// Now load the env specific env variables
const envFilePath = path.resolve(process.cwd(), `.env.${currentEnv}`);

// override -> true // will override any duplicate env variable
dotenv.config({ path: envFilePath, override: true });

console.log(`🌍 Environment: ${currentEnv} | DB: ${process.env.DB_NAME}`);
