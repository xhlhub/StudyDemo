	/*
	 *
	canvas离屏缓冲
	优点：减少cpu计算渲染，减少卡顿，可以画很多个点（1000+）
	 缺点：利用drawImage画图位置会取整数，造成抖动，在点小、速度慢时候会凸显。
	 适用于：点数量庞大并且点比较大的时候
	 * */

	function Dot(x,y,r,speedX,speedY){
		this.x=x;
		this.y=y;
		this.r=r;
		this.speedX=speedX;
		this.speedY=speedY;
		this.cacheCanvas = document.createElement("canvas");
		this.cacheCanvas.width=2*this.r;
		this.cacheCanvas.height=2*this.r;
		this.cacheCtx = this.cacheCanvas.getContext('2d');
		this.cacheCtx.fillStyle = "#fff";
		this.cacheDraw()
		this.animate();
	}
	
	Dot.prototype={
		cacheDraw:function(){
			this.cacheCtx.beginPath();
		    this.cacheCtx.arc(this.r,this.r,this.r, 0,  Math.PI*2)
		    this.cacheCtx.fill();
		},
		animate:function (){
			ctx.clearRect(this.x-this.r-1,this.y-this.r-1,2*this.r+2, 2*this.r+2);
			
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
			
			ctx.drawImage(this.cacheCanvas,this.x-this.r,this.y-this.r,2*this.r,2*this.r)
			
			requestAnimationFrame(()=>{
				this.animate()
			})	

		}
	}

