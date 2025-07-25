import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WatchCard = ({ title, desc, img }) => {
    return (
        <motion.div
            className="watch-card"
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <img src={img} alt={title} className="watch-img" />
            <div className="watch-overlay">
                <h4>{title}</h4>
                <p>{desc}</p>
                <Link to={'/product/watches'}>
                    <button>Explore</button>
                </Link>
            </div>
        </motion.div>
    );
};

export default WatchCard;
