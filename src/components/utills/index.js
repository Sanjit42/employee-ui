import moment from 'moment';

export const getCustomDate = date => {
  const today = moment();
  const startDay = moment(date);

  let years = today.diff(startDay, 'year');
  startDay.add(years, 'years');

  let months = today.diff(startDay, 'months');
  startDay.add(months, 'months');

  return `${suffix(years, 'year')} and ${suffix(months, 'month')}`;
};

const suffix = (value, text) => {
  return value > 1 ? `${value} ${text}s` : `${value} ${text}`;
};
