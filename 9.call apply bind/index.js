var car = {
  color: "blue",
  getColor: function (model) {
    console.log(this.color);
    console.log(model);
  },
};

var car2 = {
  color: "green",
};

car.getColor.call(car2, "BMW");

car.getColor.apply(car2, ["BMW"]);

var printColor = car.getColor.bind(car2);
printColor("BMW");
