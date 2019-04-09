// tslint:disable: no-unused-expression
import { expect } from 'chai';
import { printToday } from '../src/main';

describe('main.ts', () => {
  it('should return the current date string', () => {
    expect(printToday()).not.be.null;
  });
});
