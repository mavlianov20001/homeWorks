class Cars {
  static type = "Cars";
  constructor(options) {
    this.model = options.model;
    this.color = options.color;
    this.wheels = options.wheels;
  }
  start() {
    console.log("МАШИНА ЗАВЕДЕНА");
  }
}

const cars = new Cars({});
cars.start();

class Mercedes extends Cars {
  static type = "Cars";
  constructor(options) {
    super(options);
    this.turbine = options.turbine;
  }
}

const Car1 = new Mercedes({
  model: "MercedesBenz",
  color: "black",
  wheels: 4,
  turbine: true,
});
console.log(Car1);

class BMW extends Cars {
  static type = "Cars";
  constructor(options) {
    super(options);
    this.MotorType = options.MotorType;
  }
}

const Car2 = new BMW({
  model: "BMW",
  color: "white",
  wheels: 4,
  MotorType: "g-power",
});
console.log(Car2);

class Audi extends Cars {
  static type = "Cars";
  constructor(options) {
    super(options);
    this.HorsePower = options.HorsePower;
  }
}

const Car3 = new Audi({
  model: "Audi",
  color: "silver",
  wheels: 4,
  HorsePower: 320,
});
console.log(Car3);
