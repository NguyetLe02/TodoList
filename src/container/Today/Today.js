import classNames from 'classnames/bind';
import { DownOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Today.module.scss';
import TaskBar from '../../components/TaskBar/TaskBar';
import AddTask from '../../components/AddTask/AddTask';

const cx = classNames.bind(styles);

function Today() {
    const [isOpenTaskdone, setIsOpenTaskdone] = useState(false);

    return (
        <div className={cx('today')}>
            <div className={cx('grid')} style={{ height: '100%' }}>
                <div className={cx('row')} style={{ height: '100%' }}>
                    <div style={{ flex: 1 }}>
                        <div className={cx('content')}>
                            <div className={cx('content-header')}>
                                <div className={cx('header-title')}>NGÀY HÔM NAY</div>
                            </div>

                            <div className={cx('content-body')}>
                                <div
                                    className={cx('grid')}
                                    style={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <div className={cx('row')} style={{ flex: 1 }}>
                                        <div className={cx('col l-11')} style={{ padding: 0 }}>
                                            <div className={cx('content-wrapper')}>
                                                <div className={cx('selection')}>
                                                    <AddTask></AddTask>
                                                    <TaskBar></TaskBar>
                                                    <TaskBar></TaskBar>
                                                    <TaskBar></TaskBar>
                                                </div>

                                                <div
                                                    className={cx('taskdone')}
                                                    onClick={() =>
                                                        setIsOpenTaskdone(!isOpenTaskdone)
                                                    }
                                                >
                                                    <div className={cx('taskdone-header')}>
                                                        <div className="taskdone-title">
                                                            Đã hoàn thành
                                                        </div>
                                                        <div className="downlined">
                                                            <span
                                                                className={
                                                                    isOpenTaskdone
                                                                        ? cx('icon-downOut')
                                                                        : cx('icon-downUp')
                                                                }
                                                                onClick={() =>
                                                                    setIsOpenTaskdone(
                                                                        !isOpenTaskdone,
                                                                    )
                                                                }
                                                            >
                                                                <DownOutlined />
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className={cx('Taskdone-list')}>
                                                        {isOpenTaskdone && (
                                                            <div className="list">
                                                                <TaskBar></TaskBar>
                                                                <TaskBar></TaskBar>
                                                                <TaskBar></TaskBar>
                                                            </div>
                                                        )}
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
            </div>
        </div>
    );
}

export default Today;
