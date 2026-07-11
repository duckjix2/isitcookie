import "./style/jar.css"
import { jar } from "../data/jar.json";

const Jar = ({ selected, onSelect }) => {

    const jars = jar

    return <div className="jarList">
        {jars.map((jar, index) => (
        <div
            className={`jarItem${selected === index ? ' active' : ''}`}
            key={index}
            onClick={() => onSelect(index)}
        >
            <div className="jarItem_out">
                <img src={jar.out} alt="" />
            </div>
            <div className="jarItem_in">
                <img src={jar.in} alt="" />
            </div>
        </div>
      ))}
    </div>
}



export default Jar