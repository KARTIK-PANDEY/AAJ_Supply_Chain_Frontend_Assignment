"use client";

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import { generateOrderId } from '../utils/generateOrderId';
import { calculateTotals } from '../utils/calculations';

import ShipmentDetails from '../components/Form/ShipmentDetails';
import ConsignorForm from '../components/Form/ConsignorForm';
import ConsigneeForm from '../components/Form/ConsigneeForm';
import PackageList from '../components/Form/PackageList';
import AdditionalOptions from '../components/Form/AdditionalOptions';

import PreviewHeader from '../components/Preview/PreviewHeader';
import PreviewSenderReceiver from '../components/Preview/PreviewSenderReceiver';
import PreviewPackages from '../components/Preview/PreviewPackages';
import PreviewSummary from '../components/Preview/PreviewSummary';

export default function Home() {
  const [state, setState] = useState({
    orderId: '',
    shipmentDate: new Date().toISOString().split('T')[0],
    deliveryType: 'Standard',
    consignor: { name: '', address: '', city: '', pincode: '' },
    consignee: { name: '', address: '', city: '', pincode: '' },
    packages: [
      { id: 1, name: '', weight: '', length: '', width: '', height: '', value: '' }
    ],
    fragile: false,
    insured: false
  });

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setState(prev => ({ ...prev, orderId: generateOrderId() }));
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.includes('.')) {
      const [section, field] = name.split('.');
      setState(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    } else {
      setState(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handlePackageChange = (id, field, value) => {
    setState(prev => ({
      ...prev,
      packages: prev.packages.map(pkg =>
        pkg.id === id ? { ...pkg, [field]: value } : pkg
      )
    }));
  };

  const addPackage = () => {
    setState(prev => ({
      ...prev,
      packages: [
        ...prev.packages,
        { id: Date.now(), name: '', weight: '', length: '', width: '', height: '', value: '' }
      ]
    }));
  };

  const removePackage = (id) => {
    if (state.packages.length <= 1) return;
    setState(prev => ({
      ...prev,
      packages: prev.packages.filter(pkg => pkg.id !== id)
    }));
  };

  const totals = calculateTotals(state.packages);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className="animate-fade-in">AAJ Supply Chain Pvt. Ltd.</h1>
          <p className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Create and manage your logistics shipments with live preview.
          </p>
        </div>
        <button
          onClick={toggleTheme}
          className={`${styles.btn} ${styles.themeToggleBtn} animate-fade-in`}
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </header>

      <main className={styles.mainLayout}>
        <div className={styles.formColumn}>
          <form onSubmit={(e) => e.preventDefault()} className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <ShipmentDetails state={state} handleChange={handleChange} />
            <ConsignorForm state={state} handleChange={handleChange} />
            <ConsigneeForm state={state} handleChange={handleChange} />
            <PackageList
              packages={state.packages}
              handlePackageChange={handlePackageChange}
              addPackage={addPackage}
              removePackage={removePackage}
            />
            <AdditionalOptions state={state} handleChange={handleChange} />

            <button
              type="submit"
              className={`${styles.btn} ${styles.btnPrimary} ${styles.submitBtn}`}
              onClick={() => alert('Order Created Successfully! Thank You')}
            >
              Confirm & Create Order
            </button>
          </form>
        </div>

        <div className={styles.previewColumn}>
          <div className={`${styles.previewCard} animate-fade-in`} style={{ animationDelay: '0.3s' }}>
            <PreviewHeader
              orderId={state.orderId}
              shipmentDate={state.shipmentDate}
              deliveryType={state.deliveryType}
              fragile={state.fragile}
              insured={state.insured}
            />
            <div className={styles.previewBody}>
              <PreviewSenderReceiver
                consignor={state.consignor}
                consignee={state.consignee}
              />
              <PreviewPackages packages={state.packages} />
            </div>
            <PreviewSummary totals={totals} />
          </div>
        </div>
      </main>
    </div>
  );
}
