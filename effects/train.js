// train.js - Video Overlay Effect
// A subtle background video effect that plays behind page content
// 
// CONFIGURATION GUIDE:
// - videoOpacity: 0.1-0.5 for subtle effect, 0.6-1.0 for prominent effect
// - blendMode options: 'multiply' (darker), 'screen' (lighter), 'overlay' (balanced),
//                      'soft-light' (gentle), 'normal' (no blending)
// - zIndex: 1 (behind most content), -1 (even further back), 999999 (on top - not recommended)
//
console.log('🚂 Train effect module loading...');

(() => {
  let overlay = null;
  let video = null;
  let running = false;
  
  // Configuration - adjust these values to customize the effect
  const CONFIG = {
    videoOpacity: 0.3,        // 0.1 = very subtle, 0.5 = more visible, 1.0 = full opacity
    overlayTransition: 1200,  // milliseconds for fade in/out
    blendMode: 'multiply',    // 'multiply', 'screen', 'overlay', 'soft-light', 'normal'
    zIndex: 1                 // keep at 1 to stay behind content, or use -1 for even further back
  };

  function createOverlay() {
    if (overlay) return;
    
    console.log('🚂 Creating train video overlay...');
    
    overlay = document.createElement("div");
    overlay.id = "train-overlay";
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.zIndex = CONFIG.zIndex.toString();
    overlay.style.pointerEvents = "none";
    overlay.style.opacity = "0";
    overlay.style.transition = `opacity ${CONFIG.overlayTransition}ms ease-in-out`;
    
    video = document.createElement("video");
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    video.style.opacity = CONFIG.videoOpacity.toString();
    video.style.mixBlendMode = CONFIG.blendMode;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    
    // Try multiple video formats for better compatibility
    const videoFormats = [
      { file: 'Train.webm', type: 'video/webm' },
      { file: 'Train.mp4', type: 'video/mp4' }
    ];
    
    console.log('🚂 Attempting to load train video...');
    
    // Add sources in order of preference
    videoFormats.forEach(format => {
      const source = document.createElement('source');
      source.src = chrome.runtime.getURL(format.file);
      source.type = format.type;
      video.appendChild(source);
      console.log(`🚂 Added source: ${format.file} (${format.type})`);
    });
    
    // Add error event listener
    video.addEventListener('error', (e) => {
      console.error('❌ Video error:', e);
      console.error('❌ Video error code:', video.error?.code);
      console.error('❌ Video error message:', video.error?.message);
      console.error('❌ Video network state:', video.networkState);
      console.error('❌ Video ready state:', video.readyState);
      
      // Show user-friendly overlay message
      const errorDiv = document.createElement('div');
      errorDiv.style.position = 'fixed';
      errorDiv.style.top = '50%';
      errorDiv.style.left = '50%';
      errorDiv.style.transform = 'translate(-50%, -50%)';
      errorDiv.style.background = 'rgba(0,0,0,0.8)';
      errorDiv.style.color = 'white';
      errorDiv.style.padding = '20px';
      errorDiv.style.borderRadius = '10px';
      errorDiv.style.zIndex = '2147483647';
      errorDiv.style.fontFamily = 'Arial, sans-serif';
      errorDiv.textContent = '❌ Video format not supported. Please check Train.webm file.';
      overlay.appendChild(errorDiv);
      
      setTimeout(() => {
        if (errorDiv.parentNode) {
          errorDiv.parentNode.removeChild(errorDiv);
        }
      }, 5000);
    });
    
    // Add loadeddata event listener
    video.addEventListener('loadeddata', () => {
      console.log('✅ Train video loaded successfully');
    });
    
    // Add canplay event listener
    video.addEventListener('canplay', () => {
      console.log('✅ Train video can play');
    });
    
    overlay.appendChild(video);
    document.documentElement.appendChild(overlay);
    
    console.log('✅ Train video overlay created');
  }

  function start() {
    console.log('🚂 Train effect starting...');
    if (running) return;
    
    createOverlay();
    
    // Play video with error handling
    video.play().catch(err => {
      console.error('❌ Train video playback failed:', err);
    });
    
    overlay.style.opacity = "1";
    running = true;
    console.log('✅ Train effect started');
  }

  function stop() {
    console.log('⏸️ Train effect stopping...');
    if (!running) return;
    running = false;
    
    if (video) {
      video.pause();
    }
    
    if (overlay) {
      overlay.style.opacity = "0";
    }
    
    setTimeout(() => {
      if (overlay && overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
        overlay = null;
        video = null;
      }
      console.log('✅ Train effect stopped and cleaned up');
    }, CONFIG.overlayTransition); // Match the transition duration
  }

  function cleanup() {
    console.log('🧹 Cleaning up train effect...');
    stop();
  }

  // Expose the effect
  window.TrainEffect = {
    start,
    stop,
    cleanup,
    init: () => {
      console.log('🎬 Train effect initialized');
    }
  };

  console.log('✅ Train effect module loaded and exported to window.TrainEffect');
})();
