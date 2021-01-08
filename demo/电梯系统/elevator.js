class Elevator{
	constructor(){
		//运动属性
		this.moveDirector = "pedding"//pedding,up,down
		this.isMove = false //true,false
		this.currentFloor = 0 //0-10
		this.targetFloor = 0 //0-10 目标楼层
		this.endFloor = 0 //0-10 终点楼层
		this.moveTimer = null //运动计时器
		//门属性
		this.isOpen = false //true,false
		this.doorCloseTimer = null
		this.timeout = 3 //自动关门等待时间
		//按键
		this.activeFloors = [] //按下的楼层
	}
	openDoor(){
		if(this.isMove){ return }
		this.isOpen = true;
		this.timeout = 3;//3秒后自动关门
		this.doorCloseTimer = setInterval(()=>{
			if(this.timeout>0){
				this.timeout--
			}else{
				this.closeDoor()
				clearInterval(this.doorCloseTimer)
			}
		},1000)
	}
	closeDoor(){
		this.isOpen = false;
		console.log("door close")
		this.run()
	}
	async run(targetFloor){
		if(this.currentFloor !== this.targetFloor){
			this.isMove = true;
			await this.move()
		}
	}
	arrive(){
		this.isMove = false;
		this.openDoor()
	}
	
	move(){
		return new Promise((resolve,reject)=>{
			let  step = 0//单位时间移动楼层
			if(this.moveDirector === 'up'){
				step = 1 
			}else if(this.moveDirector === 'down'){
				step = -1 
			}
			this.moveTimer = setInterval(()=>{
				if(this.currentFloor !== this.targetFloor){
					this.currentFloor += step
					console.log(this.currentFloor)
				}else{
					clearInterval(this.moveTimer)
					this.arrive()
					resolve()
				}
			},1000)
		})
	}
}