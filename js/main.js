var app = new Vue (
{

	el: '#app',
	data: {
		n: 20, //nombre de données à extraire de l'api
		info: []
	},
	created() {
		this.getData()
	},
	methods: {

		getData(){

			axios.get('https://jsonplaceholder.typicode.com/todos').then( 
				response => this.info = response.data
			).catch(
				error => console.log( error )
			)
		},
		hideWord(itemId){
			document.getElementById(itemId).style.visibility = "hidden"
		}
	}

});
