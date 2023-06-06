import classNames from 'classnames/bind';
import { EyeTwoTone, EyeInvisibleTwoTone } from '@ant-design/icons';

import logoTodo from '../../imgs/login/logo.svg';
import logoGoogle from '../../imgs/google.svg';
import logoFacebook from '../../imgs/facebook.svg';
import rings from '../../imgs/rings.svg';
// import layout2 from '../../imgs/login/Privacy policy-rafiki 2.svg';


import styles from './Login.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('login')}>
            <div className={cx('grid wide')}>
                <div className={cx('row no-gutters ')}>
                    <div className={cx(' formlogin col l-6 m-12 c-12 l-o-4')}>
                        <div className={cx('header')}>
                            <img src={logoTodo} alt="Logo" />
                        </div>
                        <div className={cx('social-btn')}>
                            <div className={cx('social-btn__logo')}>
                                <img src={logoGoogle} alt="Logo" />
                            </div>
                            <h4 className={cx('social-btn__body')}>Log in with Google</h4>
                        </div>

                        <div className={cx('social-btn')}>
                            <div className={cx('social-btn__logo')}>
                                <img src={logoFacebook} alt="Logo" />
                            </div>
                            <h4 className={cx('social-btn__body')}>Log in with Facebook</h4>
                        </div>

                        <div className={cx('form')}>
                            <input
                                type="email"
                                className={cx('form-input')}
                                placeholder="name@gmail.com"
                            />
                            <div className={cx('form-input-wrapper')}>
                                <input
                                    type="password"
                                    className={cx('form-input')}
                                    placeholder="Enter your password"
                                />
                                {/* <EyeTwoTone className={cx('show-icon')} /> */}
                                <EyeInvisibleTwoTone className={cx('show-icon')} />
                            </div>

                            <div className={cx('form-options')}>
                                <h3 className={cx('link-option')}>Forgot Password?</h3>
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
                                        Stay login
                                    </label>
                                </div>
                            </div>

                            <div className={cx('form-btn')}>Login</div>
                        </div>

                        <div className={cx('navigate-sign-up')}>
                            <img className={cx('navigate-sign-up-img')} src={rings} alt="" />
                            <span className={cx('navigate-sign-up-text')}>
                                don't have an account yet? <a href="#">Sign up</a>
                            </span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Login;
