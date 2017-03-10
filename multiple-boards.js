var five = require('johnny-five');

var ports = [
 { id: "A", port: "/dev/ttyACM0" },
 { id: "B", port: "/dev/ttyACM1" }
];

new five.Boards(ports).on("ready", function(){
  var led = new five.Led({
    pin: 13,
    board: this.byId("A")
  });

  led.blink(1000);

  // |this| is an array-like object containing references
  // to each initialized board.
  this.each(function(board) {
    if (board.id === "B") {
      // Initialize an Led instance on pin 13 of
      // each initialized board and strobe it.
      var led = new five.Led({
        pin: 13,
        board: board
      });

      led.blink(2000);
    }
  });
});
