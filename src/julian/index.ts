
/**
 * Calculates the Julian Day (JD) for a given date.
 * ---
 * 
 * @param year - The year of the date.
 * @param month - The month of the date.
 * @param day - The day of the date.
 * @returns The calculated Julian Day for the given date.
 * 
 * @example
 * 
 * const julianDay = toJD(2022, 10, 15);
   console.log(julianDay); // Output: 2459867.5
 */
export default function toJD(year: number, month: number, day: number): number {
  const isInt = (n: number)=>{
    return n % 1 === 0;
  }
  const a = isInt(year);
  const b = isInt(month);
  const c = isInt(day);
  const d = Math.abs(month) < 13;
  const e = Math.abs(day) < 32
  if ( a && b && c && d && e) {
    const a = Math.floor((month - 3) / 12);
    const x4 = year + a;
    const x3 = Math.floor(x4 / 100);
    const x2 = x4 % 100;
    const x1 = month - 12 * a - 3;
    const jd =
      Math.floor((146097 * x3) / 4) +
      Math.floor((36525 * x2) / 100) +
      Math.floor((153 * x1 + 2) / 5) +
      day +
      1721119 -
      0.5;
    return jd ;
  } else {
    return NaN;
  }
}
