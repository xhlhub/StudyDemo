
var app = new Vue({
	el: '#app',
	data: {
	    message: 'Hello Vue!',
	    list:{text:22},
	},
	components:{MyButton:MyButton},
	methods: {
	    reverseMessage: function () {
	      this.message = this.message.split('').reverse().join('')
	    },
	    getData(){
	    	axios.get('/user?ID=12345')
			  .then(function (response) {
			    console.log(response);
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
	    },
	}
})