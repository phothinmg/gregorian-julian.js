import f2hms from "../src/f2hms";

describe('f2hms', () => {

  // Returns an object with hour, minute, and second properties when passed a decimal number between 0 and 1
  it('should return an object with hour, minute, and second properties when passed a decimal number between 0 and 1', () => {
    const result = f2hms(0.5);
    expect(result).toHaveProperty('hour');
    expect(result).toHaveProperty('minute');
    expect(result).toHaveProperty('second');
  });

  // Returns NaN values for hour, minute, and second properties when passed NaN as input
  it('should return NaN values for hour, minute, and second properties when passed NaN as input', () => {
    const result = f2hms(NaN);
    expect(result.hour).toBeNaN();
    expect(result.minute).toBeNaN();
    expect(result.second).toBeNaN();
  });

  // Calculates the correct hour, minute, and second values for input values that correspond to a time of day
  it('should return an object with hour, minute, and second properties when passed a decimal number between 0 and 1', () => {
    const result = f2hms(0.5);
    expect(result).toHaveProperty('hour');
    expect(result).toHaveProperty('minute');
    expect(result).toHaveProperty('second');
  });

  // Returns NaN values for hour, minute, and second properties when passed a number outside the range of 0 to 1
  it('should return NaN values for hour, minute, and second properties when passed a number outside the range of 0 to 1', () => {
    const result = f2hms(1.5);
    expect(result.hour).toBe(NaN);
    expect(result.minute).toBe(NaN);
    expect(result.second).toBe(NaN);
  });

  // Returns an object with hour, minute, and second properties when passed a number that is not a whole number as input
  it('should return an object with hour, minute, and second properties when passed a decimal number between 0 and 1', () => {
    const result = f2hms(0.5);
    expect(result).toHaveProperty('hour');
    expect(result).toHaveProperty('minute');
    expect(result).toHaveProperty('second');
  });
});
