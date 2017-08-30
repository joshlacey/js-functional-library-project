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
        const newArray = []
        this.each(list, element => {
          newArray.push(iteratee(element))
        })
        return newArray
    },

  filter: function(list, predicate) {
      const newArr = []
      this.each(list, element => {
        if (predicate(element)) {
          newArr.push(element)
        }
      })
      return newArr
    },
  find: function find(list, predicate) {
      let returnVal

      this.each(list, element => {
        if (predicate(element) === true && returnVal === undefined) {
          returnVal = element
        }
    })
      return returnVal
    },
  reduce: function reduce(list, iteratee, initVal){
    	let startingEl = initVal ? initVal : list[0]
    	let i = initVal ? 0 : 1

    	for(i; i < list.length; i++){
    		startingEl = iteratee(startingEl, list[i]);
    	}
    	return startingEl
    },
}
})()
