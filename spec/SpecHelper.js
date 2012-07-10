beforeEach(function() {
    this.addMatchers({
	toBeAt : function(expectedPosition) {
	    var actual = this.actual;
	    var position = actual.get("position");
	    return position === expectedPosition;
	},

	toBeGoingInDirection : function(expectedDirection) {
	    var actual = this.actual;
	    var direction = actual.get("direction");
	    return direction === expectedDirection;
	},

	toHaveSpeed : function(expectedSpeed){
	    var actual = this.actual;
	    var speed = actual.get("speed");
	    return speed === expectedSpeed;
	},

	toHaveMaxSpeed : function(expectedMax){
	    var actual = this.actual;
	    var maxSpeed = actual.get("maxSpeed");
	    return maxSpeed === expectedMax;
	},

	toHaveAcceleration : function(expectedAcceleration){
	    var actual = this.actual;
	    var acceleration = actual.get("acceleration");
	    return acceleration === expectedAcceleration;
	},

        toBeHighlighted : function(expectedHighlight) {
            var actual = this.actual;
	    var highlighted = actual.get("highlighted");
	    return highlighted === expectedHighlight;
        },

	toBeOccupied : function(){
	    var actual = this.actual;
	    return actual.isOccupied();
	}
    });
});
