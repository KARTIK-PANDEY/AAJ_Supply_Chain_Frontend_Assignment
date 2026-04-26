import React from 'react';
import styles from './Preview.module.css';

const PreviewSenderReceiver = ({ consignor, consignee }) => {
  const isConsignorEmpty = !consignor.name && !consignor.address && !consignor.city && !consignor.pincode;
  const isConsigneeEmpty = !consignee.name && !consignee.address && !consignee.city && !consignee.pincode;

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Routing Details</h3>
      <div className={styles.addressGrid}>
        <div className={`${styles.addressCard} ${styles.consignor}`}>
          <div className={styles.addressRole}>From (Consignor)</div>
          {isConsignorEmpty ? (
            <div className={styles.addressText} style={{ opacity: 0.5, fontStyle: 'italic' }}>Pending sender details...</div>
          ) : (
            <>
              <div className={styles.addressName}>{consignor.name || 'Name not provided'}</div>
              <div className={styles.addressText}>
                {consignor.address && <div>{consignor.address}</div>}
                {(consignor.city || consignor.pincode) && (
                  <div>{consignor.city} {consignor.pincode}</div>
                )}
              </div>
            </>
          )}
        </div>

        <div className={`${styles.addressCard} ${styles.consignee}`}>
          <div className={styles.addressRole}>To (Consignee)</div>
          {isConsigneeEmpty ? (
            <div className={styles.addressText} style={{ opacity: 0.5, fontStyle: 'italic' }}>Pending receiver details...</div>
          ) : (
            <>
              <div className={styles.addressName}>{consignee.name || 'Name not provided'}</div>
              <div className={styles.addressText}>
                {consignee.address && <div>{consignee.address}</div>}
                {(consignee.city || consignee.pincode) && (
                  <div>{consignee.city} {consignee.pincode}</div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewSenderReceiver;
