import css from "../styles/style.scss";

function Login() {
    return (
        <div className={css.container}>
            <style jsx global>{`
                * {
                    box-sizing: border-box;
                }
                body {
                    background-color: #eee;
                    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif;
                }

                a {
                    text-decoration: none;
                    color: inherit;
                    cursor: pointer;
                }
            `}</style>
            <img src="/static/wordpress-logo.png" width="80" className={css.logo} />
            <div className={css.widthWrapper}>
                <form className={css.card} action="/submit" async>
                    <div className={css.inputContainer}>
                        <label for="username">Username or Email Address</label>
                        <input id="username" name="username" type="text" required />
                    </div>
                    <div className={css.inputContainer}>
                        <label for="password">Password</label>
                        <input id="password" name="password" type="password" required />
                    </div>
                    <div className={css.row}>
                        <div>
                            <div className={css.inputContainer}>
                                <input type="checkbox" id="rememberme" name="rememberme" />
                                <label for="rememberme">Remember Me</label>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className={css.button}>Log In</button>
                        </div>
                    </div>
                </form>
                <div className={css.linkWrapper}>
                    <a href="/reset-password">Lost your password?</a>
                    <a href="/home">
                        <svg width="18" height="18" viewBox="0 0 24 24">
                            <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
                        </svg>
                        Back to Wishup blog
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Login;