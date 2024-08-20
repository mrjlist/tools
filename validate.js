const REGEX_DATE = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])/;
const REGEX_TIME = /^([01][0-9]|2[0-3]):[0-5][0-9]/;
const REGEX_DATETIME = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])[ T]([01][0-9]|2[0-3]):[0-5][0-9]/;
// const REGEX_TIME = /([01][0-9]|2[0-3]):[0-5][0-9]/;

// ==============================================
function isDate(s) {
  if (typeof s !== 'string') return false;
  if (s.match(REGEX_DATE)) return true;

  return false;
}
// ==============================================
function isTime(s) {
  if (typeof s !== 'string') return false;
  if (s.match(REGEX_TIME)) return true;

  return false;
}

// ==============================================
function isDateTime(s) {
  if (typeof s !== 'string') return false;
  if (s.match(REGEX_DATETIME)) return true;

  return false;
}

module.exports.isDate = isDate;
module.exports.isTime = isTime;
module.exports.isDateTime = isDateTime;
