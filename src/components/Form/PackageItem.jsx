import React from 'react';
import styles from './Form.module.css';

const PackageItem = ({ pkg, index, handlePackageChange, removePackage, canRemove }) => {
  return (
    <div className={styles.packageItem}>
      <div className={styles.packageHeader}>
        <span>Package {index + 1}</span>
        <button 
          type="button" 
          className={`${styles.btn} ${styles.btnDanger}`}
          onClick={() => removePackage(pkg.id)}
          disabled={!canRemove}
          title={!canRemove ? "Minimum 1 package required" : "Remove package"}
        >
          Remove
        </button>
      </div>

      <div className={styles.formGroup}>
        <label className={`${styles.label} ${styles.labelRequired}`}>Package Name / Label</label>
        <input 
          type="text" 
          className={`${styles.input} ${!pkg.name ? styles.inputError : ''}`} 
          value={pkg.name}
          onChange={(e) => handlePackageChange(pkg.id, 'name', e.target.value)}
          placeholder="e.g. Electronics, Documents"
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={`${styles.label} ${styles.labelRequired}`}>Weight (kg)</label>
          <input 
            type="number" 
            className={`${styles.input} ${!pkg.weight ? styles.inputError : ''}`} 
            value={pkg.weight}
            onChange={(e) => handlePackageChange(pkg.id, 'weight', e.target.value)}
            min="0"
            step="0.1"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={`${styles.label} ${styles.labelRequired}`}>Value (₹)</label>
          <input 
            type="number" 
            className={`${styles.input} ${!pkg.value ? styles.inputError : ''}`} 
            value={pkg.value}
            onChange={(e) => handlePackageChange(pkg.id, 'value', e.target.value)}
            min="0"
          />
        </div>
      </div>

      <div className={styles.packageDimensions}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Length (cm)</label>
          <input 
            type="number" 
            className={styles.input} 
            value={pkg.length}
            onChange={(e) => handlePackageChange(pkg.id, 'length', e.target.value)}
            min="0"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Width (cm)</label>
          <input 
            type="number" 
            className={styles.input} 
            value={pkg.width}
            onChange={(e) => handlePackageChange(pkg.id, 'width', e.target.value)}
            min="0"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Height (cm)</label>
          <input 
            type="number" 
            className={styles.input} 
            value={pkg.height}
            onChange={(e) => handlePackageChange(pkg.id, 'height', e.target.value)}
            min="0"
          />
        </div>
      </div>
    </div>
  );
};

export default PackageItem;
