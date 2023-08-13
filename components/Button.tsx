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
        <button onClick={action} className = {"p-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300 " + color }>
            {children}
        </button>
    )
}

export default Button