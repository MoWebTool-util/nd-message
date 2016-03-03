/**
 * @module Message
 * @author crossjs <liwenfu@crossjs.com>
 */

'use strict';

var Widget = require('nd-widget');
var Template = require('nd-template');

var Message = Widget.extend({
  Implements: [Template],

  attrs: {
    classPrefix: 'ui-message',
    template: require('./src/message.handlebars'),
    model: {}
  },

  events: {
    'click [data-role="close"]': 'destroy',
    'click [data-role="toggle"]': 'toggle',
    'mouseenter': 'clearTimeout',
    'mouseleave': 'setTimeout'
  },

  initAttrs: function(config) {
    Message.superclass.initAttrs.call(this, config);

    var model = this.get('model');

    if (typeof model.close === 'function') {
      this.before('destroy', model.close);
      model.close = true;
    }

    if (model.timeout !== -1) {
      this.setTimeout(model.timeout);
    }
  },

  clearTimeout: function() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      delete this.timeout;
    }
  },

  setTimeout: function(timeout) {
    if (!timeout){
      timeout = this.get('model').timeout;
    }

    if (timeout) {
      this.timeout = setTimeout(this.hide.bind(this), timeout);
    }
  },

  hide: function() {
    this.element.animate({
      opacity: 0,
      height: 0
    }, 200, this.destroy.bind(this));
  },

  toggle: function() {
    this.$('[data-role="detail"]').toggle();
  }
});

module.exports = Message;
