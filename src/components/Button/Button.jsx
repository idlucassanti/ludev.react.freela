function Button({text, onClickButton}) {
    return (
        <button onClick={onClickButton}>
            <span>{text}</span>
        </button>
    );
}

export default Button;