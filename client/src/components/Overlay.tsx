import { useState } from "react"

export function Overlay({ isOpen, onClose, children }: {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}) {
    if (!isOpen) return null;

    return (
        <div className="main_overlay" onClick={onClose}>
            <div className="main_overlay_content" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
