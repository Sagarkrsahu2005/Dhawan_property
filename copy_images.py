import shutil
import os

public_dir = '/Users/sagarsahu/Developer/dhawan-properties/public'
os.chdir(public_dir)

files_to_copy = [
    ('Screenshot 2025-09-07 at 10.34.30 PM.png', 'connectivity1.png'),
    ('Screenshot 2025-09-07 at 10.36.32 PM.png', 'connectivity2.png'),
    ('Screenshot 2025-09-07 at 10.36.55 PM.png', 'connectivity3.png')
]

for source, dest in files_to_copy:
    try:
        if os.path.exists(source):
            shutil.copy2(source, dest)
            print(f"✓ Copied {source} → {dest}")
        else:
            print(f"✗ Source file not found: {source}")
    except Exception as e:
        print(f"✗ Error copying {source}: {e}")

print("\nListing connectivity files:")
for f in os.listdir('.'):
    if f.startswith('connectivity'):
        print(f"- {f}")
