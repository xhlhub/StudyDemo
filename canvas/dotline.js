function dot_line(canvas,option={}){
		/*
	 *Dot
	 * */
	function Dot(x,y,r,speedX,speedY,opcity,id){
		this.id=id;
		this.x=x;
		this.y=y;
		this.r=r;
		this.speedX=speedX;
		this.speedY=speedY;
		this.opcity=opcity;
		ctx.fillStyle = color_dot;
		this.draw()
	}
	
	Dot.prototype={
		draw:function(){
			ctx.beginPath();
		    ctx.arc(this.x,this.y,this.r, 0,  Math.PI*2)
		    ctx.fill();
		},
		animate:function (){
			let maxX = canvasWidth+this.r;
			let maxY = canvasHeight+this.r;
			
			this.y+=this.speedY;
			this.x+=this.speedX;
			
			if(this.x>maxX){
				this.x=-this.r
			}
			if(this.x<-this.r){
				this.x=maxX
			}
			if(this.y>maxY){
				this.y=-this.r
			}
			if(this.y<-this.r){
				this.y=maxY
			}		
			this.draw()
		}
	}
	
	
    var ctx = canvas.getContext("2d");
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
	var store=[];
	var num = option.number||100;
	var color_dot=option.color_dot||'#fff';
	var color_line=option.color_dot||'#fff';
	
	start()
	
	function start(){
		for (let i=0;i<num;i++) {
			let x= Math.random()*canvasWidth;
			let y= Math.random()*canvasHeight;
			let r= parseInt(Math.random()*2)+1;
			let speedX= 0.4 - Math.random()*0.8;
			let speedY= 0.4 - Math.random()*0.8;
			let opcity = (parseInt(Math.random()*5)+6)/10;
			store[i] = new Dot(x,y,r,speedX,speedY,opcity,i)
		}
		render()
	}
	function render(){
		ctx.clearRect(0,0,canvasWidth,canvasHeight);
		draw_all();
		requestAnimationFrame(()=>{
			render()
		})
	}
	function draw_all(){
		draw_dot()
		draw_line()
	}
	function draw_dot(){
		store.map(dot=>{
			dot.animate()
		});
	}
	function draw_line(){
		ctx.save();
		ctx.strokeStyle=color_line;
		ctx.globalAlpha=0.2;
		store.map(dot=>dot.isTraverse=false)
		store.map(dot=>{
			drawLine(dot)
		})
		ctx.restore()
	}
	/*
	 *画线条
	 * */
	function drawLine(start_dot){
		let start_x = start_dot.x;
		let start_y = start_dot.y;
		store.map((end_dot)=>{
			if((end_dot.id == start_dot.id)||end_dot.isTraverse){//排除自己和已遍历的
				return
			}
			let x = end_dot.x, y=end_dot.y;
			if((x-start_x)*(x-start_x)+(y-start_y)*(y-start_y)<20000){
				ctx.beginPath();
				ctx.moveTo(start_x,start_y);
				ctx.lineTo(x,y);
				ctx.stroke()
			}
		})
		start_dot.isTraverse=true;//标识为已遍历
	}
}
	
	

