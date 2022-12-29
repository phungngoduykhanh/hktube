import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './Button.module.scss';


const cx = classNames.bind(styles);

function Button({ to, href,lefticon, large, primary ,disabled=false, children, onClick}){
    let Comp = 'button';
    const props={
        onClick,
    }

    if(disabled){
        delete props.onClick;
    }

    if(to){
        props.to=to
        Comp=Link
    }else if (href){
        props.href=href
        Comp='a'
    }
    const classes = cx('wrapper',{
        primary,
        large,
        disabled
    });
    
    return (
        <Comp className={classes}>
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            <span>{children}</span>
        </Comp>
    )
}
export default Button;
