export function Tab({children, buttons}){
    return (
        <>
        <menu>
            {buttons}
        </menu>
        {children}
        </>
    )
}