# 🌍 WorldExplorer

A modern web application built with **Next.js 14** and **Tailwind CSS** to explore data from countries all over the world. This project uses the [REST Countries API](https://restcountries.com/) to provide up-to-date information in a clean, responsive interface.

🔗 **Live Demo:** https://world-explorer-gilt.vercel.app/

---

## 🚀 Project Overview

**WorldExplorer** allows users to search, filter, and view detailed information about 195+ countries. The app is optimized for performance with pagination and smooth entrance animations.

---

## ✨ Key Features

- 🔍 **Real-time Search** — Search for countries by name or capital instantly.
- 📄 **Pagination** — Loads 25 countries at a time for better performance.
- 📱 **Responsive Layout** — Fully optimized for mobile, tablet, and desktop devices.
- 🎬 **Animations** — Custom staggered CSS animations for a smooth UI experience.

---

## 🛠️ Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Isha-Lama/world-explorer.git
cd world-explorer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm run dev
```

### 4. Open in Browser

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📡 API Details

| Field | Value |
|---|---|
| **Data Source** | [REST Countries API](https://restcountries.com/) |
| **Endpoint** | `/v3.1/all` |
| **Fields Used** | Flags, Country Name, Capital, Population, Region, Languages |

---

## 🎨 Design Decisions

- **🎯 3-Column Grid Layout** — Provides better readability and a premium card-style UI on larger screens.
- **🎨 Brand Identity** — Blue-to-purple gradient theme for a modern and clean aesthetic.
- **✨ Animations** — Staggered entrance effects implemented using global CSS for smooth transitions.

---

## 🧠 Challenges & Solutions

### ⚡ Performance Issue
**Problem:** Rendering all countries at once caused lag.  
**Solution:** Implemented a "Show More" button to load countries in chunks of 25.

### 🔎 Filtering Optimization
**Problem:** Real-time search caused unnecessary re-renders.  
**Solution:** Used `useMemo` to optimize filtering and maintain smooth performance while typing.

---

## 📸 Screenshots

### 🏠 Landing Page

> <img width="550" height="801" alt="image" src="https://github.com/user-attachments/assets/8c7d8844-f9d6-45ed-aa93-35c05fa221e5" />


### 🌍 Explore Page
> <img width="1082" height="923" alt="image" src="https://github.com/user-attachments/assets/25024153-45d1-41f8-8858-f03216e94386" />


---

## 🧑‍💻 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Next.js 14 |
| **Styling** | Tailwind CSS |
| **API** | REST Countries API |
| **Deployment** | Vercel |

---

## 📄 License
Developed by Isha Ghising.
