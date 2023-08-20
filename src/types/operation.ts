export type OperationType = 'replenishment' | 'withdrawal' | 'refund' | 'fulfillment-income';
export type OperationStatus = 'fulfilled' | 'rejected' | 'waiting';

export interface Operation {
  id: number;
  date: number;
  type: OperationType;
  status: OperationStatus;
  amount: number;
}
