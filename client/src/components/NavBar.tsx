import logo from "../assets/love.png"
import menu from "../assets/menu-03-stroke-rounded.svg"
import { BtnLogin } from "../components/BtnLogin"
import { BtnMenu } from "./BtnMenu"
import { Logout } from "../components/Logout"
import { useAuth } from "../context/AuthContext"

export function NavBar({ onMenuClick, isOpen }: { onMenuClick: () => void; isOpen: boolean }) {
    const { user } = useAuth() 
    return (
        <>
            <nav>
                <div className="inner-nav">
                    <div className="nav-left"><a href="/"><img className="logo" src={logo}/></a></div>
                    <div className="nav-center"></div>
                    <div className="nav-right">
                        { user ? <Logout /> : <BtnLogin /> }
                        <BtnMenu onClick={onMenuClick} isOpen={isOpen}/></div>
                </div>
            </nav>
        </>
)
}