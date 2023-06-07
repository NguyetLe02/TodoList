import classNames from 'classnames/bind';
import { EyeTwoTone, EyeInvisibleTwoTone } from '@ant-design/icons';

import styles from './Signup.module.scss';
import logoTodo from '../../imgs/login/logo.svg';

const cx = classNames.bind(styles);

const Signup = () => {
    return(
        <div className={cx('signup')}>
            <div className={cx('grid wide')}>
                <div className={cx('row no-gutters')}>
                
                    <div className={cx('col l-6 m-12 c-12 l-o-3')}>
                    <div className={cx('formsignup')}>
                        <div className={cx('header')}>
                            <img src={logoTodo} style={{width: "400px"} } alt="Logo" />
                        </div>

                        <div className={cx('form')}>
                            <input
                                type="name"
                                className={cx('form-input')}
                                placeholder="Họ và tên"
                            />
                            <input
                                type="email"
                                className={cx('form-input')}
                                placeholder="Email"
                            />
                            <div className={cx('form-input-wrapper')}>
                                <input
                                    type="password"
                                    className={cx('form-input')}
                                    placeholder="Mật khẩu"
                                />
                                <EyeInvisibleTwoTone className={cx('show-icon')} />
                            </div>
                            <div className={cx('form-input-wrapper')}>
                                <input
                                    type="password"
                                    className={cx('form-input')}
                                    placeholder="Nhập lại mật khẩu"
                                />
                                <EyeInvisibleTwoTone className={cx('show-icon')} />
                            </div>

                                <div className={cx('select-option')}>
                                    <input
                                        className={cx('select-option-input')}
                                        type="checkbox"
                                        id="login-state"
                                        name="login-state"
                                    />
                                    <label
                                        className={cx('select-option-label')}
                                    >
                                        Tôi đồng ý với các điều khoản trên
                                    </label>
                                </div>

                            <div className={cx('form-btn')}>Đăng ký</div>
                        </div>

                        <div className={cx('navigate-login')}>
                            <span className={cx('navigate-login-text')}>
                                Bạn đã có tài khoản? <a href="#">Đăng nhập</a>
                            </span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup;