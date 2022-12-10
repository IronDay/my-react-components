import "../Styles/Caroussel.css";

export default function Caroussel() {
    return (
        <div className="caroussel">
            <div className="main-part">
                <button className="prevBtn">Prev</button>
                <div className="image"></div>
                <button className="nextBtn">Next</button>
            </div>
            <div className="dot"></div>
        </div>
    )
}