import classNames from 'classnames/bind';
import { Checkbox } from 'antd';
import { useEffect, useState } from 'react';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
// import DialogDetails from "../../../components/DialogDetails/DialogDetails";

import styles from './AddTask.module.scss';
import './library.scss';

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const cx = classNames.bind(styles);

function AddTask({ event, setListEvents }) {
    const [value, setValue] = useState(new Date());

    const navigate = useNavigate();
    const [done, setDone] = useState(false);
    const [important, setImportant] = useState(false);

    const handleChangeDone = (e) => {
        setDone(e.target.checked);
    };

    const handleChangeValue = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
            />
            <div className={cx('addTask') + ' addTaskLibrary'}>
                <div className={cx('task-content')}>
                    <div className={cx('content-checkbox')}>
                        <Checkbox value={done} onChange={(e) => handleChangeDone(e)}></Checkbox>
                    </div>
                    <div className={cx('content-title')}>
                        <input type="text" border="none" name="add" placeholder="Thêm tác vụ" />
                    </div>
                </div>
                <div className={cx('task-add')}>
                    <span className="material-symbols-outlined">
                        {/* <input type="date" /> */}
                        calendar_month
                    </span>
                    <button
                        className={cx('addTask', {
                            border: done ? '1px solid #000' : 'none',
                        })}
                    >
                        <div className={cx('content-important')}>Thêm</div>
                    </button>
                </div>
            </div>
        </>
    );
}

export default AddTask;
