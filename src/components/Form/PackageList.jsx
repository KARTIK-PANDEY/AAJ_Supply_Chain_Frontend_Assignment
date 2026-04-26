import React from 'react';
import styles from './Form.module.css';
import PackageItem from './PackageItem';

const PackageList = ({ packages, handlePackageChange, addPackage, removePackage }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>📦 Package Information</h2>
      
      {packages.map((pkg, index) => (
        <PackageItem 
          key={pkg.id} 
          pkg={pkg} 
          index={index}
          handlePackageChange={handlePackageChange}
          removePackage={removePackage}
          canRemove={packages.length > 1}
        />
      ))}

      <button type="button" className={`${styles.btn} ${styles.btnSecondary}`} onClick={addPackage}>
        + Add Another Package
      </button>
    </div>
  );
};

export default PackageList;
