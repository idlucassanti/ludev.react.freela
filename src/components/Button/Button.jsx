function Button({onClickButton}) {
    return (
        <button onClick={onClickButton}>
            <span>Texto do Botão</span>
        </button>
    );
}

export default Button;