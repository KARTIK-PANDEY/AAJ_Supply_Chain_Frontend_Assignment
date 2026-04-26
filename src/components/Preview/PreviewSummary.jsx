import React, { useEffect, useState } from 'react';
import styles from './Preview.module.css';

const PreviewSummary = ({ totals }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 300);
    return () => clearTimeout(timeout);
  }, [totals]);

  return (
    <div className={styles.summarySection}>
      <div className={styles.summaryTitle}>Shipment Summary</div>
      <div className={styles.summaryGrid}>
        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>Pkgs</div>
          <div className={`${styles.summaryValue} ${styles.valueTransition} ${animate ? styles.highlight : ''}`}>
            {totals.totalPackages}
          </div>
        </div>
        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>Total Weight</div>
          <div className={`${styles.summaryValue} ${styles.valueTransition} ${animate ? styles.highlight : ''}`}>
            {totals.totalWeight.toFixed(2)} kg
          </div>
        </div>
        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>Total Value</div>
          <div className={`${styles.summaryValue} ${styles.valueTransition} ${animate ? styles.highlight : ''}`}>
            ₹ {totals.totalValue.toLocaleString('en-IN')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewSummary;
