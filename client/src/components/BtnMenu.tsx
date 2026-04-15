import menu from "../assets/menu-03-stroke-rounded.svg"
export function BtnMenu({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) {
    return (
        <button className="nav_menu_btn" onClick={onClick}>
            <img className={`menu ${isOpen ? "menu_open" : ""}`} src={menu}/>
        </button>
    )
}