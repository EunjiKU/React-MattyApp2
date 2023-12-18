function dateCalculation() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let firstDay = new Date(year, month, 1).getDate();
  let lastDay = new Date(year, month, 0).getDate();
  let nowDay = date.getDate();

  if(month < 10) {
      month = `0${month}`;
    }
    if(firstDay < 10) {
      firstDay = `0${firstDay}`;
    }
    
  let thisYearFirst = `${year}-01-01`;
  let nowMonthFirst = `${year}-${month}-${firstDay}`;
  let nowMonthLast = `${year}-${month}-${lastDay}`;
  let nowDate = `${year}-${month}-${nowDay}`;

  return [thisYearFirst, nowMonthFirst, nowMonthLast, nowDate];
  // return {
  //   thisYearFirst,
  //   nowMonthFirst,
  //   nowMonthLast
  // };
}

export { dateCalculation }