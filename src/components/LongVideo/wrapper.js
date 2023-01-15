import classNames from "classnames/bind";
import styles from './Video.module.scss'

const cx = classNames.bind(styles);

function Video({data}){

    return (<div className={cx('Video')}>
                <div className={cx('video-container')}>
                    <iframe  src={`https://www.youtube.com/embed/${data.video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                

                <div className={cx('info')}>
                    <img className={cx('avatar')} src={data.imgauthor}/>
                    
                    <div className={cx('')}>

                        <div className={cx('info-top')}>
                            <p className={cx('name-video')}>
                                {data.namevideo}
                            </p>
                        </div>

                        <div className={cx('info-bottom')}>
                            <span className={cx('name-author')}>
                                {data.nameauthor}
                            </span>
                            <span className={cx('views')}>
                                {data.view}
                            </span>
                        </div>

                    </div>
                    
                </div>
            </div>
)}
export default Video;
