import classNames from 'classnames/bind';
import { useState } from "react";


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
                            {isTab === "/important" && <Important/>}
                            {isTab === "/assigned" && <Assigned/>}
                            {isTab === "/alltask" && <AllTask/>}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Layout;
