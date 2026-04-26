import React from 'react';
import styles from './Form.module.css';

const ConsigneeForm = ({ state, handleChange }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>📥 Receiver Details (Consignee)</h2>
      
      <div className={styles.formGroup}>
        <label className={`${styles.label} ${styles.labelRequired}`}>Full Name / Company</label>
        <input 
          type="text" 
          name="consignee.name"
          className={`${styles.input} ${!state.consignee.name ? styles.inputError : ''}`} 
          value={state.consignee.name}
          onChange={handleChange}
          placeholder="e.g. Wayne Enterprises"
        />
      </div>

      <div className={styles.formGroup}>
        <label className={`${styles.label} ${styles.labelRequired}`}>Address</label>
        <input 
          type="text" 
          name="consignee.address"
          className={`${styles.input} ${!state.consignee.address ? styles.inputError : ''}`} 
          value={state.consignee.address}
          onChange={handleChange}
          placeholder="Street address, building, floor"
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={`${styles.label} ${styles.labelRequired}`}>City</label>
          <input 
            type="text" 
            name="consignee.city"
            className={`${styles.input} ${!state.consignee.city ? styles.inputError : ''}`} 
            value={state.consignee.city}
            onChange={handleChange}
            placeholder="City"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={`${styles.label} ${styles.labelRequired}`}>Pincode</label>
          <input 
            type="text" 
            name="consignee.pincode"
            className={`${styles.input} ${!state.consignee.pincode ? styles.inputError : ''}`} 
            value={state.consignee.pincode}
            onChange={handleChange}
            placeholder="Pincode"
          />
        </div>
      </div>
    </div>
  );
};

export default ConsigneeForm;
