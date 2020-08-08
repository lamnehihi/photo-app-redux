# Build reactjs app with production mode 
npm run build

# Move to build folder
cd build

# Clone index.html into 200.html
cp index.html 200.html

# Start deploy via Surge.sh
# The command means deploy current folder to domain lamnehihi-photo-app.surge.sh
npx surge . lamnehihi-photo-app.surge.sh
