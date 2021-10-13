const fib = (x) => {
  let a = 0
  let b = 1
  let c
  for (let i = 0; i < x; i++) {
    console.log(a) // 1
    c = a + b // 2
    a = b // 1
    b = c // 2
  }
}

fib(10)

// 0 1 1 2 3 5


function pascal(n, m) {
  let arr = [];
  if (m <= n) {
    for (let i = 0; i < n; i++) {
      arr[i] = new Array(i + 1)
      for (let j = 0; j < arr[i].length; j++) {
        if (i === 0) {
          arr[i][j] = 1
        } else {
          if (j === 0 || i === j) {
            arr[i][j] = 1
          } else {
            arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
          }
        }
      }
    }
    console.log(arr)
    console.log(arr[n-1][m-1])
  } else {
    console.log('Rango no permitido para m = ' + m)
  }
}

pascal(6,7)

const max = (arr, a, b) => {
  // console.log(arr)
  // console.log(arr.length)
  if ((b + 1) <= arr.length) {
    let arrNew = []
    for (i = a; i <= b; i++) {
      arrNew.push(arr[i]) // arrNew[i] = arr[i]
    }
    let maxi = 0
    for (j = 0; j < arrNew.length; j++) {
      if (maxi < arrNew[j]) {
        maxi = arrNew[j]
      }
    }
    console.log(arrNew)
    console.log(maxi)
  } else {
    console.log('limites a y b incorrectos')
  }
}

max([1,4,6,7,1,3,3,1,0,4], 4, 8)

const orderByLetter = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('').sort().join('');
  }
  console.log(arr)
}

orderByLetter(['sdjkfgjsdhgf', 'hola mundo', 'jkgbznmopqpñasjkdh' , 'aaannnbbbssscooaa'])


const upStairs = (x) => {
  if (x < 3) {
    return console.log(x)
  }
  let a = 1
  let b = 2
  let c
  for (let i = 2; i < x; i++) {
    c = a + b
    a = b
    b = c
  }
  console.log(b)
}

upStairs(6)