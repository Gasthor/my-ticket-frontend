import { FC, ReactNode } from "react";

interface Props {
    children : ReactNode
    action ?: () => void
    color : string
    animation ?: string
}

const Button : FC<Props> =({
    children,
    action,
    color,
    animation
}) => {
    return(
        <button onClick={action} className = {`p-2 rounded-lg transition ease-in-out delay-150 duration-300 ${color} ${animation}`}>
            {children}
        </button>
    )
}

export default Button