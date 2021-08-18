module.exports = function check(str, bracketsConfig) {
  let bracketsStack = []
  for (let ch of str) {
    for (let bracket of bracketsConfig) {
      if (ch == bracket[0]) {
        if (bracket[0] == bracket[1]) {
          if (bracketsStack.length == 0) {
            bracketsStack.push(bracket[0])
            break
          } else {
            const lastBracket = bracketsStack.pop()
            if (lastBracket != bracket[0]) {
              bracketsStack.push(lastBracket)
              bracketsStack.push(bracket[0])
            }
            break
          }
        }
        bracketsStack.push(bracket[1])
        break
      }
      if (ch == bracket[1]) {
        if (ch != bracketsStack.pop()) return false
        break
      }
    }
  }
  
  return bracketsStack.length == 0 ? true : false
}
