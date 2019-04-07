$(function() {
  Vue.component('city-list', {
    props: ['city'],
    template: `
    <ul v-bind:class="city.country_code">
      <li>{{ city.city_name }}</li>
    </ul>
  `
  })
  new Vue({
    el: '#app',
    data() {
      return {
        // modal
        checkedDst: 'ASI',
        checkedCountry: '',
        checkedCity: '',
        modal1: false,
        // data
        cityResult: [],
        mapList: [],
        sortByDst: [],
        sortByCountry: [],
        // results
        dstResult: [],
        countryResult: [],
        country_city_isMerged:[],
        show: true
      }
    },
    created: function () {
      axios.get('../modal/data/map2.csv').then(function (response) {
        // 取得完了したらlistリストに代入
        var tmpArray = response.data.split("\n");
        var data_head = [], data_body = [];
        for (var i = 0; i < tmpArray.length; i++) {
          data_body[i] = tmpArray[i].split(",");
        }
        data_head = data_body[0];
        data_body = data_body.slice(1)
        this.mapList = this.toJson(data_head, data_body)
        this.sortByDst = this.groupBy(this.mapList, 'dst_code')
        this.sortByCountry = this.groupBy(this.mapList, 'country_name')
      }.bind(this)).catch(function (e) {
        console.error(e)
      })
    },
    methods: {
      toJson: function (header, body) {
        var json = body.map(function (row) {
          return row.reduce(function (accum, currentValue, i) {
            accum[header[i]] = currentValue;
            return accum;
          }, {});
        });
        return json;
      },
      groupBy: function (objectArray, property) {
        return objectArray.reduce(function (acc, obj) {
          var key = obj[property];
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(obj);
          return acc;
        }, {});
      },
      closeModal: function () {
        // defaultの状態に戻したい
        this.checkedDst = '',
        this.checkedCountry = '',
        this.checkedCity = ''
      },
      showCityList: function() {
        $('.city_parent').children('ul').css('display', 'none');
        $('#KOR').children('ul').css('display', 'block');
      }
    },
    computed: {
      matchedDst_returnCountry: function () {
        var _mapList = this.mapList;
        var _checkedDst = this.checkedDst
        var dst_result = _mapList.filter(function (item, index) {
          if (item.dst_code === _checkedDst) return true;
        });
        this.dstResult = dst_result

        var arrObj = {};
        for (var i = 0; i < dst_result.length; i++) {
          arrObj[dst_result[i]['country_name']] = dst_result[i];
        }
        country_result = [];
        for (var key in arrObj) {
          country_result.push(arrObj[key]);
        }

        this.countryResult = country_result
        return country_result
      },
      matchedCountry_returnCity: function () {
        var _mapList = this.mapList;
        var _checkedCountry = this.checkedCountry
        var city_result = _mapList.filter(function (item, index) {
          if (item.country_code === _checkedCountry) return true;
        });
        this.cityResult = city_result
        return city_result
      }
    }
  });
});

