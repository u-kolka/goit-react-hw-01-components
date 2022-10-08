import PropTypes from 'prop-types'; 

export const Statistics = ({ title, stats }) => {
    return (
    <section className="statistics">
        <h2 className="title">{title}</h2>
        <ul className="stat-list">
        {stats.map(elem => 
            <li key={elem.id} className="item">
                <span className="label">{elem.label}</span>
                <span className="percentage">{elem.percentage}</span>
            </li>)}
        </ul>
</section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object),
}