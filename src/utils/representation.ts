export const statusRepr = () => ({
  fulfilled: 'Выполнен',
  rejected: 'Отклонено',
  waiting: 'Ожидание',
});

export const typeRepr = () => ({
  replenishment: 'Пополнение баланса',
  withdrawal: 'Вывод средств',
  refund: 'Возврат',
  'fulfillment-income': 'Выполнение заказа/входящий платеж',
});
