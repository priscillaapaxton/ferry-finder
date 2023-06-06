export function getFerryData () {
  return fetch('https://www.bcferriesapi.ca/api/')
  .then(response => {
    if(!response.ok) {
      throw new Error(`response.status`)
    } else {
      return response.json()
    }
  })
}