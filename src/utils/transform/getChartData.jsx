import moment from 'moment';
import 'moment/locale/es-mx';
import { toCelsius } from './../utils'

const getChartData = (data) => {
  const daysAhead = [0, 1, 2, 3, 4, 5];
  const days = daysAhead.map(day => moment().add(day, 'd'))
  const dataAux = days.map((day, indx) => {
    const tempObjArray = data.list.filter(item => {
      const dayOfYear = moment.unix(item.dt).dayOfYear()
      return dayOfYear === day.dayOfYear()
    })
    const temps = tempObjArray.map(item => item.main.temp)
    const min = Math.min(...temps)
    const max = Math.max(...temps)
    return {
      dayName: day.format('ddd'),
      min: toCelsius(min),
      max: toCelsius(max),
      hasTemps: temps.length > 0 ? true : false
    }
  }).filter(item => item.hasTemps)

  return dataAux
}

export default getChartData;