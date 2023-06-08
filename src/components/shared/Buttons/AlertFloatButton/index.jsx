import { GlobalContainer, MessageContainer, TitleMessage, DescriptionMessage, AlertButton } from "./styles"


export const AlertCaution = () => {
    let open = false

    const showMessage = (event) => {
        if(open) {
            event.currentTarget.parentNode.style = null
            open = false
        } else {
            event.currentTarget.parentNode.style.transform = 'translate(1rem, 1rem)'
            event.currentTarget.parentNode.style.marginRight = '2rem'
            open = true
        }
    }

    return (
        <GlobalContainer>
            <MessageContainer>
                <TitleMessage>Caution!</TitleMessage>
                <DescriptionMessage>All notes are shared with everyone who access this link. Everyone can see, change and delete.</DescriptionMessage>
            </MessageContainer>
            <AlertButton onClick={showMessage}>🚨</AlertButton>
        </GlobalContainer>
    )
}