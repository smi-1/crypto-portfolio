import { useNavigate } from "react-router-dom"
import { ROUTES } from "./Routes"

export function BtnLogin() {
    const navigate = useNavigate()
    function handleClick() {
        navigate(ROUTES.LOGIN)
    }
    return (
    <>
        <div className="btn-login-wrap"><button className="btn-login" onClick={handleClick}>Log in</button></div>
    </>
    )
}