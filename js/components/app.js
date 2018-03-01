webpackJsonp([0],{

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactDatepicker = __webpack_require__(59);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'home' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement('img', { src: '/img/bitcoin-logo.png',
              className: 'bitcoin-logo'
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement(
              'h2',
              null,
              'Enter Transaction'
            ),
            _react2.default.createElement(
              'label',
              null,
              'Crypto Amount'
            ),
            _react2.default.createElement('input', {
              type: 'number',
              name: 'amount',
              onChange: this.props.onInputChange,
              value: this.props.globalState.cryptoAmount
            }),
            _react2.default.createElement(
              'label',
              null,
              'Date'
            ),
            _react2.default.createElement(_reactDatepicker2.default, {
              name: 'date',
              selected: this.props.globalState.date,
              onChange: this.props.handleDateChange
            }),
            _react2.default.createElement(
              'button',
              {
                onClick: this.props.checkProfit,
                className: 'profit-button',
                type: 'submit' },
              'Check Profits'
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Results = function (_Component) {
  _inherits(Results, _Component);

  function Results() {
    _classCallCheck(this, Results);

    var _this = _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this));

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Results, [{
    key: 'render',
    value: function render() {
      var _props$globalState$to = this.props.globalState.totalStatus,
          status = _props$globalState$to.status,
          totalCost = _props$globalState$to.totalCost,
          totalRevenue = _props$globalState$to.totalRevenue,
          margin = _props$globalState$to.margin,
          percentMargin = _props$globalState$to.percentMargin;

      return _react2.default.createElement(
        'section',
        { id: 'results' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement('div', { className: 'ads' }),
            _react2.default.createElement(
              'h3',
              null,
              'Your ',
              totalCost,
              ' dollar investment is now'
            ),
            _react2.default.createElement(
              'h1',
              null,
              '$',
              totalRevenue
            ),
            _react2.default.createElement(
              'h4',
              null,
              'You made  ',
              margin,
              ' ',
              status,
              ' (',
              percentMargin,
              '%)'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'main-btn' },
              'Create Account to keep track of all your records'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'a',
              {
                className: 'main-btn',
                onClick: this.props.goBack },
              'Check Other Transaction'
            ),
            _react2.default.createElement('div', { className: 'ads' })
          )
        )
      );
    }
  }]);

  return Results;
}(_react.Component);

exports.default = Results;

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(225);

var _axios2 = _interopRequireDefault(_axios);

var _reactDatepicker = __webpack_require__(59);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _Home = __webpack_require__(226);

var _Home2 = _interopRequireDefault(_Home);

var _Results = __webpack_require__(227);

var _Results2 = _interopRequireDefault(_Results);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.state = {
      name: 'Joe',
      location: 'home',
      date: (0, _moment2.default)(),
      data: '',
      btcToday: '',
      todayDate: '',
      cryptoAmount: '',
      totalStatus: ''
    };
    _this.routingSystem = _this.routingSystem.bind(_this);
    _this.handleDateChange = _this.handleDateChange.bind(_this);
    _this.checkProfit = _this.checkProfit.bind(_this);
    _this.onInputChange = _this.onInputChange.bind(_this);
    _this.goBack = _this.goBack.bind(_this);
    return _this;
  }

  _createClass(Layout, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var self = this;
      _axios2.default.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=' + (0, _moment2.default)().unix() + '&extraParams=kripto').then(function (response) {
        console.log(response.data);
        self.setState({
          btcToday: response.data.BTC,
          todayDate: (0, _moment2.default)()
        }, function () {
          // console.log("componentWillMount",self.state)
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'routingSystem',
    value: function routingSystem() {
      switch (this.state.location) {
        case "home":
          return _react2.default.createElement(_Home2.default, {
            onInputChange: this.onInputChange,
            handleDateChange: this.handleDateChange,
            globalState: this.state,
            checkProfit: this.checkProfit
          });
          break;
        case "result":
          return _react2.default.createElement(_Results2.default, { globalState: this.state, goBack: this.goBack });
          break;
        default:
          return _react2.default.createElement(_Home2.default, {
            onInputChange: this.onInputChange,
            handleDateChange: this.handleDateChange,
            globalState: this.state,
            checkProfit: this.checkProfit
          });
          break;
      }
    }
  }, {
    key: 'handleDateChange',
    value: function handleDateChange(date) {
      var _this2 = this;

      // console.log("handleDateChange", date);
      this.setState({
        date: date
      }, function () {
        console.log(_this2.state.date);
      });
    }
  }, {
    key: 'goBack',
    value: function goBack() {
      this.setState({
        location: 'home',
        date: (0, _moment2.default)()
      });
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(event) {
      var _this3 = this;

      this.setState({
        cryptoAmount: event.target.value
      }, function () {
        console.log(_this3.state.cryptoAmount);
      });
    }
  }, {
    key: 'checkProfit',
    value: function checkProfit() {
      // console.log("checkProfit", this.state.date);
      var self = this;
      _axios2.default.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=' + this.state.date.unix() + '&extraParams=kripto').then(function (response) {
        self.setState({
          data: response.data.BTC
        }, function () {
          // console.log("checkProfit callback, response", response);
          // console.log("checkProfit callback", self.state)
          var CRYPTO_AMOUNT = self.state.cryptoAmount !== undefined ? self.state.cryptoAmount : 0;
          var COST_PRICE = self.state.data.USD;
          var SELLING_PRICE = self.state.btcToday.USD;
          var TOTAL_REVENUE = CRYPTO_AMOUNT * SELLING_PRICE;
          var TOTAL_COST = CRYPTO_AMOUNT * COST_PRICE;

          var gain = TOTAL_REVENUE - TOTAL_COST;
          var gainPercent = gain / TOTAL_COST * 100 | 0;
          var loss = TOTAL_COST - TOTAL_REVENUE;
          var lossPercent = loss / TOTAL_COST * 100 | 0;
          console.log(CRYPTO_AMOUNT + ' COINS at COST_PRICE-' + Date(self.state.todayDate) + ': ' + COST_PRICE + ' | SELLING_PRICE-' + Date(self.state.date) + ' ' + SELLING_PRICE);
          console.log('TOTAL_REVENUE: ' + TOTAL_REVENUE + ' | TOTAL_COST: ' + TOTAL_COST + ' | status: ' + status);

          var status = "";
          if (TOTAL_COST <= TOTAL_REVENUE) {
            status = 'profit';
            console.log("profit :", gain);
            console.log("%profit :", gainPercent);
          } else {
            status = 'loss';
            console.log("loss :", loss);
            console.log("%loss :", lossPercent);
          }
          self.setState({
            location: 'result',
            totalStatus: {
              status: status,
              totalCost: TOTAL_COST.toFixed(2),
              totalRevenue: TOTAL_REVENUE.toFixed(2),
              margin: status === "profit" ? gain.toFixed(2) : loss.toFixed(2),
              percentMargin: status === "profit" ? gainPercent.toFixed(2) : lossPercent.toFixed(2)
            }
          });
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'home' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'header',
            null,
            _react2.default.createElement(
              'div',
              { className: 'logo', onClick: this.goBack },
              'Crypto Profits'
            ),
            _react2.default.createElement(
              'nav',
              { className: 'menu' },
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Register'
              )
            )
          ),
          this.routingSystem()
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[246]);