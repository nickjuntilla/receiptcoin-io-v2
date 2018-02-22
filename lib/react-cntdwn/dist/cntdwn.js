'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _millisec = require('millisec');

var _millisec2 = _interopRequireDefault(_millisec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NOT_STARTED = 1;
var STARTED = 2;
var FINISHED = 3;

var Countdown = (function (_Component) {
  _inherits(Countdown, _Component);

  function Countdown(props) {
    _classCallCheck(this, Countdown);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Countdown).call(this, props));

    _this.state = {
      remainingTime: 0,
      status: NOT_STARTED
    };
    return _this;
  }

  _createClass(Countdown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.tick();
        _this2.setState({ status: STARTED });

        _this2.timer = setInterval(function () {
          _this2.tick();
        }, _this2.props.interval);
      }, this.props.startDelay);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: 'calculateRemainingTime',
    value: function calculateRemainingTime() {
      var now = (0, _moment2.default)().toDate();
      return (0, _moment2.default)(this.props.targetDate).diff((0, _moment2.default)(now));
    }
  }, {
    key: 'addLeadingZero',
    value: function addLeadingZero(value) {
      if (value.length < 2) {
        return '0' + value;
      }
      return value;
    }
  }, {
    key: 'tick',
    value: function tick() {
      this.setState({ remainingTime: this.calculateRemainingTime() });

      if (this.state.remainingTime <= 0) {
        this.setState({ status: FINISHED });

        if (this.props.onFinished) {
          this.props.onFinished();
        }

        clearInterval(this.timer);
      }
    }
  }, {
    key: 'renderRemainingTime',
    value: function renderRemainingTime() {
      var time = (0, _millisec2.default)(this.state.remainingTime);
      var html = [];

      var timeSeparator = undefined;
      if (this.props.timeSeparator) {
        timeSeparator = this.props.timeSeparator;
      } else {
        timeSeparator = '&nbsp;';
      }

      if (this.props.format.day) {
        var days = time.format(this.props.format.day);
        if (this.props.leadingZero) {
          days = this.addLeadingZero(days);
        }
        html.push(_react2.default.createElement(
          'span',
          { className: 'react-cntdwn-day', key: 'day' },
          parseInt(days, 10),
          ' '
        ));
      }

      if (this.props.format.hour) {
        var hours = time.format(this.props.format.hour);
        if (this.props.leadingZero) {
          hours = this.addLeadingZero(hours);
        }
        html.push(_react2.default.createElement(
          'span',
          { className: 'react-cntdwn-hour', key: 'hour' },
          parseInt(hours, 10),
          timeSeparator
        ));
      }

      if (this.props.format.minute) {
        var minutes = time.format(this.props.format.minute);
        if (this.props.leadingZero) {
          minutes = this.addLeadingZero(minutes);
        }
        html.push(_react2.default.createElement(
          'span',
          { className: 'react-cntdwn-minute', key: 'minute' },
          parseInt(minutes, 10),
          timeSeparator
        ));
      }

      if (this.props.format.second) {
        var seconds = time.format(this.props.format.second);
        if (this.props.leadingZero) {
          seconds = this.addLeadingZero(seconds);
        }
        html.push(_react2.default.createElement(
          'span',
          { className: 'react-cntdwn-second', key: 'second' },
          parseInt(seconds, 10)
        ));
      }

      return html;
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.status === NOT_STARTED) {
        return _react2.default.createElement('span', null);
      }
      return _react2.default.createElement(
        'div',
        { className: 'react-cntdwn-timer' },
        this.renderRemainingTime()
      );
    }
  }]);

  return Countdown;
})(_react.Component);

exports.default = Countdown;

Countdown.propTypes = {
  targetDate: _react.PropTypes.instanceOf(Date).isRequired,
  interval: _react.PropTypes.number,
  startDelay: _react.PropTypes.number,
  onFinished: _react.PropTypes.func,
  format: _react.PropTypes.object
};

Countdown.defaultProps = {
  interval: 1000,
  startDelay: 0,
  format: {
    hour: 'HH',
    minute: 'MM',
    second: 'SS'
  }
};

module.exports = Countdown;
