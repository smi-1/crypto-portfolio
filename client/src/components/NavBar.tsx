import logo from "../assets/love.png"
import menu from "../assets/menu-03-stroke-rounded.svg"
import { BtnLogin } from "../components/BtnLogin"
import { BtnMenu } from "./BtnMenu"

export function NavBar({ onMenuClick, isOpen }: { onMenuClick: () => void; isOpen: boolean }) {
    return (
        <>
            <nav>
                <div className="inner-nav">
                    <div className="nav-left"><img className="logo" src={logo}/></div>
                    <div className="nav-center"></div>
                    <div className="nav-right"><BtnLogin /><BtnMenu onClick={onMenuClick} isOpen={isOpen}/></div>
                </div>
            </nav>
        </>
)
}