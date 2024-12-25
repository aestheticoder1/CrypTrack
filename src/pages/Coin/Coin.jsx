import { useContext, useEffect, useState } from 'react';
import './Coin.css';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext';
import LineChart from '../../components/LineChart/LineChart';

function Coin() {
    const { coinId } = useParams();
    const [coinData, setCoinData] = useState();
    const { currency } = useContext(CoinContext);
    const [historicalData, setHistoricalData] = useState();
    const [timeRange, setTimeRange] = useState('7'); // Default to 1 week

    // Fetch coin data (name, symbol, market cap, etc.)
    const fetchCoinData = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-FmVR27Wk6aCbFg1NvF1sDeJy' }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
            .then(res => res.json())
            .then(res => setCoinData(res))
            .catch(err => console.error(err));
    }

    // Fetch historical data based on the selected time range
    const fetchHistoricalData = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-FmVR27Wk6aCbFg1NvF1sDeJy' }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=${timeRange}`, options)
            .then(res => res.json())
            .then(res => setHistoricalData(res))
            .catch(err => console.error(err));
    }

    // Effect hook to fetch coin and historical data when the component mounts or currency changes
    useEffect(() => {
        fetchCoinData();
        fetchHistoricalData();
    }, [coinId, currency, timeRange]);

    // Handle time range button clicks
    const handleTimeRangeClick = (range) => {
        setTimeRange(range); // Set the new time range
    }

    // Loader while fetching data
    if (!coinData || !historicalData) {
        return (
            <div className='spinner'>
                <div className="loader"></div>
            </div>
        );
    }

    return (
        <div className='coin'>
            <div className="coin-name">
                <img src={coinData.image.large} alt="" />
                <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
            </div>

            <div className="coin-details">
                <div className="coin-chart">
                    <LineChart historicalData={historicalData} />
                </div>

                <div className="time-range-selector">
                    {/* Time Range Buttons */}
                    <button
                        className={timeRange === '7' ? 'active' : ''}
                        onClick={() => handleTimeRangeClick('7')}
                    >
                        1 Week
                    </button>
                    <button
                        className={timeRange === '30' ? 'active' : ''}
                        onClick={() => handleTimeRangeClick('30')}
                    >
                        1 Month
                    </button>
                    <button
                        className={timeRange === '90' ? 'active' : ''}
                        onClick={() => handleTimeRangeClick('90')}
                    >
                        3 Months
                    </button>
                    <button
                        className={timeRange === '365' ? 'active' : ''}
                        onClick={() => handleTimeRangeClick('365')}
                    >
                        1 Year
                    </button>
                </div>

                <div className="coin-info">
                    <ul>
                        <li>Crypto Market Rank</li>
                        <li>{coinData.market_cap_rank}</li>
                    </ul>
                    <ul>
                        <li>Current Price</li>
                        <li>{currency.symbol}{coinData.market_data.current_price[currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>Market Cap</li>
                        <li>{currency.symbol}{coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>24 Hour High</li>
                        <li>{currency.symbol}{coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>24 Hour Low</li>
                        <li>{currency.symbol}{coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Coin;
