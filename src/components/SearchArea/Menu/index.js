import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import {wrapper as SeachArea} from '@/components/SearchArea';
import MenuItem from './MenuItem';

const cx= classNames.bind(styles);
function Menu({children,items=[]}){

    const renderItems=()=>{
        return items.map((item,index)=>(
            <MenuItem key={index} data={item}/>
        ))
    };
    return(
        <Tippy 
        delay={[0,700]}
        interactive
        placement='bottom-end'
        render={(attrs)=>(
            <div className={cx('content')} tabIndex="-1"{...attrs}>
                <SeachArea>
                  {renderItems()}
                </SeachArea>
            </div>
        )}
    >   
        {children}
    </Tippy>
    )
}
export default Menu;