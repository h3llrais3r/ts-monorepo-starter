import { formatDate } from '@org/common';

export function printToday(): string {
  return formatDate(new Date());
}
