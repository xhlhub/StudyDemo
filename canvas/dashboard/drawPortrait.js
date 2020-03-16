		function drawPortrait(context,x,y,r,startAngle,rangeAngle,delay,minValue,imgSrc,bigPortrait){
			let img = new Image();
			img.src =  imgSrc;
			let imgBg = new Image();
			imgBg.src = 'portrait-bg.png'
			let angleStart = -Math.PI/6;
			let angle = -Math.PI/6+rangeAngle*minValue;//旋转角度
			
			setTimeout(()=>{
				var cacheCanvas = document.createElement("canvas");
				var cacheCtx = cacheCanvas.getContext('2d');
				cacheCanvas.width=100;
				cacheCanvas.height=100;
				cacheCtx.translate(50, 50);
				cacheCtx.save()
				cacheCtx.rotate(-Math.PI*2/3 + Math.PI/7);
				cacheCtx.drawImage(imgBg, -28, -28,56,70)
				cacheCtx.restore()
				cacheCtx.rotate(-angle);
				
				cacheCtx.drawImage(img, -25, -25,50,50)
				
				context.save(); //保存坐原点平移之前的状态
			    context.translate(x, y);
			    context.rotate(angle);
				if(bigPortrait){
					context.drawImage(cacheCanvas, -r-130, -50,100,100)
				}else{
					context.drawImage(cacheCanvas, -r-110, -30,60,60)
				}
				
				context.restore();				
			},delay*1000)
		}