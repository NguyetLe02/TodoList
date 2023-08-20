import classNames from "classnames/bind";
import { LogoutOutlined,FolderOutlined, PlusOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";


import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);

const emtpyFunction = (e) => {

};

const colors = ["#F4CD80", "#F48080", "#80D9F4", "#C180F4"]

function Sidebar({ show = emtpyFunction, isToday, isImportant, isSharewith, isListTask,listEvents , setIsTab}) {
    const [visitable, setVisitable] = useState(true)
    const [isOpenListWork, setIsOpenListWork] = useState(false);
    const [listWork, setListWork] = useState([]);

    useEffect(() => {
        const filterListWork = listEvents?.filter((e) => e.raw.eventType === "target" && e.raw.isImportain)
        setListWork(filterListWork)
    }, [listEvents])


    const navigate = useNavigate();


    return (
        // currentUser &&
        <div style={{ position: "relative" }}>
            <div className={visitable ? cx('sidebar', 'visitable') : cx('sidebar')}>
                <div className={cx('icon-menu')} onClick={() => { setVisitable(false); show(prev => !prev) }}>
                    <MenuFoldOutlined style={{ fontSize: "30px" }} />
                </div>

                <div className={cx('nav')}>
                    <div className={cx('nav-item', isToday ? 'active' : null)} onClick={() => { setIsTab("/") }}>
                        <FolderOutlined />
                        <span className={cx('item-title')}>Hôm nay</span>
                    </div>
                    <div className={cx('nav-item', isImportant ? 'active' : null)} onClick={() => setIsTab("/important")}>
                         <FolderOutlined />
                        <span className={cx('item-title')}>Quan trọng</span>
                    </div>
                    <div className={cx('nav-item', isSharewith ? 'active' : null)} onClick={() => setIsTab("/assigned")}>
                        <FolderOutlined />
                        <span className={cx('item-title')}>Công việc được giao</span>
                    </div>
                    <div className={cx('nav-item', isListTask ? 'active' : null)} onClick={() => setIsTab("/alltask")}>
                          <FolderOutlined />
                        <span className={cx('item-title')}>Tác vụ</span>
                    </div>

                </div>

                <div className={cx('listwork')} onClick={() => setIsOpenListWork(!isOpenListWork)}>

                    <div className={cx('listwork-header')}>
                        <span>Công việc</span>
                        <div className={cx('listwork-add-btn')}>
                            <PlusOutlined style={{ fontSize: 15}} />
                        </div>
                        
                    </div>

                    <div className={cx('listwork-item', isToday ? 'active' : null)} onClick={() => { navigate("/Today") }}>
                        <FolderOutlined />
                        <span className={cx('item-title')}>Hôm nay</span>
                    </div>
                    <div className={cx('listwork-item', isImportant ? 'active' : null)} onClick={() => navigate("/Important")}>
                         <FolderOutlined />
                        <span className={cx('item-title')}>Quan trọng</span>
                    </div>
                    <div className={cx('listwork-item', isSharewith ? 'active' : null)} onClick={() => navigate("/Sharewith")}>
                        <FolderOutlined />
                        <span className={cx('item-title')}>Công việc được giao</span>
                    </div>
                    <div className={cx('listwork-item', isListTask ? 'active' : null)} onClick={() => navigate("/Task")}>
                          <FolderOutlined />
                        <span className={cx('item-title')}>Tác vụ</span>
                    </div>


                    <div className={cx('work-list')}>
                        {
                            isOpenListWork && listWork?.map((e, index) => (
                                <div className={cx('work-item')} onClick={() => navigate(`/overview?eventId=${e.id}`)}>
                                    <div className={cx('work-item-checkbox')} style={{ backgroundColor: colors[index % 4] }}></div>
                                    <Tooltip title={e.title || e.eventName}>
                                        <div className={cx('work-item-title')}>{e.title || e.eventName}</div>
                                    </Tooltip>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className={cx('logout-btn')}>
                    <Button
                        type="default"
                        icon={<LogoutOutlined style={{ fontSize: 15 }} />}
                        size="large"
                        style={{ fontWeight: 600, width: "100%" }}
                        onClick={() => { localStorage.removeItem("currentUserId"); navigate('/Login') }}
                    >
                        LOG OUT
                    </Button>
                </div>
            </div>
            {!visitable && <div className={cx('icon-visiable')} onClick={() => { setVisitable(true); show(prev => !prev) }}>
                <MenuUnfoldOutlined style={{ fontSize: "30px" }} />
            </div>}
        </div>

    );
}

export default Sidebar;