import { ReactNode } from "react"

interface AuthButtonProps {
    backColor: string,
    textColor: string,
    children?: ReactNode
}



function AuthButton({backColor, textColor, children}: AuthButtonProps) {
    return (
        <>
        <button className="nunito-regular" style={{backgroundColor: backColor, color: textColor, border: `none`, borderRadius: `8px`, padding: '5px 15px 5px 15px', marginRight: `10px`}}>{children}</button>
        </>
    )
}

export default AuthButton