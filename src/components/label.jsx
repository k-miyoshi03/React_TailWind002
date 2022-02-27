const Label = (props) => {
    return (
        <label className={props.className} id={props.id} htmlFor={props.for}>
            {props.children}
        </label>
    );
}

export default Label;