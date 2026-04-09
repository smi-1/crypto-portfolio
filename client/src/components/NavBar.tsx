import logo from "../assets/love.png"
import menu from "../assets/menu-03-stroke-rounded.svg"
import { BtnLogin } from "../components/BtnLogin"

export function NavBar() {
    return (
        <>
            <nav>
                <div className="inner-nav">
                    <div className="nav-left"><img className="logo" src={logo}/></div>
                    <div className="nav-center"></div>
                    <div className="nav-right"><BtnLogin /><img className="menu" src={menu}/></div>
                </div>
            </nav>
        </>
)
}