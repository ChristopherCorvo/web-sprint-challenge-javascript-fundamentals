// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker. 
// Find out the formulas for volume and surface area for cubes and create those methods using 
// the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


//  this is a factory function to make cuboids 
// function CuboidMaker1 (length, width, height){
//     this.length = length,
//     this.width = width,
//     this.height = height
//   }

  // Below code creates a Cuboid class

  class Cuboidmaker{
    constructor(length,width,height){
        this.length = length,
        this.width = width,
        this.height = height
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    }

  }

  let cuboid = new Cuboidmaker (4,5,5);
  console.log(cuboid);

  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130

// stretch goals
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker. 
// Find out the formulas for volume and surface area for cubes and create those methods using 
// the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends Cuboidmaker{
    constructor(length,width,height){
        super(length,width,height)
    }
    volumeCube(){
        return this.length * this.width * this.height;
    };

    surfaceAreaCube(){
        return 6 * (this.length * this.height);
    };
}

let cubeTest = new CubeMaker(5,5,5);

console.log(cubeTest)
console.log(cubeTest.volumeCube());
console.log(cubeTest.surfaceAreaCube());