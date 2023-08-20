export const formatNumber = new Intl.NumberFormat('ru', { minimumFractionDigits: 2 }).format;

export const formatDate = new Intl.DateTimeFormat('ru', {
  dateStyle: 'short',
  timeStyle: 'short',
}).format;
