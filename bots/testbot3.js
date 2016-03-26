importScripts('../js/robotBase.js');
importScripts('../js/utils.js');

var started = false;

Testbot2 = function() {
    RobotBase.call(this);
    this.name = 'Testbot III';
}

Testbot2.prototype = Object.create(RobotBase.prototype);
Testbot2.prototype.constructor = Testbot2;

Testbot2.prototype.run = function() {
    this.moveForward(200);
	this.ΜΠΡΟΣΤΑ(200);
	this.ΠΥΡ(3);
    this.ΔΕΞΙΑ(10);
    
};
 
Testbot2.prototype.startRound = function() {
    started = false;
}

Testbot2.prototype.onScannedRobot = function(name, direction, distance, heading, velocity, power) {
    
}


var robot = new Testbot2();
//declare everything loaded, after all robots have reported in, the first round starts
robot.ready();
