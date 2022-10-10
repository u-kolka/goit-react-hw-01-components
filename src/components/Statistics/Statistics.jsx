import PropTypes from 'prop-types'; 
import css from "./Statistics.module.css";


export const Statistics = ({ title, stats }) => {
    return (
    <section className={css.statistics}>
        <div className={css.stats_box}>
        {title && <h2 className={css.title}>{title}</h2>}   
        <ul className={css.stat_list}>
            {stats.map(elem =>
                <li key={elem.id} className={css.item}>
                    <span className="label">{elem.label}</span>
                    <span className="percentage">{elem.percentage}</span>
                </li>
            )}
        </ul>
        </div>
</section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
    ),
}