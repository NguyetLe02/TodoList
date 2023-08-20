import classNames from "classnames/bind";
import { DownOutlined } from '@ant-design/icons';
import { useState, useEffect } from "react";

import styles from './DetailWork.module.scss';
import TaskBar from '../TaskBar/TaskBar';


const cx = classNames.bind(styles);

function DetailWork({ event }) {
    const [isOpenDetailWork, setIsOpenDetailWork] = useState(false);


    return (
        <div className={cx('detail')}>
            <div className={cx('detailWork-header')}>
                <div className='detailWork-title'>
                     Tên công việc
                </div>
                <div className='downlined'>
                    <span
                        className={isOpenDetailWork ? cx("icon-downOut") : cx("icon-downUp")}
                        onClick={() => setIsOpenDetailWork(!isOpenDetailWork)}
                        ><DownOutlined />
                    </span>
                </div>
            </div>
                                                        
            <div className={cx('detailWork-list')}>
                {
                    isOpenDetailWork && 
                    <div className='list'>
                        <TaskBar></TaskBar>
                        <TaskBar></TaskBar>
                        <TaskBar></TaskBar>
                    </div>
                }
            </div>

        </div>
    );
}

export default DetailWork;