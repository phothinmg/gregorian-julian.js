import f2hms from "../f2hms";
const ifpos = (jdd: number) => {
  const j = Math.floor(jdd);
  const jdn = Math.round(jdd);
  const fjdn = jdd - j;

  const a = 4 * jdn - 6884477;
  const x3 = Math.floor(a / 146097);
  const r3 = a % 146097;

  const b = 100 * Math.floor(r3 / 4) + 99;
  const x2 = Math.floor(b / 36525);
  const r2 = b % 36525;

  const c = 5 * Math.floor(r2 / 100) + 2;
  const x1 = Math.floor(c / 153);
  const r1 = c % 153;

  const cc = Math.floor((x1 + 2) / 12);
  const year = 100 * x3 + x2 + cc;
  const month = x1 - 12 * cc + 3;
  const day = Math.floor(r1 / 5) + 1;

  // Fraction of jd to hour, minute, second
  const hour = f2hms(fjdn).hour;
  const minute = f2hms(fjdn).minute;
  const second = f2hms(fjdn).second;
  return {
    year,
    month,
    day,
    hour,
    minute,
    second,
  };
};

export default ifpos;
