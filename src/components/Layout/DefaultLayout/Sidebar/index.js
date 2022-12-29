import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';


const cx= classNames.bind(styles);

function Sidebar (){
    return <aside className={cx('wrapper')}>
        {/* <Menu>
            <menuItem title="f" to={config.router.Home} icon={}/>
        </Menu> */}
    </aside>
}
export default Sidebar;