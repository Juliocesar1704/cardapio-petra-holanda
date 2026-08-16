import json
import os
import re

js_path = r"c:\Users\julio\Desktop\cardapio__petra_holanda\main.js"
images_dir = r"c:\Users\julio\Desktop\cardapio__petra_holanda\images"

with open(js_path, "r", encoding="utf-8") as f:
    js_content = f.read()

actual_files = set(os.listdir(images_dir))
actual_files_lower = {f.lower(): f for f in actual_files}

# Find all "image": "images/..." occurrences
matches = re.findall(r'"image":\s*"images/([^"]+)"', js_content)

print(f"Checking {len(matches)} image references in main.js against actual files in images/ directory...")
mismatches = []
missing = []
matched_ok = []

for ref in matches:
    if ref in actual_files:
        matched_ok.append(ref)
    elif ref.lower() in actual_files_lower:
        mismatches.append((ref, actual_files_lower[ref.lower()]))
    else:
        missing.append(ref)

print(f"\nExact matches: {len(matched_ok)}")
print(f"Case mismatches: {len(mismatches)}")
print(f"Missing files: {len(missing)}")

if mismatches:
    print("\nCase Mismatches (will fail on Linux/Vercel):")
    for ref, actual in mismatches:
        print(f"  Referenced: {ref}")
        print(f"  Actual on disk: {actual}\n")

if missing:
    print("\nMissing Files (404 on Vercel):")
    for ref in missing:
        print(f"  Missing: {ref}")
