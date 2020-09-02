
###函数组件接收一个props对象参数，而不是各个属性
//错误
const Component = (name,age)=>{
	
}
//正确
const Component = ({name,age})=>{
	
}
###dispath只接收2参数(ice/store)
/*错误*/
//model
addMuteList(prevState,...studnetIds) {
	studnetIds.map(studnetId=>{
		prevState.push(studnetId)
	})
},
//组件使用
addMuteList(...[1,2,3])
/*正确*/
//model
addMuteList(prevState,studnetIds) {
	studnetIds.map(studnetId=>{
		prevState.push(studnetId)
	})
},
//组件使用
addMuteList([1,2,3])