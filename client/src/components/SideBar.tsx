import sideIcon from "../assets/hero.png"
import { FormLogin } from "../components/FormLogin"

export function SideBar() {
    return (
        <>
            <aside className="sidebar">
                <div className="sidebar-item">
                    
                    <div className="side-top">
                        <div className="side-icon">
                            <img src={sideIcon} alt="" />
                        </div>
                        <div className="side-text">Bli en omtökt medarbetare</div>
                        <div className="side-text1">Du behöver inte göra allt perfekt. Att bara vara där och börja någonstans är mer än nog.</div>
                    </div>
                    <div className="side-bot"></div>
                </div>
            </aside>
        </>
    )
}