import React from 'react';
import styles from './Preview.module.css';

const PreviewHeader = ({ orderId, shipmentDate, deliveryType, fragile, insured }) => {
  return (
    <div className={styles.previewHeader}>
      <div className={styles.orderIdWrapper}>
        <div className={styles.orderIdLabel}>Shipment Order</div>
        <div className={styles.orderId}>{orderId || 'ORD-XXXXX'}</div>
        <div className={styles.shipmentDate}>
          {shipmentDate ? new Date(shipmentDate).toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: 'numeric'
          }) : 'Date not selected'}
        </div>
      </div>
      <div className={styles.badges}>
        <span className={`${styles.badge} ${deliveryType === 'Express' ? styles.badgeExpress : styles.badgeDelivery}`}>
          {deliveryType}
        </span>
        {fragile && (
          <span className={`${styles.badge} ${styles.badgeFragile}`}>
            Fragile
          </span>
        )}
        {insured && (
          <span className={`${styles.badge} ${styles.badgeInsured}`}>
            Insured
          </span>
        )}
      </div>
    </div>
  );
};

export default PreviewHeader;
