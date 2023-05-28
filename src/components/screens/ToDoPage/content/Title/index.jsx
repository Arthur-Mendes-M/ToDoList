
export const Title = (props) => {
    return (
        <h1 suppressContentEditableWarning={true} contentEditable onBlur={() => props.blurFunction()}>{props.children}</h1>
    )
}