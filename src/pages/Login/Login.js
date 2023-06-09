import classNames from 'classnames/bind';
import { EyeInvisibleTwoTone } from '@ant-design/icons';

import logoTodo from '../../imgs/login/logo.svg';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('login')}>
            <div className={cx('grid wide')}>
                <div className={cx('row no-gutters ')}>
                <div className={cx(' col l-6 m-12 c-12 l-o-3') } >
                <div className={cx('form-login')}>
                        <div className={cx('header')}>
                            <img src={logoTodo} style={{width: "400px"} } alt="Logo" />
                        </div>

                        <div className={cx('form')}>
                            <input
                                type="Tài khoản"
                                className={cx('form-input')}
                                placeholder="Tài khoản"
                            />
                            <div className={cx('form-input-wrapper')}>
                                <input
                                    type="password"
                                    className={cx('form-input')}
                                    placeholder="Mật khẩu"
                                />
                                <EyeInvisibleTwoTone className={cx('show-icon')} />
                            </div>

                            <div className={cx('form-options')}>
                                <div className={cx('select-option')}>
                                    <input
                                        className={cx('select-option-input')}
                                        type="checkbox"
                                        id="login-state"
                                        name="login-state"
                                    />
                                    <label
                                        className={cx('select-option-label')}
                                        htmlFor="login-state"
                                    >
                                        Ghi nhớ đăng nhập
                                    </label>
                                </div>
                                <h3 className={cx('link-option')}>Quên mật khẩu?</h3>
                            </div>

                            <div className={cx('form-btn')}>Đăng nhập</div>
                        </div>

                        <div className={cx('navigate-sign-up')}>
                            <span className={cx('navigate-sign-up-text')}>
                                Bạn chưa có tài khoản? <a href="#">Đăng ký</a>
                            </span>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
