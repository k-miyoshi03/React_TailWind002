const TextArea = (props) => {
    return (
        <textarea className={props.className} type={props.type} name={props.name} value={props.value}>
            {props.children}
        </textarea>
    );
}

export default TextArea;