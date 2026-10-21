import { T as Temporal, h as getDateFnsLocale } from "./services-middleware-nMulUXHZ.mjs";
import { f as formatDistanceStrict } from "./formatDistanceStrict-DEEeAR-Y.mjs";
const ISO_DATETIME_WITHOUT_OFFSET = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?$/;
const ISO_DATE_ONLY = /^\d{4}-\d{2}-\d{2}$/;
function normalizeTimestampForInstant(timestamp) {
  const normalized = timestamp.trim().replace(/^(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}:\d{2})/, "$1T$2");
  if (ISO_DATETIME_WITHOUT_OFFSET.test(normalized)) {
    return `${normalized}Z`;
  }
  if (ISO_DATE_ONLY.test(normalized)) {
    return `${normalized}T00:00:00Z`;
  }
  return normalized;
}
function isUnsetTimestamp(timestamp) {
  return !timestamp || timestamp.startsWith("0001-");
}
function getSignedCalendarDays(timestamp, options) {
  if (!timestamp || isUnsetTimestamp(timestamp)) return null;
  try {
    const timeZone = options?.timeZone ?? Temporal.Now.timeZoneId();
    const now = options?.now ?? Temporal.Now.zonedDateTimeISO(timeZone);
    const targetDate = toInstant(timestamp).toZonedDateTimeISO(timeZone).toPlainDate();
    const nowDate = now.withTimeZone(timeZone).toPlainDate();
    return nowDate.until(targetDate, { largestUnit: "day" }).days;
  } catch {
    return null;
  }
}
function getDueDateUrgency(dueAt, options) {
  const days = getSignedCalendarDays(dueAt, options);
  if (days === null) return null;
  if (days < 0) {
    return { kind: "late", days: Math.abs(days) };
  }
  if (days <= 2) {
    return { kind: "left", days };
  }
  return null;
}
function getCalendarDayDistance(timestamp, options) {
  const days = getSignedCalendarDays(timestamp, options);
  if (days === null) return null;
  if (days === 0) return { kind: "today" };
  if (days === 1) return { kind: "tomorrow" };
  if (days === -1) return { kind: "yesterday" };
  if (days > 1) return { kind: "in", days };
  return { kind: "ago", days: Math.abs(days) };
}
function toInstant(timestamp) {
  return typeof timestamp === "string" ? Temporal.Instant.from(normalizeTimestampForInstant(timestamp)) : Temporal.Instant.fromEpochMilliseconds(timestamp.getTime());
}
function zdtToDate(zdt) {
  return new Date(zdt.epochMilliseconds);
}
function formatTime(zdt, locale, timeZone) {
  return Intl.DateTimeFormat(locale, { timeZone, timeStyle: "short" }).format(zdtToDate(zdt));
}
function formatDayMonthYear(zdt, locale, timeZone) {
  return Intl.DateTimeFormat(locale, { timeZone, dateStyle: "short" }).format(zdtToDate(zdt));
}
function formatDateAtTime(timestamp, {
  locale,
  timeZone,
  todayLabel = "Today",
  yesterdayLabel = "Yesterday",
  atSeparator = " at "
}) {
  const zdt = toInstant(timestamp).toZonedDateTimeISO(timeZone);
  const now = Temporal.Now.zonedDateTimeISO(timeZone);
  const time = formatTime(zdt, locale, timeZone);
  const date = zdt.toPlainDate();
  if (date.equals(now.toPlainDate())) {
    return `${todayLabel}${atSeparator}${time}`;
  }
  if (date.equals(now.toPlainDate().subtract({ days: 1 }))) {
    return `${yesterdayLabel}${atSeparator}${time}`;
  }
  return `${formatDayMonthYear(zdt, locale, timeZone)}${atSeparator}${time}`;
}
function formatOptionalDateAtTime(timestamp, options, fallback = "—") {
  if (!timestamp || isUnsetTimestamp(timestamp)) return fallback;
  try {
    return formatDateAtTime(timestamp, options);
  } catch {
    return fallback;
  }
}
function formatOptionalDuration(start, end, options, fallback = "—") {
  if (isUnsetTimestamp(start) || isUnsetTimestamp(end)) return fallback;
  try {
    const startInstant = toInstant(start);
    const endInstant = toInstant(end);
    const durationMilliseconds = Math.abs(endInstant.epochMilliseconds - startInstant.epochMilliseconds);
    if (durationMilliseconds < 1e3) {
      return new Intl.NumberFormat(options.locale, {
        style: "unit",
        unit: "millisecond",
        unitDisplay: "long"
      }).format(durationMilliseconds);
    }
    return formatDistanceStrict(new Date(endInstant.epochMilliseconds), new Date(startInstant.epochMilliseconds), {
      locale: getDateFnsLocale(options.locale)
    });
  } catch {
    return fallback;
  }
}
export {
  formatOptionalDateAtTime as a,
  getCalendarDayDistance as b,
  formatOptionalDuration as f,
  getDueDateUrgency as g,
  isUnsetTimestamp as i,
  normalizeTimestampForInstant as n
};
