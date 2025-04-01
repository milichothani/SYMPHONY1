#1st step: Install Dependencies -----> pip install opencv-python numpy requests

import cv2
import numpy as np
import random

# Sample mood-based song database
MOOD_SONGS = {
    "happy": ["Song A - Artist 1", "Song B - Artist 2", "Song C - Artist 3"],
    "sad": ["Song D - Artist 4", "Song E - Artist 5", "Song F - Artist 6"],
    "calm": ["Song G - Artist 7", "Song H - Artist 8", "Song I - Artist 9"],
    "energetic": ["Song J - Artist 10", "Song K - Artist 11", "Song L - Artist 12"],
}

def detect_mood(image_path):
    """Analyzes an image to determine a mood category."""
    image = cv2.imread(image_path)
    if image is None:
        print("Error: Could not read image")
        return None
    
    # Convert to grayscale and analyze brightness
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    avg_brightness = np.mean(gray)

    # Simple threshold-based mood classification
    if avg_brightness > 180:
        return "happy"
    elif avg_brightness > 100:
        return "calm"
    elif avg_brightness > 50:
        return "sad"
    else:
        return "energetic"

def recommend_songs(mood):
    """Returns a list of songs based on mood."""
    return MOOD_SONGS.get(mood, ["No recommendations available"])

if __name__ == "__main__":
    image_path = "uploads/input.jpg"  # Image uploaded by the user
    mood = detect_mood(image_path)
    
    if mood:
        songs = recommend_songs(mood)
        print("\n".join(songs))  # Send output back to Node.js server
    else:
        print("Error detecting mood")

# # STEPS TO RUN WHOLE SYSTEM:
# 1️⃣ Start the Backend
# Ensure Node.js is installed.
# Run node server.js in your backend folder.

# 2️⃣ Run the Python Script (if applicable)
# Ensure all dependencies (OpenCV, TensorFlow, etc.) are installed.
# Check that music_recommender.py works when called from server.js.

# 3️⃣ Start the React Frontend
# Navigate to your React project.
# Run npm start to launch the frontend.
