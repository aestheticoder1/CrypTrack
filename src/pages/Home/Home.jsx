import { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
function Home() {

    const {allCoin, currency} = useContext(CoinContext);
    const [displayCoin, setDisplayCoin] = useState([]);

    useEffect(()=>{
        setDisplayCoin(allCoin);
    },[allCoin])
    return (
        <div className='home'>
            <div className="hero">
                <h1>Crypto Marketplace <br />Price Tracker</h1>
                <p>Welcome to the CrypTrack! Stay updated with real-time
                prices of your favorite cryptocurrencies. Track market trends, monitor price changes, and make informed decisions with ease.</p>

                <form>
                    <input type="text" placeholder='Search Crypto-Currency...' />
                    <button type='submit'>Search</button>
                </form>
            </div>     
            <div className="crypto-table">
                <div className="table-layout">
                    <p>No.</p>
                    <p>Coins</p>
                    <p>Price</p>
                    <p style={{textAlign:"center"}}>24Hr Change</p>
                    <p className='market-cap'>Market Cap</p>
                </div>
                {
                    displayCoin.slice(0,10).map((item,index)=>(
                        <div className="table-layout" key={index}>
                            <p>{item.market_cap_rank}</p>
                            <div>
                                <img src={item.image} alt="Coin_Img" />
                                <p>{item.name + " - " + item.symbol}</p>
                            </div>
                            <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
                            <p style={{textAlign:"center"}} className={`${Math.floor(item.price_change_percentage_24h*100)/100 >= 0 ? "green":"red"}`}>{Math.floor(item.price_change_percentage_24h*100)/100}</p>
                            <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
                        </div>
                    ))
                }
            </div>       
        </div>
    )
}

export default Home
