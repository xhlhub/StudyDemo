	function drawarc(x, y, r, startAngle, rangeAngle){
		return {
			drawBackground:drawBackground,
			animationMax:animationMax,
			animationMedium:animationMedium,
			animationMin:animationMin
		}
		/**
		 * @desc 绘制动画-大弧
		 * @param {number} value - 弧的占比值(小数)
		 * @param {number} duration - 动画时间(单位秒)
		 * @param {number} delay - 延时(单位秒)
		 */
		function animationMax(value, duration = 0.6, delay = 0){
			if(delay&& typeof(delay) === 'number' && delay>0){
				setTimeout(()=>{animate(drawMax,value,duration)},delay*1000)
			}else{
				animate(drawMax,value,duration)
			}
		}
		function animationMedium(value, duration = 0.6, delay = 0){
			if(delay&& typeof(delay) === 'number' && delay>0){
				setTimeout(()=>{animate(drawMedium,value,duration)},delay*1000)
			}else{
				animate(drawMedium,value,duration)
			}
		}
		function animationMin(value, duration = 0.6, delay = 0){
			if(delay&& typeof(delay) === 'number' && delay>0){
				setTimeout(()=>{animate(drawMin,value,duration)},delay*1000)
			}else{
				animate(drawMin,value,duration)
			}
		}		
		/**
		 * @desc 绘图动画
		 * @param {function} drawFun - 绘制方法
		 * @param {number} value - 绘制圈的占比值(小数)
		 * @param {number} duration - 动画时间(单位秒)
		 */
		function animate (drawFun,value,duration){
			if(!value||typeof(value) != 'number'){return}
			value = Math.min(value,1)
			
			let i =0;//角度
			var now;
			var then = Date.now()-16;
			var interval;//刷新时间
			var fps;//刷新率
			
			const render = function(i){
				now = Date.now();
				interval = now -then;
				then = now;
				drawFun(i)
				fps = 1000/interval;
				i+=value/fps/duration;//增量=总量/刷新率/时间
				if(i<value){
					requestAnimationFrame(()=>{
						render(i)
					})
				}else{
					drawFun(value)
//					console.timeEnd()
				}
			}
//			console.time()
			render(i)			
		}
		
		/* 
		画背景 
		 */
		function drawBackground(){
			drawArc(x, y, r, startAngle, rangeAngle,"#D2D5E7")
		}
		
		/*
		画大弧 
		 */
		function drawMax(percent){
			drawArc(x, y, r, startAngle, rangeAngle*percent,"#F7744D")
		}
		
		/*
		画中弧 
		 */
		function drawMedium(percent){
			drawArc(x, y, r, startAngle, rangeAngle*percent,"#FFC765")
		}
		
		/*
		画小弧 
		 */
		function drawMin(percent){
			drawArc(x, y, r, startAngle, rangeAngle*percent,"#264AD0")
		}
		
		/* 
		画弧线 
		 */
		function drawArc(x,y,r,startA,rangeA,color){
			context.beginPath();
			context.strokeStyle = color;//线条的颜色
			context.arc(x,y,r,startA, startA+rangeA);
			context.stroke()
		}		
		
	}
