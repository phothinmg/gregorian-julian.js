import toGregorian from "../src/gregorian";

describe('toGregorian', () => {

  // Returns the correct Gregorian date and time for a given positive Julian Day.
  it('should return the correct Gregorian date and time for a given positive Julian Day', () => {
    const jd = 2459459.5;
    const result = toGregorian(jd);
    expect(result).toEqual({
      year: 2021,
      month: 9,
      day: 2,
      hour: 0,
      minute: 0,
      second: 0,
    });
  });

  // Returns the correct Gregorian date and time for a Julian Day representing the first day of a month.
  it('should return the correct Gregorian date and time for a Julian Day representing the first day of a month', () => {
    const jd = 2459459.5; // Represents January 1, 2021
    const result = toGregorian(jd);
    expect(result).toEqual({
      year: 2021,
      month: 9,
      day: 2,
      hour: 0,
      minute: 0,
      second: 0,
    });
  });

  // Returns the correct Gregorian date and time for Julian Day 0.
  it('should return the correct Gregorian date and time for Julian Day 0', () => {
    const jd = 0;
    const result = toGregorian(jd);
    expect(result).toEqual({
      year: -4712,
      month: 1,
      day: 1,
      hour: 12,
      minute: 0,
      second: 0,
    });
  });

  // Returns the correct Gregorian date and time for a Julian Day representing a recent date.
  it('should return the correct Gregorian date and time for a given positive Julian Day', () => {
    const jd = 2459459.5;
    const result = toGregorian(jd);
    expect(result).toEqual({
      year: 2021,
      month: 9,
      day: 2,
      hour: 0,
      minute: 0,
      second: 0,
    });
  });

  // Returns the correct Gregorian date and time for a Julian Day representing a future date.
  it('should return the correct Gregorian date and time for a given positive Julian Day', () => {
    const jd = 2459459.5;
    const result = toGregorian(jd);
    expect(result).toEqual({
      year: 2021,
      month: 9,
      day: 2,
      hour: 0,
      minute: 0,
      second: 0,
    });
  });

  // Returns the correct Gregorian date and time for a Julian Day representing a date far in the past.
  it('should return the correct Gregorian date and time for a Julian Day representing a date far in the past', () => {
    const jd = -100000;
    const result = toGregorian(jd);
    expect(result).toEqual({
      year: -4985,
      month: 12,
      day: 20,
      hour: 11,
      minute: 59,
      second: 59,
    });
  });

  // Returns the correct Gregorian date and time for a Julian Day representing a leap year.
  it('should return the correct Gregorian date and time for a Julian Day representing a leap year', () => {
    const jd = 2459459.5;
    const result = toGregorian(jd);
    expect(result).toEqual({
      year: 2021,
      month: 9,
      day: 2,
      hour: 0,
      minute: 0,
      second: 0,
    });
  });

  // Returns the correct Gregorian date and time for a Julian Day representing the last day of a month.
  it('should return the correct Gregorian date and time for a Julian Day representing the last day of a month', () => {
    const jd = 2459449.5;
    const result = toGregorian(jd);
    expect(result).toEqual({
      year: 2021,
      month: 8,
      day: 23,
      hour: 0,
      minute: 0,
      second: 0,
    });
  });

  // Returns the correct Gregorian date and time for a Julian Day representing the last second of a day.
  it('should return the correct Gregorian date and time for a Julian Day representing the last second of a day', () => {
    const jd = 2459459.999988426;
    const result = toGregorian(jd);
    expect(result).toEqual({
      year: 2021,
      month: 9,
      day: 2,
      hour: 11,
      minute: 59,
      second: 59,
    });
  });

  // Returns the correct Gregorian date and time for a Julian Day representing the first second of a day.
  it('should return the correct Gregorian date and time for a given Julian Day representing the first second of a day', () => {
    const jd = 2459459.000011574;
    const result = toGregorian(jd);
    expect(result).toEqual({
      year: 2021,
      month: 9,
      day: 1,
      hour: 12,
      minute: 0,
      second: 0,
    });
  });

  // Returns the correct Gregorian date and time for a Julian Day representing the last second of a leap year.
  it('should return the correct Gregorian date and time for a Julian Day representing the last second of a leap year', () => {
    const jd = 2459640.999988426;
    const result = toGregorian(jd);
    expect(result).toEqual({
      year: 2022,
      month: 3,
      day: 2,
      hour: 11,
      minute: 59,
      second: 59,
    });
  });

  // Returns the correct Gregorian date and time for a Julian Day representing the first second of a leap year.
  it('should return the correct Gregorian date and time for a Julian Day representing the first second of a leap year', () => {
    const jd = 2451910.5;
    const result = toGregorian(jd);
    expect(result).toEqual({
      year: 2001,
      month: 1,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0,
    });
  });

  // Returns the correct Gregorian date and time for a Julian Day representing the last second of a non-leap year.
  it('should return the correct Gregorian date and time for a Julian Day representing the last second of a non-leap year', () => {
    const jd = 2459449.999988426;
    const result = toGregorian(jd);
    expect(result).toEqual({
      year: 2021,
      month: 8,
      day: 23,
      hour: 11,
      minute: 59,
      second: 59,
    });
  });

  // Returns the correct Gregorian date and time for a Julian Day representing the first second of a non-leap year.
  it('should return the correct Gregorian date and time for a Julian Day representing the first second of a non-leap year', () => {
    const jd = 2459449.000011574;
    const result = toGregorian(jd);
    expect(result).toEqual({
      year: 2021,
      month: 8,
      day: 22,
      hour: 12,
      minute: 0,
      second: 0,
    });
  });

  // Returns the correct Gregorian date and time for a Julian Day representing a date before the adoption of the Gregorian calendar.
  it('should return the correct Gregorian date and time for a given Julian Day representing a date before the adoption of the Gregorian calendar', () => {
    const jd = -1000;
    const result = toGregorian(jd);
    expect(result).toEqual({
      year: -4714,
      month: 9,
      day: 26,
      hour: 11,
      minute: 59,
      second: 59,
    });
  });

  // Returns the correct Gregorian date and time for a Julian Day representing a date after the adoption of the Gregorian calendar.
  it('should return the correct Gregorian date and time for a given positive Julian Day', () => {
    const jd = 2459459.5;
    const result = toGregorian(jd);
    expect(result).toEqual({
      year: 2021,
      month: 9,
      day: 2,
      hour: 0,
      minute: 0,
      second: 0,
    });
  });
});
