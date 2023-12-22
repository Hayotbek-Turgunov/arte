import './Navbar.css'
import { navbar } from '../../Static/Index.js'
import siteHeaderLogo from '../../Assets/logo.png'
import { HiBars3BottomRight } from "react-icons/hi2";




function Navbar() {
    return (
        <div className='site-header'>
            <div className="container">
                <div className="site-header-container">
                    <a className='site-header-logo-link' href="#">
                        <img className='site-header-logo-img' src={siteHeaderLogo} alt="" />
                    </a>

                    <div className="site-header-site-nav">
                        <ul className='site-header-site-list'>
                            {
                                navbar.map((value, index) => {
                                    return (
                                        <li key={index} className='site-header-site-item'>
                                            <a className='site-header-site-link' href="#">{value}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="site-header-auth">
                        <button className='site-header-auth-btn'>Login</button>
                    </div>
                    <button className='site-header-auth-btn-bars'><HiBars3BottomRight /></button>
                </div>
            </div >
        </div >
    )
}

export default Navbar