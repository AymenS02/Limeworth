import { hours, type HoursEntry } from '../data/clinic';

const TIME_ZONE = 'America/Toronto';
const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

export const formatTime = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number);
  const suffix = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 || 12;
  return m ? `${hour12}:${String(m).padStart(2, '0')} ${suffix}` : `${hour12} ${suffix}`;
};

export const formatRange = (entry: HoursEntry) =>
  entry.open && entry.close ? `${formatTime(entry.open)} – ${formatTime(entry.close)}` : 'Closed';

const entryFor = (day: number) => hours.find((h) => h.days.includes(day));

/** Current weekday and minutes-since-midnight in the clinic's timezone. */
const clinicNow = (date: Date) => {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE,
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  return { day, minutes: Number(get('hour')) * 60 + Number(get('minute')) };
};

export interface OpenStatus {
  isOpen: boolean;
  label: string;
  today: number;
}

export function getOpenStatus(date = new Date()): OpenStatus {
  const { day, minutes } = clinicNow(date);
  const today = entryFor(day);

  if (today?.open && today.close) {
    if (minutes >= toMinutes(today.open) && minutes < toMinutes(today.close)) {
      return { isOpen: true, label: `Open now · until ${formatTime(today.close)}`, today: day };
    }
    if (minutes < toMinutes(today.open)) {
      return { isOpen: false, label: `Closed · opens today at ${formatTime(today.open)}`, today: day };
    }
  }

  for (let offset = 1; offset <= 7; offset++) {
    const next = (day + offset) % 7;
    const entry = entryFor(next);
    if (entry?.open) {
      const when = offset === 1 ? 'tomorrow' : DAY_NAMES[next];
      return { isOpen: false, label: `Closed · opens ${when} at ${formatTime(entry.open)}`, today: day };
    }
  }
  return { isOpen: false, label: 'Closed', today: day };
}
