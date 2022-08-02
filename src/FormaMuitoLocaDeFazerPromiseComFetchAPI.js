//DESTRUCTURING NÃO É REFACTORING, REFACTORING É REFATORAÇÃO DE CODIGO

const p1 = 'fosejfose'
const p2 = 3254252
const p3 = [{ fsoef: 'fosieuhf' }]
const p5 = [{ fsog: 'fosieuhf' }]
//Promise.all([p2, p1, p3]).then((e) => console.log(e))

async function x() {
  const [ffse, gesg] = await Promise.all([p1, p2])

  const postsResponse = fetch('')
}

x()

function drawES2015Chart({
  size = 'big',
  cords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, cords, radius)
  // do some chart drawing
}

drawES2015Chart({
  cords: { x: 18, y: 30 },
  radius: 30,
})
