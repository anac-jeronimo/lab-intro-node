class SortedList {
  constructor() {
   this.items = [],
   this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
    return a-b});
    this.length = this.items.length;
  }

  get(pos) {
    if(pos > this.items.length) {
      throw new Error('OutOfBounds'); 
    } else { 
    return this.items[pos]; 
    }
  }

  max() {
    if(this.items.length > 0) {
     return Math.max(...this.items); 
      } else {
        throw new Error('SortedList');
      } 
     }
    
  min() {
    if(this.items.length > 0) {
      return  Math.min(...this.items);
    } else {
      throw new Error('SortedList');
    }
    }
  
  
  sum() {
    if(this.items.length <= 0) {
      return 0; 
    }else {
      let sum = this.items.reduce((a,b) => {
        return a + b;
      }, 0)
      return sum;
    }
    }

  avg() { 
    if(this.items.length <= 0) {
      throw new Error('EmptySortedList');
    } else {
      let avg = this.sum() / this.items.length;
      return avg;
    }
  }
}

module.exports = SortedList;
