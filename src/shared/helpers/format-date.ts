import { MONTH_NAMES } from '../constants/month-name.constant';

export function formatDate(date: string): string {
  if (!date) {
    throw new Error('Missing required parameter');
  }

  const [year, month, day] = date.split('-');
  if (
    !year ||
    !month ||
    !day ||
    year.length < 4 ||
    parseInt(month) < 1 ||
    parseInt(month) > 12
  ) {
    throw new Error('Parameter format must be YYYY-MM-DD');
  }
  return `${MONTH_NAMES[Number(month) - 1]} ${day}, ${year}`;
}
