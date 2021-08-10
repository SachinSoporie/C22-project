class rope{
	constructor(body1, body2, pointA, pointB)
	{
		this.pointA = pointB
		this.pointB = pointB

		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA, y:this.pointB}
		}
		//create rope constraint here
	}
	display(){
		
		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;

		line(400, 100, 310, 530);
		strokeweight(12);

	}

    //create display() here 

}
