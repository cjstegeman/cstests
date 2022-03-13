new Vue({
    el: '#app',
    data() {
        return {
            beers: [],
            message: 'Vue is actief!'
        }
    },
    filters: {
        percentage(value) {
            //console.log("value="+value);
            var val = parseFloat(value) * 100;
            return val.toFixed(2) + "%";
        }
    },
    mounted() {
        var url = 'https://15euros.nl/api/bier_basic.php';
        axios.get(url)
            .then((response) => {
                this.beers = response.data;
                console.log("this.beers =", this.beers);
            })
            .catch(function (error) {
                console.log("error=", error);
            });
    }
});