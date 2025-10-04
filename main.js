// Typed.js initialization for animated text (only on home page)
if (typeof Typed !== 'undefined' && document.querySelector(".text")) {
    var typed = new Typed(".text", {
        strings: ["Student", "Backend Developer", "ML Enthusiast"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
    });
}

// Loading Screen Controller
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const loadingVideo = document.getElementById('loading-video');
    
    // Minimum loading time (in milliseconds)
    const minLoadingTime = 2500; // 2.5 seconds minimum
    const startTime = Date.now();
    
    // Speed up the video playback after it loads
    if (loadingVideo) {
        loadingVideo.addEventListener('loadeddata', function() {
            loadingVideo.playbackRate = 1.5; // 1.5x speed
        });
        // Fallback if loadeddata doesn't fire
        setTimeout(() => {
            if (loadingVideo.readyState >= 2) {
                loadingVideo.playbackRate = 1.5;
            }
        }, 100);
    }
    
    // Function to hide loading screen and show main content
    function hideLoadingScreen() {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
        
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                mainContent.style.display = 'block';
                setTimeout(() => {
                    mainContent.style.opacity = '1';
                }, 50);
            }, 500); // Wait for fade out to complete
        }, remainingTime);
    }
    
    // Wait for all content to load
    window.addEventListener('load', function() {
        hideLoadingScreen();
    });
    
    // Fallback: Hide loading screen after maximum time even if content isn't fully loaded
    setTimeout(() => {
        if (loadingScreen.style.display !== 'none') {
            hideLoadingScreen();
        }
    }, 8000); // Maximum 8 seconds loading time
    
    // Handle video load errors
    if (loadingVideo) {
        loadingVideo.addEventListener('error', function() {
            console.warn('Loading video failed to load, showing fallback');
            const fallback = document.querySelector('.loading-fallback');
            if (fallback) {
                loadingVideo.style.display = 'none';
                fallback.style.display = 'flex';
            }
        });
    }
});