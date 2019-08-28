
function produceDrivingRange(blockRange){
    return function(block1, block2) {
        let start = parseInt(block1);
        let end = parseInt(block2);
        let a = Math.abs(end - start);
        let b = Math.abs(blockRange - a);
        if (a > blockRange){
            return `${b} blocks out of range`;  
        }
      else if (a < blockRange){
        return `within range by ${b}`;
      }
      };
}

function produceTipCalculator(fare){
    return function(tipPercent){
        return fare * tipPercent;
    };
}

function createDriver() {
    let ItemId = 0;
    // return the class
    return class {
      constructor(name) {
        this.name = name;
        this.id = ++ItemId;
      }
    };
  }

