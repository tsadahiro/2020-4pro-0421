var app = new Vue({
    el: '#app',
    data: {
	message: 'Hello Sadahiro',
	items: [[],[],[]],
    },
    methods:{
	paste(){
	    this.message = this.message +" AIUEO";
	}
    },
    mounted(){ //ロードされたときに呼び出される
	for (i=0; i<10; i++){
	    this.items.push([]);
	    for (j=0; j<10; j++){
		this.items[i].push();
	    }
	}
    }
})
