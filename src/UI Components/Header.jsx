import '../style/main.css'
import logo from '../assets/logoMiami.png'
import burger from '../assets/burgerMenu.png'
import phone from '../assets/phoneIcon.png'

const Header = () => {
    return (
        <section className='header'>
            <div className='header-bg'></div>
            <div className='container'>
                <div className='header-inner'>
                    <a href="">
                        <img src={burger} alt="burger"/>
                    </a>
                    <a href="">
                        <img src={logo} alt="logo"/>
                    </a>
                    <a href=""><img src={phone} alt="phone"/></a>
                </div>
            </div>
        </section>
    );
};

export default Header;