module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.map(function(element) {
         return element.join('');
      }
    )
    while (bracketsConfig.length) {
      let index = 0;
  
      bracketsConfig.forEach(function(element) {
        if (str.indexOf(element) != -1) {
          str = str.replace(element, '');
        } else {
          index += 1;
        }
      });
      
      if (index === bracketsConfig.length) {
     bracketsConfig.length = 0;
        
    }
  }
    return str.length === 0; 
}
