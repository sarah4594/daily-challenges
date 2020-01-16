export const min_num_taxis = (requests: number[][]): number => {
  const taxis: number[] = []
  // sort by dropoff time
  requests.sort((reqA, reqB) => reqA[1] - reqB[1])
  requests.forEach(request => {
    const [pickup, dropoff] = request
    let foundTaxi = false
    for (let taxi = 0; taxi <= taxis.length; taxi++) {
      if (pickup > taxis[taxi]) {
        foundTaxi = true
        taxis[taxi] = dropoff
      }
    }
    if (!foundTaxi) {
      taxis.push(dropoff)
    }
  })
  return taxis.length
}
