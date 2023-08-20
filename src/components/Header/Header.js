import classNames from 'classnames/bind';
import { Badge, Popover } from 'antd';
import { SearchOutlined, BellOutlined } from "@ant-design/icons";
import { useState, useEffect } from 'react'


import styles from './Header.module.scss';
import Search from './Search/Search';
import "./library.scss"
import logoTodo from '../../imgs/login/logo.svg';
import avatar_nguyet from '../../imgs/avatar/nguyet.jpg'
import avatar from '../../imgs/avatar.png';


const cx = classNames.bind(styles);

function Header() {
    // const [listEvents, setListEvents] = useState(localStorage.getItem("listEvents")[0] ? JSON.parse(localStorage.getItem("listEvents")) : []);
    const [searchOpen, setSearchOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState();
    const [currentAvatar, setCurrentAvatar] = useState();

    useEffect(() => {
        // const currentUserId = localStorage.getItem("currentUserId");
        // let listAccounts = localStorage.getItem("listAccounts")[0] ? JSON.parse(localStorage.getItem("listAccounts")) : [];
        // const user = listAccounts.filter((account) => Number(currentUserId) === Number(account.id));
        // setCurrentUser(user[0])
        // if (user[0].userName.includes("nguyet")) {
        //     setCurrentAvatar(avatar_nguyet);
        // }
        // else setCurrentAvatar(avatar)
        setCurrentAvatar(avatar_nguyet)
    }, [])

    
    return (
        <div className={cx('header')}>
            <div div className={cx('left-content')}>
                <div className={cx('logo')}>
                <img src={logoTodo} style={{width: "150px"} } alt="Logo" />
                </div>
            </div>

            <div className={cx('right-content')}>
                <Popover >
                    <div className={cx('option-item')} onClick={() => { setSearchOpen(true); }}>
                        <input class="stext" type="text" name="q" placeholder="Tìm kiếm" />
                        <SearchOutlined />
                    </div>
                </Popover>

                <div className={cx('user')}>
                     <div className={cx('user-avatar')}>
                           <div className={cx('avatar')}>
                                <img src={currentAvatar} alt="" />
                            </div>
                    </div>
                </div>   

            </div>
        </div>
    );
}

export default Header;
