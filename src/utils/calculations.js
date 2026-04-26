export const calculateTotals = (packages) => {
  if (!Array.isArray(packages)) return { totalPackages: 0, totalWeight: 0, totalValue: 0 };
  
  const totalPackages = packages.length;
  const totalWeight = packages.reduce((sum, pkg) => {
    const w = parseFloat(pkg.weight);
    return sum + (isNaN(w) ? 0 : w);
  }, 0);
  
  const totalValue = packages.reduce((sum, pkg) => {
    const v = parseFloat(pkg.value);
    return sum + (isNaN(v) ? 0 : v);
  }, 0);

  return {
    totalPackages,
    totalWeight,
    totalValue,
  };
};
