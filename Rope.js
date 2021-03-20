class Rope {
    constructor(a,b){
        var option = {
                bodyA:a,
                pointB:b,
                length:130,
                stiffness:0.04
            }
            this.chain = Matter.Constraint.create(option)
            World.add(world, this.chain)
        
    }
display(){
    push();
    strokeWeight(5)
    line(this.chain.pointB.x, this.chain.pointB.y, this.chain.bodyA.position.x, this.chain.bodyA.position.y  )
    pop();
}
}