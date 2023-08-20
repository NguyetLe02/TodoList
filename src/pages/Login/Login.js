import { useState, useEffect } from "react";
import classNames from 'classnames/bind';
import { EyeTwoTone, EyeInvisibleTwoTone } from '@ant-design/icons';
import { Checkbox } from 'antd';
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

import logoTodo from '../../imgs/login/logo.svg';

import styles from './Login.module.scss';
// import '../Signup/library.scss'

const cx = classNames.bind(styles);

function Login() {
    const navigate = useNavigate();
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [isHidePass, setIsHidePass] = useState(true);

    const handleChangeMail = (e) => {
        setMail(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleClickSubmit = (e) => {
        e.preventDefault();
        let listAccounts = localStorage.getItem("listAccounts")[0] ? JSON.parse(localStorage.getItem("listAccounts")) : [];
        const user = listAccounts.filter((account) => mail === account.mail && password === account.password)
        if (user && user[0]) {
            localStorage.setItem("currentUserId", user[0].id);
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Đăng nhập thành công",
                confirmButtonText: '<div class="fa fa-thumbs-up"}>OK</div>',
            })
            navigate("/");
        }
    };



    useEffect(() => {
        document.title = "Log in";
    }, []);
    return (
        <div className={cx('login') + "login"}>
            <div className={cx('grid wide')}>
                <div className={cx('row no-gutters ')}>
                <div className={cx(' col l-6 m-12 c-12 l-o-3') } >
                <div className={cx('form-login')}>
                        <div className={cx('header')}>
                            <img src={logoTodo} style={{width: "400px"} } alt="Logo" />
                        </div>

                        <form className={cx('form')} onSubmit={handleClickSubmit}>
                            <input
                                type="Tài khoản"
                                required
                                className={cx('form-input')}
                                placeholder="Tài khoản"
                                onChange={handleChangeMail}
                            />

                            <div className={cx('form-input-wrapper')}>
                                <input
                                    type={isHidePass ? "password" : "text"}
                                    required
                                    id="password"
                                    className={cx('form-input')}
                                    placeholder="Mật khẩu"
                                    onChange={handleChangePassword}
                                />
                                <div className={cx("show-icon")}>
                                    {isHidePass ? (
                                        <EyeTwoTone onClick={() => setIsHidePass(false)} twoToneColor="#9DADBA" />
                                    ) : (
                                        <EyeInvisibleTwoTone onClick={() => setIsHidePass(true)} twoToneColor="#9DADBA" />
                                    )}
                               </div>

                                {/* <EyeInvisibleTwoTone className={cx('show-icon')} /> */}
                            </div>

                            <div className={cx('form-options')}>
                                <div className={cx('select-option')}>
                                    <Checkbox value="agree" defaultChecked >Ghi nhớ đăng nhập</Checkbox>
                                </div>

                                <h3 className={cx('link-option')}>Quên mật khẩu?</h3>
                            </div>

                            <button className={cx(
                                 "form-btn",
                                mail && password
                                    ? "primary"
                                    : ""
                            )}>    Log In
                            </button>

                            <div className={cx('navigate-sign-up')}>
                                <span className={cx('navigate-sign-up-text')}>
                                    Bạn chưa có tài khoản? <Link to ="/signup">Đăng ký</Link>
                                </span>
                            </div>
                        </form>

                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
