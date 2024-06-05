export function TabButton(prop) {
    return (
        <li><button>{prop.children}</button></li>
    )
}

export function TabLabelButton({label}) {
    return (
        <li><button>{label}</button></li>
    )
}