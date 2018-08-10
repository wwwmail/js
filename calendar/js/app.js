
var app = new Vue({
    el: '#app',
    data: {

        today: moment(),
        dateContext: moment(),
        days: ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SUT'],
        
        choosenDate:'',

    },

    methods: {

       addMonth: function () {
            var t = this;
            t.dateContext = moment(t.dateContext).add(1, 'month');
        },
        subtractMonth: function () {
            var t = this;
            t.dateContext = moment(t.dateContext).subtract(1, 'month');
            
        },
        
        chooseData:function(date , month ,year){
            this.choosenDate = date + ' ' + month + ' ' + year;
        }


    },
    created: function () {
   
    },

    computed: {
  

        year: function () {
            var t = this;
            return t.dateContext.format('Y');
        },
        month: function () {
            var t = this;
            return t.dateContext.format('MMMM');
        },

        daysInMonth: function () {
            var t = this;
            return t.dateContext.daysInMonth();
        },
        currentDate: function () {
            var t = this;
            return t.dateContext.get('date');
        },

        firstDayOfMonth: function () {
            var t = this;
            var firstDay = moment(t.dateContext).subtract((t.currentDate - 1), 'days');
            return firstDay.weekday();
        },

        initialDate: function () {
            var t = this;
            return t.today.get('date');
        },
        initialMonth: function () {
            var t = this;
            return t.today.format('MMMM');
        },
        initialYear: function () {
            var t = this;
            return t.today.format('Y');
        },
        
    },



});

