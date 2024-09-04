import type { NextPage } from "next";
import PropTypes from 'prop-types';  // <-- Import PropTypes
import styles from "../styles/TopCard.module.css";

const TopCard = ({ className = "" }) => {
  return (
    <div className={[styles.topCard, className].join(" ")}>
      <div className={styles.content}>
        <img
          className={styles.contentChild}
          loading="lazy"
          alt=""
          src="/group-861.svg"
        />
        <div className={styles.categories}>
          <div className={styles.parent}>
            <a className={styles.a}>Learning</a>
            <div className={styles.div}>Category В</div>
          </div>
        </div>
        <div className={styles.progressIndicator}>
          <img
            className={styles.filledChevronCircleRight}
            loading="lazy"
            alt=""
            src="/4--filled--chevroncircleright.svg"
          />
        </div>
      </div>
      <div className={styles.questionsOutOf730PassedParent}>
        <div className={styles.questionsOutOf}>
          112 questions out of 730 passed
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressSteps} />
          <div className={styles.progressSteps1} />
          <div className={styles.progressSteps2} />
          <div className={styles.progressSteps3} />
          <div className={styles.progressSteps4} />
          <div className={styles.progressSteps5} />
          <div className={styles.progressSteps6} />
        </div>
      </div>
    </div>
  );
};

TopCard.propTypes = {
  className: PropTypes.string,
};

export default TopCard;
