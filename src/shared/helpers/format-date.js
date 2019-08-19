import { MONTH_NAMES } from '../constants/month-name.constant';

export function formatDate(date) {
  const [year, month, day] = date.split('-');

  if (
    !year ||
    !month ||
    !day ||
    year.length < 4 ||
    parseInt(month) < 1 ||
    parseInt(month) > 12
  ) {
    throw new Error(
      'formatDate arguments must be called with YYYY-MM-DD format',
    );
  }
  return `${MONTH_NAMES[month - 1]} ${day}, ${year}`;
}
