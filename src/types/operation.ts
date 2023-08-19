import type { OperationType, OperationStatus } from '.';

export interface Operation {
  id: number;
  date: number;
  type: OperationType;
  status: OperationStatus;
  amount: number;
}
