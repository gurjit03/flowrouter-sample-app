import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { FlowRouter } from 'meteor/kadira:flow-router';

FlowRouter.route('/',{
  name: 'home',
  action: function() {
    BlazeLayout.render('layout', {content: 'home'});
  }
})

FlowRouter.route('/about', {
  name: 'about',
  action: function() {
    BlazeLayout.render('layout',{content: 'about'});
  }
})

FlowRouter.route('/multilevel', {
  name: 'multilevel',
  action: function() {
    BlazeLayout.render('layout', {content: 'layoutPanel', panelContent: 'dashboard'});
  }
})