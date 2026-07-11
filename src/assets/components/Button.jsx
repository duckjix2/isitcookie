import { useNavigate } from 'react-router-dom';

const Button = ({ type, text, path, onClick, disabled }) => {
    const navigate = useNavigate();

    const clickNavi = () => {
        if (disabled) return;

        if (onClick) {
            onClick(); // path 대신 onClick이 있으면 이걸 우선 실행
            return;
        }

        if (!path) return;
        navigate(path);
    };

    return (
        <button className={type} onClick={clickNavi} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;