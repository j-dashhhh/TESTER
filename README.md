Trident And Friends Music Player

A responsive music player built for both desktop and mobile (WIP). Trident And Friends Music Player features audio playback, playlist management, favorites tracking, recently played history, and a modern glassmorphism-inspired interface.

Project Description

Trident And Friends Music Player is a web-based music player made for users who care about both performance and clean design. The application focuses on smooth music playback, responsive layouts, and interactive UI elements while maintaining compatibility across desktop and mobile devices (WIP).

The project includes album browsing, artist filtering, queue management, search functionality, favorites tracking, mini-player support, and responsive navigation.

How to Run the Application
Option A: VS Code Live Server (Recommended)

Open your project folder in Visual Studio Code
Go to Extensions (Ctrl + Shift + X) and install Live Server
Open index.html
Click Go Live at the bottom

Your app will open at:
http://127.0.0.1:5500

Option B: Mobile Testing / Sharing (WIP)

Make sure Live Server is running on port 5500
Open PORTS tab in VS Code
Click Forward a Port
Enter 5500
Set visibility to Public
Copy the generated link and open it on another device

Features

Interactive Music Playback (Play, Pause, Next, Previous)
Auto-next song playback system
Favorites System (heart-based toggling)
Recently Played tracking (with duplicate prevention)
Dynamic Queue Management
Responsive Mini Player (persistent playback control)
Real-time Search (songs + artists)
Responsive UI (desktop, tablet, mobile WIP)
Glassmorphism UI design system
Animated loading screen (skeleton shimmer)
Custom scrollbar behavior (hidden until hover)
Volume control with real-time percentage display

System Architecture

The application uses a single-audio-instance architecture.

Core State System
currentList → active playlist source
currentIndex → currently playing song
favorites[] → stored liked songs
recent[] → recently played history
totalPlays → user listening counter

Audio Engine
Only one Audio() instance is used globally
All playback operations control this single instance

Rule
The UI does not own audio — the Audio object is the single source of truth

Component System

Player Component
Handles playback controls and progress tracking

Album Component
Clickable album cards that load full song lists

Song Item Component
Used in queue, favorites, recent, and library

Favorite Component
Toggle system using favorites[] and real-time UI updates

Mini Player Component
Floating playback controller synced with main player state

Design System

Color Palette
Background: #121212 → #1d1d1d
Surface: rgba(255,255,255,0.05)
Hover: rgba(255,255,255,0.08)
Accent: #1db954
Text: #ffffff / #aaa

Typography
Font: Arial, sans-serif
Base: 14–18px
Titles: 18–32px
Metadata: 11–13px

Layout Rules
8px spacing system
Glass panels for all containers
Consistent hover feedback
Active state uses green highlight

State Behavior Rules

Only one song plays at a time
Changing album resets playlist context
Favorites persist in memory only
Mini player mirrors main player state
Queue auto-advances on song end
Search playback overrides current queue

Known Issues / Limitations

Direct file opening may block audio playback
Mobile browsers may pause playback in background
Rapid switching may delay recent tracking
Volume control may behave inconsistently on mobile
No persistent storage (data resets on refresh)

Design Decisions & HCI Principles

Target Users
Performance-focused users: fast navigation and controls
Casual listeners: smooth browsing and clean UI

HCI Principles
Fitts’s Law: large playback controls for easier interaction
Minimalist Design: reduced clutter using glass UI
Visibility of System State: active song clearly highlighted
Consistency: unified UI components and spacing
Immediate Feedback: hover effects and real-time updates

Project Structure

index.html
index.css
index.js
PICS/
MUSIC/
docs/
design-system.md
README.md

Project Links

WEBSITE: https://j-dashhhh.github.io/TESTER/
WIREFRAME: https://canva.link/e6axo8nr2nadgwn
USER PERSONA: https://canva.link/gt910a81chkhuuo
DESIGN DOCUMENTATION: https://docs.google.com/document/d/1X5ifWI5rt986IKuRnvZnj5FtxfEZN1IZ9OdNo6Vpuys/edit?usp=sharing

Developers

Jenson Dhale Duano
Stephen Santos
Trident Dayot
Jonathan Gunayon
