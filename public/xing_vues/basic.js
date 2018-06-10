// Author: Lee, Yu-Xing (李俞興)
// version: 0.0.0
// created at: 2018年6月7日 (JUN. 07, 2017)
// referenc: https://vuejs.org


// Declarative Rendering
var app_declarative_rendering = new Vue({
  el: '#app_declarative_rendering',
  data: {
    message: 'Hello Vue!',
    span_title: 'Hello Xing.'
  }
});

// Conditionals and Loops
var app_conditionals_and_loops = new Vue({
  el: '#app_conditionals_and_loops',
  data: {
    seen: true,
    people: [
      {say: 'No, I didnt'},
      {say: 'No, I didnt'},
      {say: 'No, I didnt'},
      {say: 'No, I didnt'},
      {say: 'No, I didnt'},
      {say: 'No, I didnt'},
      {say: 'Uh, I did..........'}
    ]
  }
});

app_conditionals_and_loops.people.push({say: 'Uh..., you shouldnt see him.'});

// Handling User Input
var app_handle_user_input = new Vue({
  el: '#app_handle_user_input',
  data: {
    message: 'You are not be here!!!!!!',
    answer: 'I am human'
  },
  methods: {
    reverseMessage: function () {
      app_conditionals_and_loops.seen = app_conditionals_and_loops.seen ? false : true;
      this.message = this.message.split('').reverse().join('');
      this.answer = 'I am ghost';
    }
  }
});

// Composing with Components
Vue.component('which-you-go', {
  props: ['place'],
  template: '<li>{{place.name}}</li>'
});

var app_composing_with_components = new Vue({
  el: '#app_composing_with_componets',
  data:{
    locations: [
      {name: 'heaven'},
      {name: 'hell'}
    ]
  }
});












