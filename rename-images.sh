#!/bin/bash

cd /Users/sagarsahu/Developer/dhawan-properties/public

# Create copies with simple names
if [ -f "Screenshot 2025-09-07 at 10.34.30 PM.png" ]; then
    cp "Screenshot 2025-09-07 at 10.34.30 PM.png" connectivity1.png
    echo "Created connectivity1.png"
fi

if [ -f "Screenshot 2025-09-07 at 10.36.32 PM.png" ]; then
    cp "Screenshot 2025-09-07 at 10.36.32 PM.png" connectivity2.png
    echo "Created connectivity2.png"
fi

if [ -f "Screenshot 2025-09-07 at 10.36.55 PM.png" ]; then
    cp "Screenshot 2025-09-07 at 10.36.55 PM.png" connectivity3.png
    echo "Created connectivity3.png"
fi

echo "All files copied successfully!"
ls -la connectivity*.png
