import React from 'react';
import styles from './Preview.module.css';

const PreviewPackages = ({ packages }) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Package Details</h3>
      <div className={styles.packageList}>
        {packages.map((pkg, index) => (
          <div key={pkg.id || index} className={styles.packageItem}>
            <div className={styles.packageIndex}>{index + 1}</div>
            <div className={styles.packageContent}>
              <div className={styles.packageInfo}>
                <div className={styles.packageName}>
                  {pkg.name || <span style={{ opacity: 0.5, fontStyle: 'italic' }}>Unnamed Package</span>}
                </div>
                <div className={styles.packageDimensions}>
                  {pkg.length || 0} × {pkg.width || 0} × {pkg.height || 0} cm
                </div>
              </div>
              <div className={styles.packageStats}>
                <div className={styles.packageWeight}>
                  {pkg.weight || 0} kg
                </div>
                <div className={styles.packageValue}>
                  ₹ {pkg.value || 0}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewPackages;
