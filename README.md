# 🎨 Fire on Tabs - Visual Effects Extension

A Chrome extension that brings beautiful, ambient visual effects to your browser tabs. After a period of inactivity, subtle overlays appear behind your page content, creating an immersive and relaxing browsing atmosphere. Choose from animated effects like fire, rain, snow, stars, matrix-style digital rain, or peaceful video overlays.

## ✨ What is Fire on Tabs?

Fire on Tabs transforms your idle browser tabs into dynamic, ambient experiences. Instead of staring at static pages, watch flames flicker, snow fall, stars twinkle, or peaceful scenes play in the background—all while keeping your content fully visible and interactive.

The extension detects when you're inactive (no mouse, keyboard, or scroll activity) and smoothly fades in your chosen effect. Any interaction instantly dismisses it, ensuring it never interferes with your browsing.

## 🎬 Demo

![Effects demo](./assets/demo.gif)

## 🌟 Features

- **7 Visual Effects**: Fire, Rain, Snow, Stars, Matrix, Rest (peaceful campfire scene), and Train (relaxing journey)
- **Video Overlay Effects**: Beautiful looping video backgrounds that blend with page content
- **Customizable Settings**: Adjust idle delay (1-30 seconds) and intensity levels
- **Smart Idle Detection**: Monitors mouse, keyboard, scroll, click, and touch activity
- **Subtle Background Mode**: Effects appear behind page content, not blocking it
- **Modern UI**: Clean, intuitive popup interface with effect previews
- **Smooth Transitions**: Gentle fade in/out animations (1200ms)
- **Blend Modes**: Effects use mix-blend-mode for atmospheric integration
- **Persistent Settings**: Preferences saved across browser sessions
- **Lightweight**: Optimized performance, no external dependencies
- **Privacy-Focused**: No data collection, works completely offline

## 🎯 Available Effects

### 🔥 Fire Effect
- Boiling flames with realistic particle physics
- Dynamic sparks and ember animations
- Warm orange/red color palette with depth perception
- Canvas-based rendering for smooth performance

### 🌧️ Rain Effect  
- Gentle falling raindrops with varying speeds
- Smooth CSS-based animations
- Calming blue tones and transparency effects
- Realistic depth and parallax

### ❄️ Snow Effect
- Winter snowfall with wind and rotation
- Multiple snowflake sizes and speeds
- Soft white particles with gentle motion
- Cool, peaceful winter atmosphere

### ⭐ Stars Effect
- Twinkling night sky with pulsing stars
- Shooting stars with glowing trails
- Deep space ambiance with multiple layers
- Dark, mysterious celestial experience

### � Matrix Effect
- Digital rain with cascading characters
- Green terminal aesthetic with glowing text
- Cyberpunk vibes and hacker atmosphere
- Random character generation and fading

### 🌿 Rest Effect (Video)
- Peaceful campfire scene with a resting knight
- **Video overlay mode**: Plays behind page content
- Low opacity (30%) with multiply blend mode
- Relaxing, ambient atmosphere
- Loops seamlessly

### 🚂 Train Effect (Video)
- Scenic train journey video
- **Video overlay mode**: Subtle background effect
- Calming travel ambiance
- Perfect for focus and relaxation
- Smooth, continuous loop

## 📥 Installation (Local/Unpacked)

1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/ibbi1020/fire-on-tabs.git
   ```
   Or download as ZIP and extract to your computer.

2. **Open Chrome Extensions Page**
   - Navigate to `chrome://extensions` in your browser
   - Enable **Developer mode** (toggle in the top right corner)

3. **Load Unpacked Extension**
   - Click **Load unpacked** button
   - Select the `fire-on-tabs` folder (containing `manifest.json`)

