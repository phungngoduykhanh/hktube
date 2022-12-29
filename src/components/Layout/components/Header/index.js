import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleXmark,faEarthAsia,faEllipsisVertical,faKeyboard,faMagnifyingGlass,faSpinner,faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import Button from '@/components/Button';
import styles from './Header.module.scss'
import images from '@/assets/images';
import { wrapper as SeachArea } from '@/components/SearchArea';
import AccountItem from '@/components/AccountItem';
import Menu from '@/components/SearchArea/Menu';


const cx=classNames.bind(styles)

const MENU_ITEMS=[
    {
        icon:<FontAwesomeIcon icon={faEarthAsia}/>,
        title: 'english',
    },
    {
        icon:<FontAwesomeIcon icon={faCircleQuestion}/>,
        title: 'feedback and help',
        to:'/feedback'
    },
    {
        icon:<FontAwesomeIcon icon={faKeyboard}/>,
        title: 'Keyboard shortcuts',
        
    }
];

function Header (){
    const [searchResult, setSearchResult]=useState([]);
    useEffect(()=>{
        setTimeout(()=>{
            setSearchResult([])
        },0)
    },[])

    return <header className={cx('wrapper')}>
          <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='HKTube'/>
                    <h2><span className={cx('color-H')}>H</span><span className={cx('color-K')}>K</span>Tube</h2>
                </div>
                
                <Tippy 
                    interactive
                    visible={searchResult.length >0}
                    render={(attrs)=>(
                        <div className={cx('search-result')} tabIndex="-1"{...attrs}>
                            <SeachArea>
                                <h4 className={cx('search-title')}>
                                    Accounts
                                </h4>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                            </SeachArea>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                            <input placeholder='Search'></input>
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                            </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                            </button>
                    </div>
                </Tippy>
            
                <div className={cx('actions')}>
                    <Button primary lefticon={<FontAwesomeIcon icon={faCircleUser}/>}>
                        SIGN IN
                    </Button>
                    <Menu 
                        items={MENU_ITEMS}
                    >
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical}/> 
                        </button>
                    </Menu>
                </div>
            </div>  
    </header>;
}
export default Header;
