import React from 'react';
import styles from './Form.module.css';

const AdditionalOptions = ({ state, handleChange }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>⚙️ Additional Options</h2>
      
      <label className={`${styles.checkboxItem} ${state.fragile ? styles.active : ''}`}>
        <input 
          type="checkbox" 
          name="fragile"
          className={styles.checkboxInput}
          checked={state.fragile}
          onChange={handleChange}
        />
        <div className={styles.checkboxContent}>
          <span className={styles.checkboxLabel}>Fragile Shipment</span>
          <span className={styles.checkboxDescription}>Handle with care, requires special packaging.</span>
        </div>
      </label>

      <label className={`${styles.checkboxItem} ${state.insured ? styles.active : ''}`}>
        <input 
          type="checkbox" 
          name="insured"
          className={styles.checkboxInput}
          checked={state.insured}
          onChange={handleChange}
        />
        <div className={styles.checkboxContent}>
          <span className={styles.checkboxLabel}>Insurance Required</span>
          <span className={styles.checkboxDescription}>Protect your shipment against loss or damage.</span>
        </div>
      </label>
    </div>
  );
};

export default AdditionalOptions;
