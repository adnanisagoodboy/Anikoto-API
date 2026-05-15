# 🚀 Anikoto API Server

A powerful, fast, and clean **unofficial API** for [anikototv.to](https://anikototv.to) built with **Express.js + Cheerio**.

Scrape anime schedules, episode lists, detailed anime information, and more — all returned in clean, structured JSON.

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## ✨ Features

- 📅 **Daily Anime Schedule** with proper date validation
- 🎞️ **Full Episode List** with `data-id`, titles, and timestamps
- 📊 **Rich Anime Information** (`/info`) — title, poster, synopsis, genres, studios, etc.
- 🔍 Extract `data-id` from any watch page
- 🧹 Clean & well-structured JSON responses
- ✅ Strong input validation using **dayjs**
- 🛡️ Spam/ad removal from synopsis
- 📱 Mobile-friendly & fast

---

## 🛠️ Installation

```bash
git clone https://github.com/Arisu-Yamabuki/Anikoto-API
cd anikoto-api
npm install
```

---

## 🚀 Quick Start

```bash
npm start
# or
node app.js
```

Server will start at **http://localhost:3000**

---

## 📡 API Endpoints

### 1. Get Anime Schedule

```http
GET /schedule?date=2026-05-18
```

**Example Response:**
```json
{
  "success": true,
  "date": "2026-05-18",
  "total": 12,
  "schedule": [
    {
      "time": "09:30",
      "episode": "Episode 7",
      "title": "Farming Life in Another World Season 2",
      "titleJapanese": "Isekai Nonbiri Nouka 2",
      "url": "https://anikototv.to/watch/..."
    }
  ]
}
```

### 2. Get Episode List

```http
GET /episodes?id=1642
```

Returns all episodes with `data_id`, episode number, title, etc.

### 3. Get Detailed Anime Info (Recommended)

```http
GET /info?url=https://anikototv.to/watch/one-piece-odmau
```

Returns rich data from `#w-info`:
- Title (EN + JP)
- Poster image
- Clean synopsis (spam removed)
- Rating, Type, Status, Aired, Duration
- Genres, Studios, Producers

### 4. Get Anime ID

```http
GET /page?name=one-piece-odmau
```

### 5. Home / Documentation

Just visit `https://anikoto-api.onrender.com/` or `http://localhost:3000` for beautiful documentation.

---

## 🛠️ Tech Stack

- **Node.js** + **Express**
- **Axios** — HTTP requests
- **Cheerio** — HTML parsing
- **Day.js** — Date handling & validation

---

## 📁 Project Structure

```
anikoto-api/
├── app.js
├── package.json
├── README.md
└── mwr/
    └── ep.js
    └── id.js
    └── info.js
    └── schedule.js
```

---

## ⚙️ Configuration

You can easily modify headers, base URL, or add caching in `app.js`.

---

## ⚠️ Disclaimer

This project is for **educational and personal use only**.  
It scrapes data from anikototv.to. Please respect the website’s terms of service and use responsibly.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push & open a Pull Request

---

## 📄 License

Distributed under the **MIT License**.

---

**Made with ❤️ for anime lovers**

---

**Star this repo if you found it useful!** ⭐

