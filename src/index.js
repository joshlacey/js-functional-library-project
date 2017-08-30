console.log('hello')

const fi = (function() {
  return {
    each: function(list, iteratee) {
      if (Array.isArray(list)){
        for (let i = 0; i < list.length; i++) {
          iteratee(list[i], i, list)
        }
      } else {
          for (let key in list){
            iteratee(list[key], key, list)
          }
      }
    },
    map: function(list, iteratee) {
      if (Array.isArray(list)){
        const newArray = []

        this.each(list, element => {
          newArray.push(iteratee(element))
        })

        return newArray

      } else {
        this.each(list, value => {
        return 'hi' })
      }
    },
  }
})()
//   filter: function(list, iteratee) {
//     const newArr = []
//
//     for (let i = 0; i < list.length; i++) {
//       const el = list[i]
//       if (iteratee(el)) newArr.push(el)
//     }
//
//     return newArr
//   },
//   find: function find(list, iteratee) {
//     let returnVal
//     for (let i = 0; i < list.length; i++) {
//       returnVal = list[i]
//       if (iteratee(returnVal) === true) break
//     }
//
//     return returnVal
//   },
//   reduce: function reduce(list, iteratee, initVal){
//   	let startingEl = initVal ? initVal : list[0]
//   	let i = initVal ? 0 : 1
//
//   	for(i; i < list.length; i++){
//   		startingEl = iteratee(startingEl, list[i]);
//   	}
//   	return startingEl
//   },
// }

// fi.libraryMethod()
