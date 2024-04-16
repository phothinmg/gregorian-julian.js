import f2hms from "../f2hms";
const ifnav = (jdd: number) => {
  const j = -1 * jdd;
  const jdn = Math.floor(j);
  const fjdn = j - jdn; // ****** //
  const moarray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  //-----------------------
  let y,
    zz,
    year,
    aa,
    bb,
    cc,
    dd,
    ee,
    ff,
    gg,
    hh,
    month,
    day,
    df,
    hour,
    minute,
    second;
  if (jdn >= 36500) {
    aa = jdn / 36500;
    bb = Math.floor(aa);
    y = 4712 + bb * 100;
    cc = (aa - bb) * 100;
    dd = Math.floor(cc);
    zz = cc - dd;
    year = (y + dd) * -1;
    ee = zz * 365;
    ff = Math.floor(ee);
    gg = ee - ff;
    hh = Math.floor(fjdn + gg);
    df = fjdn + gg - hh;
    hour = f2hms(df).hour;
    minute = f2hms(df).minute;
    second = f2hms(df).second;
    if ((y + dd) % 4 === 0) {
      moarray[1] = 29;
    }
    if (ff >= 31) {
      for (let i = 0; i < 11; i++) {
        if (ff > moarray[i]) {
          ff -= moarray[i];
        } else {
          break;
        }
        month = i + 2;
        if (ff + hh === 0) {
          day = ff + hh + 1;
        } else {
          day = ff + hh;
        }
      }
    } else {
      month = 1;
      if (ff + hh === 0) {
        day = ff + hh + 1;
      } else {
        day = ff + hh;
      }
    }
  } else {
    if (jdn >= 1461) {
      aa = jdn / 1461;
      bb = Math.floor(aa);
      y = 4712 + bb * 4;
      cc = (aa - bb) * 4;
      dd = Math.floor(cc);
      zz = cc - dd;
      year = (y + dd) * -1;
      ee = zz * 365;
      ff = Math.floor(ee);
      gg = ee - ff;
      hh = Math.floor(fjdn + gg);
      df = fjdn + gg - hh;
      hour = f2hms(df).hour;
      minute = f2hms(df).minute;
      second = f2hms(df).second;
      if ((y + dd) % 4 === 0) {
        moarray[1] = 29;
      }
      if (ff >= 31) {
        for (let i = 0; i < 11; i++) {
          if (ff > moarray[i]) {
            ff -= moarray[i];
          } else {
            break;
          }
          month = i + 2;
          if (ff + hh === 0) {
            day = ff + hh + 1;
          } else {
            day = ff + hh;
          }
        }
      } else {
        month = 1;
        if (ff + hh === 0) {
          day = ff + hh + 1;
        } else {
          day = ff + hh;
        }
      }
    } else {
      aa = jdn / 365;
      bb = Math.floor(aa);
      y = 4712 + bb;
      cc = aa - bb;
      dd = Math.floor(cc);
      if (cc > 0) {
        zz = cc - dd;
      } else {
        zz = cc;
      }
      year = (y + dd) * -1;
      ee = zz * 365;
      ff = Math.floor(ee);
      gg = ee - ff;
      hh = Math.floor(fjdn + gg);
      df = fjdn + gg - hh;
      hour = f2hms(df).hour;
      minute = f2hms(df).minute;
      second = f2hms(df).second;
      if ((y + dd) % 4 === 0) {
        moarray[1] = 29;
      }
      if (ff >= 31) {
        for (let i = 0; i < 11; i++) {
          if (ff > moarray[i]) {
            ff -= moarray[i];
          } else {
            break;
          }
          month = i + 2;
          if (ff + hh === 0) {
            day = ff + hh + 1;
          } else {
            day = ff + hh;
          }
        }
      } else {
        month = 1;
        if (ff + hh === 0) {
          day = ff + hh + 1;
        } else {
          day = ff + hh;
        }
      }
    }
  }
  return {
    year,
    month,
    day,
    hour,
    minute,
    second,
  };
};

export default ifnav;
