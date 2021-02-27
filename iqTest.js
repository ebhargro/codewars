function iqTest(numbers){
  const numArr = numbers.split(' ');

  const checkStatus = num => (parseInt(num) % 2) ? 'odd' : 'even';

  const findUniqueStatus = array => {
    let numEvens = 0;

    array.forEach(function(value){
      if (checkStatus(value) == 'even') { numEvens++; }
    });

    return (numEvens === 1) ? 'even' : 'odd'
  }

  let statuses = numArr.map(checkStatus),
      uniqueStatus = findUniqueStatus(numArr);

  return statuses.indexOf(uniqueStatus) + 1;
}