# Wisiex Exchange - Frontend

This is the **frontend application** of the **Wisiex Exchange** project, as a trial task from **Wisiex** company.

![Description of image](https://raw.githubusercontent.com/lucascampos777/wisiex-exchange-frontend/refs/heads/master/public/image.png?token=GHSAT0AAAAAADC4FUBGJ645LFACCZMB4XKM2ANPLWA)

Built with:
- React 19 (CRA)
- Bulma CSS
- Socket.IO
- React Router
- Context API

## Features
- User authentication with JWT
- Place Buy/Sell orders
- View active orders
- View global match history
- View personal trade history
- View order book (Bid/Ask)
- Clean UI inspired by real crypto exchanges

## How to Run Frontend

### 1. Clone Repository
```bash
git clone https://github.com/lucascampos777/wisiex-exchange-frontend.git
cd wisiexchange-frontend
```

### 2. Install Required Environement
Node 23.10.0 is required.

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server
```bash
npm start
```

Frontend will be available at http://localhost:3000.  
Make sure the backend server is running at http://localhost:5000 by default.

## How to Test

1. Start backend server (`npm start` inside backend).
2. Start frontend server (`npm start` here).
3. Open `http://localhost:3000`.
4. Login with any username.
5. Place Buy/Sell orders.
6. Watch live updates across Order Book, Matches, Statistics.

---


## Author
### Developed by **Lucas Campos** as a trial task
GitHub - [lucascampos777](https://github.com/lucascampos777)  
LinkedIn - [lucas-campos-916177348](https://linkedin.com/in/lucas-campos-916177348)
