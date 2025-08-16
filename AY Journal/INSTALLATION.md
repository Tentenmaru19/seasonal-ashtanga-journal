# Installation Guide

## Quick Start (HTML Version)

If you don't have Node.js installed, you can run the HTML version immediately:

1. **Open the HTML file**
   - Double-click on `index.html` in your file explorer
   - Or open it in any web browser

2. **Start using the application**
   - The application will open in your default browser
   - All features are fully functional
   - Data is stored in your browser's local storage

## Full Installation (Node.js Version)

For the complete version with all features and development capabilities:

### Step 1: Install Node.js

#### Option A: Download from Official Website
1. Go to [nodejs.org](https://nodejs.org/)
2. Download the LTS version for your operating system
3. Run the installer and follow the instructions

#### Option B: Using Package Managers

**macOS (using Homebrew):**
```bash
# Install Homebrew first if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node
```

**Windows (using Chocolatey):**
```bash
# Install Chocolatey first if you don't have it
# Then install Node.js
choco install nodejs
```

**Linux (Ubuntu/Debian):**
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Step 2: Verify Installation

```bash
node --version
npm --version
```

Both commands should return version numbers.

### Step 3: Install Dependencies

```bash
# Navigate to the project directory
cd "AY Journal"

# Install all dependencies
npm install
```

### Step 4: Run the Application

```bash
# Start the development server
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Step 5: Build for Production (Optional)

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## Troubleshooting

### Common Issues

**"command not found: npm"**
- Node.js is not installed or not in your PATH
- Follow the Node.js installation steps above

**"Permission denied" errors**
- On macOS/Linux, you might need to use `sudo` for global installations
- Or configure npm to use a different directory

**Port 3000 already in use**
- The development server will automatically try the next available port
- Or kill the process using port 3000

### Getting Help

If you encounter any issues:

1. Check that Node.js and npm are properly installed
2. Ensure you're in the correct directory
3. Try deleting `node_modules` folder and running `npm install` again
4. Check the console for error messages

## Features Comparison

| Feature | HTML Version | Node.js Version |
|---------|-------------|-----------------|
| Dashboard | ✅ | ✅ |
| Journal Entry | ✅ | ✅ |
| Seasonal Insights | ✅ | ✅ |
| Data Persistence | ✅ (localStorage) | ✅ (localStorage + database ready) |
| Charts & Analytics | ✅ (basic) | ✅ (advanced with Recharts) |
| Responsive Design | ✅ | ✅ |
| TypeScript Support | ❌ | ✅ |
| Development Tools | ❌ | ✅ |
| Build Optimization | ❌ | ✅ |

## Next Steps

After installation:

1. **Start tracking your practice** - Use the Journal tab to record daily entries
2. **Explore insights** - Check the Insights tab to see seasonal patterns
3. **Customize** - Modify the code to add your own features
4. **Deploy** - Host the application online for access from anywhere

---

**Namaste** 🙏 - Your journey to understanding seasonal patterns in your practice begins now! 