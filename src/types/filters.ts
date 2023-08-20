import type { OperationStatus, OperationType } from '.';

export type OperationPeriodFilter = 'all' | 'day' | 'week' | 'month';
export type OperationTypeFilter = 'all' | OperationType;
export type OperationStatusFilter = 'all' | OperationStatus;
