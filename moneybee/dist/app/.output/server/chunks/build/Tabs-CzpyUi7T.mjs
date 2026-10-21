import { M as reactExports, Q as jsxRuntimeExports, R as React, ac as requireReactDom, ab as React$1, a1 as getDefaultExportFromCjs, aa as requireReact, ad as commonjsGlobal } from "./server.mjs";
import { am as getDefaults, ao as getI18n, a9 as toDate, aj as enUS$1, an as keysFromSelector, ad as getDefaultOptions, ah as getISOWeek, ai as getISOWeekYear, a2 as M, h as getDateFnsLocale, j as add$3, T as Temporal, ae as differenceInCalendarDays, af as startOfWeek, ag as millisecondsInWeek, a8 as constructFrom, ap as unescape, aa as normalizeDates, aq as addDays, a7 as addMonths, ar as addWeeks, as as getMonth, at as isBefore, ab as startOfDay, au as startOfISOWeek, av as startOfMonth, ak as subMonths, al as subDays, aw as requireCronstrue, ac as compareAsc } from "./services-middleware-nMulUXHZ.mjs";
import { u as useCallbackRef$2 } from "./use-callback-ref-DoQNLci-.mjs";
import { s as shimExports, B as B$2, r as requireShim } from "./sharpstate.es-C0BW2AZi.mjs";
import { f as formatDistanceStrict } from "./formatDistanceStrict-DEEeAR-Y.mjs";
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
var _keys, _a;
var withSelector = { exports: {} };
var withSelector_production = {};
var hasRequiredWithSelector_production;
function requireWithSelector_production() {
  if (hasRequiredWithSelector_production) return withSelector_production;
  hasRequiredWithSelector_production = 1;
  var React2 = requireReact(), shim = requireShim();
  function is(x, y) {
    return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
  }
  var objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React2.useRef, useEffect = React2.useEffect, useMemo = React2.useMemo, useDebugValue = React2.useDebugValue;
  withSelector_production.useSyncExternalStoreWithSelector = function(subscribe2, getSnapshot, getServerSnapshot, selector, isEqual) {
    var instRef = useRef(null);
    if (null === instRef.current) {
      var inst = { hasValue: false, value: null };
      instRef.current = inst;
    } else inst = instRef.current;
    instRef = useMemo(
      function() {
        function memoizedSelector(nextSnapshot) {
          if (!hasMemo) {
            hasMemo = true;
            memoizedSnapshot = nextSnapshot;
            nextSnapshot = selector(nextSnapshot);
            if (void 0 !== isEqual && inst.hasValue) {
              var currentSelection = inst.value;
              if (isEqual(currentSelection, nextSnapshot))
                return memoizedSelection = currentSelection;
            }
            return memoizedSelection = nextSnapshot;
          }
          currentSelection = memoizedSelection;
          if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
          var nextSelection = selector(nextSnapshot);
          if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
            return memoizedSnapshot = nextSnapshot, currentSelection;
          memoizedSnapshot = nextSnapshot;
          return memoizedSelection = nextSelection;
        }
        var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
        return [
          function() {
            return memoizedSelector(getSnapshot());
          },
          null === maybeGetServerSnapshot ? void 0 : function() {
            return memoizedSelector(maybeGetServerSnapshot());
          }
        ];
      },
      [getSnapshot, getServerSnapshot, selector, isEqual]
    );
    var value = useSyncExternalStore(subscribe2, instRef[0], instRef[1]);
    useEffect(
      function() {
        inst.hasValue = true;
        inst.value = value;
      },
      [value]
    );
    useDebugValue(value);
    return value;
  };
  return withSelector_production;
}
var hasRequiredWithSelector;
function requireWithSelector() {
  if (hasRequiredWithSelector) return withSelector.exports;
  hasRequiredWithSelector = 1;
  {
    withSelector.exports = requireWithSelector_production();
  }
  return withSelector.exports;
}
var withSelectorExports = requireWithSelector();
const useSyncExternalStoreExports = /* @__PURE__ */ getDefaultExportFromCjs(withSelectorExports);
function addYears(date2, amount, options2) {
  return addMonths(date2, amount * 12, options2);
}
function max$1(dates, options2) {
  let result;
  let context = options2?.in;
  dates.forEach((date2) => {
    if (!context && typeof date2 === "object")
      context = constructFrom.bind(null, date2);
    const date_ = toDate(date2, context);
    if (!result || result < date_ || isNaN(+date_)) result = date_;
  });
  return constructFrom(context, result || NaN);
}
function min$1(dates, options2) {
  let result;
  let context = options2?.in;
  dates.forEach((date2) => {
    if (!context && typeof date2 === "object")
      context = constructFrom.bind(null, date2);
    const date_ = toDate(date2, context);
    if (!result || result > date_ || isNaN(+date_)) result = date_;
  });
  return constructFrom(context, result || NaN);
}
function isSameDay(laterDate, earlierDate, options2) {
  const [dateLeft_, dateRight_] = normalizeDates(
    options2?.in,
    laterDate,
    earlierDate
  );
  return +startOfDay(dateLeft_) === +startOfDay(dateRight_);
}
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
function isValid(date2) {
  return !(!isDate(date2) && typeof date2 !== "number" || isNaN(+toDate(date2)));
}
function differenceInCalendarMonths(laterDate, earlierDate, options2) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options2?.in,
    laterDate,
    earlierDate
  );
  const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
  const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
  return yearsDiff * 12 + monthsDiff;
}
function differenceInCalendarYears(laterDate, earlierDate, options2) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options2?.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() - earlierDate_.getFullYear();
}
function endOfMonth(date2, options2) {
  const _date = toDate(date2, options2?.in);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
function differenceInYears(laterDate, earlierDate, options2) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options2?.in,
    laterDate,
    earlierDate
  );
  const sign = compareAsc(laterDate_, earlierDate_);
  const diff = Math.abs(differenceInCalendarYears(laterDate_, earlierDate_));
  laterDate_.setFullYear(1584);
  earlierDate_.setFullYear(1584);
  const partial = compareAsc(laterDate_, earlierDate_) === -sign;
  const result = sign * (diff - +partial);
  return result === 0 ? 0 : result;
}
function normalizeInterval(context, interval) {
  const [start, end] = normalizeDates(context, interval.start, interval.end);
  return { start, end };
}
function eachMonthOfInterval(interval, options2) {
  const { start, end } = normalizeInterval(options2?.in, interval);
  let reversed = +start > +end;
  const endTime = reversed ? +start : +end;
  const date2 = reversed ? end : start;
  date2.setHours(0, 0, 0, 0);
  date2.setDate(1);
  let step = 1;
  const dates = [];
  while (+date2 <= endTime) {
    dates.push(constructFrom(start, date2));
    date2.setMonth(date2.getMonth() + step);
  }
  return reversed ? dates.reverse() : dates;
}
function endOfYear(date2, options2) {
  const _date = toDate(date2, options2?.in);
  const year = _date.getFullYear();
  _date.setFullYear(year + 1, 0, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
function startOfYear(date2, options2) {
  const date_ = toDate(date2, options2?.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}
function eachYearOfInterval(interval, options2) {
  const { start, end } = normalizeInterval(options2?.in, interval);
  let reversed = +start > +end;
  const endTime = reversed ? +start : +end;
  const date2 = reversed ? end : start;
  date2.setHours(0, 0, 0, 0);
  date2.setMonth(0, 1);
  let step = 1;
  const dates = [];
  while (+date2 <= endTime) {
    dates.push(constructFrom(start, date2));
    date2.setFullYear(date2.getFullYear() + step);
  }
  return reversed ? dates.reverse() : dates;
}
function endOfWeek(date2, options2) {
  const defaultOptions = getDefaultOptions();
  const weekStartsOn = options2?.weekStartsOn ?? options2?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate(date2, options2?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  _date.setDate(_date.getDate() + diff);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
function endOfISOWeek(date2, options2) {
  return endOfWeek(date2, { ...options2, weekStartsOn: 1 });
}
function getDayOfYear(date2, options2) {
  const _date = toDate(date2, options2?.in);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}
function getWeekYear(date2, options2) {
  const _date = toDate(date2, options2?.in);
  const year = _date.getFullYear();
  const defaultOptions = getDefaultOptions();
  const firstWeekContainsDate = options2?.firstWeekContainsDate ?? options2?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const firstWeekOfNextYear = constructFrom(options2?.in || date2, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options2);
  const firstWeekOfThisYear = constructFrom(options2?.in || date2, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options2);
  if (+_date >= +startOfNextYear) {
    return year + 1;
  } else if (+_date >= +startOfThisYear) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfWeekYear(date2, options2) {
  const defaultOptions = getDefaultOptions();
  const firstWeekContainsDate = options2?.firstWeekContainsDate ?? options2?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const year = getWeekYear(date2, options2);
  const firstWeek = constructFrom(options2?.in || date2, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek(firstWeek, options2);
  return _date;
}
function getWeek(date2, options2) {
  const _date = toDate(date2, options2?.in);
  const diff = +startOfWeek(_date, options2) - +startOfWeekYear(_date, options2);
  return Math.round(diff / millisecondsInWeek) + 1;
}
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}
const lightFormatters = {
  // Year
  y(date2, token) {
    const signedYear = date2.getFullYear();
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M(date2, token) {
    const month = date2.getMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d(date2, token) {
    return addLeadingZeros(date2.getDate(), token.length);
  },
  // AM or PM
  a(date2, token) {
    const dayPeriodEnumValue = date2.getHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(date2, token) {
    return addLeadingZeros(date2.getHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H(date2, token) {
    return addLeadingZeros(date2.getHours(), token.length);
  },
  // Minute
  m(date2, token) {
    return addLeadingZeros(date2.getMinutes(), token.length);
  },
  // Second
  s(date2, token) {
    return addLeadingZeros(date2.getSeconds(), token.length);
  },
  // Fraction of second
  S(date2, token) {
    const numberOfDigits = token.length;
    const milliseconds = date2.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3)
    );
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
const dayPeriodEnum = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
const formatters = {
  // Era
  G: function(date2, token, localize) {
    const era = date2.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },
  // Year
  y: function(date2, token, localize) {
    if (token === "yo") {
      const signedYear = date2.getFullYear();
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }
    return lightFormatters.y(date2, token);
  },
  // Local week-numbering year
  Y: function(date2, token, localize, options2) {
    const signedWeekYear = getWeekYear(date2, options2);
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function(date2, token) {
    const isoWeekYear = getISOWeekYear(date2);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(date2, token) {
    const year = date2.getFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function(date2, token, localize) {
    const quarter = Math.ceil((date2.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(date2, token, localize) {
    const quarter = Math.ceil((date2.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(date2, token, localize) {
    const month = date2.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters.M(date2, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(date2, token, localize) {
    const month = date2.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(date2, token, localize, options2) {
    const week = getWeek(date2, options2);
    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function(date2, token, localize) {
    const isoWeek = getISOWeek(date2);
    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function(date2, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date2.getDate(), { unit: "date" });
    }
    return lightFormatters.d(date2, token);
  },
  // Day of year
  D: function(date2, token, localize) {
    const dayOfYear = getDayOfYear(date2);
    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function(date2, token, localize) {
    const dayOfWeek = date2.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(date2, token, localize, options2) {
    const dayOfWeek = date2.getDay();
    const localDayOfWeek = (dayOfWeek - options2.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(date2, token, localize, options2) {
    const dayOfWeek = date2.getDay();
    const localDayOfWeek = (dayOfWeek - options2.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(date2, token, localize) {
    const dayOfWeek = date2.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(date2, token, localize) {
    const hours = date2.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(date2, token, localize) {
    const hours = date2.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(date2, token, localize) {
    const hours = date2.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(date2, token, localize) {
    if (token === "ho") {
      let hours = date2.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }
    return lightFormatters.h(date2, token);
  },
  // Hour [0-23]
  H: function(date2, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date2.getHours(), { unit: "hour" });
    }
    return lightFormatters.H(date2, token);
  },
  // Hour [0-11]
  K: function(date2, token, localize) {
    const hours = date2.getHours() % 12;
    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function(date2, token, localize) {
    let hours = date2.getHours();
    if (hours === 0) hours = 24;
    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function(date2, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date2.getMinutes(), { unit: "minute" });
    }
    return lightFormatters.m(date2, token);
  },
  // Second
  s: function(date2, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date2.getSeconds(), { unit: "second" });
    }
    return lightFormatters.s(date2, token);
  },
  // Fraction of second
  S: function(date2, token) {
    return lightFormatters.S(date2, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date2, token, _localize) {
    const timezoneOffset = date2.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date2, token, _localize) {
    const timezoneOffset = date2.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date2, token, _localize) {
    const timezoneOffset = date2.getTimezoneOffset();
    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date2, token, _localize) {
    const timezoneOffset = date2.getTimezoneOffset();
    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function(date2, token, _localize) {
    const timestamp = Math.trunc(+date2 / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function(date2, token, _localize) {
    return addLeadingZeros(+date2, token.length);
  }
};
function formatTimezoneShort(offset2, delimiter = "") {
  const sign = offset2 > 0 ? "-" : "+";
  const absOffset = Math.abs(offset2);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset2, delimiter) {
  if (offset2 % 60 === 0) {
    const sign = offset2 > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset2) / 60, 2);
  }
  return formatTimezone(offset2, delimiter);
}
function formatTimezone(offset2, delimiter = "") {
  const sign = offset2 > 0 ? "-" : "+";
  const absOffset = Math.abs(offset2);
  const hours = addLeadingZeros(Math.trunc(absOffset / 60), 2);
  const minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};
const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};
const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  let dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;
const throwTokens = ["D", "DD", "YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format2, input) {
  const _message = message(token, format2, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format2, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format2}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(date2, formatStr, options2) {
  const defaultOptions = getDefaultOptions();
  const locale = options2?.locale ?? defaultOptions.locale ?? enUS$1;
  const firstWeekContainsDate = options2?.firstWeekContainsDate ?? options2?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options2?.weekStartsOn ?? options2?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const originalDate = toDate(date2, options2?.in);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  let parts = formatStr.match(longFormattingTokensRegExp).map((substring) => {
    const firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      const longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map((substring) => {
    if (substring === "''") {
      return { isToken: false, value: "'" };
    }
    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return { isToken: false, value: cleanEscapedString(substring) };
    }
    if (formatters[firstCharacter]) {
      return { isToken: true, value: substring };
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
      );
    }
    return { isToken: false, value: substring };
  });
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }
  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  return parts.map((part) => {
    if (!part.isToken) return part.value;
    const token = part.value;
    if (!options2?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token) || !options2?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, String(date2));
    }
    const formatter = formatters[token[0]];
    return formatter(originalDate, token, locale.localize, formatterOptions);
  }).join("");
}
function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}
const defaultFormat = [
  "years",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds"
];
function formatDuration$1(duration, options2) {
  const defaultOptions = getDefaultOptions();
  const locale = options2?.locale ?? defaultOptions.locale ?? enUS$1;
  const format2 = options2?.format ?? defaultFormat;
  const zero = options2?.zero ?? false;
  const delimiter = options2?.delimiter ?? " ";
  if (!locale.formatDistance) {
    return "";
  }
  const result = format2.reduce((acc, unit) => {
    const token = `x${unit.replace(/(^.)/, (m2) => m2.toUpperCase())}`;
    const value = duration[unit];
    if (value !== void 0 && (zero || duration[unit])) {
      return acc.concat(locale.formatDistance(token, value));
    }
    return acc;
  }, []).join(delimiter);
  return result;
}
function formatRelative(date2, baseDate, options2) {
  const [date_, baseDate_] = normalizeDates(options2?.in, date2, baseDate);
  const defaultOptions = getDefaultOptions();
  const locale = options2?.locale ?? defaultOptions.locale ?? enUS$1;
  const weekStartsOn = options2?.weekStartsOn ?? options2?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const diff = differenceInCalendarDays(date_, baseDate_);
  if (isNaN(diff)) {
    throw new RangeError("Invalid time value");
  }
  let token;
  if (diff < -6) {
    token = "other";
  } else if (diff < -1) {
    token = "lastWeek";
  } else if (diff < 0) {
    token = "yesterday";
  } else if (diff < 1) {
    token = "today";
  } else if (diff < 2) {
    token = "tomorrow";
  } else if (diff < 7) {
    token = "nextWeek";
  } else {
    token = "other";
  }
  const formatStr = locale.formatRelative(token, date_, baseDate_, {
    locale,
    weekStartsOn
  });
  return format(date_, formatStr, { locale, weekStartsOn });
}
function getDaysInMonth(date2, options2) {
  const _date = toDate(date2, options2?.in);
  const year = _date.getFullYear();
  const monthIndex = _date.getMonth();
  const lastDayOfMonth = constructFrom(_date, 0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}
function getYear(date2, options2) {
  return toDate(date2, options2?.in).getFullYear();
}
function isAfter(date2, dateToCompare) {
  return +toDate(date2) > +toDate(dateToCompare);
}
function isSameMonth(laterDate, earlierDate, options2) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options2?.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}
function isSameYear(laterDate, earlierDate, options2) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options2?.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() === earlierDate_.getFullYear();
}
function setMonth(date2, month, options2) {
  const _date = toDate(date2, options2?.in);
  const year = _date.getFullYear();
  const day = _date.getDate();
  const midMonth = constructFrom(date2, 0);
  midMonth.setFullYear(year, month, 15);
  midMonth.setHours(0, 0, 0, 0);
  const daysInMonth = getDaysInMonth(midMonth);
  _date.setMonth(month, Math.min(day, daysInMonth));
  return _date;
}
function setYear(date2, year, options2) {
  const date_ = toDate(date2, options2?.in);
  if (isNaN(+date_)) return constructFrom(date2, NaN);
  date_.setFullYear(year);
  return date_;
}
function sub(date2, duration, options2) {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0
  } = duration;
  const withoutMonths = subMonths(date2, months + years * 12, options2);
  const withoutDays = subDays(withoutMonths, days + weeks * 7, options2);
  const minutesToSub = minutes + hours * 60;
  const secondsToSub = seconds + minutesToSub * 60;
  const msToSub = secondsToSub * 1e3;
  return constructFrom(date2, +withoutDays - msToSub);
}
const voidElements = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true,
  "!doctype": true,
  "!DOCTYPE": true
};
const attrRE = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?("[^"]*"|'[^']*')/g;
function parseTag(tag) {
  const res = {
    type: "tag",
    name: "",
    voidElement: false,
    attrs: {},
    children: []
  };
  const tagMatch = tag.match(/<\/?([^\s]+?)[/\s>]/);
  if (tagMatch) {
    res.name = tagMatch[1];
    if (voidElements[tagMatch[1]] || tag.charAt(tag.length - 2) === "/") {
      res.voidElement = true;
    }
    if (res.name.startsWith("!--")) {
      const endIndex = tag.indexOf("-->");
      return {
        type: "comment",
        comment: endIndex !== -1 ? tag.slice(4, endIndex) : ""
      };
    }
  }
  const reg = new RegExp(attrRE);
  let result = null;
  for (; ; ) {
    result = reg.exec(tag);
    if (result === null) {
      break;
    }
    if (!result[0].trim()) {
      continue;
    }
    if (result[1]) {
      const attr = result[1].trim();
      let arr = [attr, null];
      const eq = attr.indexOf("=");
      if (eq > -1) {
        arr = [attr.slice(0, eq), attr.slice(eq + 1)];
      }
      res.attrs[arr[0]] = arr[1];
      reg.lastIndex--;
    } else if (result[2]) {
      res.attrs[result[2]] = result[3].trim().substring(1, result[3].length - 1);
    }
  }
  return res;
}
const tagRE = /<!--[\s\S]*?-->|<[a-zA-Z0-9\-!/](?:"[^"]*"|'[^']*'|[^'">])*>/g;
const tagNameRE = /<\/?([^\s]+?)[/\s>]/;
const whitespaceRE = /^\s*$/;
const rawTextRE = /^(script|style)$/i;
const sentinel = "\0";
const empty = /* @__PURE__ */ Object.create(null);
function restoreSentinels(nodes) {
  nodes.forEach(function(node) {
    if (node.type === "text") {
      node.content = node.content.split(sentinel).join("<");
      return;
    }
    if (node.type === "comment") {
      node.comment = node.comment.split(sentinel).join("<");
      return;
    }
    for (const key in node.attrs) {
      const value = node.attrs[key];
      if (typeof value === "string" && value.indexOf(sentinel) > -1) {
        node.attrs[key] = value.split(sentinel).join("<");
      }
    }
    if (node.children.length) {
      restoreSentinels(node.children);
    }
  });
}
function parse$1(html, options2) {
  const components2 = options2 && options2.components || empty;
  const allowedTags = options2 && options2.allowedTags;
  let restoreNeeded = false;
  if (allowedTags) {
    const isAllowed = typeof allowedTags === "function" ? allowedTags : function(name) {
      return allowedTags.indexOf(name) > -1;
    };
    let out = "";
    let pos = 0;
    tagRE.lastIndex = 0;
    let am;
    while (am = tagRE.exec(html)) {
      const tag = am[0];
      out += html.slice(pos, am.index);
      const nameMatch = tag.match(tagNameRE);
      if (tag.startsWith("<!--") || nameMatch && isAllowed(nameMatch[1])) {
        out += tag;
        pos = am.index + tag.length;
      } else {
        restoreNeeded = true;
        out += sentinel;
        pos = am.index + 1;
        tagRE.lastIndex = pos;
      }
    }
    html = out + html.slice(pos);
  }
  const result = [];
  const arr = [];
  let current;
  let level = -1;
  let inComponent = false;
  let rawUntil = 0;
  let htmlLower;
  if (html.indexOf("<") !== 0) {
    const end = html.indexOf("<");
    result.push({
      type: "text",
      content: end === -1 ? html : html.substring(0, end)
    });
  }
  const matches = [];
  let m2;
  while (m2 = tagRE.exec(html)) {
    matches.push(m2);
  }
  matches.forEach(function(match, i) {
    const tag = match[0];
    if (!tag) return;
    if (tag.startsWith("<!--")) return;
    let lts = 0;
    let gts = 0;
    let secondLt = -1;
    let quote = null;
    for (let j = 0; j < tag.length; j++) {
      const c = tag.charAt(j);
      if (quote) {
        if (c === quote) quote = null;
      } else if (c === '"' || c === "'") {
        quote = c;
      } else if (c === "<") {
        lts++;
        if (lts === 2) secondLt = j;
      } else if (c === ">") {
        gts++;
      }
    }
    const validSplit = secondLt > -1 && /[a-zA-Z0-9\-!/]/.test(tag.charAt(secondLt + 1));
    if (lts > gts && validSplit) {
      const firstPart = tag.substring(0, secondLt);
      const secondPart = tag.substring(firstPart.length);
      matches[i][0] = secondPart;
      matches[i].index += firstPart.length;
    }
  });
  matches.forEach(function(match, i) {
    const tag = match[0];
    if (!tag) return;
    const index2 = match.index;
    if (index2 < rawUntil) return;
    if (inComponent) {
      if (tag !== "</" + current.name + ">") {
        return;
      } else {
        inComponent = false;
      }
    }
    const isOpen = tag.charAt(1) !== "/";
    const isComment = tag.startsWith("<!--");
    const start = index2 + tag.length;
    const nextChar = html.charAt(start);
    const nextMatch = matches[i + 1];
    let isText;
    if (nextChar === "<" && nextMatch) {
      const nextTag = html.substring(start, nextMatch.index);
      isText = nextTag.split("<").length > nextTag.split(">").length;
    }
    let parent;
    if (isComment) {
      const comment = parseTag(tag);
      if (level < 0) {
        result.push(comment);
        return result;
      }
      parent = arr[level];
      parent.children.push(comment);
      const text = html.slice(start, nextMatch ? nextMatch.index : void 0);
      if (text.length > 0) {
        parent.children.push({
          type: "text",
          content: text
        });
      }
      return result;
    }
    if (isOpen) {
      level++;
      current = parseTag(tag);
      if (current.type === "tag" && components2[current.name]) {
        current.type = "component";
        inComponent = true;
      }
      let isRawText = false;
      if (!inComponent && !current.voidElement && rawTextRE.test(current.name)) {
        isRawText = true;
        htmlLower || (htmlLower = html.toLowerCase());
        const closeIndex = htmlLower.indexOf(
          "</" + current.name.toLowerCase() + ">",
          start
        );
        const contentEnd = closeIndex === -1 ? html.length : closeIndex;
        const content = html.slice(start, contentEnd);
        if (content) {
          current.children.push({
            type: "text",
            content
          });
        }
        rawUntil = contentEnd;
      }
      if (!current.voidElement && !inComponent && !isRawText && nextChar && nextChar !== "<") {
        current.children.push({
          type: "text",
          content: html.slice(start, nextMatch ? nextMatch.index : void 0)
        });
      }
      if (level === 0) {
        result.push(current);
      }
      parent = arr[level - 1];
      if (parent) {
        parent.children.push(current);
      }
      arr[level] = current;
    }
    if (!isOpen || current.voidElement) {
      if (level > -1 && (current.voidElement || current.name === tag.slice(2, -1))) {
        level--;
        current = level === -1 ? result : arr[level];
      }
      if (!inComponent && (nextChar !== "<" || isText) && nextChar) {
        parent = level === -1 ? result : arr[level].children;
        const end = nextMatch ? nextMatch.index : -1;
        let content = html.slice(start, end === -1 ? void 0 : end);
        if (whitespaceRE.test(content)) {
          content = " ";
        }
        if (end > -1 && level + parent.length >= 0 || content !== " ") {
          parent.push({
            type: "text",
            content
          });
        }
      }
    }
  });
  if (restoreNeeded) {
    restoreSentinels(result);
  }
  return result;
}
function attrString(attrs) {
  const buff = [];
  for (const key in attrs) {
    if (attrs[key] === null) {
      buff.push(key);
    } else {
      buff.push(key + '="' + String(attrs[key]).replace(/"/g, "&quot;") + '"');
    }
  }
  if (!buff.length) {
    return "";
  }
  return " " + buff.join(" ");
}
function stringifyNode(buff, doc) {
  switch (doc.type) {
    case "text":
      return buff + doc.content;
    case "tag": {
      const tagEnd = doc.voidElement && doc.name.toLowerCase() !== "!doctype" ? "/>" : ">";
      buff += "<" + doc.name + (doc.attrs ? attrString(doc.attrs) : "") + tagEnd;
      if (doc.voidElement) {
        return buff;
      }
      return buff + doc.children.reduce(stringifyNode, "") + "</" + doc.name + ">";
    }
    case "comment":
      buff += "<!--" + doc.comment + "-->";
      return buff;
  }
}
function stringify(doc) {
  return doc.reduce(function(token, rootEl) {
    return token + stringifyNode("", rootEl);
  }, "");
}
var index$1 = {
  parse: parse$1,
  stringify
};
const warn = (i18n, code, msg, rest) => {
  const args = [msg, {
    code,
    ...rest || {}
  }];
  if (i18n?.services?.logger?.forward) {
    return i18n.services.logger.forward(args, "warn", "react-i18next::", true);
  }
  if (isString(args[0])) args[0] = `react-i18next:: ${args[0]}`;
  if (i18n?.services?.logger?.warn) {
    i18n.services.logger.warn(...args);
  } else if (console?.warn) {
    console.warn(...args);
  }
};
const alreadyWarned = {};
const warnOnce = (i18n, code, msg, rest) => {
  if (isString(msg) && alreadyWarned[msg]) return;
  if (isString(msg)) alreadyWarned[msg] = /* @__PURE__ */ new Date();
  warn(i18n, code, msg, rest);
};
const loadedClb = (i18n, cb) => () => {
  if (i18n.isInitialized) {
    cb();
  } else {
    const initialized = () => {
      setTimeout(() => {
        i18n.off("initialized", initialized);
      }, 0);
      cb();
    };
    i18n.on("initialized", initialized);
  }
};
const loadNamespaces = (i18n, ns, cb) => {
  i18n.loadNamespaces(ns, loadedClb(i18n, cb));
};
const loadLanguages = (i18n, lng, ns, cb) => {
  if (isString(ns)) ns = [ns];
  if (i18n.options.preload && i18n.options.preload.indexOf(lng) > -1) return loadNamespaces(i18n, ns, cb);
  ns.forEach((n) => {
    if (i18n.options.ns.indexOf(n) < 0) i18n.options.ns.push(n);
  });
  i18n.loadLanguages(lng, loadedClb(i18n, cb));
};
const hasLoadedNamespace = (ns, i18n, options2 = {}) => {
  if (!i18n.languages || !i18n.languages.length) {
    warnOnce(i18n, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
      languages: i18n.languages
    });
    return true;
  }
  return i18n.hasLoadedNamespace(ns, {
    lng: options2.lng,
    precheck: (i18nInstance, loadNotPending) => {
      if (options2.bindI18n && options2.bindI18n.indexOf("languageChanging") > -1 && i18nInstance.services.backendConnector.backend && i18nInstance.isLanguageChangingTo && !loadNotPending(i18nInstance.isLanguageChangingTo, ns)) return false;
    }
  });
};
const isString = (obj) => typeof obj === "string";
const isObject = (obj) => typeof obj === "object" && obj !== null;
const hasChildren = (node, checkLength) => {
  if (!node) return false;
  const base = node.props?.children ?? node.children;
  if (checkLength) return base.length > 0;
  return !!base;
};
const getChildren = (node) => {
  if (!node) return [];
  const children = node.props?.children ?? node.children;
  return node.props?.i18nIsDynamicList ? getAsArray(children) : children;
};
const hasValidReactChildren = (children) => Array.isArray(children) && children.every(reactExports.isValidElement);
const getAsArray = (data) => Array.isArray(data) ? data : [data];
const mergeProps$1 = (source, target) => {
  const newTarget = {
    ...target
  };
  newTarget.props = {
    ...target.props,
    ...source.props
  };
  return newTarget;
};
const getValuesFromChildren = (children) => {
  const values = {};
  if (!children) return values;
  const getData = (childs) => {
    const childrenArray = getAsArray(childs);
    childrenArray.forEach((child) => {
      if (isString(child)) return;
      if (hasChildren(child)) getData(getChildren(child));
      else if (isObject(child) && !reactExports.isValidElement(child)) Object.assign(values, child);
    });
  };
  getData(children);
  return values;
};
const nodesToString = (children, i18nOptions, i18n, i18nKey) => {
  if (!children) return "";
  let stringNode = "";
  const childrenArray = getAsArray(children);
  const keepArray = i18nOptions?.transSupportBasicHtmlNodes ? i18nOptions.transKeepBasicHtmlNodesFor ?? [] : [];
  childrenArray.forEach((child, childIndex) => {
    if (isString(child)) {
      stringNode += `${child}`;
      return;
    }
    if (reactExports.isValidElement(child)) {
      const {
        props,
        type
      } = child;
      const childPropsCount = Object.keys(props).length;
      const shouldKeepChild = keepArray.indexOf(type) > -1;
      const childChildren = props.children;
      if (!childChildren && shouldKeepChild && !childPropsCount) {
        stringNode += `<${type}/>`;
        return;
      }
      if (!childChildren && (!shouldKeepChild || childPropsCount) || props.i18nIsDynamicList) {
        stringNode += `<${childIndex}></${childIndex}>`;
        return;
      }
      if (shouldKeepChild && childPropsCount <= 1) {
        const cnt = isString(childChildren) ? childChildren : nodesToString(childChildren, i18nOptions, i18n, i18nKey);
        stringNode += `<${type}>${cnt}</${type}>`;
        return;
      }
      const content = nodesToString(childChildren, i18nOptions, i18n, i18nKey);
      stringNode += `<${childIndex}>${content}</${childIndex}>`;
      return;
    }
    if (child === null) {
      warn(i18n, "TRANS_NULL_VALUE", `Passed in a null value as child`, {
        i18nKey
      });
      return;
    }
    if (isObject(child)) {
      const {
        format: format2,
        ...clone
      } = child;
      const keys = Object.keys(clone);
      if (keys.length === 1) {
        const value = format2 ? `${keys[0]}, ${format2}` : keys[0];
        stringNode += `{{${value}}}`;
        return;
      }
      warn(i18n, "TRANS_INVALID_OBJ", `Invalid child - Object should only have keys {{ value, format }} (format is optional).`, {
        i18nKey,
        child
      });
      return;
    }
    warn(i18n, "TRANS_INVALID_VAR", `Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.`, {
      i18nKey,
      child
    });
  });
  return stringNode;
};
const renderNodes = (children, knownComponentsMap, targetString, i18n, i18nOptions, combinedTOpts, shouldUnescape) => {
  if (targetString === "") return [];
  const keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
  const emptyChildrenButNeedsHandling = targetString && new RegExp(keepArray.map((keep) => `<${keep}`).join("|")).test(targetString);
  if (!children && !knownComponentsMap && !emptyChildrenButNeedsHandling && !shouldUnescape) return [targetString];
  const data = knownComponentsMap ?? {};
  const getData = (childs) => {
    const childrenArray = getAsArray(childs);
    childrenArray.forEach((child) => {
      if (isString(child)) return;
      if (hasChildren(child)) getData(getChildren(child));
      else if (isObject(child) && !reactExports.isValidElement(child)) Object.assign(data, child);
    });
  };
  getData(children);
  const knownNames = Object.keys(data);
  const allowedTags = (name) => /^\d+$/.test(name) || keepArray.indexOf(name) > -1 || knownNames.indexOf(name) > -1;
  const ast = index$1.parse(`<0>${targetString}</0>`, {
    allowedTags
  });
  const opts = {
    ...data,
    ...combinedTOpts
  };
  const renderInner = (child, node, rootReactNode) => {
    const childs = getChildren(child);
    const mappedChildren = mapAST(childs, node.children, rootReactNode);
    return hasValidReactChildren(childs) && mappedChildren.length === 0 || child.props?.i18nIsDynamicList ? childs : mappedChildren;
  };
  const pushTranslatedJSX = (child, inner, mem, i, isVoid) => {
    if (child.dummy) {
      child.children = inner;
      mem.push(reactExports.cloneElement(child, {
        key: i
      }, isVoid ? void 0 : inner));
    } else {
      mem.push(...reactExports.Children.map([child], (c) => {
        if (c.type === reactExports.Fragment || c.props?.i18nIsDynamicList !== void 0) {
          const freshProps = {
            key: i
          };
          if (c && c.props) {
            Object.keys(c.props).forEach((k2) => {
              if (k2 === "children" || k2 === "i18nIsDynamicList") return;
              freshProps[k2] = c.props[k2];
            });
          }
          return reactExports.createElement(c.type, freshProps, isVoid ? null : inner);
        }
        const override = {
          key: i
        };
        if (c && c.props) {
          Object.keys(c.props).forEach((k2) => {
            if (k2 === "ref" || k2 === "children") return;
            override[k2] = c.props[k2];
          });
        }
        return reactExports.cloneElement(c, override, isVoid ? null : inner);
      }));
    }
  };
  const mapAST = (reactNode, astNode, rootReactNode) => {
    const reactNodes = getAsArray(reactNode);
    const astNodes = getAsArray(astNode);
    const keepTagOccurrence = {};
    return astNodes.reduce((mem, node, i) => {
      const translationContent = node.children?.[0]?.content && i18n.services.interpolator.interpolate(node.children[0].content, opts, i18n.language);
      if (node.type === "tag") {
        let tmp = reactNodes[parseInt(node.name, 10)];
        if (!tmp && knownComponentsMap) tmp = knownComponentsMap[node.name];
        if (rootReactNode.length === 1 && !tmp) tmp = rootReactNode[0][node.name];
        if (!tmp) tmp = {};
        const props = {
          ...node.attrs
        };
        if (shouldUnescape) {
          Object.keys(props).forEach((p2) => {
            const val = props[p2];
            if (isString(val)) {
              props[p2] = unescape(val);
            }
          });
        }
        const child = Object.keys(props).length !== 0 ? mergeProps$1({
          props
        }, tmp) : tmp;
        const isElement2 = reactExports.isValidElement(child);
        const isValidTranslationWithChildren = isElement2 && hasChildren(node, true) && !node.voidElement;
        const isEmptyTransWithHTML = emptyChildrenButNeedsHandling && isObject(child) && child.dummy && !isElement2;
        const isKnownComponent = isObject(knownComponentsMap) && Object.hasOwnProperty.call(knownComponentsMap, node.name);
        if (isString(child)) {
          const value = i18n.services.interpolator.interpolate(child, opts, i18n.language);
          mem.push(value);
        } else if (hasChildren(child) || isValidTranslationWithChildren) {
          const inner = renderInner(child, node, rootReactNode);
          pushTranslatedJSX(child, inner, mem, i);
        } else if (isEmptyTransWithHTML) {
          const inner = mapAST(reactNodes, node.children, rootReactNode);
          pushTranslatedJSX(child, inner, mem, i);
        } else if (Number.isNaN(parseFloat(node.name))) {
          if (isKnownComponent) {
            const inner = renderInner(child, node, rootReactNode);
            pushTranslatedJSX(child, inner, mem, i, node.voidElement);
          } else if (i18nOptions.transSupportBasicHtmlNodes && keepArray.indexOf(node.name) > -1) {
            if (node.voidElement) {
              mem.push(reactExports.createElement(node.name, {
                key: `${node.name}-${i}`
              }));
            } else {
              const occurrence = keepTagOccurrence[node.name] || 0;
              keepTagOccurrence[node.name] = occurrence + 1;
              let matched;
              let seen = 0;
              for (let r2 = 0; r2 < reactNodes.length; r2 += 1) {
                const rn = reactNodes[r2];
                if (reactExports.isValidElement(rn) && rn.type === node.name) {
                  if (seen === occurrence) {
                    matched = rn;
                    break;
                  }
                  seen += 1;
                }
              }
              const innerScope = matched ? getAsArray(getChildren(matched)) : reactNodes;
              const inner = mapAST(innerScope, node.children, rootReactNode);
              mem.push(reactExports.createElement(node.name, {
                key: `${node.name}-${i}`
              }, inner));
            }
          } else if (node.voidElement) {
            mem.push(`<${node.name} />`);
          } else {
            const inner = mapAST(reactNodes, node.children, rootReactNode);
            mem.push(`<${node.name}>${inner}</${node.name}>`);
          }
        } else if (isObject(child) && !isElement2) {
          const content = node.children[0] ? translationContent : null;
          if (content) mem.push(content);
        } else {
          pushTranslatedJSX(child, translationContent, mem, i, node.children.length !== 1 || !translationContent);
        }
      } else if (node.type === "text") {
        const wrapTextNodes = i18nOptions.transWrapTextNodes;
        const unescapeFn = typeof i18nOptions.unescape === "function" ? i18nOptions.unescape : getDefaults().unescape;
        const content = shouldUnescape ? unescapeFn(i18n.services.interpolator.interpolate(node.content, opts, i18n.language)) : i18n.services.interpolator.interpolate(node.content, opts, i18n.language);
        if (wrapTextNodes) {
          mem.push(reactExports.createElement(wrapTextNodes, {
            key: `${node.name}-${i}`
          }, content));
        } else {
          mem.push(content);
        }
      }
      return mem;
    }, []);
  };
  const result = mapAST([{
    dummy: true,
    children: children || []
  }], ast, getAsArray(children || []));
  return getChildren(result[0]);
};
const fixComponentProps = (component, index2, translation) => {
  const componentKey = component.key || index2;
  const comp = reactExports.cloneElement(component, {
    key: componentKey
  });
  if (!comp.props || !comp.props.children || translation.indexOf(`${index2}/>`) < 0 && translation.indexOf(`${index2} />`) < 0) {
    return comp;
  }
  function Componentized() {
    return reactExports.createElement(reactExports.Fragment, null, comp);
  }
  return reactExports.createElement(Componentized, {
    key: componentKey
  });
};
const generateArrayComponents = (components2, translation) => components2.map((c, index2) => fixComponentProps(c, index2, translation));
const generateObjectComponents = (components2, translation) => {
  const componentMap = {};
  Object.keys(components2).forEach((c) => {
    Object.assign(componentMap, {
      [c]: fixComponentProps(components2[c], c, translation)
    });
  });
  return componentMap;
};
const generateComponents = (components2, translation, i18n, i18nKey) => {
  if (!components2) return null;
  if (Array.isArray(components2)) {
    return generateArrayComponents(components2, translation);
  }
  if (isObject(components2)) {
    return generateObjectComponents(components2, translation);
  }
  warnOnce(i18n, "TRANS_INVALID_COMPONENTS", `<Trans /> "components" prop expects an object or array`, {
    i18nKey
  });
  return null;
};
const isComponentsMap = (object) => {
  if (!isObject(object)) return false;
  if (Array.isArray(object)) return false;
  return Object.keys(object).reduce((acc, key) => acc && Number.isNaN(Number.parseFloat(key)), true);
};
function Trans$1({
  children,
  count: count2,
  parent,
  i18nKey,
  context,
  tOptions = {},
  values,
  defaults,
  components: components2,
  ns,
  i18n: i18nFromProps,
  t: tFromProps,
  shouldUnescape,
  ...additionalProps
}) {
  const i18n = i18nFromProps || getI18n();
  if (!i18n) {
    warnOnce(i18n, "NO_I18NEXT_INSTANCE", `Trans: You need to pass in an i18next instance using initReactI18next or by passing it via props or context. In monorepo setups, make sure there is only one instance of react-i18next.`, {
      i18nKey
    });
    return children;
  }
  const t = tFromProps || i18n.t.bind(i18n) || ((k2) => k2);
  const reactI18nextOptions = {
    ...getDefaults(),
    ...i18n.options?.react
  };
  let namespaces = ns || t.ns || i18n.options?.defaultNS;
  namespaces = isString(namespaces) ? [namespaces] : namespaces || ["translation"];
  const {
    transDefaultProps
  } = reactI18nextOptions;
  const mergedTOptions = transDefaultProps?.tOptions ? {
    ...transDefaultProps.tOptions,
    ...tOptions
  } : tOptions;
  const mergedShouldUnescape = shouldUnescape ?? transDefaultProps?.shouldUnescape;
  const mergedValues = transDefaultProps?.values ? {
    ...transDefaultProps.values,
    ...values
  } : values;
  const mergedComponents = transDefaultProps?.components ? {
    ...transDefaultProps.components,
    ...components2
  } : components2;
  const nodeAsString = nodesToString(children, reactI18nextOptions, i18n, i18nKey);
  const defaultValue2 = defaults || mergedTOptions?.defaultValue || nodeAsString || reactI18nextOptions.transEmptyNodeValue || (typeof i18nKey === "function" ? keysFromSelector(i18nKey) : i18nKey);
  const {
    hashTransKey
  } = reactI18nextOptions;
  const key = i18nKey || (hashTransKey ? hashTransKey(nodeAsString || defaultValue2) : nodeAsString || defaultValue2);
  if (i18n.options?.interpolation?.defaultVariables) {
    values = mergedValues && Object.keys(mergedValues).length > 0 ? {
      ...mergedValues,
      ...i18n.options.interpolation.defaultVariables
    } : {
      ...i18n.options.interpolation.defaultVariables
    };
  } else {
    values = mergedValues;
  }
  const valuesFromChildren = getValuesFromChildren(children);
  if (valuesFromChildren && typeof valuesFromChildren.count === "number" && count2 === void 0) {
    count2 = valuesFromChildren.count;
  }
  const interpolationOverride = values || count2 !== void 0 && !i18n.options?.interpolation?.alwaysFormat || !children ? mergedTOptions.interpolation : {
    interpolation: {
      ...mergedTOptions.interpolation,
      prefix: "#$?",
      suffix: "?$#"
    }
  };
  const combinedTOpts = {
    ...mergedTOptions,
    context: context || mergedTOptions.context,
    count: count2,
    ...values,
    ...interpolationOverride,
    defaultValue: defaultValue2,
    ns: namespaces
  };
  let translation = key ? t(key, combinedTOpts) : defaultValue2;
  if (translation === key && defaultValue2) translation = defaultValue2;
  const generatedComponents = generateComponents(mergedComponents, translation, i18n, i18nKey);
  let indexedChildren = generatedComponents || children;
  let componentsMap = null;
  if (isComponentsMap(generatedComponents)) {
    componentsMap = generatedComponents;
    indexedChildren = children;
  }
  const content = renderNodes(indexedChildren, componentsMap, translation, i18n, reactI18nextOptions, combinedTOpts, mergedShouldUnescape);
  const useAsParent = parent ?? reactI18nextOptions.defaultTransParent;
  return useAsParent ? reactExports.createElement(useAsParent, additionalProps, content) : content;
}
const I18nContext$1 = reactExports.createContext();
class ReportNamespaces {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(namespaces) {
    namespaces.forEach((ns) => {
      if (!this.usedNamespaces[ns]) this.usedNamespaces[ns] = true;
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
function Trans({
  children,
  count: count2,
  parent,
  i18nKey,
  context,
  tOptions = {},
  values,
  defaults,
  components: components2,
  ns,
  i18n: i18nFromProps,
  t: tFromProps,
  shouldUnescape,
  ...additionalProps
}) {
  const {
    i18n: i18nFromContext,
    defaultNS: defaultNSFromContext
  } = reactExports.useContext(I18nContext$1) || {};
  const i18n = i18nFromProps || i18nFromContext || getI18n();
  const t = tFromProps || i18n?.t.bind(i18n);
  return Trans$1({
    children,
    count: count2,
    parent,
    i18nKey,
    context,
    tOptions,
    values,
    defaults,
    components: components2,
    ns: ns || t?.ns || defaultNSFromContext || i18n?.options?.defaultNS,
    i18n,
    t: tFromProps,
    shouldUnescape,
    ...additionalProps
  });
}
const notReadyT = (k2, optsOrDefaultValue) => {
  if (isString(optsOrDefaultValue)) return optsOrDefaultValue;
  if (isObject(optsOrDefaultValue) && isString(optsOrDefaultValue.defaultValue)) return optsOrDefaultValue.defaultValue;
  if (typeof k2 === "function") return "";
  if (Array.isArray(k2)) {
    const last = k2[k2.length - 1];
    return typeof last === "function" ? "" : last;
  }
  return k2;
};
const notReadySnapshot = {
  t: notReadyT,
  ready: false
};
const dummySubscribe = () => () => {
};
const useTranslation = (ns, props = {}) => {
  const {
    i18n: i18nFromProps
  } = props;
  const {
    i18n: i18nFromContext,
    defaultNS: defaultNSFromContext
  } = reactExports.useContext(I18nContext$1) || {};
  const i18n = i18nFromProps || i18nFromContext || getI18n();
  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new ReportNamespaces();
  if (!i18n) {
    warnOnce(i18n, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next or by passing it via props or context. In monorepo setups, make sure there is only one instance of react-i18next.");
  }
  const i18nOptions = reactExports.useMemo(() => ({
    ...getDefaults(),
    ...i18n?.options?.react,
    ...props
  }), [i18n, props]);
  const {
    useSuspense,
    keyPrefix
  } = i18nOptions;
  const nsOrContext = ns || defaultNSFromContext || i18n?.options?.defaultNS;
  const unstableNamespaces = isString(nsOrContext) ? [nsOrContext] : nsOrContext || ["translation"];
  const namespaces = reactExports.useMemo(() => unstableNamespaces, unstableNamespaces);
  i18n?.reportNamespaces?.addUsedNamespaces?.(namespaces);
  const revisionRef = reactExports.useRef(0);
  const subscribe2 = reactExports.useCallback((callback) => {
    if (!i18n) return dummySubscribe;
    const {
      bindI18n,
      bindI18nStore
    } = i18nOptions;
    const wrappedCallback = () => {
      revisionRef.current += 1;
      callback();
    };
    if (bindI18n) i18n.on(bindI18n, wrappedCallback);
    if (bindI18nStore) i18n.store.on(bindI18nStore, wrappedCallback);
    return () => {
      if (bindI18n) bindI18n.split(" ").forEach((e) => i18n.off(e, wrappedCallback));
      if (bindI18nStore) bindI18nStore.split(" ").forEach((e) => i18n.store.off(e, wrappedCallback));
    };
  }, [i18n, i18nOptions]);
  const snapshotRef = reactExports.useRef();
  const getSnapshot = reactExports.useCallback(() => {
    if (!i18n) {
      return notReadySnapshot;
    }
    const calculatedReady = !!(i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every((n) => hasLoadedNamespace(n, i18n, i18nOptions));
    const currentLng = props.lng || i18n.language;
    const currentRevision = revisionRef.current;
    const lastSnapshot = snapshotRef.current;
    if (lastSnapshot && lastSnapshot.ready === calculatedReady && lastSnapshot.lng === currentLng && lastSnapshot.keyPrefix === keyPrefix && lastSnapshot.revision === currentRevision) {
      return lastSnapshot;
    }
    const calculatedT = i18n.getFixedT(currentLng, i18nOptions.nsMode === "fallback" ? namespaces : namespaces[0], keyPrefix, {
      scopeNs: namespaces
    });
    const newSnapshot = {
      t: calculatedT,
      ready: calculatedReady,
      lng: currentLng,
      keyPrefix,
      revision: currentRevision
    };
    snapshotRef.current = newSnapshot;
    return newSnapshot;
  }, [i18n, namespaces, keyPrefix, i18nOptions, props.lng]);
  const [loadCount, setLoadCount] = reactExports.useState(0);
  const {
    t,
    ready
  } = shimExports.useSyncExternalStore(subscribe2, getSnapshot, getSnapshot);
  reactExports.useEffect(() => {
    if (i18n && !ready && !useSuspense) {
      const onLoaded = () => setLoadCount((c) => c + 1);
      if (props.lng) {
        loadLanguages(i18n, props.lng, namespaces, onLoaded);
      } else {
        loadNamespaces(i18n, namespaces, onLoaded);
      }
    }
  }, [i18n, props.lng, namespaces, ready, useSuspense, loadCount]);
  const finalI18n = i18n || {};
  const wrapperRef = reactExports.useRef(null);
  const wrapperLangRef = reactExports.useRef();
  const createI18nWrapper = (original) => {
    const descriptors = Object.getOwnPropertyDescriptors(original);
    if (descriptors.__original) delete descriptors.__original;
    const wrapper = Object.create(Object.getPrototypeOf(original), descriptors);
    if (!Object.prototype.hasOwnProperty.call(wrapper, "__original")) {
      try {
        Object.defineProperty(wrapper, "__original", {
          value: original,
          writable: false,
          enumerable: false,
          configurable: false
        });
      } catch (_) {
      }
    }
    return wrapper;
  };
  const ret = reactExports.useMemo(() => {
    const original = finalI18n;
    const lang = original?.language;
    let i18nWrapper = original;
    if (original) {
      if (wrapperRef.current && wrapperRef.current.__original === original) {
        if (wrapperLangRef.current !== lang) {
          i18nWrapper = createI18nWrapper(original);
          wrapperRef.current = i18nWrapper;
          wrapperLangRef.current = lang;
        } else {
          i18nWrapper = wrapperRef.current;
        }
      } else {
        i18nWrapper = createI18nWrapper(original);
        wrapperRef.current = i18nWrapper;
        wrapperLangRef.current = lang;
      }
    }
    const effectiveT = !ready && !useSuspense ? (...args) => {
      warnOnce(i18n, "USE_T_BEFORE_READY", "useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t.");
      return t(...args);
    } : t;
    const arr = [effectiveT, i18nWrapper, ready];
    arr.t = effectiveT;
    arr.i18n = i18nWrapper;
    arr.ready = ready;
    return arr;
  }, [t, finalI18n, ready, finalI18n.resolvedLanguage, finalI18n.language, finalI18n.languages]);
  if (i18n && useSuspense && !ready) {
    let inDevelopment = false;
    try {
      inDevelopment = false;
    } catch (e) {
    }
    if (inDevelopment) {
      warnOnce(i18n, "SUSPENDED_WHILE_LOADING", "useTranslation: suspended while translations are loading (useSuspense is true by default). Add a <Suspense> boundary above this component, or set react.useSuspense: false in the i18next init options. https://react.i18next.com/latest/usetranslation-hook");
    }
    throw new Promise((resolve) => {
      const onLoaded = () => resolve();
      if (props.lng) {
        loadLanguages(i18n, props.lng, namespaces, onLoaded);
      } else {
        loadNamespaces(i18n, namespaces, onLoaded);
      }
    });
  }
  return ret;
};
const iconsSVGSpriteHref = "/assets/icons-svg-sprite-A1MNaSNt.svg";
function Icon({
  ref,
  icon,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { ...props, ref, children: /* @__PURE__ */ jsxRuntimeExports.jsx("use", { href: `${iconsSVGSpriteHref}#${icon}` }) });
}
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
const falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = clsx;
const cva = (base, config) => (props) => {
  var _config_compoundVariants;
  if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  const { variants, defaultVariants } = config;
  const getVariantClassNames = Object.keys(variants).map((variant) => {
    const variantProp = props === null || props === void 0 ? void 0 : props[variant];
    const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
    if (variantProp === null) return null;
    const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
    return variants[variant][variantKey];
  });
  const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
    let [key, value] = param;
    if (value === void 0) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
  const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
    let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
    return Object.entries(compoundVariantOptions).every((param2) => {
      let [key, value] = param2;
      return Array.isArray(value) ? value.includes({
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key]) : {
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key] === value;
    }) ? [
      ...acc,
      cvClass,
      cvClassName
    ] : acc;
  }, []);
  return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};
const concatArrays = (array1, array2) => {
  const combinedArray = new Array(array1.length + array2.length);
  for (let i = 0; i < array1.length; i++) {
    combinedArray[i] = array1[i];
  }
  for (let i = 0; i < array2.length; i++) {
    combinedArray[array1.length + i] = array2[i];
  }
  return combinedArray;
};
const createClassValidatorObject = (classGroupId, validator) => ({
  classGroupId,
  validator
});
const createClassPartObject = (nextPart = /* @__PURE__ */ new Map(), validators = null, classGroupId) => ({
  nextPart,
  validators,
  classGroupId
});
const CLASS_PART_SEPARATOR = "-";
const EMPTY_CONFLICTS = [];
const ARBITRARY_PROPERTY_PREFIX = "arbitrary..";
const createClassGroupUtils = (config) => {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = (className) => {
    if (className.startsWith("[") && className.endsWith("]")) {
      return getGroupIdForArbitraryProperty(className);
    }
    const classParts = className.split(CLASS_PART_SEPARATOR);
    const startIndex = classParts[0] === "" && classParts.length > 1 ? 1 : 0;
    return getGroupRecursive(classParts, startIndex, classMap);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    if (hasPostfixModifier) {
      const modifierConflicts = conflictingClassGroupModifiers[classGroupId];
      const baseConflicts = conflictingClassGroups[classGroupId];
      if (modifierConflicts) {
        if (baseConflicts) {
          return concatArrays(baseConflicts, modifierConflicts);
        }
        return modifierConflicts;
      }
      return baseConflicts || EMPTY_CONFLICTS;
    }
    return conflictingClassGroups[classGroupId] || EMPTY_CONFLICTS;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
const getGroupRecursive = (classParts, startIndex, classPartObject) => {
  const classPathsLength = classParts.length - startIndex;
  if (classPathsLength === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[startIndex];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  if (nextClassPartObject) {
    const result = getGroupRecursive(classParts, startIndex + 1, nextClassPartObject);
    if (result) return result;
  }
  const validators = classPartObject.validators;
  if (validators === null) {
    return void 0;
  }
  const classRest = startIndex === 0 ? classParts.join(CLASS_PART_SEPARATOR) : classParts.slice(startIndex).join(CLASS_PART_SEPARATOR);
  const validatorsLength = validators.length;
  for (let i = 0; i < validatorsLength; i++) {
    const validatorObj = validators[i];
    if (validatorObj.validator(classRest)) {
      return validatorObj.classGroupId;
    }
  }
  return void 0;
};
const getGroupIdForArbitraryProperty = (className) => className.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const content = className.slice(1, -1);
  const colonIndex = content.indexOf(":");
  const property = content.slice(0, colonIndex);
  return property ? ARBITRARY_PROPERTY_PREFIX + property : void 0;
})();
const createClassMap = (config) => {
  const {
    theme,
    classGroups
  } = config;
  return processClassGroups(classGroups, theme);
};
const processClassGroups = (classGroups, theme) => {
  const classMap = createClassPartObject();
  for (const classGroupId in classGroups) {
    const group = classGroups[classGroupId];
    processClassesRecursively(group, classMap, classGroupId, theme);
  }
  return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  const len = classGroup.length;
  for (let i = 0; i < len; i++) {
    const classDefinition = classGroup[i];
    processClassDefinition(classDefinition, classPartObject, classGroupId, theme);
  }
};
const processClassDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
  if (typeof classDefinition === "string") {
    processStringDefinition(classDefinition, classPartObject, classGroupId);
    return;
  }
  if (typeof classDefinition === "function") {
    processFunctionDefinition(classDefinition, classPartObject, classGroupId, theme);
    return;
  }
  processObjectDefinition(classDefinition, classPartObject, classGroupId, theme);
};
const processStringDefinition = (classDefinition, classPartObject, classGroupId) => {
  const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
  classPartObjectToEdit.classGroupId = classGroupId;
};
const processFunctionDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
  if (isThemeGetter(classDefinition)) {
    processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
    return;
  }
  if (classPartObject.validators === null) {
    classPartObject.validators = [];
  }
  classPartObject.validators.push(createClassValidatorObject(classGroupId, classDefinition));
};
const processObjectDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
  const entries = Object.entries(classDefinition);
  const len = entries.length;
  for (let i = 0; i < len; i++) {
    const [key, value] = entries[i];
    processClassesRecursively(value, getPart(classPartObject, key), classGroupId, theme);
  }
};
const getPart = (classPartObject, path) => {
  let current = classPartObject;
  const parts = path.split(CLASS_PART_SEPARATOR);
  const len = parts.length;
  for (let i = 0; i < len; i++) {
    const part = parts[i];
    let next = current.nextPart.get(part);
    if (!next) {
      next = createClassPartObject();
      current.nextPart.set(part, next);
    }
    current = next;
  }
  return current;
};
const isThemeGetter = (func) => "isThemeGetter" in func && func.isThemeGetter === true;
const createLruCache = (maxCacheSize) => {
  if (maxCacheSize < 1) {
    return {
      get: () => void 0,
      set: () => {
      }
    };
  }
  let cacheSize = 0;
  let cache = /* @__PURE__ */ Object.create(null);
  let previousCache = /* @__PURE__ */ Object.create(null);
  const update = (key, value) => {
    cache[key] = value;
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = /* @__PURE__ */ Object.create(null);
    }
  };
  return {
    get(key) {
      let value = cache[key];
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache[key]) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (key in cache) {
        cache[key] = value;
      } else {
        update(key, value);
      }
    }
  };
};
const IMPORTANT_MODIFIER = "!";
const MODIFIER_SEPARATOR = ":";
const EMPTY_MODIFIERS = [];
const createResultObject = (modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition, isExternal) => ({
  modifiers,
  hasImportantModifier,
  baseClassName,
  maybePostfixModifierPosition,
  isExternal
});
const createParseClassName = (config) => {
  const {
    prefix,
    experimentalParseClassName
  } = config;
  let parseClassName = (className) => {
    const modifiers = [];
    let bracketDepth = 0;
    let parenDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    const len = className.length;
    for (let index2 = 0; index2 < len; index2++) {
      const currentCharacter = className[index2];
      if (bracketDepth === 0 && parenDepth === 0) {
        if (currentCharacter === MODIFIER_SEPARATOR) {
          modifiers.push(className.slice(modifierStart, index2));
          modifierStart = index2 + 1;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index2;
          continue;
        }
      }
      if (currentCharacter === "[") bracketDepth++;
      else if (currentCharacter === "]") bracketDepth--;
      else if (currentCharacter === "(") parenDepth++;
      else if (currentCharacter === ")") parenDepth--;
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.slice(modifierStart);
    let baseClassName = baseClassNameWithImportantModifier;
    let hasImportantModifier = false;
    if (baseClassNameWithImportantModifier.endsWith(IMPORTANT_MODIFIER)) {
      baseClassName = baseClassNameWithImportantModifier.slice(0, -1);
      hasImportantModifier = true;
    } else if (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER)
    ) {
      baseClassName = baseClassNameWithImportantModifier.slice(1);
      hasImportantModifier = true;
    }
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return createResultObject(modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition);
  };
  if (prefix) {
    const fullPrefix = prefix + MODIFIER_SEPARATOR;
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.slice(fullPrefix.length)) : createResultObject(EMPTY_MODIFIERS, false, className, void 0, true);
  }
  if (experimentalParseClassName) {
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => experimentalParseClassName({
      className,
      parseClassName: parseClassNameOriginal
    });
  }
  return parseClassName;
};
const createSortModifiers = (config) => {
  const modifierWeights = /* @__PURE__ */ new Map();
  config.orderSensitiveModifiers.forEach((mod, index2) => {
    modifierWeights.set(mod, 1e6 + index2);
  });
  return (modifiers) => {
    const result = [];
    let currentSegment = [];
    for (let i = 0; i < modifiers.length; i++) {
      const modifier = modifiers[i];
      const isArbitrary = modifier[0] === "[";
      const isOrderSensitive = modifierWeights.has(modifier);
      if (isArbitrary || isOrderSensitive) {
        if (currentSegment.length > 0) {
          currentSegment.sort();
          result.push(...currentSegment);
          currentSegment = [];
        }
        result.push(modifier);
      } else {
        currentSegment.push(modifier);
      }
    }
    if (currentSegment.length > 0) {
      currentSegment.sort();
      result.push(...currentSegment);
    }
    return result;
  };
};
const createConfigUtils = (config) => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  sortModifiers: createSortModifiers(config),
  postfixLookupClassGroupIds: createPostfixLookupClassGroupIds(config),
  ...createClassGroupUtils(config)
});
const createPostfixLookupClassGroupIds = (config) => {
  const lookup = /* @__PURE__ */ Object.create(null);
  const classGroupIds = config.postfixLookupClassGroups;
  if (classGroupIds) {
    for (let i = 0; i < classGroupIds.length; i++) {
      lookup[classGroupIds[i]] = true;
    }
  }
  return lookup;
};
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds,
    sortModifiers,
    postfixLookupClassGroupIds
  } = configUtils;
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = "";
  for (let index2 = classNames.length - 1; index2 >= 0; index2 -= 1) {
    const originalClassName = classNames[index2];
    const {
      isExternal,
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    if (isExternal) {
      result = originalClassName + (result.length > 0 ? " " + result : result);
      continue;
    }
    let hasPostfixModifier = !!maybePostfixModifierPosition;
    let classGroupId;
    if (hasPostfixModifier) {
      const baseClassNameWithoutPostfix = baseClassName.substring(0, maybePostfixModifierPosition);
      classGroupId = getClassGroupId(baseClassNameWithoutPostfix);
      const classGroupIdWithPostfix = classGroupId && postfixLookupClassGroupIds[classGroupId] ? getClassGroupId(baseClassName) : void 0;
      if (classGroupIdWithPostfix && classGroupIdWithPostfix !== classGroupId) {
        classGroupId = classGroupIdWithPostfix;
        hasPostfixModifier = false;
      }
    } else {
      classGroupId = getClassGroupId(baseClassName);
    }
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = modifiers.length === 0 ? "" : modifiers.length === 1 ? modifiers[0] : sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.indexOf(classId) > -1) {
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i = 0; i < conflictGroups.length; ++i) {
      const group = conflictGroups[i];
      classGroupsInConflict.push(modifierId + group);
    }
    result = originalClassName + (result.length > 0 ? " " + result : result);
  }
  return result;
};
const twJoin = (...classLists) => {
  let index2 = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index2 < classLists.length) {
    if (argument = classLists[index2++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
const toValue = (mix) => {
  if (typeof mix === "string") {
    return mix;
  }
  let resolvedValue;
  let string = "";
  for (let k2 = 0; k2 < mix.length; k2++) {
    if (mix[k2]) {
      if (resolvedValue = toValue(mix[k2])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
const createTailwindMerge = (createConfigFirst, ...createConfigRest) => {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall;
  const initTailwindMerge = (classList) => {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  };
  const tailwindMerge = (classList) => {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  };
  functionToCall = initTailwindMerge;
  return (...args) => functionToCall(twJoin(...args));
};
const fallbackThemeArr = [];
const fromTheme = (key) => {
  const themeGetter = (theme) => theme[key] || fallbackThemeArr;
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
const arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
const arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
const fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/;
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isFraction = (value) => fractionRegex.test(value);
const isNumber = (value) => !!value && !Number.isNaN(Number(value));
const isInteger = (value) => !!value && Number.isInteger(Number(value));
const isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
const isTshirtSize = (value) => tshirtUnitRegex.test(value);
const isAny = () => true;
const isLengthOnly = (value) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
);
const isNever = () => false;
const isShadow = (value) => shadowRegex.test(value);
const isImage = (value) => imageRegex.test(value);
const isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value);
const isNamedContainerQuery = (value) => value.startsWith("@container") && (value[10] === "/" && value[11] !== void 0 || value[11] === "s" && value[16] !== void 0 && value.startsWith("-size/", 10) || value[11] === "n" && value[18] !== void 0 && value.startsWith("-normal/", 10));
const isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever);
const isArbitraryValue = (value) => arbitraryValueRegex.test(value);
const isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
const isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber);
const isArbitraryWeight = (value) => getIsArbitraryValue(value, isLabelWeight, isAny);
const isArbitraryFamilyName = (value) => getIsArbitraryValue(value, isLabelFamilyName, isNever);
const isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever);
const isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage);
const isArbitraryShadow = (value) => getIsArbitraryValue(value, isLabelShadow, isShadow);
const isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
const isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength);
const isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName);
const isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition);
const isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize);
const isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage);
const isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true);
const isArbitraryVariableWeight = (value) => getIsArbitraryVariable(value, isLabelWeight, true);
const getIsArbitraryValue = (value, testLabel, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
const getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
  const result = arbitraryVariableRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return shouldMatchNoLabel;
  }
  return false;
};
const isLabelPosition = (label) => label === "position" || label === "percentage";
const isLabelImage = (label) => label === "image" || label === "url";
const isLabelSize = (label) => label === "length" || label === "size" || label === "bg-size";
const isLabelLength = (label) => label === "length";
const isLabelNumber = (label) => label === "number";
const isLabelFamilyName = (label) => label === "family-name";
const isLabelWeight = (label) => label === "number" || label === "weight";
const isLabelShadow = (label) => label === "shadow";
const getDefaultConfig = () => {
  const themeColor = fromTheme("color");
  const themeFont = fromTheme("font");
  const themeText = fromTheme("text");
  const themeFontWeight = fromTheme("font-weight");
  const themeTracking = fromTheme("tracking");
  const themeLeading = fromTheme("leading");
  const themeBreakpoint = fromTheme("breakpoint");
  const themeContainer = fromTheme("container");
  const themeSpacing = fromTheme("spacing");
  const themeRadius = fromTheme("radius");
  const themeShadow = fromTheme("shadow");
  const themeInsetShadow = fromTheme("inset-shadow");
  const themeTextShadow = fromTheme("text-shadow");
  const themeDropShadow = fromTheme("drop-shadow");
  const themeBlur = fromTheme("blur");
  const themePerspective = fromTheme("perspective");
  const themeAspect = fromTheme("aspect");
  const themeEase = fromTheme("ease");
  const themeAnimate = fromTheme("animate");
  const scaleBreak = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const scalePosition = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ];
  const scalePositionWithArbitrary = () => [...scalePosition(), isArbitraryVariable, isArbitraryValue];
  const scaleOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const scaleOverscroll = () => ["auto", "contain", "none"];
  const scaleUnambiguousSpacing = () => [isArbitraryVariable, isArbitraryValue, themeSpacing];
  const scaleInset = () => [isFraction, "full", "auto", ...scaleUnambiguousSpacing()];
  const scaleGridTemplateColsRows = () => [isInteger, "none", "subgrid", isArbitraryVariable, isArbitraryValue];
  const scaleGridColRowStartAndEnd = () => ["auto", {
    span: ["full", isInteger, isArbitraryVariable, isArbitraryValue]
  }, isInteger, isArbitraryVariable, isArbitraryValue];
  const scaleGridColRowStartOrEnd = () => [isInteger, "auto", isArbitraryVariable, isArbitraryValue];
  const scaleGridAutoColsRows = () => ["auto", "min", "max", "fr", isArbitraryVariable, isArbitraryValue];
  const scaleAlignPrimaryAxis = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"];
  const scaleAlignSecondaryAxis = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"];
  const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
  const scaleSizing = () => [isFraction, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...scaleUnambiguousSpacing()];
  const scaleSizingInline = () => [isFraction, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...scaleUnambiguousSpacing()];
  const scaleSizingBlock = () => [isFraction, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...scaleUnambiguousSpacing()];
  const scaleColor = () => [themeColor, isArbitraryVariable, isArbitraryValue];
  const scaleBgPosition = () => [...scalePosition(), isArbitraryVariablePosition, isArbitraryPosition, {
    position: [isArbitraryVariable, isArbitraryValue]
  }];
  const scaleBgRepeat = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }];
  const scaleBgSize = () => ["auto", "cover", "contain", isArbitraryVariableSize, isArbitrarySize, {
    size: [isArbitraryVariable, isArbitraryValue]
  }];
  const scaleGradientStopPosition = () => [isPercent, isArbitraryVariableLength, isArbitraryLength];
  const scaleRadius = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    themeRadius,
    isArbitraryVariable,
    isArbitraryValue
  ];
  const scaleBorderWidth = () => ["", isNumber, isArbitraryVariableLength, isArbitraryLength];
  const scaleLineStyle = () => ["solid", "dashed", "dotted", "double"];
  const scaleBlendMode = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
  const scaleMaskImagePosition = () => [isNumber, isPercent, isArbitraryVariablePosition, isArbitraryPosition];
  const scaleBlur = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    themeBlur,
    isArbitraryVariable,
    isArbitraryValue
  ];
  const scaleRotate = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleScale = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleSkew = () => [isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleTranslate = () => [isFraction, "full", ...scaleUnambiguousSpacing()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [isTshirtSize],
      breakpoint: [isTshirtSize],
      color: [isAny],
      container: [isTshirtSize],
      "drop-shadow": [isTshirtSize],
      ease: ["in", "out", "in-out"],
      font: [isAnyNonArbitrary],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [isTshirtSize],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [isTshirtSize],
      shadow: [isTshirtSize],
      spacing: ["px", isNumber],
      text: [isTshirtSize],
      "text-shadow": [isTshirtSize],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", isFraction, isArbitraryValue, isArbitraryVariable, themeAspect]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Container Type
       * @see https://tailwindcss.com/docs/responsive-design#container-queries
       */
      "container-type": [{
        "@container": ["", "normal", "size", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [isNamedContainerQuery],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isNumber, isArbitraryValue, isArbitraryVariable, themeContainer]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": scaleBreak()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": scaleBreak()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: scalePositionWithArbitrary()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: scaleOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": scaleOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": scaleOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: scaleOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": scaleOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": scaleOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: scaleInset()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": scaleInset()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": scaleInset()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": scaleInset(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: scaleInset()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": scaleInset(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: scaleInset()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": scaleInset()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": scaleInset()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: scaleInset()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: scaleInset()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: scaleInset()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: scaleInset()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [isInteger, "auto", isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [isFraction, "full", "auto", themeContainer, ...scaleUnambiguousSpacing()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [isNumber, isFraction, "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [isInteger, "first", "last", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": scaleGridTemplateColsRows()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": scaleGridTemplateColsRows()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": scaleGridAutoColsRows()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": scaleGridAutoColsRows()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: scaleUnambiguousSpacing()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": scaleUnambiguousSpacing()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": scaleUnambiguousSpacing()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...scaleAlignPrimaryAxis(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...scaleAlignSecondaryAxis(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...scaleAlignPrimaryAxis()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...scaleAlignSecondaryAxis(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...scaleAlignSecondaryAxis(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": scaleAlignPrimaryAxis()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...scaleAlignSecondaryAxis(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: scaleUnambiguousSpacing()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: scaleMargin()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: scaleMargin()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: scaleMargin()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: scaleMargin()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: scaleMargin()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: scaleMargin()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: scaleMargin()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: scaleMargin()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: scaleMargin()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: scaleMargin()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: scaleMargin()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": scaleUnambiguousSpacing()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": scaleUnambiguousSpacing()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: scaleSizing()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...scaleSizingInline()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...scaleSizingInline()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...scaleSizingInline()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...scaleSizingBlock()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...scaleSizingBlock()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...scaleSizingBlock()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [themeContainer, "screen", ...scaleSizing()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          themeContainer,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...scaleSizing()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          themeContainer,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [themeBreakpoint]
          },
          ...scaleSizing()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...scaleSizing()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...scaleSizing()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...scaleSizing()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", themeText, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [themeFontWeight, isArbitraryVariableWeight, isArbitraryWeight]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", isPercent, isArbitraryValue]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isArbitraryVariableFamilyName, isArbitraryFamilyName, themeFont]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [isArbitraryValue]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [themeTracking, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [isNumber, "none", isArbitraryVariable, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          themeLeading,
          ...scaleUnambiguousSpacing()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: scaleColor()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: scaleColor()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...scaleLineStyle(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [isNumber, "from-font", "auto", isArbitraryVariable, isArbitraryLength]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: scaleColor()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [isNumber, "auto", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: scaleUnambiguousSpacing()
      }],
      /**
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [isInteger, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryVariable, isArbitraryValue]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: scaleBgPosition()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: scaleBgRepeat()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: scaleBgSize()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, isInteger, isArbitraryVariable, isArbitraryValue],
          radial: ["", isArbitraryVariable, isArbitraryValue],
          conic: [isInteger, isArbitraryVariable, isArbitraryValue]
        }, isArbitraryVariableImage, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: scaleColor()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: scaleColor()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: scaleColor()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: scaleColor()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: scaleRadius()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": scaleRadius()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": scaleRadius()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": scaleRadius()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": scaleRadius()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": scaleRadius()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": scaleRadius()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": scaleRadius()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": scaleRadius()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": scaleRadius()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": scaleRadius()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": scaleRadius()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": scaleRadius()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": scaleRadius()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": scaleRadius()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: scaleBorderWidth()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": scaleBorderWidth()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": scaleBorderWidth()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": scaleBorderWidth()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": scaleBorderWidth()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": scaleBorderWidth()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": scaleBorderWidth()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": scaleBorderWidth()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": scaleBorderWidth()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": scaleBorderWidth()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": scaleBorderWidth()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": scaleBorderWidth()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": scaleBorderWidth()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...scaleLineStyle(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...scaleLineStyle(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: scaleColor()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": scaleColor()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": scaleColor()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": scaleColor()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": scaleColor()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": scaleColor()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": scaleColor()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": scaleColor()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": scaleColor()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": scaleColor()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": scaleColor()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: scaleColor()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...scaleLineStyle(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", isNumber, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: scaleColor()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          themeShadow,
          isArbitraryVariableShadow,
          isArbitraryShadow
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: scaleColor()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", themeInsetShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": scaleColor()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: scaleBorderWidth()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: scaleColor()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [isNumber, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": scaleColor()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": scaleBorderWidth()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": scaleColor()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", themeTextShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": scaleColor()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...scaleBlendMode(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": scaleBlendMode()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [isNumber]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": scaleMaskImagePosition()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": scaleMaskImagePosition()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": scaleColor()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": scaleColor()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": scaleMaskImagePosition()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": scaleMaskImagePosition()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": scaleColor()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": scaleColor()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": scaleMaskImagePosition()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": scaleMaskImagePosition()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": scaleColor()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": scaleColor()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": scaleMaskImagePosition()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": scaleMaskImagePosition()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": scaleColor()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": scaleColor()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": scaleMaskImagePosition()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": scaleMaskImagePosition()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": scaleColor()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": scaleColor()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": scaleMaskImagePosition()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": scaleMaskImagePosition()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": scaleColor()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": scaleColor()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": scaleMaskImagePosition()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": scaleMaskImagePosition()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": scaleColor()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": scaleColor()
      }],
      "mask-image-radial": [{
        "mask-radial": [isArbitraryVariable, isArbitraryValue]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": scaleMaskImagePosition()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": scaleMaskImagePosition()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": scaleColor()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": scaleColor()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": scalePosition()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [isNumber]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": scaleMaskImagePosition()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": scaleMaskImagePosition()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": scaleColor()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": scaleColor()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: scaleBgPosition()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: scaleBgRepeat()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: scaleBgSize()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", isArbitraryVariable, isArbitraryValue]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: scaleBlur()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          themeDropShadow,
          isArbitraryVariableShadow,
          isArbitraryShadow
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": scaleColor()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": scaleBlur()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": scaleUnambiguousSpacing()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [isNumber, "initial", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", themeEase, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", themeAnimate, isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [themePerspective, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": scalePositionWithArbitrary()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: scaleRotate()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": scaleRotate()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": scaleRotate()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": scaleRotate()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: scaleScale()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": scaleScale()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": scaleScale()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": scaleScale()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: scaleSkew()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": scaleSkew()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": scaleSkew()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [isArbitraryVariable, isArbitraryValue, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: scalePositionWithArbitrary()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: scaleTranslate()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": scaleTranslate()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": scaleTranslate()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": scaleTranslate()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      /**
       * Zoom
       * @see https://tailwindcss.com/docs/zoom
       */
      zoom: [{
        zoom: [isInteger, isArbitraryVariable, isArbitraryValue]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: scaleColor()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: scaleColor()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scrollbar Thumb Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-thumb-color": [{
        "scrollbar-thumb": scaleColor()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": scaleColor()
      }],
      /**
       * Scrollbar Gutter
       * @see https://tailwindcss.com/docs/scrollbar-gutter
       */
      "scrollbar-gutter": [{
        "scrollbar-gutter": ["auto", "stable", "both"]
      }],
      /**
       * Scrollbar Width
       * @see https://tailwindcss.com/docs/scrollbar-width
       */
      "scrollbar-w": [{
        scrollbar: ["auto", "thin", "none"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryVariable, isArbitraryValue]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...scaleColor()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isNumber, isArbitraryVariableLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...scaleColor()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      "container-named": ["container-type"],
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    postfixLookupClassGroups: ["container-type"],
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
};
const mergeConfigs = (baseConfig, {
  cacheSize,
  prefix,
  experimentalParseClassName,
  extend = {},
  override = {}
}) => {
  overrideProperty(baseConfig, "cacheSize", cacheSize);
  overrideProperty(baseConfig, "prefix", prefix);
  overrideProperty(baseConfig, "experimentalParseClassName", experimentalParseClassName);
  overrideConfigProperties(baseConfig.theme, override.theme);
  overrideConfigProperties(baseConfig.classGroups, override.classGroups);
  overrideConfigProperties(baseConfig.conflictingClassGroups, override.conflictingClassGroups);
  overrideConfigProperties(baseConfig.conflictingClassGroupModifiers, override.conflictingClassGroupModifiers);
  overrideProperty(baseConfig, "postfixLookupClassGroups", override.postfixLookupClassGroups);
  overrideProperty(baseConfig, "orderSensitiveModifiers", override.orderSensitiveModifiers);
  mergeConfigProperties(baseConfig.theme, extend.theme);
  mergeConfigProperties(baseConfig.classGroups, extend.classGroups);
  mergeConfigProperties(baseConfig.conflictingClassGroups, extend.conflictingClassGroups);
  mergeConfigProperties(baseConfig.conflictingClassGroupModifiers, extend.conflictingClassGroupModifiers);
  mergeArrayProperties(baseConfig, extend, "postfixLookupClassGroups");
  mergeArrayProperties(baseConfig, extend, "orderSensitiveModifiers");
  return baseConfig;
};
const overrideProperty = (baseObject, overrideKey, overrideValue) => {
  if (overrideValue !== void 0) {
    baseObject[overrideKey] = overrideValue;
  }
};
const overrideConfigProperties = (baseObject, overrideObject) => {
  if (overrideObject) {
    for (const key in overrideObject) {
      overrideProperty(baseObject, key, overrideObject[key]);
    }
  }
};
const mergeConfigProperties = (baseObject, mergeObject) => {
  if (mergeObject) {
    for (const key in mergeObject) {
      mergeArrayProperties(baseObject, mergeObject, key);
    }
  }
};
const mergeArrayProperties = (baseObject, mergeObject, key) => {
  const mergeValue = mergeObject[key];
  if (mergeValue !== void 0) {
    baseObject[key] = baseObject[key] ? baseObject[key].concat(mergeValue) : mergeValue;
  }
};
const extendTailwindMerge = (configExtension, ...createConfig) => typeof configExtension === "function" ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(() => mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
const twMerge = extendTailwindMerge({
  override: {
    classGroups: {
      "font-size": [
        "text-2xs",
        "text-xs",
        "text-s",
        "text-r",
        "text-m",
        "text-l",
        "text-2xl",
        // Old ones
        "text-h1",
        "text-h2",
        "text-default",
        "text-small",
        "text-tiny"
        // New ones
      ]
    }
  },
  extend: {
    theme: {
      spacing: ["3xl", "2xl", "xl", "lg", "md", "sm", "xs", "2xs"]
    }
  }
});
const cn = (...classLists) => twMerge(clsx(classLists));
const CtaV2ClassName = cva(
  "text-default font-medium w-fit rounded-md inline-flex items-center gap-xs cursor-pointer transition-colors border border-solid disabled:cursor-default focus-visible:outline-2 outline-offset-2",
  {
    variants: {
      variant: {
        primary: "outline-purple-primary",
        destructive: "bg-red-primary border-red-primary text-white enabled:hover:bg-red-hover enabled:hover:border-red-hover disabled:bg-red-disabled disabled:border-red-disabled dark:text-grey-primary dark:disabled:text-grey-secondary outline-red-primary",
        secondary: "bg-surface-card border-grey-border text-grey-primary enabled:hover:bg-grey-background disabled:bg-grey-background disabled:text-grey-disabled dark:enabled:hover:bg-grey-background-light dark:disabled:bg-grey-background-light outline-purple-primary",
        warning: "outline-orange-primary",
        success: "outline-green-primary"
      },
      appearance: {
        filled: "",
        stroked: "",
        link: "",
        filter: ""
      },
      // Hue for filled buttons. Mainly meaningful with variant="primary"
      // (Figma "Color" axis: Primary / Grey / Red). Defaults to primary.
      color: {
        primary: "",
        grey: "",
        red: ""
      },
      mode: {
        normal: "",
        icon: "aspect-square justify-center"
      },
      // Heights match Figma: small = 24px, medium = 32px, large = 40px.
      size: {
        small: "text-small",
        medium: "",
        large: ""
      }
    },
    compoundVariants: [
      // Size + Mode — heights match Figma (small 24px / medium 32px / large 40px).
      // Icon mode is a square that scales with size (icon glyph: 16 / 20 / 24px).
      {
        size: "small",
        mode: "normal",
        class: "h-6 px-sm py-xs"
      },
      {
        size: "small",
        mode: "icon",
        class: "size-6 p-xs"
      },
      {
        size: "medium",
        mode: "normal",
        class: "h-8 p-sm"
      },
      {
        size: "medium",
        mode: "icon",
        class: "size-8 p-sm"
      },
      {
        size: "large",
        mode: "normal",
        class: "h-10 p-sm"
      },
      {
        size: "large",
        mode: "icon",
        class: "size-10 p-sm"
      },
      // Subtle elevation on filled + stroked (Figma "Shadow/light"); not on link
      {
        appearance: ["filled", "stroked"],
        class: "shadow-[0px_4px_10px_0px_rgba(0,0,0,0.05)]"
      },
      // Primary + Filled + Primary color (default purple)
      {
        variant: "primary",
        appearance: "filled",
        color: "primary",
        class: "bg-purple-primary border-purple-primary text-white enabled:hover:bg-purple-hover enabled:hover:border-purple-hover disabled:bg-purple-disabled disabled:border-purple-disabled dark:text-grey-primary dark:enabled:hover:bg-purple-hover dark:enabled:hover:border-purple-hover"
      },
      // Primary + Filled + Grey color (Figma Color=Grey)
      {
        variant: "primary",
        appearance: "filled",
        color: "grey",
        class: "bg-grey-secondary border-grey-secondary text-grey-white enabled:hover:bg-[#2b2b2c] enabled:hover:border-[#2b2b2c] disabled:bg-grey-disabled disabled:border-grey-disabled focus-visible:outline-grey-secondary dark:bg-[#838292] dark:border-[#838292] dark:text-grey-background dark:enabled:hover:bg-grey-secondary dark:enabled:hover:border-grey-secondary dark:disabled:bg-grey-disabled dark:disabled:border-grey-disabled"
      },
      // Primary + Filled + Red color (Figma Color=Red) — red tokens auto-swap in dark
      {
        variant: "primary",
        appearance: "filled",
        color: "red",
        class: "bg-red-primary border-red-primary text-white enabled:hover:bg-red-hover enabled:hover:border-red-hover disabled:bg-red-disabled disabled:border-red-disabled focus-visible:outline-red-primary dark:text-grey-primary"
      },
      // Primary + Stroked
      {
        variant: "primary",
        appearance: "stroked",
        class: "bg-transparent border-purple-primary text-purple-primary enabled:hover:bg-purple-primary enabled:hover:border-purple-primary enabled:hover:text-white disabled:bg-grey-background disabled:border-grey-border disabled:text-grey-disabled dark:border-purple-hover dark:text-purple-hover dark:enabled:hover:bg-purple-primary dark:enabled:hover:border-purple-primary dark:enabled:hover:text-grey-white dark:disabled:bg-transparent dark:disabled:border-purple-disabled dark:disabled:text-purple-disabled"
      },
      // Primary + Link
      {
        variant: "primary",
        appearance: "link",
        class: "bg-transparent border-transparent p-0 h-6 rounded-none enabled:hover:underline enabled:hover:bg-transparent text-purple-primary enabled:hover:text-purple-hover disabled:text-grey-disabled disabled:no-underline dark:text-purple-hover dark:enabled:hover:text-purple-hover dark:disabled:text-purple-disabled"
      },
      // Primary + Filter (FiltersBar trigger — lighter than filled primary)
      {
        variant: "primary",
        appearance: "filter",
        class: "rounded-sm bg-purple-background-light border-transparent text-purple-primary enabled:hover:bg-purple-background disabled:bg-purple-background-light disabled:text-grey-disabled focus-visible:outline-purple-primary"
      },
      // Secondary + Stroked
      {
        variant: "secondary",
        appearance: "stroked",
        class: "dark:bg-transparent dark:border-grey-secondary dark:text-grey-secondary dark:enabled:hover:border-grey-primary dark:enabled:hover:text-grey-primary dark:enabled:hover:bg-transparent dark:disabled:border-grey-disabled dark:disabled:text-grey-disabled dark:disabled:bg-transparent"
      },
      // Secondary + Link
      {
        variant: "secondary",
        appearance: "link",
        class: "bg-transparent border-transparent p-0 h-6 rounded-none enabled:hover:underline enabled:hover:bg-transparent text-grey-secondary enabled:hover:text-grey-primary disabled:text-grey-disabled disabled:no-underline dark:text-grey-secondary dark:enabled:hover:text-grey-primary dark:disabled:text-grey-disabled"
      },
      // Warning + Filled
      {
        variant: "warning",
        appearance: "filled",
        class: "bg-orange-primary border-orange-primary text-white enabled:hover:bg-orange-hover enabled:hover:border-orange-hover disabled:bg-orange-primary/50 disabled:border-orange-primary/50 focus-visible:outline-orange-primary"
      },
      // Warning + Stroked
      {
        variant: "warning",
        appearance: "stroked",
        class: "bg-transparent border-orange-primary text-orange-primary enabled:hover:bg-orange-primary enabled:hover:text-white disabled:bg-grey-background disabled:border-grey-border disabled:text-grey-disabled focus-visible:outline-orange-primary"
      },
      // Success + Filled
      {
        variant: "success",
        appearance: "filled",
        class: "bg-green-primary border-green-primary text-white enabled:hover:bg-green-hover enabled:hover:border-green-hover disabled:bg-green-disabled disabled:border-green-disabled focus-visible:outline-green-primary"
      },
      // Success + Stroked
      {
        variant: "success",
        appearance: "stroked",
        class: "bg-transparent border-green-primary text-green-primary enabled:hover:bg-green-primary enabled:hover:text-white disabled:bg-grey-background disabled:border-grey-border disabled:text-grey-disabled focus-visible:outline-green-primary"
      },
      // destructive stroked
      {
        variant: "destructive",
        appearance: "stroked",
        class: "bg-transparent border-red-primary text-red-primary enabled:hover:bg-red-primary enabled:hover:text-white disabled:bg-grey-background disabled:border-grey-border disabled:text-grey-disabled focus-visible:outline-red-primary"
      }
    ],
    defaultVariants: {
      variant: "primary",
      mode: "normal",
      size: "small",
      appearance: "filled",
      color: "primary"
    }
  }
);
const Button = function Button2({
  ref,
  variant = "primary",
  mode = "normal",
  size: size2 = "small",
  appearance,
  color = "primary",
  className,
  type = "button",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      ref,
      type,
      className: cn(CtaV2ClassName({ variant, mode, size: size2, appearance, color }), className),
      ...props
    }
  );
};
var __defProp$q = Object.defineProperty;
var __name$q = (target, value) => __defProp$q(target, "name", { value, configurable: true });
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return /* @__PURE__ */ __name$q(function handleEvent(event) {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !event || !event.defaultPrevented) {
      return ourEventHandler?.(event);
    }
  }, "handleEvent");
}
__name$q(composeEventHandlers, "composeEventHandlers");
function getOwnerWindow(element) {
  {
    throw new Error("Cannot access window outside of the DOM");
  }
}
__name$q(getOwnerWindow, "getOwnerWindow");
function getOwnerDocument(element) {
  {
    throw new Error("Cannot access document outside of the DOM");
  }
}
__name$q(getOwnerDocument, "getOwnerDocument");
function getActiveElement(node, activeDescendant = false) {
  const { activeElement } = getOwnerDocument();
  if (!activeElement?.nodeName) {
    return null;
  }
  if (isFrame(activeElement) && activeElement.contentDocument) {
    return getActiveElement(activeElement.contentDocument.body, activeDescendant);
  }
  if (activeDescendant) {
    const id = activeElement.getAttribute("aria-activedescendant");
    if (id) {
      const element = getOwnerDocument().getElementById(id);
      if (element) {
        return element;
      }
    }
  }
  return activeElement;
}
__name$q(getActiveElement, "getActiveElement");
function isFrame(element) {
  return element.tagName === "IFRAME";
}
__name$q(isFrame, "isFrame");
var __defProp$p = Object.defineProperty;
var __name$p = (target, value) => __defProp$p(target, "name", { value, configurable: true });
// @__NO_SIDE_EFFECTS__
function createContext2(rootComponentName, defaultContext) {
  const Context = reactExports.createContext(defaultContext);
  Context.displayName = rootComponentName + "Context";
  const Provider = /* @__PURE__ */ __name$p((props) => {
    const { children, ...context } = props;
    const value = reactExports.useMemo(() => context, Object.values(context));
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value, children });
  }, "Provider");
  Provider.displayName = rootComponentName + "Provider";
  function useContext2(consumerName, options2 = {}) {
    const { optional = false } = options2;
    const context = reactExports.useContext(Context);
    if (context) return context;
    if (defaultContext !== void 0) return defaultContext;
    if (optional) return void 0;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  __name$p(useContext2, "useContext");
  return [Provider, useContext2];
}
__name$p(createContext2, "createContext");
// @__NO_SIDE_EFFECTS__
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = reactExports.createContext(defaultContext);
    BaseContext.displayName = rootComponentName + "Context";
    const index2 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = /* @__PURE__ */ __name$p((props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index2] || BaseContext;
      const value = reactExports.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value, children });
    }, "Provider");
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName, scope, options2 = {}) {
      const { optional = false } = options2;
      const Context = scope?.[scopeName]?.[index2] || BaseContext;
      const context = reactExports.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      if (optional) return void 0;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    __name$p(useContext2, "useContext");
    return [Provider, useContext2];
  }
  __name$p(createContext3, "createContext");
  const createScope = /* @__PURE__ */ __name$p(() => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return reactExports.createContext(defaultContext);
    });
    return /* @__PURE__ */ __name$p(function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return reactExports.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    }, "useScope");
  }, "createScope");
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
__name$p(createContextScope, "createContextScope");
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = /* @__PURE__ */ __name$p(() => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return /* @__PURE__ */ __name$p(function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return reactExports.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    }, "useComposedScopes");
  }, "createScope");
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}
__name$p(composeContextScopes, "composeContextScopes");
var useLayoutEffect2 = globalThis?.document ? reactExports.useLayoutEffect : () => {
};
var __defProp$o = Object.defineProperty;
var __name$o = (target, value) => __defProp$o(target, "name", { value, configurable: true });
var useReactEffectEvent = React$1[" useEffectEvent ".trim().toString()];
var useReactInsertionEffect = React$1[" useInsertionEffect ".trim().toString()];
function useEffectEvent(callback) {
  if (typeof useReactEffectEvent === "function") {
    return useReactEffectEvent(callback);
  }
  const ref = reactExports.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  if (typeof useReactInsertionEffect === "function") {
    useReactInsertionEffect(() => {
      ref.current = callback;
    });
  } else {
    useLayoutEffect2(() => {
      ref.current = callback;
    });
  }
  return reactExports.useMemo(() => ((...args) => ref.current?.(...args)), []);
}
__name$o(useEffectEvent, "useEffectEvent");
var __defProp$n = Object.defineProperty;
var __name$n = (target, value) => __defProp$n(target, "name", { value, configurable: true });
var useInsertionEffect = React$1[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({
  prop,
  defaultProp,
  onChange = /* @__PURE__ */ __name$n(() => {
  }, "onChange"),
  caller
}) {
  const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  const setValue = reactExports.useCallback(
    (nextValue) => {
      if (isControlled) {
        const value2 = isFunction$2(nextValue) ? nextValue(prop) : nextValue;
        if (value2 !== prop) {
          onChangeRef.current?.(value2);
        }
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, onChangeRef]
  );
  return [value, setValue];
}
__name$n(useControllableState, "useControllableState");
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const [value, setValue] = reactExports.useState(defaultProp);
  const prevValueRef = reactExports.useRef(value);
  const onChangeRef = reactExports.useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  reactExports.useEffect(() => {
    if (prevValueRef.current !== value) {
      onChangeRef.current?.(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef]);
  return [value, setValue, onChangeRef];
}
__name$n(useUncontrolledState, "useUncontrolledState");
function isFunction$2(value) {
  return typeof value === "function";
}
__name$n(isFunction$2, "isFunction");
var SYNC_STATE = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function useControllableStateReducer(reducer, userArgs, initialArg, init) {
  const { prop: controlledState, defaultProp, onChange: onChangeProp, caller } = userArgs;
  const isControlled = controlledState !== void 0;
  const onChange = useEffectEvent(onChangeProp);
  const args = [{ ...initialArg, state: defaultProp }];
  if (init) {
    args.push(init);
  }
  const [internalState, dispatch] = reactExports.useReducer(
    (state2, action) => {
      if (action.type === SYNC_STATE) {
        return { ...state2, state: action.state };
      }
      const next = reducer(state2, action);
      if (isControlled && !Object.is(next.state, state2.state)) {
        onChange(next.state);
      }
      return next;
    },
    ...args
  );
  const uncontrolledState = internalState.state;
  const prevValueRef = reactExports.useRef(uncontrolledState);
  reactExports.useEffect(() => {
    if (prevValueRef.current !== uncontrolledState) {
      prevValueRef.current = uncontrolledState;
      if (!isControlled) {
        onChange(uncontrolledState);
      }
    }
  }, [uncontrolledState, prevValueRef, isControlled]);
  const state = reactExports.useMemo(() => {
    const isControlled2 = controlledState !== void 0;
    if (isControlled2) {
      return { ...internalState, state: controlledState };
    }
    return internalState;
  }, [internalState, controlledState]);
  reactExports.useEffect(() => {
    if (isControlled && !Object.is(controlledState, internalState.state)) {
      dispatch({ type: SYNC_STATE, state: controlledState });
    }
  }, [controlledState, internalState.state, isControlled]);
  return [state, dispatch];
}
__name$n(useControllableStateReducer, "useControllableStateReducer");
var __defProp$m = Object.defineProperty;
var __name$m = (target, value) => __defProp$m(target, "name", { value, configurable: true });
function setRef$1(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
__name$m(setRef$1, "setRef");
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef$1(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef$1(refs[i], null);
          }
        }
      };
    }
  };
}
__name$m(composeRefs, "composeRefs");
function useComposedRefs(...refs) {
  return reactExports.useCallback(composeRefs(...refs), refs);
}
__name$m(useComposedRefs, "useComposedRefs");
const sides = ["top", "right", "bottom", "left"];
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v) => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function clamp$1(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  const firstChar = placement[0];
  return firstChar === "t" || firstChar === "b" ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.includes("start") ? placement.replace("start", "end") : placement.replace("end", "start");
}
const lrPlacement = ["left", "right"];
const rlPlacement = ["right", "left"];
const tbPlacement = ["top", "bottom"];
const btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  const side = getSide(placement);
  return oppositeSideMap[side] + placement.slice(side.length);
}
function expandPaddingObject(padding) {
  var _padding$top, _padding$right, _padding$bottom, _padding$left;
  return {
    top: (_padding$top = padding.top) != null ? _padding$top : 0,
    right: (_padding$right = padding.right) != null ? _padding$right : 0,
    bottom: (_padding$bottom = padding.bottom) != null ? _padding$bottom : 0,
    left: (_padding$left = padding.left) != null ? _padding$left : 0
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  const alignment = getAlignment(placement);
  if (alignment) {
    coords[alignmentAxis] += commonAlign * (alignment === "end" ? 1 : -1) * (rtl && isVertical ? -1 : 1);
  }
  return coords;
}
async function detectOverflow(state, options2) {
  var _await$platform$isEle;
  if (options2 === void 0) {
    options2 = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options2, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) && await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
const MAX_RESET_COUNT = 50;
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const platformWithDetectOverflow = platform2.detectOverflow ? platform2 : {
    ...platform2,
    detectOverflow
  };
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let resetCount = 0;
  const middlewareData = {};
  for (let i = 0; i < middleware.length; i++) {
    const currentMiddleware = middleware[i];
    if (!currentMiddleware) {
      continue;
    }
    const {
      name,
      fn
    } = currentMiddleware;
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platformWithDetectOverflow,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData[name] = {
      ...middlewareData[name],
      ...data
    };
    if (reset && resetCount < MAX_RESET_COUNT) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
const arrow$3 = (options2) => ({
  name: "arrow",
  options: options2,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options2, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp$1(minPadding, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < minPadding ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < minPadding ? center - minPadding : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
const flip$2 = function(options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  return {
    name: "flip",
    options: options2,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options2, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await platform2.detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
const hide$2 = function(options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  return {
    name: "hide",
    options: options2,
    async fn(state) {
      const {
        rects,
        platform: platform2
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options2, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await platform2.detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await platform2.detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
const originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state, options2) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options2, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset$2 = function(options2) {
  if (options2 === void 0) {
    options2 = 0;
  }
  return {
    name: "offset",
    options: options2,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options2);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
const shift$2 = function(options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  return {
    name: "shift",
    options: options2,
    async fn(state) {
      const {
        x,
        y,
        placement,
        platform: platform2
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options2, state);
      const coords = {
        x,
        y
      };
      const overflow = await platform2.detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const clampCoord = (axis, coord) => clamp$1(coord + overflow[axis === "y" ? "top" : "left"], coord, coord - overflow[axis === "y" ? "bottom" : "right"]);
      if (checkMainAxis) {
        mainAxisCoord = clampCoord(mainAxis, mainAxisCoord);
      }
      if (checkCrossAxis) {
        crossAxisCoord = clampCoord(crossAxis, crossAxisCoord);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
const limitShift$2 = function(options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  return {
    options: options2,
    fn(state) {
      var _rawOffset$mainAxis, _rawOffset$crossAxis;
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options2, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset2, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: (_rawOffset$mainAxis = rawOffset.mainAxis) != null ? _rawOffset$mainAxis : 0,
        crossAxis: (_rawOffset$crossAxis = rawOffset.crossAxis) != null ? _rawOffset$crossAxis : 0
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = originSides.has(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
const size$2 = function(options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  return {
    name: "size",
    options: options2,
    async fn(state) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options2, state);
      const overflow = await platform2.detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const shiftData = state.middlewareData.shift;
      const noShift = !shiftData;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (shiftData != null && shiftData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if (shiftData != null && shiftData.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        if (isYAxis) {
          availableWidth = width - 2 * max(overflow.left, overflow.right);
        } else {
          availableHeight = height - 2 * max(overflow.top, overflow.bottom);
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};
function getNodeName(node) {
  if (isNode()) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode() ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  {
    return false;
  }
}
function isElement(value) {
  {
    return false;
  }
}
function isHTMLElement(value) {
  {
    return false;
  }
}
function isShadowRoot(value) {
  {
    return false;
  }
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
}
function isTableElement(element) {
  return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
  try {
    if (element.matches(":popover-open")) {
      return true;
    }
  } catch (_e2) {
  }
  try {
    return element.matches(":modal");
  } catch (_e2) {
    return false;
  }
}
const willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
const containRe = /paint|layout|strict|content/;
const isNotNone = (value) => !!value && value !== "none";
let isWebKitValue;
function isContainingBlock(elementOrCss) {
  const css = isElement() ? getComputedStyle$1(elementOrCss) : elementOrCss;
  return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || "") || containRe.test(css.contain || "");
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement() && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (isWebKitValue == null) {
    isWebKitValue = typeof CSS !== "undefined" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
  }
  return isWebKitValue;
}
function isLastTraversableNode(node) {
  return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement()) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot() && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot() ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return (node.ownerDocument || node).body;
  }
  if (isHTMLElement() && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  } else {
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement();
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement() ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement()) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $: $2
  } = getCssDimensions(domElement);
  let x = ($2 ? round(rect.width) : rect.width) / width;
  let y = ($2 ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
const noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  return !!floatingOffsetParent && isFixed && floatingOffsetParent === getWindow(element);
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement()) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement && offsetParent) {
    const win = getWindow(domElement);
    const offsetWin = isElement() ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement();
  if (isOffsetParentAnElement || !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return element.getClientRects ? Array.from(element.getClientRects()) : [];
}
function getDocumentRect(html) {
  const scroll = getNodeScroll(html);
  const body = html.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(html);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
const SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy, rootBoundary) {
  if (rootBoundary === void 0) {
    rootBoundary = "viewport";
  }
  const isLayoutViewport = rootBoundary === "layoutViewport";
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    const layoutRelativeClientCoords = !isWebKit() || strategy === "fixed";
    if (isLayoutViewport) {
      if (!layoutRelativeClientCoords) {
        x = -visualViewport.offsetLeft;
        y = -visualViewport.offsetTop;
      }
    } else {
      width = visualViewport.width;
      height = visualViewport.height;
      if (layoutRelativeClientCoords) {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const reservedWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    const gutter = getComputedStyle(html).scrollbarGutter === "stable both-edges" ? reservedWidth / 2 : reservedWidth;
    if (gutter <= SCROLLBAR_MAX) {
      width -= gutter;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = getScale(element);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport" || clippingAncestor === "layoutViewport") {
    rect = getViewportRect(element, strategy, clippingAncestor);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement()) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement() && getNodeName(el) !== "body");
  let lastKeptComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement() && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    const lastPosition = lastKeptComputedStyle ? lastKeptComputedStyle.position : elementIsFixed ? "fixed" : "";
    const shouldDropCurrentNode = !currentNodeIsContaining && (lastPosition === "fixed" || lastPosition === "absolute" && computedStyle.position === "static");
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      lastKeptComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
  let top = firstRect.top;
  let right = firstRect.right;
  let bottom = firstRect.bottom;
  let left = firstRect.left;
  for (let i = 1; i < clippingAncestors.length; i++) {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i], strategy);
    top = max(rect.top, top);
    right = min(rect.right, right);
    bottom = min(rect.bottom, bottom);
    left = max(rect.left, left);
  }
  return {
    width: right - left,
    height: bottom - top,
    x: left,
    y: top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement();
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  if (!isOffsetParentAnElement && documentElement) {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle$1(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement() || getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement()) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement() && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
const getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle$1(element).direction === "rtl";
}
const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove, ancestorResize) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options2 = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (!rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        return refresh();
      }
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options2,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (_e2) {
      io = new IntersectionObserver(handleObserve, options2);
    }
    io.observe(element);
  }
  const win = getWindow(element);
  const handleResize = () => refresh(ancestorResize);
  win.addEventListener("resize", handleResize);
  refresh(true);
  return () => {
    win.removeEventListener("resize", handleResize);
    cleanup();
  };
}
function autoUpdate(reference, floating, update, options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options2;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...floating ? getOverflowAncestors(floating) : []] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update);
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update, ancestorResize) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    if (floating) {
      resizeObserver.observe(floating);
    }
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
const offset$1 = offset$2;
const shift$1 = shift$2;
const flip$1 = flip$2;
const size$1 = size$2;
const hide$1 = hide$2;
const arrow$2 = arrow$3;
const limitShift$1 = limitShift$2;
const computePosition = (reference, floating, options2) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = options2 != null ? options2 : {};
  const platformWithCache = {
    ...platform,
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
var reactDomExports = requireReactDom();
const ReactDOM = /* @__PURE__ */ getDefaultExportFromCjs(reactDomExports);
var isClient = typeof document !== "undefined";
var noop = function noop2() {
};
var index = isClient ? reactExports.useLayoutEffect : noop;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  {
    return 1;
  }
}
function roundByDPR(element, value) {
  const dpr = getDPR();
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = reactExports.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options2;
  const [data, setData] = reactExports.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = reactExports.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = reactExports.useState(null);
  const [_floating, _setFloating] = reactExports.useState(null);
  const setReference = reactExports.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = reactExports.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = reactExports.useRef(null);
  const floatingRef = reactExports.useRef(null);
  const dataRef = reactExports.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const openRef = useLatestRef(open);
  const update = reactExports.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        reactDomExports.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = reactExports.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = reactExports.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = reactExports.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = reactExports.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return reactExports.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
const arrow$1 = (options2) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options: options2,
    fn(state) {
      const {
        element,
        padding
      } = typeof options2 === "function" ? options2(state) : options2;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow$2({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow$2({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
const offset = (options2, deps) => {
  const result = offset$1(options2);
  return {
    name: result.name,
    fn: result.fn,
    options: [options2, deps]
  };
};
const shift = (options2, deps) => {
  const result = shift$1(options2);
  return {
    name: result.name,
    fn: result.fn,
    options: [options2, deps]
  };
};
const limitShift = (options2, deps) => {
  const result = limitShift$1(options2);
  return {
    fn: result.fn,
    options: [options2, deps]
  };
};
const flip = (options2, deps) => {
  const result = flip$1(options2);
  return {
    name: result.name,
    fn: result.fn,
    options: [options2, deps]
  };
};
const size = (options2, deps) => {
  const result = size$1(options2);
  return {
    name: result.name,
    fn: result.fn,
    options: [options2, deps]
  };
};
const hide = (options2, deps) => {
  const result = hide$1(options2);
  return {
    name: result.name,
    fn: result.fn,
    options: [options2, deps]
  };
};
const arrow = (options2, deps) => {
  const result = arrow$1(options2);
  return {
    name: result.name,
    fn: result.fn,
    options: [options2, deps]
  };
};
var __defProp$l = Object.defineProperty;
var __name$l = (target, value) => __defProp$l(target, "name", { value, configurable: true });
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const Slot2 = reactExports.forwardRef((props, forwardedRef) => {
    let { children, ...slotProps } = props;
    let slottableElement = null;
    let hasSlottable = false;
    const newChildren = [];
    if (isLazyComponent(children) && typeof use === "function") {
      children = use(children._payload);
    }
    reactExports.Children.forEach(children, (maybeSlottable) => {
      if (isSlottable(maybeSlottable)) {
        hasSlottable = true;
        const slottable = maybeSlottable;
        let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
        if (isLazyComponent(child) && typeof use === "function") {
          child = use(child._payload);
        }
        slottableElement = getSlottableElementFromSlottable(slottable, child);
        newChildren.push(slottableElement?.props?.children);
      } else {
        newChildren.push(maybeSlottable);
      }
    });
    if (slottableElement) {
      slottableElement = reactExports.cloneElement(slottableElement, void 0, newChildren);
    } else if (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !hasSlottable && reactExports.Children.count(children) === 1 && reactExports.isValidElement(children)
    ) {
      slottableElement = children;
    }
    const slottableElementRef = slottableElement ? getElementRef$1(slottableElement) : void 0;
    const composedRef = useComposedRefs(forwardedRef, slottableElementRef);
    if (!slottableElement) {
      if (children || children === 0) {
        throw new Error(
          hasSlottable ? createSlottableError(ownerName) : createSlotError(ownerName)
        );
      }
      return children;
    }
    const mergedProps = mergeProps(slotProps, slottableElement.props ?? {});
    if (slottableElement.type !== reactExports.Fragment) {
      mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
    }
    return reactExports.cloneElement(slottableElement, mergedProps);
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
__name$l(createSlot, "createSlot");
var Slot$2 = /* @__PURE__ */ createSlot("Slot");
var SLOTTABLE_IDENTIFIER = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
  const Slottable2 = /* @__PURE__ */ __name$l((props) => "child" in props ? props.children(props.child) : props.children, "Slottable");
  Slottable2.displayName = `${ownerName}.Slottable`;
  Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
  return Slottable2;
}
__name$l(createSlottable, "createSlottable");
var getSlottableElementFromSlottable = /* @__PURE__ */ __name$l((slottable, child) => {
  if ("child" in slottable.props) {
    const child2 = slottable.props.child;
    if (!reactExports.isValidElement(child2)) return null;
    return reactExports.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
  }
  return reactExports.isValidElement(child) ? child : null;
}, "getSlottableElementFromSlottable");
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
__name$l(mergeProps, "mergeProps");
function getElementRef$1(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
__name$l(getElementRef$1, "getElementRef");
function isSlottable(child) {
  return reactExports.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
__name$l(isSlottable, "isSlottable");
var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
function isLazyComponent(element) {
  return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
__name$l(isLazyComponent, "isLazyComponent");
function isPromiseLike(value) {
  return typeof value === "object" && value !== null && "then" in value;
}
__name$l(isPromiseLike, "isPromiseLike");
var createSlotError = /* @__PURE__ */ __name$l((ownerName) => {
  return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
}, "createSlotError");
var createSlottableError = /* @__PURE__ */ __name$l((ownerName) => {
  return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
}, "createSlottableError");
var use = React$1[" use ".trim().toString()];
var __defProp$k = Object.defineProperty;
var __name$k = (target, value) => __defProp$k(target, "name", { value, configurable: true });
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot2 = /* @__PURE__ */ createSlot(`Primitive.${node}`);
  const Node2 = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot2 : node;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node2.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node2 };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) reactDomExports.flushSync(() => target.dispatchEvent(event));
}
__name$k(dispatchDiscreteCustomEvent, "dispatchDiscreteCustomEvent");
var __defProp$j = Object.defineProperty;
var __name$j = (target, value) => __defProp$j(target, "name", { value, configurable: true });
var Arrow$1 = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name$j(function Arrow2(props, forwardedRef) {
    const { children, width = 10, height = 5, ...arrowProps } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.svg,
      {
        ...arrowProps,
        ref: forwardedRef,
        width,
        height,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: props.asChild ? children : /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "0,0 30,0 15,10" })
      }
    );
  }, "Arrow")
);
var Root$4 = Arrow$1;
var __defProp$i = Object.defineProperty;
var __name$i = (target, value) => __defProp$i(target, "name", { value, configurable: true });
function useCallbackRef$1(callback) {
  const callbackRef = reactExports.useRef(callback);
  reactExports.useEffect(() => {
    callbackRef.current = callback;
  });
  return reactExports.useMemo(() => ((...args) => callbackRef.current?.(...args)), []);
}
__name$i(useCallbackRef$1, "useCallbackRef");
var __defProp$h = Object.defineProperty;
var __name$h = (target, value) => __defProp$h(target, "name", { value, configurable: true });
function useSize(element) {
  const [size2, setSize] = reactExports.useState(void 0);
  useLayoutEffect2(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }
        if (!entries.length) {
          return;
        }
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({ width, height });
      });
      resizeObserver.observe(element, { box: "border-box" });
      return () => resizeObserver.unobserve(element);
    } else {
      setSize(void 0);
    }
  }, [element]);
  return size2;
}
__name$h(useSize, "useSize");
var __defProp$g = Object.defineProperty;
var __name$g = (target, value) => __defProp$g(target, "name", { value, configurable: true });
var POPPER_NAME = "Popper";
var [createPopperContext, createPopperScope] = /* @__PURE__ */ createContextScope(POPPER_NAME);
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
var Popper = /* @__PURE__ */ __name$g((props) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = reactExports.useState(null);
  const [placementState, setPlacementState] = reactExports.useState(void 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    PopperProvider,
    {
      scope: __scopePopper,
      anchor,
      onAnchorChange: setAnchor,
      placementState,
      setPlacementState,
      children
    }
  );
}, "Popper");
var ANCHOR_NAME$1 = "PopperAnchor";
var PopperAnchor = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name$g(function PopperAnchor2(props, forwardedRef) {
    const { __scopePopper, virtualRef, ...anchorProps } = props;
    const context = usePopperContext(ANCHOR_NAME$1, __scopePopper);
    const ref = reactExports.useRef(null);
    const onAnchorChange = context.onAnchorChange;
    const callbackRef = reactExports.useCallback(
      (node) => {
        ref.current = node;
        if (node) {
          onAnchorChange(node);
        }
      },
      [onAnchorChange]
    );
    const composedRefs = useComposedRefs(forwardedRef, callbackRef);
    const anchorRef = reactExports.useRef(null);
    reactExports.useEffect(() => {
      if (!virtualRef) {
        return;
      }
      const previousAnchor = anchorRef.current;
      anchorRef.current = virtualRef.current;
      if (previousAnchor !== anchorRef.current) {
        onAnchorChange(anchorRef.current);
      }
    });
    const sideAndAlign = context.placementState && getSideAndAlignFromPlacement(context.placementState);
    const placedSide = sideAndAlign?.[0];
    const placedAlign = sideAndAlign?.[1];
    return virtualRef ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "data-radix-popper-side": placedSide,
        "data-radix-popper-align": placedAlign,
        ...anchorProps,
        ref: composedRefs
      }
    );
  }, "PopperAnchor")
);
var CONTENT_NAME$3 = "PopperContent";
var [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME$3);
var PopperContent = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name$g(function PopperContent2(props, forwardedRef) {
    const {
      __scopePopper,
      side = "bottom",
      sideOffset = 0,
      align = "center",
      alignOffset = 0,
      arrowPadding = 0,
      avoidCollisions = true,
      collisionBoundary = [],
      collisionPadding: collisionPaddingProp = 0,
      sticky = "partial",
      hideWhenDetached = false,
      updatePositionStrategy = "optimized",
      onPlaced,
      ...contentProps
    } = props;
    const context = usePopperContext(CONTENT_NAME$3, __scopePopper);
    const [content, setContent] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, setContent);
    const [arrow$12, setArrow] = reactExports.useState(null);
    const arrowSize = useSize(arrow$12);
    const arrowWidth = arrowSize?.width ?? 0;
    const arrowHeight = arrowSize?.height ?? 0;
    const desiredPlacement = side + (align !== "center" ? "-" + align : "");
    const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : { top: 0, right: 0, bottom: 0, left: 0, ...collisionPaddingProp };
    const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [collisionBoundary];
    const hasExplicitBoundaries = boundary.length > 0;
    const detectOverflowOptions = {
      padding: collisionPadding,
      boundary: boundary.filter(isNotNull),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: hasExplicitBoundaries
    };
    const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: desiredPlacement,
      whileElementsMounted: /* @__PURE__ */ __name$g((...args) => {
        const cleanup = autoUpdate(...args, {
          animationFrame: updatePositionStrategy === "always"
        });
        return cleanup;
      }, "whileElementsMounted"),
      elements: {
        reference: context.anchor
      },
      middleware: [
        offset({ mainAxis: sideOffset + arrowHeight, alignmentAxis: alignOffset }),
        avoidCollisions && shift({
          mainAxis: true,
          crossAxis: false,
          limiter: sticky === "partial" ? limitShift() : void 0,
          ...detectOverflowOptions
        }),
        avoidCollisions && flip({ ...detectOverflowOptions }),
        size({
          ...detectOverflowOptions,
          apply: /* @__PURE__ */ __name$g(({ elements, rects, availableWidth, availableHeight }) => {
            const { width: anchorWidth, height: anchorHeight } = rects.reference;
            const contentStyle = elements.floating.style;
            contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
            contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
            contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
            contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
          }, "apply")
        }),
        arrow$12 && arrow({ element: arrow$12, padding: arrowPadding }),
        transformOrigin({ arrowWidth, arrowHeight }),
        hideWhenDetached && hide({
          strategy: "referenceHidden",
          ...detectOverflowOptions,
          // `hide` detects whether the anchor (reference) is clipped, so when
          // no explicit `collisionBoundary` is set we fall back to Floating
          // UI's default clipping ancestors (e.g. a scrollable menu). This
          // lets an occluded submenu hide once its anchor scrolls out of view
          // (#3237). The collision/size middlewares deliberately keep the
          // viewport-based default to avoid clamping content rendered inside
          // transformed or overflow-clipping portal containers.
          boundary: hasExplicitBoundaries ? detectOverflowOptions.boundary : void 0
        })
      ]
    });
    const setPlacementState = context.setPlacementState;
    useLayoutEffect2(() => {
      setPlacementState(placement);
      return () => {
        setPlacementState(void 0);
      };
    }, [placement, setPlacementState]);
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const handlePlaced = useCallbackRef$1(onPlaced);
    useLayoutEffect2(() => {
      if (isPositioned) {
        handlePlaced?.();
      }
    }, [isPositioned, handlePlaced]);
    const arrowX = middlewareData.arrow?.x;
    const arrowY = middlewareData.arrow?.y;
    const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
    const [contentZIndex, setContentZIndex] = reactExports.useState();
    useLayoutEffect2(() => {
      if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [content]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: refs.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...floatingStyles,
          transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: contentZIndex,
          "--radix-popper-transform-origin": [
            middlewareData.transformOrigin?.x,
            middlewareData.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...middlewareData.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: props.dir,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          PopperContentProvider,
          {
            scope: __scopePopper,
            placedSide,
            placedAlign,
            onArrowChange: setArrow,
            arrowX,
            arrowY,
            shouldHideArrow: cannotCenterArrow,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Primitive.div,
              {
                "data-side": placedSide,
                "data-align": placedAlign,
                ...contentProps,
                ref: composedRefs,
                style: {
                  ...contentProps.style,
                  // if the PopperContent hasn't been placed yet (not all
                  // measurements done) we prevent animations so that users'
                  // animations don't kick in too early from the wrong sides.
                  animation: !isPositioned ? "none" : contentProps.style?.animation
                }
              }
            )
          }
        )
      }
    );
  }, "PopperContent")
);
var ARROW_NAME = "PopperArrow";
var OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var PopperArrow = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name$g(function PopperArrow2(props, forwardedRef) {
    const { __scopePopper, ...arrowProps } = props;
    const contentContext = useContentContext(ARROW_NAME, __scopePopper);
    const baseSide = OPPOSITE_SIDE[contentContext.placedSide];
    return (
      // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
      // doesn't report size as we'd expect on SVG elements.
      // it reports their bounding box which is effectively the largest path inside the SVG.
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          ref: contentContext.onArrowChange,
          style: {
            position: "absolute",
            left: contentContext.arrowX,
            top: contentContext.arrowY,
            [baseSide]: 0,
            transformOrigin: {
              top: "",
              right: "0 0",
              bottom: "center 0",
              left: "100% 0"
            }[contentContext.placedSide],
            transform: {
              top: "translateY(100%)",
              right: "translateY(50%) rotate(90deg) translateX(-50%)",
              bottom: `rotate(180deg)`,
              left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[contentContext.placedSide],
            visibility: contentContext.shouldHideArrow ? "hidden" : void 0
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Root$4,
            {
              ...arrowProps,
              ref: forwardedRef,
              style: {
                ...arrowProps.style,
                // ensures the element can be measured correctly (mostly for if SVG)
                display: "block"
              }
            }
          )
        }
      )
    );
  }, "PopperArrow")
);
function isNotNull(value) {
  return value !== null;
}
__name$g(isNotNull, "isNotNull");
var transformOrigin = /* @__PURE__ */ __name$g((options2) => ({
  name: "transformOrigin",
  options: options2,
  fn(data) {
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options2.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options2.arrowHeight;
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[placedAlign];
    const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
    const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
    let x = "";
    let y = "";
    if (placedSide === "bottom") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x = `${-arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x = `${rects.floating.width + arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return { data: { x, y } };
  }
}), "transformOrigin");
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
__name$g(getSideAndAlignFromPlacement, "getSideAndAlignFromPlacement");
var Root2$2 = Popper;
var Anchor = PopperAnchor;
var Content$1 = PopperContent;
var Arrow = PopperArrow;
var __defProp$f = Object.defineProperty;
var __name$f = (target, value) => __defProp$f(target, "name", { value, configurable: true });
var Portal$2 = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name$f(function Portal2(props, forwardedRef) {
    const { container: containerProp, ...portalProps } = props;
    const [mounted, setMounted] = reactExports.useState(false);
    useLayoutEffect2(() => setMounted(true), []);
    const container = containerProp || mounted && globalThis?.document?.body;
    return container ? reactDomExports.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { ...portalProps, ref: forwardedRef }), container) : null;
  }, "Portal")
);
var __defProp$e = Object.defineProperty;
var __name$e = (target, value) => __defProp$e(target, "name", { value, configurable: true });
function useStateMachine$1(initialState, machine) {
  return reactExports.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
__name$e(useStateMachine$1, "useStateMachine");
var Presence = /* @__PURE__ */ __name$e((props) => {
  const { present, children } = props;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({ present: presence.isPresent }) : reactExports.Children.only(children);
  const ref = useStableComposedRefs(presence.ref, getElementRef(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? reactExports.cloneElement(child, { ref }) : null;
}, "Presence");
function usePresence(present) {
  const [node, setNode] = reactExports.useState();
  const stylesRef = reactExports.useRef(null);
  const prevPresentRef = reactExports.useRef(present);
  const prevAnimationNameRef = reactExports.useRef("none");
  const mountAnimationNameRef = reactExports.useRef(void 0);
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine$1(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  reactExports.useEffect(() => {
    if (state === "mounted") {
      prevAnimationNameRef.current = mountAnimationNameRef.current ?? getAnimationName(stylesRef.current);
      mountAnimationNameRef.current = void 0;
    } else {
      prevAnimationNameRef.current = "none";
    }
  }, [state]);
  useLayoutEffect2(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles);
      if (present) {
        mountAnimationNameRef.current = currentAnimationName;
        send("MOUNT");
      } else if (currentAnimationName === "none" || styles?.display === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  useLayoutEffect2(() => {
    if (node) {
      let timeoutId;
      const ownerWindow = node.ownerDocument.defaultView ?? window;
      const handleAnimationEnd = /* @__PURE__ */ __name$e((event) => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
        if (event.target === node && isCurrentAnimation) {
          send("ANIMATION_END");
          if (!prevPresentRef.current) {
            const currentFillMode = node.style.animationFillMode;
            node.style.animationFillMode = "forwards";
            timeoutId = ownerWindow.setTimeout(() => {
              if (node.style.animationFillMode === "forwards") {
                node.style.animationFillMode = currentFillMode;
              }
            });
          }
        }
      }, "handleAnimationEnd");
      const handleAnimationStart = /* @__PURE__ */ __name$e((event) => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      }, "handleAnimationStart");
      node.addEventListener("animationstart", handleAnimationStart);
      node.addEventListener("animationcancel", handleAnimationEnd);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => {
        ownerWindow.clearTimeout(timeoutId);
        node.removeEventListener("animationstart", handleAnimationStart);
        node.removeEventListener("animationcancel", handleAnimationEnd);
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: reactExports.useCallback((node2) => {
      if (node2) {
        const styles = getComputedStyle(node2);
        stylesRef.current = styles;
        mountAnimationNameRef.current = getAnimationName(styles);
      } else {
        stylesRef.current = null;
      }
      setNode(node2);
    }, [])
  };
}
__name$e(usePresence, "usePresence");
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
__name$e(setRef, "setRef");
function useStableComposedRefs(...refs) {
  const refsRef = reactExports.useRef(refs);
  refsRef.current = refs;
  return reactExports.useCallback((node) => {
    const currentRefs = refsRef.current;
    let hasCleanup = false;
    const cleanups = currentRefs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup === "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup === "function") {
            cleanup();
          } else {
            setRef(currentRefs[i], null);
          }
        }
      };
    }
  }, []);
}
__name$e(useStableComposedRefs, "useStableComposedRefs");
function getAnimationName(styles) {
  return styles?.animationName || "none";
}
__name$e(getAnimationName, "getAnimationName");
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
__name$e(getElementRef, "getElementRef");
var __defProp$d = Object.defineProperty;
var __name$d = (target, value) => __defProp$d(target, "name", { value, configurable: true });
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = reactExports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
});
var DismissableLayer = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name$d(function DismissableLayer2(props, forwardedRef) {
    const {
      disableOutsidePointerEvents = false,
      deferPointerDownOutside = false,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      ...layerProps
    } = props;
    const context = reactExports.useContext(DismissableLayerContext);
    const [node, setNode] = reactExports.useState(null);
    const ownerDocument = node?.ownerDocument ?? globalThis?.document;
    const [, force] = reactExports.useState({});
    const composedRefs = useComposedRefs(forwardedRef, setNode);
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [
      ...context.layersWithOutsidePointerEventsDisabled
    ].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = highestLayerWithOutsidePointerEventsDisabled ? layers.indexOf(highestLayerWithOutsidePointerEventsDisabled) : -1;
    const index2 = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const isDeferredPointerDownOutsideRef = reactExports.useRef(false);
    const pointerDownOutside = usePointerDownOutside(
      (event) => {
        onPointerDownOutside?.(event);
        onInteractOutside?.(event);
        if (!event.defaultPrevented) onDismiss?.();
      },
      {
        ownerDocument,
        deferPointerDownOutside,
        isDeferredPointerDownOutsideRef,
        dismissableSurfaces: context.dismissableSurfaces,
        shouldHandlePointerDownOutside: reactExports.useCallback(
          (target) => {
            if (!(target instanceof Node)) {
              return false;
            }
            const isPointerDownOnBranch = [...context.branches].some(
              (branch) => branch.contains(target)
            );
            return isPointerEventsEnabled && !isPointerDownOnBranch;
          },
          [context.branches, isPointerEventsEnabled]
        )
      }
    );
    const focusOutside = useFocusOutside((event) => {
      if (deferPointerDownOutside && isDeferredPointerDownOutsideRef.current) {
        return;
      }
      const target = event.target;
      const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
      if (isFocusInBranch) return;
      onFocusOutside?.(event);
      onInteractOutside?.(event);
      if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    const isHighestLayer = node ? index2 === layers.length - 1 : false;
    const handleKeyDown = useCallbackRef$1((event) => {
      if (event.key !== "Escape") {
        return;
      }
      onEscapeKeyDown?.(event);
      if (!event.defaultPrevented && onDismiss) {
        event.preventDefault();
        onDismiss();
      }
    });
    reactExports.useEffect(() => {
      if (!isHighestLayer) {
        return;
      }
      ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
      return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
    }, [ownerDocument, isHighestLayer, handleKeyDown]);
    reactExports.useEffect(() => {
      if (!node) return;
      if (disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
          ownerDocument.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(node);
      }
      context.layers.add(node);
      dispatchUpdate();
      return () => {
        if (disableOutsidePointerEvents) {
          context.layersWithOutsidePointerEventsDisabled.delete(node);
          if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
            ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
          }
        }
      };
    }, [node, ownerDocument, disableOutsidePointerEvents, context]);
    reactExports.useEffect(() => {
      return () => {
        if (!node) return;
        context.layers.delete(node);
        context.layersWithOutsidePointerEventsDisabled.delete(node);
        dispatchUpdate();
      };
    }, [node, context]);
    reactExports.useEffect(() => {
      const handleUpdate = /* @__PURE__ */ __name$d(() => force({}), "handleUpdate");
      document.addEventListener(CONTEXT_UPDATE, handleUpdate);
      return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        ...layerProps,
        ref: composedRefs,
        style: {
          pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
          ...props.style
        },
        onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: composeEventHandlers(
          props.onPointerDownCapture,
          pointerDownOutside.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
);
function useDismissableLayerSurface() {
  const context = reactExports.useContext(DismissableLayerContext);
  const [node, setNode] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!node) {
      return;
    }
    context.dismissableSurfaces.add(node);
    return () => {
      context.dismissableSurfaces.delete(node);
    };
  }, [node, context.dismissableSurfaces]);
  return setNode;
}
__name$d(useDismissableLayerSurface, "useDismissableLayerSurface");
var IS_TRUE = /* @__PURE__ */ __name$d(() => true, "IS_TRUE");
function usePointerDownOutside(onPointerDownOutside, args) {
  const {
    ownerDocument = globalThis?.document,
    deferPointerDownOutside = false,
    isDeferredPointerDownOutsideRef,
    dismissableSurfaces,
    shouldHandlePointerDownOutside = IS_TRUE
  } = args;
  const handlePointerDownOutside = useCallbackRef$1(onPointerDownOutside);
  const isPointerInsideReactTreeRef = reactExports.useRef(false);
  const isPointerDownOutsideRef = reactExports.useRef(false);
  const interceptedOutsideInteractionEventsRef = reactExports.useRef(/* @__PURE__ */ new Map());
  const handleClickRef = reactExports.useRef(() => {
  });
  reactExports.useEffect(() => {
    function resetOutsideInteraction() {
      isPointerDownOutsideRef.current = false;
      isDeferredPointerDownOutsideRef.current = false;
      interceptedOutsideInteractionEventsRef.current.clear();
    }
    __name$d(resetOutsideInteraction, "resetOutsideInteraction");
    function isOutsideInteractionIntercepted() {
      return Array.from(interceptedOutsideInteractionEventsRef.current.values()).some(Boolean);
    }
    __name$d(isOutsideInteractionIntercepted, "isOutsideInteractionIntercepted");
    function handleInteractionCapture(event) {
      if (!isPointerDownOutsideRef.current) {
        return;
      }
      const target = event.target;
      const isDismissableSurface = target instanceof Node && [...dismissableSurfaces].some((surface) => surface.contains(target));
      if (!isDismissableSurface) {
        interceptedOutsideInteractionEventsRef.current.set(event.type, true);
      }
      if (event.type === "click") {
        window.setTimeout(() => {
          if (isPointerDownOutsideRef.current) {
            handleClickRef.current();
          }
        }, 0);
      }
    }
    __name$d(handleInteractionCapture, "handleInteractionCapture");
    function handleInteractionBubble(event) {
      if (isPointerDownOutsideRef.current) {
        interceptedOutsideInteractionEventsRef.current.set(event.type, false);
      }
    }
    __name$d(handleInteractionBubble, "handleInteractionBubble");
    const handlePointerDown = /* @__PURE__ */ __name$d((event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          const wasOutsideInteractionIntercepted = isOutsideInteractionIntercepted();
          resetOutsideInteraction();
          if (!wasOutsideInteractionIntercepted) {
            handleAndDispatchCustomEvent(
              POINTER_DOWN_OUTSIDE,
              handlePointerDownOutside,
              eventDetail,
              { discrete: true }
            );
          }
        };
        __name$d(handleAndDispatchPointerDownOutsideEvent2, "handleAndDispatchPointerDownOutsideEvent");
        if (!shouldHandlePointerDownOutside(event.target)) {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          resetOutsideInteraction();
          isPointerInsideReactTreeRef.current = false;
          return;
        }
        const eventDetail = { originalEvent: event };
        isPointerDownOutsideRef.current = true;
        isDeferredPointerDownOutsideRef.current = deferPointerDownOutside && event.button === 0;
        interceptedOutsideInteractionEventsRef.current.clear();
        if (!deferPointerDownOutside || event.button !== 0) {
          handleAndDispatchPointerDownOutsideEvent2();
        } else {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
        }
      } else {
        ownerDocument.removeEventListener("click", handleClickRef.current);
        resetOutsideInteraction();
      }
      isPointerInsideReactTreeRef.current = false;
    }, "handlePointerDown");
    const outsideInteractionEvents = [
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click"
    ];
    for (const eventName of outsideInteractionEvents) {
      ownerDocument.addEventListener(eventName, handleInteractionCapture, true);
      ownerDocument.addEventListener(eventName, handleInteractionBubble);
    }
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
      for (const eventName of outsideInteractionEvents) {
        ownerDocument.removeEventListener(eventName, handleInteractionCapture, true);
        ownerDocument.removeEventListener(eventName, handleInteractionBubble);
      }
    };
  }, [
    ownerDocument,
    handlePointerDownOutside,
    deferPointerDownOutside,
    isDeferredPointerDownOutsideRef,
    dismissableSurfaces,
    shouldHandlePointerDownOutside
  ]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ __name$d(() => isPointerInsideReactTreeRef.current = true, "onPointerDownCapture")
  };
}
__name$d(usePointerDownOutside, "usePointerDownOutside");
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
  const handleFocusOutside = useCallbackRef$1(onFocusOutside);
  const isFocusInsideReactTreeRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const handleFocus = /* @__PURE__ */ __name$d((event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    }, "handleFocus");
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [ownerDocument, handleFocusOutside]);
  return {
    onFocusCapture: /* @__PURE__ */ __name$d(() => isFocusInsideReactTreeRef.current = true, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ __name$d(() => isFocusInsideReactTreeRef.current = false, "onBlurCapture")
  };
}
__name$d(useFocusOutside, "useFocusOutside");
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
__name$d(dispatchUpdate, "dispatchUpdate");
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  if (handler) target.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(target, event);
  } else {
    target.dispatchEvent(event);
  }
}
__name$d(handleAndDispatchCustomEvent, "handleAndDispatchCustomEvent");
var __defProp$c = Object.defineProperty;
var __name$c = (target, value) => __defProp$c(target, "name", { value, configurable: true });
var originalBodyUserSelect;
var HOVERCARD_NAME = "HoverCard";
var [createHoverCardContext, createHoverCardScope] = /* @__PURE__ */ createContextScope(HOVERCARD_NAME, [
  createPopperScope
]);
var usePopperScope$1 = createPopperScope();
var [HoverCardProvider, useHoverCardContext] = createHoverCardContext(HOVERCARD_NAME);
var HoverCard = /* @__PURE__ */ __name$c((props) => {
  const {
    __scopeHoverCard,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    openDelay = 700,
    closeDelay = 300
  } = props;
  const popperScope = usePopperScope$1(__scopeHoverCard);
  const openTimerRef = reactExports.useRef(0);
  const closeTimerRef = reactExports.useRef(0);
  const hasSelectionRef = reactExports.useRef(false);
  const isPointerDownOnContentRef = reactExports.useRef(false);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: HOVERCARD_NAME
  });
  const handleOpen = reactExports.useCallback(() => {
    clearTimeout(closeTimerRef.current);
    openTimerRef.current = window.setTimeout(() => setOpen(true), openDelay);
  }, [openDelay, setOpen]);
  const handleClose = reactExports.useCallback(() => {
    clearTimeout(openTimerRef.current);
    if (!hasSelectionRef.current && !isPointerDownOnContentRef.current) {
      closeTimerRef.current = window.setTimeout(() => setOpen(false), closeDelay);
    }
  }, [closeDelay, setOpen]);
  const handleDismiss = reactExports.useCallback(() => setOpen(false), [setOpen]);
  reactExports.useEffect(() => {
    return () => {
      clearTimeout(openTimerRef.current);
      clearTimeout(closeTimerRef.current);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    HoverCardProvider,
    {
      scope: __scopeHoverCard,
      open,
      onOpenChange: setOpen,
      onOpen: handleOpen,
      onClose: handleClose,
      onDismiss: handleDismiss,
      hasSelectionRef,
      isPointerDownOnContentRef,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Root2$2, { ...popperScope, children })
    }
  );
}, "HoverCard");
var TRIGGER_NAME$3 = "HoverCardTrigger";
var HoverCardTrigger = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name$c(function HoverCardTrigger2(props, forwardedRef) {
    const { __scopeHoverCard, ...triggerProps } = props;
    const context = useHoverCardContext(TRIGGER_NAME$3, __scopeHoverCard);
    const popperScope = usePopperScope$1(__scopeHoverCard);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Anchor, { asChild: true, ...popperScope, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.a,
      {
        "data-state": context.open ? "open" : "closed",
        ...triggerProps,
        ref: forwardedRef,
        onPointerEnter: composeEventHandlers(props.onPointerEnter, excludeTouch(context.onOpen)),
        onPointerLeave: composeEventHandlers(props.onPointerLeave, excludeTouch(context.onClose)),
        onFocus: composeEventHandlers(props.onFocus, context.onOpen),
        onBlur: composeEventHandlers(props.onBlur, context.onClose),
        onTouchStart: composeEventHandlers(props.onTouchStart, (event) => event.preventDefault())
      }
    ) });
  }, "HoverCardTrigger")
);
var PORTAL_NAME$2 = "HoverCardPortal";
var [PortalProvider$2, usePortalContext$2] = createHoverCardContext(PORTAL_NAME$2, {
  forceMount: void 0
});
var HoverCardPortal = /* @__PURE__ */ __name$c((props) => {
  const { __scopeHoverCard, forceMount, children, container } = props;
  const context = useHoverCardContext(PORTAL_NAME$2, __scopeHoverCard);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortalProvider$2, { scope: __scopeHoverCard, forceMount, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$2, { asChild: true, container, children }) }) });
}, "HoverCardPortal");
var CONTENT_NAME$2 = "HoverCardContent";
var HoverCardContent = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name$c(function HoverCardContent2(props, forwardedRef) {
    const portalContext = usePortalContext$2(CONTENT_NAME$2, props.__scopeHoverCard);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useHoverCardContext(CONTENT_NAME$2, props.__scopeHoverCard);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      HoverCardContentImpl,
      {
        "data-state": context.open ? "open" : "closed",
        ...contentProps,
        onPointerEnter: composeEventHandlers(props.onPointerEnter, excludeTouch(context.onOpen)),
        onPointerLeave: composeEventHandlers(props.onPointerLeave, excludeTouch(context.onClose)),
        ref: forwardedRef
      }
    ) });
  }, "HoverCardContent")
);
var HoverCardContentImpl = /* @__PURE__ */ reactExports.forwardRef(/* @__PURE__ */ __name$c(function HoverCardContentImpl2(props, forwardedRef) {
  const {
    __scopeHoverCard,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    ...contentProps
  } = props;
  const context = useHoverCardContext(CONTENT_NAME$2, __scopeHoverCard);
  const popperScope = usePopperScope$1(__scopeHoverCard);
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const [containSelection, setContainSelection] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (containSelection) {
      const body = document.body;
      originalBodyUserSelect = body.style.userSelect || body.style.webkitUserSelect;
      body.style.userSelect = "none";
      body.style.webkitUserSelect = "none";
      return () => {
        body.style.userSelect = originalBodyUserSelect;
        body.style.webkitUserSelect = originalBodyUserSelect;
      };
    }
  }, [containSelection]);
  reactExports.useEffect(() => {
    if (ref.current) {
      const handlePointerUp = /* @__PURE__ */ __name$c(() => {
        setContainSelection(false);
        context.isPointerDownOnContentRef.current = false;
        setTimeout(() => {
          const hasSelection = document.getSelection()?.toString() !== "";
          if (hasSelection) context.hasSelectionRef.current = true;
        });
      }, "handlePointerUp");
      document.addEventListener("pointerup", handlePointerUp);
      return () => {
        document.removeEventListener("pointerup", handlePointerUp);
        context.hasSelectionRef.current = false;
        context.isPointerDownOnContentRef.current = false;
      };
    }
  }, [context.isPointerDownOnContentRef, context.hasSelectionRef]);
  reactExports.useEffect(() => {
    if (ref.current) {
      const tabbables = getTabbableNodes(ref.current);
      tabbables.forEach((tabbable) => tabbable.setAttribute("tabindex", "-1"));
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DismissableLayer,
    {
      asChild: true,
      disableOutsidePointerEvents: false,
      onInteractOutside,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside: composeEventHandlers(onFocusOutside, (event) => {
        event.preventDefault();
      }),
      onDismiss: context.onDismiss,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Content$1,
        {
          ...popperScope,
          ...contentProps,
          onPointerDown: composeEventHandlers(contentProps.onPointerDown, (event) => {
            if (event.currentTarget.contains(event.target)) {
              setContainSelection(true);
            }
            context.hasSelectionRef.current = false;
            context.isPointerDownOnContentRef.current = true;
          }),
          ref: composedRefs,
          style: {
            ...contentProps.style,
            userSelect: containSelection ? "text" : void 0,
            // Safari requires prefix
            WebkitUserSelect: containSelection ? "text" : void 0,
            // re-namespace exposed content custom properties
            ...{
              "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
              "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
              "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
            }
          }
        }
      )
    }
  );
}, "HoverCardContentImpl"));
var HoverCardArrow = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name$c(function HoverCardArrow2(props, forwardedRef) {
    const { __scopeHoverCard, ...arrowProps } = props;
    const popperScope = usePopperScope$1(__scopeHoverCard);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }, "HoverCardArrow")
);
function excludeTouch(eventHandler) {
  return (event) => event.pointerType === "touch" ? void 0 : eventHandler();
}
__name$c(excludeTouch, "excludeTouch");
function getTabbableNodes(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ __name$c((node) => {
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
__name$c(getTabbableNodes, "getTabbableNodes");
var Root2$1 = HoverCard;
var Trigger$2 = HoverCardTrigger;
var Portal$1 = HoverCardPortal;
var Content2$1 = HoverCardContent;
function tzName(timeZone, date2, format2 = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone,
    timeZoneName: format2
  }).format(date2).split(/\s/g).slice(2).join(" ");
}
const offsetFormatCache = {};
const offsetCache = {};
function tzOffset(timeZone, date2) {
  try {
    const format2 = offsetFormatCache[timeZone] ||= new Intl.DateTimeFormat("en-US", {
      timeZone,
      timeZoneName: "longOffset"
    }).format;
    const offsetStr = format2(date2).split("GMT")[1];
    if (offsetStr in offsetCache) return offsetCache[offsetStr];
    return calcOffset(offsetStr, offsetStr.split(":"));
  } catch {
    if (timeZone in offsetCache) return offsetCache[timeZone];
    const captures = timeZone?.match(offsetRe);
    if (captures) return calcOffset(timeZone, captures.slice(1));
    return NaN;
  }
}
const offsetRe = /([+-]\d\d):?(\d\d)?/;
function calcOffset(cacheStr, values) {
  const hours = +(values[0] || 0);
  const minutes = +(values[1] || 0);
  const seconds = +(values[2] || 0) / 60;
  return offsetCache[cacheStr] = hours * 60 + minutes > 0 ? hours * 60 + minutes + seconds : hours * 60 - minutes - seconds;
}
class TZDateMini extends Date {
  //#region static
  constructor(...args) {
    super();
    if (args.length > 1 && typeof args[args.length - 1] === "string") {
      this.timeZone = args.pop();
    }
    this.internal = /* @__PURE__ */ new Date();
    if (isNaN(tzOffset(this.timeZone, this))) {
      this.setTime(NaN);
    } else {
      if (!args.length) {
        this.setTime(Date.now());
      } else if (typeof args[0] === "number" && (args.length === 1 || args.length === 2 && typeof args[1] !== "number")) {
        this.setTime(args[0]);
      } else if (typeof args[0] === "string") {
        this.setTime(+new Date(args[0]));
      } else if (args[0] instanceof Date) {
        this.setTime(+args[0]);
      } else {
        this.setTime(+new Date(...args));
        adjustToSystemTZ(this, args);
      }
    }
  }
  static tz(tz, ...args) {
    return args.length ? new TZDateMini(...args, tz) : new TZDateMini(Date.now(), tz);
  }
  //#endregion
  //#region time zone
  withTimeZone(timeZone) {
    return new TZDateMini(+this, timeZone);
  }
  getTimezoneOffset() {
    const offset2 = -tzOffset(this.timeZone, this);
    return offset2 > 0 ? Math.floor(offset2) : Math.ceil(offset2);
  }
  //#endregion
  //#region time
  setTime(_time) {
    Date.prototype.setTime.apply(this, arguments);
    syncToInternal(this);
    return +this;
  }
  //#endregion
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](date2) {
    return new TZDateMini(+new Date(date2), this.timeZone);
  }
  //#endregion
}
const re = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((method) => {
  if (!re.test(method)) return;
  const utcMethod = method.replace(re, "$1UTC");
  if (!TZDateMini.prototype[utcMethod]) return;
  if (method.startsWith("get")) {
    TZDateMini.prototype[method] = function() {
      return this.internal[utcMethod]();
    };
  } else {
    TZDateMini.prototype[method] = function() {
      Date.prototype[utcMethod].apply(this.internal, arguments);
      syncFromInternal(this);
      return +this;
    };
    TZDateMini.prototype[utcMethod] = function() {
      Date.prototype[utcMethod].apply(this, arguments);
      syncToInternal(this);
      return +this;
    };
  }
});
function syncToInternal(date2) {
  date2.internal.setTime(+date2);
  date2.internal.setUTCSeconds(date2.internal.getUTCSeconds() - // Round after converting minutes to seconds to avoid fractional offset
  // precision errors from historical offsets.
  Math.round(-tzOffset(date2.timeZone, date2) * 60));
}
function syncFromInternal(date2) {
  Date.prototype.setFullYear.call(date2, date2.internal.getUTCFullYear(), date2.internal.getUTCMonth(), date2.internal.getUTCDate());
  Date.prototype.setHours.call(date2, date2.internal.getUTCHours(), date2.internal.getUTCMinutes(), date2.internal.getUTCSeconds(), date2.internal.getUTCMilliseconds());
  adjustToSystemTZ(date2);
}
function adjustToSystemTZ(date2, constructorArgs) {
  const expectedInternalTime = Array.isArray(constructorArgs) ? constructorArgsToInternalTime(constructorArgs) : +date2.internal;
  const offsetWithSeconds = tzOffset(date2.timeZone, date2);
  const offset2 = offsetWithSeconds > 0 ? Math.floor(offsetWithSeconds) : Math.ceil(offsetWithSeconds);
  const prevHour = /* @__PURE__ */ new Date(+date2);
  prevHour.setUTCHours(prevHour.getUTCHours() - 1);
  const systemOffset = -(/* @__PURE__ */ new Date(+date2)).getTimezoneOffset();
  const prevHourSystemOffset = -(/* @__PURE__ */ new Date(+prevHour)).getTimezoneOffset();
  const systemDSTChange = systemOffset - prevHourSystemOffset;
  let systemOffsetForDiff = systemOffset;
  if (systemDSTChange && systemOffset !== offset2) {
    const systemHour = Date.prototype.getHours.apply(date2);
    const expectedHour = Array.isArray(constructorArgs) ? constructorArgs[3] || 0 : date2.internal.getUTCHours();
    if (systemHour !== expectedHour) {
      const testDate = /* @__PURE__ */ new Date(+date2);
      const testOffsetDiff = systemOffset - offset2;
      if (testOffsetDiff) testDate.setUTCMinutes(testDate.getUTCMinutes() + testOffsetDiff);
      const testOffsetWithSeconds = tzOffset(date2.timeZone, testDate);
      const testOffset = testOffsetWithSeconds > 0 ? Math.floor(testOffsetWithSeconds) : Math.ceil(testOffsetWithSeconds);
      if (testOffset === offset2) systemOffsetForDiff = prevHourSystemOffset;
    }
  }
  const offsetDiff = systemOffsetForDiff - offset2;
  if (offsetDiff)
    Date.prototype.setUTCMinutes.call(date2, Date.prototype.getUTCMinutes.call(date2) + offsetDiff);
  const systemDate = /* @__PURE__ */ new Date(+date2);
  systemDate.setUTCSeconds(0);
  const systemSecondsOffset = systemOffset > 0 ? systemDate.getSeconds() : (systemDate.getSeconds() - 60) % 60;
  const secondsOffset = Math.round(-(tzOffset(date2.timeZone, date2) * 60)) % 60;
  if (secondsOffset || systemSecondsOffset)
    Date.prototype.setUTCSeconds.call(date2, Date.prototype.getUTCSeconds.call(date2) + secondsOffset + systemSecondsOffset);
  const postOffsetWithSeconds = tzOffset(date2.timeZone, date2);
  const postOffset = postOffsetWithSeconds > 0 ? Math.floor(postOffsetWithSeconds) : Math.ceil(postOffsetWithSeconds);
  const postSystemOffset = -(/* @__PURE__ */ new Date(+date2)).getTimezoneOffset();
  const postOffsetDiff = postSystemOffset - postOffset;
  const offsetChanged = postOffset !== offset2;
  const postDiff = postOffsetDiff - offsetDiff;
  const targetDSTShift = postOffset - offset2;
  const postOffsetCandidate = expectedInternalTime - postOffset * 60 * 1e3;
  const normalizedTargetDSTGap = targetDSTShift > 0 && targetInternalTime(date2) - expectedInternalTime === targetDSTShift * 60 * 1e3 && targetInternalTime(date2, postOffsetCandidate) !== expectedInternalTime;
  if (offsetChanged && postDiff && !normalizedTargetDSTGap) {
    Date.prototype.setUTCMinutes.call(date2, Date.prototype.getUTCMinutes.call(date2) + postDiff);
    const newOffsetWithSeconds = tzOffset(date2.timeZone, date2);
    const newOffset = newOffsetWithSeconds > 0 ? Math.floor(newOffsetWithSeconds) : Math.ceil(newOffsetWithSeconds);
    const offsetChange = postOffset - newOffset;
    if (offsetChange && postDiff < 0) {
      Date.prototype.setUTCMinutes.call(date2, Date.prototype.getUTCMinutes.call(date2) + offsetChange);
    }
  }
  syncToInternal(date2);
  const expectedTime = constructorArgs ? expectedInternalTime : expectedInternalTime + secondsOffset * 1e3;
  const drift = expectedTime - +date2.internal;
  if (drift && Math.abs(drift) < 30 * 60 * 1e3) {
    Date.prototype.setTime.call(date2, +date2 + drift);
    syncToInternal(date2);
  }
}
function constructorArgsToInternalTime(args) {
  return Date.UTC(args[0], args.length > 1 ? args[1] : 0, args.length > 2 ? args[2] : 1, ...args.slice(3));
}
function targetInternalTime(date2, time) {
  const internal = new Date(time ?? +date2);
  internal.setUTCSeconds(internal.getUTCSeconds() - Math.round(-tzOffset(date2.timeZone, internal) * 60));
  return +internal;
}
class TZDate extends TZDateMini {
  //#region static
  static tz(tz, ...args) {
    return args.length ? new TZDate(...args, tz) : new TZDate(Date.now(), tz);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [sign, hours, minutes] = this.tzComponents();
    const tz = `${sign}${hours}:${minutes}`;
    return this.internal.toISOString().slice(0, -1) + tz;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [day, date2, month, year] = this.internal.toUTCString().split(" ");
    return `${day?.slice(0, -1)} ${month} ${date2} ${year}`;
  }
  toTimeString() {
    const time = this.internal.toUTCString().split(" ")[4];
    const [sign, hours, minutes] = this.tzComponents();
    return `${time} GMT${sign}${hours}${minutes} (${tzName(this.timeZone, this)})`;
  }
  toLocaleString(locales, options2) {
    return Date.prototype.toLocaleString.call(this, locales, {
      ...options2,
      timeZone: options2?.timeZone || this.timeZone
    });
  }
  toLocaleDateString(locales, options2) {
    return Date.prototype.toLocaleDateString.call(this, locales, {
      ...options2,
      timeZone: options2?.timeZone || this.timeZone
    });
  }
  toLocaleTimeString(locales, options2) {
    return Date.prototype.toLocaleTimeString.call(this, locales, {
      ...options2,
      timeZone: options2?.timeZone || this.timeZone
    });
  }
  //#endregion
  //#region private
  tzComponents() {
    const offset2 = this.getTimezoneOffset();
    const sign = offset2 > 0 ? "-" : "+";
    const hours = String(Math.floor(Math.abs(offset2) / 60)).padStart(2, "0");
    const minutes = String(Math.abs(offset2) % 60).padStart(2, "0");
    return [sign, hours, minutes];
  }
  //#endregion
  withTimeZone(timeZone) {
    return new TZDate(+this, timeZone);
  }
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](date2) {
    return new TZDate(+new Date(date2), this.timeZone);
  }
  //#endregion
}
const FIVE_WEEKS = 5;
const FOUR_WEEKS = 4;
function getBroadcastWeeksInMonth(month, dateLib) {
  const firstDayOfMonth = dateLib.startOfMonth(month);
  const firstDayOfWeek = firstDayOfMonth.getDay() > 0 ? firstDayOfMonth.getDay() : 7;
  const broadcastStartDate = dateLib.addDays(month, -firstDayOfWeek + 1);
  const lastDateOfLastWeek = dateLib.addDays(broadcastStartDate, FIVE_WEEKS * 7 - 1);
  const numberOfWeeks = dateLib.getMonth(month) === dateLib.getMonth(lastDateOfLastWeek) ? FIVE_WEEKS : FOUR_WEEKS;
  return numberOfWeeks;
}
function startOfBroadcastWeek(date2, dateLib) {
  const firstOfMonth = dateLib.startOfMonth(date2);
  const dayOfWeek = firstOfMonth.getDay();
  if (dayOfWeek === 1) {
    return firstOfMonth;
  } else if (dayOfWeek === 0) {
    return dateLib.addDays(firstOfMonth, -1 * 6);
  } else {
    return dateLib.addDays(firstOfMonth, -1 * (dayOfWeek - 1));
  }
}
function endOfBroadcastWeek(date2, dateLib) {
  const startDate = startOfBroadcastWeek(date2, dateLib);
  const numberOfWeeks = getBroadcastWeeksInMonth(date2, dateLib);
  const endDate = dateLib.addDays(startDate, numberOfWeeks * 7 - 1);
  return endDate;
}
const enUS = {
  ...enUS$1,
  labels: {
    labelDayButton: (date2, modifiers, options2, dateLib) => {
      let formatDate;
      if (dateLib && typeof dateLib.format === "function") {
        formatDate = dateLib.format.bind(dateLib);
      } else {
        formatDate = (d, pattern) => format(d, pattern, { locale: enUS$1, ...options2 });
      }
      let label = formatDate(date2, "PPPP");
      if (modifiers.today)
        label = `Today, ${label}`;
      if (modifiers.selected)
        label = `${label}, selected`;
      return label;
    },
    labelMonthDropdown: "Choose the Month",
    labelNext: "Go to the Next Month",
    labelPrevious: "Go to the Previous Month",
    labelWeekNumber: (weekNumber) => `Week ${weekNumber}`,
    labelYearDropdown: "Choose the Year",
    labelGrid: (date2, options2, dateLib) => {
      let formatDate;
      if (dateLib && typeof dateLib.format === "function") {
        formatDate = dateLib.format.bind(dateLib);
      } else {
        formatDate = (d, pattern) => format(d, pattern, { locale: enUS$1, ...options2 });
      }
      return formatDate(date2, "LLLL yyyy");
    },
    labelGridcell: (date2, modifiers, options2, dateLib) => {
      let formatDate;
      if (dateLib && typeof dateLib.format === "function") {
        formatDate = dateLib.format.bind(dateLib);
      } else {
        formatDate = (d, pattern) => format(d, pattern, { locale: enUS$1, ...options2 });
      }
      let label = formatDate(date2, "PPPP");
      if (modifiers?.today) {
        label = `Today, ${label}`;
      }
      return label;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (date2, options2, dateLib) => {
      let formatDate;
      if (dateLib && typeof dateLib.format === "function") {
        formatDate = dateLib.format.bind(dateLib);
      } else {
        formatDate = (d, pattern) => format(d, pattern, { locale: enUS$1, ...options2 });
      }
      return formatDate(date2, "cccc");
    }
  }
};
class DateLib {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(options2, overrides) {
    this.today = () => {
      if (this.overrides?.today) {
        return this.overrides.today();
      }
      if (this.options.timeZone) {
        return TZDate.tz(this.options.timeZone);
      }
      const DateCtor = this.options.Date ?? Date;
      return new DateCtor();
    };
    this.newDate = (year, monthIndex, date2) => {
      if (this.overrides?.newDate) {
        return this.overrides.newDate(year, monthIndex, date2);
      }
      if (this.options.timeZone) {
        return new TZDate(year, monthIndex, date2, this.options.timeZone);
      }
      return new Date(year, monthIndex, date2);
    };
    this.addDays = (date2, amount) => {
      return this.overrides?.addDays ? this.overrides.addDays(date2, amount) : addDays(date2, amount);
    };
    this.addMonths = (date2, amount) => {
      return this.overrides?.addMonths ? this.overrides.addMonths(date2, amount) : addMonths(date2, amount);
    };
    this.addWeeks = (date2, amount) => {
      return this.overrides?.addWeeks ? this.overrides.addWeeks(date2, amount) : addWeeks(date2, amount);
    };
    this.addYears = (date2, amount) => {
      return this.overrides?.addYears ? this.overrides.addYears(date2, amount) : addYears(date2, amount);
    };
    this.differenceInCalendarDays = (dateLeft, dateRight) => {
      return this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(dateLeft, dateRight) : differenceInCalendarDays(dateLeft, dateRight);
    };
    this.differenceInCalendarMonths = (dateLeft, dateRight) => {
      return this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(dateLeft, dateRight) : differenceInCalendarMonths(dateLeft, dateRight);
    };
    this.eachMonthOfInterval = (interval) => {
      return this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(interval) : eachMonthOfInterval(interval);
    };
    this.eachYearOfInterval = (interval) => {
      const years = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(interval) : eachYearOfInterval(interval);
      const uniqueYears = new Set(years.map((d) => this.getYear(d)));
      if (uniqueYears.size === years.length) {
        return years;
      }
      const yearsArray = [];
      uniqueYears.forEach((y) => {
        yearsArray.push(new Date(y, 0, 1));
      });
      return yearsArray;
    };
    this.endOfBroadcastWeek = (date2) => {
      return this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(date2) : endOfBroadcastWeek(date2, this);
    };
    this.endOfISOWeek = (date2) => {
      return this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(date2) : endOfISOWeek(date2);
    };
    this.endOfMonth = (date2) => {
      return this.overrides?.endOfMonth ? this.overrides.endOfMonth(date2) : endOfMonth(date2);
    };
    this.endOfWeek = (date2, options3) => {
      return this.overrides?.endOfWeek ? this.overrides.endOfWeek(date2, options3) : endOfWeek(date2, this.options);
    };
    this.endOfYear = (date2) => {
      return this.overrides?.endOfYear ? this.overrides.endOfYear(date2) : endOfYear(date2);
    };
    this.format = (date2, formatStr, _options) => {
      const formatted = this.overrides?.format ? this.overrides.format(date2, formatStr, this.options) : format(date2, formatStr, this.options);
      if (this.options.numerals && this.options.numerals !== "latn") {
        return this.replaceDigits(formatted);
      }
      return formatted;
    };
    this.getISOWeek = (date2) => {
      return this.overrides?.getISOWeek ? this.overrides.getISOWeek(date2) : getISOWeek(date2);
    };
    this.getMonth = (date2, _options) => {
      return this.overrides?.getMonth ? this.overrides.getMonth(date2, this.options) : getMonth(date2, this.options);
    };
    this.getYear = (date2, _options) => {
      return this.overrides?.getYear ? this.overrides.getYear(date2, this.options) : getYear(date2, this.options);
    };
    this.getWeek = (date2, _options) => {
      return this.overrides?.getWeek ? this.overrides.getWeek(date2, this.options) : getWeek(date2, this.options);
    };
    this.isAfter = (date2, dateToCompare) => {
      return this.overrides?.isAfter ? this.overrides.isAfter(date2, dateToCompare) : isAfter(date2, dateToCompare);
    };
    this.isBefore = (date2, dateToCompare) => {
      return this.overrides?.isBefore ? this.overrides.isBefore(date2, dateToCompare) : isBefore(date2, dateToCompare);
    };
    this.isDate = (value) => {
      return this.overrides?.isDate ? this.overrides.isDate(value) : isDate(value);
    };
    this.isSameDay = (dateLeft, dateRight) => {
      return this.overrides?.isSameDay ? this.overrides.isSameDay(dateLeft, dateRight) : isSameDay(dateLeft, dateRight);
    };
    this.isSameMonth = (dateLeft, dateRight) => {
      return this.overrides?.isSameMonth ? this.overrides.isSameMonth(dateLeft, dateRight) : isSameMonth(dateLeft, dateRight);
    };
    this.isSameYear = (dateLeft, dateRight) => {
      return this.overrides?.isSameYear ? this.overrides.isSameYear(dateLeft, dateRight) : isSameYear(dateLeft, dateRight);
    };
    this.max = (dates) => {
      return this.overrides?.max ? this.overrides.max(dates) : max$1(dates);
    };
    this.min = (dates) => {
      return this.overrides?.min ? this.overrides.min(dates) : min$1(dates);
    };
    this.setMonth = (date2, month) => {
      return this.overrides?.setMonth ? this.overrides.setMonth(date2, month) : setMonth(date2, month);
    };
    this.setYear = (date2, year) => {
      return this.overrides?.setYear ? this.overrides.setYear(date2, year) : setYear(date2, year);
    };
    this.startOfBroadcastWeek = (date2, _dateLib) => {
      return this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(date2, this) : startOfBroadcastWeek(date2, this);
    };
    this.startOfDay = (date2) => {
      return this.overrides?.startOfDay ? this.overrides.startOfDay(date2) : startOfDay(date2);
    };
    this.startOfISOWeek = (date2) => {
      return this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(date2) : startOfISOWeek(date2);
    };
    this.startOfMonth = (date2) => {
      return this.overrides?.startOfMonth ? this.overrides.startOfMonth(date2) : startOfMonth(date2);
    };
    this.startOfWeek = (date2, _options) => {
      return this.overrides?.startOfWeek ? this.overrides.startOfWeek(date2, this.options) : startOfWeek(date2, this.options);
    };
    this.startOfYear = (date2) => {
      return this.overrides?.startOfYear ? this.overrides.startOfYear(date2) : startOfYear(date2);
    };
    this.options = { locale: enUS, ...options2 };
    this.overrides = overrides;
  }
  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  getDigitMap() {
    const { numerals = "latn" } = this.options;
    const formatter = new Intl.NumberFormat("en-US", {
      numberingSystem: numerals
    });
    const digitMap = {};
    for (let i = 0; i < 10; i++) {
      digitMap[i.toString()] = formatter.format(i);
    }
    return digitMap;
  }
  /**
   * Replaces Arabic digits in a string with the target numbering system digits.
   *
   * @since 9.5.0
   * @param input The string containing Arabic digits.
   * @returns The string with digits replaced.
   */
  replaceDigits(input) {
    const digitMap = this.getDigitMap();
    return input.replace(/\d/g, (digit) => digitMap[digit] || digit);
  }
  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(value) {
    return this.replaceDigits(value.toString());
  }
  /**
   * Returns the preferred ordering for month and year labels for the current
   * locale.
   */
  getMonthYearOrder() {
    const code = this.options.locale?.code;
    if (!code) {
      return "month-first";
    }
    return DateLib.yearFirstLocales.has(code) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(date2) {
    const { locale, timeZone, numerals } = this.options;
    const localeCode = locale?.code;
    if (localeCode && DateLib.yearFirstLocales.has(localeCode)) {
      try {
        const intl = new Intl.DateTimeFormat(localeCode, {
          month: "long",
          year: "numeric",
          timeZone,
          numberingSystem: numerals
        });
        const formatted = intl.format(date2);
        return formatted;
      } catch {
      }
    }
    const pattern = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(date2, pattern);
  }
}
DateLib.yearFirstLocales = /* @__PURE__ */ new Set([
  "eu",
  "hu",
  "ja",
  "ja-Hira",
  "ja-JP",
  "ko",
  "ko-KR",
  "lt",
  "lt-LT",
  "lv",
  "lv-LV",
  "mn",
  "mn-MN",
  "zh",
  "zh-CN",
  "zh-HK",
  "zh-TW"
]);
const defaultDateLib = new DateLib();
class CalendarDay {
  constructor(date2, displayMonth, dateLib = defaultDateLib) {
    this.date = date2;
    this.displayMonth = displayMonth;
    this.outside = Boolean(displayMonth && !dateLib.isSameMonth(date2, displayMonth));
    this.dateLib = dateLib;
    this.isoDate = dateLib.format(date2, "yyyy-MM-dd");
    this.displayMonthId = dateLib.format(displayMonth, "yyyy-MM");
    this.dateMonthId = dateLib.format(date2, "yyyy-MM");
  }
  /**
   * Checks if this day is equal to another `CalendarDay`, considering both the
   * date and the displayed month.
   *
   * @param day The `CalendarDay` to compare with.
   * @returns `true` if the days are equal, otherwise `false`.
   */
  isEqualTo(day) {
    return this.dateLib.isSameDay(day.date, this.date) && this.dateLib.isSameMonth(day.displayMonth, this.displayMonth);
  }
}
class CalendarMonth {
  constructor(month, weeks) {
    this.date = month;
    this.weeks = weeks;
  }
}
class CalendarWeek {
  constructor(weekNumber, days) {
    this.days = days;
    this.weekNumber = weekNumber;
  }
}
function CaptionLabel(props) {
  return React.createElement("span", { ...props });
}
function Chevron(props) {
  const { size: size2 = 24, orientation = "left", className, style } = props;
  return React.createElement(
    "svg",
    { className, style, width: size2, height: size2, viewBox: "0 0 24 24" },
    orientation === "up" && React.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
    orientation === "down" && React.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
    orientation === "left" && React.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
    orientation === "right" && React.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
  );
}
function Day(props) {
  const { day, modifiers, ...tdProps } = props;
  return React.createElement("td", { ...tdProps });
}
function DayButton(props) {
  const { day, modifiers, ...buttonProps } = props;
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (modifiers.focused)
      ref.current?.focus();
  }, [modifiers.focused]);
  return React.createElement("button", { ref, ...buttonProps });
}
var UI;
(function(UI2) {
  UI2["Root"] = "root";
  UI2["Chevron"] = "chevron";
  UI2["Day"] = "day";
  UI2["DayButton"] = "day_button";
  UI2["CaptionLabel"] = "caption_label";
  UI2["Dropdowns"] = "dropdowns";
  UI2["Dropdown"] = "dropdown";
  UI2["DropdownRoot"] = "dropdown_root";
  UI2["Footer"] = "footer";
  UI2["MonthGrid"] = "month_grid";
  UI2["MonthCaption"] = "month_caption";
  UI2["MonthsDropdown"] = "months_dropdown";
  UI2["Month"] = "month";
  UI2["Months"] = "months";
  UI2["Nav"] = "nav";
  UI2["NextMonthButton"] = "button_next";
  UI2["PreviousMonthButton"] = "button_previous";
  UI2["Week"] = "week";
  UI2["Weeks"] = "weeks";
  UI2["Weekday"] = "weekday";
  UI2["Weekdays"] = "weekdays";
  UI2["WeekNumber"] = "week_number";
  UI2["WeekNumberHeader"] = "week_number_header";
  UI2["YearsDropdown"] = "years_dropdown";
})(UI || (UI = {}));
var DayFlag;
(function(DayFlag2) {
  DayFlag2["disabled"] = "disabled";
  DayFlag2["hidden"] = "hidden";
  DayFlag2["outside"] = "outside";
  DayFlag2["focused"] = "focused";
  DayFlag2["today"] = "today";
})(DayFlag || (DayFlag = {}));
var SelectionState;
(function(SelectionState2) {
  SelectionState2["range_end"] = "range_end";
  SelectionState2["range_middle"] = "range_middle";
  SelectionState2["range_start"] = "range_start";
  SelectionState2["selected"] = "selected";
})(SelectionState || (SelectionState = {}));
var Animation;
(function(Animation2) {
  Animation2["weeks_before_enter"] = "weeks_before_enter";
  Animation2["weeks_before_exit"] = "weeks_before_exit";
  Animation2["weeks_after_enter"] = "weeks_after_enter";
  Animation2["weeks_after_exit"] = "weeks_after_exit";
  Animation2["caption_after_enter"] = "caption_after_enter";
  Animation2["caption_after_exit"] = "caption_after_exit";
  Animation2["caption_before_enter"] = "caption_before_enter";
  Animation2["caption_before_exit"] = "caption_before_exit";
})(Animation || (Animation = {}));
const dayPickerContext = reactExports.createContext(void 0);
function useDayPicker() {
  const context = reactExports.useContext(dayPickerContext);
  if (context === void 0) {
    throw new Error("useDayPicker() must be used within a custom component.");
  }
  return context;
}
function Dropdown(props) {
  const { options: options2, className, ...selectProps } = props;
  const { classNames, components: components2, styles } = useDayPicker();
  const cssClassSelect = [classNames[UI.Dropdown], className].join(" ");
  const selectedOption = options2?.find(({ value }) => value === selectProps.value);
  return React.createElement(
    "span",
    { "data-disabled": selectProps.disabled, className: classNames[UI.DropdownRoot], style: styles?.[UI.DropdownRoot] },
    React.createElement(components2.Select, { className: cssClassSelect, ...selectProps }, options2?.map(({ value, label, disabled }) => React.createElement(components2.Option, { key: value, value, disabled }, label))),
    React.createElement(
      "span",
      { className: classNames[UI.CaptionLabel], style: styles?.[UI.CaptionLabel], "aria-hidden": true },
      selectedOption?.label,
      React.createElement(components2.Chevron, { orientation: "down", size: 18, className: classNames[UI.Chevron], style: styles?.[UI.Chevron] })
    )
  );
}
function DropdownNav(props) {
  return React.createElement("div", { ...props });
}
function Footer(props) {
  return React.createElement("div", { ...props });
}
function Month(props) {
  const { calendarMonth, displayIndex, ...divProps } = props;
  return React.createElement("div", { ...divProps }, props.children);
}
function MonthCaption(props) {
  const { calendarMonth, displayIndex, ...divProps } = props;
  return React.createElement("div", { ...divProps });
}
function MonthGrid(props) {
  return React.createElement("table", { ...props });
}
function Months(props) {
  return React.createElement("div", { ...props });
}
function MonthsDropdown(props) {
  const { components: components2 } = useDayPicker();
  return React.createElement(components2.Dropdown, { ...props });
}
function Nav(props) {
  const { onPreviousClick, onNextClick, previousMonth, nextMonth, ...navProps } = props;
  const { components: components2, classNames, styles, labels: { labelPrevious: labelPrevious2, labelNext: labelNext2 } } = useDayPicker();
  const handleNextClick = reactExports.useCallback((e) => {
    if (nextMonth) {
      onNextClick?.(e);
    }
  }, [nextMonth, onNextClick]);
  const handlePreviousClick = reactExports.useCallback((e) => {
    if (previousMonth) {
      onPreviousClick?.(e);
    }
  }, [previousMonth, onPreviousClick]);
  return React.createElement(
    "nav",
    { ...navProps },
    React.createElement(
      components2.PreviousMonthButton,
      { type: "button", className: classNames[UI.PreviousMonthButton], style: styles?.[UI.PreviousMonthButton], tabIndex: previousMonth ? void 0 : -1, "aria-disabled": previousMonth ? void 0 : true, "aria-label": labelPrevious2(previousMonth), onClick: handlePreviousClick },
      React.createElement(components2.Chevron, { disabled: previousMonth ? void 0 : true, className: classNames[UI.Chevron], style: styles?.[UI.Chevron], orientation: "left" })
    ),
    React.createElement(
      components2.NextMonthButton,
      { type: "button", className: classNames[UI.NextMonthButton], style: styles?.[UI.NextMonthButton], tabIndex: nextMonth ? void 0 : -1, "aria-disabled": nextMonth ? void 0 : true, "aria-label": labelNext2(nextMonth), onClick: handleNextClick },
      React.createElement(components2.Chevron, { disabled: nextMonth ? void 0 : true, orientation: "right", className: classNames[UI.Chevron], style: styles?.[UI.Chevron] })
    )
  );
}
function NextMonthButton(props) {
  return React.createElement("button", { ...props });
}
function Option(props) {
  return React.createElement("option", { ...props });
}
function PreviousMonthButton(props) {
  return React.createElement("button", { ...props });
}
function Root$3(props) {
  const { rootRef, ...rest } = props;
  return React.createElement("div", { ...rest, ref: rootRef });
}
function Select(props) {
  return React.createElement("select", { ...props });
}
function Week(props) {
  const { week, ...trProps } = props;
  return React.createElement("tr", { ...trProps });
}
function Weekday(props) {
  return React.createElement("th", { ...props });
}
function Weekdays(props) {
  return React.createElement(
    "thead",
    { "aria-hidden": true },
    React.createElement("tr", { ...props })
  );
}
function WeekNumber(props) {
  const { week, ...thProps } = props;
  return React.createElement("th", { ...thProps });
}
function WeekNumberHeader(props) {
  return React.createElement("th", { ...props });
}
function Weeks(props) {
  return React.createElement("tbody", { ...props });
}
function YearsDropdown(props) {
  const { components: components2 } = useDayPicker();
  return React.createElement(components2.Dropdown, { ...props });
}
const components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CaptionLabel,
  Chevron,
  Day,
  DayButton,
  Dropdown,
  DropdownNav,
  Footer,
  Month,
  MonthCaption,
  MonthGrid,
  Months,
  MonthsDropdown,
  Nav,
  NextMonthButton,
  Option,
  PreviousMonthButton,
  Root: Root$3,
  Select,
  Week,
  WeekNumber,
  WeekNumberHeader,
  Weekday,
  Weekdays,
  Weeks,
  YearsDropdown
}, Symbol.toStringTag, { value: "Module" }));
function rangeIncludesDate(range, date2, excludeEnds = false, dateLib = defaultDateLib) {
  let { from, to } = range;
  const { differenceInCalendarDays: differenceInCalendarDays2, isSameDay: isSameDay2 } = dateLib;
  if (from && to) {
    const isRangeInverted = differenceInCalendarDays2(to, from) < 0;
    if (isRangeInverted) {
      [from, to] = [to, from];
    }
    const isInRange = differenceInCalendarDays2(date2, from) >= (excludeEnds ? 1 : 0) && differenceInCalendarDays2(to, date2) >= (excludeEnds ? 1 : 0);
    return isInRange;
  }
  if (!excludeEnds && to) {
    return isSameDay2(to, date2);
  }
  if (!excludeEnds && from) {
    return isSameDay2(from, date2);
  }
  return false;
}
function isDateInterval(matcher) {
  return Boolean(matcher && typeof matcher === "object" && "before" in matcher && "after" in matcher);
}
function isDateRange(value) {
  return Boolean(value && typeof value === "object" && "from" in value);
}
function isDateAfterType(value) {
  return Boolean(value && typeof value === "object" && "after" in value);
}
function isDateBeforeType(value) {
  return Boolean(value && typeof value === "object" && "before" in value);
}
function isDayOfWeekType(value) {
  return Boolean(value && typeof value === "object" && "dayOfWeek" in value);
}
function isDatesArray(value, dateLib) {
  return Array.isArray(value) && value.every(dateLib.isDate);
}
function dateMatchModifiers(date2, matchers, dateLib = defaultDateLib) {
  const matchersArr = !Array.isArray(matchers) ? [matchers] : matchers;
  const { isSameDay: isSameDay2, differenceInCalendarDays: differenceInCalendarDays2, isAfter: isAfter2 } = dateLib;
  return matchersArr.some((matcher) => {
    if (typeof matcher === "boolean") {
      return matcher;
    }
    if (dateLib.isDate(matcher)) {
      return isSameDay2(date2, matcher);
    }
    if (isDatesArray(matcher, dateLib)) {
      return matcher.some((matcherDate) => isSameDay2(date2, matcherDate));
    }
    if (isDateRange(matcher)) {
      return rangeIncludesDate(matcher, date2, false, dateLib);
    }
    if (isDayOfWeekType(matcher)) {
      if (!Array.isArray(matcher.dayOfWeek)) {
        return matcher.dayOfWeek === date2.getDay();
      }
      return matcher.dayOfWeek.includes(date2.getDay());
    }
    if (isDateInterval(matcher)) {
      const diffBefore = differenceInCalendarDays2(matcher.before, date2);
      const diffAfter = differenceInCalendarDays2(matcher.after, date2);
      const isDayBefore = diffBefore > 0;
      const isDayAfter = diffAfter < 0;
      const isClosedInterval = isAfter2(matcher.before, matcher.after);
      if (isClosedInterval) {
        return isDayAfter && isDayBefore;
      } else {
        return isDayBefore || isDayAfter;
      }
    }
    if (isDateAfterType(matcher)) {
      return differenceInCalendarDays2(date2, matcher.after) > 0;
    }
    if (isDateBeforeType(matcher)) {
      return differenceInCalendarDays2(matcher.before, date2) > 0;
    }
    if (typeof matcher === "function") {
      return matcher(date2);
    }
    return false;
  });
}
function createGetModifiers(days, props, navStart, navEnd, dateLib) {
  const { disabled, hidden, modifiers, showOutsideDays, broadcastCalendar, today = dateLib.today() } = props;
  const { isSameDay: isSameDay2, isSameMonth: isSameMonth2, startOfMonth: startOfMonth2, isBefore: isBefore2, endOfMonth: endOfMonth2, isAfter: isAfter2 } = dateLib;
  const computedNavStart = navStart && startOfMonth2(navStart);
  const computedNavEnd = navEnd && endOfMonth2(navEnd);
  const internalModifiersMap = {
    [DayFlag.focused]: [],
    [DayFlag.outside]: [],
    [DayFlag.disabled]: [],
    [DayFlag.hidden]: [],
    [DayFlag.today]: []
  };
  const customModifiersMap = {};
  for (const day of days) {
    const { date: date2, displayMonth } = day;
    const isOutside = Boolean(displayMonth && !isSameMonth2(date2, displayMonth));
    const isBeforeNavStart = Boolean(computedNavStart && isBefore2(date2, computedNavStart));
    const isAfterNavEnd = Boolean(computedNavEnd && isAfter2(date2, computedNavEnd));
    const isDisabled = Boolean(disabled && dateMatchModifiers(date2, disabled, dateLib));
    const isHidden2 = Boolean(hidden && dateMatchModifiers(date2, hidden, dateLib)) || isBeforeNavStart || isAfterNavEnd || // Broadcast calendar will show outside days as default
    !broadcastCalendar && !showOutsideDays && isOutside || broadcastCalendar && showOutsideDays === false && isOutside;
    const isToday = isSameDay2(date2, today);
    if (isOutside)
      internalModifiersMap.outside.push(day);
    if (isDisabled)
      internalModifiersMap.disabled.push(day);
    if (isHidden2)
      internalModifiersMap.hidden.push(day);
    if (isToday)
      internalModifiersMap.today.push(day);
    if (modifiers) {
      Object.keys(modifiers).forEach((name) => {
        const modifierValue = modifiers?.[name];
        const isMatch = modifierValue ? dateMatchModifiers(date2, modifierValue, dateLib) : false;
        if (!isMatch)
          return;
        if (customModifiersMap[name]) {
          customModifiersMap[name].push(day);
        } else {
          customModifiersMap[name] = [day];
        }
      });
    }
  }
  return (day) => {
    const dayFlags = {
      [DayFlag.focused]: false,
      [DayFlag.disabled]: false,
      [DayFlag.hidden]: false,
      [DayFlag.outside]: false,
      [DayFlag.today]: false
    };
    const customModifiers = {};
    for (const name in internalModifiersMap) {
      const days2 = internalModifiersMap[name];
      dayFlags[name] = days2.some((d) => d === day);
    }
    for (const name in customModifiersMap) {
      customModifiers[name] = customModifiersMap[name].some((d) => d === day);
    }
    return {
      ...dayFlags,
      // custom modifiers should override all the previous ones
      ...customModifiers
    };
  };
}
function getClassNamesForModifiers(modifiers, classNames, modifiersClassNames = {}) {
  const modifierClassNames = Object.entries(modifiers).filter(([, active]) => active === true).reduce((previousValue, [key]) => {
    if (modifiersClassNames[key]) {
      previousValue.push(modifiersClassNames[key]);
    } else if (classNames[DayFlag[key]]) {
      previousValue.push(classNames[DayFlag[key]]);
    } else if (classNames[SelectionState[key]]) {
      previousValue.push(classNames[SelectionState[key]]);
    }
    return previousValue;
  }, [classNames[UI.Day]]);
  return modifierClassNames;
}
function getComponents(customComponents) {
  return {
    ...components,
    ...customComponents
  };
}
function getDataAttributes(props) {
  const dataAttributes = {
    "data-mode": props.mode ?? void 0,
    "data-required": "required" in props ? props.required : void 0,
    "data-multiple-months": props.numberOfMonths && props.numberOfMonths > 1 || void 0,
    "data-week-numbers": props.showWeekNumber || void 0,
    "data-broadcast-calendar": props.broadcastCalendar || void 0,
    "data-nav-layout": props.navLayout || void 0
  };
  Object.entries(props).forEach(([key, val]) => {
    if (key.startsWith("data-")) {
      dataAttributes[key] = val;
    }
  });
  return dataAttributes;
}
function getDefaultClassNames() {
  const classNames = {};
  for (const key in UI) {
    classNames[UI[key]] = `rdp-${UI[key]}`;
  }
  for (const key in DayFlag) {
    classNames[DayFlag[key]] = `rdp-${DayFlag[key]}`;
  }
  for (const key in SelectionState) {
    classNames[SelectionState[key]] = `rdp-${SelectionState[key]}`;
  }
  for (const key in Animation) {
    classNames[Animation[key]] = `rdp-${Animation[key]}`;
  }
  return classNames;
}
function formatCaption(month, options2, dateLib) {
  const lib = dateLib ?? new DateLib(options2);
  return lib.formatMonthYear(month);
}
function formatDay(date2, options2, dateLib) {
  return (dateLib ?? new DateLib(options2)).format(date2, "d");
}
function formatMonthDropdown(month, dateLib = defaultDateLib) {
  return dateLib.format(month, "LLLL");
}
function formatWeekdayName(weekday, options2, dateLib) {
  return (dateLib ?? new DateLib(options2)).format(weekday, "cccccc");
}
function formatWeekNumber(weekNumber, dateLib = defaultDateLib) {
  if (weekNumber < 10) {
    return dateLib.formatNumber(`0${weekNumber.toLocaleString()}`);
  }
  return dateLib.formatNumber(`${weekNumber.toLocaleString()}`);
}
function formatWeekNumberHeader() {
  return ``;
}
function formatYearDropdown(year, dateLib = defaultDateLib) {
  return dateLib.format(year, "yyyy");
}
const defaultFormatters = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption,
  formatDay,
  formatMonthDropdown,
  formatWeekNumber,
  formatWeekNumberHeader,
  formatWeekdayName,
  formatYearDropdown
}, Symbol.toStringTag, { value: "Module" }));
function getFormatters(customFormatters) {
  return {
    ...defaultFormatters,
    ...customFormatters
  };
}
function labelDayButton(date2, modifiers, options2, dateLib) {
  let label = (dateLib ?? new DateLib(options2)).format(date2, "PPPP");
  if (modifiers.today)
    label = `Today, ${label}`;
  if (modifiers.selected)
    label = `${label}, selected`;
  return label;
}
function labelGrid(date2, options2, dateLib) {
  const lib = dateLib ?? new DateLib(options2);
  return lib.formatMonthYear(date2);
}
function labelGridcell(date2, modifiers, options2, dateLib) {
  let label = (dateLib ?? new DateLib(options2)).format(date2, "PPPP");
  if (modifiers?.today) {
    label = `Today, ${label}`;
  }
  return label;
}
function labelMonthDropdown(_options) {
  return "Choose the Month";
}
function labelNav() {
  return "";
}
const defaultLabel = "Go to the Next Month";
function labelNext(_month, _options) {
  return defaultLabel;
}
function labelPrevious(_month) {
  return "Go to the Previous Month";
}
function labelWeekday(date2, options2, dateLib) {
  return (dateLib ?? new DateLib(options2)).format(date2, "cccc");
}
function labelWeekNumber(weekNumber, _options) {
  return `Week ${weekNumber}`;
}
function labelWeekNumberHeader(_options) {
  return "Week Number";
}
function labelYearDropdown(_options) {
  return "Choose the Year";
}
const defaultLabels = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelDayButton,
  labelGrid,
  labelGridcell,
  labelMonthDropdown,
  labelNav,
  labelNext,
  labelPrevious,
  labelWeekNumber,
  labelWeekNumberHeader,
  labelWeekday,
  labelYearDropdown
}, Symbol.toStringTag, { value: "Module" }));
const resolveLabel = (defaultLabel2, customLabel, localeLabel) => {
  if (customLabel)
    return customLabel;
  if (localeLabel) {
    return typeof localeLabel === "function" ? localeLabel : (..._args) => localeLabel;
  }
  return defaultLabel2;
};
function getLabels(customLabels, options2) {
  const localeLabels = options2.locale?.labels ?? {};
  return {
    ...defaultLabels,
    ...customLabels ?? {},
    labelDayButton: resolveLabel(labelDayButton, customLabels?.labelDayButton, localeLabels.labelDayButton),
    labelMonthDropdown: resolveLabel(labelMonthDropdown, customLabels?.labelMonthDropdown, localeLabels.labelMonthDropdown),
    labelNext: resolveLabel(labelNext, customLabels?.labelNext, localeLabels.labelNext),
    labelPrevious: resolveLabel(labelPrevious, customLabels?.labelPrevious, localeLabels.labelPrevious),
    labelWeekNumber: resolveLabel(labelWeekNumber, customLabels?.labelWeekNumber, localeLabels.labelWeekNumber),
    labelYearDropdown: resolveLabel(labelYearDropdown, customLabels?.labelYearDropdown, localeLabels.labelYearDropdown),
    labelGrid: resolveLabel(labelGrid, customLabels?.labelGrid, localeLabels.labelGrid),
    labelGridcell: resolveLabel(labelGridcell, customLabels?.labelGridcell, localeLabels.labelGridcell),
    labelNav: resolveLabel(labelNav, customLabels?.labelNav, localeLabels.labelNav),
    labelWeekNumberHeader: resolveLabel(labelWeekNumberHeader, customLabels?.labelWeekNumberHeader, localeLabels.labelWeekNumberHeader),
    labelWeekday: resolveLabel(labelWeekday, customLabels?.labelWeekday, localeLabels.labelWeekday)
  };
}
function getMonthOptions(displayMonth, navStart, navEnd, formatters2, dateLib) {
  const { startOfMonth: startOfMonth2, startOfYear: startOfYear2, endOfYear: endOfYear2, eachMonthOfInterval: eachMonthOfInterval2, getMonth: getMonth2 } = dateLib;
  const months = eachMonthOfInterval2({
    start: startOfYear2(displayMonth),
    end: endOfYear2(displayMonth)
  });
  const options2 = months.map((month) => {
    const label = formatters2.formatMonthDropdown(month, dateLib);
    const value = getMonth2(month);
    const disabled = navStart && month < startOfMonth2(navStart) || navEnd && month > startOfMonth2(navEnd) || false;
    return { value, label, disabled };
  });
  return options2;
}
function getStyleForModifiers(dayModifiers, styles = {}, modifiersStyles = {}) {
  let style = { ...styles?.[UI.Day] };
  Object.entries(dayModifiers).filter(([, active]) => active === true).forEach(([modifier]) => {
    style = {
      ...style,
      ...modifiersStyles?.[modifier]
    };
  });
  return style;
}
function getWeekdays(dateLib, ISOWeek, broadcastCalendar, today) {
  const referenceToday = today ?? dateLib.today();
  const start = broadcastCalendar ? dateLib.startOfBroadcastWeek(referenceToday, dateLib) : ISOWeek ? dateLib.startOfISOWeek(referenceToday) : dateLib.startOfWeek(referenceToday);
  const days = [];
  for (let i = 0; i < 7; i++) {
    const day = dateLib.addDays(start, i);
    days.push(day);
  }
  return days;
}
function getYearOptions(navStart, navEnd, formatters2, dateLib, reverse = false) {
  if (!navStart)
    return void 0;
  if (!navEnd)
    return void 0;
  const { startOfYear: startOfYear2, endOfYear: endOfYear2, eachYearOfInterval: eachYearOfInterval2, getYear: getYear2 } = dateLib;
  const firstNavYear = startOfYear2(navStart);
  const lastNavYear = endOfYear2(navEnd);
  const years = eachYearOfInterval2({ start: firstNavYear, end: lastNavYear });
  if (reverse)
    years.reverse();
  return years.map((year) => {
    const label = formatters2.formatYearDropdown(year, dateLib);
    return {
      value: getYear2(year),
      label,
      disabled: false
    };
  });
}
function createNoonOverrides(timeZone, options2 = {}) {
  const { weekStartsOn, locale } = options2;
  const fallbackWeekStartsOn = weekStartsOn ?? locale?.options?.weekStartsOn ?? 0;
  const toNoonTZDate = (date2) => {
    const normalizedDate = typeof date2 === "number" || typeof date2 === "string" ? new Date(date2) : date2;
    return new TZDate(normalizedDate.getFullYear(), normalizedDate.getMonth(), normalizedDate.getDate(), 12, 0, 0, timeZone);
  };
  const toCalendarDate = (date2) => {
    const zoned = toNoonTZDate(date2);
    return new Date(zoned.getFullYear(), zoned.getMonth(), zoned.getDate(), 0, 0, 0, 0);
  };
  return {
    today: () => {
      return toNoonTZDate(TZDate.tz(timeZone));
    },
    newDate: (year, monthIndex, date2) => {
      return new TZDate(year, monthIndex, date2, 12, 0, 0, timeZone);
    },
    startOfDay: (date2) => {
      return toNoonTZDate(date2);
    },
    startOfWeek: (date2, options3) => {
      const base = toNoonTZDate(date2);
      const weekStartsOnValue = options3?.weekStartsOn ?? fallbackWeekStartsOn;
      const diff = (base.getDay() - weekStartsOnValue + 7) % 7;
      base.setDate(base.getDate() - diff);
      return base;
    },
    startOfISOWeek: (date2) => {
      const base = toNoonTZDate(date2);
      const diff = (base.getDay() - 1 + 7) % 7;
      base.setDate(base.getDate() - diff);
      return base;
    },
    startOfMonth: (date2) => {
      const base = toNoonTZDate(date2);
      base.setDate(1);
      return base;
    },
    startOfYear: (date2) => {
      const base = toNoonTZDate(date2);
      base.setMonth(0, 1);
      return base;
    },
    endOfWeek: (date2, options3) => {
      const base = toNoonTZDate(date2);
      const weekStartsOnValue = options3?.weekStartsOn ?? fallbackWeekStartsOn;
      const endDow = (weekStartsOnValue + 6) % 7;
      const diff = (endDow - base.getDay() + 7) % 7;
      base.setDate(base.getDate() + diff);
      return base;
    },
    endOfISOWeek: (date2) => {
      const base = toNoonTZDate(date2);
      const diff = (7 - base.getDay()) % 7;
      base.setDate(base.getDate() + diff);
      return base;
    },
    endOfMonth: (date2) => {
      const base = toNoonTZDate(date2);
      base.setMonth(base.getMonth() + 1, 0);
      return base;
    },
    endOfYear: (date2) => {
      const base = toNoonTZDate(date2);
      base.setMonth(11, 31);
      return base;
    },
    eachMonthOfInterval: (interval) => {
      const start = toNoonTZDate(interval.start);
      const end = toNoonTZDate(interval.end);
      const result = [];
      const cursor = new TZDate(start.getFullYear(), start.getMonth(), 1, 12, 0, 0, timeZone);
      const endKey = end.getFullYear() * 12 + end.getMonth();
      while (cursor.getFullYear() * 12 + cursor.getMonth() <= endKey) {
        result.push(new TZDate(cursor, timeZone));
        cursor.setMonth(cursor.getMonth() + 1, 1);
      }
      return result;
    },
    // Normalize to noon once before arithmetic (avoid DST/midnight edge cases),
    // mutate the same TZDate, and return it.
    addDays: (date2, amount) => {
      const base = toNoonTZDate(date2);
      base.setDate(base.getDate() + amount);
      return base;
    },
    addWeeks: (date2, amount) => {
      const base = toNoonTZDate(date2);
      base.setDate(base.getDate() + amount * 7);
      return base;
    },
    addMonths: (date2, amount) => {
      const base = toNoonTZDate(date2);
      base.setMonth(base.getMonth() + amount);
      return base;
    },
    addYears: (date2, amount) => {
      const base = toNoonTZDate(date2);
      base.setFullYear(base.getFullYear() + amount);
      return base;
    },
    eachYearOfInterval: (interval) => {
      const start = toNoonTZDate(interval.start);
      const end = toNoonTZDate(interval.end);
      const years = [];
      const cursor = new TZDate(start.getFullYear(), 0, 1, 12, 0, 0, timeZone);
      while (cursor.getFullYear() <= end.getFullYear()) {
        years.push(new TZDate(cursor, timeZone));
        cursor.setFullYear(cursor.getFullYear() + 1, 0, 1);
      }
      return years;
    },
    getWeek: (date2, options3) => {
      const base = toCalendarDate(date2);
      return getWeek(base, {
        weekStartsOn: options3?.weekStartsOn ?? fallbackWeekStartsOn,
        firstWeekContainsDate: options3?.firstWeekContainsDate ?? locale?.options?.firstWeekContainsDate ?? 1
      });
    },
    getISOWeek: (date2) => {
      const base = toCalendarDate(date2);
      return getISOWeek(base);
    },
    differenceInCalendarDays: (dateLeft, dateRight) => {
      const left = toCalendarDate(dateLeft);
      const right = toCalendarDate(dateRight);
      return differenceInCalendarDays(left, right);
    },
    differenceInCalendarMonths: (dateLeft, dateRight) => {
      const left = toCalendarDate(dateLeft);
      const right = toCalendarDate(dateRight);
      return differenceInCalendarMonths(left, right);
    }
  };
}
const asHtmlElement = (element) => {
  if (element instanceof HTMLElement)
    return element;
  return null;
};
const queryMonthEls = (element) => [
  ...element.querySelectorAll("[data-animated-month]") ?? []
];
const queryMonthEl = (element) => asHtmlElement(element.querySelector("[data-animated-month]"));
const queryCaptionEl = (element) => asHtmlElement(element.querySelector("[data-animated-caption]"));
const queryWeeksEl = (element) => asHtmlElement(element.querySelector("[data-animated-weeks]"));
const queryNavEl = (element) => asHtmlElement(element.querySelector("[data-animated-nav]"));
const queryWeekdaysEl = (element) => asHtmlElement(element.querySelector("[data-animated-weekdays]"));
function useAnimation(rootElRef, enabled, { classNames, months, focused, dateLib }) {
  const previousRootElSnapshotRef = reactExports.useRef(null);
  const previousMonthsRef = reactExports.useRef(months);
  const animatingRef = reactExports.useRef(false);
  reactExports.useLayoutEffect(() => {
    const previousMonths = previousMonthsRef.current;
    previousMonthsRef.current = months;
    if (!enabled || !rootElRef.current || // safety check because the ref can be set to anything by consumers
    !(rootElRef.current instanceof HTMLElement) || // validation required for the animation to work as expected
    months.length === 0 || previousMonths.length === 0 || months.length !== previousMonths.length) {
      return;
    }
    const isSameMonth2 = dateLib.isSameMonth(months[0].date, previousMonths[0].date);
    const isAfterPreviousMonth = dateLib.isAfter(months[0].date, previousMonths[0].date);
    const captionAnimationClass = isAfterPreviousMonth ? classNames[Animation.caption_after_enter] : classNames[Animation.caption_before_enter];
    const weeksAnimationClass = isAfterPreviousMonth ? classNames[Animation.weeks_after_enter] : classNames[Animation.weeks_before_enter];
    const previousRootElSnapshot = previousRootElSnapshotRef.current;
    const rootElSnapshot = rootElRef.current.cloneNode(true);
    if (rootElSnapshot instanceof HTMLElement) {
      const currentMonthElsSnapshot = queryMonthEls(rootElSnapshot);
      currentMonthElsSnapshot.forEach((currentMonthElSnapshot) => {
        if (!(currentMonthElSnapshot instanceof HTMLElement))
          return;
        const previousMonthElSnapshot = queryMonthEl(currentMonthElSnapshot);
        if (previousMonthElSnapshot && currentMonthElSnapshot.contains(previousMonthElSnapshot)) {
          currentMonthElSnapshot.removeChild(previousMonthElSnapshot);
        }
        const captionEl = queryCaptionEl(currentMonthElSnapshot);
        if (captionEl) {
          captionEl.classList.remove(captionAnimationClass);
        }
        const weeksEl = queryWeeksEl(currentMonthElSnapshot);
        if (weeksEl) {
          weeksEl.classList.remove(weeksAnimationClass);
        }
      });
      previousRootElSnapshotRef.current = rootElSnapshot;
    } else {
      previousRootElSnapshotRef.current = null;
    }
    if (animatingRef.current || isSameMonth2 || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    focused) {
      return;
    }
    const previousMonthEls = previousRootElSnapshot instanceof HTMLElement ? queryMonthEls(previousRootElSnapshot) : [];
    const currentMonthEls = queryMonthEls(rootElRef.current);
    if (currentMonthEls?.every((el) => el instanceof HTMLElement) && previousMonthEls?.every((el) => el instanceof HTMLElement)) {
      animatingRef.current = true;
      rootElRef.current.style.isolation = "isolate";
      const navEl = queryNavEl(rootElRef.current);
      if (navEl) {
        navEl.style.zIndex = "1";
      }
      currentMonthEls.forEach((currentMonthEl, index2) => {
        const previousMonthEl = previousMonthEls[index2];
        if (!previousMonthEl) {
          return;
        }
        currentMonthEl.style.position = "relative";
        currentMonthEl.style.overflow = "hidden";
        const captionEl = queryCaptionEl(currentMonthEl);
        if (captionEl) {
          captionEl.classList.add(captionAnimationClass);
        }
        const weeksEl = queryWeeksEl(currentMonthEl);
        if (weeksEl) {
          weeksEl.classList.add(weeksAnimationClass);
        }
        const cleanUp = () => {
          animatingRef.current = false;
          if (rootElRef.current) {
            rootElRef.current.style.isolation = "";
          }
          if (navEl) {
            navEl.style.zIndex = "";
          }
          if (captionEl) {
            captionEl.classList.remove(captionAnimationClass);
          }
          if (weeksEl) {
            weeksEl.classList.remove(weeksAnimationClass);
          }
          currentMonthEl.style.position = "";
          currentMonthEl.style.overflow = "";
          if (currentMonthEl.contains(previousMonthEl)) {
            currentMonthEl.removeChild(previousMonthEl);
          }
        };
        previousMonthEl.style.pointerEvents = "none";
        previousMonthEl.style.position = "absolute";
        previousMonthEl.style.overflow = "hidden";
        previousMonthEl.setAttribute("aria-hidden", "true");
        const previousWeekdaysEl = queryWeekdaysEl(previousMonthEl);
        if (previousWeekdaysEl) {
          previousWeekdaysEl.style.opacity = "0";
        }
        const previousCaptionEl = queryCaptionEl(previousMonthEl);
        if (previousCaptionEl) {
          previousCaptionEl.classList.add(isAfterPreviousMonth ? classNames[Animation.caption_before_exit] : classNames[Animation.caption_after_exit]);
          previousCaptionEl.addEventListener("animationend", cleanUp);
        }
        const previousWeeksEl = queryWeeksEl(previousMonthEl);
        if (previousWeeksEl) {
          previousWeeksEl.classList.add(isAfterPreviousMonth ? classNames[Animation.weeks_before_exit] : classNames[Animation.weeks_after_exit]);
        }
        currentMonthEl.insertBefore(previousMonthEl, currentMonthEl.firstChild);
      });
    }
  });
}
function getDates(displayMonths, maxDate, props, dateLib) {
  const firstMonth = displayMonths[0];
  const lastMonth = displayMonths[displayMonths.length - 1];
  const { ISOWeek, fixedWeeks, broadcastCalendar } = props ?? {};
  const { addDays: addDays2, differenceInCalendarDays: differenceInCalendarDays2, differenceInCalendarMonths: differenceInCalendarMonths2, endOfBroadcastWeek: endOfBroadcastWeek2, endOfISOWeek: endOfISOWeek2, endOfMonth: endOfMonth2, endOfWeek: endOfWeek2, isAfter: isAfter2, startOfBroadcastWeek: startOfBroadcastWeek2, startOfISOWeek: startOfISOWeek2, startOfWeek: startOfWeek2 } = dateLib;
  const startWeekFirstDate = broadcastCalendar ? startOfBroadcastWeek2(firstMonth, dateLib) : ISOWeek ? startOfISOWeek2(firstMonth) : startOfWeek2(firstMonth);
  const displayMonthsWeekEnd = broadcastCalendar ? endOfBroadcastWeek2(lastMonth) : ISOWeek ? endOfISOWeek2(endOfMonth2(lastMonth)) : endOfWeek2(endOfMonth2(lastMonth));
  const constraintWeekEnd = maxDate && (broadcastCalendar ? endOfBroadcastWeek2(maxDate) : ISOWeek ? endOfISOWeek2(maxDate) : endOfWeek2(maxDate));
  const gridEndDate = constraintWeekEnd && isAfter2(displayMonthsWeekEnd, constraintWeekEnd) ? constraintWeekEnd : displayMonthsWeekEnd;
  const nOfDays = differenceInCalendarDays2(gridEndDate, startWeekFirstDate);
  const nOfMonths = differenceInCalendarMonths2(lastMonth, firstMonth) + 1;
  const dates = [];
  for (let i = 0; i <= nOfDays; i++) {
    const date2 = addDays2(startWeekFirstDate, i);
    dates.push(date2);
  }
  const nrOfDaysWithFixedWeeks = broadcastCalendar ? 35 : 42;
  const extraDates = nrOfDaysWithFixedWeeks * nOfMonths;
  if (fixedWeeks && dates.length < extraDates) {
    const daysToAdd = extraDates - dates.length;
    for (let i = 0; i < daysToAdd; i++) {
      const date2 = addDays2(dates[dates.length - 1], 1);
      dates.push(date2);
    }
  }
  return dates;
}
function getDays(calendarMonths) {
  const initialDays = [];
  return calendarMonths.reduce((days, month) => {
    const weekDays = month.weeks.reduce((weekDays2, week) => {
      return weekDays2.concat(week.days.slice());
    }, initialDays.slice());
    return days.concat(weekDays.slice());
  }, initialDays.slice());
}
function getDisplayMonths(firstDisplayedMonth, calendarEndMonth, props, dateLib) {
  const { numberOfMonths = 1 } = props;
  const months = [];
  for (let i = 0; i < numberOfMonths; i++) {
    const month = dateLib.addMonths(firstDisplayedMonth, i);
    if (calendarEndMonth && month > calendarEndMonth) {
      break;
    }
    months.push(month);
  }
  return months;
}
function getInitialMonth(props, navStart, navEnd, dateLib) {
  const { month, defaultMonth, today = dateLib.today(), numberOfMonths = 1 } = props;
  let initialMonth = month || defaultMonth || today;
  const { differenceInCalendarMonths: differenceInCalendarMonths2, addMonths: addMonths2, startOfMonth: startOfMonth2 } = dateLib;
  if (navEnd && differenceInCalendarMonths2(navEnd, initialMonth) < numberOfMonths - 1) {
    const offset2 = -1 * (numberOfMonths - 1);
    initialMonth = addMonths2(navEnd, offset2);
  }
  if (navStart && differenceInCalendarMonths2(initialMonth, navStart) < 0) {
    initialMonth = navStart;
  }
  return startOfMonth2(initialMonth);
}
function getMonths(displayMonths, dates, props, dateLib) {
  const { addDays: addDays2, endOfBroadcastWeek: endOfBroadcastWeek2, endOfISOWeek: endOfISOWeek2, endOfMonth: endOfMonth2, endOfWeek: endOfWeek2, getISOWeek: getISOWeek2, getWeek: getWeek2, startOfBroadcastWeek: startOfBroadcastWeek2, startOfISOWeek: startOfISOWeek2, startOfWeek: startOfWeek2 } = dateLib;
  const dayPickerMonths = displayMonths.reduce((months, month) => {
    const firstDateOfFirstWeek = props.broadcastCalendar ? startOfBroadcastWeek2(month, dateLib) : props.ISOWeek ? startOfISOWeek2(month) : startOfWeek2(month);
    const lastDateOfLastWeek = props.broadcastCalendar ? endOfBroadcastWeek2(month) : props.ISOWeek ? endOfISOWeek2(endOfMonth2(month)) : endOfWeek2(endOfMonth2(month));
    const monthDates = dates.filter((date2) => {
      return date2 >= firstDateOfFirstWeek && date2 <= lastDateOfLastWeek;
    });
    const nrOfDaysWithFixedWeeks = props.broadcastCalendar ? 35 : 42;
    if (props.fixedWeeks && monthDates.length < nrOfDaysWithFixedWeeks) {
      const extraDates = dates.filter((date2) => {
        const daysToAdd = nrOfDaysWithFixedWeeks - monthDates.length;
        return date2 > lastDateOfLastWeek && date2 <= addDays2(lastDateOfLastWeek, daysToAdd);
      });
      monthDates.push(...extraDates);
    }
    const weeks = monthDates.reduce((weeks2, date2) => {
      const weekNumber = props.ISOWeek ? getISOWeek2(date2) : getWeek2(date2);
      const week = weeks2.find((week2) => week2.weekNumber === weekNumber);
      const day = new CalendarDay(date2, month, dateLib);
      if (!week) {
        weeks2.push(new CalendarWeek(weekNumber, [day]));
      } else {
        week.days.push(day);
      }
      return weeks2;
    }, []);
    const dayPickerMonth = new CalendarMonth(month, weeks);
    months.push(dayPickerMonth);
    return months;
  }, []);
  if (!props.reverseMonths) {
    return dayPickerMonths;
  } else {
    return dayPickerMonths.reverse();
  }
}
function getNavMonths(props, dateLib) {
  let { startMonth, endMonth } = props;
  const { startOfYear: startOfYear2, startOfDay: startOfDay2, startOfMonth: startOfMonth2, endOfMonth: endOfMonth2, addYears: addYears2, endOfYear: endOfYear2, today } = dateLib;
  const hasYearDropdown = props.captionLayout === "dropdown" || props.captionLayout === "dropdown-years";
  if (startMonth) {
    startMonth = startOfMonth2(startMonth);
  } else if (!startMonth && hasYearDropdown) {
    startMonth = startOfYear2(addYears2(props.today ?? today(), -100));
  }
  if (endMonth) {
    endMonth = endOfMonth2(endMonth);
  } else if (!endMonth && hasYearDropdown) {
    endMonth = endOfYear2(props.today ?? today());
  }
  return [
    startMonth ? startOfDay2(startMonth) : startMonth,
    endMonth ? startOfDay2(endMonth) : endMonth
  ];
}
function getNextMonth(firstDisplayedMonth, calendarEndMonth, options2, dateLib) {
  if (options2.disableNavigation) {
    return void 0;
  }
  const { pagedNavigation, numberOfMonths = 1 } = options2;
  const { startOfMonth: startOfMonth2, addMonths: addMonths2, differenceInCalendarMonths: differenceInCalendarMonths2 } = dateLib;
  const offset2 = pagedNavigation ? numberOfMonths : 1;
  const month = startOfMonth2(firstDisplayedMonth);
  if (!calendarEndMonth) {
    return addMonths2(month, offset2);
  }
  const monthsDiff = differenceInCalendarMonths2(calendarEndMonth, firstDisplayedMonth);
  if (monthsDiff < numberOfMonths) {
    return void 0;
  }
  return addMonths2(month, offset2);
}
function getPreviousMonth(firstDisplayedMonth, calendarStartMonth, options2, dateLib) {
  if (options2.disableNavigation) {
    return void 0;
  }
  const { pagedNavigation, numberOfMonths } = options2;
  const { startOfMonth: startOfMonth2, addMonths: addMonths2, differenceInCalendarMonths: differenceInCalendarMonths2 } = dateLib;
  const offset2 = pagedNavigation ? numberOfMonths ?? 1 : 1;
  const month = startOfMonth2(firstDisplayedMonth);
  if (!calendarStartMonth) {
    return addMonths2(month, -offset2);
  }
  const monthsDiff = differenceInCalendarMonths2(month, calendarStartMonth);
  if (monthsDiff <= 0) {
    return void 0;
  }
  return addMonths2(month, -offset2);
}
function getWeeks(months) {
  const initialWeeks = [];
  return months.reduce((weeks, month) => {
    return weeks.concat(month.weeks.slice());
  }, initialWeeks.slice());
}
function useControlledValue(defaultValue2, controlledValue) {
  const [uncontrolledValue, setValue] = reactExports.useState(defaultValue2);
  const value = controlledValue === void 0 ? uncontrolledValue : controlledValue;
  return [value, setValue];
}
function useCalendar(props, dateLib) {
  const [navStart, navEnd] = getNavMonths(props, dateLib);
  const { startOfMonth: startOfMonth2, endOfMonth: endOfMonth2 } = dateLib;
  const initialMonth = getInitialMonth(props, navStart, navEnd, dateLib);
  const [firstMonth, setFirstMonth] = useControlledValue(
    initialMonth,
    // initialMonth is always computed from props.month if provided
    props.month ? initialMonth : void 0
  );
  reactExports.useEffect(() => {
    const newInitialMonth = getInitialMonth(props, navStart, navEnd, dateLib);
    setFirstMonth(newInitialMonth);
  }, [props.timeZone]);
  const { months, weeks, days, previousMonth, nextMonth } = reactExports.useMemo(() => {
    const displayMonths = getDisplayMonths(firstMonth, navEnd, { numberOfMonths: props.numberOfMonths }, dateLib);
    const dates = getDates(displayMonths, props.endMonth ? endOfMonth2(props.endMonth) : void 0, {
      ISOWeek: props.ISOWeek,
      fixedWeeks: props.fixedWeeks,
      broadcastCalendar: props.broadcastCalendar
    }, dateLib);
    const months2 = getMonths(displayMonths, dates, {
      broadcastCalendar: props.broadcastCalendar,
      fixedWeeks: props.fixedWeeks,
      ISOWeek: props.ISOWeek,
      reverseMonths: props.reverseMonths
    }, dateLib);
    const weeks2 = getWeeks(months2);
    const days2 = getDays(months2);
    const previousMonth2 = getPreviousMonth(firstMonth, navStart, props, dateLib);
    const nextMonth2 = getNextMonth(firstMonth, navEnd, props, dateLib);
    return {
      months: months2,
      weeks: weeks2,
      days: days2,
      previousMonth: previousMonth2,
      nextMonth: nextMonth2
    };
  }, [
    dateLib,
    firstMonth.getTime(),
    navEnd?.getTime(),
    navStart?.getTime(),
    props.disableNavigation,
    props.broadcastCalendar,
    props.endMonth?.getTime(),
    props.fixedWeeks,
    props.ISOWeek,
    props.numberOfMonths,
    props.pagedNavigation,
    props.reverseMonths
  ]);
  const { disableNavigation, onMonthChange } = props;
  const isDayInCalendar = (day) => weeks.some((week) => week.days.some((d) => d.isEqualTo(day)));
  const goToMonth = (date2) => {
    if (disableNavigation) {
      return;
    }
    let newMonth = startOfMonth2(date2);
    if (navStart && newMonth < startOfMonth2(navStart)) {
      newMonth = startOfMonth2(navStart);
    }
    if (navEnd && newMonth > startOfMonth2(navEnd)) {
      newMonth = startOfMonth2(navEnd);
    }
    setFirstMonth(newMonth);
    onMonthChange?.(newMonth);
  };
  const goToDay = (day) => {
    if (isDayInCalendar(day)) {
      return;
    }
    goToMonth(day.date);
  };
  const calendar = {
    months,
    weeks,
    days,
    navStart,
    navEnd,
    previousMonth,
    nextMonth,
    goToMonth,
    goToDay
  };
  return calendar;
}
var FocusTargetPriority;
(function(FocusTargetPriority2) {
  FocusTargetPriority2[FocusTargetPriority2["Today"] = 0] = "Today";
  FocusTargetPriority2[FocusTargetPriority2["Selected"] = 1] = "Selected";
  FocusTargetPriority2[FocusTargetPriority2["LastFocused"] = 2] = "LastFocused";
  FocusTargetPriority2[FocusTargetPriority2["FocusedModifier"] = 3] = "FocusedModifier";
})(FocusTargetPriority || (FocusTargetPriority = {}));
function isFocusableDay(modifiers) {
  return !modifiers[DayFlag.disabled] && !modifiers[DayFlag.hidden] && !modifiers[DayFlag.outside];
}
function calculateFocusTarget(days, getModifiers, isSelected, lastFocused) {
  let focusTarget;
  let foundFocusTargetPriority = -1;
  for (const day of days) {
    const modifiers = getModifiers(day);
    if (isFocusableDay(modifiers)) {
      if (modifiers[DayFlag.focused] && foundFocusTargetPriority < FocusTargetPriority.FocusedModifier) {
        focusTarget = day;
        foundFocusTargetPriority = FocusTargetPriority.FocusedModifier;
      } else if (lastFocused?.isEqualTo(day) && foundFocusTargetPriority < FocusTargetPriority.LastFocused) {
        focusTarget = day;
        foundFocusTargetPriority = FocusTargetPriority.LastFocused;
      } else if (isSelected(day.date) && foundFocusTargetPriority < FocusTargetPriority.Selected) {
        focusTarget = day;
        foundFocusTargetPriority = FocusTargetPriority.Selected;
      } else if (modifiers[DayFlag.today] && foundFocusTargetPriority < FocusTargetPriority.Today) {
        focusTarget = day;
        foundFocusTargetPriority = FocusTargetPriority.Today;
      }
    }
  }
  if (!focusTarget) {
    focusTarget = days.find((day) => isFocusableDay(getModifiers(day)));
  }
  return focusTarget;
}
function getFocusableDate(moveBy, moveDir, refDate, navStart, navEnd, props, dateLib) {
  const { ISOWeek, broadcastCalendar } = props;
  const { addDays: addDays2, addMonths: addMonths2, addWeeks: addWeeks2, addYears: addYears2, endOfBroadcastWeek: endOfBroadcastWeek2, endOfISOWeek: endOfISOWeek2, endOfWeek: endOfWeek2, max: max2, min: min2, startOfBroadcastWeek: startOfBroadcastWeek2, startOfISOWeek: startOfISOWeek2, startOfWeek: startOfWeek2 } = dateLib;
  const moveFns = {
    day: addDays2,
    week: addWeeks2,
    month: addMonths2,
    year: addYears2,
    startOfWeek: (date2) => broadcastCalendar ? startOfBroadcastWeek2(date2, dateLib) : ISOWeek ? startOfISOWeek2(date2) : startOfWeek2(date2),
    endOfWeek: (date2) => broadcastCalendar ? endOfBroadcastWeek2(date2) : ISOWeek ? endOfISOWeek2(date2) : endOfWeek2(date2)
  };
  let focusableDate = moveFns[moveBy](refDate, moveDir === "after" ? 1 : -1);
  if (moveDir === "before" && navStart) {
    focusableDate = max2([navStart, focusableDate]);
  } else if (moveDir === "after" && navEnd) {
    focusableDate = min2([navEnd, focusableDate]);
  }
  return focusableDate;
}
function getNextFocus(moveBy, moveDir, refDay, calendarStartMonth, calendarEndMonth, props, dateLib, attempt = 0) {
  if (attempt > 365) {
    return void 0;
  }
  const focusableDate = getFocusableDate(moveBy, moveDir, refDay.date, calendarStartMonth, calendarEndMonth, props, dateLib);
  const isDisabled = Boolean(props.disabled && dateMatchModifiers(focusableDate, props.disabled, dateLib));
  const isHidden2 = Boolean(props.hidden && dateMatchModifiers(focusableDate, props.hidden, dateLib));
  const targetMonth = focusableDate;
  const focusDay = new CalendarDay(focusableDate, targetMonth, dateLib);
  if (!isDisabled && !isHidden2) {
    return focusDay;
  }
  return getNextFocus(moveBy, moveDir, focusDay, calendarStartMonth, calendarEndMonth, props, dateLib, attempt + 1);
}
function useFocus(props, calendar, getModifiers, isSelected, dateLib) {
  const { autoFocus } = props;
  const [lastFocused, setLastFocused] = reactExports.useState();
  const focusTarget = calculateFocusTarget(calendar.days, getModifiers, isSelected || (() => false), lastFocused);
  const [focusedDay, setFocused] = reactExports.useState(autoFocus ? focusTarget : void 0);
  const blur = () => {
    setLastFocused(focusedDay);
    setFocused(void 0);
  };
  const moveFocus = (moveBy, moveDir) => {
    if (!focusedDay)
      return;
    const nextFocus = getNextFocus(moveBy, moveDir, focusedDay, calendar.navStart, calendar.navEnd, props, dateLib);
    if (!nextFocus)
      return;
    if (props.disableNavigation) {
      const isNextInCalendar = calendar.days.some((day) => day.isEqualTo(nextFocus));
      if (!isNextInCalendar) {
        return;
      }
    }
    calendar.goToDay(nextFocus);
    setFocused(nextFocus);
  };
  const isFocusTarget = (day) => {
    return Boolean(focusTarget?.isEqualTo(day));
  };
  const useFocus2 = {
    isFocusTarget,
    setFocused,
    focused: focusedDay,
    blur,
    moveFocus
  };
  return useFocus2;
}
function useMulti(props, dateLib) {
  const { selected: initiallySelected, required, onSelect } = props;
  const [internallySelected, setSelected] = useControlledValue(initiallySelected, onSelect ? initiallySelected : void 0);
  const selected = !onSelect ? internallySelected : initiallySelected;
  const { isSameDay: isSameDay2 } = dateLib;
  const isSelected = (date2) => {
    return selected?.some((d) => isSameDay2(d, date2)) ?? false;
  };
  const { min: min2, max: max2 } = props;
  const select = (triggerDate, modifiers, e) => {
    let newDates = [...selected ?? []];
    if (isSelected(triggerDate)) {
      if (selected?.length === min2) {
        return;
      }
      if (required && selected?.length === 1) {
        return;
      }
      newDates = selected?.filter((d) => !isSameDay2(d, triggerDate));
    } else {
      if (selected?.length === max2) {
        newDates = [triggerDate];
      } else {
        newDates = [...newDates, triggerDate];
      }
    }
    if (!onSelect) {
      setSelected(newDates);
    }
    onSelect?.(newDates, triggerDate, modifiers, e);
    return newDates;
  };
  return {
    selected,
    select,
    isSelected
  };
}
function addToRange(date2, initialRange, min2 = 0, max2 = 0, required = false, dateLib = defaultDateLib) {
  const { from, to } = initialRange || {};
  const { isSameDay: isSameDay2, isAfter: isAfter2, isBefore: isBefore2 } = dateLib;
  let range;
  if (!from && !to) {
    range = { from: date2, to: min2 > 0 ? void 0 : date2 };
  } else if (from && !to) {
    if (isSameDay2(from, date2)) {
      if (min2 === 0) {
        range = { from, to: date2 };
      } else if (required) {
        range = { from, to: void 0 };
      } else {
        range = void 0;
      }
    } else if (isBefore2(date2, from)) {
      range = { from: date2, to: from };
    } else {
      range = { from, to: date2 };
    }
  } else if (from && to) {
    if (isSameDay2(from, date2) && isSameDay2(to, date2)) {
      if (required) {
        range = { from, to };
      } else {
        range = void 0;
      }
    } else if (isSameDay2(from, date2)) {
      range = { from, to: min2 > 0 ? void 0 : date2 };
    } else if (isSameDay2(to, date2)) {
      range = { from: date2, to: min2 > 0 ? void 0 : date2 };
    } else if (isBefore2(date2, from)) {
      range = { from: date2, to };
    } else if (isAfter2(date2, from)) {
      range = { from, to: date2 };
    } else if (isAfter2(date2, to)) {
      range = { from, to: date2 };
    } else {
      throw new Error("Invalid range");
    }
  }
  if (range?.from && range?.to) {
    const diff = dateLib.differenceInCalendarDays(range.to, range.from);
    if (max2 > 0 && diff > max2) {
      range = { from: date2, to: void 0 };
    } else if (min2 > 1 && diff < min2) {
      range = { from: date2, to: void 0 };
    }
  }
  return range;
}
function rangeContainsDayOfWeek(range, dayOfWeek, dateLib = defaultDateLib) {
  const dayOfWeekArr = !Array.isArray(dayOfWeek) ? [dayOfWeek] : dayOfWeek;
  let date2 = range.from;
  const totalDays = dateLib.differenceInCalendarDays(range.to, range.from);
  const totalDaysLimit = Math.min(totalDays, 6);
  for (let i = 0; i <= totalDaysLimit; i++) {
    if (dayOfWeekArr.includes(date2.getDay())) {
      return true;
    }
    date2 = dateLib.addDays(date2, 1);
  }
  return false;
}
function rangeOverlaps(rangeLeft, rangeRight, dateLib = defaultDateLib) {
  return rangeIncludesDate(rangeLeft, rangeRight.from, false, dateLib) || rangeIncludesDate(rangeLeft, rangeRight.to, false, dateLib) || rangeIncludesDate(rangeRight, rangeLeft.from, false, dateLib) || rangeIncludesDate(rangeRight, rangeLeft.to, false, dateLib);
}
function rangeContainsModifiers(range, modifiers, dateLib = defaultDateLib) {
  const matchers = Array.isArray(modifiers) ? modifiers : [modifiers];
  const nonFunctionMatchers = matchers.filter((matcher) => typeof matcher !== "function");
  const nonFunctionMatchersResult = nonFunctionMatchers.some((matcher) => {
    if (typeof matcher === "boolean")
      return matcher;
    if (dateLib.isDate(matcher)) {
      return rangeIncludesDate(range, matcher, false, dateLib);
    }
    if (isDatesArray(matcher, dateLib)) {
      return matcher.some((date2) => rangeIncludesDate(range, date2, false, dateLib));
    }
    if (isDateRange(matcher)) {
      if (matcher.from && matcher.to) {
        return rangeOverlaps(range, { from: matcher.from, to: matcher.to }, dateLib);
      }
      return false;
    }
    if (isDayOfWeekType(matcher)) {
      return rangeContainsDayOfWeek(range, matcher.dayOfWeek, dateLib);
    }
    if (isDateInterval(matcher)) {
      const isClosedInterval = dateLib.isAfter(matcher.before, matcher.after);
      if (isClosedInterval) {
        return rangeOverlaps(range, {
          from: dateLib.addDays(matcher.after, 1),
          to: dateLib.addDays(matcher.before, -1)
        }, dateLib);
      }
      return dateMatchModifiers(range.from, matcher, dateLib) || dateMatchModifiers(range.to, matcher, dateLib);
    }
    if (isDateAfterType(matcher) || isDateBeforeType(matcher)) {
      return dateMatchModifiers(range.from, matcher, dateLib) || dateMatchModifiers(range.to, matcher, dateLib);
    }
    return false;
  });
  if (nonFunctionMatchersResult) {
    return true;
  }
  const functionMatchers = matchers.filter((matcher) => typeof matcher === "function");
  if (functionMatchers.length) {
    let date2 = range.from;
    const totalDays = dateLib.differenceInCalendarDays(range.to, range.from);
    for (let i = 0; i <= totalDays; i++) {
      if (functionMatchers.some((matcher) => matcher(date2))) {
        return true;
      }
      date2 = dateLib.addDays(date2, 1);
    }
  }
  return false;
}
function useRange(props, dateLib) {
  const { disabled, excludeDisabled, resetOnSelect, selected: initiallySelected, required, onSelect } = props;
  const [internallySelected, setSelected] = useControlledValue(initiallySelected, onSelect ? initiallySelected : void 0);
  const selected = !onSelect ? internallySelected : initiallySelected;
  const isSelected = (date2) => selected && rangeIncludesDate(selected, date2, false, dateLib);
  const select = (triggerDate, modifiers, e) => {
    const { min: min2, max: max2 } = props;
    let newRange;
    if (triggerDate) {
      const selectedFrom = selected?.from;
      const selectedTo = selected?.to;
      const hasFullRange = !!selectedFrom && !!selectedTo;
      const isClickingSingleDayRange = !!selectedFrom && !!selectedTo && dateLib.isSameDay(selectedFrom, selectedTo) && dateLib.isSameDay(triggerDate, selectedFrom);
      if (resetOnSelect && (hasFullRange || !selected?.from)) {
        if (!required && isClickingSingleDayRange) {
          newRange = void 0;
        } else {
          newRange = { from: triggerDate, to: void 0 };
        }
      } else {
        newRange = addToRange(triggerDate, selected, min2, max2, required, dateLib);
      }
    }
    if (excludeDisabled && disabled && newRange?.from && newRange.to) {
      if (rangeContainsModifiers({ from: newRange.from, to: newRange.to }, disabled, dateLib)) {
        newRange.from = triggerDate;
        newRange.to = void 0;
      }
    }
    if (!onSelect) {
      setSelected(newRange);
    }
    onSelect?.(newRange, triggerDate, modifiers, e);
    return newRange;
  };
  return {
    selected,
    select,
    isSelected
  };
}
function useSingle(props, dateLib) {
  const { selected: initiallySelected, required, onSelect } = props;
  const [internallySelected, setSelected] = useControlledValue(initiallySelected, onSelect ? initiallySelected : void 0);
  const selected = !onSelect ? internallySelected : initiallySelected;
  const { isSameDay: isSameDay2 } = dateLib;
  const isSelected = (compareDate) => {
    return selected ? isSameDay2(selected, compareDate) : false;
  };
  const select = (triggerDate, modifiers, e) => {
    let newDate = triggerDate;
    if (!required && selected && selected && isSameDay2(triggerDate, selected)) {
      newDate = void 0;
    }
    if (!onSelect) {
      setSelected(newDate);
    }
    if (required) {
      onSelect?.(newDate, triggerDate, modifiers, e);
    } else {
      onSelect?.(newDate, triggerDate, modifiers, e);
    }
    return newDate;
  };
  return {
    selected,
    select,
    isSelected
  };
}
function useSelection(props, dateLib) {
  const single = useSingle(props, dateLib);
  const multi = useMulti(props, dateLib);
  const range = useRange(props, dateLib);
  switch (props.mode) {
    case "single":
      return single;
    case "multiple":
      return multi;
    case "range":
      return range;
    default:
      return void 0;
  }
}
function toTimeZone(date2, timeZone) {
  if (date2 instanceof TZDate && date2.timeZone === timeZone) {
    return date2;
  }
  return new TZDate(date2, timeZone);
}
function toZoneNoon(date2, timeZone, noonSafe) {
  return toTimeZone(date2, timeZone);
}
function convertMatcher(matcher, timeZone, noonSafe) {
  if (typeof matcher === "boolean" || typeof matcher === "function") {
    return matcher;
  }
  if (matcher instanceof Date) {
    return toZoneNoon(matcher, timeZone);
  }
  if (Array.isArray(matcher)) {
    return matcher.map((value) => value instanceof Date ? toZoneNoon(value, timeZone) : value);
  }
  if (isDateRange(matcher)) {
    return {
      ...matcher,
      from: matcher.from ? toTimeZone(matcher.from, timeZone) : matcher.from,
      to: matcher.to ? toTimeZone(matcher.to, timeZone) : matcher.to
    };
  }
  if (isDateInterval(matcher)) {
    return {
      before: toZoneNoon(matcher.before, timeZone),
      after: toZoneNoon(matcher.after, timeZone)
    };
  }
  if (isDateAfterType(matcher)) {
    return {
      after: toZoneNoon(matcher.after, timeZone)
    };
  }
  if (isDateBeforeType(matcher)) {
    return {
      before: toZoneNoon(matcher.before, timeZone)
    };
  }
  return matcher;
}
function convertMatchersToTimeZone(matchers, timeZone, noonSafe) {
  if (!matchers) {
    return matchers;
  }
  if (Array.isArray(matchers)) {
    return matchers.map((matcher) => convertMatcher(matcher, timeZone));
  }
  return convertMatcher(matchers, timeZone);
}
function DayPicker(initialProps) {
  let props = initialProps;
  const timeZone = props.timeZone;
  if (timeZone) {
    props = {
      ...initialProps,
      timeZone
    };
    if (props.today) {
      props.today = toTimeZone(props.today, timeZone);
    }
    if (props.month) {
      props.month = toTimeZone(props.month, timeZone);
    }
    if (props.defaultMonth) {
      props.defaultMonth = toTimeZone(props.defaultMonth, timeZone);
    }
    if (props.startMonth) {
      props.startMonth = toTimeZone(props.startMonth, timeZone);
    }
    if (props.endMonth) {
      props.endMonth = toTimeZone(props.endMonth, timeZone);
    }
    if (props.mode === "single" && props.selected) {
      props.selected = toTimeZone(props.selected, timeZone);
    } else if (props.mode === "multiple" && props.selected) {
      props.selected = props.selected?.map((date2) => toTimeZone(date2, timeZone));
    } else if (props.mode === "range" && props.selected) {
      props.selected = {
        from: props.selected.from ? toTimeZone(props.selected.from, timeZone) : props.selected.from,
        to: props.selected.to ? toTimeZone(props.selected.to, timeZone) : props.selected.to
      };
    }
    if (props.disabled !== void 0) {
      props.disabled = convertMatchersToTimeZone(props.disabled, timeZone);
    }
    if (props.hidden !== void 0) {
      props.hidden = convertMatchersToTimeZone(props.hidden, timeZone);
    }
    if (props.modifiers) {
      const nextModifiers = {};
      Object.keys(props.modifiers).forEach((key) => {
        nextModifiers[key] = convertMatchersToTimeZone(props.modifiers?.[key], timeZone);
      });
      props.modifiers = nextModifiers;
    }
  }
  const { components: components2, formatters: formatters2, labels, dateLib, locale, classNames } = reactExports.useMemo(() => {
    const locale2 = { ...enUS, ...props.locale };
    const weekStartsOn = props.broadcastCalendar ? 1 : props.weekStartsOn;
    const noonOverrides = props.noonSafe && props.timeZone ? createNoonOverrides(props.timeZone, {
      weekStartsOn,
      locale: locale2
    }) : void 0;
    const overrides = props.dateLib && noonOverrides ? { ...noonOverrides, ...props.dateLib } : props.dateLib ?? noonOverrides;
    const dateLib2 = new DateLib({
      locale: locale2,
      weekStartsOn,
      firstWeekContainsDate: props.firstWeekContainsDate,
      useAdditionalWeekYearTokens: props.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: props.useAdditionalDayOfYearTokens,
      timeZone: props.timeZone,
      numerals: props.numerals
    }, overrides);
    return {
      dateLib: dateLib2,
      components: getComponents(props.components),
      formatters: getFormatters(props.formatters),
      labels: getLabels(props.labels, dateLib2.options),
      locale: locale2,
      classNames: { ...getDefaultClassNames(), ...props.classNames }
    };
  }, [
    props.locale,
    props.broadcastCalendar,
    props.weekStartsOn,
    props.firstWeekContainsDate,
    props.useAdditionalWeekYearTokens,
    props.useAdditionalDayOfYearTokens,
    props.timeZone,
    props.numerals,
    props.dateLib,
    props.noonSafe,
    props.components,
    props.formatters,
    props.labels,
    props.classNames
  ]);
  if (!props.today) {
    props = { ...props, today: dateLib.today() };
  }
  const { captionLayout, mode, navLayout, numberOfMonths = 1, onDayBlur, onDayClick, onDayFocus, onDayKeyDown, onDayMouseEnter, onDayMouseLeave, onNextClick, onPrevClick, showWeekNumber, styles } = props;
  const { formatCaption: formatCaption2, formatDay: formatDay2, formatMonthDropdown: formatMonthDropdown2, formatWeekNumber: formatWeekNumber2, formatWeekNumberHeader: formatWeekNumberHeader2, formatWeekdayName: formatWeekdayName2, formatYearDropdown: formatYearDropdown2 } = formatters2;
  const calendar = useCalendar(props, dateLib);
  const { days, months, navStart, navEnd, previousMonth, nextMonth, goToMonth } = calendar;
  const getModifiers = createGetModifiers(days, props, navStart, navEnd, dateLib);
  const { isSelected, select, selected: selectedValue } = useSelection(props, dateLib) ?? {};
  const { blur, focused, isFocusTarget, moveFocus, setFocused } = useFocus(props, calendar, getModifiers, isSelected ?? (() => false), dateLib);
  const { labelDayButton: labelDayButton2, labelGridcell: labelGridcell2, labelGrid: labelGrid2, labelMonthDropdown: labelMonthDropdown2, labelNav: labelNav2, labelPrevious: labelPrevious2, labelNext: labelNext2, labelWeekday: labelWeekday2, labelWeekNumber: labelWeekNumber2, labelWeekNumberHeader: labelWeekNumberHeader2, labelYearDropdown: labelYearDropdown2 } = labels;
  const weekdays = reactExports.useMemo(() => getWeekdays(dateLib, props.ISOWeek, props.broadcastCalendar, props.today), [dateLib, props.ISOWeek, props.broadcastCalendar, props.today]);
  const isInteractive = mode !== void 0 || onDayClick !== void 0;
  const handlePreviousClick = reactExports.useCallback(() => {
    if (!previousMonth)
      return;
    goToMonth(previousMonth);
    onPrevClick?.(previousMonth);
  }, [previousMonth, goToMonth, onPrevClick]);
  const handleNextClick = reactExports.useCallback(() => {
    if (!nextMonth)
      return;
    goToMonth(nextMonth);
    onNextClick?.(nextMonth);
  }, [goToMonth, nextMonth, onNextClick]);
  const handleDayClick = reactExports.useCallback((day, m2) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFocused(day);
    if (m2.disabled) {
      return;
    }
    select?.(day.date, m2, e);
    onDayClick?.(day.date, m2, e);
  }, [select, onDayClick, setFocused]);
  const handleDayFocus = reactExports.useCallback((day, m2) => (e) => {
    setFocused(day);
    onDayFocus?.(day.date, m2, e);
  }, [onDayFocus, setFocused]);
  const handleDayBlur = reactExports.useCallback((day, m2) => (e) => {
    blur();
    onDayBlur?.(day.date, m2, e);
  }, [blur, onDayBlur]);
  const handleDayKeyDown = reactExports.useCallback((day, modifiers) => (e) => {
    const keyMap = {
      ArrowLeft: [
        e.shiftKey ? "month" : "day",
        props.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        e.shiftKey ? "month" : "day",
        props.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [e.shiftKey ? "year" : "week", "after"],
      ArrowUp: [e.shiftKey ? "year" : "week", "before"],
      PageUp: [e.shiftKey ? "year" : "month", "before"],
      PageDown: [e.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (keyMap[e.key]) {
      e.preventDefault();
      e.stopPropagation();
      const [moveBy, moveDir] = keyMap[e.key];
      moveFocus(moveBy, moveDir);
    }
    onDayKeyDown?.(day.date, modifiers, e);
  }, [moveFocus, onDayKeyDown, props.dir]);
  const handleDayMouseEnter = reactExports.useCallback((day, modifiers) => (e) => {
    onDayMouseEnter?.(day.date, modifiers, e);
  }, [onDayMouseEnter]);
  const handleDayMouseLeave = reactExports.useCallback((day, modifiers) => (e) => {
    onDayMouseLeave?.(day.date, modifiers, e);
  }, [onDayMouseLeave]);
  const handleMonthChange = reactExports.useCallback((date2, monthOffset) => (e) => {
    const selectedMonth = Number(e.target.value);
    const month = dateLib.setMonth(dateLib.startOfMonth(date2), selectedMonth);
    goToMonth(dateLib.addMonths(month, -monthOffset));
  }, [dateLib, goToMonth]);
  const handleYearChange = reactExports.useCallback((date2, monthOffset) => (e) => {
    const selectedYear = Number(e.target.value);
    const month = dateLib.setYear(dateLib.startOfMonth(date2), selectedYear);
    goToMonth(dateLib.addMonths(month, -monthOffset));
  }, [dateLib, goToMonth]);
  const { className, style } = reactExports.useMemo(() => ({
    className: [classNames[UI.Root], props.className].filter(Boolean).join(" "),
    style: { ...styles?.[UI.Root], ...props.style }
  }), [classNames, props.className, props.style, styles]);
  const dataAttributes = getDataAttributes(props);
  const getDropdownStyle = (dropdown) => {
    const dropdownStyle = styles?.[UI.Dropdown];
    const specificDropdownStyle = styles?.[dropdown];
    if (!dropdownStyle && !specificDropdownStyle) {
      return void 0;
    }
    return {
      ...dropdownStyle,
      ...specificDropdownStyle
    };
  };
  const rootElRef = reactExports.useRef(null);
  useAnimation(rootElRef, Boolean(props.animate), {
    classNames,
    months,
    focused,
    dateLib
  });
  const contextValue = {
    dayPickerProps: props,
    selected: selectedValue,
    select,
    isSelected,
    months,
    nextMonth,
    previousMonth,
    goToMonth,
    getModifiers,
    components: components2,
    classNames,
    styles,
    labels,
    formatters: formatters2
  };
  return React.createElement(
    dayPickerContext.Provider,
    { value: contextValue },
    React.createElement(
      components2.Root,
      { rootRef: props.animate ? rootElRef : void 0, className, style, dir: props.dir, id: props.id, lang: props.lang ?? locale.code, nonce: props.nonce, title: props.title, role: props.role, "aria-label": props["aria-label"], "aria-labelledby": props["aria-labelledby"], ...dataAttributes },
      React.createElement(
        components2.Months,
        { className: classNames[UI.Months], style: styles?.[UI.Months] },
        !props.hideNavigation && !navLayout && React.createElement(components2.Nav, { "data-animated-nav": props.animate ? "true" : void 0, className: classNames[UI.Nav], style: styles?.[UI.Nav], "aria-label": labelNav2(), onPreviousClick: handlePreviousClick, onNextClick: handleNextClick, previousMonth, nextMonth }),
        months.map((calendarMonth, displayIndex) => {
          const monthOffset = props.reverseMonths ? months.length - 1 - displayIndex : displayIndex;
          return React.createElement(
            components2.Month,
            {
              "data-animated-month": props.animate ? "true" : void 0,
              className: classNames[UI.Month],
              style: styles?.[UI.Month],
              // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
              key: displayIndex,
              displayIndex,
              calendarMonth
            },
            navLayout === "around" && !props.hideNavigation && displayIndex === 0 && React.createElement(
              components2.PreviousMonthButton,
              { type: "button", className: classNames[UI.PreviousMonthButton], style: styles?.[UI.PreviousMonthButton], tabIndex: previousMonth ? void 0 : -1, "aria-disabled": previousMonth ? void 0 : true, "aria-label": labelPrevious2(previousMonth), onClick: handlePreviousClick, "data-animated-button": props.animate ? "true" : void 0 },
              React.createElement(components2.Chevron, { disabled: previousMonth ? void 0 : true, className: classNames[UI.Chevron], style: styles?.[UI.Chevron], orientation: props.dir === "rtl" ? "right" : "left" })
            ),
            React.createElement(components2.MonthCaption, { "data-animated-caption": props.animate ? "true" : void 0, className: classNames[UI.MonthCaption], style: styles?.[UI.MonthCaption], calendarMonth, displayIndex }, captionLayout?.startsWith("dropdown") ? React.createElement(
              components2.DropdownNav,
              { className: classNames[UI.Dropdowns], style: styles?.[UI.Dropdowns] },
              (() => {
                const monthControl = captionLayout === "dropdown" || captionLayout === "dropdown-months" ? React.createElement(components2.MonthsDropdown, { key: "month", className: classNames[UI.MonthsDropdown], "aria-label": labelMonthDropdown2(), disabled: Boolean(props.disableNavigation), onChange: handleMonthChange(calendarMonth.date, monthOffset), options: getMonthOptions(calendarMonth.date, navStart, navEnd, formatters2, dateLib), style: getDropdownStyle(UI.MonthsDropdown), value: dateLib.getMonth(calendarMonth.date) }) : React.createElement("span", { key: "month" }, formatMonthDropdown2(calendarMonth.date, dateLib));
                const yearControl = captionLayout === "dropdown" || captionLayout === "dropdown-years" ? React.createElement(components2.YearsDropdown, { key: "year", className: classNames[UI.YearsDropdown], "aria-label": labelYearDropdown2(dateLib.options), disabled: Boolean(props.disableNavigation), onChange: handleYearChange(calendarMonth.date, monthOffset), options: getYearOptions(navStart, navEnd, formatters2, dateLib, Boolean(props.reverseYears)), style: getDropdownStyle(UI.YearsDropdown), value: dateLib.getYear(calendarMonth.date) }) : React.createElement("span", { key: "year" }, formatYearDropdown2(calendarMonth.date, dateLib));
                const controls = dateLib.getMonthYearOrder() === "year-first" ? [yearControl, monthControl] : [monthControl, yearControl];
                return controls;
              })(),
              React.createElement("span", { role: "status", "aria-live": "polite", style: {
                border: 0,
                clip: "rect(0 0 0 0)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: 0,
                position: "absolute",
                width: "1px",
                whiteSpace: "nowrap",
                wordWrap: "normal"
              } }, formatCaption2(calendarMonth.date, dateLib.options, dateLib))
            ) : React.createElement(components2.CaptionLabel, { className: classNames[UI.CaptionLabel], style: styles?.[UI.CaptionLabel], role: "status", "aria-live": "polite" }, formatCaption2(calendarMonth.date, dateLib.options, dateLib))),
            navLayout === "around" && !props.hideNavigation && displayIndex === numberOfMonths - 1 && React.createElement(
              components2.NextMonthButton,
              { type: "button", className: classNames[UI.NextMonthButton], style: styles?.[UI.NextMonthButton], tabIndex: nextMonth ? void 0 : -1, "aria-disabled": nextMonth ? void 0 : true, "aria-label": labelNext2(nextMonth), onClick: handleNextClick, "data-animated-button": props.animate ? "true" : void 0 },
              React.createElement(components2.Chevron, { disabled: nextMonth ? void 0 : true, className: classNames[UI.Chevron], style: styles?.[UI.Chevron], orientation: props.dir === "rtl" ? "left" : "right" })
            ),
            displayIndex === numberOfMonths - 1 && navLayout === "after" && !props.hideNavigation && React.createElement(components2.Nav, { "data-animated-nav": props.animate ? "true" : void 0, className: classNames[UI.Nav], style: styles?.[UI.Nav], "aria-label": labelNav2(), onPreviousClick: handlePreviousClick, onNextClick: handleNextClick, previousMonth, nextMonth }),
            React.createElement(
              components2.MonthGrid,
              { role: "grid", "aria-multiselectable": mode === "multiple" || mode === "range", "aria-label": labelGrid2(calendarMonth.date, dateLib.options, dateLib) || void 0, className: classNames[UI.MonthGrid], style: styles?.[UI.MonthGrid] },
              !props.hideWeekdays && React.createElement(
                components2.Weekdays,
                { "data-animated-weekdays": props.animate ? "true" : void 0, className: classNames[UI.Weekdays], style: styles?.[UI.Weekdays] },
                showWeekNumber && React.createElement(components2.WeekNumberHeader, { "aria-label": labelWeekNumberHeader2(dateLib.options), className: classNames[UI.WeekNumberHeader], style: styles?.[UI.WeekNumberHeader], scope: "col" }, formatWeekNumberHeader2()),
                weekdays.map((weekday) => React.createElement(components2.Weekday, { "aria-label": labelWeekday2(weekday, dateLib.options, dateLib), className: classNames[UI.Weekday], key: String(weekday), style: styles?.[UI.Weekday], scope: "col" }, formatWeekdayName2(weekday, dateLib.options, dateLib)))
              ),
              React.createElement(components2.Weeks, { "data-animated-weeks": props.animate ? "true" : void 0, className: classNames[UI.Weeks], style: styles?.[UI.Weeks] }, calendarMonth.weeks.map((week) => {
                return React.createElement(
                  components2.Week,
                  { className: classNames[UI.Week], key: week.weekNumber, style: styles?.[UI.Week], week },
                  showWeekNumber && React.createElement(components2.WeekNumber, { week, style: styles?.[UI.WeekNumber], "aria-label": labelWeekNumber2(week.weekNumber, {
                    locale
                  }), className: classNames[UI.WeekNumber], scope: "row", role: "rowheader" }, formatWeekNumber2(week.weekNumber, dateLib)),
                  week.days.map((day) => {
                    const { date: date2 } = day;
                    const modifiers = getModifiers(day);
                    modifiers[DayFlag.focused] = !modifiers.hidden && Boolean(focused?.isEqualTo(day));
                    modifiers[SelectionState.selected] = isSelected?.(date2) || modifiers.selected;
                    if (isDateRange(selectedValue)) {
                      const { from, to } = selectedValue;
                      modifiers[SelectionState.range_start] = Boolean(from && to && dateLib.isSameDay(date2, from));
                      modifiers[SelectionState.range_end] = Boolean(from && to && dateLib.isSameDay(date2, to));
                      modifiers[SelectionState.range_middle] = rangeIncludesDate(selectedValue, date2, true, dateLib);
                    }
                    const style2 = getStyleForModifiers(modifiers, styles, props.modifiersStyles);
                    const className2 = getClassNamesForModifiers(modifiers, classNames, props.modifiersClassNames);
                    const ariaLabel = !isInteractive && !modifiers.hidden ? labelGridcell2(date2, modifiers, dateLib.options, dateLib) : void 0;
                    return React.createElement(components2.Day, { key: `${day.isoDate}_${day.displayMonthId}`, day, modifiers, className: className2.join(" "), style: style2, role: "gridcell", "aria-selected": modifiers.selected || void 0, "aria-label": ariaLabel, "data-day": day.isoDate, "data-month": day.outside ? day.dateMonthId : void 0, "data-selected": modifiers.selected || void 0, "data-disabled": modifiers.disabled || void 0, "data-hidden": modifiers.hidden || void 0, "data-outside": day.outside || void 0, "data-focused": modifiers.focused || void 0, "data-today": modifiers.today || void 0 }, !modifiers.hidden && isInteractive ? React.createElement(components2.DayButton, { className: classNames[UI.DayButton], style: styles?.[UI.DayButton], type: "button", day, modifiers, disabled: !modifiers.focused && modifiers.disabled || void 0, "aria-disabled": modifiers.focused && modifiers.disabled || void 0, tabIndex: isFocusTarget(day) ? 0 : -1, "aria-label": labelDayButton2(date2, modifiers, dateLib.options, dateLib), onClick: handleDayClick(day, modifiers), onBlur: handleDayBlur(day, modifiers), onFocus: handleDayFocus(day, modifiers), onKeyDown: handleDayKeyDown(day, modifiers), onMouseEnter: handleDayMouseEnter(day, modifiers), onMouseLeave: handleDayMouseLeave(day, modifiers) }, formatDay2(date2, dateLib.options, dateLib)) : !modifiers.hidden && formatDay2(day.date, dateLib.options, dateLib));
                  })
                );
              }))
            )
          );
        })
      ),
      props.footer && React.createElement(components2.Footer, { className: classNames[UI.Footer], style: styles?.[UI.Footer], role: "status", "aria-live": "polite" }, props.footer)
    )
  );
}
function Calendar({ classNames, showOutsideDays = true, fixedWeeks = true, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DayPicker,
    {
      showOutsideDays,
      fixedWeeks,
      classNames: {
        [UI.Months]: "relative flex gap-md w-fit",
        [UI.Month]: "flex flex-col gap-md",
        [UI.MonthCaption]: "bloc text-center",
        [UI.CaptionLabel]: "text-grey-primary text-s font-medium capitalize items-center whitespace-nowrap h-10 flex justify-center",
        [UI.Nav]: "absolute top-0 start-0 end-0",
        [UI.PreviousMonthButton]: clsx(
          CtaV2ClassName({
            variant: "secondary",
            mode: "icon"
          }),
          "size-10 absolute start-0"
        ),
        [UI.NextMonthButton]: clsx(
          CtaV2ClassName({
            variant: "secondary",
            mode: "icon"
          }),
          "size-10 absolute end-0"
        ),
        [UI.Chevron]: "absolute m-auto size-5",
        [UI.MonthGrid]: "w-full border-none",
        [UI.Weekdays]: "flex w-full",
        [UI.Weekday]: "flex items-center justify-center size-12 text-xs font-semibold text-grey-primary",
        [UI.Weeks]: "border-none",
        [UI.Week]: "flex w-full",
        [UI.Day]: "flex p-0",
        [UI.DayButton]: "size-12 text-default font-medium",
        [SelectionState.selected]: clsx(
          "transition-colors",
          props.mode === "single" && "rounded-md bg-purple-primary text-grey-white "
        ),
        [SelectionState.range_start]: "text-grey-white bg-purple-primary rounded-s-md",
        [SelectionState.range_end]: "text-grey-white bg-purple-primary rounded-e-md",
        [SelectionState.range_middle]: "text-purple-primary bg-purple-background-light",
        [DayFlag.outside]: "text-grey-disabled",
        [DayFlag.disabled]: "text-grey-disabled",
        [DayFlag.today]: 'after:absolute after:bottom-0 after:start-0 after:end-0 after:content-["."] after:text-l after:text-center relative after:pointer-events-none',
        [DayFlag.hidden]: "invisible",
        ...classNames
      },
      components: {
        Chevron: (props2) => /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: props2.orientation === "left" ? "arrow-left" : "arrow-right", ...props2 })
      },
      ...props
    }
  );
}
const cardClassName = cva("border rounded-md p-md", {
  variants: {
    color: {
      default: "border-grey-border bg-surface-card",
      purple: "border-purple-border-light bg-purple-background-light dark:border-purple-disabled dark:bg-purple-border",
      grey: "border-grey-background-light bg-grey-background-light"
    }
  },
  defaultVariants: {
    color: "default"
  }
});
const Card = reactExports.forwardRef(function Card2({ children, className, color }, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn(cardClassName({ color }), className), children });
});
var __defProp$b = Object.defineProperty;
var __name$b = (target, value) => __defProp$b(target, "name", { value, configurable: true });
var useReactId = React$1[" useId ".trim().toString()] || (() => void 0);
var count$1 = 0;
function useId(deterministicId) {
  const [id, setId] = reactExports.useState(useReactId());
  useLayoutEffect2(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count$1++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}
__name$b(useId, "useId");
var U = 1, Y$1 = 0.9, H = 0.8, J = 0.17, p = 0.1, u = 0.999, $ = 0.9999;
var k$1 = 0.99, m = /[\\\/_+.#"@\[\(\{&]/, B$1 = /[\\\/_+.#"@\[\(\{&]/g, K$1 = /[\s-]/, X = /[\s-]/g;
function G(_, C, h, P2, A, f, O) {
  if (f === C.length) return A === _.length ? U : k$1;
  var T2 = `${A},${f}`;
  if (O[T2] !== void 0) return O[T2];
  for (var L2 = P2.charAt(f), c = h.indexOf(L2, A), S = 0, E, N2, R, M2; c >= 0; ) E = G(_, C, h, P2, c + 1, f + 1, O), E > S && (c === A ? E *= U : m.test(_.charAt(c - 1)) ? (E *= H, R = _.slice(A, c - 1).match(B$1), R && A > 0 && (E *= Math.pow(u, R.length))) : K$1.test(_.charAt(c - 1)) ? (E *= Y$1, M2 = _.slice(A, c - 1).match(X), M2 && A > 0 && (E *= Math.pow(u, M2.length))) : (E *= J, A > 0 && (E *= Math.pow(u, c - A))), _.charAt(c) !== C.charAt(f) && (E *= $)), (E < p && h.charAt(c - 1) === P2.charAt(f + 1) || P2.charAt(f + 1) === P2.charAt(f) && h.charAt(c - 1) !== P2.charAt(f)) && (N2 = G(_, C, h, P2, c + 1, f + 2, O), N2 * p > E && (E = N2 * p)), E > S && (S = E), c = h.indexOf(L2, c + 1);
  return O[T2] = S, S;
}
function D(_) {
  return _.toLowerCase().replace(X, " ");
}
function W(_, C, h) {
  return _ = h && h.length > 0 ? `${_ + " " + h.join(" ")}` : _, G(_, C, D(_), D(C), 0, 0, {});
}
var __defProp$a = Object.defineProperty;
var __name$a = (target, value) => __defProp$a(target, "name", { value, configurable: true });
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS$1 = { bubbles: false, cancelable: true };
var FocusScope = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name$a(function FocusScope2(props, forwardedRef) {
    const {
      loop = false,
      trapped = false,
      onMountAutoFocus: onMountAutoFocusProp,
      onUnmountAutoFocus: onUnmountAutoFocusProp,
      ...scopeProps
    } = props;
    const [container, setContainer] = reactExports.useState(null);
    const onMountAutoFocus = useCallbackRef$1(onMountAutoFocusProp);
    const onUnmountAutoFocus = useCallbackRef$1(onUnmountAutoFocusProp);
    const lastFocusedElementRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, setContainer);
    const focusScope = reactExports.useRef({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    }).current;
    reactExports.useEffect(() => {
      if (trapped) {
        let handleFocusIn2 = function(event) {
          if (focusScope.paused || !container) return;
          const target = event.target;
          if (container.contains(target)) {
            lastFocusedElementRef.current = target;
          } else {
            focus(lastFocusedElementRef.current, { select: true });
          }
        }, handleFocusOut2 = function(event) {
          if (focusScope.paused || !container) return;
          const relatedTarget = event.relatedTarget;
          if (relatedTarget === null) return;
          if (!container.contains(relatedTarget)) {
            focus(lastFocusedElementRef.current, { select: true });
          }
        }, handleMutations2 = function(mutations) {
          const focusedElement = document.activeElement;
          if (focusedElement !== document.body) return;
          for (const mutation of mutations) {
            if (mutation.removedNodes.length > 0) focus(container);
          }
        };
        __name$a(handleFocusIn2, "handleFocusIn");
        __name$a(handleFocusOut2, "handleFocusOut");
        __name$a(handleMutations2, "handleMutations");
        document.addEventListener("focusin", handleFocusIn2);
        document.addEventListener("focusout", handleFocusOut2);
        const mutationObserver = new MutationObserver(handleMutations2);
        if (container) mutationObserver.observe(container, { childList: true, subtree: true });
        return () => {
          document.removeEventListener("focusin", handleFocusIn2);
          document.removeEventListener("focusout", handleFocusOut2);
          mutationObserver.disconnect();
        };
      }
    }, [trapped, container, focusScope.paused]);
    reactExports.useEffect(() => {
      if (container) {
        focusScopesStack.add(focusScope);
        const previouslyFocusedElement = document.activeElement;
        const hasFocusedCandidate = container.contains(previouslyFocusedElement);
        if (!hasFocusedCandidate) {
          const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS$1);
          container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
          container.dispatchEvent(mountEvent);
          if (!mountEvent.defaultPrevented) {
            focusFirst$1(removeLinks(getTabbableCandidates(container)), { select: true });
            if (document.activeElement === previouslyFocusedElement) {
              focus(container);
            }
          }
        }
        return () => {
          container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
          setTimeout(() => {
            const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS$1);
            container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
            container.dispatchEvent(unmountEvent);
            if (!unmountEvent.defaultPrevented) {
              focus(previouslyFocusedElement ?? document.body, { select: true });
            }
            container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
            focusScopesStack.remove(focusScope);
          }, 0);
        };
      }
    }, [container, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
    const handleKeyDown = reactExports.useCallback(
      (event) => {
        if (!loop && !trapped) return;
        if (focusScope.paused) return;
        const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
        const focusedElement = document.activeElement;
        if (isTabKey && focusedElement) {
          const container2 = event.currentTarget;
          const [first, last] = getTabbableEdges(container2);
          const hasTabbableElementsInside = first && last;
          if (!hasTabbableElementsInside) {
            if (focusedElement === container2) event.preventDefault();
          } else {
            if (!event.shiftKey && focusedElement === last) {
              event.preventDefault();
              if (loop) focus(first, { select: true });
            } else if (event.shiftKey && focusedElement === first) {
              event.preventDefault();
              if (loop) focus(last, { select: true });
            }
          }
        }
      },
      [loop, trapped, focusScope.paused]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { tabIndex: -1, ...scopeProps, ref: composedRefs, onKeyDown: handleKeyDown });
  }, "FocusScope")
);
function focusFirst$1(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (document.activeElement !== previouslyFocusedElement) return;
  }
}
__name$a(focusFirst$1, "focusFirst");
function getTabbableEdges(container) {
  const candidates = getTabbableCandidates(container);
  const first = findVisible(candidates, container);
  const last = findVisible(candidates.reverse(), container);
  return [first, last];
}
__name$a(getTabbableEdges, "getTabbableEdges");
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ __name$a((node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
__name$a(getTabbableCandidates, "getTabbableCandidates");
function findVisible(elements, container) {
  const canUseCheckVisibility = typeof container.checkVisibility === "function" && container.checkVisibility({ checkVisibilityCSS: true });
  for (const element of elements) {
    const hidden = canUseCheckVisibility ? !element.checkVisibility({ checkVisibilityCSS: true }) : isHidden(element, { upTo: container });
    if (!hidden) {
      return element;
    }
  }
}
__name$a(findVisible, "findVisible");
function isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden") return true;
  while (node) {
    if (upTo !== void 0 && node === upTo) return false;
    if (getComputedStyle(node).display === "none") return true;
    node = node.parentElement;
  }
  return false;
}
__name$a(isHidden, "isHidden");
function isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
__name$a(isSelectableInput, "isSelectableInput");
function focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
      element.select();
  }
}
__name$a(focus, "focus");
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope) {
        activeFocusScope?.pause();
      }
      stack = arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      stack = arrayRemove(stack, focusScope);
      stack[0]?.resume();
    }
  };
}
__name$a(createFocusScopesStack, "createFocusScopesStack");
function arrayRemove(array, item) {
  const updatedArray = [...array];
  const index2 = updatedArray.indexOf(item);
  if (index2 !== -1) {
    updatedArray.splice(index2, 1);
  }
  return updatedArray;
}
__name$a(arrayRemove, "arrayRemove");
function removeLinks(items) {
  return items.filter((item) => item.tagName !== "A");
}
__name$a(removeLinks, "removeLinks");
var __defProp$9 = Object.defineProperty;
var __name$9 = (target, value) => __defProp$9(target, "name", { value, configurable: true });
var count = 0;
var guards = null;
function FocusGuards(props) {
  useFocusGuards();
  return props.children;
}
__name$9(FocusGuards, "FocusGuards");
function useFocusGuards() {
  reactExports.useEffect(() => {
    if (!guards) {
      guards = { start: createFocusGuard(), end: createFocusGuard() };
    }
    const { start, end } = guards;
    if (document.body.firstElementChild !== start) {
      document.body.insertAdjacentElement("afterbegin", start);
    }
    if (document.body.lastElementChild !== end) {
      document.body.insertAdjacentElement("beforeend", end);
    }
    count++;
    return () => {
      if (count === 1) {
        guards?.start.remove();
        guards?.end.remove();
        guards = null;
      }
      count = Math.max(0, count - 1);
    };
  }, []);
}
__name$9(useFocusGuards, "useFocusGuards");
function createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.outline = "none";
  element.style.opacity = "0";
  element.style.position = "fixed";
  element.style.pointerEvents = "none";
  return element;
}
__name$9(createFocusGuard, "createFocusGuard");
var tslib$1 = { exports: {} };
var hasRequiredTslib;
function requireTslib() {
  if (hasRequiredTslib) return tslib$1.exports;
  hasRequiredTslib = 1;
  (function(module) {
    var __extends2;
    var __assign2;
    var __rest2;
    var __decorate2;
    var __param2;
    var __esDecorate2;
    var __runInitializers2;
    var __propKey2;
    var __setFunctionName2;
    var __metadata2;
    var __awaiter2;
    var __generator2;
    var __exportStar2;
    var __values2;
    var __read2;
    var __spread2;
    var __spreadArrays2;
    var __spreadArray2;
    var __await2;
    var __asyncGenerator2;
    var __asyncDelegator2;
    var __asyncValues2;
    var __makeTemplateObject2;
    var __importStar2;
    var __importDefault2;
    var __classPrivateFieldGet2;
    var __classPrivateFieldSet2;
    var __classPrivateFieldIn2;
    var __createBinding2;
    var __addDisposableResource2;
    var __disposeResources2;
    var __rewriteRelativeImportExtension2;
    (function(factory) {
      var root = typeof commonjsGlobal === "object" ? commonjsGlobal : typeof self === "object" ? self : typeof this === "object" ? this : {};
      {
        factory(createExporter(root, createExporter(module.exports)));
      }
      function createExporter(exports, previous) {
        if (exports !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports, "__esModule", { value: true });
          } else {
            exports.__esModule = true;
          }
        }
        return function(id, v) {
          return exports[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p2 in b) if (Object.prototype.hasOwnProperty.call(b, p2)) d[p2] = b[p2];
      };
      __extends2 = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2)) t[p2] = s[p2];
        }
        return t;
      };
      __rest2 = function(s, e) {
        var t = {};
        for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
          t[p2] = s[p2];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
            if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
              t[p2[i]] = s[p2[i]];
          }
        return t;
      };
      __decorate2 = function(decorators, target, key, desc) {
        var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
        return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
      };
      __param2 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __esDecorate2 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) {
          if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
          return f;
        }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
          var context = {};
          for (var p2 in contextIn) context[p2] = p2 === "access" ? {} : contextIn[p2];
          for (var p2 in contextIn.access) context.access[p2] = contextIn.access[p2];
          context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
          };
          var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
          if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
          } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
          }
        }
        if (target) Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
      };
      __runInitializers2 = function(thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
          value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
      };
      __propKey2 = function(x) {
        return typeof x === "symbol" ? x : "".concat(x);
      };
      __setFunctionName2 = function(f, name, prefix) {
        if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
        return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
      };
      __metadata2 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter2 = function(thisArg, _arguments, P2, generator) {
        function adopt(value) {
          return value instanceof P2 ? value : new P2(function(resolve) {
            resolve(value);
          });
        }
        return new (P2 || (P2 = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator2 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
        return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2]) _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
          if (op[0] & 5) throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar2 = function(m2, o) {
        for (var p2 in m2) if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(o, p2)) __createBinding2(o, m2, p2);
      };
      __createBinding2 = Object.create ? (function(o, m2, k2, k22) {
        if (k22 === void 0) k22 = k2;
        var desc = Object.getOwnPropertyDescriptor(m2, k2);
        if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m2[k2];
          } };
        }
        Object.defineProperty(o, k22, desc);
      }) : (function(o, m2, k2, k22) {
        if (k22 === void 0) k22 = k2;
        o[k22] = m2[k2];
      });
      __values2 = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m2 = s && o[s], i = 0;
        if (m2) return m2.call(o);
        if (o && typeof o.length === "number") return {
          next: function() {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read2 = function(o, n) {
        var m2 = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m2) return o;
        var i = m2.call(o), r2, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r2 = i.next()).done) ar.push(r2.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r2 && !r2.done && (m2 = i["return"])) m2.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return ar;
      };
      __spread2 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read2(arguments[i]));
        return ar;
      };
      __spreadArrays2 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r2 = Array(s), k2 = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k2++)
            r2[k2] = a[j];
        return r2;
      };
      __spreadArray2 = function(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      __await2 = function(v) {
        return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
      };
      __asyncGenerator2 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function awaitReturn(f) {
          return function(v) {
            return Promise.resolve(v).then(f, reject);
          };
        }
        function verb(n, f) {
          if (g[n]) {
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
            if (f) i[n] = f(i[n]);
          }
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r2) {
          r2.value instanceof __await2 ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q[0][2], r2);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator2 = function(o) {
        var i, p2;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p2 = !p2) ? { value: __await2(o[n](v)), done: false } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues2 = function(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m2 = o[Symbol.asyncIterator], i;
        return m2 ? m2.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject2 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }) : function(o, v) {
        o["default"] = v;
      };
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k2 in o2) if (Object.prototype.hasOwnProperty.call(o2, k2)) ar[ar.length] = k2;
          return ar;
        };
        return ownKeys(o);
      };
      __importStar2 = function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k2 = ownKeys(mod), i = 0; i < k2.length; i++) if (k2[i] !== "default") __createBinding2(result, mod, k2[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault2 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet2 = function(receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      __classPrivateFieldIn2 = function(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
      };
      __addDisposableResource2 = function(env, value, async) {
        if (value !== null && value !== void 0) {
          if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
          var dispose, inner;
          if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
          }
          if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
          }
          if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
          if (inner) dispose = function() {
            try {
              inner.call(this);
            } catch (e) {
              return Promise.reject(e);
            }
          };
          env.stack.push({ value, dispose, async });
        } else if (async) {
          env.stack.push({ async: true });
        }
        return value;
      };
      var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message2) {
        var e = new Error(message2);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
      };
      __disposeResources2 = function(env) {
        function fail(e) {
          env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
          env.hasError = true;
        }
        var r2, s = 0;
        function next() {
          while (r2 = env.stack.pop()) {
            try {
              if (!r2.async && s === 1) return s = 0, env.stack.push(r2), Promise.resolve().then(next);
              if (r2.dispose) {
                var result = r2.dispose.call(r2.value);
                if (r2.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                  fail(e);
                  return next();
                });
              } else s |= 1;
            } catch (e) {
              fail(e);
            }
          }
          if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
          if (env.hasError) throw env.error;
        }
        return next();
      };
      __rewriteRelativeImportExtension2 = function(path, preserveJsx) {
        if (typeof path === "string" && /^\.\.?\//.test(path)) {
          return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m2, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m2 : d + ext + "." + cm.toLowerCase() + "js";
          });
        }
        return path;
      };
      exporter("__extends", __extends2);
      exporter("__assign", __assign2);
      exporter("__rest", __rest2);
      exporter("__decorate", __decorate2);
      exporter("__param", __param2);
      exporter("__esDecorate", __esDecorate2);
      exporter("__runInitializers", __runInitializers2);
      exporter("__propKey", __propKey2);
      exporter("__setFunctionName", __setFunctionName2);
      exporter("__metadata", __metadata2);
      exporter("__awaiter", __awaiter2);
      exporter("__generator", __generator2);
      exporter("__exportStar", __exportStar2);
      exporter("__createBinding", __createBinding2);
      exporter("__values", __values2);
      exporter("__read", __read2);
      exporter("__spread", __spread2);
      exporter("__spreadArrays", __spreadArrays2);
      exporter("__spreadArray", __spreadArray2);
      exporter("__await", __await2);
      exporter("__asyncGenerator", __asyncGenerator2);
      exporter("__asyncDelegator", __asyncDelegator2);
      exporter("__asyncValues", __asyncValues2);
      exporter("__makeTemplateObject", __makeTemplateObject2);
      exporter("__importStar", __importStar2);
      exporter("__importDefault", __importDefault2);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
      exporter("__classPrivateFieldIn", __classPrivateFieldIn2);
      exporter("__addDisposableResource", __addDisposableResource2);
      exporter("__disposeResources", __disposeResources2);
      exporter("__rewriteRelativeImportExtension", __rewriteRelativeImportExtension2);
    });
  })(tslib$1);
  return tslib$1.exports;
}
var tslibExports = /* @__PURE__ */ requireTslib();
const tslib = /* @__PURE__ */ getDefaultExportFromCjs(tslibExports);
const {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __exportStar,
  __createBinding,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension
} = tslib;
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}
function useCallbackRef(initialValue, callback) {
  var ref = reactExports.useState(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}
var useIsomorphicLayoutEffect$2 = reactExports.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(refs, defaultValue2) {
  var callbackRef = useCallbackRef(null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect$2(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle2 = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle2();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle2();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options2);
  return medium;
}
var SideCar$1 = function(_a2) {
  var sideCar = _a2.sideCar, rest = __rest(_a2, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return reactExports.createElement(Target, __assign({}, rest));
};
SideCar$1.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar$1;
}
var effectCar = createSidecarMedium();
var nothing = function() {
  return;
};
var RemoveScroll = reactExports.forwardRef(function(props, parentRef) {
  var ref = reactExports.useRef(null);
  var _a2 = reactExports.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a2[0], setCallbacks = _a2[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    enabled && reactExports.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noRelative, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? reactExports.cloneElement(reactExports.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : reactExports.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};
var getNonce = function() {
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    reactExports.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a2) {
    var styles = _a2.styles, dynamic = _a2.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var getGapWidth = function(gapMode) {
  {
    return zeroGap;
  }
};
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a2, allowRelative, gapMode, important) {
  var left = _a2.left, top = _a2.top, right = _a2.right, gap = _a2.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
  var counter = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
  reactExports.useEffect(function() {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function() {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function(_a2) {
  var noRelative = _a2.noRelative, noImportant = _a2.noImportant, _b = _a2.gapMode, gapMode = _b === void 0 ? "margin" : _b;
  useLockAttribute();
  var gap = reactExports.useMemo(function() {
    return getGapWidth();
  }, [gapMode]);
  return reactExports.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};
var nonPassive = false;
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  if (!(node instanceof Element)) {
    return false;
  }
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var ownerDocument = node.ownerDocument;
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a2 = getScrollVariables(axis, current), scrollHeight = _a2[1], clientHeight = _a2[2];
      if (scrollHeight > clientHeight) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a2) {
  var scrollTop = _a2.scrollTop, scrollHeight = _a2.scrollHeight, clientHeight = _a2.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a2) {
  var scrollLeft = _a2.scrollLeft, scrollWidth = _a2.scrollWidth, clientWidth = _a2.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    if (!target) {
      break;
    }
    var _a2 = getScrollVariables(axis, target), position = _a2[0], scroll_1 = _a2[1], capacity = _a2[2];
    var elementScroll2 = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll2) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll2;
        availableScrollTop += position;
      }
    }
    var parent_1 = target.parentNode;
    target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (Math.abs(availableScroll) < 1 || false)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (Math.abs(availableScrollTop) < 1 || false)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = reactExports.useRef([]);
  var touchStartRef = reactExports.useRef([0, 0]);
  var activeAxis = reactExports.useRef();
  var id = reactExports.useState(idCounter++)[0];
  var Style2 = reactExports.useState(styleSingleton)[0];
  var lastProps = reactExports.useRef(props);
  reactExports.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  reactExports.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = reactExports.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var selection = window.getSelection();
    var anchorNode = selection && selection.anchorNode;
    var isTouchingSelection = anchorNode ? anchorNode === target || anchorNode.contains(target) : false;
    if (isTouchingSelection) {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY);
  }, []);
  var shouldPrevent = reactExports.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = reactExports.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = reactExports.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = reactExports.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = reactExports.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  reactExports.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    inert ? reactExports.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? reactExports.createElement(RemoveScrollBar, { noRelative: props.noRelative, gapMode: props.gapMode }) : null
  );
}
function getOutermostShadowParent(node) {
  var shadowParent = null;
  while (node !== null) {
    if (node instanceof ShadowRoot) {
      shadowParent = node.host;
      node = node.host;
    }
    node = node.parentNode;
  }
  return shadowParent;
}
const SideCar = exportSidecar(effectCar, RemoveScrollSideCar);
var ReactRemoveScroll = reactExports.forwardRef(function(props, ref) {
  return reactExports.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: SideCar }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
  return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x) {
    return Boolean(x);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node) {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        try {
          var attr = node.getAttribute(controlAttribute);
          var alreadyHidden = attr !== null && attr !== "false";
          var counterValue = (counterMap.get(node) || 0) + 1;
          var markerValue = (markerCounter.get(node) || 0) + 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          hiddenNodes.push(node);
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node, true);
          }
          if (markerValue === 1) {
            node.setAttribute(markerName, "true");
          }
          if (!alreadyHidden) {
            node.setAttribute(controlAttribute, "true");
          }
        } catch (e) {
          console.error("aria-hidden: cannot operate on ", node, e);
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node) {
      var counterValue = counterMap.get(node) - 1;
      var markerValue = markerCounter.get(node) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node);
      }
      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live], script")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};
var __defProp$8 = Object.defineProperty;
var __name$8 = (target, value) => __defProp$8(target, "name", { value, configurable: true });
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = /* @__PURE__ */ createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = /* @__PURE__ */ __name$8((props) => {
  const {
    __scopeDialog,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const triggerRef = reactExports.useRef(null);
  const contentRef = reactExports.useRef(null);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: DIALOG_NAME
  });
  const [titleCount, setTitleCount] = reactExports.useState(0);
  const [descriptionCount, setDescriptionCount] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DialogProvider,
    {
      scope: __scopeDialog,
      triggerRef,
      contentRef,
      contentId: useId(),
      titleId: useId(),
      descriptionId: useId(),
      titlePresent: titleCount > 0,
      descriptionPresent: descriptionCount > 0,
      setTitleCount,
      setDescriptionCount,
      open,
      onOpenChange: setOpen,
      onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      children
    }
  );
}, "Dialog");
var TRIGGER_NAME$2 = "DialogTrigger";
var DialogTrigger = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name$8(function DialogTrigger2(props, forwardedRef) {
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME$2, __scopeDialog);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.open ? context.contentId : void 0,
        "data-state": getState$2(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }, "DialogTrigger")
);
var PORTAL_NAME$1 = "DialogPortal";
var [PortalProvider$1, usePortalContext$1] = createDialogContext(PORTAL_NAME$1, {
  forceMount: void 0
});
var DialogPortal = /* @__PURE__ */ __name$8((props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = useDialogContext(PORTAL_NAME$1, __scopeDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortalProvider$1, { scope: __scopeDialog, forceMount, children: reactExports.Children.map(children, (child) => /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$2, { asChild: true, container, children: child }) })) });
}, "DialogPortal");
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name$8(function DialogOverlay2(props, forwardedRef) {
    const portalContext = usePortalContext$1(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlayImpl, { ...overlayProps, ref: forwardedRef }) }) : null;
  }, "DialogOverlay")
);
var Slot$1 = /* @__PURE__ */ createSlot("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name$8(function DialogOverlayImpl2(props, forwardedRef) {
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    const registerDismissableSurface = useDismissableLayerSurface();
    const composedRefs = useComposedRefs(forwardedRef, registerDismissableSurface);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReactRemoveScroll, { as: Slot$1, allowPinchZoom: true, shards: [context.contentRef], children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.div,
        {
          "data-state": getState$2(context.open),
          ...overlayProps,
          ref: composedRefs,
          style: { pointerEvents: "auto", ...overlayProps.style }
        }
      ) })
    );
  }, "DialogOverlayImpl")
);
var CONTENT_NAME$1 = "DialogContent";
var DialogContent = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name$8(function DialogContent2(props, forwardedRef) {
    const portalContext = usePortalContext$1(CONTENT_NAME$1, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME$1, props.__scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }, "DialogContent")
);
var DialogContentModal = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name$8(function DialogContentModal2(props, forwardedRef) {
    const context = useDialogContext(CONTENT_NAME$1, props.__scopeDialog);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
    reactExports.useEffect(() => {
      const content = contentRef.current;
      if (content) return hideOthers(content);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      DialogContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: context.open,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          event.preventDefault();
          context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (isRightClick) event.preventDefault();
        }),
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault()
        )
      }
    );
  }, "DialogContentModal")
);
var DialogContentNonModal = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name$8(function DialogContentNonModal2(props, forwardedRef) {
    const context = useDialogContext(CONTENT_NAME$1, props.__scopeDialog);
    const hasInteractedOutsideRef = reactExports.useRef(false);
    const hasPointerDownOutsideRef = reactExports.useRef(false);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      DialogContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          props.onCloseAutoFocus?.(event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          props.onInteractOutside?.(event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = context.triggerRef.current?.contains(target);
          if (targetIsTrigger) event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }, "DialogContentNonModal")
);
var DialogContentImpl = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name$8(function DialogContentImpl2(props, forwardedRef) {
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME$1, __scopeDialog);
    useFocusGuards();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      FocusScope,
      {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DismissableLayer,
          {
            role: "dialog",
            id: context.contentId,
            "aria-describedby": context.descriptionPresent ? context.descriptionId : void 0,
            "aria-labelledby": context.titlePresent ? context.titleId : void 0,
            "data-state": getState$2(context.open),
            ...contentProps,
            ref: forwardedRef,
            deferPointerDownOutside: true,
            onDismiss: () => context.onOpenChange(false)
          }
        )
      }
    ) });
  }, "DialogContentImpl")
);
var TITLE_NAME = "DialogTitle";
var DialogTitle = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name$8(function DialogTitle2(props, forwardedRef) {
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    const { setTitleCount } = context;
    useLayoutEffect2(() => {
      setTitleCount((count2) => count2 + 1);
      return () => setTitleCount((count2) => count2 - 1);
    }, [setTitleCount]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.h2, { id: context.titleId, ...titleProps, ref: forwardedRef });
  }, "DialogTitle")
);
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name$8(function DialogDescription2(props, forwardedRef) {
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    const { setDescriptionCount } = context;
    useLayoutEffect2(() => {
      setDescriptionCount((count2) => count2 + 1);
      return () => setDescriptionCount((count2) => count2 - 1);
    }, [setDescriptionCount]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.p, { id: context.descriptionId, ...descriptionProps, ref: forwardedRef });
  }, "DialogDescription")
);
var CLOSE_NAME = "DialogClose";
var DialogClose = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name$8(function DialogClose2(props, forwardedRef) {
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }, "DialogClose")
);
function getState$2(open) {
  return open ? "open" : "closed";
}
__name$8(getState$2, "getState");
var N = '[cmdk-group=""]', Y = '[cmdk-group-items=""]', be = '[cmdk-group-heading=""]', le = '[cmdk-item=""]', ce = `${le}:not([aria-disabled="true"])`, Z = "cmdk-item-select", T = "data-value", Re = (r2, o, n) => W(r2, o, n), ue = reactExports.createContext(void 0), K = () => reactExports.useContext(ue), de = reactExports.createContext(void 0), ee = () => reactExports.useContext(de), fe = reactExports.createContext(void 0), me = reactExports.forwardRef((r2, o) => {
  let n = L(() => {
    var e, a;
    return { search: "", value: (a = (e = r2.value) != null ? e : r2.defaultValue) != null ? a : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), u2 = L(() => /* @__PURE__ */ new Set()), c = L(() => /* @__PURE__ */ new Map()), d = L(() => /* @__PURE__ */ new Map()), f = L(() => /* @__PURE__ */ new Set()), p2 = pe(r2), { label: b, children: m2, value: R, onValueChange: x, filter: C, shouldFilter: S, loop: A, disablePointerSelection: ge = false, vimBindings: j = true, ...O } = r2, $2 = useId(), q = useId(), _ = useId(), I = reactExports.useRef(null), v = ke();
  k(() => {
    if (R !== void 0) {
      let e = R.trim();
      n.current.value = e, E.emit();
    }
  }, [R]), k(() => {
    v(6, ne);
  }, []);
  let E = reactExports.useMemo(() => ({ subscribe: (e) => (f.current.add(e), () => f.current.delete(e)), snapshot: () => n.current, setState: (e, a, s) => {
    var i, l, g, y;
    if (!Object.is(n.current[e], a)) {
      if (n.current[e] = a, e === "search") J2(), z(), v(1, W2);
      else if (e === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let h = document.getElementById(_);
          h ? h.focus() : (i = document.getElementById($2)) == null || i.focus();
        }
        if (v(7, () => {
          var h;
          n.current.selectedItemId = (h = M2()) == null ? void 0 : h.id, E.emit();
        }), s || v(5, ne), ((l = p2.current) == null ? void 0 : l.value) !== void 0) {
          let h = a != null ? a : "";
          (y = (g = p2.current).onValueChange) == null || y.call(g, h);
          return;
        }
      }
      E.emit();
    }
  }, emit: () => {
    f.current.forEach((e) => e());
  } }), []), U2 = reactExports.useMemo(() => ({ value: (e, a, s) => {
    var i;
    a !== ((i = d.current.get(e)) == null ? void 0 : i.value) && (d.current.set(e, { value: a, keywords: s }), n.current.filtered.items.set(e, te(a, s)), v(2, () => {
      z(), E.emit();
    }));
  }, item: (e, a) => (u2.current.add(e), a && (c.current.has(a) ? c.current.get(a).add(e) : c.current.set(a, /* @__PURE__ */ new Set([e]))), v(3, () => {
    J2(), z(), n.current.value || W2(), E.emit();
  }), () => {
    d.current.delete(e), u2.current.delete(e), n.current.filtered.items.delete(e);
    let s = M2();
    v(4, () => {
      J2(), (s == null ? void 0 : s.getAttribute("id")) === e && W2(), E.emit();
    });
  }), group: (e) => (c.current.has(e) || c.current.set(e, /* @__PURE__ */ new Set()), () => {
    d.current.delete(e), c.current.delete(e);
  }), filter: () => p2.current.shouldFilter, label: b || r2["aria-label"], getDisablePointerSelection: () => p2.current.disablePointerSelection, listId: $2, inputId: _, labelId: q, listInnerRef: I }), []);
  function te(e, a) {
    var i, l;
    let s = (l = (i = p2.current) == null ? void 0 : i.filter) != null ? l : Re;
    return e ? s(e, n.current.search, a) : 0;
  }
  function z() {
    if (!n.current.search || p2.current.shouldFilter === false) return;
    let e = n.current.filtered.items, a = [];
    n.current.filtered.groups.forEach((i) => {
      let l = c.current.get(i), g = 0;
      l.forEach((y) => {
        let h = e.get(y);
        g = Math.max(h, g);
      }), a.push([i, g]);
    });
    let s = I.current;
    V().sort((i, l) => {
      var h, F;
      let g = i.getAttribute("id"), y = l.getAttribute("id");
      return ((h = e.get(y)) != null ? h : 0) - ((F = e.get(g)) != null ? F : 0);
    }).forEach((i) => {
      let l = i.closest(Y);
      l ? l.appendChild(i.parentElement === l ? i : i.closest(`${Y} > *`)) : s.appendChild(i.parentElement === s ? i : i.closest(`${Y} > *`));
    }), a.sort((i, l) => l[1] - i[1]).forEach((i) => {
      var g;
      let l = (g = I.current) == null ? void 0 : g.querySelector(`${N}[${T}="${encodeURIComponent(i[0])}"]`);
      l == null || l.parentElement.appendChild(l);
    });
  }
  function W2() {
    let e = V().find((s) => s.getAttribute("aria-disabled") !== "true"), a = e == null ? void 0 : e.getAttribute(T);
    E.setState("value", a || void 0);
  }
  function J2() {
    var a, s, i, l;
    if (!n.current.search || p2.current.shouldFilter === false) {
      n.current.filtered.count = u2.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let e = 0;
    for (let g of u2.current) {
      let y = (s = (a = d.current.get(g)) == null ? void 0 : a.value) != null ? s : "", h = (l = (i = d.current.get(g)) == null ? void 0 : i.keywords) != null ? l : [], F = te(y, h);
      n.current.filtered.items.set(g, F), F > 0 && e++;
    }
    for (let [g, y] of c.current) for (let h of y) if (n.current.filtered.items.get(h) > 0) {
      n.current.filtered.groups.add(g);
      break;
    }
    n.current.filtered.count = e;
  }
  function ne() {
    var a, s, i;
    let e = M2();
    e && (((a = e.parentElement) == null ? void 0 : a.firstChild) === e && ((i = (s = e.closest(N)) == null ? void 0 : s.querySelector(be)) == null || i.scrollIntoView({ block: "nearest" })), e.scrollIntoView({ block: "nearest" }));
  }
  function M2() {
    var e;
    return (e = I.current) == null ? void 0 : e.querySelector(`${le}[aria-selected="true"]`);
  }
  function V() {
    var e;
    return Array.from(((e = I.current) == null ? void 0 : e.querySelectorAll(ce)) || []);
  }
  function X2(e) {
    let s = V()[e];
    s && E.setState("value", s.getAttribute(T));
  }
  function Q(e) {
    var g;
    let a = M2(), s = V(), i = s.findIndex((y) => y === a), l = s[i + e];
    (g = p2.current) != null && g.loop && (l = i + e < 0 ? s[s.length - 1] : i + e === s.length ? s[0] : s[i + e]), l && E.setState("value", l.getAttribute(T));
  }
  function re2(e) {
    let a = M2(), s = a == null ? void 0 : a.closest(N), i;
    for (; s && !i; ) s = e > 0 ? we(s, N) : De(s, N), i = s == null ? void 0 : s.querySelector(ce);
    i ? E.setState("value", i.getAttribute(T)) : Q(e);
  }
  let oe = () => X2(V().length - 1), ie = (e) => {
    e.preventDefault(), e.metaKey ? oe() : e.altKey ? re2(1) : Q(1);
  }, se = (e) => {
    e.preventDefault(), e.metaKey ? X2(0) : e.altKey ? re2(-1) : Q(-1);
  };
  return reactExports.createElement(Primitive.div, { ref: o, tabIndex: -1, ...O, "cmdk-root": "", onKeyDown: (e) => {
    var s;
    (s = O.onKeyDown) == null || s.call(O, e);
    let a = e.nativeEvent.isComposing || e.keyCode === 229;
    if (!(e.defaultPrevented || a)) switch (e.key) {
      case "n":
      case "j": {
        j && e.ctrlKey && ie(e);
        break;
      }
      case "ArrowDown": {
        ie(e);
        break;
      }
      case "p":
      case "k": {
        j && e.ctrlKey && se(e);
        break;
      }
      case "ArrowUp": {
        se(e);
        break;
      }
      case "Home": {
        e.preventDefault(), X2(0);
        break;
      }
      case "End": {
        e.preventDefault(), oe();
        break;
      }
      case "Enter": {
        e.preventDefault();
        let i = M2();
        if (i) {
          let l = new Event(Z);
          i.dispatchEvent(l);
        }
      }
    }
  } }, reactExports.createElement("label", { "cmdk-label": "", htmlFor: U2.inputId, id: U2.labelId, style: Te }, b), B(r2, (e) => reactExports.createElement(de.Provider, { value: E }, reactExports.createElement(ue.Provider, { value: U2 }, e))));
}), he = reactExports.forwardRef((r2, o) => {
  var _, I;
  let n = useId(), u2 = reactExports.useRef(null), c = reactExports.useContext(fe), d = K(), f = pe(r2), p2 = (I = (_ = f.current) == null ? void 0 : _.forceMount) != null ? I : c == null ? void 0 : c.forceMount;
  k(() => {
    if (!p2) return d.item(n, c == null ? void 0 : c.id);
  }, [p2]);
  let b = ve(n, u2, [r2.value, r2.children, u2], r2.keywords), m2 = ee(), R = P((v) => v.value && v.value === b.current), x = P((v) => p2 || d.filter() === false ? true : v.search ? v.filtered.items.get(n) > 0 : true);
  reactExports.useEffect(() => {
    let v = u2.current;
    if (!(!v || r2.disabled)) return v.addEventListener(Z, C), () => v.removeEventListener(Z, C);
  }, [x, r2.onSelect, r2.disabled]);
  function C() {
    var v, E;
    S(), (E = (v = f.current).onSelect) == null || E.call(v, b.current);
  }
  function S() {
    m2.setState("value", b.current, true);
  }
  if (!x) return null;
  let { disabled: A, value: ge, onSelect: j, forceMount: O, keywords: $2, ...q } = r2;
  return reactExports.createElement(Primitive.div, { ref: composeRefs(u2, o), ...q, id: n, "cmdk-item": "", role: "option", "aria-disabled": !!A, "aria-selected": !!R, "data-disabled": !!A, "data-selected": !!R, onPointerMove: A || d.getDisablePointerSelection() ? void 0 : S, onClick: A ? void 0 : C }, r2.children);
}), Ee = reactExports.forwardRef((r2, o) => {
  let { heading: n, children: u2, forceMount: c, ...d } = r2, f = useId(), p2 = reactExports.useRef(null), b = reactExports.useRef(null), m2 = useId(), R = K(), x = P((S) => c || R.filter() === false ? true : S.search ? S.filtered.groups.has(f) : true);
  k(() => R.group(f), []), ve(f, p2, [r2.value, r2.heading, b]);
  let C = reactExports.useMemo(() => ({ id: f, forceMount: c }), [c]);
  return reactExports.createElement(Primitive.div, { ref: composeRefs(p2, o), ...d, "cmdk-group": "", role: "presentation", hidden: x ? void 0 : true }, n && reactExports.createElement("div", { ref: b, "cmdk-group-heading": "", "aria-hidden": true, id: m2 }, n), B(r2, (S) => reactExports.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? m2 : void 0 }, reactExports.createElement(fe.Provider, { value: C }, S))));
}), ye = reactExports.forwardRef((r2, o) => {
  let { alwaysRender: n, ...u2 } = r2, c = reactExports.useRef(null), d = P((f) => !f.search);
  return !n && !d ? null : reactExports.createElement(Primitive.div, { ref: composeRefs(c, o), ...u2, "cmdk-separator": "", role: "separator" });
}), Se = reactExports.forwardRef((r2, o) => {
  let { onValueChange: n, ...u2 } = r2, c = r2.value != null, d = ee(), f = P((m2) => m2.search), p2 = P((m2) => m2.selectedItemId), b = K();
  return reactExports.useEffect(() => {
    r2.value != null && d.setState("search", r2.value);
  }, [r2.value]), reactExports.createElement(Primitive.input, { ref: o, ...u2, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: false, "aria-autocomplete": "list", role: "combobox", "aria-expanded": true, "aria-controls": b.listId, "aria-labelledby": b.labelId, "aria-activedescendant": p2, id: b.inputId, type: "text", value: c ? r2.value : f, onChange: (m2) => {
    c || d.setState("search", m2.target.value), n == null || n(m2.target.value);
  } });
}), Ce = reactExports.forwardRef((r2, o) => {
  let { children: n, label: u2 = "Suggestions", ...c } = r2, d = reactExports.useRef(null), f = reactExports.useRef(null), p2 = P((m2) => m2.selectedItemId), b = K();
  return reactExports.useEffect(() => {
    if (f.current && d.current) {
      let m2 = f.current, R = d.current, x, C = new ResizeObserver(() => {
        x = requestAnimationFrame(() => {
          let S = m2.offsetHeight;
          R.style.setProperty("--cmdk-list-height", S.toFixed(1) + "px");
        });
      });
      return C.observe(m2), () => {
        cancelAnimationFrame(x), C.unobserve(m2);
      };
    }
  }, []), reactExports.createElement(Primitive.div, { ref: composeRefs(d, o), ...c, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": p2, "aria-label": u2, id: b.listId }, B(r2, (m2) => reactExports.createElement("div", { ref: composeRefs(f, b.listInnerRef), "cmdk-list-sizer": "" }, m2)));
}), xe = reactExports.forwardRef((r2, o) => {
  let { open: n, onOpenChange: u2, overlayClassName: c, contentClassName: d, container: f, ...p2 } = r2;
  return reactExports.createElement(Dialog, { open: n, onOpenChange: u2 }, reactExports.createElement(DialogPortal, { container: f }, reactExports.createElement(DialogOverlay, { "cmdk-overlay": "", className: c }), reactExports.createElement(DialogContent, { "aria-label": r2.label, "cmdk-dialog": "", className: d }, reactExports.createElement(me, { ref: o, ...p2 }))));
}), Ie = reactExports.forwardRef((r2, o) => P((u2) => u2.filtered.count === 0) ? reactExports.createElement(Primitive.div, { ref: o, ...r2, "cmdk-empty": "", role: "presentation" }) : null), Pe = reactExports.forwardRef((r2, o) => {
  let { progress: n, children: u2, label: c = "Loading...", ...d } = r2;
  return reactExports.createElement(Primitive.div, { ref: o, ...d, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": c }, B(r2, (f) => reactExports.createElement("div", { "aria-hidden": true }, f)));
}), _e = Object.assign(me, { List: Ce, Item: he, Input: Se, Group: Ee, Separator: ye, Dialog: xe, Empty: Ie, Loading: Pe });
function we(r2, o) {
  let n = r2.nextElementSibling;
  for (; n; ) {
    if (n.matches(o)) return n;
    n = n.nextElementSibling;
  }
}
function De(r2, o) {
  let n = r2.previousElementSibling;
  for (; n; ) {
    if (n.matches(o)) return n;
    n = n.previousElementSibling;
  }
}
function pe(r2) {
  let o = reactExports.useRef(r2);
  return k(() => {
    o.current = r2;
  }), o;
}
var k = reactExports.useEffect;
function L(r2) {
  let o = reactExports.useRef();
  return o.current === void 0 && (o.current = r2()), o;
}
function P(r2) {
  let o = ee(), n = () => r2(o.snapshot());
  return reactExports.useSyncExternalStore(o.subscribe, n, n);
}
function ve(r2, o, n, u2 = []) {
  let c = reactExports.useRef(), d = K();
  return k(() => {
    var b;
    let f = (() => {
      var m2;
      for (let R of n) {
        if (typeof R == "string") return R.trim();
        if (typeof R == "object" && "current" in R) return R.current ? (m2 = R.current.textContent) == null ? void 0 : m2.trim() : c.current;
      }
    })(), p2 = u2.map((m2) => m2.trim());
    d.value(r2, f, p2), (b = o.current) == null || b.setAttribute(T, f), c.current = f;
  }), c;
}
var ke = () => {
  let [r2, o] = reactExports.useState(), n = L(() => /* @__PURE__ */ new Map());
  return k(() => {
    n.current.forEach((u2) => u2()), n.current = /* @__PURE__ */ new Map();
  }, [r2]), (u2, c) => {
    n.current.set(u2, c), o({});
  };
};
function Me(r2) {
  let o = r2.type;
  return typeof o == "function" ? o(r2.props) : "render" in o ? o.render(r2.props) : r2;
}
function B({ asChild: r2, children: o }, n) {
  return r2 && reactExports.isValidElement(o) ? reactExports.cloneElement(Me(o), { ref: o.ref }, n(o.props.children)) : n(o);
}
var Te = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const defaultLanguage = "en";
function defaultFormatDateTimeWithoutPresets(date2, options2) {
  const d = typeof date2 === "string" ? new Date(date2) : date2;
  const lang = options2?.language ?? defaultLanguage;
  try {
    const fmt = new Intl.DateTimeFormat(lang, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      ...options2 ?? {}
    });
    return fmt.format(d);
  } catch {
    return d.toString();
  }
}
function defaultFormatDuration(duration, language) {
  const lang = language ?? defaultLanguage;
  try {
    const negative = duration.startsWith("-");
    const raw = negative ? duration.slice(1) : duration;
    const match = /^P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?$/i.exec(raw);
    if (!match) return duration;
    const years = Number(match[1] ?? 0);
    const months = Number(match[2] ?? 0);
    const days = Number(match[3] ?? 0);
    const rtf = new Intl.RelativeTimeFormat(lang, { numeric: "always", style: "long" });
    if (years) return rtf.format(-years, "year");
    if (months) return rtf.format(-months, "month");
    if (days) return rtf.format(-days, "day");
    return duration;
  } catch {
    return duration;
  }
}
const FormattingContext = reactExports.createContext({
  language: defaultLanguage,
  formatDateTimeWithoutPresets: defaultFormatDateTimeWithoutPresets,
  formatDuration: defaultFormatDuration
});
function FormattingProvider({ value, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormattingContext.Provider, { value, children });
}
function useFormatting() {
  return reactExports.useContext(FormattingContext);
}
function useFormatLanguage$1() {
  return reactExports.useContext(FormattingContext).language;
}
const defaultValue = {
  locale: "en",
  t: (key) => key
};
const I18nContext = reactExports.createContext(defaultValue);
function I18nProvider({
  children,
  locale: localeOverride,
  t: tOverride
}) {
  const { t: i18nT, i18n } = useTranslation();
  const subscribedLocale = reactExports.useSyncExternalStore(
    (onStoreChange) => {
      const handler = () => onStoreChange();
      i18n.on("languageChanged", handler);
      return () => i18n.off("languageChanged", handler);
    },
    () => i18n.resolvedLanguage ?? i18n.language,
    () => i18n.language
  );
  const locale = localeOverride ?? subscribedLocale;
  const t = tOverride ?? i18nT;
  const value = reactExports.useMemo(() => ({ locale, t }), [locale, t]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(I18nContext.Provider, { value, children });
}
function useI18n() {
  return reactExports.useContext(I18nContext);
}
var __defProp$7 = Object.defineProperty;
var __name$7 = (target, value) => __defProp$7(target, "name", { value, configurable: true });
var POPOVER_NAME = "Popover";
var [createPopoverContext, createPopoverScope] = /* @__PURE__ */ createContextScope(POPOVER_NAME, [
  createPopperScope
]);
var usePopperScope = createPopperScope();
var [PopoverProvider, usePopoverContext] = createPopoverContext(POPOVER_NAME);
var Popover = /* @__PURE__ */ __name$7((props) => {
  const {
    __scopePopover,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = false
  } = props;
  const popperScope = usePopperScope(__scopePopover);
  const triggerRef = reactExports.useRef(null);
  const [hasCustomAnchor, setHasCustomAnchor] = reactExports.useState(false);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: POPOVER_NAME
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2$2, { ...popperScope, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    PopoverProvider,
    {
      scope: __scopePopover,
      contentId: useId(),
      triggerRef,
      open,
      onOpenChange: setOpen,
      onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      hasCustomAnchor,
      onCustomAnchorAdd: reactExports.useCallback(() => setHasCustomAnchor(true), []),
      onCustomAnchorRemove: reactExports.useCallback(() => setHasCustomAnchor(false), []),
      modal,
      children
    }
  ) });
}, "Popover");
var ANCHOR_NAME = "PopoverAnchor";
var PopoverAnchor = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name$7(function PopoverAnchor2(props, forwardedRef) {
    const { __scopePopover, ...anchorProps } = props;
    const context = usePopoverContext(ANCHOR_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    const { onCustomAnchorAdd, onCustomAnchorRemove } = context;
    reactExports.useEffect(() => {
      onCustomAnchorAdd();
      return () => onCustomAnchorRemove();
    }, [onCustomAnchorAdd, onCustomAnchorRemove]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Anchor, { ...popperScope, ...anchorProps, ref: forwardedRef });
  }, "PopoverAnchor")
);
var TRIGGER_NAME$1 = "PopoverTrigger";
var PopoverTrigger = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name$7(function PopoverTrigger2(props, forwardedRef) {
    const { __scopePopover, ...triggerProps } = props;
    const context = usePopoverContext(TRIGGER_NAME$1, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    const trigger = /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.open ? context.contentId : void 0,
        "data-state": getState$1(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
    return context.hasCustomAnchor ? trigger : /* @__PURE__ */ jsxRuntimeExports.jsx(Anchor, { asChild: true, ...popperScope, children: trigger });
  }, "PopoverTrigger")
);
var PORTAL_NAME = "PopoverPortal";
var [PortalProvider, usePortalContext] = createPopoverContext(PORTAL_NAME, {
  forceMount: void 0
});
var PopoverPortal = /* @__PURE__ */ __name$7((props) => {
  const { __scopePopover, forceMount, children, container } = props;
  const context = usePopoverContext(PORTAL_NAME, __scopePopover);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortalProvider, { scope: __scopePopover, forceMount, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$2, { asChild: true, container, children }) }) });
}, "PopoverPortal");
var CONTENT_NAME = "PopoverContent";
var PopoverContent = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name$7(function PopoverContent2(props, forwardedRef) {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopePopover);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }, "PopoverContent")
);
var Slot = /* @__PURE__ */ createSlot("PopoverContent.RemoveScroll");
var PopoverContentModal = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name$7(function PopoverContentModal2(props, forwardedRef) {
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const isRightClickOutsideRef = reactExports.useRef(false);
    reactExports.useEffect(() => {
      const content = contentRef.current;
      if (content) return hideOthers(content);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ReactRemoveScroll, { as: Slot, allowPinchZoom: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      PopoverContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          event.preventDefault();
          if (!isRightClickOutsideRef.current) context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: composeEventHandlers(
          props.onPointerDownOutside,
          (event) => {
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            isRightClickOutsideRef.current = isRightClick;
          },
          { checkForDefaultPrevented: false }
        ),
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault(),
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }, "PopoverContentModal")
);
var PopoverContentNonModal = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name$7(function PopoverContentNonModal2(props, forwardedRef) {
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    const hasInteractedOutsideRef = reactExports.useRef(false);
    const hasPointerDownOutsideRef = reactExports.useRef(false);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      PopoverContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          props.onCloseAutoFocus?.(event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          props.onInteractOutside?.(event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = context.triggerRef.current?.contains(target);
          if (targetIsTrigger) event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }, "PopoverContentNonModal")
);
var PopoverContentImpl = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name$7(function PopoverContentImpl2(props, forwardedRef) {
    const {
      __scopePopover,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      ...contentProps
    } = props;
    const context = usePopoverContext(CONTENT_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    useFocusGuards();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      FocusScope,
      {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DismissableLayer,
          {
            asChild: true,
            disableOutsidePointerEvents,
            onInteractOutside,
            onEscapeKeyDown,
            onPointerDownOutside,
            onFocusOutside,
            onDismiss: () => context.onOpenChange(false),
            deferPointerDownOutside: true,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Content$1,
              {
                "data-state": getState$1(context.open),
                role: "dialog",
                id: context.contentId,
                ...popperScope,
                ...contentProps,
                ref: forwardedRef,
                style: {
                  ...contentProps.style,
                  // re-namespace exposed content custom properties
                  ...{
                    "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                  }
                }
              }
            )
          }
        )
      }
    );
  }, "PopoverContentImpl")
);
function getState$1(open) {
  return open ? "open" : "closed";
}
__name$7(getState$1, "getState");
var Root2 = Popover;
var Anchor2 = PopoverAnchor;
var Trigger$1 = PopoverTrigger;
var Portal = PopoverPortal;
var Content2 = PopoverContent;
function getScrollParent(element) {
  let parent = element.parentElement;
  while (parent) {
    const { overflowY } = getComputedStyle(parent);
    if (overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay") {
      return parent;
    }
    parent = parent.parentElement;
  }
  return null;
}
function StickyComponent({ children, sentinelClassName, inFlow }) {
  const sentinelRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const sentinel2 = sentinelRef.current;
    if (!sentinel2 || typeof IntersectionObserver === "undefined") {
      return;
    }
    const root = inFlow ? getScrollParent(sentinel2) : null;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e) {
          e.target.toggleAttribute("data-intersect", e.intersectionRatio < 1);
        }
      },
      { threshold: [1], root }
    );
    observer.observe(sentinel2);
    return () => {
      observer.disconnect();
    };
  }, [inFlow]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    inFlow !== "after" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: sentinelRef,
        "data-sentinel": true,
        className: cn(inFlow ? "relative h-px w-full shrink-0" : "absolute", sentinelClassName)
      }
    ) : null,
    children,
    inFlow === "after" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: sentinelRef, "data-sentinel": true, className: cn("relative h-px w-full shrink-0", sentinelClassName) }) : null
  ] });
}
function createSimpleContext(name) {
  const defaultValue2 = /* @__PURE__ */ Symbol(`Default ${name} context value`);
  const Context = React.createContext(defaultValue2);
  Context.displayName = name;
  function useValue() {
    const value = React.useContext(Context);
    if (value === defaultValue2) {
      throw new Error(`use${name} must be used within ${name}Provider`);
    }
    if (!value) {
      throw new Error(
        `No value in ${name}Provider context. If the value is optional in this situation, try useOptional${name} instead of use${name}`
      );
    }
    return value;
  }
  function useOptionalValue() {
    const value = React.useContext(Context);
    if (value === defaultValue2) {
      throw new Error(`useOptional${name} must be used within ${name}Provider`);
    }
    return value;
  }
  return { Provider: Context.Provider, useValue, useOptionalValue };
}
const FiltersBarContext = createSimpleContext("FiltersBar");
function useFiltersBarContext() {
  return FiltersBarContext.useValue();
}
function adaptStaticDateRangeFilterType({ from, to }) {
  const startDate = from?.toISOString() ?? "";
  const endDate = to ? add$3(to, { days: 1 }).toISOString() : "";
  return {
    type: "static",
    startDate,
    endDate
  };
}
function adaptDateRange({ startDate, endDate }) {
  const from = startDate ? new Date(startDate) : void 0;
  const to = endDate ? sub(new Date(endDate), { days: 1 }) : void 0;
  return from || to ? { from, to } : void 0;
}
const DateRangeFilterContext = reactExports.createContext(void 0);
const useDateRangeFilterContext = () => {
  const ctx = reactExports.useContext(DateRangeFilterContext);
  if (!ctx) {
    throw new Error("useDateRangeFilterContext must be used within DateRangeFilterContext.Provider");
  }
  return ctx;
};
function DateRangeFilterRoot({
  dateRangeFilter,
  setDateRangeFilter,
  locale,
  children,
  className
}) {
  const calendarSelected = dateRangeFilter?.type === "static" ? adaptDateRange(dateRangeFilter) : void 0;
  const onCalendarSelect = reactExports.useCallback(
    (range) => {
      setDateRangeFilter(adaptStaticDateRangeFilterType(range ?? { from: void 0 }));
    },
    [setDateRangeFilter]
  );
  const fromNow = dateRangeFilter?.type === "dynamic" ? dateRangeFilter.fromNow : void 0;
  const onFromNowSelect = reactExports.useCallback(
    (fromNow2) => {
      setDateRangeFilter({
        type: "dynamic",
        fromNow: fromNow2
      });
    },
    [setDateRangeFilter]
  );
  const value = {
    fromNow,
    calendarSelected,
    onCalendarSelect,
    onFromNowSelect
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DateRangeFilterContext.Provider, { value, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, children }) });
}
function DateRangeFilterFromNowPicker({
  presetDurations,
  title,
  className
}) {
  const { onFromNowSelect } = useDateRangeFilterContext();
  const { fromNow } = useDateRangeFilterContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: clsx("flex flex-col gap-md p-md", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-grey-disabled text-s font-normal first-letter:capitalize", children: title }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-xs", children: Array.from(presetDurations.entries()).map(([duration, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => {
          onFromNowSelect(duration);
        },
        className: clsx(
          "text-s bg-surface-card text-grey-primary border-grey-white flex h-10 items-center rounded-sm border p-sm outline-hidden",
          "hover:bg-purple-background-light active:bg-purple-background hover:text-purple-primary",
          fromNow === duration && "bg-purple-background border-purple-primary text-purple-primary"
          // highlight the currently selected
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("time", { dateTime: duration, children: label })
      },
      duration
    )) })
  ] });
}
function DateRangeFilterCalendar({ className, locale }) {
  const { calendarSelected, onCalendarSelect } = useDateRangeFilterContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: clsx("p-md", className), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Calendar,
    {
      mode: "range",
      selected: calendarSelected,
      onSelect: onCalendarSelect,
      defaultMonth: calendarSelected?.from,
      locale
    }
  ) });
}
function DateRangeFilterSummary({
  presetDurations,
  className
}) {
  const { language, formatDuration: formatDuration2 } = useFormatting();
  const { t } = useI18n();
  const { fromNow, calendarSelected } = useDateRangeFilterContext();
  if (fromNow) {
    if (presetDurations.has(fromNow)) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: clsx("m-md flex h-10 w-full items-center justify-center", className), children: presetDurations.get(fromNow) });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: clsx("m-md flex h-10 w-full items-center justify-center", className), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "time",
      {
        className: "text-s text-grey-primary flex h-10 items-center rounded-sm p-sm outline-hidden",
        dateTime: fromNow,
        children: t("filters:up_to", {
          duration: formatDuration2(fromNow, language)
        })
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: clsx("grid grid-cols-[1fr_max-content_1fr] gap-xs p-md", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormatStaticDate, { className: "justify-self-end", date: calendarSelected?.from }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-l self-center", children: "→" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormatStaticDate, { date: calendarSelected?.to })
  ] });
}
function FormatStaticDate({ date: date2, className }) {
  const { language, formatDateTimeWithoutPresets: formatDateTimeWithoutPresets2 } = useFormatting();
  const dateTime = typeof date2 === "string" ? date2 : date2?.toDateString();
  const formattedDate = date2 ? formatDateTimeWithoutPresets2(date2, {
    language,
    dateStyle: "short"
  }) : "--/--/----";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "time",
    {
      dateTime,
      className: clsx(
        "border-grey-border h-10 w-fit rounded-sm border p-sm",
        date2 ? "text-grey-primary" : "text-grey-secondary",
        className
      ),
      children: formattedDate
    }
  );
}
const DateRangeFilter = {
  Root: DateRangeFilterRoot,
  FromNowPicker: DateRangeFilterFromNowPicker,
  Calendar: DateRangeFilterCalendar,
  Summary: DateRangeFilterSummary
};
const FormatContext = createSimpleContext("Format");
var cronstrueExports = requireCronstrue();
const cronstrue = /* @__PURE__ */ getDefaultExportFromCjs(cronstrueExports);
function useFormatLanguage() {
  return FormatContext.useValue().locale;
}
function useFormatTimezone() {
  return FormatContext.useValue().timezone;
}
function useFormatDateTime() {
  const { locale, timezone } = FormatContext.useValue();
  return reactExports.useCallback(
    (timestamp, options2) => {
      return Intl.DateTimeFormat(locale, { timeZone: timezone, ...options2 }).format(
        typeof timestamp === "string" ? new Date(timestamp) : timestamp
      );
    },
    [locale, timezone]
  );
}
function formatDateTimeWithoutPresets(timestamp, { language, ...options2 }) {
  return Intl.DateTimeFormat(language, options2).format(typeof timestamp === "string" ? new Date(timestamp) : timestamp);
}
function formatNumber(number, {
  language,
  ...options2
}) {
  return Intl.NumberFormat(language, options2).format(number);
}
function formatSchedule(schedule, { language, ...options2 }) {
  const locale = language.split("-")[0];
  return cronstrue.toString(schedule, {
    verbose: false,
    locale,
    throwExceptionOnParseError: false,
    ...options2
  }).toLowerCase();
}
const date = /* @__PURE__ */ new Date();
function formatDuration(duration, language) {
  return formatDistanceStrict(add$3(date, Temporal.Duration.from(duration)), date, {
    addSuffix: true,
    locale: getDateFnsLocale(language)
  });
}
function formatAge(birthdate, language) {
  const years = Math.max(0, differenceInYears(/* @__PURE__ */ new Date(), birthdate));
  return formatDuration$1({ years }, { locale: getDateFnsLocale(language) });
}
function formatDateRelative(date2, options2) {
  return formatRelative(typeof date2 === "string" ? new Date(date2) : date2, /* @__PURE__ */ new Date(), {
    locale: getDateFnsLocale(options2.language)
  });
}
function formatPercentage(percentage, language) {
  return Intl.NumberFormat(language, { style: "percent", maximumFractionDigits: 0 }).format(percentage / 100);
}
const inputClassName = cva(
  [
    "peer min-w-10 size-full rounded-md text-small font-medium outline-hidden border",
    // Light mode
    "bg-surface-card text-grey-primary placeholder:text-grey-placeholder data-placeholder-shown:text-grey-placeholder disabled:bg-grey-background disabled:text-grey-disabled is-[input]:read-only:bg-grey-background-light data-read-only:bg-grey-background-light focus:not-data-read-only:border-purple-primary focus:is-[input]:not-read-only:border-purple-primary",
    // Dark mode
    "dark:bg-transparent dark:text-grey-primary dark:disabled:bg-transparent"
  ],
  {
    variants: {
      borderColor: {
        "greyfigma-90": "border-grey-border dark:border-grey-border",
        "redfigma-87": "border-red-secondary",
        "redfigma-47": "border-red-primary"
      },
      size: {
        small: "h-6 px-xs py-2xs",
        medium: "h-8 p-sm",
        large: "h-10 p-sm"
      }
    },
    defaultVariants: {
      borderColor: "greyfigma-90",
      size: "large"
    }
  }
);
const inputPaddingsClassName = cva("", {
  variants: {
    size: {
      small: "",
      medium: "",
      large: ""
    },
    hasStartIcon: {
      true: "",
      false: null
    },
    hasEndIcon: {
      true: "",
      false: null
    }
  },
  compoundVariants: [
    {
      hasStartIcon: true,
      size: "small",
      className: "ps-6"
    },
    {
      hasStartIcon: true,
      size: "medium",
      className: "ps-8"
    },
    {
      hasStartIcon: true,
      size: "large",
      className: "ps-8"
    },
    {
      hasEndIcon: true,
      size: "small",
      className: "pe-6"
    },
    {
      hasEndIcon: true,
      size: "medium",
      className: "pe-8"
    },
    {
      hasEndIcon: true,
      size: "large",
      className: "pe-8"
    }
  ],
  defaultVariants: {
    hasStartIcon: false,
    hasEndIcon: false
  }
});
const inputIconClassName = cva("absolute shrink-0 text-grey-secondary peer-focus:text-grey-primary", {
  variants: {
    inputSize: {
      small: "size-4 top-1",
      medium: "size-4 top-2",
      large: "size-4 top-3"
    },
    placement: {
      start: "",
      end: ""
    }
  },
  compoundVariants: [
    {
      placement: "start",
      inputSize: "small",
      className: "start-xs ms-px"
    },
    {
      placement: "start",
      inputSize: "medium",
      className: "start-sm mx-px"
    },
    {
      placement: "start",
      inputSize: "large",
      className: "start-sm ms-px"
    },
    {
      placement: "end",
      inputSize: "small",
      className: "end-xs me-px"
    },
    {
      placement: "end",
      inputSize: "medium",
      className: "end-sm me-px"
    },
    {
      placement: "end",
      inputSize: "large",
      className: "end-sm me-px"
    }
  ],
  defaultVariants: {
    inputSize: "large"
  }
});
const numberInputColorClassName = cva("", {
  variants: {
    color: {
      primary: "text-grey-primary dark:text-grey-primary",
      purple: "text-purple-primary dark:text-purple-primary",
      blue: "text-blue-58 dark:text-blue-58",
      green: "text-green-primary dark:text-green-primary",
      yellow: "text-yellow-primary dark:text-yellow-primary",
      orange: "text-orange-primary dark:text-orange-primary",
      red: "text-red-primary dark:text-red-primary"
    }
  }
});
const UnstyledInput = function UnstyledInput2({
  ref,
  enablePasswordManagers,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      ref,
      ...props,
      ...!enablePasswordManagers && {
        "data-1p-ignore": "true",
        // 1password
        "data-lpignore": "true",
        // lastpass
        "data-bwignore": "true",
        // bitwarden
        "data-form-type": "other"
        // used by dashlane, tells it to ignore this field for password saving
      }
    }
  );
};
const Input = function Input2({
  ref,
  className,
  dir,
  inputClassName: actualInputClassName,
  startAdornment,
  startAdornmentClassName,
  startAdornmentAriaLabel,
  endAdornment,
  size: size2 = "large",
  borderColor = "greyfigma-90",
  onEnterKeyDown,
  onStartAdornmentClick,
  onEndAdornmentClick,
  ...props
}) {
  const startIconClassName = cn(inputIconClassName({ inputSize: size2, placement: "start" }));
  const endIconClassName = cn(inputIconClassName({ inputSize: size2, placement: "end" }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("relative", className), dir, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      UnstyledInput,
      {
        ref,
        dir,
        className: cn(
          inputClassName({ borderColor, size: size2 }),
          inputPaddingsClassName({
            hasStartIcon: !!startAdornment || !!startAdornmentClassName,
            hasEndIcon: !!endAdornment,
            size: size2
          }),
          actualInputClassName
        ),
        ...props,
        onKeyDown: onEnterKeyDown || props.onKeyDown ? (e) => {
          if (e.key === "Enter" && onEnterKeyDown) {
            onEnterKeyDown(e);
            return;
          }
          if (props.onKeyDown) {
            props.onKeyDown(e);
          }
        } : void 0
      }
    ),
    startAdornment || startAdornmentClassName ? onStartAdornmentClick && startAdornment ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        disabled: props.disabled || props.readOnly,
        className: cn(startIconClassName, "cursor-pointer", startAdornmentClassName),
        "aria-label": startAdornmentAriaLabel,
        onClick: onStartAdornmentClick,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: startAdornment, className: "size-full" })
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: cn(
          "pointer-events-none flex items-center justify-center",
          startIconClassName,
          startAdornmentClassName
        ),
        role: startAdornmentAriaLabel ? "img" : void 0,
        "aria-label": startAdornmentAriaLabel,
        "aria-hidden": startAdornmentAriaLabel ? void 0 : true,
        children: startAdornment ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: startAdornment, className: "size-full" }) : null
      }
    ) : null,
    endAdornment ? onEndAdornmentClick ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        disabled: props.disabled || props.readOnly,
        className: cn(endIconClassName, "cursor-pointer"),
        onClick: onEndAdornmentClick,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: endAdornment, className: "size-full" })
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: endAdornment, className: cn("pointer-events-none", endIconClassName) }) : null
  ] });
};
const numberInputSignIconClassName = cva(
  "top-1/2 -translate-y-1/2 rounded-sm bg-grey-background text-grey-primary dark:bg-grey-background-light",
  {
    variants: {
      size: {
        small: "size-4",
        medium: "size-5",
        large: "size-6"
      }
    },
    defaultVariants: {
      size: "large"
    }
  }
);
const numberInputSignPaddingClassName = cva("", {
  variants: {
    size: {
      small: "",
      medium: "ps-9",
      large: "ps-10"
    }
  },
  defaultVariants: {
    size: "large"
  }
});
function getNumberInputSign(value) {
  return value < 0 ? "-" : "+";
}
function applyNumberInputSign(value, sign) {
  return sign === "-" ? -Math.abs(value) : Math.abs(value);
}
function formatNumberInputValue(value, forceSign, language) {
  return formatNumber(value, {
    language,
    maximumFractionDigits: 0,
    useGrouping: false,
    signDisplay: forceSign ? "never" : "auto"
  });
}
function matchesNumberInputThreshold(value, { comparison, threshold }) {
  switch (comparison) {
    case ">":
      return value > threshold;
    case ">=":
      return value >= threshold;
    case "<":
      return value < threshold;
    case "<=":
      return value <= threshold;
  }
}
function getNumberInputColor(value, colorByValue) {
  if (!colorByValue) return void 0;
  return colorByValue.thresholds.find((colorThreshold) => matchesNumberInputThreshold(value, colorThreshold))?.color ?? colorByValue.defaultColor;
}
const NumberInput = function NumberInput2({
  ref,
  colorByValue,
  forceSign = false,
  inputClassName: inputClassName2,
  onChange,
  onKeyDown,
  value,
  onEnterKeyDown,
  size: size2 = "large",
  startAdornment,
  startAdornmentAriaLabel,
  startAdornmentClassName,
  ...props
}) {
  const language = useFormatLanguage$1();
  const [internalValue, setInternalValue] = reactExports.useState(() => formatNumberInputValue(value, forceSign, language));
  const [sign, setSign] = reactExports.useState(() => getNumberInputSign(value));
  const valueColor = getNumberInputColor(value, colorByValue);
  const parsedInternalValue = parseInt(internalValue, 10);
  const showForceSignIcon = forceSign && !isNaN(parsedInternalValue) && parsedInternalValue !== 0;
  reactExports.useEffect(() => {
    const newInternalValue = formatNumberInputValue(value, forceSign, language);
    setInternalValue((currentValue) => currentValue === newInternalValue ? currentValue : newInternalValue);
    if (value !== 0) {
      setSign(getNumberInputSign(value));
    }
  }, [forceSign, language, value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Input,
    {
      ref,
      ...props,
      dir: "ltr",
      size: size2,
      startAdornment: showForceSignIcon ? sign === "-" ? "minus" : "plus" : forceSign ? void 0 : startAdornment,
      startAdornmentAriaLabel: showForceSignIcon ? sign : forceSign ? void 0 : startAdornmentAriaLabel,
      startAdornmentClassName: forceSign ? cn(numberInputSignIconClassName({ size: size2 }), numberInputColorClassName({ color: valueColor })) : startAdornmentClassName,
      inputClassName: cn(
        inputClassName2,
        forceSign && numberInputSignPaddingClassName({ size: size2 }),
        numberInputColorClassName({ color: valueColor })
      ),
      value: internalValue,
      onChange: (e) => {
        const inputValue = e.target.value;
        if (!forceSign) {
          setInternalValue(inputValue);
          const inputNumberValue2 = parseInt(inputValue, 10);
          if (!isNaN(inputNumberValue2)) {
            onChange(inputNumberValue2);
          }
          return;
        }
        const nextSign = inputValue.includes("-") ? "-" : inputValue.includes("+") ? "+" : sign;
        const unsignedValue = inputValue.replaceAll("+", "").replaceAll("-", "");
        setSign(nextSign);
        setInternalValue(unsignedValue);
        const inputNumberValue = parseInt(unsignedValue, 10);
        if (!isNaN(inputNumberValue)) {
          const signedValue = applyNumberInputSign(inputNumberValue, nextSign);
          if (signedValue !== value) {
            onChange(signedValue);
          }
        }
      },
      onKeyDown: (e) => {
        if (forceSign && (e.key === "+" || e.key === "-")) {
          e.preventDefault();
          const nextSign = e.key === "-" ? "-" : "+";
          setSign(nextSign);
          const inputNumberValue = parseInt(internalValue, 10);
          if (!isNaN(inputNumberValue)) {
            const signedValue = applyNumberInputSign(inputNumberValue, nextSign);
            if (signedValue !== value) {
              onChange(signedValue);
            }
          }
        }
        onKeyDown?.(e);
      },
      onEnterKeyDown: onEnterKeyDown ? (e) => {
        const inputNumberValue = parseInt(internalValue, 10);
        if (!isNaN(inputNumberValue)) {
          onEnterKeyDown(forceSign ? applyNumberInputSign(inputNumberValue, sign) : inputNumberValue);
        }
      } : void 0
    }
  );
};
const SearchInput = function SearchInput2({
  ref,
  onChange,
  onSubmit,
  value,
  onEnterKeyDown,
  ...props
}) {
  const isInert = props.disabled || props.readOnly;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Input,
    {
      ref,
      ...props,
      type: "text",
      startAdornment: "search",
      endAdornment: value.length > 0 ? "x" : void 0,
      value,
      onChange: (e) => {
        onChange(e.target.value);
      },
      onEnterKeyDown: onEnterKeyDown ? (e) => {
        onEnterKeyDown(value);
      } : void 0,
      onEndAdornmentClick: !isInert ? () => {
        onChange("");
      } : void 0
    }
  );
};
function exactSubstringFilter(value, search, keywords) {
  const s = search.toLowerCase();
  if (value.toLowerCase().includes(s)) return 1;
  if (keywords?.some((k2) => k2.toLowerCase().includes(s))) return 1;
  return 0;
}
const MenuCommandSharpFactory = B$2({
  name: "MenuCommand",
  initializer: () => ({
    search: "",
    filterMode: "default"
  })
}).withActions({
  setSearch(api, value) {
    api.value.search = value;
  },
  setFilterMode(api, mode) {
    api.value.filterMode = mode;
  }
});
const InternalMenuSharpFactory = B$2({
  name: "InternalMenu",
  initializer: (initialState) => {
    return { ...initialState, hasCombobox: false, listeners: [] };
  }
}).withActions({
  closeAllSubmenus(api) {
    api.value.listeners.forEach((listener) => {
      listener();
    });
  },
  addListener(api, listener) {
    api.value.listeners.push(listener);
    return () => {
      api.value.listeners = api.value.listeners.filter((l) => l !== listener);
    };
  }
});
function Menu(props) {
  const menuSharp = MenuCommandSharpFactory.createSharp();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommandSharpFactory.Provider, { value: menuSharp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Root$2, { ...props }) });
}
function Root$2({ hover = false, persistOnSelect, ...props }) {
  const onOpenChange = props.onOpenChange;
  const parentInternalSharp = InternalMenuSharpFactory.useOptionalSharp();
  const shouldPersistOnSelect = persistOnSelect ?? parentInternalSharp?.value.persistOnSelect ?? false;
  const internalSharp = InternalMenuSharpFactory.createSharp({
    hover,
    persistOnSelect: shouldPersistOnSelect,
    onSelect: (persisted = false) => {
      const shouldPersistMenu = shouldPersistOnSelect || persisted;
      if (!shouldPersistMenu) {
        onOpenChange?.(false);
      }
      parentInternalSharp?.value.onSelect(shouldPersistMenu);
    }
  });
  const RootEl = internalSharp.value.hover ? Root2$1 : Root2;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InternalMenuSharpFactory.Provider, { value: internalSharp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RootEl, { openDelay: 75, closeDelay: 75, ...props }) });
}
function SubMenu({
  children,
  trigger,
  forceMount,
  className,
  arrow: arrow2,
  hover = true,
  disabled = false,
  value,
  ...props
}) {
  const [open, setOpenImperative] = reactExports.useState(false);
  const internalSharp = InternalMenuSharpFactory.useSharp();
  const setOpen = (open2) => {
    if (!hover && !open2) {
      return;
    }
    setOpenImperative(open2);
  };
  const listener = useCallbackRef$2(() => {
    setOpenImperative(false);
  });
  reactExports.useEffect(() => {
    return internalSharp.actions.addListener(listener);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(_e.Group, { forceMount, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Root$2, { ...props, hover, open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Item$1,
      {
        value,
        disabled,
        className: cn("group/menu-item flex w-full items-center justify-between"),
        onSelect: () => {
          if (!hover) {
            internalSharp.actions.closeAllSubmenus();
          }
          if (!open) {
            setOpenImperative(true);
          }
        },
        children: [
          trigger,
          arrow2 !== void 0 && arrow2 === false ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(
            Icon,
            {
              "aria-hidden": "true",
              icon: "arrow-right",
              className: "group-data-[state=open]/menu-item:text-purple-primary ms-auto size-5 shrink-0 rtl:rotate-180"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Content, { side: "right", align: "start", sideOffset: 12, className: cn("pointer-events-auto", className), children })
  ] }) });
}
function Trigger({ children }) {
  const internalSharp = InternalMenuSharpFactory.useSharp();
  const TriggerEl = internalSharp.value.hover ? Trigger$2 : Trigger$1;
  const triggerOverrideSharp = InternalMenuSharpFactory.createSharp({
    ...internalSharp.value,
    onSelect() {
    }
  });
  const triggerChild = reactExports.isValidElement(children) ? reactExports.cloneElement(children, {
    className: cn("group", children.props.className)
  }) : children;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InternalMenuSharpFactory.Provider, { value: triggerOverrideSharp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriggerEl, { asChild: true, children: triggerChild }) });
}
const SelectButton = function SelectButton2({
  ref,
  children,
  className,
  hasError = false,
  noArrow,
  readOnly,
  size: size2 = "large",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...readOnly ? { inert: true } : {}, className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        ref,
        type: "button",
        className: cn(
          "flex items-center",
          inputClassName({ size: size2 }),
          inputPaddingsClassName({ size: size2, hasEndIcon: true }),
          "data-[read-only]:pointer-events-none data-[state=open]:border-purple-primary",
          className
        ),
        ...readOnly ? { "data-read-only": readOnly } : {},
        ...props,
        children
      }
    ),
    !noArrow && !readOnly ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Icon,
      {
        className: cn("pointer-events-none", inputIconClassName({ inputSize: size2, placement: "end" })),
        icon: "caret-down"
      }
    ) : null
  ] });
};
function MenuArrow() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Icon,
    {
      icon: "caret-down",
      className: "group-radix-state-open:rotate-180 size-4 shrink-0 transition-transform duration-200"
    }
  );
}
const contentClassname = cva("pointer-events-auto flex z-50 text-s group/menu-command-content", {
  variants: {
    hover: {
      true: "max-h-[min(var(--radix-hover-card-content-available-height),500px)]",
      false: "max-h-[min(var(--radix-popover-content-available-height),500px)]"
    }
  },
  defaultVariants: {
    hover: false
  }
});
const commandClassname = cva(
  [
    "flex flex-col z-50 w-full flex-1 overflow-y-auto",
    "bg-surface-card border-grey-border rounded-md border shadow-md outline-hidden",
    "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
    "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
    "data-[side=top]:slide-in-from-bottom-2 data-[side=right]:slide-in-from-left-2"
  ],
  {
    variants: {
      sameWidth: {
        true: "min-w-(--radix-popover-trigger-width)",
        false: ""
      }
    },
    defaultVariants: {
      sameWidth: false
    }
  }
);
function Content({
  children,
  className,
  sameWidth,
  collisionPadding,
  size: size2 = "default",
  shouldFilter = true,
  ...props
}) {
  const internalSharp = InternalMenuSharpFactory.useSharp();
  const menuState = MenuCommandSharpFactory.useSharp();
  const Portal$22 = internalSharp.value.hover ? Portal$1 : Portal;
  const ContentEl = internalSharp.value.hover ? Content2$1 : Content2;
  const filter = menuState.value.filterMode === "exact" ? exactSubstringFilter : void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$22, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ContentEl,
    {
      className: cn(contentClassname({ hover: internalSharp.value.hover }), className),
      collisionPadding: collisionPadding ?? 10,
      onWheel: (e) => {
        e.stopPropagation();
      },
      "data-size": size2,
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(_e, { shouldFilter, className: cn(commandClassname({ sameWidth })), filter, children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsx(InsertKeyboardNav, {})
      ] })
    }
  ) });
}
function InsertKeyboardNav() {
  const internalSharp = InternalMenuSharpFactory.useSharp();
  const [hasCombobox, setHasCombobox] = reactExports.useState(void 0);
  reactExports.useEffect(() => {
    setHasCombobox(internalSharp.value.hasCombobox);
  }, [internalSharp]);
  if (hasCombobox === void 0 || hasCombobox) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(KeyboardNav, {});
}
function Combobox({ className, onValueChange, iconClasses, filterMode = "default", ...props }) {
  const internalSharp = InternalMenuSharpFactory.useSharp();
  const menuState = MenuCommandSharpFactory.useSharp();
  const setSearch = useCallbackRef$2((value) => {
    menuState.actions.setSearch(value);
    onValueChange?.(value);
  });
  reactExports.useEffect(() => {
    menuState.actions.setFilterMode(filterMode);
  }, [filterMode, menuState]);
  const inputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    internalSharp.value.hasCombobox = true;
    inputRef.current?.focus();
  }, [internalSharp]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("relative m-sm mb-0 h-10", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      _e.Input,
      {
        ref: inputRef,
        className: cn(inputClassName(), "ps-xl"),
        value: menuState.value.search,
        onValueChange: setSearch,
        ...props
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-secondary peer-focus:text-grey-primary pointer-events-none absolute inset-y-0 start-0 flex items-center ps-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "search", className: cn("size-5", iconClasses) }) })
  ] });
}
const KeyboardNav = () => {
  const inputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(_e.Input, { ref: inputRef, className: "fixed start-[-10000px]" });
};
const HeadlessItem = function HeadlessItem2({
  ref,
  onSelect,
  ...props
}) {
  const internalSharp = InternalMenuSharpFactory.useSharp();
  const menuOnSelect = reactExports.useCallback(
    (value) => {
      onSelect?.(value);
      internalSharp.value.onSelect();
    },
    [onSelect, internalSharp]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(_e.Item, { ref, onSelect: menuOnSelect, ...props });
};
const Item$1 = function Item2({
  ref,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    HeadlessItem,
    {
      ref,
      className: cn(
        [
          "aria-selected:bg-purple-background-light data-[state=open]:bg-purple-background-light aria-disabled:text-grey-disabled outline-hidden",
          "flex h-10 scroll-mb-sm scroll-mt-2xl flex-row items-center justify-between gap-sm rounded-xs p-sm"
        ],
        { "cursor-pointer": props.onSelect && !props.disabled },
        className
      ),
      ...props
    }
  );
};
const Separator = ({
  ref,
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(_e.Separator, { ref, className: cn("bg-grey-border -mx-sm my-sm h-px", className), ...props });
function List({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    _e.List,
    {
      className: cn(
        'flex-1 overflow-y-auto overflow-x-hidden p-sm group-[[data-size="small"]]/menu-command-content:p-xs',
        className
      ),
      ...props
    }
  );
}
function Inline({ children, className }) {
  const menuSharp = MenuCommandSharpFactory.createSharp();
  const internalSharp = InternalMenuSharpFactory.createSharp({
    hover: false,
    persistOnSelect: true,
    onSelect: () => {
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommandSharpFactory.Provider, { value: menuSharp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InternalMenuSharpFactory.Provider, { value: internalSharp, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(_e, { shouldFilter: false, className: cn("flex min-h-0 flex-col", className), children: [
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(InsertKeyboardNav, {})
  ] }) }) });
}
const MenuCommand = {
  Arrow: MenuArrow,
  Anchor: Anchor2,
  Combobox,
  Content,
  Group: _e.Group,
  HeadlessItem,
  Inline,
  Item: Item$1,
  List,
  Menu,
  SubMenu,
  Trigger,
  SelectButton,
  Separator,
  State: MenuCommandSharpFactory,
  Empty: _e.Empty
};
const typoClassName = cva("text-grey-primary leading-[140%]", {
  variants: {
    variant: {
      title1: "text-h1 font-bold",
      title2: "text-h2 font-semibold",
      subtitle1: "text-default font-semibold",
      subtitle2: "text-small font-semibold",
      text: "text-tiny"
    }
  },
  defaultVariants: {
    variant: "text"
  }
});
const defaultElementByType = {
  title1: "h1",
  title2: "h2",
  subtitle1: "h3",
  subtitle2: "h4",
  text: "p"
};
const Typo = function Typo2({
  ref,
  as,
  variant = "text",
  className,
  children,
  ...props
}) {
  const resolvedType = variant ?? "text";
  const Component = as ?? defaultElementByType[resolvedType];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ref, className: cn(typoClassName({ variant }), className), ...props, children });
};
function PanelOverlay() {
  const sharp = PanelSharpFactory.useSharp();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "absolute inset-0 bg-grey-primary/10 z-20 backdrop-blur-xs animate-overlay-show",
      onClick: sharp.actions.close,
      "aria-hidden": "true"
    }
  );
}
const sizeClasses = {
  small: "max-w-[calc(100vw_/_3)]",
  medium: "max-w-[50vw]",
  large: "max-w-[calc(100vw_*_(2_/_3))]",
  xlarge: "max-w-[calc(100vw_*_(5_/_6))]",
  full: "max-w-[calc(100vw_-_3rem)]"
};
const PanelSharpFactory = B$2({
  name: "Panel",
  initializer: (params) => {
    const isControlled = params.open !== void 0;
    return {
      isOpen: !!params.open,
      onOpenChange: params.onOpenChange,
      isControlled
    };
  }
}).withActions({
  open(api) {
    if (api.value.isControlled) {
      api.value.onOpenChange?.(true);
    } else {
      api.value.isOpen = true;
    }
  },
  close(api) {
    if (api.value.onOpenChange?.(false) === false) {
      return;
    }
    if (!api.value.isControlled) {
      api.value.isOpen = false;
    }
  }
});
function PanelRoot({ children, open, onOpenChange }) {
  const sharp = PanelSharpFactory.createSharp({
    open,
    onOpenChange
  });
  reactExports.useEffect(() => {
    if (!sharp.value.isControlled && open !== void 0) {
      console.warn(`Panel was initialized as uncontrolled but has its value change to ${open}`);
    }
    sharp.value.isOpen = !!open;
  }, [sharp, open]);
  reactExports.useEffect(() => {
    sharp.value.onOpenChange = onOpenChange;
  }, [onOpenChange, sharp]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PanelSharpFactory.Provider, { value: sharp, children });
}
const PanelTrigger = function PanelTrigger2({
  ref,
  asChild,
  onClick,
  ...props
}) {
  const sharp = PanelSharpFactory.useSharp();
  const Comp = asChild ? Slot$2 : "button";
  const handleClick = (event) => {
    onClick?.(event);
    if (!event.defaultPrevented) {
      sharp.actions.open();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ref, type: asChild ? void 0 : "button", ...props, onClick: handleClick });
};
function PanelContainer({ children, className, size: size2 = "small" }) {
  const sharp = PanelSharpFactory.useSharp();
  if (!sharp.value.isOpen) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PanelContainerPortal, { className, size: size2, children });
}
function PanelContainerPortal({ children, className, size: size2 = "small" }) {
  const sharp = PanelSharpFactory.useSharp();
  const panelRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        sharp.actions.close();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [sharp]);
  reactExports.useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const focusableElements = panel.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    const handleTabKey = (event) => {
      if (event.key !== "Tab") return;
      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          event.preventDefault();
        }
      }
    };
    firstElement?.focus();
    panel.addEventListener("keydown", handleTabKey);
    return () => panel.removeEventListener("keydown", handleTabKey);
  }, []);
  return reactDomExports.createPortal(
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PanelOverlay, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref: panelRef,
          className: cn(
            "fixed inset-y-0 z-20 end-0 bg-surface-card border-l border-grey-border w-full flex flex-col not-motion-reduce:animate-slide-right-fade-in rtl:not-motion-reduce:animate-slide-left-fade-in overflow-y-auto",
            sizeClasses[size2],
            className
          ),
          role: "dialog",
          "aria-modal": "true",
          children
        }
      )
    ] }),
    document.body
  );
}
function PanelHeader({ children, className }) {
  const sharp = PanelSharpFactory.useSharp();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StickyComponent, { sentinelClassName: "h-0 top-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "sticky top-0 -m-lg mb-0 p-lg flex gap-md items-center bg-surface-card z-1 border-b border-transparent sentinel-intersect:border-grey-border sentinel-intersect:shadow-sticky-top"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Icon,
          {
            icon: "x",
            className: "size-6 cursor-pointer text-grey-secondary hover:text-grey-primary",
            onClick: sharp.actions.close,
            "aria-label": "Close panel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { as: "div", variant: "title2", className: cn("grow", className), children })
      ]
    }
  ) });
}
const PanelHeaderInput = function PanelHeaderInput2({
  ref,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    UnstyledInput,
    {
      ref,
      autoFocus: true,
      className: "field-sizing-content min-w-25 max-w-100 text-h2 font-semibold h-6 border-b border-transparent focus:border-grey-primary outline-none",
      ...props
    }
  );
};
function PanelContent({ children, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("relative flex min-h-screen min-w-0 grow flex-col p-lg", className), children });
}
function PanelFooter({ children, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StickyComponent, { inFlow: "after", sentinelClassName: "top-lg -translate-y-2xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "sticky flex justify-end gap-sm bottom-0 bg-surface-card -m-lg mt-auto p-lg border-t border-transparent sentinel-intersect:border-grey-border sentinel-intersect:shadow-sticky-bottom",
        className
      ),
      children
    }
  ) });
}
const PanelFooterButton = function PanelFooterButton2({
  ref,
  variant,
  isCloseButton,
  isLoading,
  leadingIcon,
  trailingIcon,
  disabled,
  label,
  children,
  className,
  onClick,
  ...props
}) {
  const sharp = PanelSharpFactory.useSharp();
  const { variant: buttonVariant, appearance } = M(variant).with("secondary", () => ({
    variant: "secondary",
    appearance: "stroked"
  })).with("destructive", () => ({
    variant: "destructive",
    appearance: "filled"
  })).with("primary-outline", () => ({
    variant: "primary",
    appearance: "stroked"
  })).otherwise(() => ({
    variant: isCloseButton ? variant ?? "secondary" : "primary",
    appearance: isCloseButton && variant !== "primary" ? "stroked" : "filled"
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Button,
    {
      ref,
      variant: buttonVariant,
      appearance,
      disabled: disabled || isLoading,
      "aria-busy": isLoading || void 0,
      "aria-disabled": disabled || isLoading || void 0,
      size: "medium",
      className: cn(isLoading && "pointer-events-none", className),
      onClick: (event) => {
        onClick?.(event);
        if (!event.defaultPrevented && isCloseButton) {
          sharp.actions.close();
        }
      },
      ...props,
      children: [
        leadingIcon ? isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "spinner", className: "size-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: leadingIcon, className: "size-4" }) : null,
        label,
        children,
        trailingIcon ? isLoading && !leadingIcon ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "spinner", className: "size-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: trailingIcon, className: "size-4" }) : null,
        isLoading && !leadingIcon && !trailingIcon ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "spinner", className: "size-4 animate-spin" }) : null
      ]
    }
  );
};
const Panel = {
  Root: PanelRoot,
  Trigger: PanelTrigger,
  Container: PanelContainer,
  Content: PanelContent,
  Header: PanelHeader,
  HeaderInput: PanelHeaderInput,
  Footer: PanelFooter,
  FooterButton: PanelFooterButton
};
var __defProp$6 = Object.defineProperty;
var __name$6 = (target, value) => __defProp$6(target, "name", { value, configurable: true });
// @__NO_SIDE_EFFECTS__
function createCollection(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope2] = /* @__PURE__ */ createContextScope(PROVIDER_NAME);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(
    PROVIDER_NAME,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  );
  const CollectionProvider = /* @__PURE__ */ __name$6((props) => {
    const { scope, children } = props;
    const ref = reactExports.useRef(null);
    const itemMap = reactExports.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(CollectionProviderImpl, { scope, itemMap, collectionRef: ref, children });
  }, "CollectionProvider");
  CollectionProvider.displayName = PROVIDER_NAME;
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlotImpl = /* @__PURE__ */ createSlot(COLLECTION_SLOT_NAME);
  const CollectionSlot = reactExports.forwardRef(
    (props, forwardedRef) => {
      const { scope, children } = props;
      const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
      const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CollectionSlotImpl, { ref: composedRefs, children });
    }
  );
  CollectionSlot.displayName = COLLECTION_SLOT_NAME;
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlotImpl = /* @__PURE__ */ createSlot(ITEM_SLOT_NAME);
  const CollectionItemSlot = reactExports.forwardRef(
    (props, forwardedRef) => {
      const { scope, children, ...itemData } = props;
      const ref = reactExports.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, ref);
      const context = useCollectionContext(ITEM_SLOT_NAME, scope);
      reactExports.useEffect(() => {
        context.itemMap.set(ref, { ref, ...itemData });
        return () => void context.itemMap.delete(ref);
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CollectionItemSlotImpl, { ...{ [ITEM_DATA_ATTR]: "" }, ref: composedRefs, children });
    }
  );
  CollectionItemSlot.displayName = ITEM_SLOT_NAME;
  function useCollection2(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = reactExports.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode) return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
      );
      return orderedItems;
    }, [context.collectionRef, context.itemMap]);
    return getItems;
  }
  __name$6(useCollection2, "useCollection");
  return [
    { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
    useCollection2,
    createCollectionScope2
  ];
}
__name$6(createCollection, "createCollection");
var __instanciated = /* @__PURE__ */ new WeakMap();
var OrderedDict = (_a = class extends Map {
  constructor(entries) {
    super(entries);
    __privateAdd(this, _keys);
    __privateSet(this, _keys, [...super.keys()]);
    __instanciated.set(this, true);
  }
  set(key, value) {
    if (__instanciated.get(this)) {
      if (this.has(key)) {
        __privateGet(this, _keys)[__privateGet(this, _keys).indexOf(key)] = key;
      } else {
        __privateGet(this, _keys).push(key);
      }
    }
    super.set(key, value);
    return this;
  }
  insert(index2, key, value) {
    const has = this.has(key);
    const length = __privateGet(this, _keys).length;
    const relativeIndex = toSafeInteger(index2);
    let actualIndex = relativeIndex >= 0 ? relativeIndex : length + relativeIndex;
    const safeIndex = actualIndex < 0 || actualIndex >= length ? -1 : actualIndex;
    if (safeIndex === this.size || has && safeIndex === this.size - 1 || safeIndex === -1) {
      this.set(key, value);
      return this;
    }
    const size2 = this.size + (has ? 0 : 1);
    if (relativeIndex < 0) {
      actualIndex++;
    }
    const keys = [...__privateGet(this, _keys)];
    let nextValue;
    let shouldSkip = false;
    for (let i = actualIndex; i < size2; i++) {
      if (actualIndex === i) {
        let nextKey = keys[i];
        if (keys[i] === key) {
          nextKey = keys[i + 1];
        }
        if (has) {
          this.delete(key);
        }
        nextValue = this.get(nextKey);
        this.set(key, value);
      } else {
        if (!shouldSkip && keys[i - 1] === key) {
          shouldSkip = true;
        }
        const currentKey = keys[shouldSkip ? i : i - 1];
        const currentValue = nextValue;
        nextValue = this.get(currentKey);
        this.delete(currentKey);
        this.set(currentKey, currentValue);
      }
    }
    return this;
  }
  with(index2, key, value) {
    const copy = new _a(this);
    copy.insert(index2, key, value);
    return copy;
  }
  before(key) {
    const index2 = __privateGet(this, _keys).indexOf(key) - 1;
    if (index2 < 0) {
      return void 0;
    }
    return this.entryAt(index2);
  }
  /**
   * Sets a new key-value pair at the position before the given key.
   */
  setBefore(key, newKey, value) {
    const index2 = __privateGet(this, _keys).indexOf(key);
    if (index2 === -1) {
      return this;
    }
    return this.insert(index2, newKey, value);
  }
  after(key) {
    let index2 = __privateGet(this, _keys).indexOf(key);
    index2 = index2 === -1 || index2 === this.size - 1 ? -1 : index2 + 1;
    if (index2 === -1) {
      return void 0;
    }
    return this.entryAt(index2);
  }
  /**
   * Sets a new key-value pair at the position after the given key.
   */
  setAfter(key, newKey, value) {
    const index2 = __privateGet(this, _keys).indexOf(key);
    if (index2 === -1) {
      return this;
    }
    return this.insert(index2 + 1, newKey, value);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    __privateSet(this, _keys, []);
    return super.clear();
  }
  delete(key) {
    const deleted = super.delete(key);
    if (deleted) {
      __privateGet(this, _keys).splice(__privateGet(this, _keys).indexOf(key), 1);
    }
    return deleted;
  }
  deleteAt(index2) {
    const key = this.keyAt(index2);
    if (key !== void 0) {
      return this.delete(key);
    }
    return false;
  }
  at(index2) {
    const key = at(__privateGet(this, _keys), index2);
    if (key !== void 0) {
      return this.get(key);
    }
  }
  entryAt(index2) {
    const key = at(__privateGet(this, _keys), index2);
    if (key !== void 0) {
      return [key, this.get(key)];
    }
  }
  indexOf(key) {
    return __privateGet(this, _keys).indexOf(key);
  }
  keyAt(index2) {
    return at(__privateGet(this, _keys), index2);
  }
  from(key, offset2) {
    const index2 = this.indexOf(key);
    if (index2 === -1) {
      return void 0;
    }
    let dest = index2 + offset2;
    if (dest < 0) dest = 0;
    if (dest >= this.size) dest = this.size - 1;
    return this.at(dest);
  }
  keyFrom(key, offset2) {
    const index2 = this.indexOf(key);
    if (index2 === -1) {
      return void 0;
    }
    let dest = index2 + offset2;
    if (dest < 0) dest = 0;
    if (dest >= this.size) dest = this.size - 1;
    return this.keyAt(dest);
  }
  find(predicate, thisArg) {
    let index2 = 0;
    for (const entry of this) {
      if (Reflect.apply(predicate, thisArg, [entry, index2, this])) {
        return entry;
      }
      index2++;
    }
    return void 0;
  }
  findIndex(predicate, thisArg) {
    let index2 = 0;
    for (const entry of this) {
      if (Reflect.apply(predicate, thisArg, [entry, index2, this])) {
        return index2;
      }
      index2++;
    }
    return -1;
  }
  filter(predicate, thisArg) {
    const entries = [];
    let index2 = 0;
    for (const entry of this) {
      if (Reflect.apply(predicate, thisArg, [entry, index2, this])) {
        entries.push(entry);
      }
      index2++;
    }
    return new _a(entries);
  }
  map(callbackfn, thisArg) {
    const entries = [];
    let index2 = 0;
    for (const entry of this) {
      entries.push([entry[0], Reflect.apply(callbackfn, thisArg, [entry, index2, this])]);
      index2++;
    }
    return new _a(entries);
  }
  reduce(...args) {
    const [callbackfn, initialValue] = args;
    let index2 = 0;
    let accumulator = initialValue ?? this.at(0);
    for (const entry of this) {
      if (index2 === 0 && args.length === 1) {
        accumulator = entry;
      } else {
        accumulator = Reflect.apply(callbackfn, this, [accumulator, entry, index2, this]);
      }
      index2++;
    }
    return accumulator;
  }
  reduceRight(...args) {
    const [callbackfn, initialValue] = args;
    let accumulator = initialValue ?? this.at(-1);
    for (let index2 = this.size - 1; index2 >= 0; index2--) {
      const entry = this.at(index2);
      if (index2 === this.size - 1 && args.length === 1) {
        accumulator = entry;
      } else {
        accumulator = Reflect.apply(callbackfn, this, [accumulator, entry, index2, this]);
      }
    }
    return accumulator;
  }
  toSorted(compareFn) {
    const entries = [...this.entries()].sort(compareFn);
    return new _a(entries);
  }
  toReversed() {
    const reversed = new _a();
    for (let index2 = this.size - 1; index2 >= 0; index2--) {
      const key = this.keyAt(index2);
      const element = this.get(key);
      reversed.set(key, element);
    }
    return reversed;
  }
  toSpliced(...args) {
    const entries = [...this.entries()];
    entries.splice(...args);
    return new _a(entries);
  }
  slice(start, end) {
    const result = new _a();
    let stop = this.size - 1;
    if (start === void 0) {
      return result;
    }
    if (start < 0) {
      start = start + this.size;
    }
    if (end !== void 0 && end > 0) {
      stop = end - 1;
    }
    for (let index2 = start; index2 <= stop; index2++) {
      const key = this.keyAt(index2);
      const element = this.get(key);
      result.set(key, element);
    }
    return result;
  }
  every(predicate, thisArg) {
    let index2 = 0;
    for (const entry of this) {
      if (!Reflect.apply(predicate, thisArg, [entry, index2, this])) {
        return false;
      }
      index2++;
    }
    return true;
  }
  some(predicate, thisArg) {
    let index2 = 0;
    for (const entry of this) {
      if (Reflect.apply(predicate, thisArg, [entry, index2, this])) {
        return true;
      }
      index2++;
    }
    return false;
  }
}, _keys = /* @__PURE__ */ new WeakMap(), __name$6(_a, "OrderedDict"), _a);
function at(array, index2) {
  if ("at" in Array.prototype) {
    return Array.prototype.at.call(array, index2);
  }
  const actualIndex = toSafeIndex(array, index2);
  return actualIndex === -1 ? void 0 : array[actualIndex];
}
__name$6(at, "at");
function toSafeIndex(array, index2) {
  const length = array.length;
  const relativeIndex = toSafeInteger(index2);
  const actualIndex = relativeIndex >= 0 ? relativeIndex : length + relativeIndex;
  return actualIndex < 0 || actualIndex >= length ? -1 : actualIndex;
}
__name$6(toSafeIndex, "toSafeIndex");
function toSafeInteger(number) {
  return number !== number || number === 0 ? 0 : Math.trunc(number);
}
__name$6(toSafeInteger, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function createCollection2(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope2] = /* @__PURE__ */ createContextScope(PROVIDER_NAME);
  const [CollectionContextProvider, useCollectionContext] = createCollectionContext(
    PROVIDER_NAME,
    {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new OrderedDict(),
      setItemMap: /* @__PURE__ */ __name$6(() => void 0, "setItemMap")
    }
  );
  const CollectionProvider = /* @__PURE__ */ __name$6(({ state, ...props }) => {
    return state ? /* @__PURE__ */ jsxRuntimeExports.jsx(CollectionProviderImpl, { ...props, state }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CollectionInit, { ...props });
  }, "CollectionProvider");
  CollectionProvider.displayName = PROVIDER_NAME;
  const CollectionInit = /* @__PURE__ */ __name$6((props) => {
    const state = useInitCollection();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(CollectionProviderImpl, { ...props, state });
  }, "CollectionInit");
  CollectionInit.displayName = PROVIDER_NAME + "Init";
  const CollectionProviderImpl = /* @__PURE__ */ __name$6((props) => {
    const { scope, children, state } = props;
    const ref = reactExports.useRef(null);
    const [collectionElement, setCollectionElement] = reactExports.useState(
      null
    );
    const composeRefs2 = useComposedRefs(ref, setCollectionElement);
    const [itemMap, setItemMap] = state;
    reactExports.useEffect(() => {
      if (!collectionElement) return;
      const observer = getChildListObserver(() => {
      });
      observer.observe(collectionElement, {
        childList: true,
        subtree: true
      });
      return () => {
        observer.disconnect();
      };
    }, [collectionElement]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CollectionContextProvider,
      {
        scope,
        itemMap,
        setItemMap,
        collectionRef: composeRefs2,
        collectionRefObject: ref,
        collectionElement,
        children
      }
    );
  }, "CollectionProviderImpl");
  CollectionProviderImpl.displayName = PROVIDER_NAME + "Impl";
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlotImpl = /* @__PURE__ */ createSlot(COLLECTION_SLOT_NAME);
  const CollectionSlot = reactExports.forwardRef(
    (props, forwardedRef) => {
      const { scope, children } = props;
      const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
      const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CollectionSlotImpl, { ref: composedRefs, children });
    }
  );
  CollectionSlot.displayName = COLLECTION_SLOT_NAME;
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlotImpl = /* @__PURE__ */ createSlot(ITEM_SLOT_NAME);
  const CollectionItemSlot = reactExports.forwardRef(
    (props, forwardedRef) => {
      const { scope, children, ...itemData } = props;
      const ref = reactExports.useRef(null);
      const [element, setElement] = reactExports.useState(null);
      const composedRefs = useComposedRefs(forwardedRef, ref, setElement);
      const context = useCollectionContext(ITEM_SLOT_NAME, scope);
      const { setItemMap } = context;
      const itemDataRef = reactExports.useRef(itemData);
      if (!shallowEqual(itemDataRef.current, itemData)) {
        itemDataRef.current = itemData;
      }
      const memoizedItemData = itemDataRef.current;
      reactExports.useEffect(() => {
        const itemData2 = memoizedItemData;
        setItemMap((map) => {
          if (!element) {
            return map;
          }
          if (!map.has(element)) {
            map.set(element, { ...itemData2, element });
            return map.toSorted(sortByDocumentPosition);
          }
          return map.set(element, { ...itemData2, element }).toSorted(sortByDocumentPosition);
        });
        return () => {
          setItemMap((map) => {
            if (!element || !map.has(element)) {
              return map;
            }
            map.delete(element);
            return new OrderedDict(map);
          });
        };
      }, [element, memoizedItemData, setItemMap]);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CollectionItemSlotImpl, { ...{ [ITEM_DATA_ATTR]: "" }, ref: composedRefs, children });
    }
  );
  CollectionItemSlot.displayName = ITEM_SLOT_NAME;
  function useInitCollection() {
    return reactExports.useState(new OrderedDict());
  }
  __name$6(useInitCollection, "useInitCollection");
  function useCollection2(scope) {
    const { itemMap } = useCollectionContext(name + "CollectionConsumer", scope);
    return itemMap;
  }
  __name$6(useCollection2, "useCollection");
  const functions = {
    createCollectionScope: createCollectionScope2,
    useCollection: useCollection2,
    useInitCollection
  };
  return [
    { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
    functions
  ];
}
__name$6(createCollection2, "createCollection");
function shallowEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== "object" || typeof b !== "object") return false;
  if (a == null || b == null) return false;
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
    if (a[key] !== b[key]) return false;
  }
  return true;
}
__name$6(shallowEqual, "shallowEqual");
function isElementPreceding(a, b) {
  return !!(b.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_PRECEDING);
}
__name$6(isElementPreceding, "isElementPreceding");
function sortByDocumentPosition(a, b) {
  return !a[1].element || !b[1].element ? 0 : isElementPreceding(a[1].element, b[1].element) ? -1 : 1;
}
__name$6(sortByDocumentPosition, "sortByDocumentPosition");
function getChildListObserver(callback) {
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        callback();
        return;
      }
    }
  });
  return observer;
}
__name$6(getChildListObserver, "getChildListObserver");
var __defProp$5 = Object.defineProperty;
var __name$5 = (target, value) => __defProp$5(target, "name", { value, configurable: true });
var DirectionContext = reactExports.createContext(void 0);
function useDirection(localDir) {
  const globalDir = reactExports.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}
__name$5(useDirection, "useDirection");
var __defProp$4 = Object.defineProperty;
var __name$4 = (target, value) => __defProp$4(target, "name", { value, configurable: true });
var _isHydrated = false;
function useIsHydrated() {
  const [isHydrated, setIsHydrated] = reactExports.useState(_isHydrated);
  reactExports.useEffect(() => {
    if (!_isHydrated) {
      _isHydrated = true;
      setIsHydrated(true);
    }
  }, []);
  return isHydrated;
}
__name$4(useIsHydrated, "useIsHydrated");
var useReactSyncExternalStore = React$1[" useSyncExternalStore ".trim().toString()];
function subscribe() {
  return () => {
  };
}
__name$4(subscribe, "subscribe");
function useIsHydratedModern() {
  return useReactSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
__name$4(useIsHydratedModern, "useIsHydratedModern");
var useIsHydrated2 = typeof useReactSyncExternalStore === "function" ? useIsHydratedModern : useIsHydrated;
var __defProp$3 = Object.defineProperty;
var __name$3 = (target, value) => __defProp$3(target, "name", { value, configurable: true });
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var GROUP_NAME = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = /* @__PURE__ */ createCollection(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = /* @__PURE__ */ createContextScope(
  GROUP_NAME,
  [createCollectionScope]
);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name$3(function RovingFocusGroup2(props, forwardedRef) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Provider, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Slot, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RovingFocusGroupImpl, { ...props, ref: forwardedRef }) }) });
  }, "RovingFocusGroup")
);
var RovingFocusGroupImpl = /* @__PURE__ */ reactExports.forwardRef(/* @__PURE__ */ __name$3(function RovingFocusGroupImpl2(props, forwardedRef) {
  const {
    __scopeRovingFocusGroup,
    orientation,
    loop = false,
    dir,
    currentTabStopId: currentTabStopIdProp,
    defaultCurrentTabStopId,
    onCurrentTabStopIdChange,
    onEntryFocus,
    preventScrollOnEntryFocus = false,
    ...groupProps
  } = props;
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const direction = useDirection(dir);
  const [currentTabStopId, setCurrentTabStopId] = useControllableState({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId ?? null,
    onChange: onCurrentTabStopIdChange,
    caller: GROUP_NAME
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = reactExports.useState(false);
  const handleEntryFocus = useCallbackRef$1(onEntryFocus);
  const getItems = useCollection(__scopeRovingFocusGroup);
  const isClickFocusRef = reactExports.useRef(false);
  const [focusableItemsCount, setFocusableItemsCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
    }
  }, [handleEntryFocus]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    RovingFocusProvider,
    {
      scope: __scopeRovingFocusGroup,
      orientation,
      dir: direction,
      loop,
      currentTabStopId,
      onItemFocus: reactExports.useCallback(
        (tabStopId) => setCurrentTabStopId(tabStopId),
        [setCurrentTabStopId]
      ),
      onItemShiftTab: reactExports.useCallback(() => setIsTabbingBackOut(true), []),
      onFocusableItemAdd: reactExports.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount + 1),
        []
      ),
      onFocusableItemRemove: reactExports.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount - 1),
        []
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.div,
        {
          tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
          "data-orientation": orientation,
          ...groupProps,
          ref: composedRefs,
          style: { outline: "none", ...props.style },
          onMouseDown: composeEventHandlers(props.onMouseDown, () => {
            isClickFocusRef.current = true;
          }),
          onFocus: composeEventHandlers(props.onFocus, (event) => {
            const isKeyboardFocus = !isClickFocusRef.current;
            if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
              const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
              event.currentTarget.dispatchEvent(entryFocusEvent);
              if (!entryFocusEvent.defaultPrevented) {
                const items = getItems().filter((item) => item.focusable);
                const activeItem = items.find((item) => item.active);
                const currentItem = items.find((item) => item.id === currentTabStopId);
                const candidateItems = [activeItem, currentItem, ...items].filter(
                  Boolean
                );
                const candidateNodes = candidateItems.map((item) => item.ref.current);
                focusFirst(candidateNodes, preventScrollOnEntryFocus);
              }
            }
            isClickFocusRef.current = false;
          }),
          onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
        }
      )
    }
  );
}, "RovingFocusGroupImpl"));
var ITEM_NAME = "RovingFocusGroupItem";
var RovingFocusGroupItem = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name$3(function RovingFocusGroupItem2(props, forwardedRef) {
    const {
      __scopeRovingFocusGroup,
      focusable = true,
      active = false,
      tabStopId,
      children,
      ...itemProps
    } = props;
    const autoId = useId();
    const id = tabStopId || autoId;
    const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = useCollection(__scopeRovingFocusGroup);
    const { onFocusableItemAdd, onFocusableItemRemove, currentTabStopId } = context;
    const isHydrated = useIsHydrated2();
    useLayoutEffect2(() => {
      if (!isHydrated || !focusable) {
        return;
      }
      onFocusableItemAdd();
      return () => onFocusableItemRemove();
    }, [isHydrated, focusable, onFocusableItemAdd, onFocusableItemRemove]);
    reactExports.useEffect(() => {
      if (isHydrated || !focusable) {
        return;
      }
      onFocusableItemAdd();
      return () => onFocusableItemRemove();
    }, [isHydrated, focusable, onFocusableItemAdd, onFocusableItemRemove]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Collection.ItemSlot,
      {
        scope: __scopeRovingFocusGroup,
        id,
        focusable,
        active,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.span,
          {
            tabIndex: isCurrentTabStop ? 0 : -1,
            "data-orientation": context.orientation,
            ...itemProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!focusable) event.preventDefault();
              else context.onItemFocus(id);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => context.onItemFocus(id)),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if (event.key === "Tab" && event.shiftKey) {
                context.onItemShiftTab();
                return;
              }
              if (event.target !== event.currentTarget) return;
              const focusIntent = getFocusIntent(event, context.orientation, context.dir);
              if (focusIntent !== void 0) {
                if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
                event.preventDefault();
                const items = getItems().filter((item) => item.focusable);
                let candidateNodes = items.map((item) => item.ref.current);
                if (focusIntent === "last") candidateNodes.reverse();
                else if (focusIntent === "prev" || focusIntent === "next") {
                  if (focusIntent === "prev") candidateNodes.reverse();
                  const currentIndex = candidateNodes.indexOf(event.currentTarget);
                  candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                }
                setTimeout(() => focusFirst(candidateNodes));
              }
            }),
            children: typeof children === "function" ? children({ isCurrentTabStop, hasTabStop: currentTabStopId != null }) : children
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
);
var MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function getDirectionAwareKey(key, dir) {
  if (dir !== "rtl") return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
__name$3(getDirectionAwareKey, "getDirectionAwareKey");
function getFocusIntent(event, orientation, dir) {
  const key = getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key)) return void 0;
  if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key)) return void 0;
  return MAP_KEY_TO_FOCUS_INTENT[key];
}
__name$3(getFocusIntent, "getFocusIntent");
function focusFirst(candidates, preventScroll = false) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
    candidate.focus({ preventScroll });
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
  }
}
__name$3(focusFirst, "focusFirst");
function wrapArray(array, startIndex) {
  return array.map((_, index2) => array[(startIndex + index2) % array.length]);
}
__name$3(wrapArray, "wrapArray");
var Root$1 = RovingFocusGroup;
var Item = RovingFocusGroupItem;
var __defProp$2 = Object.defineProperty;
var __name$2 = (target, value) => __defProp$2(target, "name", { value, configurable: true });
var RADIO_NAME = "Radio";
var [createRadioContext, createRadioScope] = /* @__PURE__ */ createContextScope(RADIO_NAME);
var [RadioProviderImpl, useRadioContext$1] = createRadioContext(RADIO_NAME);
function RadioProvider(props) {
  const {
    __scopeRadio,
    checked = false,
    children,
    disabled,
    form,
    name,
    onCheck,
    required,
    value = "on",
    // @ts-expect-error
    internal_do_not_use_render
  } = props;
  const [control, setControl] = reactExports.useState(null);
  const [bubbleInput, setBubbleInput] = reactExports.useState(null);
  const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
  const [userInteractionCount, onUserInteraction] = reactExports.useReducer(
    (count2) => count2 + 1,
    0
  );
  const isFormControl = control ? !!form || !!control.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    true
  );
  const context = {
    checked,
    disabled,
    required,
    name,
    form,
    value,
    control,
    setControl,
    hasConsumerStoppedPropagationRef,
    userInteractionCount,
    onUserInteraction,
    isFormControl,
    bubbleInput,
    setBubbleInput,
    onCheck: /* @__PURE__ */ __name$2(() => onCheck?.(), "onCheck")
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioProviderImpl, { scope: __scopeRadio, ...context, children: isFunction$1(internal_do_not_use_render) ? internal_do_not_use_render(context) : children });
}
__name$2(RadioProvider, "RadioProvider");
var TRIGGER_NAME = "RadioTrigger";
var RadioTrigger = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name$2(function RadioTrigger2({ __scopeRadio, onClick, ...radioProps }, forwardedRef) {
    const {
      checked,
      disabled,
      value,
      setControl,
      onCheck,
      hasConsumerStoppedPropagationRef,
      onUserInteraction,
      isFormControl,
      bubbleInput
    } = useRadioContext$1(TRIGGER_NAME, __scopeRadio);
    const composedRefs = useComposedRefs(forwardedRef, setControl);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        role: "radio",
        "aria-checked": checked,
        "data-state": getState(checked),
        "data-disabled": disabled ? "" : void 0,
        disabled,
        value,
        ...radioProps,
        ref: composedRefs,
        onClick: composeEventHandlers(onClick, (event) => {
          if (!checked) {
            onUserInteraction();
            onCheck();
          }
          if (bubbleInput && isFormControl) {
            hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
            if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
          }
        })
      }
    );
  }, "RadioTrigger")
);
var INDICATOR_NAME = "RadioIndicator";
var RadioIndicator = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name$2(function RadioIndicator2(props, forwardedRef) {
    const { __scopeRadio, forceMount, ...indicatorProps } = props;
    const context = useRadioContext$1(INDICATOR_NAME, __scopeRadio);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.checked, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...indicatorProps,
        ref: forwardedRef
      }
    ) });
  }, "RadioIndicator")
);
var BUBBLE_INPUT_NAME = "RadioBubbleInput";
var RadioBubbleInput = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name$2(function RadioBubbleInput2({ __scopeRadio, onClick, ...props }, forwardedRef) {
    const {
      control,
      checked,
      required,
      disabled,
      name,
      value,
      form,
      bubbleInput,
      setBubbleInput,
      hasConsumerStoppedPropagationRef,
      userInteractionCount
    } = useRadioContext$1(BUBBLE_INPUT_NAME, __scopeRadio);
    const composedRefs = useComposedRefs(forwardedRef, setBubbleInput);
    const controlSize = useSize(control);
    const shouldStopClickPropagationRef = reactExports.useRef(false);
    const prevCheckedRef = reactExports.useRef(checked);
    const prevUserInteractionCountRef = reactExports.useRef(userInteractionCount);
    reactExports.useEffect(() => {
      const input = bubbleInput;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      const isUserInteraction = userInteractionCount !== prevUserInteractionCountRef.current;
      prevUserInteractionCountRef.current = userInteractionCount;
      const checkedChanged = prevCheckedRef.current !== checked;
      prevCheckedRef.current = checked;
      const bubbles = !(isUserInteraction && hasConsumerStoppedPropagationRef.current);
      if (checkedChanged && setChecked) {
        shouldStopClickPropagationRef.current = !isUserInteraction;
        const event = new Event("click", { bubbles });
        setChecked.call(input, checked);
        input.dispatchEvent(event);
        shouldStopClickPropagationRef.current = false;
      }
    }, [bubbleInput, checked, hasConsumerStoppedPropagationRef, userInteractionCount]);
    const defaultCheckedRef = reactExports.useRef(checked);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.input,
      {
        type: "radio",
        "aria-hidden": true,
        defaultChecked: defaultCheckedRef.current,
        required,
        disabled,
        name,
        value,
        form,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        onClick: composeEventHandlers(onClick, (event) => {
          if (shouldStopClickPropagationRef.current) {
            event.stopPropagation();
          }
        }),
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }, "RadioBubbleInput")
);
function isFunction$1(value) {
  return typeof value === "function";
}
__name$2(isFunction$1, "isFunction");
function getState(checked) {
  return checked ? "checked" : "unchecked";
}
__name$2(getState, "getState");
var ARROW_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var RADIO_GROUP_NAME = "RadioGroup";
var [createRadioGroupContext, createRadioGroupScope] = /* @__PURE__ */ createContextScope(RADIO_GROUP_NAME, [
  createRovingFocusGroupScope,
  createRadioScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var useRadioScope = createRadioScope();
var [RadioGroupProvider, useRadioGroupContext] = createRadioGroupContext(RADIO_GROUP_NAME);
var RadioGroup = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name$2(function RadioGroup2(props, forwardedRef) {
    const {
      __scopeRadioGroup,
      name,
      form,
      defaultValue: defaultValue2,
      value: valueProp,
      required = false,
      disabled = false,
      orientation,
      dir,
      loop = true,
      onValueChange,
      ...groupProps
    } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue2 ?? null,
      onChange: onValueChange,
      caller: RADIO_GROUP_NAME
    });
    const [control, setControl] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, setControl);
    const initialValueRef = reactExports.useRef(value);
    reactExports.useEffect(() => {
      const associatedForm = form ? control?.ownerDocument.getElementById(form) : control?.closest("form");
      if (associatedForm instanceof HTMLFormElement) {
        const reset = /* @__PURE__ */ __name$2(() => setValue(initialValueRef.current), "reset");
        associatedForm.addEventListener("reset", reset);
        return () => associatedForm.removeEventListener("reset", reset);
      }
    }, [control, form, setValue]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      RadioGroupProvider,
      {
        scope: __scopeRadioGroup,
        name,
        form,
        required,
        disabled,
        value,
        onValueChange: setValue,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Root$1,
          {
            asChild: true,
            ...rovingFocusGroupScope,
            orientation,
            dir: direction,
            loop,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Primitive.div,
              {
                role: "radiogroup",
                "aria-required": required,
                "aria-orientation": orientation,
                "data-disabled": disabled ? "" : void 0,
                dir: direction,
                ...groupProps,
                ref: composedRefs
              }
            )
          }
        )
      }
    );
  }, "RadioGroup")
);
var ITEM_PROVIDER_NAME = "RadioGroupItemProvider";
var ITEM_TRIGGER_NAME = "RadioGroupItemTrigger";
function RadioGroupItemProvider(props) {
  const {
    __scopeRadioGroup,
    value,
    disabled,
    children,
    // @ts-expect-error
    internal_do_not_use_render
  } = props;
  const context = useRadioGroupContext(ITEM_PROVIDER_NAME, __scopeRadioGroup);
  const radioScope = useRadioScope(__scopeRadioGroup);
  const isDisabled = context.disabled || disabled;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    RadioProvider,
    {
      ...radioScope,
      checked: context.value === value,
      disabled: isDisabled,
      required: context.required,
      name: context.name,
      form: context.form,
      value,
      onCheck: () => context.onValueChange(value),
      internal_do_not_use_render,
      children
    }
  );
}
__name$2(RadioGroupItemProvider, "RadioGroupItemProvider");
var RadioGroupItemTrigger = /* @__PURE__ */ reactExports.forwardRef(/* @__PURE__ */ __name$2(function RadioGroupItemTrigger2(props, forwardedRef) {
  const { __scopeRadioGroup, ...triggerProps } = props;
  const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
  const radioScope = useRadioScope(__scopeRadioGroup);
  const { checked, disabled } = useRadioContext$1(ITEM_TRIGGER_NAME, radioScope.__scopeRadio);
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const isArrowKeyPressedRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const handleKeyDown = /* @__PURE__ */ __name$2((event) => {
      if (ARROW_KEYS.includes(event.key)) {
        isArrowKeyPressedRef.current = true;
      }
    }, "handleKeyDown");
    const handleKeyUp = /* @__PURE__ */ __name$2(() => isArrowKeyPressedRef.current = false, "handleKeyUp");
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Item,
    {
      asChild: true,
      ...rovingFocusGroupScope,
      focusable: !disabled,
      active: checked,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        RadioTrigger,
        {
          ...radioScope,
          ...triggerProps,
          ref: composedRefs,
          onKeyDown: composeEventHandlers(triggerProps.onKeyDown, (event) => {
            if (event.key === "Enter") event.preventDefault();
          }),
          onFocus: composeEventHandlers(triggerProps.onFocus, () => {
            if (isArrowKeyPressedRef.current) {
              ref.current?.click();
            }
          })
        }
      )
    }
  );
}, "RadioGroupItemTrigger"));
var RadioGroupItem = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name$2(function RadioGroupItem2(props, forwardedRef) {
    const { __scopeRadioGroup, value, disabled, ...itemProps } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      RadioGroupItemProvider,
      {
        __scopeRadioGroup,
        value,
        disabled,
        internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            RadioGroupItemTrigger,
            {
              ...itemProps,
              ref: forwardedRef,
              __scopeRadioGroup
            }
          ),
          isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
            RadioGroupItemBubbleInput,
            {
              __scopeRadioGroup
            }
          )
        ] })
      }
    );
  }, "RadioGroupItem")
);
var RadioGroupItemBubbleInput = /* @__PURE__ */ reactExports.forwardRef(/* @__PURE__ */ __name$2(function RadioGroupItemBubbleInput2(props, forwardedRef) {
  const { __scopeRadioGroup, ...bubbleProps } = props;
  const radioScope = useRadioScope(__scopeRadioGroup);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioBubbleInput, { ...radioScope, ...bubbleProps, ref: forwardedRef });
}, "RadioGroupItemBubbleInput"));
var RadioGroupIndicator = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name$2(function RadioGroupIndicator2(props, forwardedRef) {
    const { __scopeRadioGroup, ...indicatorProps } = props;
    const radioScope = useRadioScope(__scopeRadioGroup);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioIndicator, { ...radioScope, ...indicatorProps, ref: forwardedRef });
  }, "RadioGroupIndicator")
);
const RadioContext = reactExports.createContext(null);
function useRadioContext() {
  const context = reactExports.useContext(RadioContext);
  if (!context) {
    throw new Error("Radio.Item must be used within Radio.Root");
  }
  return context;
}
const radioRoot = cva(["flex flex-col gap-sm"]);
const radioIndicator = cva(
  ["group/radio relative flex shrink-0 items-center justify-center rounded-full border transition-colors"],
  {
    variants: {
      size: {
        regular: "size-6",
        small: "size-4"
      },
      state: {
        unselected: [
          "cursor-pointer border-purple-primary bg-grey-white",
          "hover:bg-purple-background",
          "dark:bg-grey-background dark:hover:border-purple-hover dark:hover:bg-grey-background"
        ],
        selected: [
          "cursor-pointer border-purple-primary bg-grey-white",
          "hover:border-purple-hover",
          "dark:bg-grey-background"
        ],
        disabled: [
          "cursor-not-allowed border-grey-border bg-grey-background border-[0.5px]",
          "dark:border-purple-disabled dark:bg-grey-background"
        ],
        "selected-disabled": [
          "cursor-not-allowed border-grey-disabled bg-grey-white",
          "dark:border-purple-disabled dark:bg-grey-background"
        ]
      }
    },
    compoundVariants: [
      { size: "regular", state: "selected", class: "border-[3.5px]" },
      { size: "regular", state: "selected-disabled", class: "border-[3.5px]" },
      { size: "small", state: "selected", class: "border-[2.5px]" },
      { size: "small", state: "selected-disabled", class: "border-[2.5px]" }
    ],
    defaultVariants: { size: "regular", state: "unselected" }
  }
);
const radioInnerDot = cva(["rounded-full"], {
  variants: {
    size: {
      regular: "size-2.5",
      small: "size-1.5"
    },
    state: {
      selected: "bg-purple-primary transition-colors group-hover/radio:bg-purple-hover",
      "selected-disabled": "bg-grey-disabled dark:bg-purple-disabled"
    }
  },
  defaultVariants: { size: "regular", state: "selected" }
});
const RadioRoot = function RadioRoot2({
  ref,
  className,
  value,
  onValueChange,
  children,
  name,
  size: size2 = "regular",
  disabled = false,
  ...props
}) {
  const generatedName = reactExports.useId();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioContext.Provider, { value: { value, size: size2, disabled }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    RadioGroup,
    {
      ...props,
      ref,
      name: name ?? generatedName,
      value,
      onValueChange,
      disabled,
      className: cn(radioRoot(), className),
      children
    }
  ) });
};
const RadioItem = function RadioItem2({
  ref,
  className,
  value,
  disabled = false,
  children,
  ...props
}) {
  const { size: size2, value: selectedValue, disabled: groupDisabled } = useRadioContext();
  const isChecked = selectedValue === value;
  const isDisabled = disabled || groupDisabled;
  const state = isDisabled ? isChecked ? "selected-disabled" : "disabled" : isChecked ? "selected" : "unselected";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    RadioGroupItem,
    {
      ...props,
      ref,
      value,
      disabled: isDisabled,
      className: cn(
        "flex items-center gap-sm text-left",
        isDisabled ? "cursor-not-allowed" : "cursor-pointer",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: radioIndicator({ size: size2, state }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupIndicator, { className: radioInnerDot({ size: size2, state: isDisabled ? "selected-disabled" : "selected" }) }) }),
        children
      ]
    }
  );
};
const Radio = {
  Root: RadioRoot,
  Item: RadioItem
};
var __defProp$1 = Object.defineProperty;
var __name$1 = (target, value) => __defProp$1(target, "name", { value, configurable: true });
function clamp(value, [min2, max2]) {
  return Math.min(max2, Math.max(min2, value));
}
__name$1(clamp, "clamp");
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
function useStateMachine(initialState, machine) {
  return reactExports.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
__name(useStateMachine, "useStateMachine");
var SCROLL_AREA_NAME = "ScrollArea";
var [createScrollAreaContext, createScrollAreaScope] = /* @__PURE__ */ createContextScope(SCROLL_AREA_NAME);
var [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME);
var ScrollArea = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function ScrollArea2(props, forwardedRef) {
    const {
      __scopeScrollArea,
      type = "hover",
      dir,
      scrollHideDelay = 600,
      ...scrollAreaProps
    } = props;
    const [scrollArea, setScrollArea] = reactExports.useState(null);
    const [viewport, setViewport] = reactExports.useState(null);
    const [content, setContent] = reactExports.useState(null);
    const [scrollbarX, setScrollbarX] = reactExports.useState(null);
    const [scrollbarY, setScrollbarY] = reactExports.useState(null);
    const [cornerWidth, setCornerWidth] = reactExports.useState(0);
    const [cornerHeight, setCornerHeight] = reactExports.useState(0);
    const [scrollbarXEnabled, setScrollbarXEnabled] = reactExports.useState(false);
    const [scrollbarYEnabled, setScrollbarYEnabled] = reactExports.useState(false);
    const composedRefs = useComposedRefs(forwardedRef, setScrollArea);
    const direction = useDirection(dir);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScrollAreaProvider,
      {
        scope: __scopeScrollArea,
        type,
        dir: direction,
        scrollHideDelay,
        scrollArea,
        viewport,
        onViewportChange: setViewport,
        content,
        onContentChange: setContent,
        scrollbarX,
        onScrollbarXChange: setScrollbarX,
        scrollbarXEnabled,
        onScrollbarXEnabledChange: setScrollbarXEnabled,
        scrollbarY,
        onScrollbarYChange: setScrollbarY,
        scrollbarYEnabled,
        onScrollbarYEnabledChange: setScrollbarYEnabled,
        onCornerWidthChange: setCornerWidth,
        onCornerHeightChange: setCornerHeight,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            dir: direction,
            ...scrollAreaProps,
            ref: composedRefs,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": cornerWidth + "px",
              "--radix-scroll-area-corner-height": cornerHeight + "px",
              ...props.style
            }
          }
        )
      }
    );
  }, "ScrollArea")
);
var VIEWPORT_NAME = "ScrollAreaViewport";
var ScrollAreaViewport = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function ScrollAreaViewport2(props, forwardedRef) {
    const { __scopeScrollArea, children, nonce, ...viewportProps } = props;
    const context = useScrollAreaContext(VIEWPORT_NAME, __scopeScrollArea);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onViewportChange);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaViewportStyle, { nonce }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...viewportProps,
          ref: composedRefs,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: context.scrollbarYEnabled ? "scroll" : "hidden",
            ...props.style
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: context.onContentChange, style: { minWidth: "100%", display: "table" }, children })
        }
      )
    ] });
  }, "ScrollAreaViewport")
);
var ScrollAreaViewportStyle = /* @__PURE__ */ reactExports.memo(
  /* @__PURE__ */ __name(function ScrollAreaViewportStyle2({ nonce }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`
        },
        nonce
      }
    );
  }, "ScrollAreaViewportStyle"),
  (prevProps, nextProps) => prevProps.nonce === nextProps.nonce
);
var SCROLLBAR_NAME = "ScrollAreaScrollbar";
var ScrollAreaScrollbar = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function ScrollAreaScrollbar2(props, forwardedRef) {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === "horizontal";
    reactExports.useEffect(() => {
      isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
      return () => {
        isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
      };
    }, [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]);
    return context.type === "hover" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaScrollbarHover, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "scroll" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaScrollbarScroll, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "auto" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaScrollbarAuto, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "always" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaScrollbarVisible, { ...scrollbarProps, ref: forwardedRef, "data-state": "visible" }) : null;
  }, "ScrollAreaScrollbar")
);
var ScrollAreaScrollbarHover = /* @__PURE__ */ reactExports.forwardRef(/* @__PURE__ */ __name(function ScrollAreaScrollbarHover2(props, forwardedRef) {
  const { forceMount, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const scrollArea = context.scrollArea;
    let hideTimer = 0;
    if (scrollArea) {
      const handlePointerEnter = /* @__PURE__ */ __name(() => {
        window.clearTimeout(hideTimer);
        setVisible(true);
      }, "handlePointerEnter");
      const handlePointerLeave = /* @__PURE__ */ __name(() => {
        hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
      }, "handlePointerLeave");
      scrollArea.addEventListener("pointerenter", handlePointerEnter);
      scrollArea.addEventListener("pointerleave", handlePointerLeave);
      return () => {
        window.clearTimeout(hideTimer);
        scrollArea.removeEventListener("pointerenter", handlePointerEnter);
        scrollArea.removeEventListener("pointerleave", handlePointerLeave);
      };
    }
  }, [context.scrollArea, context.scrollHideDelay]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || visible, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollAreaScrollbarAuto,
    {
      "data-state": visible ? "visible" : "hidden",
      ...scrollbarProps,
      ref: forwardedRef
    }
  ) });
}, "ScrollAreaScrollbarHover"));
var ScrollAreaScrollbarScroll = /* @__PURE__ */ reactExports.forwardRef(/* @__PURE__ */ __name(function ScrollAreaScrollbarScroll2(props, forwardedRef) {
  const { forceMount, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const isHorizontal = props.orientation === "horizontal";
  const debounceScrollEnd = useDebounceCallback(() => send("SCROLL_END"), 100);
  const [state, send] = useStateMachine("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  reactExports.useEffect(() => {
    if (state === "idle") {
      const hideTimer = window.setTimeout(() => send("HIDE"), context.scrollHideDelay);
      return () => window.clearTimeout(hideTimer);
    }
  }, [state, context.scrollHideDelay, send]);
  reactExports.useEffect(() => {
    const viewport = context.viewport;
    const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
    if (viewport) {
      let prevScrollPos = viewport[scrollDirection];
      const handleScroll2 = /* @__PURE__ */ __name(() => {
        const scrollPos = viewport[scrollDirection];
        const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
        if (hasScrollInDirectionChanged) {
          send("SCROLL");
          debounceScrollEnd();
        }
        prevScrollPos = scrollPos;
      }, "handleScroll");
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [context.viewport, isHorizontal, send, debounceScrollEnd]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || state !== "hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollAreaScrollbarVisible,
    {
      "data-state": state === "hidden" ? "hidden" : "visible",
      ...scrollbarProps,
      ref: forwardedRef,
      onPointerEnter: composeEventHandlers(props.onPointerEnter, () => send("POINTER_ENTER")),
      onPointerLeave: composeEventHandlers(props.onPointerLeave, () => send("POINTER_LEAVE"))
    }
  ) });
}, "ScrollAreaScrollbarScroll"));
var ScrollAreaScrollbarAuto = /* @__PURE__ */ reactExports.forwardRef(/* @__PURE__ */ __name(function ScrollAreaScrollbarAuto2(props, forwardedRef) {
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const { forceMount, ...scrollbarProps } = props;
  const [visible, setVisible] = reactExports.useState(false);
  const isHorizontal = props.orientation === "horizontal";
  const handleResize = useDebounceCallback(() => {
    if (context.viewport) {
      const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
      const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
      setVisible(isHorizontal ? isOverflowX : isOverflowY);
    }
  }, 10);
  useResizeObserver(context.viewport, handleResize);
  useResizeObserver(context.content, handleResize);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || visible, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollAreaScrollbarVisible,
    {
      "data-state": visible ? "visible" : "hidden",
      ...scrollbarProps,
      ref: forwardedRef
    }
  ) });
}, "ScrollAreaScrollbarAuto"));
var ScrollAreaScrollbarVisible = /* @__PURE__ */ reactExports.forwardRef(/* @__PURE__ */ __name(function ScrollAreaScrollbarVisible2(props, forwardedRef) {
  const { orientation = "vertical", ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const thumbRef = reactExports.useRef(null);
  const pointerOffsetRef = reactExports.useRef(0);
  const [sizes, setSizes] = reactExports.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  });
  const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
  const commonProps = {
    ...scrollbarProps,
    sizes,
    onSizesChange: setSizes,
    hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
    onThumbChange: /* @__PURE__ */ __name((thumb) => thumbRef.current = thumb, "onThumbChange"),
    onThumbPointerUp: /* @__PURE__ */ __name(() => pointerOffsetRef.current = 0, "onThumbPointerUp"),
    onThumbPointerDown: /* @__PURE__ */ __name((pointerPos) => pointerOffsetRef.current = pointerPos, "onThumbPointerDown")
  };
  function getScrollPosition(pointerPos, dir) {
    return getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
  }
  __name(getScrollPosition, "getScrollPosition");
  if (orientation === "horizontal") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScrollAreaScrollbarX,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollLeft;
            const offset2 = getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
            thumbRef.current.style.transform = `translate3d(${offset2}px, 0, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport) context.viewport.scrollLeft = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) {
            context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
          }
        }
      }
    );
  }
  if (orientation === "vertical") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScrollAreaScrollbarY,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollTop;
            const offset2 = getThumbOffsetFromScroll(scrollPos, sizes);
            thumbRef.current.style.transform = `translate3d(0, ${offset2}px, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport) context.viewport.scrollTop = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) context.viewport.scrollTop = getScrollPosition(pointerPos);
        }
      }
    );
  }
  return null;
}, "ScrollAreaScrollbarVisible"));
var ScrollAreaScrollbarX = /* @__PURE__ */ reactExports.forwardRef(/* @__PURE__ */ __name(function ScrollAreaScrollbarX2(props, forwardedRef) {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = reactExports.useState();
  const ref = reactExports.useRef(null);
  const composeRefs2 = useComposedRefs(forwardedRef, ref, context.onScrollbarXChange);
  reactExports.useEffect(() => {
    if (ref.current) setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollAreaScrollbarImpl,
    {
      "data-orientation": "horizontal",
      ...scrollbarProps,
      ref: composeRefs2,
      sizes,
      style: {
        bottom: 0,
        left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": getThumbSize(sizes) + "px",
        ...props.style
      },
      onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
      onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
      onWheelScroll: (event, maxScrollPos) => {
        if (context.viewport) {
          const scrollPos = context.viewport.scrollLeft + event.deltaX;
          props.onWheelScroll(scrollPos);
          if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
            event.preventDefault();
          }
        }
      },
      onResize: () => {
        if (ref.current && context.viewport && computedStyle) {
          onSizesChange({
            content: context.viewport.scrollWidth,
            viewport: context.viewport.offsetWidth,
            scrollbar: {
              size: ref.current.clientWidth,
              paddingStart: toInt(computedStyle.paddingLeft),
              paddingEnd: toInt(computedStyle.paddingRight)
            }
          });
        }
      }
    }
  );
}, "ScrollAreaScrollbarX"));
var ScrollAreaScrollbarY = /* @__PURE__ */ reactExports.forwardRef(/* @__PURE__ */ __name(function ScrollAreaScrollbarY2(props, forwardedRef) {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = reactExports.useState();
  const ref = reactExports.useRef(null);
  const composeRefs2 = useComposedRefs(forwardedRef, ref, context.onScrollbarYChange);
  reactExports.useEffect(() => {
    if (ref.current) setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollAreaScrollbarImpl,
    {
      "data-orientation": "vertical",
      ...scrollbarProps,
      ref: composeRefs2,
      sizes,
      style: {
        top: 0,
        right: context.dir === "ltr" ? 0 : void 0,
        left: context.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": getThumbSize(sizes) + "px",
        ...props.style
      },
      onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
      onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
      onWheelScroll: (event, maxScrollPos) => {
        if (context.viewport) {
          const scrollPos = context.viewport.scrollTop + event.deltaY;
          props.onWheelScroll(scrollPos);
          if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
            event.preventDefault();
          }
        }
      },
      onResize: () => {
        if (ref.current && context.viewport && computedStyle) {
          onSizesChange({
            content: context.viewport.scrollHeight,
            viewport: context.viewport.offsetHeight,
            scrollbar: {
              size: ref.current.clientHeight,
              paddingStart: toInt(computedStyle.paddingTop),
              paddingEnd: toInt(computedStyle.paddingBottom)
            }
          });
        }
      }
    }
  );
}, "ScrollAreaScrollbarY"));
var [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME);
var ScrollAreaScrollbarImpl = /* @__PURE__ */ reactExports.forwardRef(/* @__PURE__ */ __name(function ScrollAreaScrollbarImpl2(props, forwardedRef) {
  const {
    __scopeScrollArea,
    sizes,
    hasThumb,
    onThumbChange,
    onThumbPointerUp,
    onThumbPointerDown,
    onThumbPositionChange,
    onDragScroll,
    onWheelScroll,
    onResize,
    ...scrollbarProps
  } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, __scopeScrollArea);
  const [scrollbar, setScrollbar] = reactExports.useState(null);
  const composeRefs2 = useComposedRefs(forwardedRef, setScrollbar);
  const rectRef = reactExports.useRef(null);
  const prevWebkitUserSelectRef = reactExports.useRef("");
  const viewport = context.viewport;
  const maxScrollPos = sizes.content - sizes.viewport;
  const handleWheelScroll = useCallbackRef$1(onWheelScroll);
  const handleThumbPositionChange = useCallbackRef$1(onThumbPositionChange);
  const handleResize = useDebounceCallback(onResize, 10);
  function handleDragScroll(event) {
    if (rectRef.current) {
      const x = event.clientX - rectRef.current.left;
      const y = event.clientY - rectRef.current.top;
      onDragScroll({ x, y });
    }
  }
  __name(handleDragScroll, "handleDragScroll");
  reactExports.useEffect(() => {
    const handleWheel = /* @__PURE__ */ __name((event) => {
      const element = event.target;
      const isScrollbarWheel = scrollbar?.contains(element);
      if (isScrollbarWheel) handleWheelScroll(event, maxScrollPos);
    }, "handleWheel");
    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => document.removeEventListener("wheel", handleWheel, { passive: false });
  }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]);
  reactExports.useEffect(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
  useResizeObserver(scrollbar, handleResize);
  useResizeObserver(context.content, handleResize);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollbarProvider,
    {
      scope: __scopeScrollArea,
      scrollbar,
      hasThumb,
      onThumbChange: useCallbackRef$1(onThumbChange),
      onThumbPointerUp: useCallbackRef$1(onThumbPointerUp),
      onThumbPositionChange: handleThumbPositionChange,
      onThumbPointerDown: useCallbackRef$1(onThumbPointerDown),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.div,
        {
          ...scrollbarProps,
          ref: composeRefs2,
          style: { position: "absolute", ...scrollbarProps.style },
          onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
            const mainPointer = 0;
            if (event.button === mainPointer) {
              const element = event.target;
              element.setPointerCapture(event.pointerId);
              rectRef.current = scrollbar.getBoundingClientRect();
              prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
              document.body.style.webkitUserSelect = "none";
              if (context.viewport) context.viewport.style.scrollBehavior = "auto";
              handleDragScroll(event);
            }
          }),
          onPointerMove: composeEventHandlers(props.onPointerMove, handleDragScroll),
          onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
            const element = event.target;
            if (element.hasPointerCapture(event.pointerId)) {
              element.releasePointerCapture(event.pointerId);
            }
            document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
            if (context.viewport) context.viewport.style.scrollBehavior = "";
            rectRef.current = null;
          })
        }
      )
    }
  );
}, "ScrollAreaScrollbarImpl"));
var THUMB_NAME = "ScrollAreaThumb";
var ScrollAreaThumb = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function ScrollAreaThumb2(props, forwardedRef) {
    const { forceMount, ...thumbProps } = props;
    const scrollbarContext = useScrollbarContext(THUMB_NAME, props.__scopeScrollArea);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || scrollbarContext.hasThumb, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaThumbImpl, { ref: forwardedRef, ...thumbProps }) });
  }, "ScrollAreaThumb")
);
var ScrollAreaThumbImpl = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function ScrollAreaThumbImpl2(props, forwardedRef) {
    const { __scopeScrollArea, style, ...thumbProps } = props;
    const scrollAreaContext = useScrollAreaContext(THUMB_NAME, __scopeScrollArea);
    const scrollbarContext = useScrollbarContext(THUMB_NAME, __scopeScrollArea);
    const { onThumbPositionChange } = scrollbarContext;
    const composedRef = useComposedRefs(forwardedRef, scrollbarContext.onThumbChange);
    const removeUnlinkedScrollListenerRef = reactExports.useRef(void 0);
    const debounceScrollEnd = useDebounceCallback(() => {
      if (removeUnlinkedScrollListenerRef.current) {
        removeUnlinkedScrollListenerRef.current();
        removeUnlinkedScrollListenerRef.current = void 0;
      }
    }, 100);
    reactExports.useEffect(() => {
      const viewport = scrollAreaContext.viewport;
      if (viewport) {
        const handleScroll2 = /* @__PURE__ */ __name(() => {
          debounceScrollEnd();
          if (!removeUnlinkedScrollListenerRef.current) {
            const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
            removeUnlinkedScrollListenerRef.current = listener;
            onThumbPositionChange();
          }
        }, "handleScroll");
        onThumbPositionChange();
        viewport.addEventListener("scroll", handleScroll2);
        return () => viewport.removeEventListener("scroll", handleScroll2);
      }
    }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
        ...thumbProps,
        ref: composedRef,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...style
        },
        onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, (event) => {
          const thumb = event.target;
          const thumbRect = thumb.getBoundingClientRect();
          const x = event.clientX - thumbRect.left;
          const y = event.clientY - thumbRect.top;
          scrollbarContext.onThumbPointerDown({ x, y });
        }),
        onPointerUp: composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)
      }
    );
  }, "ScrollAreaThumbImpl")
);
var CORNER_NAME = "ScrollAreaCorner";
var ScrollAreaCorner = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function ScrollAreaCorner2(props, forwardedRef) {
    const context = useScrollAreaContext(CORNER_NAME, props.__scopeScrollArea);
    const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
    const hasCorner = context.type !== "scroll" && hasBothScrollbarsVisible;
    return hasCorner ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaCornerImpl, { ...props, ref: forwardedRef }) : null;
  }, "ScrollAreaCorner")
);
var ScrollAreaCornerImpl = /* @__PURE__ */ reactExports.forwardRef(/* @__PURE__ */ __name(function ScrollAreaCornerImpl2(props, forwardedRef) {
  const { __scopeScrollArea, ...cornerProps } = props;
  const context = useScrollAreaContext(CORNER_NAME, __scopeScrollArea);
  const [width, setWidth] = reactExports.useState(0);
  const [height, setHeight] = reactExports.useState(0);
  const hasSize = Boolean(width && height);
  const { onCornerWidthChange, onCornerHeightChange } = context;
  useResizeObserver(context.scrollbarX, () => {
    const height2 = context.scrollbarX?.offsetHeight || 0;
    context.onCornerHeightChange(height2);
    setHeight(height2);
  });
  useResizeObserver(context.scrollbarY, () => {
    const width2 = context.scrollbarY?.offsetWidth || 0;
    context.onCornerWidthChange(width2);
    setWidth(width2);
  });
  reactExports.useEffect(() => {
    return () => {
      onCornerWidthChange(0);
      onCornerHeightChange(0);
    };
  }, [onCornerWidthChange, onCornerHeightChange]);
  return hasSize ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      ...cornerProps,
      ref: forwardedRef,
      style: {
        width,
        height,
        position: "absolute",
        right: context.dir === "ltr" ? 0 : void 0,
        left: context.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...props.style
      }
    }
  ) : null;
}, "ScrollAreaCornerImpl"));
function toInt(value) {
  return value ? parseInt(value, 10) : 0;
}
__name(toInt, "toInt");
function getThumbRatio(viewportSize, contentSize) {
  const ratio = viewportSize / contentSize;
  return isNaN(ratio) ? 0 : ratio;
}
__name(getThumbRatio, "getThumbRatio");
function getThumbSize(sizes) {
  const ratio = getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}
__name(getThumbSize, "getThumbSize");
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const thumbCenter = thumbSizePx / 2;
  const offset2 = pointerOffset || thumbCenter;
  const thumbOffsetFromEnd = thumbSizePx - offset2;
  const minPointerPos = sizes.scrollbar.paddingStart + offset2;
  const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
  const maxScrollPos = sizes.content - sizes.viewport;
  const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const interpolate = linearScale([minPointerPos, maxPointerPos], scrollRange);
  return interpolate(pointerPos);
}
__name(getScrollPositionFromPointer, "getScrollPositionFromPointer");
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const scrollbar = sizes.scrollbar.size - scrollbarPadding;
  const maxScrollPos = sizes.content - sizes.viewport;
  const maxThumbPos = scrollbar - thumbSizePx;
  const scrollClampRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const scrollWithoutMomentum = clamp(scrollPos, scrollClampRange);
  const interpolate = linearScale([0, maxScrollPos], [0, maxThumbPos]);
  return interpolate(scrollWithoutMomentum);
}
__name(getThumbOffsetFromScroll, "getThumbOffsetFromScroll");
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1]) return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
__name(linearScale, "linearScale");
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}
__name(isScrollingWithinScrollbarBounds, "isScrollingWithinScrollbarBounds");
var addUnlinkedScrollListener = /* @__PURE__ */ __name((node, handler = () => {
}) => {
  let prevPosition = { left: node.scrollLeft, top: node.scrollTop };
  let rAF = 0;
  (/* @__PURE__ */ __name((function loop() {
    const position = { left: node.scrollLeft, top: node.scrollTop };
    const isHorizontalScroll = prevPosition.left !== position.left;
    const isVerticalScroll = prevPosition.top !== position.top;
    if (isHorizontalScroll || isVerticalScroll) handler();
    prevPosition = position;
    rAF = window.requestAnimationFrame(loop);
  }), "loop"))();
  return () => window.cancelAnimationFrame(rAF);
}, "addUnlinkedScrollListener");
function useDebounceCallback(callback, delay) {
  const handleCallback = useCallbackRef$1(callback);
  const debounceTimerRef = reactExports.useRef(0);
  reactExports.useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);
  return reactExports.useCallback(() => {
    window.clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = window.setTimeout(handleCallback, delay);
  }, [handleCallback, delay]);
}
__name(useDebounceCallback, "useDebounceCallback");
function useResizeObserver(element, onResize) {
  const handleResize = useCallbackRef$1(onResize);
  useLayoutEffect2(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [element, handleResize]);
}
__name(useResizeObserver, "useResizeObserver");
var Root = ScrollArea;
var Viewport = ScrollAreaViewport;
var Scrollbar = ScrollAreaScrollbar;
var Thumb = ScrollAreaThumb;
var Corner = ScrollAreaCorner;
const ScrollAreaV2 = function ScrollAreaV22({
  ref: forwardedRef,
  className,
  type,
  scrollHideDelay,
  dir,
  orientation = "vertical",
  ...viewportProps
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Root,
    {
      type,
      scrollHideDelay,
      dir,
      className: clsx("flex flex-col overflow-hidden", className),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Viewport,
          {
            ...viewportProps,
            ref: forwardedRef,
            className: "size-full overscroll-x-contain [&>:first-of-type]:block!"
          }
        ),
        orientation !== "vertical" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Scrollbar,
          {
            orientation: "horizontal",
            className: "hover:bg-grey-border m-px flex h-1 touch-none select-none flex-col rounded-full transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Thumb, { className: "bg-grey-disabled hover:bg-grey-placeholder flex-1 rounded-full" })
          }
        ) : null,
        orientation !== "horizontal" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Scrollbar,
          {
            orientation: "vertical",
            className: "hover:bg-grey-border m-px flex w-1 touch-none select-none flex-row rounded-full transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Thumb, { className: "bg-grey-disabled hover:bg-grey-placeholder flex-1 rounded-full" })
          }
        ) : null,
        orientation === "both" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Corner, { className: "rounded-full" }) : null
      ]
    }
  );
};
function isReactComponent(component) {
  return isClassComponent(component) || typeof component === "function" || isExoticComponent(component);
}
function isClassComponent(component) {
  return typeof component === "function" && (() => {
    const proto = Object.getPrototypeOf(component);
    return proto.prototype && proto.prototype.isReactComponent;
  })();
}
function isExoticComponent(component) {
  return typeof component === "object" && typeof component.$$typeof === "symbol" && ["react.memo", "react.forward_ref"].includes(component.$$typeof.description);
}
function flexRender(Comp, props) {
  if (Comp === null || Comp === void 0) return null;
  return isReactComponent(Comp) ? /* @__PURE__ */ React.createElement(Comp, props) : Comp;
}
function FlexRender(props) {
  if ("cell" in props && props.cell) {
    const cell = props.cell;
    const def = cell.column.columnDef;
    const groupingCell = cell;
    const groupingDef = def;
    if (groupingCell.getIsAggregated?.()) return flexRender(groupingDef.aggregatedCell ?? def.cell, cell.getContext());
    if (groupingCell.getIsPlaceholder?.()) return null;
    return flexRender(def.cell, cell.getContext());
  }
  if ("header" in props && props.header) return flexRender(props.header.column.columnDef.header, props.header.getContext());
  if ("footer" in props && props.footer) return flexRender(props.footer.column.columnDef.footer, props.footer.getContext());
  return null;
}
// @__NO_SIDE_EFFECTS__
function createReactiveSystem({ update, notify, unwatched }) {
  return {
    link: link2,
    unlink: unlink2,
    propagate: propagate2,
    checkDirty: checkDirty2,
    shallowPropagate: shallowPropagate2
  };
  function link2(dep, sub2, version) {
    const prevDep = sub2.depsTail;
    if (prevDep !== void 0 && prevDep.dep === dep) return;
    const nextDep = prevDep !== void 0 ? prevDep.nextDep : sub2.deps;
    if (nextDep !== void 0 && nextDep.dep === dep) {
      nextDep.version = version;
      sub2.depsTail = nextDep;
      return;
    }
    const prevSub = dep.subsTail;
    if (prevSub !== void 0 && prevSub.version === version && prevSub.sub === sub2) return;
    const newLink = sub2.depsTail = dep.subsTail = {
      version,
      dep,
      sub: sub2,
      prevDep,
      nextDep,
      prevSub,
      nextSub: void 0
    };
    if (nextDep !== void 0) nextDep.prevDep = newLink;
    if (prevDep !== void 0) prevDep.nextDep = newLink;
    else sub2.deps = newLink;
    if (prevSub !== void 0) prevSub.nextSub = newLink;
    else dep.subs = newLink;
  }
  function unlink2(link3, sub2 = link3.sub) {
    const dep = link3.dep;
    const prevDep = link3.prevDep;
    const nextDep = link3.nextDep;
    const nextSub = link3.nextSub;
    const prevSub = link3.prevSub;
    if (nextDep !== void 0) nextDep.prevDep = prevDep;
    else sub2.depsTail = prevDep;
    if (prevDep !== void 0) prevDep.nextDep = nextDep;
    else sub2.deps = nextDep;
    if (nextSub !== void 0) nextSub.prevSub = prevSub;
    else dep.subsTail = prevSub;
    if (prevSub !== void 0) prevSub.nextSub = nextSub;
    else if ((dep.subs = nextSub) === void 0) unwatched(dep);
    return nextDep;
  }
  function propagate2(link3) {
    let next = link3.nextSub;
    let stack;
    top: do {
      const sub2 = link3.sub;
      let flags = sub2.flags;
      if (!(flags & 60)) sub2.flags = flags | 32;
      else if (!(flags & (4 | 8))) flags = 0;
      else if (!(flags & 4)) sub2.flags = flags & -9 | 32;
      else if (!(flags & (16 | 32)) && isValidLink(link3, sub2)) {
        sub2.flags = flags | (8 | 32);
        flags &= 1;
      } else flags = 0;
      if (flags & 2) notify(sub2);
      if (flags & 1) {
        const subSubs = sub2.subs;
        if (subSubs !== void 0) {
          const nextSub = (link3 = subSubs).nextSub;
          if (nextSub !== void 0) {
            stack = {
              value: next,
              prev: stack
            };
            next = nextSub;
          }
          continue;
        }
      }
      if ((link3 = next) !== void 0) {
        next = link3.nextSub;
        continue;
      }
      while (stack !== void 0) {
        link3 = stack.value;
        stack = stack.prev;
        if (link3 !== void 0) {
          next = link3.nextSub;
          continue top;
        }
      }
      break;
    } while (true);
  }
  function checkDirty2(link3, sub2) {
    let stack;
    let checkDepth = 0;
    let dirty = false;
    top: do {
      const dep = link3.dep;
      const flags = dep.flags;
      if (sub2.flags & 16) dirty = true;
      else if ((flags & (1 | 16)) === (1 | 16)) {
        if (update(dep)) {
          const subs = dep.subs;
          if (subs.nextSub !== void 0) shallowPropagate2(subs);
          dirty = true;
        }
      } else if ((flags & (1 | 32)) === (1 | 32)) {
        if (link3.nextSub !== void 0 || link3.prevSub !== void 0) stack = {
          value: link3,
          prev: stack
        };
        link3 = dep.deps;
        sub2 = dep;
        ++checkDepth;
        continue;
      }
      if (!dirty) {
        const nextDep = link3.nextDep;
        if (nextDep !== void 0) {
          link3 = nextDep;
          continue;
        }
      }
      while (checkDepth--) {
        const firstSub = sub2.subs;
        const hasMultipleSubs = firstSub.nextSub !== void 0;
        if (hasMultipleSubs) {
          link3 = stack.value;
          stack = stack.prev;
        } else link3 = firstSub;
        if (dirty) {
          if (update(sub2)) {
            if (hasMultipleSubs) shallowPropagate2(firstSub);
            sub2 = link3.sub;
            continue;
          }
          dirty = false;
        } else sub2.flags &= -33;
        sub2 = link3.sub;
        const nextDep = link3.nextDep;
        if (nextDep !== void 0) {
          link3 = nextDep;
          continue top;
        }
      }
      return dirty;
    } while (true);
  }
  function shallowPropagate2(link3) {
    do {
      const sub2 = link3.sub;
      const flags = sub2.flags;
      if ((flags & (32 | 16)) === 32) {
        sub2.flags = flags | 16;
        if ((flags & (2 | 4)) === 2) notify(sub2);
      }
    } while ((link3 = link3.nextSub) !== void 0);
  }
  function isValidLink(checkLink, sub2) {
    let link3 = sub2.depsTail;
    while (link3 !== void 0) {
      if (link3 === checkLink) return true;
      link3 = link3.prevDep;
    }
    return false;
  }
}
function toObserver(nextHandler, errorHandler, completionHandler) {
  const isObserver = typeof nextHandler === "object";
  const self2 = isObserver ? nextHandler : void 0;
  return {
    next: (isObserver ? nextHandler.next : nextHandler)?.bind(self2),
    error: (isObserver ? nextHandler.error : errorHandler)?.bind(self2),
    complete: (isObserver ? nextHandler.complete : completionHandler)?.bind(self2)
  };
}
const queuedEffects = [];
let cycle = 0;
const { link, unlink, propagate, checkDirty, shallowPropagate } = /* @__PURE__ */ createReactiveSystem({
  update(atom) {
    return atom._update();
  },
  notify(effect2) {
    queuedEffects[queuedEffectsLength++] = effect2;
    effect2.flags &= -3;
  },
  unwatched(atom) {
    if (atom.depsTail !== void 0) {
      atom.depsTail = void 0;
      atom.flags = 1 | 16;
      purgeDeps(atom);
    }
  }
});
let notifyIndex = 0;
let queuedEffectsLength = 0;
let activeSub;
let batchDepth = 0;
function batch(fn) {
  try {
    ++batchDepth;
    fn();
  } finally {
    if (!--batchDepth) flush();
  }
}
function purgeDeps(sub2) {
  const depsTail = sub2.depsTail;
  let dep = depsTail !== void 0 ? depsTail.nextDep : sub2.deps;
  while (dep !== void 0) dep = unlink(dep, sub2);
}
function flush() {
  if (batchDepth > 0) return;
  while (notifyIndex < queuedEffectsLength) {
    const effect2 = queuedEffects[notifyIndex];
    queuedEffects[notifyIndex++] = void 0;
    effect2.notify();
  }
  notifyIndex = 0;
  queuedEffectsLength = 0;
}
function createAtom(valueOrFn, options2) {
  const isComputed = typeof valueOrFn === "function";
  const getter = valueOrFn;
  const atom = {
    _snapshot: isComputed ? void 0 : valueOrFn,
    subs: void 0,
    subsTail: void 0,
    deps: void 0,
    depsTail: void 0,
    flags: isComputed ? 0 : 1,
    get() {
      if (activeSub !== void 0) link(atom, activeSub, cycle);
      return atom._snapshot;
    },
    subscribe(observerOrFn) {
      const obs = toObserver(observerOrFn);
      const observed = { current: false };
      const e = effect(() => {
        atom.get();
        if (!observed.current) observed.current = true;
        else obs.next?.(atom._snapshot);
      });
      return { unsubscribe: () => {
        e.stop();
      } };
    },
    _update(getValue) {
      const prevSub = activeSub;
      const compare = options2?.compare ?? Object.is;
      if (isComputed) {
        activeSub = atom;
        ++cycle;
        atom.depsTail = void 0;
      } else if (getValue === void 0) return false;
      if (isComputed) atom.flags = 1 | 4;
      try {
        const oldValue = atom._snapshot;
        const newValue = typeof getValue === "function" ? getValue(oldValue) : getValue === void 0 && isComputed ? getter(oldValue) : getValue;
        if (oldValue === void 0 || !compare(oldValue, newValue)) {
          atom._snapshot = newValue;
          return true;
        }
        return false;
      } finally {
        activeSub = prevSub;
        if (isComputed) atom.flags &= -5;
        purgeDeps(atom);
      }
    }
  };
  if (isComputed) {
    atom.flags = 1 | 16;
    atom.get = function() {
      const flags = atom.flags;
      if (flags & 16 || flags & 32 && checkDirty(atom.deps, atom)) {
        if (atom._update()) {
          const subs = atom.subs;
          if (subs !== void 0) shallowPropagate(subs);
        }
      } else if (flags & 32) atom.flags = flags & -33;
      if (activeSub !== void 0) link(atom, activeSub, cycle);
      return atom._snapshot;
    };
  } else atom.set = function(valueOrFn2) {
    if (atom._update(valueOrFn2)) {
      const subs = atom.subs;
      if (subs !== void 0) {
        propagate(subs);
        shallowPropagate(subs);
        flush();
      }
    }
  };
  return atom;
}
function effect(fn) {
  const run = () => {
    const prevSub = activeSub;
    activeSub = effectObj;
    ++cycle;
    effectObj.depsTail = void 0;
    effectObj.flags = 2 | 4;
    try {
      return fn();
    } finally {
      activeSub = prevSub;
      effectObj.flags &= -5;
      purgeDeps(effectObj);
    }
  };
  const effectObj = {
    deps: void 0,
    depsTail: void 0,
    subs: void 0,
    subsTail: void 0,
    flags: 2 | 4,
    notify() {
      const flags = this.flags;
      if (flags & 16 || flags & 32 && checkDirty(this.deps, this)) run();
      else this.flags = 2;
    },
    stop() {
      this.flags = 0;
      this.depsTail = void 0;
      purgeDeps(this);
    }
  };
  run();
  return effectObj;
}
function shallow(objA, objB) {
  if (Object.is(objA, objB)) return true;
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) return false;
  if (objA instanceof Map && objB instanceof Map) {
    if (objA.size !== objB.size) return false;
    for (const [k2, v] of objA) if (!objB.has(k2) || !Object.is(v, objB.get(k2))) return false;
    return true;
  }
  if (objA instanceof Set && objB instanceof Set) {
    if (objA.size !== objB.size) return false;
    for (const v of objA) if (!objB.has(v)) return false;
    return true;
  }
  if (objA instanceof Date && objB instanceof Date) {
    if (objA.getTime() !== objB.getTime()) return false;
    return true;
  }
  const keysA = getOwnKeys(objA);
  if (keysA.length !== getOwnKeys(objB).length) return false;
  for (let i = 0; i < keysA.length; i++) if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) return false;
  return true;
}
function getOwnKeys(obj) {
  return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj));
}
function defaultCompare(a, b) {
  return a === b;
}
function useSelector(source, selector = (s) => s, options2) {
  const compare = options2?.compare ?? defaultCompare;
  const subscribe2 = reactExports.useCallback((handleStoreChange) => {
    const { unsubscribe } = source.subscribe(handleStoreChange);
    return unsubscribe;
  }, [source]);
  const getSnapshot = reactExports.useCallback(() => source.get(), [source]);
  return withSelectorExports.useSyncExternalStoreWithSelector(subscribe2, getSnapshot, getSnapshot, selector, compare);
}
function Subscribe(props) {
  const selected = useSelector(props.source, props.selector, { compare: shallow });
  return typeof props.children === "function" ? props.children(selected) : props.children;
}
function atomToStore(atom) {
  const store = atom;
  Object.defineProperty(atom, "state", { get() {
    return atom.get();
  } });
  if ("set" in atom) store.setState = atom.set.bind(atom);
  return store;
}
function renderPhaseReactivity(primitives) {
  const { createAtom: createAtom2, batch: batch2 } = primitives;
  const commitAtom = createAtom2(0);
  return {
    createOptionsStore: false,
    wrapExternalAtoms: false,
    addSubscription: () => {
      throw new Error("Feature not supported in current reactivity implementation");
    },
    unmount: () => {
      throw new Error("Feature not supported in current reactivity implementation");
    },
    schedule: primitives.schedule ?? ((fn) => queueMicrotask(fn)),
    batch: batch2,
    untrack: (fn) => fn(),
    createReadonlyAtom: (fn, atomOptions) => {
      const compare = atomOptions?.compare ?? Object.is;
      let hasSnapshot = false;
      let snapshot;
      const getSnapshot = () => {
        const nextSnapshot = fn();
        if (!hasSnapshot || !compare(snapshot, nextSnapshot)) {
          snapshot = nextSnapshot;
          hasSnapshot = true;
        }
        return snapshot;
      };
      const reactiveAtom = createAtom2(() => {
        commitAtom.get();
        return getSnapshot();
      }, { compare });
      return {
        get: getSnapshot,
        subscribe: reactiveAtom.subscribe.bind(reactiveAtom)
      };
    },
    createWritableAtom: (value, atomOptions) => {
      return createAtom2(value, { compare: atomOptions?.compare });
    },
    commit: () => {
      commitAtom.set((version) => version + 1);
    }
  };
}
function createRenderPhaseSource(source, compare = Object.is) {
  let hasCommittedSnapshot = false;
  let committedSnapshot;
  return {
    get: source.get,
    markCommitted: (snapshot) => {
      committedSnapshot = snapshot;
      hasCommittedSnapshot = true;
    },
    subscribe: (listener) => source.subscribe((value) => {
      if (!hasCommittedSnapshot || !compare(committedSnapshot, value)) listener(value);
    })
  };
}
function reactReactivity() {
  return renderPhaseReactivity({
    createAtom,
    batch
  });
}
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
function cloneState(value) {
  if (Array.isArray(value)) return value.map(cloneState);
  if (value && typeof value === "object") {
    const proto = Object.getPrototypeOf(value);
    if (proto !== Object.prototype && proto !== null) return value;
    const copy = proto === null ? makeObjectMap() : {};
    const keys = Object.keys(value);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      Object.defineProperty(copy, key, {
        configurable: true,
        enumerable: true,
        value: cloneState(value[key]),
        writable: true
      });
    }
    return copy;
  }
  return value;
}
function copyInstancePropertiesWithoutMemos(target, source) {
  const keys = Object.keys(source);
  const targetRecord = target;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (!key.startsWith("_memo_") && key !== "_cellsCache") targetRecord[key] = source[key];
  }
  return target;
}
function makeObjectMap() {
  return /* @__PURE__ */ Object.create(null);
}
function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function makeStateUpdater(key, instance) {
  return (updater) => {
    (instance.options.atoms?.[key] ?? instance.baseAtoms[key]).set((old) => functionalUpdate(updater, old));
  };
}
function isPlainContainer(value) {
  if (typeof value !== "object" || value === null) return false;
  if (Array.isArray(value)) return true;
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}
function getEnumerableOwnKeys(value) {
  return Reflect.ownKeys(value).filter((key) => Object.prototype.propertyIsEnumerable.call(value, key));
}
const MAX_STATE_COMPARE_DEPTH = 3;
function stateSlicesEqual(a, b) {
  return stateSlicesEqualAtDepth(a, b, MAX_STATE_COMPARE_DEPTH);
}
function stateSlicesEqualAtDepth(a, b, depth) {
  if (Object.is(a, b)) return true;
  if (depth <= 0 || !isPlainContainer(a) || !isPlainContainer(b)) return false;
  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
  }
  const keysA = getEnumerableOwnKeys(a);
  const keysB = getEnumerableOwnKeys(b);
  if (keysA.length !== keysB.length) return false;
  const recordA = a;
  const recordB = b;
  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i];
    if (!Object.prototype.propertyIsEnumerable.call(b, key)) return false;
    if (!stateSlicesEqualAtDepth(recordA[key], recordB[key], depth - 1)) return false;
  }
  return true;
}
function setStateSlice(instance, key, updater, isEqual = stateSlicesEqual) {
  const onChangeKey = `on${key.charAt(0).toUpperCase()}${key.slice(1)}Change`;
  const onChange = instance.options[onChangeKey];
  if (!onChange) return;
  onChange((current) => {
    const next = functionalUpdate(updater, current);
    return isEqual(current, next) ? current : next;
  });
}
function isFunction(d) {
  return d instanceof Function;
}
function flattenBy(arr, getChildren2) {
  const flat = [];
  const recurse = (subArr) => {
    subArr.forEach((item) => {
      flat.push(item);
      const children = getChildren2(item);
      if (children.length) recurse(children);
    });
  };
  recurse(arr);
  return flat;
}
const memo$1 = ({ fn, memoDeps, onAfterCompare, onAfterUpdate, onBeforeCompare, onBeforeUpdate }) => {
  let deps = [];
  let result;
  const memoizedFn = (depArgs) => {
    onBeforeCompare?.();
    const newDeps = memoDeps?.(depArgs);
    let depsChanged = !newDeps || newDeps.length !== deps?.length;
    if (!depsChanged && newDeps) {
      for (let i = 0; i < newDeps.length; i++) if (newDeps[i] !== deps[i]) {
        depsChanged = true;
        break;
      }
    }
    onAfterCompare?.(depsChanged);
    if (!depsChanged) return result;
    deps = newDeps;
    onBeforeUpdate?.();
    result = fn(...newDeps ?? []);
    onAfterUpdate?.(result);
    return result;
  };
  return memoizedFn;
};
function skipFirstRun(fn) {
  let hasRun = false;
  return () => {
    if (!hasRun) {
      hasRun = true;
      return;
    }
    fn();
  };
}
function tableMemo({ feature, fnName, objectId, onAfterUpdate, table, ...memoOptions }) {
  const onAfterUpdateHandler = () => {
    if (!onAfterUpdate) return;
    const { schedule, untrack } = table._reactivity;
    schedule(() => untrack(() => onAfterUpdate()));
  };
  const debugOptions = { onAfterUpdate: () => {
    onAfterUpdateHandler();
  } };
  return memo$1({
    ...memoOptions,
    ...debugOptions
  });
}
function getFunctionNameInfo(staticFnName, splitBy = "_") {
  const [parentName, fnKey] = staticFnName.split(splitBy);
  return {
    fnKey,
    fnName: `${parentName}.${fnKey}`,
    parentName
  };
}
function assignTableAPIs(feature, table, apis) {
  for (const [staticFnName, { fn, memoDeps }] of Object.entries(apis)) {
    const { fnKey, fnName } = getFunctionNameInfo(staticFnName);
    table[fnKey] = memoDeps ? tableMemo({
      memoDeps,
      fn,
      fnName,
      table,
      feature
    }) : fn;
  }
}
function assignPrototypeAPIs(feature, prototype, table, apis) {
  for (const [staticFnName, { fn, memoDeps }] of Object.entries(apis)) {
    const { fnKey, fnName } = getFunctionNameInfo(staticFnName);
    if (memoDeps) {
      const memoKey = `_memo_${fnKey}`;
      prototype[fnKey] = function(...args) {
        if (!this[memoKey]) {
          const self2 = this;
          this[memoKey] = tableMemo({
            memoDeps: (depArgs) => memoDeps(self2, depArgs),
            fn: (...deps) => fn(self2, ...deps),
            fnName,
            objectId: self2.id,
            table,
            feature
          });
        }
        return this[memoKey](...args);
      };
    } else prototype[fnKey] = function(...args) {
      return fn(this, ...args);
    };
  }
}
function callMemoOrStaticFn(obj, fnKey, staticFn, ...args) {
  return obj[fnKey]?.(...args) ?? staticFn(obj, ...args);
}
function cell_getValue(cell) {
  return cell.row.getValue(cell.column.id);
}
function cell_renderValue(cell) {
  return cell.getValue() ?? cell.table.options.renderFallbackValue;
}
function cell_getContext(cell) {
  return {
    table: cell.table,
    column: cell.column,
    row: cell.row,
    cell,
    getValue: () => cell.getValue(),
    renderValue: () => cell.renderValue()
  };
}
const coreCellsFeature = { assignCellPrototype: (prototype, table) => {
  assignPrototypeAPIs("coreCellsFeature", prototype, table, {
    cell_getValue: { fn: (cell) => cell_getValue(cell) },
    cell_renderValue: { fn: (cell) => cell_renderValue(cell) },
    cell_getContext: {
      fn: (cell) => cell_getContext(cell),
      memoDeps: (cell) => [cell]
    }
  });
} };
function getHeaderPrototype(table) {
  if (!table._headerPrototype) {
    table._headerPrototype = { table };
    const features = Object.values(table._features);
    for (let i = 0; i < features.length; i++) features[i].assignHeaderPrototype?.(table._headerPrototype, table);
  }
  return table._headerPrototype;
}
function constructHeader(table, column, options2) {
  const headerPrototype = getHeaderPrototype(table);
  const header = Object.create(headerPrototype);
  header.colSpan = 0;
  header.column = column;
  header.depth = options2.depth;
  header.headerGroup = null;
  header.id = options2.id ?? column.id;
  header.index = options2.index;
  header.isPlaceholder = !!options2.isPlaceholder;
  header.placeholderId = options2.placeholderId;
  header.rowSpan = 0;
  header.subHeaders = [];
  const initFns = table._headerInstanceInitFns;
  for (let i = 0; i < initFns.length; i++) initFns[i](header);
  return header;
}
function getDefaultColumnPinningState() {
  return {
    start: [],
    end: []
  };
}
function column_pin(column, position) {
  const leafColumns = column.getLeafColumns();
  const columnIds = [];
  for (let i = 0; i < leafColumns.length; i++) {
    const id = leafColumns[i].id;
    if (id) columnIds.push(id);
  }
  table_setColumnPinning(column.table, (old) => {
    if (position === "end") return {
      start: old.start.filter((d) => !columnIds.includes(d)),
      end: [...old.end.filter((d) => !columnIds.includes(d)), ...columnIds]
    };
    if (position === "start") return {
      start: [...old.start.filter((d) => !columnIds.includes(d)), ...columnIds],
      end: old.end.filter((d) => !columnIds.includes(d))
    };
    return {
      start: old.start.filter((d) => !columnIds.includes(d)),
      end: old.end.filter((d) => !columnIds.includes(d))
    };
  });
}
function column_getCanPin(column) {
  return column.getLeafColumns().some((leafColumn) => (leafColumn.columnDef.enablePinning ?? true) && (column.table.options.enableColumnPinning ?? true));
}
function column_getIsPinned(column) {
  const leafColumns = column.getLeafColumns();
  const { start, end } = column.table.atoms.columnPinning?.get() ?? getDefaultColumnPinningState();
  for (let i = 0; i < leafColumns.length; i++) if (start.includes(leafColumns[i].id)) return "start";
  for (let i = 0; i < leafColumns.length; i++) if (end.includes(leafColumns[i].id)) return "end";
  return false;
}
function column_getPinnedIndex(column) {
  const position = column_getIsPinned(column);
  return position ? column.table.atoms.columnPinning?.get()?.[position].indexOf(column.id) ?? -1 : 0;
}
function row_getCenterVisibleCells(row) {
  const allCells = callMemoOrStaticFn(row, "getVisibleCells", row_getVisibleCells);
  const { start, end } = row.table.atoms.columnPinning?.get() ?? getDefaultColumnPinningState();
  if (!start.length && !end.length) return allCells;
  const startAndEnd = [...start, ...end];
  return allCells.filter((d) => !startAndEnd.includes(d.column.id));
}
function row_getStartVisibleCells(row) {
  const { start } = row.table.atoms.columnPinning?.get() ?? getDefaultColumnPinningState();
  if (!start.length) return [];
  const allVisibleCells = callMemoOrStaticFn(row, "getVisibleCellsByColumnId", row_getVisibleCellsByColumnId);
  const cells = [];
  for (let i = 0; i < start.length; i++) {
    const cell = allVisibleCells[start[i]];
    if (cell) {
      cell.position = "start";
      cells.push(cell);
    }
  }
  return cells;
}
function row_getEndVisibleCells(row) {
  const { end } = row.table.atoms.columnPinning?.get() ?? getDefaultColumnPinningState();
  if (!end.length) return [];
  const allVisibleCells = callMemoOrStaticFn(row, "getVisibleCellsByColumnId", row_getVisibleCellsByColumnId);
  const cells = [];
  for (let i = 0; i < end.length; i++) {
    const cell = allVisibleCells[end[i]];
    if (cell) {
      cell.position = "end";
      cells.push(cell);
    }
  }
  return cells;
}
function table_setColumnPinning(table, updater) {
  setStateSlice(table, "columnPinning", updater);
}
function table_resetColumnPinning(table, defaultState) {
  table_setColumnPinning(table, defaultState ? getDefaultColumnPinningState() : cloneState(table.initialState.columnPinning ?? getDefaultColumnPinningState()));
}
function table_getIsSomeColumnsPinned(table, position) {
  const pinningState = table.atoms.columnPinning?.get();
  if (!position) return Boolean(pinningState?.start.length || pinningState?.end.length);
  return Boolean(pinningState?.[position].length);
}
function table_getStartHeaderGroups(table) {
  const allColumns = table.getAllColumns();
  const leafColumnsById = table.getAllLeafColumnsById();
  const { start } = table.atoms.columnPinning?.get() ?? getDefaultColumnPinningState();
  const orderedLeafColumns = [];
  for (let i = 0; i < start.length; i++) {
    const column = leafColumnsById[start[i]];
    if (column && callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible)) orderedLeafColumns.push(column);
  }
  return buildHeaderGroups(allColumns, orderedLeafColumns, table, "start");
}
function table_getEndHeaderGroups(table) {
  const allColumns = table.getAllColumns();
  const leafColumnsById = table.getAllLeafColumnsById();
  const { end } = table.atoms.columnPinning?.get() ?? getDefaultColumnPinningState();
  const orderedLeafColumns = [];
  for (let i = 0; i < end.length; i++) {
    const column = leafColumnsById[end[i]];
    if (column && callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible)) orderedLeafColumns.push(column);
  }
  return buildHeaderGroups(allColumns, orderedLeafColumns, table, "end");
}
function table_getCenterHeaderGroups(table) {
  const allColumns = table.getAllColumns();
  let leafColumns = callMemoOrStaticFn(table, "getVisibleLeafColumns", table_getVisibleLeafColumns);
  const { start, end } = table.atoms.columnPinning?.get() ?? getDefaultColumnPinningState();
  if (start.length || end.length) {
    const startAndEnd = [...start, ...end];
    leafColumns = leafColumns.filter((column) => !startAndEnd.includes(column.id));
  }
  return buildHeaderGroups(allColumns, leafColumns, table, "center");
}
function table_getStartFooterGroups(table) {
  return [...callMemoOrStaticFn(table, "getStartHeaderGroups", table_getStartHeaderGroups)].reverse();
}
function table_getEndFooterGroups(table) {
  return [...callMemoOrStaticFn(table, "getEndHeaderGroups", table_getEndHeaderGroups)].reverse();
}
function table_getCenterFooterGroups(table) {
  return [...callMemoOrStaticFn(table, "getCenterHeaderGroups", table_getCenterHeaderGroups)].reverse();
}
function table_getStartFlatHeaders(table) {
  const leftHeaderGroups = callMemoOrStaticFn(table, "getStartHeaderGroups", table_getStartHeaderGroups);
  const result = [];
  for (let i = 0; i < leftHeaderGroups.length; i++) {
    const headers = leftHeaderGroups[i].headers;
    for (let j = 0; j < headers.length; j++) result.push(headers[j]);
  }
  return result;
}
function table_getEndFlatHeaders(table) {
  const rightHeaderGroups = callMemoOrStaticFn(table, "getEndHeaderGroups", table_getEndHeaderGroups);
  const result = [];
  for (let i = 0; i < rightHeaderGroups.length; i++) {
    const headers = rightHeaderGroups[i].headers;
    for (let j = 0; j < headers.length; j++) result.push(headers[j]);
  }
  return result;
}
function table_getCenterFlatHeaders(table) {
  const centerHeaderGroups = callMemoOrStaticFn(table, "getCenterHeaderGroups", table_getCenterHeaderGroups);
  const result = [];
  for (let i = 0; i < centerHeaderGroups.length; i++) {
    const headers = centerHeaderGroups[i].headers;
    for (let j = 0; j < headers.length; j++) result.push(headers[j]);
  }
  return result;
}
function table_getStartLeafHeaders(table) {
  return callMemoOrStaticFn(table, "getStartFlatHeaders", table_getStartFlatHeaders).filter((header) => !header.subHeaders.length);
}
function table_getEndLeafHeaders(table) {
  return callMemoOrStaticFn(table, "getEndFlatHeaders", table_getEndFlatHeaders).filter((header) => !header.subHeaders.length);
}
function table_getCenterLeafHeaders(table) {
  return callMemoOrStaticFn(table, "getCenterFlatHeaders", table_getCenterFlatHeaders).filter((header) => !header.subHeaders.length);
}
function table_getStartLeafColumns(table) {
  const { start } = table.atoms.columnPinning?.get() ?? getDefaultColumnPinningState();
  const leafColumnsById = table.getAllLeafColumnsById();
  const result = [];
  for (let i = 0; i < start.length; i++) {
    const column = leafColumnsById[start[i]];
    if (column) result.push(column);
  }
  return result;
}
function table_getEndLeafColumns(table) {
  const { end } = table.atoms.columnPinning?.get() ?? getDefaultColumnPinningState();
  const leafColumnsById = table.getAllLeafColumnsById();
  const result = [];
  for (let i = 0; i < end.length; i++) {
    const column = leafColumnsById[end[i]];
    if (column) result.push(column);
  }
  return result;
}
function table_getCenterLeafColumns(table) {
  const { start, end } = table.atoms.columnPinning?.get() ?? getDefaultColumnPinningState();
  if (!start.length && !end.length) return table.getAllLeafColumns();
  const startAndEnd = [...start, ...end];
  return table.getAllLeafColumns().filter((d) => !startAndEnd.includes(d.id));
}
function table_getPinnedLeafColumns(table, position) {
  return !position ? table.getAllLeafColumns() : position === "start" ? callMemoOrStaticFn(table, "getStartLeafColumns", table_getStartLeafColumns) : position === "end" ? callMemoOrStaticFn(table, "getEndLeafColumns", table_getEndLeafColumns) : callMemoOrStaticFn(table, "getCenterLeafColumns", table_getCenterLeafColumns);
}
function table_getStartVisibleLeafColumns(table) {
  return callMemoOrStaticFn(table, "getStartLeafColumns", table_getStartLeafColumns).filter((column) => callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible));
}
function table_getEndVisibleLeafColumns(table) {
  return callMemoOrStaticFn(table, "getEndLeafColumns", table_getEndLeafColumns).filter((column) => callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible));
}
function table_getCenterVisibleLeafColumns(table) {
  return callMemoOrStaticFn(table, "getCenterLeafColumns", table_getCenterLeafColumns).filter((column) => callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible));
}
function table_getPinnedVisibleLeafColumns(table, position) {
  return !position ? callMemoOrStaticFn(table, "getVisibleLeafColumns", table_getVisibleLeafColumns) : position === "start" ? callMemoOrStaticFn(table, "getStartVisibleLeafColumns", table_getStartVisibleLeafColumns) : position === "end" ? callMemoOrStaticFn(table, "getEndVisibleLeafColumns", table_getEndVisibleLeafColumns) : callMemoOrStaticFn(table, "getCenterVisibleLeafColumns", table_getCenterVisibleLeafColumns);
}
function getDefaultColumnVisibilityState() {
  return makeObjectMap();
}
function column_toggleVisibility(column, visible) {
  if (column_getCanHide(column)) table_setColumnVisibility(column.table, (old) => {
    const next = Object.assign(makeObjectMap(), old);
    const nextVisible = visible ?? !callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible);
    const leafColumns = column.getLeafColumns();
    for (let i = 0; i < leafColumns.length; i++) {
      const leafColumn = leafColumns[i];
      if (column_getCanHide(leafColumn)) next[leafColumn.id] = nextVisible;
    }
    return next;
  });
}
function column_getIsVisible(column) {
  const columnVisibility = column.table.atoms.columnVisibility?.get();
  if (!columnVisibility) return true;
  const childColumns = column.columns;
  if (childColumns.length) return childColumns.some((childColumn) => callMemoOrStaticFn(childColumn, "getIsVisible", column_getIsVisible));
  return (hasOwn(columnVisibility, column.id) ? columnVisibility[column.id] : void 0) ?? true;
}
function column_getCanHide(column) {
  return (column.columnDef.enableHiding ?? true) && (column.table.options.enableHiding ?? true);
}
function column_getToggleVisibilityHandler(column) {
  return (e) => {
    column_toggleVisibility(column, e.target.checked);
  };
}
function row_getVisibleCells(row) {
  const allCells = row.getAllCells();
  const visibleCells = [];
  for (let i = 0; i < allCells.length; i++) {
    const cell = allCells[i];
    if (callMemoOrStaticFn(cell.column, "getIsVisible", column_getIsVisible)) visibleCells.push(cell);
  }
  const { start, end } = row.table.atoms.columnPinning?.get() ?? getDefaultColumnPinningState();
  if (!start.length && !end.length) return visibleCells;
  const visibleCellsByColumnId = callMemoOrStaticFn(row, "getVisibleCellsByColumnId", row_getVisibleCellsByColumnId);
  const startCells = [];
  for (let i = 0; i < start.length; i++) {
    const cell = visibleCellsByColumnId[start[i]];
    if (cell) startCells.push(cell);
  }
  const endCells = [];
  for (let i = 0; i < end.length; i++) {
    const cell = visibleCellsByColumnId[end[i]];
    if (cell) endCells.push(cell);
  }
  const centerCells = [];
  for (let i = 0; i < visibleCells.length; i++) {
    const cell = visibleCells[i];
    const id = cell.column.id;
    if (!start.includes(id) && !end.includes(id)) centerCells.push(cell);
  }
  return [
    ...startCells,
    ...centerCells,
    ...endCells
  ];
}
function row_getVisibleCellsByColumnId(row) {
  const result = makeObjectMap();
  const allCells = row.getAllCells();
  for (let i = 0; i < allCells.length; i++) {
    const cell = allCells[i];
    if (callMemoOrStaticFn(cell.column, "getIsVisible", column_getIsVisible)) result[cell.column.id] = cell;
  }
  return result;
}
function table_getVisibleFlatColumns(table) {
  return table.getAllFlatColumns().filter((column) => callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible));
}
function table_getVisibleLeafColumns(table) {
  return table.getAllLeafColumns().filter((column) => callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible));
}
function table_setColumnVisibility(table, updater) {
  setStateSlice(table, "columnVisibility", updater);
}
function table_resetColumnVisibility(table, defaultState) {
  table_setColumnVisibility(table, defaultState ? makeObjectMap() : Object.assign(makeObjectMap(), cloneState(table.initialState.columnVisibility ?? {})));
}
function table_toggleAllColumnsVisible(table, value) {
  value = value ?? !table_getIsAllColumnsVisible(table);
  const visibility = makeObjectMap();
  const leafColumns = table.getAllLeafColumns();
  for (let i = 0; i < leafColumns.length; i++) {
    const column = leafColumns[i];
    visibility[column.id] = !value ? !column_getCanHide(column) : value;
  }
  table_setColumnVisibility(table, visibility);
}
function table_getIsAllColumnsVisible(table) {
  return !table.getAllLeafColumns().some((column) => !callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible));
}
function table_getIsSomeColumnsVisible(table) {
  return table.getAllLeafColumns().some((column) => callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible));
}
function table_getToggleAllColumnsVisibilityHandler(table) {
  return (e) => {
    table_toggleAllColumnsVisible(table, e.target.checked);
  };
}
function getMaxHeaderDepth(columns, depth = 1) {
  let maxDepth = depth;
  for (let i = 0; i < columns.length; i++) {
    const column = columns[i];
    if (callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible) && column.columns.length) maxDepth = Math.max(maxDepth, getMaxHeaderDepth(column.columns, depth + 1));
  }
  return maxDepth;
}
function formatHeaderGroupId(headerFamily, depth) {
  return headerFamily ? `${headerFamily}_${depth}` : String(depth);
}
function formatHeaderId(headerFamily, depth, columnId, childHeaderId) {
  let id = headerFamily ?? "";
  if (depth) id = id ? `${id}_${depth}` : String(depth);
  if (columnId) id = id ? `${id}_${columnId}` : columnId;
  if (childHeaderId) id = id ? `${id}_${childHeaderId}` : childHeaderId;
  return id;
}
function countPendingHeadersForColumn(headers, column) {
  let count2 = 0;
  for (let i = 0; i < headers.length; i++) if (headers[i].column === column) count2++;
  return count2;
}
function constructHeaderGroup(headersToGroup, depth, table, headerFamily, headerGroups, headerGroupInitFns) {
  const headerGroup = {
    depth,
    id: formatHeaderGroupId(headerFamily, depth),
    headers: []
  };
  const pendingParentHeaders = [];
  for (let i = 0; i < headersToGroup.length; i++) {
    if (!(i in headersToGroup)) continue;
    const headerToGroup = headersToGroup[i];
    const latestPendingParentHeader = pendingParentHeaders[pendingParentHeaders.length - 1];
    const isLeafHeader = headerToGroup.column.depth === headerGroup.depth;
    let column;
    let isPlaceholder = false;
    if (isLeafHeader && headerToGroup.column.parent) column = headerToGroup.column.parent;
    else {
      column = headerToGroup.column;
      isPlaceholder = true;
    }
    if (latestPendingParentHeader && latestPendingParentHeader.column === column) latestPendingParentHeader.subHeaders.push(headerToGroup);
    else {
      const header = constructHeader(table, column, {
        id: formatHeaderId(headerFamily, depth, column.id, headerToGroup.id),
        isPlaceholder,
        placeholderId: isPlaceholder ? String(countPendingHeadersForColumn(pendingParentHeaders, column)) : void 0,
        depth,
        index: pendingParentHeaders.length
      });
      header.subHeaders.push(headerToGroup);
      pendingParentHeaders.push(header);
    }
    headerGroup.headers.push(headerToGroup);
    headerToGroup.headerGroup = headerGroup;
  }
  for (let i = 0; i < headerGroupInitFns.length; i++) headerGroupInitFns[i](headerGroup);
  headerGroups.push(headerGroup);
  if (depth > 0) constructHeaderGroup(pendingParentHeaders, depth - 1, table, headerFamily, headerGroups, headerGroupInitFns);
}
function updateHeaderSpans(headers) {
  for (let i = 0; i < headers.length; i++) {
    const header = headers[i];
    if (!callMemoOrStaticFn(header.column, "getIsVisible", column_getIsVisible)) continue;
    let colSpan = 0;
    if (header.subHeaders.length) {
      updateHeaderSpans(header.subHeaders);
      for (let j = 0; j < header.subHeaders.length; j++) {
        const child = header.subHeaders[j];
        if (!callMemoOrStaticFn(child.column, "getIsVisible", column_getIsVisible)) continue;
        colSpan += child.colSpan;
      }
    } else colSpan = 1;
    header.colSpan = colSpan;
    if (header.isPlaceholder && header.subHeaders.length === 1 && header.subHeaders[0].column === header.column) {
      let rowSpan = 1;
      let chainChild = header.subHeaders[0];
      while (chainChild) {
        chainChild.rowSpan = 0;
        rowSpan++;
        chainChild = chainChild.subHeaders.length === 1 && chainChild.subHeaders[0].column === header.column ? chainChild.subHeaders[0] : void 0;
      }
      header.rowSpan = rowSpan;
    } else header.rowSpan = 1;
  }
}
function buildHeaderGroups(allColumns, columnsToGroup, table, headerFamily) {
  const maxDepth = getMaxHeaderDepth(allColumns);
  const headerGroups = [];
  const headerGroupInitFns = table._headerGroupInstanceInitFns;
  const bottomHeaders = new Array(columnsToGroup.length);
  for (let i = 0; i < columnsToGroup.length; i++) {
    if (!(i in columnsToGroup)) continue;
    bottomHeaders[i] = constructHeader(table, columnsToGroup[i], {
      depth: maxDepth,
      index: i
    });
  }
  constructHeaderGroup(bottomHeaders, maxDepth - 1, table, headerFamily, headerGroups, headerGroupInitFns);
  headerGroups.reverse();
  updateHeaderSpans(headerGroups[0]?.headers ?? []);
  return headerGroups;
}
function getColumnPrototype(table) {
  if (!table._columnPrototype) {
    table._columnPrototype = { table };
    const features = Object.values(table._features);
    for (let i = 0; i < features.length; i++) features[i].assignColumnPrototype?.(table._columnPrototype, table);
  }
  return table._columnPrototype;
}
function constructColumn(table, columnDef, depth, parent) {
  const resolvedColumnDef = {
    ...table.getDefaultColumnDef(),
    ...columnDef
  };
  const accessorKey = resolvedColumnDef.accessorKey;
  const accessorKeyString = accessorKey === void 0 ? void 0 : String(accessorKey);
  const id = resolvedColumnDef.id ?? accessorKeyString?.replaceAll(".", "_") ?? (typeof resolvedColumnDef.header === "string" ? resolvedColumnDef.header : void 0);
  let accessorFn;
  if (resolvedColumnDef.accessorFn) accessorFn = resolvedColumnDef.accessorFn;
  else if (accessorKey !== void 0) if (typeof accessorKey === "string" && accessorKey.includes(".")) {
    const keys = accessorKey.split(".");
    accessorFn = (originalRow) => {
      let result = originalRow;
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        result = result?.[key];
      }
      return result;
    };
  } else accessorFn = (originalRow) => originalRow[resolvedColumnDef.accessorKey];
  if (!id) {
    throw new Error();
  }
  const columnPrototype = getColumnPrototype(table);
  const column = Object.create(columnPrototype);
  column.accessorFn = accessorFn;
  column.columnDef = resolvedColumnDef;
  column.columns = [];
  column.depth = depth;
  column.id = `${String(id)}`;
  column.parent = parent;
  const initFns = table._columnInstanceInitFns;
  for (let i = 0; i < initFns.length; i++) initFns[i](column);
  return column;
}
function getDefaultColumnOrderState() {
  return [];
}
function table_getColumnIndexes(table) {
  const buildIndexes = (columns) => {
    const indexes = makeObjectMap();
    for (let i = 0; i < columns.length; i++) indexes[columns[i].id] = i;
    return indexes;
  };
  return {
    all: buildIndexes(table_getPinnedVisibleLeafColumns(table)),
    center: buildIndexes(table_getPinnedVisibleLeafColumns(table, "center")),
    start: buildIndexes(table_getPinnedVisibleLeafColumns(table, "start")),
    end: buildIndexes(table_getPinnedVisibleLeafColumns(table, "end"))
  };
}
function column_getIndex(column, position) {
  return callMemoOrStaticFn(column.table, "getColumnIndexes", table_getColumnIndexes)[position === "start" ? "start" : position === "end" ? "end" : position === "center" ? "center" : "all"][column.id] ?? -1;
}
function column_getIsFirstColumn(column, position) {
  return table_getPinnedVisibleLeafColumns(column.table, position)[0]?.id === column.id;
}
function column_getIsLastColumn(column, position) {
  const columns = table_getPinnedVisibleLeafColumns(column.table, position);
  return columns[columns.length - 1]?.id === column.id;
}
function table_setColumnOrder(table, updater) {
  setStateSlice(table, "columnOrder", updater);
}
function table_resetColumnOrder(table, defaultState) {
  table_setColumnOrder(table, defaultState ? [] : cloneState(table.initialState.columnOrder ?? []));
}
function table_getOrderColumnsFn(table) {
  const columnOrder = table.atoms.columnOrder?.get();
  return (columns) => {
    let orderedColumns = [];
    if (!columnOrder?.length) orderedColumns = columns;
    else {
      const remaining = /* @__PURE__ */ new Map();
      for (let i = 0; i < columns.length; i++) {
        const column = columns[i];
        remaining.set(column.id, column);
      }
      for (let i = 0; i < columnOrder.length; i++) {
        const id = columnOrder[i];
        const column = remaining.get(id);
        if (column) {
          orderedColumns.push(column);
          remaining.delete(id);
        }
      }
      for (let i = 0; i < columns.length; i++) {
        const column = columns[i];
        if (remaining.has(column.id)) orderedColumns.push(column);
      }
    }
    return orderColumns(table, orderedColumns);
  };
}
function orderColumns(table, leafColumns) {
  const grouping = table.atoms.grouping?.get() ?? [];
  const { groupedColumnMode } = table.options;
  if (!grouping.length || !groupedColumnMode) return leafColumns;
  const nonGroupingColumns = leafColumns.filter((col) => !grouping.includes(col.id));
  if (groupedColumnMode === "remove") return nonGroupingColumns;
  const leafColumnsById = /* @__PURE__ */ new Map();
  for (let i = 0; i < leafColumns.length; i++) {
    const col = leafColumns[i];
    leafColumnsById.set(col.id, col);
  }
  const groupingColumns = [];
  for (let i = 0; i < grouping.length; i++) {
    const col = leafColumnsById.get(grouping[i]);
    if (col) groupingColumns.push(col);
  }
  return [...groupingColumns, ...nonGroupingColumns];
}
function column_getFlatColumns(column) {
  return [column, ...column.columns.flatMap((col) => col.getFlatColumns())];
}
function column_getLeafColumns(column) {
  if (column.columns.length) {
    const leafColumns = column.columns.flatMap((col) => col.getLeafColumns());
    return callMemoOrStaticFn(column.table, "getOrderColumns", table_getOrderColumnsFn)(leafColumns);
  }
  return [column];
}
function table_getDefaultColumnDef(table) {
  return {
    header: (props) => {
      const resolvedColumnDef = props.header.column.columnDef;
      if (resolvedColumnDef.accessorKey) return resolvedColumnDef.accessorKey;
      if (resolvedColumnDef.accessorFn) return resolvedColumnDef.id;
      return null;
    },
    cell: (props) => props.renderValue()?.toString?.() ?? null,
    ...Object.values(table._features).reduce((obj, feature) => {
      return Object.assign(obj, feature.getDefaultColumnDef?.());
    }, {}),
    ...table.options.defaultColumn
  };
}
function constructColumns(table, columnDefs, parent, depth = 0) {
  const columns = new Array(columnDefs.length);
  for (let i = 0; i < columnDefs.length; i++) {
    if (!(i in columnDefs)) continue;
    const columnDef = columnDefs[i];
    const column = constructColumn(table, columnDef, depth, parent);
    const groupingColumnDef = columnDef;
    column.columns = groupingColumnDef.columns ? constructColumns(table, groupingColumnDef.columns, column, depth + 1) : [];
    columns[i] = column;
  }
  return columns;
}
function table_getAllColumns(table) {
  return constructColumns(table, table.options.columns);
}
function table_getAllFlatColumns(table) {
  return table.getAllColumns().flatMap((column) => column.getFlatColumns());
}
function table_getAllFlatColumnsById(table) {
  const result = makeObjectMap();
  const flatColumns = table.getAllFlatColumns();
  for (let i = 0; i < flatColumns.length; i++) {
    const column = flatColumns[i];
    result[column.id] = column;
  }
  return result;
}
function table_getAllLeafColumns(table) {
  const leafColumns = table.getAllColumns().flatMap((c) => c.getLeafColumns());
  return callMemoOrStaticFn(table, "getOrderColumns", table_getOrderColumnsFn)(leafColumns);
}
function table_getAllLeafColumnsById(table) {
  const result = makeObjectMap();
  const leafColumns = table.getAllLeafColumns();
  for (let i = 0; i < leafColumns.length; i++) {
    const column = leafColumns[i];
    result[column.id] = column;
  }
  return result;
}
function table_getColumn(table, columnId) {
  const column = table.getAllFlatColumnsById()[columnId];
  return column;
}
const coreColumnsFeature = {
  assignColumnPrototype: (prototype, table) => {
    assignPrototypeAPIs("coreColumnsFeature", prototype, table, {
      column_getFlatColumns: {
        fn: (column) => column_getFlatColumns(column),
        memoDeps: (column) => [column.table.options.columns]
      },
      column_getLeafColumns: {
        fn: (column) => column_getLeafColumns(column),
        memoDeps: (column) => [
          column.table.atoms.columnOrder?.get(),
          column.table.atoms.grouping?.get(),
          column.table.options.columns,
          column.table.options.groupedColumnMode
        ]
      }
    });
  },
  constructTableAPIs: (table) => {
    assignTableAPIs("coreColumnsFeature", table, {
      table_getDefaultColumnDef: {
        fn: () => table_getDefaultColumnDef(table),
        memoDeps: () => [table.options.defaultColumn]
      },
      table_getAllColumns: {
        fn: () => table_getAllColumns(table),
        memoDeps: () => [table.options.columns]
      },
      table_getAllFlatColumns: {
        fn: () => table_getAllFlatColumns(table),
        memoDeps: () => [table.options.columns]
      },
      table_getAllFlatColumnsById: {
        fn: () => table_getAllFlatColumnsById(table),
        memoDeps: () => [table.options.columns]
      },
      table_getAllLeafColumns: {
        fn: () => table_getAllLeafColumns(table),
        memoDeps: () => [
          table.atoms.columnOrder?.get(),
          table.atoms.grouping?.get(),
          table.options.columns,
          table.options.groupedColumnMode
        ]
      },
      table_getAllLeafColumnsById: {
        fn: () => table_getAllLeafColumnsById(table),
        memoDeps: () => [table.getAllLeafColumns()]
      },
      table_getColumn: { fn: (columnId) => table_getColumn(table, columnId) }
    });
  }
};
function collectLeafHeaders(header, leafHeaders) {
  for (let i = 0; i < header.subHeaders.length; i++) collectLeafHeaders(header.subHeaders[i], leafHeaders);
  leafHeaders.push(header);
}
function header_getLeafHeaders(header) {
  const leafHeaders = [];
  collectLeafHeaders(header, leafHeaders);
  return leafHeaders;
}
function header_getContext(header) {
  return {
    column: header.column,
    header,
    table: header.column.table
  };
}
function table_getHeaderGroups(table) {
  const { start, end } = table.atoms.columnPinning?.get() ?? getDefaultColumnPinningState();
  const allColumns = table.getAllColumns();
  const leafColumns = callMemoOrStaticFn(table, "getVisibleLeafColumns", table_getVisibleLeafColumns);
  if (!start.length && !end.length) return buildHeaderGroups(allColumns, leafColumns, table);
  const leafColumnsById = table.getAllLeafColumnsById();
  const leftColumns = [];
  for (let i = 0; i < start.length; i++) {
    const column = leafColumnsById[start[i]];
    if (column && callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible)) leftColumns.push(column);
  }
  const rightColumns = [];
  for (let i = 0; i < end.length; i++) {
    const column = leafColumnsById[end[i]];
    if (column && callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible)) rightColumns.push(column);
  }
  const centerColumns = leafColumns.filter((column) => !start.includes(column.id) && !end.includes(column.id));
  return buildHeaderGroups(allColumns, [
    ...leftColumns,
    ...centerColumns,
    ...rightColumns
  ], table);
}
function table_getFooterGroups(table) {
  return [...table.getHeaderGroups()].reverse();
}
function table_getFlatHeaders(table) {
  const headerGroups = table.getHeaderGroups();
  const result = [];
  for (let i = 0; i < headerGroups.length; i++) {
    const headers = headerGroups[i].headers;
    for (let j = 0; j < headers.length; j++) result.push(headers[j]);
  }
  return result;
}
function table_getLeafHeaders(table) {
  const topHeaders = table.getHeaderGroups()[0]?.headers ?? [];
  const result = [];
  for (let i = 0; i < topHeaders.length; i++) {
    const leafHeaders = topHeaders[i].getLeafHeaders();
    for (let j = 0; j < leafHeaders.length; j++) result.push(leafHeaders[j]);
  }
  return result;
}
const coreHeadersFeature = {
  assignHeaderPrototype: (prototype, table) => {
    assignPrototypeAPIs("coreHeadersFeature", prototype, table, {
      header_getLeafHeaders: {
        fn: (header) => header_getLeafHeaders(header),
        memoDeps: (header) => [header.column.table.options.columns]
      },
      header_getContext: {
        fn: (header) => header_getContext(header),
        memoDeps: (header) => [header.column.table.options.columns]
      }
    });
  },
  constructTableAPIs: (table) => {
    assignTableAPIs("coreHeadersFeature", table, {
      table_getHeaderGroups: {
        fn: () => table_getHeaderGroups(table),
        memoDeps: () => [
          table.options.columns,
          table.atoms.columnOrder?.get(),
          table.atoms.grouping?.get(),
          table.atoms.columnPinning?.get(),
          table.atoms.columnVisibility?.get(),
          table.options.groupedColumnMode
        ]
      },
      table_getFooterGroups: {
        fn: () => table_getFooterGroups(table),
        memoDeps: () => [table.getHeaderGroups()]
      },
      table_getFlatHeaders: {
        fn: () => table_getFlatHeaders(table),
        memoDeps: () => [table.getHeaderGroups()]
      },
      table_getLeafHeaders: {
        fn: () => table_getLeafHeaders(table),
        memoDeps: () => [table.getHeaderGroups()]
      }
    });
  }
};
function getRowPrototype(table) {
  if (!table._rowPrototype) {
    table._rowPrototype = { table };
    const features = Object.values(table._features);
    for (let i = 0; i < features.length; i++) features[i].assignRowPrototype?.(table._rowPrototype, table);
  }
  return table._rowPrototype;
}
const constructRow = (table, id, original, rowIndex, depth, subRows, parentId) => {
  const rowPrototype = getRowPrototype(table);
  const row = Object.create(rowPrototype);
  row._displayIndexCache = -1;
  row._uniqueValuesCache = makeObjectMap();
  row._valuesCache = makeObjectMap();
  row.depth = depth;
  row.id = id;
  row.index = rowIndex;
  row.original = original;
  row.parentId = parentId;
  row.subRows = [];
  const initFns = table._rowInstanceInitFns;
  for (let i = 0; i < initFns.length; i++) initFns[i](row);
  return row;
};
const reSplitAlphaNumeric = /([0-9]+)/gm;
function constructSortFn(def) {
  const sortFn = Object.assign((rowA, rowB, columnId) => {
    let dataValueA = rowA.getValue(columnId);
    let dataValueB = rowB.getValue(columnId);
    const resolveDataValue = sortFn.resolveDataValue;
    if (resolveDataValue) {
      dataValueA = resolveDataValue(dataValueA);
      dataValueB = resolveDataValue(dataValueB);
    }
    return sortFn.sort(dataValueA, dataValueB, rowA, rowB, columnId);
  }, def);
  return sortFn;
}
const sortFn_alphanumeric = constructSortFn({
  resolveDataValue: (dataValue) => toString(dataValue).toLowerCase(),
  sort: (dataValueA, dataValueB) => compareAlphanumeric(dataValueA, dataValueB)
});
const sortFn_alphanumericCaseSensitive = constructSortFn({
  resolveDataValue: (dataValue) => toString(dataValue),
  sort: (dataValueA, dataValueB) => compareAlphanumeric(dataValueA, dataValueB)
});
const sortFn_text = constructSortFn({
  resolveDataValue: (dataValue) => toString(dataValue).toLowerCase(),
  sort: (dataValueA, dataValueB) => compareBasic(dataValueA, dataValueB)
});
const sortFn_textCaseSensitive = constructSortFn({
  resolveDataValue: (dataValue) => toString(dataValue),
  sort: (dataValueA, dataValueB) => compareBasic(dataValueA, dataValueB)
});
const sortFn_datetime = constructSortFn({
  resolveDataValue: (dataValue) => toDateSortValue(dataValue),
  sort: (dataValueA, dataValueB) => dataValueA > dataValueB ? 1 : dataValueA < dataValueB ? -1 : 0
});
const sortFn_basic = constructSortFn({ sort: (dataValueA, dataValueB) => compareBasic(dataValueA, dataValueB) });
function compareBasic(a, b) {
  return a === b ? 0 : a > b ? 1 : -1;
}
function toDateSortValue(value) {
  return value instanceof Date ? value.getTime() : value;
}
function toString(a) {
  if (typeof a === "number") {
    if (isNaN(a) || a === Infinity || a === -Infinity) return "";
    return String(a);
  }
  if (typeof a === "string") return a;
  return "";
}
function compareAlphanumeric(aStr, bStr) {
  let ai = 0;
  let bi = 0;
  const aLen = aStr.length;
  const bLen = bStr.length;
  while (ai < aLen && bi < bLen) {
    const aIsNumeric = isDigit(aStr.charCodeAt(ai));
    const bIsNumeric = isDigit(bStr.charCodeAt(bi));
    const aEnd = findChunkEnd(aStr, ai, aIsNumeric);
    const bEnd = findChunkEnd(bStr, bi, bIsNumeric);
    if (!aIsNumeric && !bIsNumeric) {
      const stringComparison = compareStringChunks(aStr, ai, aEnd, bStr, bi, bEnd);
      if (stringComparison) return stringComparison;
      ai = aEnd;
      bi = bEnd;
      continue;
    }
    if (aIsNumeric !== bIsNumeric) return aIsNumeric ? 1 : -1;
    const numericComparison = compareNumericChunks(aStr, ai, aEnd, bStr, bi, bEnd);
    if (numericComparison) return numericComparison;
    ai = aEnd;
    bi = bEnd;
  }
  return countRemainingChunks(aStr, ai) - countRemainingChunks(bStr, bi);
}
function isDigit(charCode) {
  return charCode >= 48 && charCode <= 57;
}
function findChunkEnd(str, start, isNumeric) {
  let end = start + 1;
  while (end < str.length && isDigit(str.charCodeAt(end)) === isNumeric) end++;
  return end;
}
function compareStringChunks(aStr, aStart, aEnd, bStr, bStart, bEnd) {
  const aLength = aEnd - aStart;
  const bLength = bEnd - bStart;
  const minLength = aLength < bLength ? aLength : bLength;
  for (let i = 0; i < minLength; i++) {
    const aCode = aStr.charCodeAt(aStart + i);
    const bCode = bStr.charCodeAt(bStart + i);
    if (aCode > bCode) return 1;
    if (bCode > aCode) return -1;
  }
  if (aLength > bLength) return 1;
  if (bLength > aLength) return -1;
  return 0;
}
function compareNumericChunks(aStr, aStart, aEnd, bStr, bStart, bEnd) {
  let aSignificantStart = aStart;
  while (aSignificantStart < aEnd && aStr.charCodeAt(aSignificantStart) === 48) aSignificantStart++;
  let bSignificantStart = bStart;
  while (bSignificantStart < bEnd && bStr.charCodeAt(bSignificantStart) === 48) bSignificantStart++;
  const aSignificantLength = aEnd - aSignificantStart;
  const bSignificantLength = bEnd - bSignificantStart;
  if (aSignificantLength === 0 && bSignificantLength === 0) return 0;
  if (aSignificantLength <= 15 && bSignificantLength <= 15) {
    const an2 = parseSmallInt(aStr, aSignificantStart, aEnd);
    const bn2 = parseSmallInt(bStr, bSignificantStart, bEnd);
    if (an2 > bn2) return 1;
    if (bn2 > an2) return -1;
    return 0;
  }
  const an = parseInt(aStr.slice(aStart, aEnd), 10);
  const bn = parseInt(bStr.slice(bStart, bEnd), 10);
  if (an > bn) return 1;
  if (bn > an) return -1;
  return 0;
}
function parseSmallInt(str, start, end) {
  let result = 0;
  for (let i = start; i < end; i++) result = result * 10 + str.charCodeAt(i) - 48;
  return result;
}
function countRemainingChunks(str, start) {
  let count2 = 0;
  let index2 = start;
  while (index2 < str.length) {
    count2++;
    index2 = findChunkEnd(str, index2, isDigit(str.charCodeAt(index2)));
  }
  return count2;
}
const sortFns = {
  alphanumeric: sortFn_alphanumeric,
  alphanumericCaseSensitive: sortFn_alphanumericCaseSensitive,
  basic: sortFn_basic,
  datetime: sortFn_datetime,
  text: sortFn_text,
  textCaseSensitive: sortFn_textCaseSensitive
};
function getDefaultCellSelectionState() {
  return [];
}
function table_resetCellSelection(table, defaultState) {
  setStateSlice(table, "cellSelection", cloneState(table.initialState.cellSelection) ?? getDefaultCellSelectionState());
}
function table_autoResetCellSelection(table) {
  if (!table.atoms.cellSelection) return;
  if (table.options.autoResetAll ?? table.options.autoResetCellSelection ?? true) table._reactivity.schedule(() => table_resetCellSelection(table));
}
function table_autoResetExpanded(table) {
  if (!table.atoms.expanded) return;
  if (table.options.autoResetAll ?? table.options.autoResetExpanded ?? !table.options.manualExpanding) table._reactivity.schedule(() => table_resetExpanded(table));
}
function table_resetExpanded(table, defaultState) {
  const initialExpanded = table.initialState.expanded;
  setStateSlice(table, "expanded", initialExpanded === true ? true : Object.assign(makeObjectMap(), cloneState(initialExpanded ?? {})));
}
const defaultPageIndex = 0;
function table_autoResetPageIndex(table) {
  if (table.options.autoResetAll ?? table.options.autoResetPageIndex ?? !table.options.manualPagination) {
    if ((table.atoms.pagination?.get()?.pageIndex ?? defaultPageIndex) === defaultPageIndex) return;
    table_resetPageIndex(table);
  }
}
function table_setPagination(table, updater) {
  setStateSlice(table, "pagination", updater);
}
function table_setPageIndex(table, updater) {
  table_setPagination(table, (old) => {
    let pageIndex = functionalUpdate(updater, old.pageIndex);
    const maxPageIndex = typeof table.options.pageCount === "undefined" || table.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : table.options.pageCount - 1;
    pageIndex = Math.max(0, Math.min(pageIndex, maxPageIndex));
    return {
      ...old,
      pageIndex
    };
  });
}
function table_resetPageIndex(table, defaultState) {
  table_setPageIndex(table, defaultPageIndex);
}
function getDefaultSortingState() {
  return [];
}
function table_setSorting(table, updater) {
  setStateSlice(table, "sorting", updater);
}
function table_resetSorting(table, defaultState) {
  table_setSorting(table, defaultState ? [] : cloneState(table.initialState.sorting ?? []));
}
function table_autoResetSorting(table) {
  if (!table.atoms.sorting) return;
  if (table.options.autoResetAll ?? table.options.autoResetSorting ?? false) table_resetSorting(table);
}
function column_getAutoSortFn(column) {
  const sortFns2 = column.table._rowModelFns.sortFns;
  const firstRows = column.table.getFilteredRowModel().flatRows.slice(0, 10);
  let sortFnName;
  let isString2 = false;
  for (let i = 0; i < firstRows.length; i++) {
    const value = firstRows[i].getValue(column.id);
    if (Object.prototype.toString.call(value) === "[object Date]") {
      sortFnName = "datetime";
      break;
    }
    if (typeof value === "string") {
      isString2 = true;
      if (value.split(reSplitAlphaNumeric).length > 1) {
        sortFnName = "alphanumeric";
        break;
      }
    }
  }
  if (!sortFnName && isString2) sortFnName = "text";
  if (sortFnName) {
    let sortFn = sortFns2?.[sortFnName];
    if (!sortFn) {
      if (sortFnName === "alphanumeric") sortFn = sortFns2?.text;
    }
    if (sortFn) return sortFn;
  }
  return sortFn_basic;
}
function column_getAutoSortDir(column) {
  const firstRows = column.table.getFilteredRowModel().flatRows.slice(0, 10);
  for (let i = 0; i < firstRows.length; i++) {
    const value = firstRows[i].getValue(column.id);
    if (value == null) continue;
    return typeof value === "string" ? "asc" : "desc";
  }
  return "desc";
}
function column_getSortFn(column) {
  const sortFns2 = column.table._rowModelFns.sortFns;
  if (isFunction(column.columnDef.sortFn)) return column.columnDef.sortFn;
  if (column.columnDef.sortFn === "auto") return column_getAutoSortFn(column);
  const sortFn = sortFns2?.[column.columnDef.sortFn];
  return sortFn ?? sortFn_basic;
}
function column_toggleSorting(column, desc, multi) {
  const nextSortingOrder = column_getNextSortingOrder(column, multi && column_getCanMultiSort(column));
  const hasManualValue = typeof desc !== "undefined";
  table_setSorting(column.table, (old) => {
    const existingIndex = old.findIndex((d) => d.id === column.id);
    const existingSorting = existingIndex === -1 ? void 0 : old[existingIndex];
    let newSorting = [];
    let sortAction;
    const nextDesc = hasManualValue ? desc : nextSortingOrder === "desc";
    const isMultiMode = !!(old.length && column_getCanMultiSort(column) && multi);
    if (isMultiMode) if (existingSorting) sortAction = "toggle";
    else sortAction = "add";
    else if (existingSorting) sortAction = "toggle";
    else sortAction = "replace";
    if (sortAction === "toggle") {
      if (!hasManualValue) {
        if (!nextSortingOrder) sortAction = "remove";
      }
    }
    if (sortAction === "add") {
      newSorting = [...old, {
        id: column.id,
        desc: nextDesc
      }];
      newSorting.splice(0, newSorting.length - (column.table.options.maxMultiSortColCount ?? Number.MAX_SAFE_INTEGER));
    } else if (sortAction === "toggle") newSorting = isMultiMode ? old.map((d) => {
      if (d.id === column.id) return {
        ...d,
        desc: nextDesc
      };
      return d;
    }) : [{
      id: column.id,
      desc: nextDesc
    }];
    else if (sortAction === "remove") newSorting = isMultiMode ? old.filter((d) => d.id !== column.id) : [];
    else newSorting = [{
      id: column.id,
      desc: nextDesc
    }];
    return newSorting;
  });
}
function column_getFirstSortDir(column) {
  return column.columnDef.sortDescFirst ?? column.table.options.sortDescFirst ?? column_getAutoSortDir(column) === "desc" ? "desc" : "asc";
}
function column_getNextSortingOrder(column, multi) {
  const firstSortDirection = column_getFirstSortDir(column);
  const isSorted = column_getIsSorted(column);
  if (!isSorted) return firstSortDirection;
  if (isSorted !== firstSortDirection && (column.table.options.enableSortingRemoval ?? true) && (multi ? column.table.options.enableMultiRemove ?? true : true)) return false;
  return isSorted === "desc" ? "asc" : "desc";
}
function column_getCanSort(column) {
  return (column.columnDef.enableSorting ?? true) && (column.table.options.enableSorting ?? true) && !!column.accessorFn;
}
function column_getCanMultiSort(column) {
  return column.columnDef.enableMultiSort ?? column.table.options.enableMultiSort ?? !!column.accessorFn;
}
function column_getIsSorted(column) {
  const columnSort = column.table.atoms.sorting?.get()?.find((d) => d.id === column.id);
  return !columnSort ? false : columnSort.desc ? "desc" : "asc";
}
function column_getSortIndex(column) {
  return column.table.atoms.sorting?.get()?.findIndex((d) => d.id === column.id) ?? -1;
}
function column_clearSorting(column) {
  table_setSorting(column.table, (old) => old.length ? old.filter((d) => d.id !== column.id) : []);
}
function column_getToggleSortingHandler(column) {
  const canSort = column_getCanSort(column);
  return (e) => {
    if (!canSort) return;
    column_toggleSorting(column, void 0, column_getCanMultiSort(column) ? column.table.options.isMultiSortEvent?.(e) : false);
  };
}
function createCoreRowModel() {
  return (table) => {
    return tableMemo({
      feature: "coreRowModelsFeature",
      table,
      fnName: "table.getCoreRowModel",
      memoDeps: () => [table.options.data],
      fn: () => _createCoreRowModel(table, table.options.data),
      onAfterUpdate: skipFirstRun(() => {
        table_autoResetExpanded(table);
        table_autoResetPageIndex(table);
        table_autoResetSorting(table);
        table_autoResetCellSelection(table);
      })
    });
  };
}
function accessRows(table, rowModel, originalRows, depth = 0, parentRow) {
  const rows = [];
  for (let i = 0; i < originalRows.length; i++) {
    const originalRow = originalRows[i];
    const row = constructRow(table, table.getRowId(originalRow, i, parentRow), originalRow, i, depth, void 0, parentRow?.id);
    rowModel.flatRows.push(row);
    rowModel.rowsById[row.id] = row;
    rows.push(row);
    if (table.options.getSubRows) {
      row.originalSubRows = table.options.getSubRows(originalRow, i);
      if (row.originalSubRows?.length) row.subRows = accessRows(table, rowModel, row.originalSubRows, depth + 1, row);
    }
  }
  return rows;
}
function _createCoreRowModel(table, data) {
  const rowModel = {
    rows: [],
    flatRows: [],
    rowsById: makeObjectMap()
  };
  rowModel.rows = accessRows(table, rowModel, data);
  return rowModel;
}
function table_getCoreRowModel(table) {
  if (!table._rowModels.coreRowModel) table._rowModels.coreRowModel = table.options.features.coreRowModel?.(table) ?? createCoreRowModel()(table);
  return table._rowModels.coreRowModel();
}
function table_getPreFilteredRowModel(table) {
  return table.getCoreRowModel();
}
function table_getFilteredRowModel(table) {
  if (!table._rowModels.filteredRowModel) table._rowModels.filteredRowModel = table.options.features.filteredRowModel?.(table);
  if (table.options.manualFiltering || !table._rowModels.filteredRowModel) return table.getPreFilteredRowModel();
  return table._rowModels.filteredRowModel();
}
function table_getPreGroupedRowModel(table) {
  return table.getFilteredRowModel();
}
function table_getGroupedRowModel(table) {
  if (!table._rowModels.groupedRowModel) table._rowModels.groupedRowModel = table.options.features.groupedRowModel?.(table);
  if (table.options.manualGrouping || !table._rowModels.groupedRowModel) return table.getPreGroupedRowModel();
  return table._rowModels.groupedRowModel();
}
function table_getPreSortedRowModel(table) {
  return table.getGroupedRowModel();
}
function table_getSortedRowModel(table) {
  if (!table._rowModels.sortedRowModel) table._rowModels.sortedRowModel = table.options.features.sortedRowModel?.(table);
  if (table.options.manualSorting || !table._rowModels.sortedRowModel) return table.getPreSortedRowModel();
  return table._rowModels.sortedRowModel();
}
function table_getPreExpandedRowModel(table) {
  return table.getSortedRowModel();
}
function table_getExpandedRowModel(table) {
  if (!table._rowModels.expandedRowModel) table._rowModels.expandedRowModel = table.options.features.expandedRowModel?.(table);
  if (table.options.manualExpanding || !table._rowModels.expandedRowModel) return table.getPreExpandedRowModel();
  return table._rowModels.expandedRowModel();
}
function table_getPrePaginatedRowModel(table) {
  return table.getExpandedRowModel();
}
function table_getPaginatedRowModel(table) {
  if (!table._rowModels.paginatedRowModel) table._rowModels.paginatedRowModel = table.options.features.paginatedRowModel?.(table);
  if (table.options.manualPagination || !table._rowModels.paginatedRowModel) return table.getPrePaginatedRowModel();
  return table._rowModels.paginatedRowModel();
}
function table_getRowModel(table) {
  return table.getPaginatedRowModel();
}
const coreRowModelsFeature = { constructTableAPIs: (table) => {
  assignTableAPIs("coreRowModelsFeature", table, {
    table_getCoreRowModel: { fn: () => table_getCoreRowModel(table) },
    table_getPreFilteredRowModel: { fn: () => table_getPreFilteredRowModel(table) },
    table_getFilteredRowModel: { fn: () => table_getFilteredRowModel(table) },
    table_getPreGroupedRowModel: { fn: () => table_getPreGroupedRowModel(table) },
    table_getGroupedRowModel: { fn: () => table_getGroupedRowModel(table) },
    table_getPreSortedRowModel: { fn: () => table_getPreSortedRowModel(table) },
    table_getSortedRowModel: { fn: () => table_getSortedRowModel(table) },
    table_getPreExpandedRowModel: { fn: () => table_getPreExpandedRowModel(table) },
    table_getExpandedRowModel: { fn: () => table_getExpandedRowModel(table) },
    table_getPrePaginatedRowModel: { fn: () => table_getPrePaginatedRowModel(table) },
    table_getPaginatedRowModel: { fn: () => table_getPaginatedRowModel(table) },
    table_getRowModel: { fn: () => table_getRowModel(table) }
  });
} };
function getCellPrototype(table) {
  if (!table._cellPrototype) {
    table._cellPrototype = { table };
    const features = Object.values(table._features);
    for (let i = 0; i < features.length; i++) features[i].assignCellPrototype?.(table._cellPrototype, table);
  }
  return table._cellPrototype;
}
function constructCell(column, row, table) {
  const cellPrototype = getCellPrototype(table);
  const cell = Object.create(cellPrototype);
  cell.column = column;
  cell.id = `${row.id}_${column.id}`;
  cell.row = row;
  const initFns = table._cellInstanceInitFns;
  for (let i = 0; i < initFns.length; i++) initFns[i](cell);
  return cell;
}
function row_getDisplayIndex(row) {
  const rows = row.table.getRowsInDisplayOrder();
  const displayIndex = row._displayIndexCache;
  return rows[displayIndex] === row ? displayIndex : -1;
}
function table_getRowsInDisplayOrder(table) {
  const rows = table.getPrePaginatedRowModel().rows;
  if (table.options.paginateExpandedRows === false) {
    const displayRows = [];
    const handleRow = (row) => {
      row._displayIndexCache = displayRows.length;
      displayRows.push(row);
      if (row.subRows.length && row.getIsExpanded?.()) row.subRows.forEach(handleRow);
    };
    rows.forEach(handleRow);
    return displayRows;
  }
  for (let i = 0; i < rows.length; i++) rows[i]._displayIndexCache = i;
  return rows;
}
function row_getValue(row, columnId) {
  if (hasOwn(row._valuesCache, columnId)) return row._valuesCache[columnId];
  const column = row.table.getColumn(columnId);
  if (!column?.accessorFn) return;
  row._valuesCache[columnId] = column.accessorFn(row.original, row.index);
  return row._valuesCache[columnId];
}
function row_getUniqueValues(row, columnId) {
  if (hasOwn(row._uniqueValuesCache, columnId)) return row._uniqueValuesCache[columnId];
  const column = row.table.getColumn(columnId);
  if (!column?.accessorFn) return;
  if (!column.columnDef.getUniqueValues) {
    row._uniqueValuesCache[columnId] = [row.getValue(columnId)];
    return row._uniqueValuesCache[columnId];
  }
  row._uniqueValuesCache[columnId] = column.columnDef.getUniqueValues(row.original, row.index);
  return row._uniqueValuesCache[columnId];
}
function row_renderValue(row, columnId) {
  return row.getValue(columnId) ?? row.table.options.renderFallbackValue;
}
function row_getLeafRows(row) {
  return flattenBy(row.subRows, (d) => d.subRows);
}
function table_getMaxSubRowDepth(table) {
  const rows = table.getCoreRowModel().flatRows;
  let maxDepth = 0;
  for (let i = 0; i < rows.length; i++) maxDepth = Math.max(maxDepth, rows[i].depth);
  return maxDepth;
}
function row_getParentRow(row) {
  if (!row.parentId) return;
  return row.table.getCoreRowModel().rowsById[row.parentId] ?? row.table.getRow(row.parentId, true);
}
function row_getParentRows(row) {
  const parentRows = [];
  let currentRow = row;
  while (true) {
    const parentRow = currentRow.getParentRow();
    if (!parentRow) break;
    parentRows.push(parentRow);
    currentRow = parentRow;
  }
  return parentRows.reverse();
}
function row_getAllCells(row) {
  const columns = row.table.getAllLeafColumns();
  let cache = row._cellsCache;
  if (!cache) cache = row._cellsCache = /* @__PURE__ */ new WeakMap();
  const cells = new Array(columns.length);
  for (let i = 0; i < columns.length; i++) {
    const column = columns[i];
    let cell = cache.get(column);
    if (!cell) {
      cell = constructCell(column, row, row.table);
      cache.set(column, cell);
    }
    cells[i] = cell;
  }
  return cells;
}
function row_getAllCellsByColumnId(row) {
  const result = makeObjectMap();
  const cells = row.getAllCells();
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    result[cell.column.id] = cell;
  }
  return result;
}
function table_getRowId(originalRow, table, index2, parent) {
  return table.options.getRowId?.(originalRow, index2, parent) ?? (parent ? `${parent.id}.${index2}` : String(index2));
}
function table_getRow(table, rowId, searchAll) {
  let row = (searchAll ? table.getPrePaginatedRowModel() : table.getRowModel()).rowsById[rowId];
  if (!row) {
    row = table.getCoreRowModel().rowsById[rowId];
    if (!row) {
      throw new Error();
    }
  }
  return row;
}
const coreRowsFeature = {
  assignRowPrototype: (prototype, table) => {
    assignPrototypeAPIs("coreRowsFeature", prototype, table, {
      row_getDisplayIndex: { fn: (row) => row_getDisplayIndex(row) },
      row_getAllCellsByColumnId: {
        fn: (row) => row_getAllCellsByColumnId(row),
        memoDeps: (row) => [row.getAllCells()]
      },
      row_getAllCells: {
        fn: (row) => row_getAllCells(row),
        memoDeps: (row) => [row.table.getAllLeafColumns()]
      },
      row_getLeafRows: {
        fn: (row) => row_getLeafRows(row),
        memoDeps: (row) => [row.subRows]
      },
      row_getParentRow: { fn: (row) => row_getParentRow(row) },
      row_getParentRows: { fn: (row) => row_getParentRows(row) },
      row_getUniqueValues: { fn: (row, columnId) => row_getUniqueValues(row, columnId) },
      row_getValue: { fn: (row, columnId) => row_getValue(row, columnId) },
      row_renderValue: { fn: (row, columnId) => row_renderValue(row, columnId) }
    });
  },
  constructTableAPIs: (table) => {
    assignTableAPIs("coreRowsFeature", table, {
      table_getRowsInDisplayOrder: {
        fn: () => table_getRowsInDisplayOrder(table),
        memoDeps: () => [
          table.getPrePaginatedRowModel().rows,
          table.options.paginateExpandedRows,
          table.options.paginateExpandedRows === false ? table.atoms.expanded?.get() : void 0
        ]
      },
      table_getRowId: { fn: (originalRow, index2, parent) => table_getRowId(originalRow, table, index2, parent) },
      table_getRow: { fn: (id, searchAll) => table_getRow(table, id, searchAll) },
      table_getMaxSubRowDepth: {
        fn: () => table_getMaxSubRowDepth(table),
        memoDeps: () => [table.getCoreRowModel()]
      }
    });
  }
};
function table_syncExternalStateToBaseAtoms(table, capturedState, compare = (currentState, externalState) => currentState === externalState) {
  const state = capturedState === void 0 ? table.options.state : capturedState;
  table._reactivity.batch(() => {
    if (state) for (const key in state) {
      const baseAtom = table.baseAtoms[key];
      if (!baseAtom) continue;
      const rawExternalState = state[key];
      const externalState = rawExternalState === void 0 ? table.initialState[key] : rawExternalState;
      if (!compare(table._reactivity.untrack(() => baseAtom.get()), externalState)) baseAtom.set(() => externalState);
    }
  });
}
function table_publishExternalState(table, state, compare = (currentState, externalState) => currentState === externalState) {
  table._reactivity.batch(() => {
    table_syncExternalStateToBaseAtoms(table, state, compare);
    table._reactivity.commit?.();
  });
}
function table_reset(table) {
  const snap = cloneState(table.initialState);
  table._reactivity.batch(() => {
    const keys = Object.keys(snap);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      table.baseAtoms[key].set(snap[key]);
    }
  });
  const features = Object.values(table._features);
  for (let i = 0; i < features.length; i++) features[i].resetTableInstanceData?.(table);
}
function table_mergeOptions(table, newOptions) {
  const { features, atoms, initialState } = table.options;
  if (!table.options.mergeOptions) return {
    ...table.options,
    ...newOptions,
    features,
    atoms,
    initialState
  };
  const mergedOptions = table.options.mergeOptions(table.options, newOptions);
  const descriptors = { ...Object.getOwnPropertyDescriptors(mergedOptions) };
  return Object.defineProperties(Object.create(Object.getPrototypeOf(mergedOptions)), {
    ...descriptors,
    features: {
      value: features,
      enumerable: true,
      configurable: true,
      writable: true
    },
    atoms: {
      value: atoms,
      enumerable: true,
      configurable: true,
      writable: true
    },
    initialState: {
      value: initialState,
      enumerable: true,
      configurable: true,
      writable: true
    }
  });
}
function table_setOptions(table, updater, options2) {
  const mergedOptions = table_mergeOptions(table, functionalUpdate(updater, table.options));
  if (table.optionsStore) table.optionsStore.set(() => mergedOptions);
  else table.options = mergedOptions;
  if (options2?.syncExternalState !== false) table_publishExternalState(table, mergedOptions.state ?? null);
}
const coreTablesFeature = { constructTableAPIs: (table) => {
  assignTableAPIs("coreTablesFeature", table, {
    table_reset: { fn: () => table_reset(table) },
    table_setOptions: { fn: (updater) => table_setOptions(table, updater) }
  });
} };
const coreFeatures = {
  coreCellsFeature,
  coreColumnsFeature,
  coreHeadersFeature,
  coreRowModelsFeature,
  coreRowsFeature,
  coreTablesFeature
};
function tableFeatures(features) {
  return features;
}
function getInitialTableState(features, initialState = {}) {
  Object.values(features).forEach((feature) => {
    initialState = feature.getInitialState?.(initialState) ?? initialState;
  });
  return cloneState(initialState);
}
function constructTable(tableOptions) {
  const _reactivity = tableOptions.features.coreReactivityFeature;
  const { aggregationFns, columnMeta: _columnMeta, coreRowModel, expandedRowModel, facetedMinMaxValues, facetedRowModel, facetedUniqueValues, filterFns: filterFns2, filterMeta: _filterMeta, filteredRowModel, groupedRowModel, paginatedRowModel, sortFns: sortFns2, sortedRowModel, tableMeta: _tableMeta, ...features } = tableOptions.features;
  const table = {
    _cellInstanceInitFns: [],
    _columnInstanceInitFns: [],
    _features: {
      ...coreFeatures,
      ...features
    },
    _headerGroupInstanceInitFns: [],
    _headerInstanceInitFns: [],
    _reactivity,
    _rowInstanceInitFns: [],
    _rowModelFns: {
      aggregationFns,
      filterFns: filterFns2,
      sortFns: sortFns2
    },
    _rowModels: {},
    atoms: {},
    baseAtoms: {}
  };
  const featuresList = Object.values(table._features);
  const mergedOptions = {
    ...featuresList.reduce((obj, feature) => {
      return Object.assign(obj, feature.getDefaultTableOptions?.(table));
    }, {}),
    ...tableOptions
  };
  if (_reactivity.wrapExternalAtoms && mergedOptions.atoms) for (const [atomKey, _atom] of Object.entries(mergedOptions.atoms)) {
    const atom = _atom;
    const wrappedAtom = _reactivity.createWritableAtom(atom.get(), { debugName: `externalAtom/${atomKey}` });
    mergedOptions.atoms[atomKey] = wrappedAtom;
    let syncExternal = false;
    const syncAtomToWrappedSub = atom.subscribe((value) => {
      if (syncExternal) return;
      wrappedAtom.set(value);
    });
    const syncWrappedToAtomSub = wrappedAtom.subscribe((value) => {
      syncExternal = true;
      atom.set(value);
      syncExternal = false;
    });
    _reactivity.addSubscription(syncAtomToWrappedSub);
    _reactivity.addSubscription(syncWrappedToAtomSub);
  }
  if (_reactivity.createOptionsStore) {
    table.optionsStore = _reactivity.createWritableAtom(mergedOptions, { debugName: "table/optionsStore" });
    Object.defineProperty(table, "options", {
      configurable: true,
      enumerable: true,
      get() {
        return table.optionsStore.get();
      },
      set(value) {
        table.optionsStore.set(() => value);
      }
    });
  } else table.options = mergedOptions;
  table.initialState = getInitialTableState(table._features, table.options.initialState);
  const stateKeys = Object.keys(table.initialState);
  for (let i = 0; i < stateKeys.length; i++) {
    const key = stateKeys[i];
    table.baseAtoms[key] = _reactivity.createWritableAtom(table.initialState[key], { debugName: `table/baseAtoms/${key}` });
    table.atoms[key] = _reactivity.createReadonlyAtom(() => {
      const options2 = table.options;
      const externalAtom = options2.atoms?.[key];
      const reactiveState = externalAtom ? externalAtom.get() : table.baseAtoms[key].get();
      if (externalAtom) return reactiveState;
      const controlledState = options2.state;
      if (controlledState && hasOwn(controlledState, key)) {
        const controlledValue = controlledState[key];
        return controlledValue === void 0 ? table.initialState[key] : controlledValue;
      }
      return reactiveState;
    }, { debugName: `table/atoms/${key}` });
  }
  table_syncExternalStateToBaseAtoms(table);
  table.store = atomToStore(_reactivity.createReadonlyAtom(() => {
    const snapshot = {};
    for (let i = 0; i < stateKeys.length; i++) {
      const key = stateKeys[i];
      snapshot[key] = table.atoms[key].get();
    }
    return snapshot;
  }, {
    compare: shallow,
    debugName: "table/store"
  }));
  for (let i = 0; i < featuresList.length; i++) {
    const feature = featuresList[i];
    feature.initTableInstanceData?.(table);
    if (feature.initCellInstanceData) table._cellInstanceInitFns.push(feature.initCellInstanceData.bind(feature));
    if (feature.initColumnInstanceData) table._columnInstanceInitFns.push(feature.initColumnInstanceData.bind(feature));
    if (feature.initHeaderGroupInstanceData) table._headerGroupInstanceInitFns.push(feature.initHeaderGroupInstanceData.bind(feature));
    if (feature.initHeaderInstanceData) table._headerInstanceInitFns.push(feature.initHeaderInstanceData.bind(feature));
    if (feature.initRowInstanceData) table._rowInstanceInitFns.push(feature.initRowInstanceData.bind(feature));
    feature.constructTableAPIs?.(table);
  }
  return table;
}
function getDefaultColumnFiltersState() {
  return [];
}
function column_getAutoFilterFn(column) {
  const filterFns2 = column.table._rowModelFns.filterFns;
  const rows = column.table.getCoreRowModel().flatRows;
  let value;
  for (let i = 0; i < rows.length; i++) {
    const rowValue = rows[i].getValue(column.id);
    if (rowValue !== null && rowValue !== void 0) {
      value = rowValue;
      break;
    }
  }
  let filterFnName;
  if (typeof value === "string") filterFnName = "includesString";
  else if (typeof value === "number") filterFnName = "inNumberRange";
  else if (typeof value === "boolean") filterFnName = "equals";
  else if (Array.isArray(value)) filterFnName = "arrIncludes";
  else if (Object.prototype.toString.call(value) === "[object Date]") filterFnName = "inDateRange";
  else if (value !== null && typeof value === "object") filterFnName = "equals";
  else filterFnName = "weakEquals";
  const filterFn = filterFns2?.[filterFnName];
  return filterFn;
}
function column_getFilterFn(column) {
  let filterFn = null;
  const filterFns2 = column.table._rowModelFns.filterFns;
  filterFn = isFunction(column.columnDef.filterFn) ? column.columnDef.filterFn : column.columnDef.filterFn === "auto" ? column_getAutoFilterFn(column) : filterFns2?.[column.columnDef.filterFn];
  return filterFn ?? void 0;
}
function column_getCanFilter(column) {
  return (column.columnDef.enableColumnFilter ?? true) && (column.table.options.enableColumnFilters ?? true) && (column.table.options.enableFilters ?? true) && !!column.accessorFn;
}
function column_getIsFiltered(column) {
  return column_getFilterIndex(column) > -1;
}
function column_getFilterValue(column) {
  return column.table.atoms.columnFilters?.get()?.find((d) => d.id === column.id)?.value;
}
function column_getFilterIndex(column) {
  return column.table.atoms.columnFilters?.get()?.findIndex((d) => d.id === column.id) ?? -1;
}
function column_setFilterValue(column, value) {
  table_setColumnFilters(column.table, (old) => {
    const filterFn = column_getFilterFn(column);
    const previousFilter = old.find((d) => d.id === column.id);
    const newFilter = functionalUpdate(value, previousFilter ? previousFilter.value : void 0);
    if (shouldAutoRemoveFilter(filterFn, newFilter, column)) return old.filter((d) => d.id !== column.id);
    const newFilterObj = {
      id: column.id,
      value: newFilter
    };
    if (previousFilter) return old.map((d) => {
      if (d.id === column.id) return newFilterObj;
      return d;
    });
    if (old.length) return [...old, newFilterObj];
    return [newFilterObj];
  });
}
function table_setColumnFilters(table, updater) {
  const leafColumnsById = table.getAllLeafColumnsById();
  const updateFn = (old) => {
    return functionalUpdate(updater, old).filter((filter) => {
      const column = leafColumnsById[filter.id];
      if (column) {
        if (shouldAutoRemoveFilter(column_getFilterFn(column), filter.value, column)) return false;
      }
      return true;
    });
  };
  setStateSlice(table, "columnFilters", updateFn);
}
function table_resetColumnFilters(table, defaultState) {
  table_setColumnFilters(table, defaultState ? [] : cloneState(table.initialState.columnFilters ?? []));
}
function shouldAutoRemoveFilter(filterFn, value, column) {
  if (typeof value === "undefined") return true;
  if (filterFn?.autoRemove) return !!filterFn.autoRemove(value, column);
  return typeof value === "string" && !value;
}
const columnFilteringFeature = {
  getInitialState: (initialState) => {
    return {
      columnFilters: getDefaultColumnFiltersState(),
      ...initialState
    };
  },
  getDefaultColumnDef: () => {
    return { filterFn: "auto" };
  },
  getDefaultTableOptions: (table) => {
    return {
      onColumnFiltersChange: makeStateUpdater("columnFilters", table),
      filterFromLeafRows: false,
      maxLeafRowFilterDepth: 100
    };
  },
  assignColumnPrototype: (prototype, table) => {
    assignPrototypeAPIs("columnFilteringFeature", prototype, table, {
      column_getAutoFilterFn: { fn: (column) => column_getAutoFilterFn(column) },
      column_getFilterFn: { fn: (column) => column_getFilterFn(column) },
      column_getCanFilter: { fn: (column) => column_getCanFilter(column) },
      column_getIsFiltered: { fn: (column) => column_getIsFiltered(column) },
      column_getFilterValue: { fn: (column) => column_getFilterValue(column) },
      column_getFilterIndex: { fn: (column) => column_getFilterIndex(column) },
      column_setFilterValue: { fn: (column, value) => column_setFilterValue(column, value) }
    });
  },
  initRowInstanceData: (row) => {
    row.columnFilters = makeObjectMap();
    row.columnFiltersMeta = makeObjectMap();
  },
  constructTableAPIs: (table) => {
    assignTableAPIs("columnFilteringFeature", table, {
      table_setColumnFilters: { fn: (updater) => table_setColumnFilters(table, updater) },
      table_resetColumnFilters: { fn: (defaultState) => table_resetColumnFilters(table, defaultState) }
    });
  }
};
const columnOrderingFeature = {
  getInitialState: (initialState) => {
    return {
      columnOrder: getDefaultColumnOrderState(),
      ...initialState
    };
  },
  getDefaultTableOptions: (table) => {
    return { onColumnOrderChange: makeStateUpdater("columnOrder", table) };
  },
  assignColumnPrototype: (prototype, table) => {
    assignPrototypeAPIs("columnOrderingFeature", prototype, table, {
      column_getIndex: { fn: (column, position) => column_getIndex(column, position) },
      column_getIsFirstColumn: { fn: (column, position) => column_getIsFirstColumn(column, position) },
      column_getIsLastColumn: { fn: (column, position) => column_getIsLastColumn(column, position) }
    });
  },
  constructTableAPIs: (table) => {
    assignTableAPIs("columnOrderingFeature", table, {
      table_getColumnIndexes: {
        fn: () => table_getColumnIndexes(table),
        memoDeps: () => [
          table.options.columns,
          table.atoms.columnOrder?.get(),
          table.atoms.columnPinning?.get(),
          table.atoms.columnVisibility?.get(),
          table.atoms.grouping?.get(),
          table.options.groupedColumnMode
        ]
      },
      table_setColumnOrder: { fn: (updater) => table_setColumnOrder(table, updater) },
      table_resetColumnOrder: { fn: (defaultState) => table_resetColumnOrder(table, defaultState) },
      table_getOrderColumnsFn: {
        fn: () => table_getOrderColumnsFn(table),
        memoDeps: () => [
          table.atoms.columnOrder?.get(),
          table.atoms.grouping?.get(),
          table.options.groupedColumnMode
        ]
      }
    });
  }
};
const columnPinningFeature = {
  getInitialState: (initialState) => {
    return {
      columnPinning: {
        ...getDefaultColumnPinningState(),
        ...initialState.columnPinning
      },
      ...initialState
    };
  },
  getDefaultTableOptions: (table) => {
    return { onColumnPinningChange: makeStateUpdater("columnPinning", table) };
  },
  assignColumnPrototype: (prototype, table) => {
    assignPrototypeAPIs("columnPinningFeature", prototype, table, {
      column_pin: { fn: (column, position) => column_pin(column, position) },
      column_getCanPin: { fn: (column) => column_getCanPin(column) },
      column_getPinnedIndex: { fn: (column) => column_getPinnedIndex(column) },
      column_getIsPinned: { fn: (column) => column_getIsPinned(column) }
    });
  },
  assignRowPrototype: (prototype, table) => {
    assignPrototypeAPIs("columnPinningFeature", prototype, table, {
      row_getCenterVisibleCells: {
        fn: (row) => row_getCenterVisibleCells(row),
        memoDeps: (row) => [
          row.getAllCells(),
          row.table.atoms.columnPinning?.get(),
          row.table.atoms.columnVisibility?.get()
        ]
      },
      row_getStartVisibleCells: {
        fn: (row) => row_getStartVisibleCells(row),
        memoDeps: (row) => [
          row.getAllCells(),
          row.table.atoms.columnPinning?.get()?.start,
          row.table.atoms.columnVisibility?.get()
        ]
      },
      row_getEndVisibleCells: {
        fn: (row) => row_getEndVisibleCells(row),
        memoDeps: (row) => [
          row.getAllCells(),
          row.table.atoms.columnPinning?.get()?.end,
          row.table.atoms.columnVisibility?.get()
        ]
      }
    });
  },
  constructTableAPIs: (table) => {
    assignTableAPIs("columnPinningFeature", table, {
      table_setColumnPinning: { fn: (updater) => table_setColumnPinning(table, updater) },
      table_resetColumnPinning: { fn: (defaultState) => table_resetColumnPinning(table, defaultState) },
      table_getIsSomeColumnsPinned: { fn: (position) => table_getIsSomeColumnsPinned(table, position) },
      table_getStartHeaderGroups: {
        fn: () => table_getStartHeaderGroups(table),
        memoDeps: () => [
          table.getAllColumns(),
          callMemoOrStaticFn(table, "getVisibleLeafColumns", table_getVisibleLeafColumns),
          table.atoms.columnPinning?.get()?.start,
          table.atoms.columnOrder?.get()
        ]
      },
      table_getCenterHeaderGroups: {
        fn: () => table_getCenterHeaderGroups(table),
        memoDeps: () => [
          table.getAllColumns(),
          callMemoOrStaticFn(table, "getVisibleLeafColumns", table_getVisibleLeafColumns),
          table.atoms.columnPinning?.get(),
          table.atoms.columnOrder?.get()
        ]
      },
      table_getEndHeaderGroups: {
        fn: () => table_getEndHeaderGroups(table),
        memoDeps: () => [
          table.getAllColumns(),
          callMemoOrStaticFn(table, "getVisibleLeafColumns", table_getVisibleLeafColumns),
          table.atoms.columnPinning?.get()?.end,
          table.atoms.columnOrder?.get()
        ]
      },
      table_getStartFooterGroups: {
        fn: () => table_getStartFooterGroups(table),
        memoDeps: () => [callMemoOrStaticFn(table, "getStartHeaderGroups", table_getStartHeaderGroups)]
      },
      table_getCenterFooterGroups: {
        fn: () => table_getCenterFooterGroups(table),
        memoDeps: () => [callMemoOrStaticFn(table, "getCenterHeaderGroups", table_getCenterHeaderGroups)]
      },
      table_getEndFooterGroups: {
        fn: () => table_getEndFooterGroups(table),
        memoDeps: () => [callMemoOrStaticFn(table, "getEndHeaderGroups", table_getEndHeaderGroups)]
      },
      table_getStartFlatHeaders: {
        fn: () => table_getStartFlatHeaders(table),
        memoDeps: () => [callMemoOrStaticFn(table, "getStartHeaderGroups", table_getStartHeaderGroups)]
      },
      table_getEndFlatHeaders: {
        fn: () => table_getEndFlatHeaders(table),
        memoDeps: () => [callMemoOrStaticFn(table, "getEndHeaderGroups", table_getEndHeaderGroups)]
      },
      table_getCenterFlatHeaders: {
        fn: () => table_getCenterFlatHeaders(table),
        memoDeps: () => [callMemoOrStaticFn(table, "getCenterHeaderGroups", table_getCenterHeaderGroups)]
      },
      table_getStartLeafHeaders: {
        fn: () => table_getStartLeafHeaders(table),
        memoDeps: () => [callMemoOrStaticFn(table, "getStartHeaderGroups", table_getStartHeaderGroups)]
      },
      table_getEndLeafHeaders: {
        fn: () => table_getEndLeafHeaders(table),
        memoDeps: () => [callMemoOrStaticFn(table, "getEndHeaderGroups", table_getEndHeaderGroups)]
      },
      table_getCenterLeafHeaders: {
        fn: () => table_getCenterLeafHeaders(table),
        memoDeps: () => [callMemoOrStaticFn(table, "getCenterHeaderGroups", table_getCenterHeaderGroups)]
      },
      table_getStartLeafColumns: {
        fn: () => table_getStartLeafColumns(table),
        memoDeps: () => [
          table.options.columns,
          table.atoms.columnPinning?.get(),
          table.atoms.columnOrder?.get(),
          table.atoms.grouping?.get(),
          table.options.groupedColumnMode
        ]
      },
      table_getEndLeafColumns: {
        fn: () => table_getEndLeafColumns(table),
        memoDeps: () => [
          table.options.columns,
          table.atoms.columnPinning?.get(),
          table.atoms.columnOrder?.get(),
          table.atoms.grouping?.get(),
          table.options.groupedColumnMode
        ]
      },
      table_getCenterLeafColumns: {
        fn: () => table_getCenterLeafColumns(table),
        memoDeps: () => [
          table.options.columns,
          table.atoms.columnPinning?.get(),
          table.atoms.columnOrder?.get(),
          table.atoms.grouping?.get(),
          table.options.groupedColumnMode
        ]
      },
      table_getPinnedLeafColumns: { fn: (position) => table_getPinnedLeafColumns(table, position) },
      table_getStartVisibleLeafColumns: {
        fn: () => table_getStartVisibleLeafColumns(table),
        memoDeps: () => [
          table.options.columns,
          table.atoms.columnPinning?.get(),
          table.atoms.columnVisibility?.get(),
          table.atoms.columnOrder?.get(),
          table.atoms.grouping?.get(),
          table.options.groupedColumnMode
        ]
      },
      table_getCenterVisibleLeafColumns: {
        fn: () => table_getCenterVisibleLeafColumns(table),
        memoDeps: () => [
          table.options.columns,
          table.atoms.columnPinning?.get(),
          table.atoms.columnVisibility?.get(),
          table.atoms.columnOrder?.get(),
          table.atoms.grouping?.get(),
          table.options.groupedColumnMode
        ]
      },
      table_getEndVisibleLeafColumns: {
        fn: () => table_getEndVisibleLeafColumns(table),
        memoDeps: () => [
          table.options.columns,
          table.atoms.columnPinning?.get(),
          table.atoms.columnVisibility?.get(),
          table.atoms.columnOrder?.get(),
          table.atoms.grouping?.get(),
          table.options.groupedColumnMode
        ]
      },
      table_getPinnedVisibleLeafColumns: { fn: (position) => table_getPinnedVisibleLeafColumns(table, position) }
    });
  }
};
function getDefaultColumnSizingState() {
  return makeObjectMap();
}
function getDefaultColumnSizingColumnDef() {
  return {
    size: 150,
    minSize: 20,
    maxSize: Number.MAX_SAFE_INTEGER
  };
}
function column_getSize(column) {
  const defaultSizes = getDefaultColumnSizingColumnDef();
  const columnSizing = column.table.atoms.columnSizing?.get();
  const columnSize = columnSizing && hasOwn(columnSizing, column.id) ? columnSizing[column.id] : void 0;
  return Math.min(Math.max(column.columnDef.minSize ?? defaultSizes.minSize, columnSize ?? column.columnDef.size ?? defaultSizes.size), column.columnDef.maxSize ?? defaultSizes.maxSize);
}
function buildColumnOffsets(columns) {
  const starts = makeObjectMap();
  const afters = makeObjectMap();
  const sizes = new Array(columns.length);
  let start = 0;
  for (let i = 0; i < columns.length; i++) {
    const column = columns[i];
    const size2 = callMemoOrStaticFn(column, "getSize", column_getSize);
    sizes[i] = size2;
    starts[column.id] = start;
    start += size2;
  }
  let after = 0;
  for (let i = columns.length - 1; i >= 0; i--) {
    afters[columns[i].id] = after;
    after += sizes[i];
  }
  return {
    starts,
    afters
  };
}
function table_getColumnOffsets(table) {
  return {
    all: buildColumnOffsets(table_getPinnedVisibleLeafColumns(table)),
    center: buildColumnOffsets(table_getPinnedVisibleLeafColumns(table, "center")),
    start: buildColumnOffsets(table_getPinnedVisibleLeafColumns(table, "start")),
    end: buildColumnOffsets(table_getPinnedVisibleLeafColumns(table, "end"))
  };
}
function toOffsetsKey(position) {
  return position === "start" ? "start" : position === "end" ? "end" : position === "center" ? "center" : "all";
}
function column_getStart(column, position) {
  return callMemoOrStaticFn(column.table, "getColumnOffsets", table_getColumnOffsets)[toOffsetsKey(position)].starts[column.id] ?? 0;
}
function column_getAfter(column, position) {
  return callMemoOrStaticFn(column.table, "getColumnOffsets", table_getColumnOffsets)[toOffsetsKey(position)].afters[column.id] ?? 0;
}
function column_resetSize(column) {
  table_setColumnSizing(column.table, (old) => {
    const rest = makeObjectMap();
    const columnIds = Object.keys(old);
    for (let i = 0; i < columnIds.length; i++) {
      const columnId = columnIds[i];
      if (columnId !== column.id) rest[columnId] = old[columnId];
    }
    return rest;
  });
}
function sumHeaderSize(header) {
  if (!header.subHeaders.length) return column_getSize(header.column);
  let sum = 0;
  for (let i = 0; i < header.subHeaders.length; i++) sum += sumHeaderSize(header.subHeaders[i]);
  return sum;
}
function header_getSize(header) {
  return sumHeaderSize(header);
}
function header_getStart(header) {
  if (header.index > 0) {
    const prevSiblingHeader = header.headerGroup?.headers[header.index - 1];
    if (prevSiblingHeader) return callMemoOrStaticFn(prevSiblingHeader, "getStart", header_getStart) + callMemoOrStaticFn(prevSiblingHeader, "getSize", header_getSize);
  }
  return 0;
}
function table_setColumnSizing(table, updater) {
  table.options.onColumnSizingChange?.(updater);
}
function table_resetColumnSizing(table, defaultState) {
  table_setColumnSizing(table, defaultState ? makeObjectMap() : Object.assign(makeObjectMap(), cloneState(table.initialState.columnSizing ?? {})));
}
function table_getTotalSize(table) {
  return table.getHeaderGroups()[0]?.headers.reduce((sum, header) => {
    return sum + header_getSize(header);
  }, 0) ?? 0;
}
function table_getStartTotalSize(table) {
  return callMemoOrStaticFn(table, "getStartHeaderGroups", table_getStartHeaderGroups)[0]?.headers.reduce((sum, header) => {
    return sum + header_getSize(header);
  }, 0) ?? 0;
}
function table_getCenterTotalSize(table) {
  return callMemoOrStaticFn(table, "getCenterHeaderGroups", table_getCenterHeaderGroups)[0]?.headers.reduce((sum, header) => {
    return sum + header_getSize(header);
  }, 0) ?? 0;
}
function table_getEndTotalSize(table) {
  return callMemoOrStaticFn(table, "getEndHeaderGroups", table_getEndHeaderGroups)[0]?.headers.reduce((sum, header) => {
    return sum + header_getSize(header);
  }, 0) ?? 0;
}
function getDefaultColumnResizingState() {
  return {
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: false,
    columnSizingStart: []
  };
}
function column_getCanResize(column) {
  return (column.columnDef.enableResizing ?? true) && (column.table.options.enableColumnResizing ?? true);
}
function column_getIsResizing(column) {
  return column.table.atoms.columnResizing?.get()?.isResizingColumn === column.id;
}
function header_getResizeHandler(header, _contextDocument) {
  const column = header.table.getColumn(header.column.id);
  const canResize = column_getCanResize(column);
  return (event) => {
    if (!canResize) return;
    if (isTouchStartEvent(event)) {
      if (event.touches.length > 1) return;
    }
    const startSize = header_getSize(header);
    const columnSizingStart = header.getLeafHeaders().map((leafHeader) => [leafHeader.column.id, column_getSize(leafHeader.column)]);
    const clientX = isTouchStartEvent(event) ? Math.round(event.touches[0].clientX) : event.clientX;
    const newColumnSizing = makeObjectMap();
    const updateOffset = (eventType, clientXPos) => {
      if (typeof clientXPos !== "number") return;
      const table = column.table;
      const isCommit = table.options.columnResizeMode === "onChange" || eventType === "end";
      table._reactivity.batch(() => {
        table_setColumnResizing(table, (old) => {
          const deltaDirection = table.options.columnResizeDirection === "rtl" ? -1 : 1;
          const deltaOffset = (clientXPos - (old.startOffset ?? 0)) * deltaDirection;
          const startSize2 = old.startSize ?? 0;
          const deltaPercentage = Math.max(startSize2 > 0 ? deltaOffset / startSize2 : 0, -0.999999);
          if (isCommit) {
            const columnSizingStart2 = old.columnSizingStart;
            for (let i = 0; i < columnSizingStart2.length; i++) {
              const entry = columnSizingStart2[i];
              const headerSize = entry[1];
              newColumnSizing[entry[0]] = Math.round(Math.max(headerSize > 0 ? headerSize + headerSize * deltaPercentage : deltaOffset / columnSizingStart2.length, 0) * 100) / 100;
            }
          }
          return {
            ...old,
            deltaOffset,
            deltaPercentage
          };
        });
        if (isCommit) table_setColumnSizing(table, (old) => Object.assign(makeObjectMap(), old, newColumnSizing));
      });
    };
    let moveRafId = null;
    let hasPendingMove = false;
    let latestMoveX;
    const flushMove = () => {
      if (hasPendingMove) {
        hasPendingMove = false;
        updateOffset("move", latestMoveX);
        moveRafId = requestAnimationFrame(flushMove);
      } else moveRafId = null;
    };
    const onMove = (clientXPos) => {
      latestMoveX = clientXPos;
      if (typeof requestAnimationFrame !== "function") {
        updateOffset("move", clientXPos);
        return;
      }
      if (moveRafId !== null) {
        hasPendingMove = true;
        return;
      }
      updateOffset("move", clientXPos);
      moveRafId = requestAnimationFrame(flushMove);
    };
    const onEnd = (clientXPos) => {
      if (moveRafId !== null) {
        cancelAnimationFrame(moveRafId);
        moveRafId = null;
        hasPendingMove = false;
      }
      column.table._reactivity.batch(() => {
        updateOffset("end", clientXPos ?? latestMoveX);
        table_setColumnResizing(column.table, (old) => ({
          ...old,
          isResizingColumn: false,
          startOffset: null,
          startSize: null,
          deltaOffset: null,
          deltaPercentage: null,
          columnSizingStart: []
        }));
      });
    };
    const contextDocument = _contextDocument || (typeof document !== "undefined" ? document : null);
    const mouseEvents = {
      moveHandler: (e) => onMove(e.clientX),
      upHandler: (e) => {
        contextDocument?.removeEventListener("mousemove", mouseEvents.moveHandler);
        contextDocument?.removeEventListener("mouseup", mouseEvents.upHandler);
        onEnd(e.clientX);
      }
    };
    const touchEvents = {
      moveHandler: (touchEvent) => {
        if (touchEvent.cancelable) {
          touchEvent.preventDefault();
          touchEvent.stopPropagation();
        }
        onMove(touchEvent.touches[0].clientX);
        return false;
      },
      upHandler: (e) => {
        removeTouchEvents();
        if (e.cancelable) {
          e.preventDefault();
          e.stopPropagation();
        }
        onEnd(e.touches[0]?.clientX);
      },
      cancelHandler: () => {
        removeTouchEvents();
        onEnd();
      }
    };
    const removeTouchEvents = () => {
      contextDocument?.removeEventListener("touchmove", touchEvents.moveHandler);
      contextDocument?.removeEventListener("touchend", touchEvents.upHandler);
      contextDocument?.removeEventListener("touchcancel", touchEvents.cancelHandler);
    };
    const passiveIfSupported = passiveEventSupported() ? { passive: false } : false;
    if (isTouchStartEvent(event)) {
      contextDocument?.addEventListener("touchmove", touchEvents.moveHandler, passiveIfSupported);
      contextDocument?.addEventListener("touchend", touchEvents.upHandler, passiveIfSupported);
      contextDocument?.addEventListener("touchcancel", touchEvents.cancelHandler, passiveIfSupported);
    } else {
      contextDocument?.addEventListener("mousemove", mouseEvents.moveHandler, passiveIfSupported);
      contextDocument?.addEventListener("mouseup", mouseEvents.upHandler, passiveIfSupported);
    }
    table_setColumnResizing(column.table, (old) => ({
      ...old,
      startOffset: clientX,
      startSize,
      deltaOffset: 0,
      deltaPercentage: 0,
      columnSizingStart,
      isResizingColumn: column.id
    }));
  };
}
function table_setColumnResizing(table, updater) {
  table.options.onColumnResizingChange?.(updater);
}
function table_resetHeaderSizeInfo(table, defaultState) {
  table_setColumnResizing(table, defaultState ? getDefaultColumnResizingState() : cloneState(table.initialState.columnResizing ?? getDefaultColumnResizingState()));
}
let passiveSupported = null;
function passiveEventSupported() {
  if (typeof passiveSupported === "boolean") return passiveSupported;
  let supported = false;
  try {
    const options2 = { get passive() {
      supported = true;
      return false;
    } };
    const noop3 = () => {
    };
    window.addEventListener("test", noop3, options2);
    window.removeEventListener("test", noop3);
  } catch (err) {
    supported = false;
  }
  passiveSupported = supported;
  return passiveSupported;
}
function isTouchStartEvent(e) {
  return e.type === "touchstart";
}
const columnResizingFeature = {
  getInitialState: (initialState) => {
    return {
      columnResizing: getDefaultColumnResizingState(),
      ...initialState
    };
  },
  getDefaultTableOptions: (table) => {
    return {
      columnResizeMode: "onEnd",
      columnResizeDirection: "ltr",
      onColumnResizingChange: makeStateUpdater("columnResizing", table)
    };
  },
  assignColumnPrototype: (prototype, table) => {
    assignPrototypeAPIs("columnResizingFeature", prototype, table, {
      column_getCanResize: { fn: (column) => column_getCanResize(column) },
      column_getIsResizing: { fn: (column) => column_getIsResizing(column) }
    });
  },
  assignHeaderPrototype: (prototype, table) => {
    assignPrototypeAPIs("columnResizingFeature", prototype, table, { header_getResizeHandler: { fn: (header, _contextDocument) => header_getResizeHandler(header, _contextDocument) } });
  },
  constructTableAPIs: (table) => {
    assignTableAPIs("columnResizingFeature", table, {
      table_setColumnResizing: { fn: (updater) => table_setColumnResizing(table, updater) },
      table_resetHeaderSizeInfo: { fn: (defaultState) => table_resetHeaderSizeInfo(table, defaultState) }
    });
  }
};
const columnSizingFeature = {
  getInitialState: (initialState) => {
    return {
      columnSizing: getDefaultColumnSizingState(),
      ...initialState
    };
  },
  getDefaultColumnDef: () => {
    return getDefaultColumnSizingColumnDef();
  },
  getDefaultTableOptions: (table) => {
    return { onColumnSizingChange: makeStateUpdater("columnSizing", table) };
  },
  assignColumnPrototype: (prototype, table) => {
    assignPrototypeAPIs("columnSizingFeature", prototype, table, {
      column_getSize: {
        fn: (column) => column_getSize(column),
        memoDeps: (column) => [table.options.columns, table.atoms.columnSizing?.get()?.[column.id]]
      },
      column_getStart: { fn: (column, position) => column_getStart(column, position) },
      column_getAfter: { fn: (column, position) => column_getAfter(column, position) },
      column_resetSize: { fn: (column) => column_resetSize(column) }
    });
  },
  assignHeaderPrototype: (prototype, table) => {
    assignPrototypeAPIs("columnSizingFeature", prototype, table, {
      header_getSize: {
        fn: (header) => header_getSize(header),
        memoDeps: (header) => [table.options.columns, header.column.columns.length > 0 ? table.atoms.columnSizing?.get() : table.atoms.columnSizing?.get()?.[header.column.id]]
      },
      header_getStart: {
        fn: (header) => header_getStart(header),
        memoDeps: () => [
          table.options.columns,
          table.atoms.columnSizing?.get(),
          table.atoms.columnOrder?.get(),
          table.atoms.columnPinning?.get(),
          table.atoms.columnVisibility?.get(),
          table.atoms.grouping?.get(),
          table.options.groupedColumnMode
        ]
      }
    });
  },
  constructTableAPIs: (table) => {
    assignTableAPIs("columnSizingFeature", table, {
      table_getColumnOffsets: {
        fn: () => table_getColumnOffsets(table),
        memoDeps: () => [
          table.options.columns,
          table.atoms.columnSizing?.get(),
          table.atoms.columnOrder?.get(),
          table.atoms.columnPinning?.get(),
          table.atoms.columnVisibility?.get(),
          table.atoms.grouping?.get(),
          table.options.groupedColumnMode
        ]
      },
      table_setColumnSizing: { fn: (updater) => table_setColumnSizing(table, updater) },
      table_resetColumnSizing: { fn: (defaultState) => table_resetColumnSizing(table, defaultState) },
      table_getTotalSize: {
        fn: () => table_getTotalSize(table),
        memoDeps: () => [table.atoms.columnSizing?.get(), table.getHeaderGroups()]
      },
      table_getStartTotalSize: {
        fn: () => table_getStartTotalSize(table),
        memoDeps: () => [table.atoms.columnSizing?.get(), table.getHeaderGroups()]
      },
      table_getCenterTotalSize: {
        fn: () => table_getCenterTotalSize(table),
        memoDeps: () => [table.atoms.columnSizing?.get(), table.getHeaderGroups()]
      },
      table_getEndTotalSize: {
        fn: () => table_getEndTotalSize(table),
        memoDeps: () => [table.atoms.columnSizing?.get(), table.getHeaderGroups()]
      }
    });
  }
};
const columnVisibilityFeature = {
  getInitialState: (initialState) => {
    return {
      columnVisibility: getDefaultColumnVisibilityState(),
      ...initialState
    };
  },
  getDefaultTableOptions: (table) => {
    return { onColumnVisibilityChange: makeStateUpdater("columnVisibility", table) };
  },
  assignColumnPrototype: (prototype, table) => {
    assignPrototypeAPIs("columnVisibilityFeature", prototype, table, {
      column_getIsVisible: {
        fn: (column) => column_getIsVisible(column),
        memoDeps: (column) => [
          table.options.columns,
          table.atoms.columnVisibility?.get(),
          column.columns
        ]
      },
      column_getCanHide: { fn: (column) => column_getCanHide(column) },
      column_getToggleVisibilityHandler: { fn: (column) => column_getToggleVisibilityHandler(column) },
      column_toggleVisibility: { fn: (column, visible) => column_toggleVisibility(column, visible) }
    });
  },
  assignRowPrototype: (prototype, table) => {
    assignPrototypeAPIs("columnVisibilityFeature", prototype, table, {
      row_getVisibleCells: {
        fn: (row) => row_getVisibleCells(row),
        memoDeps: (row) => [
          row.getAllCells(),
          table.atoms.columnPinning?.get(),
          table.atoms.columnVisibility?.get()
        ]
      },
      row_getVisibleCellsByColumnId: {
        fn: (row) => row_getVisibleCellsByColumnId(row),
        memoDeps: (row) => [row.getAllCells(), table.atoms.columnVisibility?.get()]
      }
    });
  },
  constructTableAPIs: (table) => {
    assignTableAPIs("columnVisibilityFeature", table, {
      table_getVisibleFlatColumns: {
        fn: () => table_getVisibleFlatColumns(table),
        memoDeps: () => [
          table.atoms.columnVisibility?.get(),
          table.atoms.columnOrder?.get(),
          table.atoms.grouping?.get(),
          table.options.columns,
          table.options.groupedColumnMode
        ]
      },
      table_getVisibleLeafColumns: {
        fn: () => table_getVisibleLeafColumns(table),
        memoDeps: () => [
          table.atoms.columnVisibility?.get(),
          table.atoms.columnOrder?.get(),
          table.atoms.grouping?.get(),
          table.options.columns,
          table.options.groupedColumnMode
        ]
      },
      table_setColumnVisibility: { fn: (updater) => table_setColumnVisibility(table, updater) },
      table_resetColumnVisibility: { fn: (defaultState) => table_resetColumnVisibility(table, defaultState) },
      table_toggleAllColumnsVisible: { fn: (value) => table_toggleAllColumnsVisible(table, value) },
      table_getIsAllColumnsVisible: { fn: () => table_getIsAllColumnsVisible(table) },
      table_getIsSomeColumnsVisible: { fn: () => table_getIsSomeColumnsVisible(table) },
      table_getToggleAllColumnsVisibilityHandler: { fn: () => table_getToggleAllColumnsVisibilityHandler(table) }
    });
  }
};
function constructFilterFn(def) {
  const filterFn = Object.assign((row, columnId, filterValue, addMeta) => {
    const rawValue = row.getValue(columnId);
    const dataValue = filterFn.resolveDataValue ? filterFn.resolveDataValue(rawValue) : rawValue;
    return filterFn.filter(dataValue, filterValue, row, columnId, addMeta);
  }, def);
  return filterFn;
}
const filterFn_equals = constructFilterFn({
  filter: (dataValue, filterValue) => dataValue === filterValue,
  autoRemove: (val) => testFalsy(val)
});
const filterFn_weakEquals = constructFilterFn({
  filter: (dataValue, filterValue) => dataValue == filterValue,
  autoRemove: (val) => testFalsy(val)
});
const filterFn_includesStringSensitive = constructFilterFn({
  filter: (dataValue, filterValue) => Boolean(dataValue?.includes(filterValue)),
  autoRemove: (val) => testFalsy(val),
  resolveFilterValue: (val) => String(val),
  resolveDataValue: (val) => val == null ? void 0 : String(val)
});
const filterFn_includesString = constructFilterFn({
  filter: (dataValue, filterValue) => Boolean(dataValue?.includes(filterValue)),
  autoRemove: (val) => testFalsy(val),
  resolveFilterValue: (val) => String(val).toLowerCase(),
  resolveDataValue: (val) => val == null ? void 0 : String(val).toLowerCase()
});
const filterFn_equalsString = constructFilterFn({
  filter: (dataValue, filterValue) => dataValue === filterValue,
  autoRemove: (val) => testFalsy(val),
  resolveFilterValue: (val) => String(val).toLowerCase(),
  resolveDataValue: (val) => val == null ? void 0 : String(val).toLowerCase()
});
const filterFn_equalsStringSensitive = constructFilterFn({
  filter: (dataValue, filterValue) => dataValue === filterValue,
  autoRemove: (val) => testFalsy(val),
  resolveFilterValue: (val) => String(val),
  resolveDataValue: (val) => val == null ? void 0 : String(val)
});
const filterFn_startsWith = constructFilterFn({
  filter: (dataValue, filterValue) => Boolean(dataValue?.startsWith(filterValue)),
  autoRemove: (val) => testFalsy(val),
  resolveFilterValue: (val) => String(val).toLowerCase(),
  resolveDataValue: (val) => val == null ? void 0 : String(val).toLowerCase()
});
const filterFn_endsWith = constructFilterFn({
  filter: (dataValue, filterValue) => Boolean(dataValue?.endsWith(filterValue)),
  autoRemove: (val) => testFalsy(val),
  resolveFilterValue: (val) => String(val).toLowerCase(),
  resolveDataValue: (val) => val == null ? void 0 : String(val).toLowerCase()
});
const filterFn_empty = constructFilterFn({
  filter: (dataValue) => testValueEmpty(dataValue),
  autoRemove: (val) => testFalsy(val) || val === false
});
const filterFn_notEmpty = constructFilterFn({
  filter: (dataValue) => !testValueEmpty(dataValue),
  autoRemove: (val) => testFalsy(val) || val === false
});
constructFilterFn({
  filter: (dataValue, filterValue) => compareGreaterThan(dataValue, filterValue),
  autoRemove: (val) => testFalsy(val)
});
constructFilterFn({
  filter: (dataValue, filterValue) => compareGreaterThanOrEqualTo(dataValue, filterValue),
  autoRemove: (val) => testFalsy(val)
});
constructFilterFn({
  filter: (dataValue, filterValue) => !compareGreaterThanOrEqualTo(dataValue, filterValue),
  autoRemove: (val) => testFalsy(val)
});
constructFilterFn({
  filter: (dataValue, filterValue) => !compareGreaterThan(dataValue, filterValue),
  autoRemove: (val) => testFalsy(val)
});
const filterFn_between = constructFilterFn({
  filter: (dataValue, filterValues) => compareBetween(dataValue, filterValues, false),
  autoRemove: (val) => testFalsy(val) || Array.isArray(val) && testFalsy(val[0]) && testFalsy(val[1])
});
const filterFn_betweenInclusive = constructFilterFn({
  filter: (dataValue, filterValues) => compareBetween(dataValue, filterValues, true),
  autoRemove: (val) => testFalsy(val) || Array.isArray(val) && testFalsy(val[0]) && testFalsy(val[1])
});
const filterFn_inNumberRange = constructFilterFn({
  filter: (dataValue, filterValue) => {
    if (typeof dataValue !== "number" || Number.isNaN(dataValue)) return false;
    const [min2, max2] = filterValue;
    return dataValue >= min2 && dataValue <= max2;
  },
  resolveFilterValue: (val) => {
    const [unsafeMin, unsafeMax] = val;
    const parsedMin = typeof unsafeMin !== "number" ? parseFloat(unsafeMin) : unsafeMin;
    const parsedMax = typeof unsafeMax !== "number" ? parseFloat(unsafeMax) : unsafeMax;
    let min2 = unsafeMin === null || Number.isNaN(parsedMin) ? -Infinity : parsedMin;
    let max2 = unsafeMax === null || Number.isNaN(parsedMax) ? Infinity : parsedMax;
    if (min2 > max2) {
      const temp = min2;
      min2 = max2;
      max2 = temp;
    }
    return [min2, max2];
  },
  autoRemove: (val) => testFalsy(val) || Array.isArray(val) && testFalsy(val[0]) && testFalsy(val[1])
});
const filterFn_inDateRange = constructFilterFn({
  filter: (dataValue, filterValue) => {
    const [min2, max2] = filterValue;
    return dataValue >= min2 && dataValue <= max2;
  },
  resolveFilterValue: (val) => {
    const [unsafeMin, unsafeMax] = val;
    const parsedMin = toDateTimestamp(unsafeMin);
    const parsedMax = toDateTimestamp(unsafeMax);
    let min2 = Number.isNaN(parsedMin) ? -Infinity : parsedMin;
    let max2 = Number.isNaN(parsedMax) ? Infinity : parsedMax;
    if (min2 > max2) {
      const temp = min2;
      min2 = max2;
      max2 = temp;
    }
    return [min2, max2];
  },
  resolveDataValue: (val) => toDateTimestamp(val),
  autoRemove: (val) => testFalsy(val) || Array.isArray(val) && testFalsy(val[0]) && testFalsy(val[1])
});
const filterFn_arrHas = constructFilterFn({
  filter: (dataValue, filterValue) => {
    for (let i = 0; i < filterValue.length; i++) if (dataValue === filterValue[i]) return true;
    return false;
  },
  autoRemove: (val) => testFalsy(val) || !val?.length
});
const filterFn_arrIncludes = constructFilterFn({
  filter: (dataValue, filterValue) => {
    if (typeof dataValue !== "string" && !Array.isArray(dataValue)) return false;
    for (let i = 0; i < filterValue.length; i++) if (dataValue.includes(filterValue[i])) return true;
    return false;
  },
  autoRemove: (val) => testFalsy(val) || !val?.length
});
const filterFn_arrIncludesAll = constructFilterFn({
  filter: (dataValue, filterValue) => {
    if (!Array.isArray(dataValue)) return false;
    for (let i = 0; i < filterValue.length; i++) if (!dataValue.includes(filterValue[i])) return false;
    return true;
  },
  autoRemove: (val) => testFalsy(val) || !val?.length
});
const filterFn_arrIncludesSome = constructFilterFn({
  filter: (dataValue, filterValue) => {
    if (!Array.isArray(dataValue)) return false;
    for (let i = 0; i < filterValue.length; i++) if (dataValue.includes(filterValue[i])) return true;
    return false;
  },
  autoRemove: (val) => testFalsy(val) || !val?.length
});
const filterFns = {
  arrIncludes: filterFn_arrIncludes,
  arrIncludesAll: filterFn_arrIncludesAll,
  arrHas: filterFn_arrHas,
  arrIncludesSome: filterFn_arrIncludesSome,
  between: filterFn_between,
  betweenInclusive: filterFn_betweenInclusive,
  empty: filterFn_empty,
  endsWith: filterFn_endsWith,
  equals: filterFn_equals,
  equalsString: filterFn_equalsString,
  equalsStringSensitive: filterFn_equalsStringSensitive,
  inDateRange: filterFn_inDateRange,
  inNumberRange: filterFn_inNumberRange,
  includesString: filterFn_includesString,
  includesStringSensitive: filterFn_includesStringSensitive,
  notEmpty: filterFn_notEmpty,
  startsWith: filterFn_startsWith,
  weakEquals: filterFn_weakEquals
};
function testFalsy(val) {
  return val === void 0 || val === null || val === "";
}
function testValueEmpty(dataValue) {
  return dataValue == null || String(dataValue).trim() === "";
}
function toDateTimestamp(value) {
  if (value instanceof Date) return value.getTime();
  if (typeof value === "number") return value;
  if (value == null || value === "") return NaN;
  return new Date(value).getTime();
}
function compareGreaterThan(dataValue, filterValue) {
  const numericDataValue = dataValue == null ? 0 : +dataValue;
  const numericFilterValue = Number(filterValue);
  if (!isNaN(numericFilterValue) && !isNaN(numericDataValue)) return numericDataValue > numericFilterValue;
  return String(dataValue ?? "").toLowerCase().trim() > String(filterValue).toLowerCase().trim();
}
function compareGreaterThanOrEqualTo(dataValue, filterValue) {
  return dataValue === filterValue || compareGreaterThan(dataValue, filterValue);
}
function compareBetween(dataValue, filterValues, inclusive) {
  const min2 = filterValues[0];
  const hasMin = min2 !== "" && min2 !== void 0;
  if (hasMin) {
    if (!(inclusive ? compareGreaterThanOrEqualTo(dataValue, min2) : compareGreaterThan(dataValue, min2))) return false;
  }
  const max2 = filterValues[1];
  if (max2 === "" || max2 === void 0) return true;
  if (hasMin) {
    const numericMin = Number(min2);
    const numericMax = Number(max2);
    if (!isNaN(numericMin) && !isNaN(numericMax) && numericMin > numericMax) return true;
  }
  return inclusive ? !compareGreaterThan(dataValue, max2) : !compareGreaterThanOrEqualTo(dataValue, max2);
}
function column_getCanGlobalFilter(column) {
  return (column.columnDef.enableGlobalFilter ?? true) && (column.table.options.enableGlobalFilter ?? true) && (column.table.options.enableFilters ?? true) && (column.table.options.getColumnCanGlobalFilter?.(column) ?? true) && !!column.accessorFn;
}
function table_getGlobalAutoFilterFn() {
  return filterFn_includesString;
}
function table_getGlobalFilterFn(table) {
  const { globalFilterFn } = table.options;
  const filterFns2 = table._rowModelFns.filterFns;
  const filterFn = isFunction(globalFilterFn) ? globalFilterFn : globalFilterFn === "auto" ? table_getGlobalAutoFilterFn() : filterFns2?.[globalFilterFn];
  return filterFn;
}
function table_setGlobalFilter(table, updater) {
  table.options.onGlobalFilterChange?.(updater);
}
function table_resetGlobalFilter(table, defaultState) {
  table_setGlobalFilter(table, defaultState ? void 0 : cloneState(table.initialState.globalFilter));
}
const globalFilteringFeature = {
  getInitialState: (initialState) => {
    return {
      globalFilter: void 0,
      ...initialState
    };
  },
  getDefaultTableOptions: (table) => {
    return {
      onGlobalFilterChange: makeStateUpdater("globalFilter", table),
      globalFilterFn: "auto",
      getColumnCanGlobalFilter: (column) => {
        if ("enableGlobalFilter" in column.columnDef && column.columnDef.enableGlobalFilter === true) return true;
        const value = table.getCoreRowModel().flatRows.find((row) => row.getAllCellsByColumnId()[column.id]?.getValue() != null)?.getAllCellsByColumnId()[column.id]?.getValue();
        return typeof value === "string" || typeof value === "number";
      }
    };
  },
  assignColumnPrototype: (prototype, table) => {
    assignPrototypeAPIs("globalFilteringFeature", prototype, table, { column_getCanGlobalFilter: { fn: (column) => column_getCanGlobalFilter(column) } });
  },
  constructTableAPIs: (table) => {
    assignTableAPIs("globalFilteringFeature", table, {
      table_getGlobalAutoFilterFn: { fn: () => table_getGlobalAutoFilterFn() },
      table_getGlobalFilterFn: { fn: () => table_getGlobalFilterFn(table) },
      table_setGlobalFilter: { fn: (updater) => table_setGlobalFilter(table, updater) },
      table_resetGlobalFilter: { fn: (defaultState) => table_resetGlobalFilter(table, defaultState) }
    });
  }
};
function getDefaultRowSelectionState() {
  return makeObjectMap();
}
function table_setRowSelection(table, updater) {
  table.options.onRowSelectionChange?.(updater);
}
function table_resetRowSelection(table, defaultState) {
  table._lastSelectedRowId = null;
  table_setRowSelection(table, defaultState ? makeObjectMap() : Object.assign(makeObjectMap(), cloneState(table.initialState.rowSelection ?? {})));
}
function table_toggleAllRowsSelected(table, value, opts) {
  table._lastSelectedRowId = null;
  table_setRowSelection(table, (old) => {
    value = typeof value !== "undefined" ? value : !callMemoOrStaticFn(table, "getIsAllRowsSelected", table_getIsAllRowsSelected);
    if (opts?.deselectAll && !value) return makeObjectMap();
    const rowSelection = Object.assign(makeObjectMap(), old);
    const preGroupedFlatRows = table.getPreGroupedRowModel().flatRows;
    if (value) {
      const subtreeCache = /* @__PURE__ */ new Map();
      preGroupedFlatRows.forEach((row) => {
        if (isRowSelectableInSelectAll(row, subtreeCache)) rowSelection[row.id] = true;
      });
    } else preGroupedFlatRows.forEach((row) => {
      if (row_getCanSelect(row)) delete rowSelection[row.id];
    });
    return rowSelection;
  });
}
function table_toggleAllPageRowsSelected(table, value, opts) {
  table._lastSelectedRowId = null;
  table_setRowSelection(table, (old) => {
    const resolvedValue = typeof value !== "undefined" ? value : !callMemoOrStaticFn(table, "getIsAllPageRowsSelected", table_getIsAllPageRowsSelected);
    if (opts?.deselectAll && !resolvedValue) return makeObjectMap();
    const rowSelection = Object.assign(makeObjectMap(), old);
    table.getRowModel().rows.forEach((row) => {
      mutateRowIsSelected(rowSelection, row.id, resolvedValue, true, table, true);
    });
    return rowSelection;
  });
}
function table_getPreSelectedRowModel(table) {
  return table.getCoreRowModel();
}
function table_getSelectedRowModel(table) {
  const rowModel = table.getCoreRowModel();
  if (!callMemoOrStaticFn(table, "getIsSomeRowsSelected", table_getIsSomeRowsSelected)) return {
    rows: [],
    flatRows: [],
    rowsById: makeObjectMap()
  };
  return selectRowsFn(rowModel, table);
}
function table_getFilteredSelectedRowModel(table) {
  const rowModel = table.getFilteredRowModel();
  if (!callMemoOrStaticFn(table, "getIsSomeRowsSelected", table_getIsSomeRowsSelected)) return {
    rows: [],
    flatRows: [],
    rowsById: makeObjectMap()
  };
  return selectRowsFn(rowModel, table);
}
function table_getGroupedSelectedRowModel(table) {
  const rowModel = table.getSortedRowModel();
  if (!callMemoOrStaticFn(table, "getIsSomeRowsSelected", table_getIsSomeRowsSelected)) return {
    rows: [],
    flatRows: [],
    rowsById: makeObjectMap()
  };
  return selectRowsFn(rowModel, table);
}
function table_getSelectedRowIds(table) {
  return Object.keys(table.atoms.rowSelection?.get() ?? {});
}
function table_getIsAllRowsSelected(table) {
  const preGroupedFlatRows = table.getFilteredRowModel().flatRows;
  const rowSelection = table.atoms.rowSelection?.get() ?? {};
  let isAllRowsSelected = Boolean(preGroupedFlatRows.length && Object.keys(rowSelection).length);
  if (isAllRowsSelected) {
    const subtreeCache = /* @__PURE__ */ new Map();
    if (preGroupedFlatRows.some((row) => !isRowSelected(row, rowSelection) && isRowSelectableInSelectAll(row, subtreeCache))) isAllRowsSelected = false;
  }
  return isAllRowsSelected;
}
function table_getIsAllPageRowsSelected(table) {
  const paginationFlatRows = table.getPaginatedRowModel().flatRows;
  const rowSelection = table.atoms.rowSelection?.get() ?? {};
  const subtreeCache = /* @__PURE__ */ new Map();
  let sawSelectableRow = false;
  for (let i = 0; i < paginationFlatRows.length; i++) {
    const row = paginationFlatRows[i];
    if (!isRowSelected(row, rowSelection)) {
      if (isRowSelectableInSelectAll(row, subtreeCache)) return false;
    } else if (!sawSelectableRow && isRowSelectableInSelectAll(row, subtreeCache)) sawSelectableRow = true;
  }
  return sawSelectableRow;
}
function table_getIsSomeRowsSelected(table) {
  return callMemoOrStaticFn(table, "getSelectedRowIds", table_getSelectedRowIds).length > 0;
}
function table_getIsSomePageRowsSelected(table) {
  return table.getPaginatedRowModel().flatRows.filter((row) => row_getCanSelect(row)).some((row) => row_getIsSelected(row) || callMemoOrStaticFn(row, "getIsSomeSelected", row_getIsSomeSelected));
}
function table_getToggleAllRowsSelectedHandler(table) {
  return (e) => {
    table_toggleAllRowsSelected(table, e.target.checked);
  };
}
function table_getToggleAllPageRowsSelectedHandler(table) {
  return (e) => {
    table_toggleAllPageRowsSelected(table, e.target.checked);
  };
}
function row_toggleSelected(row, value, opts) {
  const isSelected = row_getIsSelected(row);
  table_setRowSelection(row.table, (old) => {
    value = typeof value !== "undefined" ? value : !isSelected;
    const rowSelection = Object.assign(makeObjectMap(), old);
    mutateRowIsSelected(rowSelection, row.id, value, (opts?.selectChildren ?? true) && row_getCanMultiSelect(row), row.table);
    if (!value && opts?.deselectParents) pruneAncestorRowIds(rowSelection, row);
    return rowSelection;
  });
}
function row_getIsSelected(row) {
  return isRowSelected(row, row.table.atoms.rowSelection?.get() ?? {});
}
function row_getIsSomeSelected(row) {
  return isSubRowSelected(row) === "some";
}
function row_getIsAllSubRowsSelected(row) {
  return isSubRowSelected(row) === "all";
}
function row_getCanSelect(row) {
  const options2 = row.table.options;
  if (typeof options2.enableRowSelection === "function") return options2.enableRowSelection(row);
  return options2.enableRowSelection ?? true;
}
function row_getCanSelectSubRows(row) {
  const options2 = row.table.options;
  if (typeof options2.enableSubRowSelection === "function") return options2.enableSubRowSelection(row);
  return options2.enableSubRowSelection ?? true;
}
function row_getCanMultiSelect(row) {
  const options2 = row.table.options;
  if (typeof options2.enableMultiRowSelection === "function") return options2.enableMultiRowSelection(row);
  return options2.enableMultiRowSelection ?? true;
}
function row_getToggleSelectedHandler(row, opts) {
  const canSelect = row_getCanSelect(row);
  return (e) => {
    if (!canSelect) return;
    const event = e;
    const table = row.table;
    const checked = event.target.checked;
    const anchorId = table._lastSelectedRowId;
    if (!(table.options.enableRowRangeSelection !== false && anchorId !== null && row_getCanMultiSelect(row) && (table.options.isRowRangeSelectionEvent?.(e) ?? false)) || !selectRowRange(row, anchorId, checked, opts)) row_toggleSelected(row, checked, opts);
    table._lastSelectedRowId = row.id;
  };
}
function selectRowRange(row, anchorId, value, opts) {
  const includeChildren = opts?.selectChildren ?? true;
  const table = row.table;
  const rows = table.getRowsInDisplayOrder();
  const anchorRow = table.getPrePaginatedRowModel().rowsById[anchorId] ?? table.getCoreRowModel().rowsById[anchorId];
  if (!anchorRow) return false;
  const anchorIndex = anchorRow.getDisplayIndex();
  const rowIndex = row.getDisplayIndex();
  const anchorAtIndex = rows[anchorIndex];
  const rowAtIndex = rows[rowIndex];
  if (anchorIndex < 0 || rowIndex < 0 || anchorIndex >= rows.length || rowIndex >= rows.length || anchorAtIndex?.id !== anchorRow.id || rowAtIndex?.id !== row.id || !row_getCanMultiSelect(anchorRow) || !row_getCanMultiSelect(row)) return false;
  const start = Math.min(anchorIndex, rowIndex);
  const end = Math.max(anchorIndex, rowIndex);
  table_setRowSelection(table, (old) => {
    const rowSelection = Object.assign(makeObjectMap(), old);
    for (let index2 = start; index2 <= end; index2++) {
      const rangeRow = rows[index2];
      if (!row_getCanSelect(rangeRow) || !row_getCanMultiSelect(rangeRow)) continue;
      mutateRowIsSelected(rowSelection, rangeRow.id, value, includeChildren, table);
      if (!value && opts?.deselectParents) pruneAncestorRowIds(rowSelection, rangeRow);
    }
    return rowSelection;
  });
  return true;
}
function mutateRowIsSelected(rowSelection, rowId, value, includeChildren, table, respectCanSelectOnDeselect) {
  const row = table.getRow(rowId, true);
  if (value) {
    if (!row_getCanMultiSelect(row)) Object.keys(rowSelection).forEach((key) => delete rowSelection[key]);
    if (row_getCanSelect(row)) rowSelection[rowId] = true;
  } else if (!respectCanSelectOnDeselect || row_getCanSelect(row)) delete rowSelection[rowId];
  if (includeChildren && row.subRows.length && row_getCanSelectSubRows(row)) row.subRows.forEach((r2) => mutateRowIsSelected(rowSelection, r2.id, value, includeChildren, table, respectCanSelectOnDeselect));
}
function isRowSelectableInSelectAll(row, subtreeCache) {
  if (!row_getCanSelect(row)) return false;
  const table = row.table;
  if (table.options.enableSubRowSelection === true) return true;
  const parentId = row.parentId;
  if (parentId === void 0) return true;
  const cached = subtreeCache.get(parentId);
  if (cached !== void 0) return cached;
  const rowsById = table.getCoreRowModel().rowsById;
  const visited = [];
  let selectable = true;
  let currentId = parentId;
  while (currentId !== void 0) {
    const known = subtreeCache.get(currentId);
    if (known !== void 0) {
      selectable = known;
      break;
    }
    visited.push(currentId);
    const parent = rowsById[currentId] ?? table.getRow(currentId, true);
    if (!row_getCanSelectSubRows(parent)) {
      selectable = false;
      break;
    }
    currentId = parent.parentId;
  }
  visited.forEach((id) => subtreeCache.set(id, selectable));
  return selectable;
}
function pruneAncestorRowIds(rowSelection, row) {
  const rowsById = row.table.getCoreRowModel().rowsById;
  let parentId = row.parentId;
  while (parentId !== void 0) {
    delete rowSelection[parentId];
    parentId = (rowsById[parentId] ?? row.table.getRow(parentId, true)).parentId;
  }
}
function selectRowsRecursively(rows, rowSelection, selectedFlatRows, selectedRowsById) {
  const result = [];
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const isSelected = isRowSelected(row, rowSelection);
    if (isSelected) {
      selectedFlatRows.push(row);
      selectedRowsById[row.id] = row;
    }
    if (row.subRows.length) {
      const newSubRows = selectRowsRecursively(row.subRows, rowSelection, selectedFlatRows, selectedRowsById);
      if (isSelected) {
        const cloned = Object.create(Object.getPrototypeOf(row));
        copyInstancePropertiesWithoutMemos(cloned, row);
        cloned.subRows = newSubRows;
        result.push(cloned);
      }
    } else if (isSelected) result.push(row);
  }
  return result;
}
function selectRowsFn(rowModel, table) {
  const newSelectedFlatRows = [];
  const newSelectedRowsById = makeObjectMap();
  const rowSelection = table.atoms.rowSelection?.get() ?? {};
  return {
    rows: selectRowsRecursively(rowModel.rows, rowSelection, newSelectedFlatRows, newSelectedRowsById),
    flatRows: newSelectedFlatRows,
    rowsById: newSelectedRowsById
  };
}
function isRowSelected(row, rowSelection) {
  return !!(hasOwn(rowSelection, row.id) && rowSelection[row.id]);
}
function isSubRowSelected(row) {
  if (!row.subRows.length) return false;
  const rowSelection = row.table.atoms.rowSelection?.get() ?? {};
  let someSelected = false;
  let allChildrenSelected = true;
  let someSelectable = false;
  for (let i = 0; i < row.subRows.length; i++) {
    const subRow = row.subRows[i];
    if (someSelected && !allChildrenSelected) break;
    if (row_getCanSelect(subRow)) {
      someSelectable = true;
      if (isRowSelected(subRow, rowSelection)) someSelected = true;
      else allChildrenSelected = false;
    }
    if (subRow.subRows.length) {
      const subRowChildrenSelected = isSubRowSelected(subRow);
      if (subRowChildrenSelected === "all") {
        someSelected = true;
        someSelectable = true;
      } else if (subRowChildrenSelected === "some") {
        someSelected = true;
        allChildrenSelected = false;
        someSelectable = true;
      } else allChildrenSelected = false;
    }
  }
  if (!someSelectable) return false;
  return allChildrenSelected ? "all" : someSelected ? "some" : false;
}
const rowSelectionFeature = {
  initTableInstanceData: (table) => {
    table._lastSelectedRowId = null;
  },
  resetTableInstanceData: (table) => {
    table._lastSelectedRowId = null;
  },
  getInitialState: (initialState) => {
    return {
      rowSelection: getDefaultRowSelectionState(),
      ...initialState
    };
  },
  getDefaultTableOptions: (table) => {
    return {
      onRowSelectionChange: makeStateUpdater("rowSelection", table),
      enableRowSelection: true,
      enableMultiRowSelection: true,
      enableRowRangeSelection: true,
      enableSubRowSelection: true,
      isRowRangeSelectionEvent: (event) => {
        const rangeEvent = event;
        return Boolean(rangeEvent.shiftKey || rangeEvent.nativeEvent?.shiftKey);
      }
    };
  },
  assignRowPrototype: (prototype, table) => {
    assignPrototypeAPIs("rowSelectionFeature", prototype, table, {
      row_toggleSelected: { fn: (row, value, opts) => row_toggleSelected(row, value, opts) },
      row_getIsSelected: { fn: (row) => row_getIsSelected(row) },
      row_getIsSomeSelected: {
        fn: (row) => row_getIsSomeSelected(row),
        memoDeps: (row) => [
          row.subRows,
          row.table.atoms.rowSelection?.get(),
          row.table.options.enableRowSelection
        ]
      },
      row_getIsAllSubRowsSelected: {
        fn: (row) => row_getIsAllSubRowsSelected(row),
        memoDeps: (row) => [
          row.subRows,
          row.table.atoms.rowSelection?.get(),
          row.table.options.enableRowSelection
        ]
      },
      row_getCanSelect: { fn: (row) => row_getCanSelect(row) },
      row_getCanSelectSubRows: { fn: (row) => row_getCanSelectSubRows(row) },
      row_getCanMultiSelect: { fn: (row) => row_getCanMultiSelect(row) },
      row_getToggleSelectedHandler: { fn: (row, opts) => row_getToggleSelectedHandler(row, opts) }
    });
  },
  constructTableAPIs: (table) => {
    assignTableAPIs("rowSelectionFeature", table, {
      table_setRowSelection: { fn: (updater) => table_setRowSelection(table, updater) },
      table_resetRowSelection: { fn: (defaultState) => table_resetRowSelection(table, defaultState) },
      table_toggleAllRowsSelected: { fn: (value, opts) => table_toggleAllRowsSelected(table, value, opts) },
      table_toggleAllPageRowsSelected: { fn: (value, opts) => table_toggleAllPageRowsSelected(table, value, opts) },
      table_getPreSelectedRowModel: { fn: () => table_getPreSelectedRowModel(table) },
      table_getSelectedRowModel: {
        fn: () => table_getSelectedRowModel(table),
        memoDeps: () => [table.atoms.rowSelection?.get(), table.getCoreRowModel()]
      },
      table_getFilteredSelectedRowModel: {
        fn: () => table_getFilteredSelectedRowModel(table),
        memoDeps: () => [table.atoms.rowSelection?.get(), table.getFilteredRowModel()]
      },
      table_getGroupedSelectedRowModel: {
        fn: () => table_getGroupedSelectedRowModel(table),
        memoDeps: () => [table.atoms.rowSelection?.get(), table.getSortedRowModel()]
      },
      table_getSelectedRowIds: {
        fn: () => table_getSelectedRowIds(table),
        memoDeps: () => [table.atoms.rowSelection?.get()]
      },
      table_getIsAllRowsSelected: {
        fn: () => table_getIsAllRowsSelected(table),
        memoDeps: () => [
          table.atoms.rowSelection?.get(),
          table.getFilteredRowModel(),
          table.options.enableRowSelection,
          table.options.enableSubRowSelection
        ]
      },
      table_getIsAllPageRowsSelected: {
        fn: () => table_getIsAllPageRowsSelected(table),
        memoDeps: () => [
          table.atoms.rowSelection?.get(),
          table.getPaginatedRowModel(),
          table.options.enableRowSelection,
          table.options.enableSubRowSelection
        ]
      },
      table_getIsSomeRowsSelected: {
        fn: () => table_getIsSomeRowsSelected(table),
        memoDeps: () => [table.atoms.rowSelection?.get()]
      },
      table_getIsSomePageRowsSelected: {
        fn: () => table_getIsSomePageRowsSelected(table),
        memoDeps: () => [
          table.atoms.rowSelection?.get(),
          table.getPaginatedRowModel(),
          table.options.enableRowSelection
        ]
      },
      table_getToggleAllRowsSelectedHandler: { fn: () => table_getToggleAllRowsSelectedHandler(table) },
      table_getToggleAllPageRowsSelectedHandler: { fn: () => table_getToggleAllPageRowsSelectedHandler(table) }
    });
  }
};
const rowSortingFeature = {
  getInitialState(initialState) {
    return {
      sorting: getDefaultSortingState(),
      ...initialState
    };
  },
  getDefaultColumnDef() {
    return {
      sortFn: "auto",
      sortUndefined: 1
    };
  },
  getDefaultTableOptions(table) {
    return {
      autoResetSorting: false,
      onSortingChange: makeStateUpdater("sorting", table),
      isMultiSortEvent: (e) => {
        return e.shiftKey;
      }
    };
  },
  assignColumnPrototype(prototype, table) {
    assignPrototypeAPIs("rowSortingFeature", prototype, table, {
      column_getAutoSortFn: { fn: (column) => column_getAutoSortFn(column) },
      column_getAutoSortDir: { fn: (column) => column_getAutoSortDir(column) },
      column_getSortFn: { fn: (column) => column_getSortFn(column) },
      column_toggleSorting: { fn: (column, desc, multi) => column_toggleSorting(column, desc, multi) },
      column_getFirstSortDir: { fn: (column) => column_getFirstSortDir(column) },
      column_getNextSortingOrder: { fn: (column, multi) => column_getNextSortingOrder(column, multi) },
      column_getCanSort: { fn: (column) => column_getCanSort(column) },
      column_getCanMultiSort: { fn: (column) => column_getCanMultiSort(column) },
      column_getIsSorted: { fn: (column) => column_getIsSorted(column) },
      column_getSortIndex: { fn: (column) => column_getSortIndex(column) },
      column_clearSorting: { fn: (column) => column_clearSorting(column) },
      column_getToggleSortingHandler: { fn: (column) => column_getToggleSortingHandler(column) }
    });
  },
  constructTableAPIs(table) {
    assignTableAPIs("rowSortingFeature", table, {
      table_setSorting: { fn: (updater) => table_setSorting(table, updater) },
      table_resetSorting: { fn: (defaultState) => table_resetSorting(table, defaultState) }
    });
  }
};
function filterRows(rows, filterRowImpl, table) {
  if (table.options.filterFromLeafRows) return filterRowModelFromLeafs(rows, filterRowImpl, table);
  return filterRowModelFromRoot(rows, filterRowImpl, table);
}
function filterRowModelFromLeafs(rowsToFilter, filterRow, table) {
  const newFilteredFlatRows = [];
  const newFilteredRowsById = makeObjectMap();
  const maxDepth = table.options.maxLeafRowFilterDepth ?? 100;
  const recurseFilterRows = (rowsToFilter2, depth = 0) => {
    const filteredRows = [];
    for (const row of rowsToFilter2) {
      const newRow = constructRow(table, row.id, row.original, row.index, row.depth, void 0, row.parentId);
      newRow.columnFilters = row.columnFilters;
      newRow.columnFiltersMeta = row.columnFiltersMeta;
      if (row.subRows.length && depth < maxDepth) {
        newRow.subRows = recurseFilterRows(row.subRows, depth + 1);
        if (newRow.subRows.length || filterRow(newRow)) filteredRows.push(newRow);
      } else if (filterRow(newRow)) {
        newRow.subRows = row.subRows;
        filteredRows.push(newRow);
      }
    }
    return filteredRows;
  };
  const rows = recurseFilterRows(rowsToFilter);
  addSubRowsToFlatArrays(rows, newFilteredFlatRows, newFilteredRowsById);
  return {
    rows,
    flatRows: newFilteredFlatRows,
    rowsById: newFilteredRowsById
  };
}
function filterRowModelFromRoot(rowsToFilter, filterRow, table) {
  const newFilteredFlatRows = [];
  const newFilteredRowsById = makeObjectMap();
  const maxDepth = table.options.maxLeafRowFilterDepth ?? 100;
  const recurseFilterRows = (rowsToFilter2, depth = 0) => {
    const filteredRows = [];
    for (const row of rowsToFilter2) if (filterRow(row)) if (row.subRows.length && depth < maxDepth) {
      const newRow = constructRow(table, row.id, row.original, row.index, row.depth, void 0, row.parentId);
      const filterData = row;
      newRow.columnFilters = filterData.columnFilters;
      newRow.columnFiltersMeta = filterData.columnFiltersMeta;
      filteredRows.push(newRow);
      newFilteredFlatRows.push(newRow);
      newFilteredRowsById[newRow.id] = newRow;
      newRow.subRows = recurseFilterRows(row.subRows, depth + 1);
    } else {
      filteredRows.push(row);
      newFilteredFlatRows.push(row);
      newFilteredRowsById[row.id] = row;
      if (row.subRows.length && depth >= maxDepth) addSubRowsToFlatArrays(row.subRows, newFilteredFlatRows, newFilteredRowsById);
    }
    return filteredRows;
  };
  return {
    rows: recurseFilterRows(rowsToFilter),
    flatRows: newFilteredFlatRows,
    rowsById: newFilteredRowsById
  };
}
function addSubRowsToFlatArrays(subRows, flatRows, rowsById) {
  for (const subRow of subRows) {
    flatRows.push(subRow);
    rowsById[subRow.id] = subRow;
    if (subRow.subRows.length) addSubRowsToFlatArrays(subRow.subRows, flatRows, rowsById);
  }
}
function createFilteredRowModel() {
  return (_table) => {
    const table = _table;
    return tableMemo({
      feature: "columnFilteringFeature",
      table,
      fnName: "table.getFilteredRowModel",
      memoDeps: () => [
        table.getPreFilteredRowModel(),
        table.atoms.columnFilters?.get(),
        table.atoms.globalFilter?.get()
      ],
      fn: () => _createFilteredRowModel(table),
      onAfterUpdate: skipFirstRun(() => table_autoResetPageIndex(table))
    });
  };
}
function _createFilteredRowModel(table) {
  const rowModel = table.getPreFilteredRowModel();
  const columnFilters = table.atoms.columnFilters?.get();
  const globalFilter = table.atoms.globalFilter?.get();
  const hasGlobalFilter = globalFilter !== void 0 && globalFilter !== null && globalFilter !== "";
  if (!rowModel.rows.length || !columnFilters?.length && !hasGlobalFilter) {
    const flatRows2 = rowModel.flatRows;
    for (let i = 0; i < flatRows2.length; i++) {
      const row = flatRows2[i];
      row.columnFilters = makeObjectMap();
      row.columnFiltersMeta = makeObjectMap();
    }
    return rowModel;
  }
  const resolvedColumnFilters = [];
  const resolvedGlobalFilters = [];
  columnFilters?.forEach((columnFilter) => {
    const column = table_getColumn(table, columnFilter.id);
    if (!column) return;
    const filterFn = column_getFilterFn(column);
    if (!filterFn) return;
    resolvedColumnFilters.push({
      id: columnFilter.id,
      filterFn,
      resolvedValue: filterFn.resolveFilterValue?.(columnFilter.value) ?? columnFilter.value
    });
  });
  const filterableIds = columnFilters?.map((d) => d.id) ?? [];
  const globalFilterFn = table_getGlobalFilterFn(table);
  const globallyFilterableColumns = table.getAllLeafColumns().filter((column) => column_getCanGlobalFilter(column));
  if (hasGlobalFilter && globalFilterFn && globallyFilterableColumns.length) {
    filterableIds.push("__global__");
    globallyFilterableColumns.forEach((column) => {
      resolvedGlobalFilters.push({
        id: column.id,
        filterFn: globalFilterFn,
        resolvedValue: globalFilterFn.resolveFilterValue?.(globalFilter) ?? globalFilter
      });
    });
  }
  const flatRows = rowModel.flatRows;
  for (let i = 0; i < flatRows.length; i++) {
    const row = flatRows[i];
    row.columnFilters = makeObjectMap();
    row.columnFiltersMeta = makeObjectMap();
    if (resolvedColumnFilters.length) for (let j = 0; j < resolvedColumnFilters.length; j++) {
      const currentColumnFilter = resolvedColumnFilters[j];
      const id = currentColumnFilter.id;
      row.columnFilters[id] = currentColumnFilter.filterFn(row, id, currentColumnFilter.resolvedValue, (filterMeta) => {
        if (!row.columnFiltersMeta) row.columnFiltersMeta = makeObjectMap();
        row.columnFiltersMeta[id] = filterMeta;
      });
    }
    if (resolvedGlobalFilters.length) {
      for (let j = 0; j < resolvedGlobalFilters.length; j++) {
        const currentGlobalFilter = resolvedGlobalFilters[j];
        const id = currentGlobalFilter.id;
        if (currentGlobalFilter.filterFn(row, id, currentGlobalFilter.resolvedValue, (filterMeta) => {
          if (!row.columnFiltersMeta) row.columnFiltersMeta = makeObjectMap();
          row.columnFiltersMeta[id] = filterMeta;
        })) {
          row.columnFilters.__global__ = true;
          break;
        }
      }
      if (row.columnFilters.__global__ !== true) row.columnFilters.__global__ = false;
    }
  }
  const filterRowsImpl = (row) => {
    for (let i = 0; i < filterableIds.length; i++) if (row.columnFilters[filterableIds[i]] === false) return false;
    return true;
  };
  return filterRows(rowModel.rows, filterRowsImpl, table);
}
function createSortedRowModel() {
  return (_table) => {
    const table = _table;
    return tableMemo({
      feature: "rowSortingFeature",
      table,
      fnName: "table.getSortedRowModel",
      memoDeps: () => [table.atoms.sorting?.get(), table.getPreSortedRowModel()],
      fn: () => _createSortedRowModel(table),
      onAfterUpdate: skipFirstRun(() => table_autoResetPageIndex(table))
    });
  };
}
function _createSortedRowModel(table) {
  const preSortedRowModel = table.getPreSortedRowModel();
  const sorting = table.atoms.sorting?.get();
  if (!preSortedRowModel.rows.length || !sorting?.length) return preSortedRowModel;
  const sortedFlatRows = [];
  const availableSorting = sorting.filter((sort) => {
    const column = table.getColumn(sort.id);
    return column ? column_getCanSort(column) : false;
  });
  if (!availableSorting.length) return preSortedRowModel;
  const resolvedSorting = [];
  for (let i = 0; i < availableSorting.length; i++) {
    const sortEntry = availableSorting[i];
    const column = table.getColumn(sortEntry.id);
    if (!column) continue;
    resolvedSorting.push({
      id: sortEntry.id,
      desc: sortEntry.desc,
      sortUndefined: column.columnDef.sortUndefined,
      invertSorting: column.columnDef.invertSorting,
      sortFn: column_getSortFn(column)
    });
  }
  const compareRows = (rowA, rowB) => {
    for (let i = 0; i < resolvedSorting.length; i++) {
      const sortEntry = resolvedSorting[i];
      const sortUndefined = sortEntry.sortUndefined;
      const isDesc = sortEntry.desc;
      let sortInt = 0;
      if (sortUndefined) {
        const aValue = rowA.getValue(sortEntry.id);
        const bValue = rowB.getValue(sortEntry.id);
        const aUndefined = aValue === void 0;
        const bUndefined = bValue === void 0;
        if (aUndefined && bUndefined) continue;
        if (aUndefined || bUndefined) {
          if (sortUndefined === "first") return aUndefined ? -1 : 1;
          if (sortUndefined === "last") return aUndefined ? 1 : -1;
          sortInt = aUndefined ? sortUndefined : -sortUndefined;
        }
      }
      if (sortInt === 0) sortInt = sortEntry.sortFn(rowA, rowB, sortEntry.id);
      if (sortInt !== 0) {
        if (isDesc) sortInt *= -1;
        if (sortEntry.invertSorting) sortInt *= -1;
        return sortInt;
      }
    }
    return rowA.index - rowB.index;
  };
  const sortData = (rows) => {
    const sortedData = rows.slice();
    sortedData.sort(compareRows);
    let changed = false;
    for (let i = 0; i < sortedData.length; i++) {
      const row = sortedData[i];
      if (row !== rows[i]) changed = true;
      const flatIndex = sortedFlatRows.length;
      sortedFlatRows.push(row);
      if (row.subRows.length) {
        const sortedSubRows = sortData(row.subRows);
        if (sortedSubRows.changed) {
          const cloned = Object.create(Object.getPrototypeOf(row));
          copyInstancePropertiesWithoutMemos(cloned, row);
          cloned.subRows = sortedSubRows.rows;
          sortedData[i] = cloned;
          sortedFlatRows[flatIndex] = cloned;
          changed = true;
        }
      }
    }
    return {
      rows: sortedData,
      changed
    };
  };
  return {
    rows: sortData(preSortedRowModel.rows).rows,
    flatRows: sortedFlatRows,
    rowsById: preSortedRowModel.rowsById
  };
}
const useIsomorphicLayoutEffect$1 = reactExports.useEffect;
function useTable$1(tableOptions, selector) {
  const [{ table, rootSource }] = reactExports.useState(() => {
    const tableInstance = constructTable({
      ...tableOptions,
      features: {
        coreReactivityFeature: reactReactivity(),
        ...tableOptions.features
      }
    });
    tableInstance.Subscribe = ((props) => {
      return Subscribe({
        ...props,
        source: props.source ?? tableInstance.store
      });
    });
    tableInstance.FlexRender = FlexRender;
    return {
      table: tableInstance,
      rootSource: createRenderPhaseSource(tableInstance.store, shallow)
    };
  });
  const coreTable = table;
  table_setOptions(coreTable, (prev) => ({
    ...prev,
    ...tableOptions
  }), { syncExternalState: false });
  const controlledState = coreTable.options.state;
  const renderSnapshot = rootSource.get();
  const state = useSelector(rootSource, selector, { compare: shallow });
  useIsomorphicLayoutEffect$1(() => {
    rootSource.markCommitted(renderSnapshot);
    table_publishExternalState(coreTable, controlledState ?? null, shallow);
  });
  return reactExports.useMemo(() => ({
    ...table,
    options: tableOptions,
    state
  }), [
    table,
    tableOptions,
    state
  ]);
}
const marbleTableFeatures = tableFeatures({
  columnFilteringFeature,
  globalFilteringFeature,
  columnOrderingFeature,
  columnPinningFeature,
  columnSizingFeature,
  columnResizingFeature,
  columnVisibilityFeature,
  rowSelectionFeature,
  rowSortingFeature,
  filteredRowModel: createFilteredRowModel(),
  sortedRowModel: createSortedRowModel(),
  filterFns,
  sortFns
});
function createLazyMeasurementsView(count2, flat, getItemKey) {
  const cache = new Array(count2);
  return new Proxy(cache, {
    get(target, prop, receiver) {
      if (typeof prop === "string") {
        const c = prop.charCodeAt(0);
        if (c >= 48 && c <= 57) {
          const i = +prop;
          if (Number.isInteger(i) && i >= 0 && i < count2) {
            let v = target[i];
            if (!v) {
              const s = flat[i * 2];
              v = target[i] = {
                index: i,
                key: getItemKey(i),
                start: s,
                size: flat[i * 2 + 1],
                end: s + flat[i * 2 + 1],
                lane: 0
              };
            }
            return v;
          }
        }
        if (prop === "length") return count2;
      }
      return Reflect.get(target, prop, receiver);
    }
  });
}
function memo(getDeps, fn, opts) {
  let deps = opts.initialDeps ?? [];
  let result;
  let isInitial = true;
  function memoizedFunction() {
    const newDeps = getDeps();
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index2) => deps[index2] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    result = fn(...newDeps);
    if ((opts == null ? void 0 : opts.onChange) && !(isInitial && opts.skipInitialOnChange)) {
      opts.onChange(result);
    }
    isInitial = false;
    return result;
  }
  memoizedFunction.updateDeps = (newDeps) => {
    deps = newDeps;
  };
  return memoizedFunction;
}
function notUndefined(value, msg) {
  if (value === void 0) {
    throw new Error(`Unexpected undefined${""}`);
  } else {
    return value;
  }
}
const approxEqual = (a, b) => Math.abs(a - b) < 1.01;
const debounce = (targetWindow, fn, ms) => {
  let timeoutId;
  return Object.assign(
    function(...args) {
      targetWindow.clearTimeout(timeoutId);
      timeoutId = targetWindow.setTimeout(() => fn.apply(this, args), ms);
    },
    {
      // The handle is closure-local, so a caller that has already
      // unsubscribed has no way to stop a queued call. Teardown paths use
      // this to drop the pending invocation instead of letting it land.
      cancel: () => {
        targetWindow.clearTimeout(timeoutId);
      }
    }
  );
};
let _isIOSResult;
const isIOSWebKit = () => {
  if (_isIOSResult !== void 0) return _isIOSResult;
  if (typeof navigator === "undefined") return _isIOSResult = false;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return _isIOSResult = true;
  const mtp = navigator.maxTouchPoints;
  return _isIOSResult = navigator.platform === "MacIntel" && mtp !== void 0 && mtp > 0;
};
const getRect = (element) => {
  const { offsetWidth, offsetHeight } = element;
  return { width: offsetWidth, height: offsetHeight };
};
const defaultKeyExtractor = (index2) => index2;
const defaultRangeExtractor = (range) => {
  const start = Math.max(range.startIndex - range.overscan, 0);
  const end = Math.min(range.endIndex + range.overscan, range.count - 1);
  const len = end - start + 1;
  const arr = new Array(len);
  for (let i = 0; i < len; i++) {
    arr[i] = start + i;
  }
  return arr;
};
const observeElementRect = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  const handler = (rect) => {
    const { width, height } = rect;
    cb({ width: Math.round(width), height: Math.round(height) });
  };
  handler(getRect(element));
  if (!targetWindow.ResizeObserver) {
    return () => {
    };
  }
  const observer = new targetWindow.ResizeObserver((entries) => {
    const run = () => {
      const entry = entries[0];
      if (entry == null ? void 0 : entry.borderBoxSize) {
        const box = entry.borderBoxSize[0];
        if (box) {
          handler({ width: box.inlineSize, height: box.blockSize });
          return;
        }
      }
      handler(getRect(element));
    };
    instance.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
  });
  observer.observe(element, { box: "border-box" });
  return () => {
    observer.unobserve(element);
  };
};
const addEventListenerOptions = {
  passive: true
};
const supportsScrollend = true;
const observeOffset = (instance, cb, readOffset) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  const registerScrollendEvent = instance.options.useScrollendEvent && supportsScrollend;
  let offset2 = 0;
  const fallback = registerScrollendEvent ? null : debounce(
    targetWindow,
    () => cb(offset2, false),
    instance.options.isScrollingResetDelay
  );
  const createHandler = (isScrolling) => () => {
    offset2 = readOffset(element);
    fallback == null ? void 0 : fallback();
    cb(offset2, isScrolling);
  };
  const handler = createHandler(true);
  const endHandler = createHandler(false);
  element.addEventListener("scroll", handler, addEventListenerOptions);
  if (registerScrollendEvent) {
    element.addEventListener("scrollend", endHandler, addEventListenerOptions);
  }
  return () => {
    element.removeEventListener("scroll", handler);
    if (registerScrollendEvent) {
      element.removeEventListener("scrollend", endHandler);
    }
    fallback == null ? void 0 : fallback.cancel();
  };
};
const observeElementOffset = (instance, cb) => observeOffset(instance, cb, (el) => {
  const { horizontal, isRtl } = instance.options;
  return horizontal ? el.scrollLeft * (isRtl && -1 || 1) : el.scrollTop;
});
const measureElement = (element, entry, instance) => {
  if (instance.options.useCachedMeasurements) {
    const index2 = instance.indexFromElement(element);
    const key = instance.options.getItemKey(index2);
    return instance.itemSizeCache.get(key) ?? instance.options.estimateSize(index2);
  }
  if (entry == null ? void 0 : entry.borderBoxSize) {
    const box = entry.borderBoxSize[0];
    if (box) {
      const size2 = Math.round(
        box[instance.options.horizontal ? "inlineSize" : "blockSize"]
      );
      return size2;
    }
  }
  if (!entry) {
    const index2 = instance.indexFromElement(element);
    const key = instance.options.getItemKey(index2);
    const cachedSize = instance.itemSizeCache.get(key);
    if (cachedSize !== void 0) {
      return cachedSize;
    }
  }
  return element[instance.options.horizontal ? "offsetWidth" : "offsetHeight"];
};
const scrollWithAdjustments = (offset2, {
  adjustments = 0,
  behavior
}, instance) => {
  var _a2, _b;
  (_b = (_a2 = instance.scrollElement) == null ? void 0 : _a2.scrollTo) == null ? void 0 : _b.call(_a2, {
    [instance.options.horizontal ? "left" : "top"]: offset2 + adjustments,
    behavior
  });
};
const elementScroll = scrollWithAdjustments;
class Virtualizer {
  constructor(opts) {
    this.unsubs = [];
    this.scrollElement = null;
    this.targetWindow = null;
    this.isScrolling = false;
    this.scrollState = null;
    this.measurementsCache = [];
    this._flatMeasurements = null;
    this.itemSizeCache = /* @__PURE__ */ new Map();
    this.itemSizeCacheVersion = 0;
    this.laneAssignments = /* @__PURE__ */ new Map();
    this.pendingMin = null;
    this.prevLanes = void 0;
    this.lanesChangedFlag = false;
    this.lanesSettling = false;
    this.pendingScrollAnchor = null;
    this.scrollRect = null;
    this.scrollOffset = null;
    this.scrollDirection = null;
    this.scrollAdjustments = 0;
    this._iosDeferredAdjustment = 0;
    this._iosTouching = false;
    this._iosJustTouchEnded = false;
    this._iosTouchEndTimerId = null;
    this._intendedScrollOffset = null;
    this.elementsCache = /* @__PURE__ */ new Map();
    this.now = () => {
      var _a2, _b, _c;
      return ((_c = (_b = (_a2 = this.targetWindow) == null ? void 0 : _a2.performance) == null ? void 0 : _b.now) == null ? void 0 : _c.call(_b)) ?? Date.now();
    };
    this.observer = /* @__PURE__ */ (() => {
      let _ro = null;
      const get = () => {
        if (_ro) {
          return _ro;
        }
        if (!this.targetWindow || !this.targetWindow.ResizeObserver) {
          return null;
        }
        return _ro = new this.targetWindow.ResizeObserver((entries) => {
          entries.forEach((entry) => {
            const run = () => {
              const node = entry.target;
              const index2 = this.indexFromElement(node);
              if (!node.isConnected) {
                this.observer.unobserve(node);
                for (const [cacheKey, cachedNode] of this.elementsCache) {
                  if (cachedNode === node) {
                    this.elementsCache.delete(cacheKey);
                    break;
                  }
                }
                return;
              }
              if (!this.isIndexInRange(index2)) return;
              if (this.shouldMeasureDuringScroll(index2)) {
                this.resizeItem(
                  index2,
                  this.options.measureElement(node, entry, this)
                );
              }
            };
            this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
          });
        });
      };
      return {
        disconnect: () => {
          var _a2;
          (_a2 = get()) == null ? void 0 : _a2.disconnect();
          _ro = null;
        },
        observe: (target) => {
          var _a2;
          return (_a2 = get()) == null ? void 0 : _a2.observe(target, { box: "border-box" });
        },
        unobserve: (target) => {
          var _a2;
          return (_a2 = get()) == null ? void 0 : _a2.unobserve(target);
        }
      };
    })();
    this.range = null;
    this.setOptions = (opts2) => {
      var _a2, _b;
      const merged = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: defaultKeyExtractor,
        rangeExtractor: defaultRangeExtractor,
        onChange: () => {
        },
        measureElement,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        anchorTo: "start",
        followOnAppend: false,
        scrollEndThreshold: 1,
        isScrollingResetDelay: 150,
        enabled: true,
        isRtl: false,
        useScrollendEvent: false,
        useAnimationFrameWithResizeObserver: false,
        laneAssignmentMode: "estimate",
        useCachedMeasurements: false
      };
      for (const key in opts2) {
        const v = opts2[key];
        if (v !== void 0) merged[key] = v;
      }
      const prevOptions = this.options;
      let anchor = null;
      let followOnAppend = null;
      let edgeKeysChanged = false;
      if (prevOptions !== void 0 && prevOptions.enabled && merged.enabled && merged.anchorTo === "end" && this.scrollElement !== null) {
        const prevCount = prevOptions.count;
        const nextCount = merged.count;
        const measurements = this.getMeasurements();
        const prevFirstKey = prevCount > 0 ? ((_a2 = measurements[0]) == null ? void 0 : _a2.key) ?? prevOptions.getItemKey(0) : null;
        const prevLastKey = prevCount > 0 ? ((_b = measurements[prevCount - 1]) == null ? void 0 : _b.key) ?? prevOptions.getItemKey(prevCount - 1) : null;
        const didCountChange = nextCount !== prevCount;
        const didEdgeKeysChange = didCountChange || prevCount > 0 && nextCount > 0 && (merged.getItemKey(0) !== prevFirstKey || merged.getItemKey(nextCount - 1) !== prevLastKey);
        if (didEdgeKeysChange) {
          edgeKeysChanged = true;
          const item = prevCount > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? measurements[0] : null;
          if (item) {
            anchor = [item.key, this.getScrollOffset() - item.start];
          }
          const behavior = merged.followOnAppend === true ? "auto" : merged.followOnAppend || null;
          if (behavior && nextCount > prevCount && this.isAtEnd(prevOptions.scrollEndThreshold) && (prevCount === 0 || merged.getItemKey(nextCount - 1) !== prevLastKey)) {
            followOnAppend = behavior;
          }
        }
      }
      this.options = merged;
      if (edgeKeysChanged) {
        this.pendingMin = 0;
        this.itemSizeCacheVersion++;
      }
      let anchorResolved = false;
      let anchorDelta = 0;
      if (anchor && this.scrollOffset !== null) {
        const [anchorKey, anchorOffset] = anchor;
        const newMeasurements = this.getMeasurements();
        const { count: count2, getItemKey } = this.options;
        let idx = 0;
        while (idx < count2 && getItemKey(idx) !== anchorKey) {
          idx++;
        }
        if (idx < count2) {
          const anchorItem = newMeasurements[idx];
          if (anchorItem) {
            const newOffset = Math.max(0, anchorItem.start + anchorOffset);
            if (newOffset !== this.scrollOffset) {
              anchorDelta = newOffset - this.scrollOffset;
              this.scrollOffset = newOffset;
              anchorResolved = true;
            }
          }
        }
      }
      if (anchorResolved || followOnAppend) {
        this.pendingScrollAnchor = [
          anchorResolved ? anchor[0] : null,
          anchorResolved ? anchor[1] : 0,
          followOnAppend,
          anchorDelta
        ];
      }
    };
    this.notify = (sync) => {
      var _a2, _b;
      (_b = (_a2 = this.options).onChange) == null ? void 0 : _b.call(_a2, this, sync);
    };
    this.maybeNotify = memo(
      () => {
        this.calculateRange();
        return [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ];
      },
      (isScrolling) => {
        this.notify(isScrolling);
      },
      {
        key: false,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    );
    this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((d) => d());
      this.unsubs = [];
      this.observer.disconnect();
      if (this.rafId != null && this.targetWindow) {
        this.targetWindow.cancelAnimationFrame(this.rafId);
        this.rafId = null;
      }
      this.scrollState = null;
      this.isScrolling = false;
      this.scrollDirection = null;
      this._iosDeferredAdjustment = 0;
      this._iosTouching = false;
      this._iosJustTouchEnded = false;
      this.scrollElement = null;
      this.targetWindow = null;
    };
    this._didMount = () => {
      return () => {
        this.cleanup();
      };
    };
    this._willUpdate = () => {
      var _a2;
      const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== scrollElement) {
        this.cleanup();
        if (!scrollElement) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = scrollElement;
        if (this.scrollElement && "ownerDocument" in this.scrollElement) {
          this.targetWindow = this.scrollElement.ownerDocument.defaultView;
        } else {
          this.targetWindow = ((_a2 = this.scrollElement) == null ? void 0 : _a2.window) ?? null;
        }
        this.elementsCache.forEach((cached) => {
          this.observer.observe(cached);
        });
        this.unsubs.push(
          this.options.observeElementRect(this, (rect) => {
            this.scrollRect = rect;
            this.maybeNotify();
          })
        );
        this.unsubs.push(
          this.options.observeElementOffset(this, (offset2, isScrolling) => {
            if (isScrolling && this._intendedScrollOffset === null && offset2 === this.scrollOffset) {
              return;
            }
            if (this._intendedScrollOffset !== null && Math.abs(offset2 - this._intendedScrollOffset) < 1.5) {
              offset2 = this._intendedScrollOffset;
            }
            this._intendedScrollOffset = null;
            this.scrollAdjustments = 0;
            const prevOffset = this.getScrollOffset();
            this.scrollDirection = isScrolling ? prevOffset === offset2 ? this.scrollDirection : prevOffset < offset2 ? "forward" : "backward" : null;
            this.scrollOffset = offset2;
            this.isScrolling = isScrolling;
            this._flushIosDeferredIfReady();
            if (this.scrollState) {
              this.scheduleScrollReconcile();
            }
            this.maybeNotify();
          })
        );
        if ("addEventListener" in this.scrollElement) {
          const scrollEl = this.scrollElement;
          const onTouchStart = () => {
            this._iosTouching = true;
            this._iosJustTouchEnded = false;
            if (this._iosTouchEndTimerId !== null && this.targetWindow != null) {
              this.targetWindow.clearTimeout(this._iosTouchEndTimerId);
              this._iosTouchEndTimerId = null;
            }
          };
          const onTouchEnd = () => {
            this._iosTouching = false;
            if (!isIOSWebKit() || this.targetWindow == null) {
              return;
            }
            this._iosJustTouchEnded = true;
            this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = false;
              this._iosTouchEndTimerId = null;
              this._flushIosDeferredIfReady();
            }, 150);
          };
          scrollEl.addEventListener(
            "touchstart",
            onTouchStart,
            addEventListenerOptions
          );
          scrollEl.addEventListener(
            "touchend",
            onTouchEnd,
            addEventListenerOptions
          );
          this.unsubs.push(() => {
            scrollEl.removeEventListener("touchstart", onTouchStart);
            scrollEl.removeEventListener("touchend", onTouchEnd);
            if (this._iosTouchEndTimerId !== null && this.targetWindow != null) {
              this.targetWindow.clearTimeout(this._iosTouchEndTimerId);
              this._iosTouchEndTimerId = null;
            }
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const anchor = this.pendingScrollAnchor;
      this.pendingScrollAnchor = null;
      if (anchor && this.scrollElement && this.options.enabled) {
        const [key, _offset, followOnAppend, anchorDelta] = anchor;
        if (key !== null && !followOnAppend) {
          if (isIOSWebKit() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded)) {
            if (anchorDelta !== 0) {
              this._iosDeferredAdjustment += anchorDelta;
            }
          } else {
            this._scrollToOffset(this.getScrollOffset(), {
              adjustments: void 0,
              behavior: void 0
            });
          }
        }
        if (followOnAppend) {
          this.scrollToEnd({ behavior: followOnAppend });
        }
      }
    };
    this._flushIosDeferredIfReady = () => {
      if (this._iosDeferredAdjustment === 0) return;
      if (this.isScrolling) return;
      if (this._iosTouching) return;
      if (this._iosJustTouchEnded) return;
      const cur = this.getScrollOffset();
      const max2 = this.getMaxScrollOffset();
      if (cur < 0 || cur > max2) return;
      if (this._iosDeferredAdjustment < 0 && cur >= max2 - 1) {
        this._iosDeferredAdjustment = 0;
        return;
      }
      const delta = this._iosDeferredAdjustment;
      this._iosDeferredAdjustment = 0;
      this._scrollToOffset(cur, {
        adjustments: this.scrollAdjustments += delta,
        behavior: void 0
      });
    };
    this.rafId = null;
    this.getSize = () => {
      if (!this.options.enabled) {
        this.scrollRect = null;
        return 0;
      }
      this.scrollRect = this.scrollRect ?? this.options.initialRect;
      return this.scrollRect[this.options.horizontal ? "width" : "height"];
    };
    this.getScrollOffset = () => {
      if (!this.options.enabled) {
        this.scrollOffset = null;
        return 0;
      }
      this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset);
      return this.scrollOffset;
    };
    this.getMeasurementOptions = memo(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes,
        this.options.laneAssignmentMode,
        this.options.gap
      ],
      (count2, paddingStart, scrollMargin, getItemKey, enabled, lanes, laneAssignmentMode, gap) => {
        const lanesChanged = this.prevLanes !== void 0 && this.prevLanes !== lanes;
        if (lanesChanged) {
          this.lanesChangedFlag = true;
        }
        this.prevLanes = lanes;
        this.pendingMin = null;
        return {
          count: count2,
          paddingStart,
          scrollMargin,
          getItemKey,
          enabled,
          lanes,
          laneAssignmentMode,
          gap
        };
      },
      {
        key: false
      }
    );
    this.isIndexInRange = (index2) => index2 >= 0 && index2 < this.options.count;
    this.getMeasurements = memo(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: count2,
        paddingStart,
        scrollMargin,
        getItemKey,
        enabled,
        lanes,
        laneAssignmentMode,
        gap
      }, _itemSizeCacheVersion) => {
        const itemSizeCache = this.itemSizeCache;
        if (!enabled) {
          this.measurementsCache = [];
          this.itemSizeCache.clear();
          this.laneAssignments.clear();
          return [];
        }
        if (this.laneAssignments.size > count2) {
          for (const index2 of this.laneAssignments.keys()) {
            if (index2 >= count2) {
              this.laneAssignments.delete(index2);
            }
          }
        }
        if (this.lanesChangedFlag) {
          this.lanesChangedFlag = false;
          this.lanesSettling = true;
          this.measurementsCache = [];
          this.itemSizeCache.clear();
          this.laneAssignments.clear();
          this.pendingMin = null;
        }
        if (this.measurementsCache.length === 0 && !this.lanesSettling) {
          this.measurementsCache = this.options.initialMeasurementsCache;
          this.measurementsCache.forEach((item) => {
            this.itemSizeCache.set(item.key, item.size);
          });
        }
        const min2 = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        this.pendingMin = null;
        if (this.lanesSettling && this.measurementsCache.length === count2) {
          this.lanesSettling = false;
        }
        if (lanes === 1) {
          const need = count2 * 2;
          let flat = this._flatMeasurements;
          if (!flat || flat.length < need) {
            const next = new Float64Array(need);
            if (flat && min2 > 0) next.set(flat.subarray(0, min2 * 2));
            flat = next;
            this._flatMeasurements = flat;
          }
          let runningStart;
          if (min2 === 0) {
            runningStart = paddingStart + scrollMargin;
          } else {
            const prevIdx = min2 - 1;
            runningStart = flat[prevIdx * 2] + flat[prevIdx * 2 + 1] + gap;
          }
          for (let i = min2; i < count2; i++) {
            const key = getItemKey(i);
            const measuredSize = itemSizeCache.get(key);
            const size2 = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i);
            flat[i * 2] = runningStart;
            flat[i * 2 + 1] = size2;
            runningStart += size2 + gap;
          }
          const view = createLazyMeasurementsView(count2, flat, getItemKey);
          this.measurementsCache = view;
          return view;
        }
        const measurements = this.measurementsCache.slice(0, min2);
        const laneLastIndex = new Array(lanes).fill(
          void 0
        );
        const laneEnds = new Float64Array(lanes);
        let filledLanes = 0;
        for (let m2 = 0; m2 < min2; m2++) {
          const item = measurements[m2];
          if (item) {
            if (laneLastIndex[item.lane] === void 0) filledLanes++;
            laneLastIndex[item.lane] = m2;
            laneEnds[item.lane] = item.end;
          }
        }
        for (let i = min2; i < count2; i++) {
          const key = getItemKey(i);
          const cachedLane = this.laneAssignments.get(i);
          let lane;
          let start;
          const shouldCacheLane = laneAssignmentMode === "estimate" || itemSizeCache.has(key);
          if (cachedLane !== void 0 && this.options.lanes > 1) {
            lane = cachedLane;
            const prevIndex = laneLastIndex[lane];
            const prevInLane = prevIndex !== void 0 ? measurements[prevIndex] : void 0;
            start = prevInLane ? prevInLane.end + gap : paddingStart + scrollMargin;
          } else if (filledLanes === lanes) {
            let bestLane = 0;
            let bestEnd = laneEnds[0];
            let bestIdx = laneLastIndex[0];
            for (let l = 1; l < lanes; l++) {
              const e = laneEnds[l];
              if (e < bestEnd || e === bestEnd && laneLastIndex[l] < bestIdx) {
                bestLane = l;
                bestEnd = e;
                bestIdx = laneLastIndex[l];
              }
            }
            lane = bestLane;
            start = bestEnd + gap;
            if (shouldCacheLane) {
              this.laneAssignments.set(i, lane);
            }
          } else {
            lane = i % this.options.lanes;
            start = paddingStart + scrollMargin;
            if (shouldCacheLane) {
              this.laneAssignments.set(i, lane);
            }
          }
          const measuredSize = itemSizeCache.get(key);
          const size2 = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i);
          const end = start + size2;
          measurements[i] = {
            index: i,
            start,
            size: size2,
            end,
            key,
            lane
          };
          if (laneLastIndex[lane] === void 0) filledLanes++;
          laneLastIndex[lane] = i;
          laneEnds[lane] = end;
        }
        this.measurementsCache = measurements;
        return measurements;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.calculateRange = memo(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (measurements, outerSize, scrollOffset, lanes) => {
        if (measurements.length === 0 || outerSize === 0) {
          this.range = null;
          return null;
        }
        this.range = calculateRangeImpl(
          measurements,
          outerSize,
          scrollOffset,
          lanes,
          // Pass the typed array so binary search + forward-walk can read
          // start/end directly from Float64Array, skipping the Proxy traps.
          lanes === 1 && this._flatMeasurements != null ? this._flatMeasurements : null
        );
        return this.range;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.getVirtualIndexes = memo(
      () => {
        let startIndex = null;
        let endIndex = null;
        const range = this.calculateRange();
        if (range) {
          startIndex = range.startIndex;
          endIndex = range.endIndex;
        }
        this.maybeNotify.updateDeps([this.isScrolling, startIndex, endIndex]);
        return [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          startIndex,
          endIndex
        ];
      },
      (rangeExtractor, overscan, count2, startIndex, endIndex) => {
        return startIndex === null || endIndex === null ? [] : rangeExtractor({
          startIndex,
          endIndex,
          overscan,
          count: count2
        });
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.indexFromElement = (node) => {
      const attributeName = this.options.indexAttribute;
      const indexStr = node.getAttribute(attributeName);
      if (!indexStr) {
        console.warn(
          `Missing attribute name '${attributeName}={index}' on measured element.`
        );
        return -1;
      }
      return parseInt(indexStr, 10);
    };
    this.shouldMeasureDuringScroll = (index2) => {
      var _a2;
      if (!this.scrollState || this.scrollState.behavior !== "smooth") {
        return true;
      }
      const scrollIndex = this.scrollState.index ?? ((_a2 = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : _a2.index);
      if (scrollIndex !== void 0 && this.range) {
        const bufferSize = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        );
        const minIndex = Math.max(0, scrollIndex - bufferSize);
        const maxIndex = Math.min(
          this.options.count - 1,
          scrollIndex + bufferSize
        );
        return index2 >= minIndex && index2 <= maxIndex;
      }
      return true;
    };
    this.measureElement = (node) => {
      if (!node) {
        this.elementsCache.forEach((cached, key2) => {
          if (!cached.isConnected) {
            this.observer.unobserve(cached);
            this.elementsCache.delete(key2);
          }
        });
        return;
      }
      const index2 = this.indexFromElement(node);
      if (!this.isIndexInRange(index2)) return;
      const key = this.options.getItemKey(index2);
      const prevNode = this.elementsCache.get(key);
      if (prevNode !== node) {
        if (prevNode) {
          this.observer.unobserve(prevNode);
        }
        this.observer.observe(node);
        this.elementsCache.set(key, node);
      }
      if ((!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(index2)) {
        this.resizeItem(index2, this.options.measureElement(node, void 0, this));
      }
    };
    this.resizeItem = (index2, size2) => {
      var _a2, _b;
      if (!this.isIndexInRange(index2)) return;
      let cachedSize;
      let itemStart;
      let key;
      const flat = this._flatMeasurements;
      if (this.options.lanes === 1 && flat !== null) {
        key = this.options.getItemKey(index2);
        itemStart = flat[index2 * 2];
        cachedSize = flat[index2 * 2 + 1];
      } else {
        const item = this.measurementsCache[index2];
        if (!item) return;
        key = item.key;
        itemStart = item.start;
        cachedSize = item.size;
      }
      const itemSize = this.itemSizeCache.get(key) ?? cachedSize;
      const delta = size2 - itemSize;
      if (delta !== 0) {
        const wasAtEnd = this.options.anchorTo === "end" && ((_a2 = this.scrollState) == null ? void 0 : _a2.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold;
        const prevTotalSize = wasAtEnd ? this.getTotalSize() : 0;
        const scrollOffsetWithAdj = this.getScrollOffset() + this.scrollAdjustments;
        const isFirstMeasure = !this.itemSizeCache.has(key);
        const defaultShouldAdjust = isFirstMeasure ? (
          // First measurement: compensate any item whose top sits above the
          // fold — the estimate→actual delta must be corrected regardless of
          // scroll direction, since the whole estimated block was above it.
          itemStart < scrollOffsetWithAdj
        ) : (
          // Re-measurement: only compensate an item that is ENTIRELY above the
          // fold. An item that merely *spans* the fold (top above, bottom
          // below — e.g. a streaming chat message growing at its bottom)
          // changes size *below* the anchor point, so shifting scrollTop by the
          // delta would drag the viewport downward on every growth (#1218).
          // Also skip during backward scroll to avoid the "items jump while
          // scrolling up" cascade.
          itemStart + itemSize <= scrollOffsetWithAdj && this.scrollDirection !== "backward"
        );
        const shouldAdjustScroll = ((_b = this.scrollState) == null ? void 0 : _b.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[index2] ?? {
            index: index2,
            key,
            start: itemStart,
            size: cachedSize,
            end: itemStart + cachedSize,
            lane: 0
          },
          delta,
          this
        ) : defaultShouldAdjust);
        if (this.pendingMin === null || index2 < this.pendingMin) {
          this.pendingMin = index2;
        }
        this.itemSizeCache.set(key, size2);
        this.itemSizeCacheVersion++;
        let adjustedSync = false;
        if (wasAtEnd) {
          adjustedSync = this.applyScrollAdjustment(
            this.getTotalSize() - prevTotalSize
          );
        } else if (shouldAdjustScroll) {
          adjustedSync = this.applyScrollAdjustment(delta);
        }
        this.notify(adjustedSync);
      }
    };
    this.getVirtualItems = memo(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (indexes, measurements) => {
        const virtualItems = [];
        for (let k2 = 0, len = indexes.length; k2 < len; k2++) {
          const i = indexes[k2];
          const measurement = measurements[i];
          virtualItems.push(measurement);
        }
        return virtualItems;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.getVirtualItemForOffset = (offset2) => {
      const measurements = this.getMeasurements();
      if (measurements.length === 0) {
        return void 0;
      }
      const flat = this._flatMeasurements;
      const useFlat = this.options.lanes === 1 && flat != null;
      const idx = findNearestBinarySearch(
        0,
        measurements.length - 1,
        useFlat ? (i) => flat[i * 2] : (i) => notUndefined(measurements[i]).start,
        offset2
      );
      return notUndefined(measurements[idx]);
    };
    this.getMaxScrollOffset = () => {
      if (!this.scrollElement) return 0;
      if ("scrollHeight" in this.scrollElement) {
        return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      } else {
        const doc = this.scrollElement.document.documentElement;
        return this.options.horizontal ? doc.scrollWidth - this.scrollElement.innerWidth : doc.scrollHeight - this.scrollElement.innerHeight;
      }
    };
    this.getVirtualDistanceFromEnd = () => {
      return Math.max(
        this.getTotalSize() - this.getSize() - this.getScrollOffset(),
        0
      );
    };
    this.getDistanceFromEnd = () => {
      return Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0);
    };
    this.isAtEnd = (threshold = this.options.scrollEndThreshold) => {
      return this.getDistanceFromEnd() <= threshold;
    };
    this.getOffsetForAlignment = (toOffset, align, itemSize = 0) => {
      if (!this.scrollElement) return 0;
      const size2 = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        align = toOffset >= scrollOffset + size2 ? "end" : "start";
      }
      if (align === "center") {
        toOffset += (itemSize - size2) / 2;
      } else if (align === "end") {
        toOffset -= size2;
      }
      const maxOffset = this.getMaxScrollOffset();
      return Math.max(Math.min(maxOffset, toOffset), 0);
    };
    this.getOffsetForIndex = (index2, align = "auto") => {
      index2 = Math.max(0, Math.min(index2, this.options.count - 1));
      const size2 = this.getSize();
      const scrollOffset = this.getScrollOffset();
      const item = this.measurementsCache[index2];
      if (!item) return;
      if (align === "auto") {
        if (item.end >= scrollOffset + size2 - this.options.scrollPaddingEnd) {
          align = "end";
        } else if (item.start <= scrollOffset + this.options.scrollPaddingStart) {
          align = "start";
        } else {
          return [scrollOffset, align];
        }
      }
      if (align === "end" && index2 === this.options.count - 1) {
        return [this.getMaxScrollOffset(), align];
      }
      const toOffset = align === "end" ? item.end + this.options.scrollPaddingEnd : item.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(toOffset, align, item.size),
        align
      ];
    };
    this.scrollToOffset = (toOffset, { align = "start", behavior = "auto" } = {}) => {
      this._iosDeferredAdjustment = 0;
      const offset2 = this.getOffsetForAlignment(toOffset, align);
      const now = this.now();
      this.scrollState = {
        index: null,
        align,
        behavior,
        startedAt: now,
        lastTargetOffset: offset2,
        stableFrames: 0
      };
      this._scrollToOffset(offset2, { adjustments: void 0, behavior });
      this.scheduleScrollReconcile();
    };
    this.scrollToIndex = (index2, {
      align: initialAlign = "auto",
      behavior = "auto"
    } = {}) => {
      this._iosDeferredAdjustment = 0;
      index2 = Math.max(0, Math.min(index2, this.options.count - 1));
      const offsetInfo = this.getOffsetForIndex(index2, initialAlign);
      if (!offsetInfo) {
        return;
      }
      const [offset2, align] = offsetInfo;
      const now = this.now();
      this.scrollState = {
        index: index2,
        align,
        behavior,
        startedAt: now,
        lastTargetOffset: offset2,
        stableFrames: 0
      };
      this._scrollToOffset(offset2, { adjustments: void 0, behavior });
      this.scheduleScrollReconcile();
    };
    this.scrollBy = (delta, { behavior = "auto" } = {}) => {
      const offset2 = this.getScrollOffset() + delta;
      const now = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior,
        startedAt: now,
        lastTargetOffset: offset2,
        stableFrames: 0
      };
      this._scrollToOffset(offset2, { adjustments: void 0, behavior });
      this.scheduleScrollReconcile();
    };
    this.scrollToEnd = ({ behavior = "auto" } = {}) => {
      if (this.options.count > 0) {
        this.scrollToIndex(this.options.count - 1, {
          align: "end",
          behavior
        });
        return;
      }
      this.scrollToOffset(Math.max(this.getTotalSize() - this.getSize(), 0), {
        behavior
      });
    };
    this.getTotalSize = () => {
      var _a2;
      const measurements = this.getMeasurements();
      let end;
      if (measurements.length === 0) {
        end = this.options.paddingStart;
      } else if (this.options.lanes === 1) {
        const lastIdx = measurements.length - 1;
        const flat = this._flatMeasurements;
        if (flat != null) {
          end = flat[lastIdx * 2] + flat[lastIdx * 2 + 1];
        } else {
          end = ((_a2 = measurements[lastIdx]) == null ? void 0 : _a2.end) ?? 0;
        }
      } else {
        const endByLane = Array(this.options.lanes).fill(null);
        let endIndex = measurements.length - 1;
        while (endIndex >= 0 && endByLane.some((val) => val === null)) {
          const item = measurements[endIndex];
          if (endByLane[item.lane] === null) {
            endByLane[item.lane] = item.end;
          }
          endIndex--;
        }
        end = Math.max(...endByLane.filter((val) => val !== null));
      }
      return Math.max(
        end - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    };
    this.takeSnapshot = () => {
      const snapshot = [];
      if (this.itemSizeCache.size === 0) return snapshot;
      const m2 = this.getMeasurements();
      for (const item of m2) {
        if (item && this.itemSizeCache.has(item.key)) {
          snapshot.push({
            index: item.index,
            key: item.key,
            start: item.start,
            size: item.size,
            end: item.end,
            lane: item.lane
          });
        }
      }
      return snapshot;
    };
    this._scrollToOffset = (offset2, {
      adjustments,
      behavior
    }) => {
      this._intendedScrollOffset = offset2 + (adjustments ?? 0);
      this.options.scrollToFn(offset2, { behavior, adjustments }, this);
    };
    this.measure = () => {
      this.pendingMin = null;
      this.itemSizeCache.clear();
      this.laneAssignments.clear();
      this.itemSizeCacheVersion++;
      this.notify(false);
    };
    this.setOptions(opts);
  }
  // Returns `true` when it performed a synchronous `scrollTop` write this
  // tick, `false` when the delta was zero or the write was deferred (iOS).
  // `resizeItem` uses that to decide whether the follow-up `notify` must be
  // synchronous so the grown transforms commit in the same paint (#1227).
  applyScrollAdjustment(delta, behavior) {
    if (delta === 0) return false;
    if (isIOSWebKit() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded)) {
      this._iosDeferredAdjustment += delta;
      return false;
    } else {
      this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += delta,
        behavior
      });
      if (this.scrollOffset !== null) {
        this.scrollOffset += this.scrollAdjustments;
        if (this.scrollOffset < 0) this.scrollOffset = 0;
        this.scrollAdjustments = 0;
      }
      return true;
    }
  }
  scheduleScrollReconcile() {
    if (!this.targetWindow) {
      this.scrollState = null;
      return;
    }
    if (this.rafId != null) return;
    this.rafId = this.targetWindow.requestAnimationFrame(() => {
      this.rafId = null;
      this.reconcileScroll();
    });
  }
  reconcileScroll() {
    if (!this.scrollState) return;
    const el = this.scrollElement;
    if (!el) return;
    const MAX_RECONCILE_MS = 5e3;
    if (this.now() - this.scrollState.startedAt > MAX_RECONCILE_MS) {
      this.scrollState = null;
      return;
    }
    const offsetInfo = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0;
    const targetOffset = offsetInfo ? offsetInfo[0] : this.scrollState.lastTargetOffset;
    const STABLE_FRAMES = 1;
    const targetChanged = targetOffset !== this.scrollState.lastTargetOffset;
    if (!targetChanged && approxEqual(targetOffset, this.getScrollOffset())) {
      this.scrollState.stableFrames++;
      if (this.scrollState.stableFrames >= STABLE_FRAMES) {
        if (this.getScrollOffset() !== targetOffset) {
          this._scrollToOffset(targetOffset, {
            adjustments: void 0,
            behavior: "auto"
          });
        }
        this.scrollState = null;
        return;
      }
    } else {
      this.scrollState.stableFrames = 0;
      if (targetChanged) {
        const viewport = this.getSize() || 600;
        const distance = Math.abs(targetOffset - this.getScrollOffset());
        const keepSmooth = this.scrollState.behavior === "smooth" && distance > viewport;
        this.scrollState.lastTargetOffset = targetOffset;
        if (!keepSmooth) {
          this.scrollState.behavior = "auto";
        }
        this._scrollToOffset(targetOffset, {
          adjustments: void 0,
          behavior: keepSmooth ? "smooth" : "auto"
        });
      }
    }
    this.scheduleScrollReconcile();
  }
}
const findNearestBinarySearch = (low, high, getCurrentValue, value) => {
  while (low <= high) {
    const middle = (low + high) / 2 | 0;
    const currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function findNearestBinarySearchFlat(flat, high, value) {
  let low = 0;
  while (low <= high) {
    const middle = (low + high) / 2 | 0;
    const currentValue = flat[middle * 2];
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  return low > 0 ? low - 1 : 0;
}
function calculateRangeImpl(measurements, outerSize, scrollOffset, lanes, flat) {
  const lastIndex = measurements.length - 1;
  if (measurements.length <= lanes) {
    return { startIndex: 0, endIndex: lastIndex };
  }
  if (lanes === 1 && flat !== null) {
    const startIndex2 = findNearestBinarySearchFlat(
      flat,
      lastIndex,
      scrollOffset
    );
    let endIndex2 = startIndex2;
    const limit = scrollOffset + outerSize;
    while (endIndex2 < lastIndex && flat[endIndex2 * 2] + flat[endIndex2 * 2 + 1] < limit) {
      endIndex2++;
    }
    return { startIndex: startIndex2, endIndex: endIndex2 };
  }
  const getStart = (index2) => measurements[index2].start;
  let startIndex = findNearestBinarySearch(0, lastIndex, getStart, scrollOffset);
  let endIndex = startIndex;
  if (lanes === 1) {
    while (endIndex < lastIndex && measurements[endIndex].end < scrollOffset + outerSize) {
      endIndex++;
    }
  } else if (lanes > 1) {
    const endPerLane = Array(lanes).fill(0);
    while (endIndex < lastIndex && endPerLane.some((pos) => pos < scrollOffset + outerSize)) {
      const item = measurements[endIndex];
      endPerLane[item.lane] = item.end;
      endIndex++;
    }
    const startPerLane = Array(lanes).fill(scrollOffset + outerSize);
    while (startIndex >= 0 && startPerLane.some((pos) => pos >= scrollOffset)) {
      const item = measurements[startIndex];
      startPerLane[item.lane] = item.start;
      startIndex--;
    }
    startIndex = Math.max(0, startIndex - startIndex % lanes);
    endIndex = Math.min(lastIndex, endIndex + (lanes - 1 - endIndex % lanes));
  }
  return { startIndex, endIndex };
}
const useIsomorphicLayoutEffect = typeof document !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
function useVirtualizerBase({
  useFlushSync = true,
  directDomUpdates = false,
  directDomUpdatesMode = "transform",
  ...options2
}) {
  const rerender = reactExports.useReducer((x) => x + 1, 0)[1];
  const directRef = reactExports.useRef({
    enabled: directDomUpdates,
    mode: directDomUpdatesMode,
    container: null,
    lastSize: null,
    // Keyed by the element itself so a remounted node (same key, new DOM
    // node — e.g. when `enabled` is toggled off then on) is treated as fresh
    // and gets its style written.
    lastPositions: /* @__PURE__ */ new WeakMap(),
    prevRange: null
  });
  directRef.current.enabled = directDomUpdates;
  directRef.current.mode = directDomUpdatesMode;
  const applyContainerSize = (instance2) => {
    const state = directRef.current;
    if (!state.enabled || !state.container) return;
    const totalSize = instance2.getTotalSize();
    if (totalSize !== state.lastSize) {
      state.lastSize = totalSize;
      const sizeAxis = instance2.options.horizontal ? "width" : "height";
      state.container.style[sizeAxis] = `${totalSize}px`;
    }
  };
  const applyDirectStyles = (instance2) => {
    const state = directRef.current;
    if (!state.enabled || !state.container) return;
    applyContainerSize(instance2);
    const horizontal = !!instance2.options.horizontal;
    const useTransform = state.mode === "transform";
    const posAxis = horizontal ? "left" : "top";
    const scrollMargin = instance2.options.scrollMargin;
    const items = instance2.getVirtualItems();
    for (const item of items) {
      const next = item.start - scrollMargin;
      const el = instance2.elementsCache.get(item.key);
      if (!el) continue;
      if (state.lastPositions.get(el) === next) continue;
      state.lastPositions.set(el, next);
      if (useTransform) {
        el.style.transform = horizontal ? `translate3d(${next}px, 0, 0)` : `translate3d(0, ${next}px, 0)`;
      } else {
        el.style[posAxis] = `${next}px`;
      }
    }
  };
  const resolvedOptions = {
    ...options2,
    onChange: (instance2, sync) => {
      var _a2;
      const state = directRef.current;
      let shouldRerender = true;
      if (state.enabled) {
        applyDirectStyles(instance2);
        const range = instance2.range;
        const prev = state.prevRange;
        shouldRerender = !prev || prev.isScrolling !== instance2.isScrolling || prev.startIndex !== (range == null ? void 0 : range.startIndex) || prev.endIndex !== (range == null ? void 0 : range.endIndex);
        if (shouldRerender) {
          state.prevRange = range ? {
            startIndex: range.startIndex,
            endIndex: range.endIndex,
            isScrolling: instance2.isScrolling
          } : null;
        }
      }
      if (shouldRerender) {
        if (useFlushSync && sync) {
          reactDomExports.flushSync(rerender);
        } else {
          rerender();
        }
      }
      (_a2 = options2.onChange) == null ? void 0 : _a2.call(options2, instance2, sync);
    }
  };
  const [instance] = reactExports.useState(() => {
    const v = new Virtualizer(resolvedOptions);
    return Object.assign(v, {
      containerRef: (node) => {
        const state = directRef.current;
        state.container = node;
        state.lastSize = null;
        if (node && state.enabled) {
          const total = v.getTotalSize();
          state.lastSize = total;
          const axis = v.options.horizontal ? "width" : "height";
          node.style[axis] = `${total}px`;
        }
      }
    });
  });
  instance.setOptions(resolvedOptions);
  useIsomorphicLayoutEffect(() => {
    return instance._didMount();
  }, []);
  useIsomorphicLayoutEffect(() => {
    applyContainerSize(instance);
    return instance._willUpdate();
  });
  useIsomorphicLayoutEffect(() => {
    applyDirectStyles(instance);
  });
  return instance;
}
function useVirtualizer(options2) {
  return useVirtualizerBase({
    observeElementRect,
    observeElementOffset,
    scrollToFn: elementScroll,
    ...options2
  });
}
const WithRowLinkContext = reactExports.createContext(false);
function TableContainer({
  className,
  scrollElementRef,
  withRowLink,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollAreaV2,
    {
      ref: scrollElementRef,
      className: clsx("border-grey-border border-spacing-0 rounded-lg border", className),
      orientation: "both",
      type: "auto",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(WithRowLinkContext.Provider, { value: withRowLink, children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "isolate w-full table-fixed border-separate border-spacing-0", ...props }) })
    }
  );
}
function TableTH({
  header,
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "th",
    {
      colSpan: header.colSpan,
      style: { width: header.getSize() },
      className: clsx(
        "border-grey-border bg-surface-card relative h-12 w-full border-b border-r px-md last:border-r-0",
        {
          "cursor-pointer select-none": header.column.getCanSort()
        },
        className
      ),
      onClick: header.column.getToggleSortingHandler(),
      ...props,
      children
    }
  );
}
const internalRowLink = "__internal-row-link";
function Header({ headerGroups }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "sticky top-0 z-10", children: headerGroups.map((headerGroup) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: headerGroup.headers.map((header, index2) => {
    const context = header.getContext();
    if (header.id === internalRowLink) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "th",
        {
          colSpan: header.colSpan,
          className: "bg-surface-card border-grey-border w-0 border-b"
        },
        `${header.id}-${index2}`
      );
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Table.TH, { header, children: header.isPlaceholder ? null : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-s text-grey-primary flex flex-row items-center font-semibold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1", children: flexRender(header.column.columnDef.header, context) }),
      {
        asc: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "arrow-2-up", className: "size-6" }),
        desc: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "arrow-2-down", className: "size-6" })
      }[header.column.getIsSorted()] ?? null,
      header.column.getCanResize() ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: clsx(
            "hover:bg-grey-border active:bg-grey-placeholder absolute end-0 h-full w-1 cursor-col-resize touch-none select-none",
            // Hack to take scroll bar into account
            index2 === headerGroup.headers.length - 1 && "end-sm"
          ),
          onMouseDown: header.getResizeHandler(),
          onTouchStart: header.getResizeHandler(),
          onClick: (event) => {
            event.stopPropagation();
          },
          onDoubleClick: () => {
            header.column.resetSize();
          },
          "aria-hidden": "true"
        }
      ) : null
    ] }) }, header.id);
  }) }, headerGroup.id)) });
}
function useCoreTable({ columns, rowLink, ...options2 }) {
  const _columns = reactExports.useMemo(() => {
    if (!rowLink) return columns;
    return [
      {
        id: internalRowLink,
        header: "",
        cell: ({ row }) => reactExports.cloneElement(rowLink(row.original), {
          "data-column-id": internalRowLink
        })
      },
      ...columns
    ];
  }, [columns, rowLink]);
  return useTable$1({
    features: marbleTableFeatures,
    manualSorting: true,
    manualFiltering: true,
    columns: _columns,
    ...options2
  });
}
function useVirtualTable(options2) {
  const table = useCoreTable(options2);
  const scrollElementRef = reactExports.useRef(null);
  const { rows } = table.getRowModel();
  const rowVirtualizer = useVirtualizer({
    getScrollElement: () => scrollElementRef.current,
    count: rows.length,
    estimateSize: () => 64,
    overscan: 10
  });
  const { getTotalSize, getVirtualItems } = rowVirtualizer;
  const virtualRows = getVirtualItems();
  const totalSize = getTotalSize();
  const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
  const paddingBottom = virtualRows.length > 0 ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0) : 0;
  return {
    table,
    getBodyProps: () => {
      return { paddingTop, paddingBottom };
    },
    getContainerProps: () => {
      return { scrollElementRef, withRowLink: options2?.rowLink !== void 0 };
    },
    isEmpty: rows.length === 0,
    rows: virtualRows.map(
      (virtualRow) => (
        // Safe to cast as virtualRows is built from rows
        rows[virtualRow.index]
      )
    ),
    scrollToTop: () => {
      rowVirtualizer.scrollToIndex(0);
    }
  };
}
function useTable(options2) {
  const table = useCoreTable(options2);
  const scrollElementRef = reactExports.useRef(null);
  const { rows } = table.getRowModel();
  return {
    table,
    getBodyProps: () => {
      return { paddingTop: 0, paddingBottom: 0 };
    },
    getContainerProps: () => {
      return { scrollElementRef, withRowLink: options2?.rowLink !== void 0 };
    },
    rows
  };
}
function Body({
  paddingTop,
  paddingBottom,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
    paddingTop > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { height: `${paddingTop}px` } }) }) : null,
    children,
    paddingBottom > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { height: `${paddingBottom}px` } }) }) : null
  ] });
}
function Row({
  row,
  className,
  onClick,
  ...props
}) {
  const withRowLink = reactExports.useContext(WithRowLinkContext);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tr",
    {
      onClick: (e) => {
        if (withRowLink) {
          const rowLink = e.currentTarget.querySelector('[data-column-id="__internal-row-link"]');
          if (rowLink && rowLink !== e.target && rowLink instanceof HTMLAnchorElement) {
            rowLink.dispatchEvent(new MouseEvent(e.type, e.nativeEvent));
          }
        }
        onClick?.(e);
      },
      className: clsx(
        "group/row",
        "h-12 even:bg-surface-row dark:even:bg-transparent",
        "odd:hover:bg-surface-row-hover even:hover:bg-surface-row-hover",
        withRowLink && "focus-within:bg-surface-row-hover cursor-pointer group/row-link",
        className
      ),
      ...props,
      children: row.getVisibleCells().map((cell, index2) => {
        const context = cell.getContext();
        if (context.column.id === internalRowLink) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: flexRender(cell.column.columnDef.cell, context) }, `${cell.id}-${index2}`);
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-s w-full truncate px-md font-normal", children: flexRender(cell.column.columnDef.cell, context) }, `${cell.id}-${index2}`);
      })
    }
  );
}
function DefaultTable({
  table,
  getBodyProps,
  rows,
  getContainerProps
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Table.Container, { ...getContainerProps(), className: "bg-surface-card max-h-96", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Header, { headerGroups: table.getHeaderGroups() }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Body, { ...getBodyProps(), children: rows.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Row, { row }, row.id)) })
  ] });
}
const Table = {
  Container: TableContainer,
  TH: TableTH,
  Header,
  Body,
  Row,
  Default: DefaultTable
};
const tabClassName = cn(
  "flex items-center h-8 px-sm text-s font-medium rounded-sm",
  "bg-purple-background text-purple-primary",
  "dark:bg-transparent dark:text-grey-placeholder",
  // Active state via aria-current (NavLink)
  "aria-[current=page]:bg-purple-primary aria-[current=page]:text-white",
  "aria-[current=page]:dark:bg-purple-primary aria-[current=page]:dark:text-grey-white",
  // Active state via data-status (Button)
  "data-[status=active]:bg-purple-primary data-[status=active]:text-white",
  "data-[status=active]:dark:bg-purple-primary data-[status=active]:dark:text-grey-white",
  // Disabled state
  "aria-disabled:text-grey-secondary"
);
function Tabs({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      role: "tablist",
      className: "flex p-xs gap-xs rounded-md bg-purple-background self-start justify-self-start dark:bg-grey-background",
      children
    }
  );
}
export {
  Arrow as $,
  Anchor as A,
  Button as B,
  Content$1 as C,
  DismissableLayer as D,
  clamp as E,
  FormatContext as F,
  useDirection as G,
  useControllableState as H,
  Icon as I,
  Root2$2 as J,
  useSize as K,
  I18nContext$1 as L,
  MenuCommand as M,
  iconsSVGSpriteHref as N,
  I18nProvider as O,
  Primitive as P,
  createSimpleContext as Q,
  ReactRemoveScroll as R,
  Typo as S,
  Trans as T,
  StickyComponent as U,
  useFormatTimezone as V,
  CtaV2ClassName as W,
  formatDateRelative as X,
  formatDuration as Y,
  Calendar as Z,
  sub as _,
  useFormatDateTime as a,
  formatSchedule as a$,
  createSlottable as a0,
  format as a1,
  HoverCard as a2,
  HoverCardTrigger as a3,
  HoverCardPortal as a4,
  HoverCardContent as a5,
  Input as a6,
  batch as a7,
  useSelector as a8,
  createAtom as a9,
  ReactDOM as aA,
  formatDuration$1 as aB,
  useTable as aC,
  Table as aD,
  HoverCardArrow as aE,
  useVirtualTable as aF,
  useTable$1 as aG,
  marbleTableFeatures as aH,
  flexRender as aI,
  differenceInCalendarMonths as aJ,
  endOfMonth as aK,
  FormattingProvider as aL,
  FiltersBarContext as aM,
  getYear as aN,
  useFiltersBarContext as aO,
  useFormatting as aP,
  DateRangeFilter as aQ,
  getWeek as aR,
  formatPercentage as aS,
  createRovingFocusGroupScope as aT,
  Item as aU,
  Root$1 as aV,
  dispatchDiscreteCustomEvent as aW,
  useVirtualizer as aX,
  RadioGroup as aY,
  RadioGroupItem as aZ,
  isSameDay as a_,
  toObserver as aa,
  Radio as ab,
  DialogTrigger as ac,
  DialogDescription as ad,
  Dialog as ae,
  DialogPortal as af,
  DialogOverlay as ag,
  DialogContent as ah,
  DialogTitle as ai,
  typoClassName as aj,
  DialogClose as ak,
  Tabs as al,
  tabClassName as am,
  Panel as an,
  PanelSharpFactory as ao,
  NumberInput as ap,
  Card as aq,
  SearchInput as ar,
  Popover as as,
  PopoverTrigger as at,
  PopoverPortal as au,
  PopoverContent as av,
  PopoverAnchor as aw,
  ScrollAreaV2 as ax,
  useFormatLanguage$1 as ay,
  useSyncExternalStoreExports as az,
  useI18n as b,
  formatRelative as b0,
  Root2 as b1,
  Trigger$1 as b2,
  Content2 as b3,
  _e as b4,
  inputIconClassName as b5,
  clsx as c,
  cn as d,
  InternalMenuSharpFactory as e,
  formatDateTimeWithoutPresets as f,
  useFormatLanguage as g,
  formatNumber as h,
  formatAge as i,
  cva as j,
  useComposedRefs as k,
  composeEventHandlers as l,
  useLayoutEffect2 as m,
  Portal$2 as n,
  Presence as o,
  useCallbackRef$1 as p,
  useId as q,
  createPopperScope as r,
  createCollection as s,
  hideOthers as t,
  useTranslation as u,
  useFocusGuards as v,
  FocusScope as w,
  reactDomExports as x,
  createContextScope as y,
  createSlot as z
};
