cd server
npm start &
cd ../client
npm start proxy=http://localhost:3100
