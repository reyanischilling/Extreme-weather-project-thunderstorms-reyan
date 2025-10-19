# 🎬 How to Add Thunderstorm Video Background

The Hero component is now ready to use a looping video background! Follow these steps:

## Step 1: Download a Free Thunderstorm Video

Choose one of these FREE sources:

### 🌟 Recommended: Pixabay (No Sign-up Required)
1. Visit: https://pixabay.com/videos/search/thunderstorm/
2. Find a video you like (look for dark storm clouds with lightning)
3. Click on the video
4. Click the green "Free Download" button
5. Choose "Medium" or "Small" size for faster loading (1920x1080 or smaller)
6. Download the MP4 file

### Alternative: Pexels
1. Visit: https://www.pexels.com/search/videos/thunderstorm/
2. Browse and click on a video
3. Click "Download" and select a medium resolution (HD 1920x1080)

### Alternative: Mixkit
1. Visit: https://mixkit.co/free-stock-video/thunderstorm/
2. Choose a video with looping clouds/lightning
3. Click "Free Download" (no account needed)

## Step 2: Add Video to Your Project

1. Save the downloaded video file as `thunderstorm.mp4`
2. Place it in the `attached_assets` folder in your project:
   ```
   attached_assets/thunderstorm.mp4
   ```

## Step 3: Update the Code

The Hero component is already configured! Once you add the video file, update `client/src/pages/Home.tsx`:

**Change this line (around line 66):**
```tsx
backgroundImage={heroImage}
```

**To this:**
```tsx
backgroundVideo="/attached_assets/thunderstorm.mp4"
```

Or if using the @assets alias:
```tsx
import thunderstormVideo from '@assets/thunderstorm.mp4';
// Then use: backgroundVideo={thunderstormVideo}
```

## 🎉 That's it!

The video will:
- ✅ Start playing immediately when the page loads
- ✅ Loop continuously
- ✅ Have a smooth parallax scroll effect
- ✅ Be muted (required for autoplay)
- ✅ Work on mobile devices

## Tips for Best Results:
- Choose a video under 10MB for fast loading
- Dark stormy clouds work best with the current overlay
- Videos with subtle lightning flashes are most dramatic
- Prefer horizontal/landscape videos (16:9 ratio)
