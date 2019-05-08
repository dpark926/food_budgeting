export const numWithCommas = num => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatMoney = num => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const changePercent = (current, prev) => {
  if (current === 0 || prev === 0) {
    return 0;
  }
  return (Math.round(((current - prev) / prev) * 10000) / 100).toFixed(2);
};

export const getLocalDate = () => {
  var local = new Date();
  local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
};
