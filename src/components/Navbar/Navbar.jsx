import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { useContext } from 'react'
import { CoinContext } from '../../context/CoinContext'
function Navbar() {

    const { setCurrency } = useContext(CoinContext)

    const currencyHandler = (e) => {
        switch (e.target.value) {
            case 'usd': {
                setCurrency({ name: 'usd', symbol: '$' })
                break;
            }
            case 'eur': {
                setCurrency({ name: 'eur', symbol: '€' })
                break;
            }
            case 'inr': {
                setCurrency({ name: 'inr', symbol: '₹' })
                break;
            }
            default: {
                setCurrency({ name: 'usd', symbol: '$' })
                break;
            }
        }
    }

    return (
        <div className='navbar'>
            <div className="nav-left">
                <img className='logo' src={logo} alt="Logo_Img" />
                <div className='logo-text'>CrypTrack</div>
            </div>
            <ul>
                <li>Home</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
            <div className="nav-right">
                <select onChange={currencyHandler}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="inr">INR</option>
                </select>
                <button>Sign Up
                    <img src={arrow_icon} />
                </button>
            </div>
        </div>
    )
}

export default Navbar
