const getMap = () => {
  console.log("['1', '2', '3'].map(parseInt)")
  console.log(['1', '2', '3'].map(parseInt))
  console.log(['1', '2', '3'].map((item, index) => parseInt(item, index)))
}
export default getMap

export interface PersonD {
  name: string
}
