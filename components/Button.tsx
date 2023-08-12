import { FC, ReactNode } from "react";

interface Props {
    children : ReactNode
    action ?: () => void
    color : string
}

const Button : FC<Props> =({
    children,
    action,
    color
}) => {
    return(
        <button onClick={action} className = {"flex p-2 rounded-lg w-fit mx-auto " + color }>
            {children}
        </button>
    )
}

export default Button