import "./style/resultSec.css";
import Button from "../components/Button"
const ResultSec = ({ result, onSaveImage }) => {
    if (!result) return null;

    return (
        <div className="resultSec">
            {result.image && (
                <img className="resultSec__img" src={result.image} alt={result.name_ko} />
            )}
            <h2 className="resultSec__name">{result.name_ko}</h2>
            <p className="resultSec__symbol">{result.symbol_ko}</p>
            <p className="resultSec__message">{result.message_ko}</p>
        
            <div className="button_sec">
                <Button type="primary" text="다시하기" path="/"/>
                <Button type="secondary" text="이미지 저장" onClick={onSaveImage}/>
            </div>
        </div>
    );
}

export default ResultSec
