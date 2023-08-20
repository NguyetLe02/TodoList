import classNames from 'classnames/bind';
import { DownOutlined } from '@ant-design/icons';
// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


import styles from './Assigned.module.scss';
import TaskBar from '../../components/TaskBar/TaskBar';
import DetailWork from '../../components/DetailWork/DetailWork';

const cx = classNames.bind(styles);


function Assigned() {
    // const [isOpenTaskdone, setIsOpenTaskdone] = useState(false);

    return (
        <div className={cx('today')} >
            <div className={cx('grid')} style={{ height: "100%" }}>
                <div className={cx('row')} style={{ height: "100%" }}>
                    <div style={{ flex: 1 }}>
                        <div className={cx('content')}>
                            <div className={cx('content-header')}>
                                <div className={cx('header-title')}>CÔNG VIỆC ĐƯỢC GIAO</div>
                            </div>

                            <div className={cx('content-body')}>
                                <div className={cx('grid')} style={{ height: "100%", display: 'flex', flexDirection: 'column' }}>

                                    <div className={cx('row')} style={{ flex: 1 }}>
                                        <div className={cx('col l-11')} style={{ padding: 0 }}>
                                            <div className={cx('content-wrapper')}>
  
                                                    <div className={cx('Work-list')}>
                                                        
                                                            
                                                            <DetailWork></DetailWork>
                                                            <DetailWork></DetailWork>
                                                            <DetailWork></DetailWork>
                                                            

                                                        
                                                    </div>


                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Assigned;
