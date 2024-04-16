/**
 * Converts a decimal number representing a fraction of a day into hours, minutes, and seconds.
 * @param d - The decimal number representing a fraction of a day.
 * @returns An object with properties `hour`, `minute`, and `second` representing the converted time.
 */
const f2hms = (d: number) => {
  if (d < 1 && d >= 0) {
    const totalSeconds = d * 86400;
    const adjustedSeconds =
      d >= 0.5 ? totalSeconds - 43200 : totalSeconds + 43200;

    const hour = Math.floor(adjustedSeconds / 3600);
    const minute = Math.floor((adjustedSeconds % 3600) / 60);
    const second = Math.floor(adjustedSeconds % 60);

    return {
      hour,
      minute,
      second,
    };
  } else {
    const hour = NaN;
    const minute = NaN;
    const second = NaN;
    return {
        hour,
        minute,
        second,
      };
  }
};

export default f2hms;
