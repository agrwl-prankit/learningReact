export function Tab({children, buttons, buttonContainer}){
    const ButtonContainer = buttonContainer   // must be capital case
    return (
        <>
        <ButtonContainer>
            {buttons}
        </ButtonContainer>
        {children}
        </>
    )
}