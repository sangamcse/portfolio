import { DateTime } from 'luxon';

export const timestampToRelativeTime = timestamp =>
  DateTime.fromMillis(timestamp).toRelative();

export const isoStringToRelativeTime = isoString =>
  DateTime.fromISO(isoString).toRelative();
