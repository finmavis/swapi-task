import { formatDate } from './format-date';

describe('Format Date helpers', () => {
  it('Should print correct format', () => {
    expect(formatDate('2010-05-10')).toBe('May 10, 2010');
    expect(formatDate('2020-1-20')).toBe('January 20, 2020');
    expect(formatDate('1996-12-09')).toBe('December 09, 1996');
    expect(formatDate('3030-9-9')).toBe('September 9, 3030');
  });

  it('Should throw error if called with no parameter', () => {
    expect(() => {
      // @ts-expect-error
      formatDate();
    }).toThrow(/missing required parameter/i);
  });

  it('Should throw error if called with wrong format', () => {
    expect(() => {
      formatDate('2010');
    }).toThrow(/yyyy-mm-dd/i);
    expect(() => {
      formatDate('10');
    }).toThrow(/yyyy-mm-dd/i);
    expect(() => {
      formatDate('2010-09');
    }).toThrow(/yyyy-mm-dd/i);
    expect(() => {
      formatDate('2010-00-31');
    }).toThrow(/yyyy-mm-dd/i);
    expect(() => {
      formatDate('2010-20-31');
    }).toThrow(/yyyy-mm-dd/i);
    expect(() => {
      formatDate('10-02-31');
    }).toThrow(/yyyy-mm-dd/i);
  });
});
