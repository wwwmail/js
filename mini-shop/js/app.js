new Vue({
    el: '#app',
    created() {
        this.loadData();
    },
    data: {

        products: [
            {'id': '1', 'title': 'item1', 'price': '100'},
            {'id': '2', 'title': 'item2', 'price': '200'},
            {'id': '3', 'title': 'item3', 'price': '300'},
            {'id': '4', 'title': 'item4', 'price': '130'},
            {'id': '5', 'title': 'item5', 'price': '400'},
            {'id': '6', 'title': 'item6', 'price': '620'},
            {'id': '7', 'title': 'item7', 'price': '110'},
            {'id': '8', 'title': 'item8', 'price': '170'},
            {'id': '9', 'title': 'item9', 'price': '180'},
        ],

        basketProducts: [],
        totalCount: 0,

    },
    methods: {
        loadData: function(){
            if(JSON.parse(localStorage.getItem('products'))){
                this.basketProducts = JSON.parse(localStorage.getItem('products'));
            }
            
            if(JSON.parse(localStorage.getItem('totalCount'))){
                this.totalCount = JSON.parse(localStorage.getItem('totalCount'));
            }
        },

        addToBasket: function (item) {
            
            this.totalCount += parseInt(item.price);
            this.basketProducts.push(item);
            localStorage.setItem('totalCount',  JSON.stringify(this.totalCount));
            localStorage.setItem('products',  JSON.stringify(this.basketProducts));
        },

        deleteFromBasket: function (i,price) {
            this.totalCount -= parseInt(price);
            
            this.basketProducts.splice(i,1);
            localStorage.setItem('products',  JSON.stringify(this.basketProducts));
            localStorage.setItem('totalCount', JSON.stringify(this.totalCount));
        },
        



    }
});