AFRAME.registerComponent('move',{
    schema:{
        moveX:{type:'number',default:0}
    },
    tick:function(){
        window.addEventListener('click',()=>{
            this.data.moveX = this.data.moveX + 0.005
        })  

        var pos = this.el.getAttribute('position')
        pos.x = pos.x+  this.data.moveX
        this.el.setAttribute('position',{x:pos.x, y:pos.y, z:pos.z}) 
    }
})
