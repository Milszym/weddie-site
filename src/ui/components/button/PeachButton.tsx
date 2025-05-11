import "./common.css"

interface PeachButtonProps {
    text: string,
    onClick: () => void,
    className?: string,
    enabled?: boolean
    outline?: boolean
}

export const PeachButton = (props: PeachButtonProps) => {
    return <button disabled={props.enabled == false}
     className={`btn peachButton${props.className ? ` ${props.className}` : ''}${props.outline == true ? ' btn-outline' : ''}`} onClick={props.onClick}>
        {props.text}
    </button>
}