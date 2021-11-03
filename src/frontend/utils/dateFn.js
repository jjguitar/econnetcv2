const dateFn = (time) => {
  let format = 'yyyy-mm-dd'
  // const dateToday = new Date(time.substring(0,10));
  // console.log('time')
  // console.log(time.substring(0,10))
  // console.log('dateToday')
  // console.log(dateToday)
  const map = {
      dd: time.substring(8,10),
      mm: time.substring(5,7),
      yyyy: time.substring(0,4)
  }
  // console.log(map)
  return format.replace(/dd|mm|yyyy/gi, matched => map[matched])
}

export { dateFn }