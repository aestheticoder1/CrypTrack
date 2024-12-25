# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Crypto Price Tracker

A simple cryptocurrency price tracker built with React, Vite, and the CoinGecko API. This application allows users to track live cryptocurrency prices, with real-time updates and search functionality.

## Features

- View real-time cryptocurrency prices
- Search for specific cryptocurrencies
- View detailed information like market cap, volume, and price changes
- Built with React, Vite, and the CoinGecko API
- Utilizes Context API for state management

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: A modern build tool that provides fast bundling and development server.
- **CoinGecko API**: A free and open API that provides live cryptocurrency data.
- **Context API**: A React feature used for state management across the app.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/crypto-price-tracker.git
cd crypto-price-tracker
2. Install Dependencies
Make sure you have Node.js installed. Then, install the required dependencies using npm or yarn:

bash
Copy code
npm install
# or
yarn install
3. Run the Application
After installing the dependencies, start the development server:

bash
Copy code
npm run dev
# or
yarn dev
The app will be available at http://localhost:3000.

How It Works
1. Fetching Data from CoinGecko API
The app uses the CoinGecko API to fetch real-time cryptocurrency data. The API provides a wide range of information, including current prices, market capitalization, 24h trading volume, and more.

2. Context API for State Management
We use React's Context API to manage the state of the app. This allows the application to share data such as the list of cryptocurrencies, search results, and selected coin data across components without the need to prop drill.

3. Searching for Cryptocurrencies
The search functionality allows users to find specific cryptocurrencies by name or symbol. When a user types a query, the app filters the list of cryptocurrencies accordingly.

4. Displaying Prices and Coin Details
Once the data is fetched from CoinGecko, the app displays the cryptocurrencies in a list along with essential details such as price, market cap, 24h change, and volume. Each coin is clickable for more details.

