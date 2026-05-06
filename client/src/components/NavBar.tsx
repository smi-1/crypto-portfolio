import logo from "../assets/love.png"
import { Link } from "react-router-dom";
import menu from "../assets/menu-03-stroke-rounded.svg"
import { BtnLogin } from "../components/BtnLogin"
import { BtnMenu } from "./BtnMenu"
import { Logout } from "../components/Logout"
import { useAuth } from "../context/AuthContext"
import { ROUTES } from "./Routes";

export function NavBar({ overlayOpen, overlayClose, overlayToggle }: {
    overlayOpen: boolean;
    overlayToggle: () => void;
    overlayClose: () => void;
}) {
    const { user } = useAuth() 
    return (
        <>
            <nav>
                <div className="inner-nav">
                    <div className="nav-left"><Link to={ROUTES.HOME}><img className="logo" src={logo}/></Link></div>
                    <div className="nav-center"></div>
                    <div className="nav-right">
                        { user ? <Logout /> : <BtnLogin /> }
                        <BtnMenu onClick={overlayToggle} isOpen={overlayOpen}/></div>
                </div>
            </nav>
        </>
)
}