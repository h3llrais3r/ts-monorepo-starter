import { expect } from 'chai';
import { formatDate } from '../../src/utils/date-formatter';

describe('date-formatter.ts', () => {
  it('formatDate() should format a date string', () => {
    expect(formatDate('2019-01-01')).to.equal('01/01/2019');
  });

  it('formatDate() should format a date object', () => {
    const date = new Date('2019-01-01');
    expect(formatDate('2019-01-01')).to.equal('01/01/2019');
  });
});
