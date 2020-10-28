console.log("Binary Search is Fast AF");


// create the type Binary Node
type BNode = {
  value: number;
  left: BNode | null;
  right: BNode | null;
};
// create the Binary search function
function binarySearch(tree: BNode, searchedValue: number): boolean {

  // case current node value is value searched
  if (tree.value === searchedValue) {
    return true;
  }

  // case current node is nul
  if (tree.left === null || tree.right === null) {
    return false;
  }

  // case current node value is greater than value searched
  if (tree.value > searchedValue) {
    return binarySearch(tree.left, searchedValue);
  }
  // case current node value is less than value searched
  return binarySearch(tree.right, searchedValue);

}

const head: BNode = {
  value: 10,
  left: {
    value: 8,
    left: {
      value: 3,
      right: null,
      left: {
        value: 1,
        right: null,
        left: null
      }
    },
    right: {
      value: 9,
      right: null,
      left: null,
    }
  },
  right: {
    value: 12,
    left: {
      value: 11,
      left: null,
      right: null,
    },
    right: {
      value: 15,
      left: {
        value: 14,
        left: {
          value: 13,
          left: null,
          right: null,
        },
        right: null
      },
      right: null,
    }
  }
};

// input 8 11 13
console.log(binarySearch(head, 8))
console.log(binarySearch(head, 11))
console.log(binarySearch(head, 13))
console.log(binarySearch(head, 975))
