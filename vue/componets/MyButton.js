let MyButton ={
	props: ['name'],
	template: `<div class="my-tabs">
			<div class="my-tabs-header">
					<div 
						v-for="item in tabs" name="item.name" 
						class="my-tabs-nav active"
						:class="{active:activeName==item.name}"
						:key="item.name"
						>
						<span>{{item.label}}</span>
					</div>
				</div>
		</div>`,
	data: function () {
	    return {
	      tabs:[{name:"aa",label:"222"}],
	    activeName:"one",
	    }
	  },
	methods:{
		add:function(){
			this.count++
		}
	},
}

//export MyButton