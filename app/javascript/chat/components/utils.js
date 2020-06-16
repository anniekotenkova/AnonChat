const Utils = {
  getShortDate(created_at) {
    const distance = Math.round((+new Date() - created_at) / 60000)
    const date = new Date(created_at)

    const hour = (`0${date.getHours()}`).slice(-2)
    const minutes = (`0${date.getMinutes()}`).slice(-2)

    if (distance > 2879) {
      if (distance > 14567) {
        return this.getNiceDate(created_at)
      } else {
        return `Вчера в ${hour}:${minutes}`
      }
    } else {
      return this.getNiceDate(created_at)
    }
  },

  getNiceDate(created_at) {
    const defaultString = '%d в %h:%i'

    const language = {
      0: 'Сейчас',
      1: '1 минуту назад',
      59: '%distance минут назад',
      118: 'Час назад',
      1439: '%r часов назад',
      2879: 'Вчера в %h:%i',
      14567: '%l в %h:%i',
    }
    const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

    const date = new Date(created_at)
    const distance = Math.round((+new Date() - created_at) / 60000)

    let string = 0
    for(const i in language) {
      if (distance < i) {
        string = language[i]

        break
      }
    }

    const hour = (`0${date.getHours()}`).slice(-2)
    const minutes = (`0${date.getMinutes()}`).slice(-2)
    const day = days[date.getDay()]
    const month = months[date.getMonth()]

    let year = date.getFullYear()
    if (new Date().getFullYear() === year) {
      year = ''
    }

    if (string) {
      const hoursAgo = Math.round(distance / 60)

      return string.replace(/%distance/i, distance)
        .replace(/%r/i, hoursAgo)
        .replace(/%h/i, hour)
        .replace(/%i/i, minutes)
        .replace(/%l/i, day)
    }

    return defaultString.replace(/%d/i, day)
      .replace(/%f/i, month)
      .replace(/%y/i, year)
      .replace(/%h/i, hour)
      .replace(/%i/i, minutes)
  },
}

export default Utils
