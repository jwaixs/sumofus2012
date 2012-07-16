beforeEach(function() {
    this.addMatchers({
	toBeAt : function(expectedPosition) {
	    var actual = this.actual;
	    var position = actual.get("position");
	    return position === expectedPosition;
	},

	toHaveADefinedPosition : function() {
	    var car = this.actual;
	    var position = car.get("position");
	    return position !== jasmine.undefined;
	},

	toHaveADefinedDirection : function() {
	    var car = this.actual;
	    var direction = car.get("direction");
	    return direction !== jasmine.undefined;
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

        toBeHighlighted : function() {
	    return this.actual.get("highlighted");
        },

	toBeOccupied : function(){
	    var actual = this.actual;
	    return actual.isOccupied();
	},

	toBeConnectedTo : function(node, inDir, outDir){
	    var actual = this.actual;
	    var links = actual.links(inDir);
	    for each (link in links){
	        if( link.node === node && link.direction === outDir){
		    return true;
		}
	    }
	    return false;
	},

        toHaveNConnections : function(expectedNumberOfConnections) {
	    var trackNode = this.actual;
	    var actualNumberOfConnections = trackNode.get("connections").length;
	    return actualNumberOfConnections === expectedNumberOfConnections;
	},

        //To avoid Jasmine's recursive equality test that is used in toContain, here
        //are two non recursive variations.
        //This one matches elements of the list using ==.
        toContainSomethingEqualTo : function(expectedValue){
            var list = this.actual;
            for each(item in list){
                if(item == expectedValue){
                    return true;
                }
            }
            return false;
        },

        //This one will test all elements for the required properties.
        //Properties are matched with ==
        toContainSomethingWithProperties : function(expectedProperties){
            var list = this.actual;
            for each(item in list){
                var match = true;
                for (property in expectedProperties){
                    if(item[property] != expectedProperties[property]){
                        match = false;
                        break;
                    }
                }
                if(match){
                    return true;
                }
            }
            return false;
        }
    });
});
