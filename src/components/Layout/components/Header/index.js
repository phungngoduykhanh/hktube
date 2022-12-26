import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import images from '@/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark,faMagnifyingGlass,faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx=classNames.bind(styles)

function Header (){
    return <header className={cx('wrapper')}>
          <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='HKTube'/>
                    <h2><span className={cx('color-H')}>H</span><span className={cx('color-K')}>K</span>Tube</h2>
                </div>
                <div className={cx('search')}>
                    <input placeholder='Search'></input>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                    {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon> */}
                    <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </button>
                </div>
                <div className={cx('actions')}>
                        dấdasdasd
                </div>
            </div>  
    </header>;
}
export default Header;
