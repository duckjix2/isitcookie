import allResults from "../data/result.json";

const BUTTON_PROBABILITY = 0.25; // 20~30% 사이, 테스트하며 조정

export const getRandomResult = () => {
    const isButton = Math.random() < BUTTON_PROBABILITY;
    const type = isButton ? allResults.cookies : allResults.sewing_tools;

    
    // 해당 타입 안에서만 후보 추려서 그중 하나 랜덤 선택
    const randomIndex = Math.floor(Math.random() * type.length);
    
    return type[randomIndex];
};