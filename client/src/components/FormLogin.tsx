export function FormLogin() {
    return (
        <form className="form_login form_style">
            <div className="form_extra">Log in</div>
            <label htmlFor="">
                <p className="form_title">Username</p>
                <input type="text" />
            </label>
            <label htmlFor="">
                <p className="form_title">Password</p>
                <input type="password" />
            </label>
            <div className="btn-login-wrap"><button className="btn-login">Log in</button></div>
            
        </form>
    )
}