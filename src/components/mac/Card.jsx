import { FaPlus } from "react-icons/fa";
import styles from "./card.module.scss";

function Card({ label, title, imgUrl, color }) {
    return (
        <div className={styles.card} style={{ backgroundImage: `url(${imgUrl})` }}>
            <div className={styles[`card__title-box`]}>
                <span className={styles[`card__title-box__label`]} style={{ color: color }}>
                    {label}
                </span>
                <span className={styles[`card__title-box__title`]} style={{ color: color }}>
                    {title}
                </span>
            </div>
            <button className={styles.card__btn}>
                <FaPlus size={18} style={{ color: "#ffffff" }} />
            </button>
        </div>
    );
}

export default Card;
