class Sorter {
  constructor() {
    this.elements = [];
    this.defaultCompareFunc = (a, b) => {
      if(a > b) return 1;
      if(a < b) return -1;
      return 0;
    };
  }

  add(element) {
    this.elements.push(element);
  }

  at(index) {
    return this.elements[index];
  }

  get length() {
    return this.elements.length;
  }

  toArray() {
    return this.elements;
  }

  sort(indices) {
    indices.sort();

    let rmpArray = [];
    for ( var i=0; i< indices.length; i++) {
       rmpArray.push(this.elements[indices[i]]);
    }
    
    if(this.compareFunc) {
      rmpArray.sort(this.compareFunc);
    } else {
      rmpArray.sort(this.defaultCompareFunc);
    }

    for ( var i=0; i< indices.length; i++) {
        this.elements[indices[i]] = rmpArray [i];
    }
  }

  setComparator(compareFunction) {
    this.compareFunc = compareFunction;
  }
}

module.exports = Sorter;