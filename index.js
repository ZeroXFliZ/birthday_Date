const moment = require('moment'); // Requires installation: npm install moment
const getAge=()=>{
  if (!birthdayDateString) {
    throw new Error('Missing birthday date argument')
  }


  const birthday = moment(birthdayDateString);

  if (!birthday.isValid()) {
    throw new Error('Invalid birthday date format (YYYY-MM-DD)');
  }

  const today = moment();
  const years = today.diff(birthday, 'years', true); 
  const months = today.diff(birthday, 'months', true) % 12;
  const days = today.diff(birthday, 'days', true) % 365;

  return {
    years: Math.floor(years),
    months: Math.floor(months),
    days: Math.floor(days),
  };
}

// Get birthday from argument
const birthday = process.argv[2];

try {
  const age = getAge(birthday);
  console.log(`Age: ${age.years} years ${age.months} months ${age.days} days`);
} catch (error) {
  console.error(error.message);
}
