import { useEffect, useRef } from "react";
import jar from "../data/jar.json"
import gsap from "gsap";
import "./style/openingModal.css"
const OpeningModal = ({ tinId, onDone }) => {
    const modalRef = useRef(null);
    const badgeRef = useRef(null);
    const selectJar = jar.jar[tinId].out

    useEffect(() => {
        const tl = gsap.timeline({ onComplete: onDone });

        tl.fromTo(
            modalRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.2 }
        )
            // 두구두구: 미세하게 흔들림
            .to(badgeRef.current, {
                y: -4,
                rotation: 2,
                duration: 0.12,
                repeat: 7,
                yoyo: true,
                ease: "power1.inOut",
            })
            // 흔들림 잦아들며 살짝 부풀었다 정지 (곧 나온다는 예고)
            .to(badgeRef.current, {
                scale: 1.06,
                duration: 0.15,
                ease: "power2.out",
            })
            .to(badgeRef.current, {
                scale: 1,
                duration: 0.2,
                ease: "power2.in",
            })
            .to({}, { duration: 0.25 }); // 결과 페이지 넘어가기 전 여운

        return () => tl.kill();
    }, [onDone]);

    return (
        <div className="opening_modal" ref={modalRef}>
            <div className="opening_modal__backdrop" />
            <div className="opening_modal__content">
                <img
                    ref={badgeRef}
                    className="opening_modal__badge"
                    src={selectJar}
                    alt=""
                />
                <p className="opening_modal__text">쿠키통 여는 중...</p>
            </div>
        </div>
    );
};

export default OpeningModal;
