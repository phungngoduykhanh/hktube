import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import { Link } from "react-router-dom";

const cx=classNames.bind(styles);

function AccountItem({data}){
    return (
    <Link to={`/@${data.id}`} className={cx('wrapper')}>
        <img className={cx('avatar')} src={'https://tse1.mm.bing.net/th?id=OIP.kCxn-fpy95fsok0lZQInkwHaLH&pid=Api&P=0'}/>
        <div className={cx('info')}>
            <p className={cx('name')}>
                {data.full_name}
            </p>
            <span className={cx('username')}>{data.nickname}</span>
        </div>
    </Link>
)}

export default AccountItem;