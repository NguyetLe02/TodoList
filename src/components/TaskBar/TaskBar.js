import classNames from "classnames/bind";
import { Checkbox } from 'antd';
import { useEffect, useState } from "react";
import { StarOutlined,StarFilled } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
// import DialogDetails from "../../../components/DialogDetails/DialogDetails";

import styles from './TaskBar.module.scss';
import './library.scss'

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const cx = classNames.bind(styles);

function TaskBar({ event, setListEvents }) {
    const navigate = useNavigate();
    const [done,setDone] = useState(false)
    const [important,setImportant] = useState(false)

    const handleChangeDone = (e) =>{
        setDone(e.target.checked);
    }

    return (
        <>
            <div className={cx('taskbar') + " taskbarLibrary"}>
                <div className={cx('task-content')}>

                    <div className={cx('content-checkbox')}>
                    <Checkbox value={done} onChange={e => handleChangeDone(e)}></Checkbox>
                    </div>
                    <div className={cx('content-title')}>Name</div>
                    <div className={cx('content-important')} onClick={() => setImportant(prev => !prev) }>
                    {important ?<StarFilled /> :<StarOutlined />}
                    
                    
                    </div>
               </div>

            </div>
        </>
    );
}

export default TaskBar;