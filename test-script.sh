#!/bin/bash

echo "🧪 Testing our bash script..."

# Test command 1
echo "Testing ESLint..."
npx eslint src/server.ts

# Test command 2
echo "Testing TypeScript compilation..."
npx tsc --noEmit

# Test command 3
echo "Testing npm lint..."
npm run lint

echo "✅ Script completed!"
