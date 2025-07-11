# ESLint Quick Usage Guide

## 🚀 Available Commands

### Development (Strict)
```bash
npm run lint:dev          # Strict checking for development
npm run lint:dev:fix      # Auto-fix development issues
```

### Production (Relaxed)
```bash
npm run lint:prod         # Relaxed checking for production
npm run lint:prod:fix     # Auto-fix production issues
```

### Default (Development)
```bash
npm run lint              # Uses development config
npm run lint:fix          # Auto-fix with development config
```

## 🔧 Manual Commands

### Test specific config
```bash
# Development config
npx eslint --config eslint.config.dev.js src/**/*.ts

# Production config
npx eslint --config eslint.config.prod.js src/**/*.ts

# Default config
npx eslint src/**/*.ts
```

## 📋 Key Differences

### Development Config
- ❌ No 'any' types (ERROR)
- ✅ Explicit return types (WARN)
- ✅ Strict checking
- ✅ Code quality rules

### Production Config
- ⚠️ 'any' types allowed (WARN)
- ✅ Essential errors only
- ✅ Console.log allowed
- 🚀 Faster execution

## 💡 Quick Tips

1. Use development config while coding
2. Use production config for builds
3. Run `npm run lint:fix` to auto-fix issues
4. Both configs work with ESLint v9

## 🎯 Daily Workflow
```bash
# Start coding
npm run lint:dev

# Fix issues
npm run lint:dev:fix

# Before deployment
npm run lint:prod
```
