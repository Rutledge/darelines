# CLAUDE.md

## Project: Darelines

### Overview
Personal weather checking tool for RV-12iS aircraft based at San Carlos Airport (KSQL). Features real-time weather integration, Google Flights-style interface, and secure deployment. Primarily a convenience tool for flight planning and weather checking.

### Tech Stack
- Single HTML file with embedded CSS/JavaScript
- Windy API for real-time weather data
- Vercel deployment with environment variables
- Node.js build script for API key injection

### Build Commands
```bash
npm run build    # Build the project (injects env vars)
npm run dev      # Build and start local server on port 3000
```

### Environment Variables
- `WINDY_API_KEY`: API key for weather data
- `SITE_PASSWORD`: Password protection (default: dare2fly)

### Key Features
- Google Flights-style calendar picker
- Real-time wind/cloud conditions via Windy API
- Flight destinations: Bay Tour, Monterey Bay, Sonoma County, Custom
- Professional UI matching Google Flights design patterns
- Password protection for site access
- Email booking to darius.emrani@gmail.com

### Flight Destinations
- **Bay Tour**: Local area flights (1 hr)
- **Monterey Bay**: KSQL → KMRY with 1hr stop (2hr total)
- **Sonoma County**: KSQL → KSTS with 45min stop (1hr 30min total)
- **Custom**: User-defined destination

### Recent Updates
- Replaced Napa Valley with Sonoma County/Santa Rosa (KSTS)
- Updated stop time format to match Google Flights
- Integrated real Windy API with proper error handling
- Fixed calendar overlay z-index issues
- Removed plane availability column per user request
- Added PHX disclaimer dialog with entertainment-only message
- Changed password from "dare2fly" to "puppy"

### PHX Photo Setup
To add PHX's actual photo to the disclaimer dialog:
1. Save PHX's photo as `phx-photo.jpg` in the project root directory
2. The image will automatically be displayed as a circular 80x80px photo
3. If the photo doesn't load, it falls back to a dog emoji placeholder