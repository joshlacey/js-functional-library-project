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
  find: function(list, predicate) {
      let returnVal

      this.each(list, element => {
        if (predicate(element) === true && returnVal === undefined) {
          returnVal = element
        }
    })
      return returnVal
    },
  reduce: function(list, iteratee, initVal) {
    	let startingEl = initVal ? initVal : list[0]
    	let i = initVal ? 0 : 1

    	for(i; i < list.length; i++){
    		startingEl = iteratee(startingEl, list[i]);
    	}
    	return startingEl
    },
    // [1,5,3,4,2]
   
   sortBy: function(list,iterateeOrString){
   		// establish new array
   		let iteratee 
   		if (typeof iterateeOrString === "function" ){
   			 iteratee = iterateeOrString}
   		else if (typeof iterateeOrString === "string") {
   			iteratee = function(element) { return element[iterateeOrString] }
   		}
   		let newArr = []
   		// make a copy
   		newArr[0] = list[0]
   		// we want to compare list[i] to each value in newArray, starting with index[1]
   		// new array has first value from other list
   		for(let i = 1; i < list.length; i++){
   			for(let j = 0; j < newArr.length; j++){
   				if (iteratee(list[i]) < iteratee(newArr[j])){

   					let rangeBefore = newArr.slice(0,j)
   					let rangeAfter = newArr.slice(j,newArr.length)
   					newArr = [...rangeBefore,list[i],...rangeAfter]
   					break
   					
   				} else if (iteratee(list[i]) > iteratee(newArr[(newArr.length-1)])){

   					newArr.push(list[i])
   					break

   				}
   			}
   		}
   		// iterate over every el in list
   		// check each element against a preceding element using some evaluator
   		return newArr
    },

    size: function(list){
    	let count = 0
    	for (let key in list){
    		count += 1
    	}
    	return count
    },

    first: function(array, n = 1){
    	return array.slice(0, n)
    },

    last: function(array, n = 1){
    	return array.slice((array.length - n), array.length)
    },

    compact: function(list){
    	return this.filter(list, function(element) {return element})
    },

    // flatten: function() {},
 
    // uniq: function(list, isSorted, iteratee) {
    // 	return this.filter(list, function(element) {
    // 		!list.includes(element)
    // 	} )
    // },
}









})()
