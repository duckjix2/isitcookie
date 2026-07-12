import "./style/badge.css";

const BADGE_CONFIG = {
    cookies: { label: "🍪 쿠키가 나왔어요!", className: "badge--cookie" },
    sewing_tools: { label: "이런! 쿠키가 아니였어요!", className: "badge--sewing" },
};

const Badge = ({ type }) => {
    const config = BADGE_CONFIG[type];
    if (!config) return null;

    return <div className={`badge ${config.className}`}>{config.label}</div>;
}

export default Badge