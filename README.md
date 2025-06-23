# Momentum - New Tab Chrome Extension

A clean and minimal new tab page that replaces Chrome's default new tab with a beautiful, productive interface featuring time, daily goals, inspirational quotes, and stunning background images.

## ✨ Features

- **Real-time Clock**: Large, elegant time display that updates every second
- **Personalized Greetings**: Time-based greetings (Good morning/afternoon/evening) with your name
- **Daily Goal Setting**: Set and track your main goal for each day
- **Inspirational Quotes**: Daily motivational quotes from thought leaders like Naval Ravikant
- **Beautiful Backgrounds**: Full-screen background images that change daily
- **Clean Design**: Minimalist interface with elegant typography and smooth animations

## 🚀 Installation

### Method 1: Load as Unpacked Extension (Recommended)

1. **Download the extension:**
   - Click the green "Code" button above
   - Select "Download ZIP"
   - Extract the ZIP file to a folder on your computer

2. **Install in Chrome:**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in the top right corner)
   - Click "Load unpacked"
   - Select the folder containing the extracted files
   - The extension is now installed!

3. **Start using:**
   - Open a new tab in Chrome
   - You'll see your new Momentum interface

### Method 2: Clone from GitHub

```bash
git clone https://github.com/yourusername/momentum.git
cd momentum
```

Then follow steps 2-3 from Method 1.

## 🎯 How to Use

### Setting Your Name
- Click on "Hello, what's your name?" to set your personalized greeting
- Your name will be remembered across browser sessions

### Setting Daily Goals
- Type your main goal for the day in the input field
- Press Enter to save it
- Check the checkbox when you complete your goal
- Goals reset daily and are saved locally

### Features
- **Time**: Automatically updates every second
- **Greetings**: Change based on time of day
- **Quotes**: Refresh daily for new inspiration
- **Backgrounds**: Change daily for visual variety

## 🛠️ Technical Details

- **Manifest Version**: 3 (Latest Chrome extension standard)
- **Storage**: Uses localStorage for user preferences and goals
- **Background Images**: Sourced from Unsplash API
- **Quotes**: Curated collection of motivational quotes
- **No External Dependencies**: Pure HTML, CSS, and JavaScript

## 📁 File Structure

```
momentum/
├── manifest.json      # Extension configuration
├── index.html         # Main interface
├── style.css          # Styling and animations
├── script.js          # Functionality and logic
└── README.md          # This file
```

## 🔧 Customization

You can customize the extension by editing the files:

- **Quotes**: Add or modify quotes in `script.js`
- **Styling**: Modify colors, fonts, and layout in `style.css`
- **Features**: Add new functionality in `script.js`

## 🤝 Contributing

Feel free to contribute to this project! You can:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Quotes inspired by Naval Ravikant and other thought leaders
- Background images from Unsplash
- Built with modern web technologies

## 📞 Support

If you encounter any issues or have suggestions:

1. Check the [Issues](https://github.com/yourusername/momentum/issues) page
2. Create a new issue with details about your problem
3. Include your Chrome version and operating system

---

**Enjoy your new productive new tab experience!** 🚀 