4. **Verify Installation**
   - Extension should appear in your extensions list
   - Click the extension icon to open settings
   - Test on any regular webpage (not chrome:// pages)

## 🎮 Usage

1. **Open Settings**
   - Click the extension icon in your browser toolbar
   - Settings popup will appear with all available effects

2. **Choose Your Effect**
   - Browse through Fire, Rain, Snow, Stars, Matrix, Rest, or Train
   - Each effect card shows a preview animation
   - Click on an effect to select it

3. **Customize Settings**
   - **Idle Delay**: Adjust from 1-30 seconds (how long to wait before effect appears)
   - **Intensity**: Choose Low, Medium, or High (particle count for animated effects)
   - Use **Preview** button to test effects immediately (3-second preview)
   - Click **Save Settings** to apply your configuration

4. **Enjoy the Effects**
   - Navigate to any regular webpage
   - Stop interacting with the page (no mouse movement, keyboard, or scrolling)
   - After your set idle delay, the effect will smoothly fade in
   - Any interaction (mouse, keyboard, scroll, touch) instantly dismisses the effect
   - Effect reappears after another idle period

## ⚙️ Settings Guide

### Idle Delay
- **1-5 seconds**: Quick effects for active users
- **5-15 seconds**: Balanced experience (default: 5s)
- **15-30 seconds**: Subtle effects for focused work

### Intensity Levels
- **Low**: Minimal particles, subtle effect
- **Medium**: Balanced particle count (default)
- **High**: Maximum particles, dramatic effect

### Effect Selection
- **Fire**: Warm, energetic atmosphere - great for creative work
- **Rain**: Calm, peaceful environment - ideal for reading or relaxation
- **Snow**: Cool, wintery feeling - perfect for focus and concentration
- **Stars**: Mysterious, space-like ambiance - excellent for deep work
- **Matrix**: Cyberpunk, tech-focused vibe - ideal for coding sessions
- **Rest**: Peaceful campfire scene - ultimate relaxation and meditation
- **Train**: Scenic journey atmosphere - perfect background for studying

## 🔧 Customizing Video Effects

The Rest and Train effects use configurable video overlays. You can adjust their appearance by editing the CONFIG object in their respective JavaScript files:

```javascript
// In effects/rest.js or effects/train.js
const CONFIG = {
  videoOpacity: 0.3,        // 0.1 = very subtle, 0.5 = more visible
  overlayTransition: 1200,  // fade speed in milliseconds
  blendMode: 'multiply',    // 'multiply', 'screen', 'overlay', 'soft-light'
  zIndex: 1                 // 1 = behind content, -1 = even further back
};
```

**Blend Mode Options:**
- `'multiply'` - Darkens (cozy/dim effects) - Default
- `'screen'` - Lightens (bright/airy effects)
- `'overlay'` - Balanced blend
- `'soft-light'` - Gentle, subtle blend
- `'normal'` - No blending, just opacity

## 🐛 Troubleshooting

### Effects Don't Appear
- ✅ Ensure extension is enabled in `chrome://extensions/`
- ✅ Reload the extension after code changes (click ↻ button)
- ✅ Test on regular websites (not `chrome://` pages, extensions pages, or Chrome Web Store)
- ✅ Check that an effect is selected and settings are saved
- ✅ Verify idle delay setting (try 3 seconds for quick testing)
- ✅ Reload the webpage after configuring settings (Ctrl+R)

### Preview Button Fails
- ✅ Content scripts don't work on special Chrome pages
- ✅ Try opening any regular website (example.com, google.com)
- ✅ Reload the page if extension was just installed
- ✅ Check browser console (F12) for error messages

### Video Effects Not Playing (Rest/Train)
- ✅ Ensure `.webm` video files are in the extension folder
- ✅ Check browser console for "DEMUXER_ERROR" messages
- ✅ Verify `web_accessible_resources` includes `*.webm` in manifest
- ✅ Try converting videos to WebM format if using MP4
- ✅ Test video file playback in a regular HTML page first

### Performance Issues
- ✅ Reduce intensity setting to "Low" in the popup
- ✅ Use video effects (Rest/Train) instead of particle effects (lower CPU usage)
- ✅ Close unused tabs to free up resources
- ✅ Disable other extensions temporarily to isolate the issue
- ✅ Check if hardware acceleration is enabled in Chrome settings

### Settings Not Saving
- ✅ Click "Save Settings" button after making changes
- ✅ Verify extension has `storage` permission in manifest
- ✅ Check browser console for storage-related errors
- ✅ Try clearing extension storage: `chrome.storage.sync.clear()`

### Visual Artifacts or Glitches
- ✅ Ensure you're running the latest version of Chrome
- ✅ Try a different effect to isolate the issue
- ✅ Disable display scaling or adjust to 100%
- ✅ Update graphics drivers
- ✅ Try different blend modes for video effects

## 🛠️ Technical Details

### Architecture
- **Modular Design**: Each effect is an independent, self-contained module
- **Dynamic Loading**: Effects load on-demand for optimal performance
- **Canvas Rendering**: Animated effects use HTML5 Canvas API
- **CSS Animations**: Lightweight effects use pure CSS
- **Video Overlays**: WebM/MP4 support with fallback handling
- **Storage API**: Chrome sync storage for cross-device settings
- **Content Script Injection**: Automatic injection on all websites (excluding restricted pages)

### Effect Rendering Methods

**Canvas-Based (Fire, Rain, Snow, Stars, Matrix):**
- High-performance particle systems
- RequestAnimationFrame for smooth 60fps
- Dynamic particle generation and cleanup
- Configurable intensity levels

**Video-Based (Rest, Train):**
- HTML5 video element with autoplay
- Low opacity with blend modes
- Positioned behind page content (z-index: 1)
- Seamless looping with smooth transitions

### File Structure
```
fire-on-tabs/
├── manifest.json          # Extension configuration (Manifest V3)
├── content.js            # Main effect manager and idle detection
├── popup.html           # Settings UI interface
├── popup.js             # Popup logic and storage handling
├── popup.css            # Popup styling and animations
├── effects/             # Effect modules directory
│   ├── fire.js         # Fire particle effect
│   ├── rain.js         # Rain particle effect
│   ├── snow.js         # Snow particle effect
│   ├── stars.js        # Stars particle effect
│   ├── matrix.js       # Matrix digital rain effect
│   ├── rest.js         # Rest video overlay effect
│   ├── train.js        # Train video overlay effect
│   ├── snow.css        # Snow effect styles
│   ├── stars.css       # Stars effect styles
│   ├── matrix.css      # Matrix effect styles
│   ├── rest.css        # Rest video overlay styles
│   └── train.css       # Train video overlay styles
├── fire.css            # Fire effect styles
├── rain.css            # Rain effect styles
├── icons/              # Extension icons
├── assets/             # Demo assets and images
├── Resting.webm        # Rest effect video file
├── Train.webm          # Train effect video file
└── README.md           # This file
```

### Browser Compatibility
- ✅ Chrome (recommended)
- ✅ Edge (Chromium-based)
- ✅ Brave
- ✅ Opera
- ✅ Any Chromium-based browser

### Limitations
- ❌ Does not work on `chrome://` internal pages
- ❌ Does not work on `chrome-extension://` pages
- ❌ Does not work on Chrome Web Store pages
- ❌ New Tab page requires custom override (optional feature)
- ℹ️ Content scripts require page reload after extension installation

## 🎥 Adding Your Own Video Effects

1. **Prepare Your Video:**
   - Convert to WebM format (VP9 codec recommended)
   - Keep file size under 10MB for performance
   - Use 1080p or 720p resolution
   - Ensure it loops seamlessly

2. **Add Video File:**
   - Place `.webm` file in extension root directory
   - Update `web_accessible_resources` in `manifest.json`

3. **Create Effect Module:**
   - Copy `effects/rest.js` to `effects/youreffect.js`
   - Update video filename and effect name
   - Adjust CONFIG settings as desired

4. **Register Effect:**
   - Add to `content.js` effectModules
   - Add to `manifest.json` content_scripts
   - Create effect card in `popup.html`
   - Add styling in `popup.css`

## 📦 Uninstalling

1. Navigate to `chrome://extensions`
2. Find "Visual Effects on Tabs"
3. Click **Remove**
4. Confirm removal

All settings and data will be cleared automatically.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Credits

Forked from [visual-effects-on-tabs](https://github.com/IamMoosa/visual-effects-on-tabs) by [Shahid Khan](https://www.linkedin.com/in/shahid-khan-1521a01a5/).

### Enhancements in This Fork:
- ✨ Added video overlay effects (Rest & Train)
- 🎨 Implemented subtle background mode with blend modes
- ⚙️ Enhanced configuration options
- 🐛 Improved error handling and debugging
- 📚 Comprehensive documentation and troubleshooting
- 🎯 Better user experience and settings interface

Upgraded by [Ibraheem Farooq](https://github.com/ibbi1020)

---

Made with ❤️ for a more immersive browsing experience.
