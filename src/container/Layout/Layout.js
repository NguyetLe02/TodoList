import classNames from 'classnames/bind';
import { useState,useEffect } from "react";
import axios from 'axios';

import styles from './Layout.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Today from '../Today/Today';
import Important from '../Important/Important';
import Assigned from '../Assigned/Assigned';
import AllTask from '../AllTask/AllTask';


const cx = classNames.bind(styles);


function Layout() {
    const [isShowSideBar, setIsShowSideBar] = useState(true);
    const [isTab, setIsTab] = useState("/");
    const [tasks, setTasks] = useState([]);
    const [important, setImportant] = useState([]);

    const getTasks = async () =>{
        await axios.get("http://localhost:8800/tasks")
        .then(res => {
            setImportant(res.data.filter(task => task.important ===1))
        }).catch(err => {console.log(err);});
    }

    useEffect(() =>{
        getTasks();
    },[JSON.stringify(tasks)])

    return (
        <div className={cx('layout')} >
            <Header></Header>

            <div className={cx('grid')} style={{ height: "100%" }}>
                <div className={cx('row')} style={{ height: "100%" }}>
                    <div className={cx(isShowSideBar ? 'col l-2-4' : 'col l-1')}>
                        <Sidebar
                            show={setIsShowSideBar}
                            setIsTab = {setIsTab}
                        ></Sidebar>
                    </div>
                    <div className={cx(isShowSideBar ? 'col l-12' : 'col l-11')} style={{ flex: 1 }}>
                        <div className={cx('content')}>
                            {isTab === "/" && <Today/>}
                            {isTab === "/important" && <Important tasks={important} setTasks={setTasks} />}
                            {isTab === "/assigned" && <Assigned/>}
                            {isTab === "/alltask" && <AllTask tasks={tasks} setTasks={setTasks} />}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Layout;
