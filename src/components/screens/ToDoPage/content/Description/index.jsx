
export const Description = (props) => {
    return (
        <p suppressContentEditableWarning={true} contentEditable onBlur={() => props.blurFunction()}>{props.children}</p>
    )
}