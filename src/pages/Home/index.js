import classNames from "classnames/bind";
import styles from './Home.module.scss';
import { LongVideo } from "~/components/LongVideo";
import * as getApi from '~/apiServices/getApi';

import { useState, useEffect } from "react";
 
const cx = classNames.bind(styles);

function Home(){

    const [longvideos, setLongVideos]= useState([]);

    const [shortvideos, setShortVideos]= useState([]);

    useEffect(()=>{
        const fetchApi = async ()=>{
            const resultLV = await getApi.videoLong();
                setLongVideos(resultLV);
                
            const resultSV = await getApi.videoShort();
                setShortVideos(resultSV);
        }
        fetchApi();
    },[])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu-item')}>
            </div>

            <div className={cx('products')}>   
                {longvideos.map((result)=>(
                    <LongVideo key={result.id} data={result}/>
                ))}
            </div>
            </div>
      
    )
}
export default Home;