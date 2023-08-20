import classNames from 'classnames/bind';
import { useState } from "react";
import Swal from "sweetalert2";
import { EyeTwoTone, EyeInvisibleTwoTone } from '@ant-design/icons';
import { Link, useNavigate } from "react-router-dom";
import { Checkbox } from 'antd';
import axios from 'axios';


import styles from './Signup.module.scss';
import logoTodo from '../../imgs/login/logo.svg';
// import { Header } from 'antd/es/layout/layout';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
// import './library.scss'

const cx = classNames.bind(styles);

const Signup = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [isHidePass, setIsHidePass] = useState(true);
    const [isHideRePass, setIsHideRePass] = useState(true);
    const [isEqualPassword, setIsEqualPassword] = useState(true);
    const [userName, setUserName] = useState("");
    const navigate = useNavigate()
    const [success, setSuccess] = useState(false);
    // const [listEvents, setListEvents] = useState([]);

    const handleChangeMail = (e) => {
        setMail(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleChangeRePassword = (e) => {
        setRePassword(e.target.value);
    };
    const handleChangeUserName = (e) => {
        setUserName(e.target.value);
    }

    const handleClickSubmit = async (e) => {
        e.preventDefault();
        if (mail && password) {
            if (password !== rePassword) {
                setIsEqualPassword(false);
                return;
            }
            await axios.post("http://localhost:8800/signup",{
                name:userName, 
                account:mail, 
                password:password,
            }).then((res) =>{
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Đăng ký thành công",
                    confirmButtonText: '<div class="fa fa-thumbs-up"}>OK</div>',
                }).then((result) => {
                    if (result.isConfirmed) setSuccess(true);
                });
                navigate('/Login')
            }).catch(errror => {
                console.log(errror);
            });
        }
    };

    // useEffect(() => {
    //     document.title = "Sign Up";
    // }, []);

    return(
        <div className={cx('signup') + "sign-up"}>
            {/* <Header>    </Header> */}
            <div className={cx('grid wide')}>
                <div className={cx('row no-gutters')}>
                    {/* <Sidebar></Sidebar> */}

                    <div className={cx('col l-6 m-12 c-12 l-o-3')}>
                    <div className={cx('formsignup')}>
                        <div className={cx('header')}>
                            <img src={logoTodo} style={{width: "400px"} } alt="Logo" />
                        </div>

                        <form className={cx('form') } onSubmit={handleClickSubmit}>
                            <input
                                type="name"
                                required
                                className={cx('form-input')}
                                placeholder="Họ và tên"
                                onChange={handleChangeUserName}
                            />
                            <input
                                type="email"
                                required
                                className={cx('form-input')}
                                placeholder="Email"
                                onChange={handleChangeMail}
                            />
                            <div className={cx('form-input-wrapper')}>
                                <input
                                    type={isHidePass ? "password" : "text"}
                                    id="password"
                                    required
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

                

                            {!isEqualPassword ? (
                                    <p className={cx("notify")}>Mật khẩu phải giống nhau!</p>
                                ) : (
                                    <></>
                                )}
                            
                            <div className={cx('form-input-wrapper')}>
                                <input
                                    type={isHideRePass ? "password" : "text"}
                                    id="repassword"
                                    required
                                    onChange={handleChangeRePassword}
                                    className={cx('form-input')}
                                    placeholder="Nhập lại mật khẩu"
                                />

                                <div className={cx("show-icon")}>
                                    {isHideRePass ? (
                                     <EyeTwoTone onClick={() => setIsHideRePass(false)} twoToneColor="#9DADBA" />
                                    ) : (
                                     <EyeInvisibleTwoTone onClick={() => setIsHideRePass(true)} twoToneColor="#9DADBA" />
                                    )}
                                </div>
                                {/* <EyeInvisibleTwoTone className={cx('show-icon')} /> */}
                            </div>
      
                                <div className={cx('select-option')}>
                                    <Checkbox value="agree" defaultChecked >Tôi đồng ý với các điều khoản trên</Checkbox>        
                                </div>

                            <button className={cx(
                                "form-btn",
                                mail && password && rePassword
                                ? "primary" 
                                : ""
                                )}>Đăng ký
                            </button>

                            <div className={cx('navigate-login')}>
                            <span className={cx('navigate-login-text')}>
                                Bạn đã có tài khoản? <Link to = "/login"> Đăng nhập</Link>
                            </span>
                        </div>
                        </form>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup;