import React from 'react';
import styles from './Form.module.css';

const ConsignorForm = ({ state, handleChange }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>📤 Sender Details (Consignor)</h2>
      
      <div className={styles.formGroup}>
        <label className={`${styles.label} ${styles.labelRequired}`}>Full Name / Company</label>
        <input 
          type="text" 
          name="consignor.name"
          className={`${styles.input} ${!state.consignor.name ? styles.inputError : ''}`} 
          value={state.consignor.name}
          onChange={handleChange}
          placeholder="e.g. Acme Corp"
        />
      </div>

      <div className={styles.formGroup}>
        <label className={`${styles.label} ${styles.labelRequired}`}>Address</label>
        <input 
          type="text" 
          name="consignor.address"
          className={`${styles.input} ${!state.consignor.address ? styles.inputError : ''}`} 
          value={state.consignor.address}
          onChange={handleChange}
          placeholder="Street address, building, floor"
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={`${styles.label} ${styles.labelRequired}`}>City</label>
          <input 
            type="text" 
            name="consignor.city"
            className={`${styles.input} ${!state.consignor.city ? styles.inputError : ''}`} 
            value={state.consignor.city}
            onChange={handleChange}
            placeholder="City"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={`${styles.label} ${styles.labelRequired}`}>Pincode</label>
          <input 
            type="text" 
            name="consignor.pincode"
            className={`${styles.input} ${!state.consignor.pincode ? styles.inputError : ''}`} 
            value={state.consignor.pincode}
            onChange={handleChange}
            placeholder="Pincode"
          />
        </div>
      </div>
    </div>
  );
};

export default ConsignorForm;
