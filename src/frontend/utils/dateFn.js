const dateFn = (time) => {
  let format = 'yyyy-mm-dd'
  const dateToday = new Date(time);
  // console.log(dateToday)
  const map = {
      dd: dateToday.getDate(),
      mm: dateToday.getMonth() + 1,
      yyyy: dateToday.getFullYear()
  }
  return format.replace(/dd|mm|yyyy/gi, matched => map[matched])
}

export { dateFn }