const Input = (props) => {
    return (
        <input className={props.className} type={props.type} name={props.name} value={props.value}>
            {props.children}
        </input>
    );
}

export default Input;