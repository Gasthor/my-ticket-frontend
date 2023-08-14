import { Dispatch, FC, ReactNode, SetStateAction } from "react";

interface Props {
    title : string,
    value: string
    change: Dispatch<SetStateAction<string>>
    color?: string
}

const Input: FC<Props> = ({
    title,
    value,
    change,
    color
}) => {
    return (
        <>
            <label className="mt-1">{title}</label>
            <input className="p-1 mt-1 dark:bg-gray-700 rounded-lg" value={value} onChange={(event) => change(event.target.value)} />
        </>

    )
}

export default Input