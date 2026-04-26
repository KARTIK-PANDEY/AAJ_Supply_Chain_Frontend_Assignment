import React from 'react';
import styles from './Form.module.css';

const ShipmentDetails = ({ state, handleChange }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>📦 Shipment Details</h2>
      
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={`${styles.label} ${styles.labelRequired}`}>Order ID</label>
          <input 
            type="text" 
            className={styles.input} 
            value={state.orderId} 
            readOnly 
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={`${styles.label} ${styles.labelRequired}`}>Shipment Date</label>
          <input 
            type="date" 
            name="shipmentDate"
            className={`${styles.input} ${!state.shipmentDate ? styles.inputError : ''}`} 
            value={state.shipmentDate}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={`${styles.label} ${styles.labelRequired}`}>Delivery Type</label>
        <select 
          name="deliveryType"
          className={styles.select}
          value={state.deliveryType}
          onChange={handleChange}
        >
          <option value="Standard">Standard Delivery</option>
          <option value="Express">Express Delivery</option>
        </select>
      </div>
    </div>
  );
};

export default ShipmentDetails;
