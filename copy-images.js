const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

// Copy screenshot files with simpler names
try {
  fs.copyFileSync(
    path.join(publicDir, 'Screenshot 2025-09-07 at 10.34.30 PM.png'),
    path.join(publicDir, 'connectivity1.png')
  );
  
  fs.copyFileSync(
    path.join(publicDir, 'Screenshot 2025-09-07 at 10.36.32 PM.png'),
    path.join(publicDir, 'connectivity2.png')
  );
  
  fs.copyFileSync(
    path.join(publicDir, 'Screenshot 2025-09-07 at 10.36.55 PM.png'),
    path.join(publicDir, 'connectivity3.png')
  );
  
  console.log('Successfully copied all connectivity images!');
  console.log('Files created:');
  console.log('- connectivity1.png');
  console.log('- connectivity2.png');
  console.log('- connectivity3.png');
} catch (error) {
  console.error('Error copying files:', error.message);
}
