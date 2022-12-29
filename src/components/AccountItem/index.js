import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx=classNames.bind(styles);

function AccountItem(){
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')}/>
        <div className={cx('info')}>
            <p className={cx('name')}>
                phung ngo duy khanh
            </p>
            <span className={cx('username')}>nguyenvana</span>
        </div>
    </div>
}

export default AccountItem;