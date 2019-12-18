class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    // BASE CASE
    //   if node.value is null, there is no root!
    if (!this.value) {
      this.value = value;
    } else if (value > this.value) {
      // go right. if right is empty, insert value. else recur.
      if (!this.right) {
        this.right = BinarySearchTree(value);
      } else {
      }
    } else if (value < this.value) {
      // go left. if left is empty, insert value. else recur
      if (!this.left) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    }
  }
}

let bst = new BinarySearchTree(5);
console.log(bst);
