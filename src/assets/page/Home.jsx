import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Jar from "../components/Jar";
import Button from "../components/Button";
import OpeningModal from "../components/OpeningModal";
import { getRandomResult } from "../utils/getRandomResult";

const Home = () => {
    const [selected, setSelected] = useState(null);
    const [pendingResult, setPendingResult] = useState(null); // 모달 트리거
    const navigate = useNavigate();

    const handleOpenLid = () => {
        const result = getRandomResult(); // { id, type: 'cookie' | 'button', ... }
        setPendingResult(result);
    };

    const handleOpeningDone = () => {
        navigate(`/result/${pendingResult.id}`, { state: pendingResult });
    };

    return (
        <section className="main">
            <p className="title">어떤 쿠키통이 마음에 드나요?</p>
            <Jar selected={selected} onSelect={setSelected} />
            <div className="bottom_fix">
                <Button
                    type="primary"
                    text="뚜껑열기"
                    onClick={handleOpenLid}
                    disabled={selected === null}
                />
            </div>

            {pendingResult && (
                <OpeningModal
                    tinId={selected}
                    onDone={handleOpeningDone}
                />
            )}
        </section>
    );
};

export default Home;