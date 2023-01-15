import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import { NavLink } from "react-router-dom";

const cx=classNames.bind(styles);

function AccountItem({data}){
    return (
    <NavLink to={`@${data.id}`} className={cx('wrapper')}>
        <img className={cx('avatar')} src={data.avatar}/>
        <div className={cx('info')}>
            <p className={cx('name')}>
                {data.full_name}
            </p>
            <span className={cx('username')}>{data.nickname}</span>
        </div>
    </NavLink>
)}

export default AccountItem;