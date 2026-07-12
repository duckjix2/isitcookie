import { useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { toPng } from "html-to-image";
import jar from "../data/jar.json";
import allResults from "../data/result.json";
import Badge from "../components/Badge"
import ResultSec from "../components/ResultSec"
const Result = () => {
    const { resultId } = useParams();
    const { state } = useLocation();
    const tinId = state?.tinId;
    const selectJar = tinId != null ? jar.jar[tinId] : null;
    const captureRef = useRef(null);

    const result = Object.entries(allResults)
        .flatMap(([category, list]) => list.map(item => ({ ...item, category })))
        .find(item => item.id === Number(resultId));

    const handleSaveImage = async () => {
        if (!captureRef.current) return;

        const dataUrl = await toPng(captureRef.current, {
            filter: (node) => !node.classList?.contains("button_sec"),
        });

        const link = document.createElement("a");
        link.download = `${result?.name_ko ?? "result"}.png`;
        link.href = dataUrl;
        link.click();
    };

    return<section className="result" ref={captureRef}>
    <div className="resultHeader">
        <div className="resultHeader__img">
            <img className="resultHeader__img--out" src={selectJar?.out} alt=""/>
            <img className="resultHeader__img--in" src={selectJar?.in} alt=""/>
        </div>
        <Badge type={result?.category}/>
    </div>
    <ResultSec result={result} onSaveImage={handleSaveImage} />
    </section>
}
export default Result