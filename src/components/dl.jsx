const Dl = (props) => {
    return (
        <dl className={props.className} >
            {props.children}
        </dl>
    );
}

export default Dl;