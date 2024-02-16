require('./includes/scripts.js') // include the scripts used by the chapter


  function dominantDirection(text) {
      // Your code here.
      let output = ``;
      let charCodeList = [];
      let directionList = [];
      let count = {ltr: 0, rtl:0, ttb:0};
      for(let i = 0; i < text.length; i++) {
        charCodeList.push(text.codePointAt(i));
      };
  
      charCodeList.forEach((code) => {
        for (let script of SCRIPTS) {
          if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
          })) {
            directionList.push(script.direction);
          };
        };
      });
  
      directionList.forEach((test) => {
        if(test == `ltr`) {count.ltr++}
        else if (test == `rtl`) {count.rtl++}
        else if (test == `ttb`) {count.ttb++}
      });
  
      if (count.ltr > count.rtl && count.ltr > count.ttb) {return `ltr`}
      else if (count.rtl > count.ltr && count.rtl > count.ttb) {return `rtl`}
      else if (count.ttb > count.ltr && count.ttb > count.rtl) {return `ttb`}
      else if (count.rtl == count.ltr && count.rtl == count.ttb) {return `Equal`}
      else if (count.rtl == count.ltr) {return `rtl and ltr`}
      else if (count.rtl == count.ttb) {return `rtl and ttb`}
      else if (count.ttb == count.ltr) {return `ttb and ltr`}
  
    }
  
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl