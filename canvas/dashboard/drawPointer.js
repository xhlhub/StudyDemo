
function animatePointer(value, duration, delay = 0,drawPrams){
	if(delay&& typeof(delay) === 'number' && delay>0){
				setTimeout(()=>{animate(value,duration,drawPrams)},delay*1000)
	}else{
		animate(value,duration,drawPrams)
	}
}

		function animate (value,duration,drawPrams){
			if(!value||typeof(value) != 'number'){return}
			value = Math.min(value,1)
			
			let startAngleRotate = drawPrams.startAngle - Math.PI*3/2;//旋转起始角度
			let i =0;//角度
			var now;
			var then = Date.now()-16;
			var interval;//刷新时间
			var fps;//刷新率
			
			const render = function(i){
				now = Date.now();
				interval = now -then;
				then = now;
				drawPointer(drawPrams,startAngleRotate,i)
				fps = 1000/interval;
				i+=value/fps/duration;//增量=总量/刷新率/时间
				if(i<value){
					requestAnimationFrame(()=>{
						render(i)
					})
				}else{
					drawPointer(drawPrams,startAngleRotate,value)
				}
			}
			render(i)			
		}
		
function drawPointer(drawPrams,startAngleRotate,i){
		const { context,imgPionter,startAngle,rangeAngle,x,y,r} = drawPrams ;
	  context.save(); //保存坐原点平移之前的状态
    context.translate(x, y);
    context.rotate(startAngleRotate+i*rangeAngle);
    context.clearRect(r*0.036+3,15,-r*0.072-6,-r*0.72-15);  
	  context.drawImage(imgPionter, -r*0.036, -r*0.72+5,r*0.072,r*0.72)
	  context.restore();
}