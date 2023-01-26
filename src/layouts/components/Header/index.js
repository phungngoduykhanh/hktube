import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faBell, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import Search from '../Search';
import Button from '~/components/Button';
import styles from './Header.module.scss'
import images from '~/assets/images';
import { wrapper as SeachArea } from '~/components/SearchArea';
import { Link } from 'react-router-dom';




const cx=classNames.bind(styles);

function Header (){
    
    const currentUser = true

    const userAvatar = 'https://tse1.mm.bing.net/th?id=OIP.kCxn-fpy95fsok0lZQInkwHaLH&pid=Api&P=0';

    return <header className={cx('wrapper')}>
          <div className={cx('content')}>
                <Link to='/' className={cx('logo')}>
                    <img src={images.logo} alt='HKTube'/>
                    <h2><span className={cx('color-H')}>H</span><span className={cx('color-K')}>K</span>Tube</h2>
                </Link>

                <Search/>
            
                <div className={cx('actions')}>

                {currentUser ?(
                    <>
                        <button className={cx('action-btn')}>
                            <FontAwesomeIcon icon={faVideoCamera}/>
                        </button>

                        <button className={cx('action-btn')}>
                            <FontAwesomeIcon icon={faBell}/>
                        </button>
                        
                        <Tippy
                            trigger='click'
                            interactive
                            render={(attrs)=>(
                                <div className={cx('Sign-out')} tabIndex="-1"{...attrs}>           
                                    <SeachArea>
                                        <Button>
                                            SIGN OUT
                                        </Button>
                                    </SeachArea>
                                </div>
                            )}
                        >
                            <img src={userAvatar} className={cx('user-avatar')} alt=""/>
                            
                        </Tippy>  
                    </> 
                    
                ):(
                    <>
                        <Button href={'http://127.0.0.1:5500/hktube-ui/src/login/login.html'} primary lefticon={<FontAwesomeIcon icon={faCircleUser} />}>
                            SIGN IN
                        </Button>
                    </>
                )}  
            </div>
        </div>  
    </header>
}
export default Header;
