export const convertToUpperCase = (value = '') => value.trim().toUpperCase()

export const capitalizeWords = (value = '') => {
  value = value.trim()
  let stringArray = value.split(' ')

  return stringArray.reduce((prev, current, index) => {
    let spaceString = index > 0 ? ' ' : ''
    let word =
      current.length > 1 || index === 0
        ? current[0].toUpperCase() + current.substring(1)
        : current
    return prev + spaceString + word
  }, '')
}
