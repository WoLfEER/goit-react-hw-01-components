import PropTypes from 'prop-types';
import s from '../Statistics/Statistic.module.css';

export default function Statistics({ stats, title }) {
  return (
    <section className={s.statsSection}>
      {title && <h2 className={s.statsName}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(item => (
          <li
            style={{ backgroundColor: randomColor() }}
            key={item.id}
            className={s.statsItem}
          >
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

function randomColor() {
  return `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, 0)}`;
}
