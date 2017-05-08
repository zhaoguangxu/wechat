// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'monospaced.elastic'])

.run(function($ionicPlatform, messageService, dateService) {
  var data = {
    "messages": [{
        "id": 8,
        "name": "李明",
        "pic": "img/adam.jpg",
        "lastMessage": {
            "originalTime": "2015-11-27 06:34:55",
            "time": "",
            "timeFrome1970": 0,
            "content": "你在干什么?",
            "isFromeMe": false
        },
        "noReadMessages": 2,
        "showHints": true,
        "isTop": 0,
        "message": [{
            "isFromeMe": false,
            "content": "你好!",
            "time": "2015-11-22 08:50:22"
        }, {
            "isFromeMe": true,
            "content": "你好, 你是谁?",
            "time": "2015-11-22 08:51:02"
        }, {
            "isFromeMe": false,
            "content": "你在干什么?",
            "time": "2015-11-27 06:34:55"
        }, {
            "isFromeMe": true,
            "content": "知道怎么搞的吗?",
            "time": "2015-11-22 08:51:02"
        }, {
            "isFromeMe": false,
            "content": "这是一道可以测出一个人有没有商业头脑的数学题",
            "time": "2015-11-27 06:34:55"
        }, {
            "isFromeMe": false,
            "content": "喝咖啡对身体好吗?",
            "time": "2015-11-22 08:51:02"
        }, {
            "isFromeMe": false,
            "content": "在澳洲申请新西兰签证",
            "time": "2015-11-27 06:34:55"
        }, {
            "isFromeMe": true,
            "content": "说走就走的旅行",
            "time": "2015-11-22 08:51:02"
        }, {
            "isFromeMe": false,
            "content": "ok",
            "time": "2015-11-27 06:34:55"
        }, {
            "isFromeMe": true,
            "content": "拉玛西亚",
            "time": "2015-11-22 08:51:02"
        }, {
            "isFromeMe": true,
            "content": "拉玛西亚影视学院招生简章",
            "time": "2015-11-27 06:34:55"
        }, {
            "isFromeMe": true,
            "content": "去黑头产品排行榜",
            "time": "2015-11-22 08:51:02"
        }, {
            "isFromeMe": false,
            "content": "美国大使馆 北京",
            "time": "2015-11-27 06:34:55"
        }, {
            "isFromeMe": false,
            "content": "被开水烫伤怎么办?",
            "time": "2015-11-22 08:51:02"
        }, {
            "isFromeMe": false,
            "content": "谁说菜鸟不会数据分析?",
            "time": "2015-11-27 06:34:55"
        }, {
            "isFromeMe": true,
            "content": "谁念西风独自凉",
            "time": "2015-11-22 08:51:02"
        }, {
            "isFromeMe": false,
            "content": "被酒莫惊春睡重，赌书消得泼茶香，当时只道是寻常",
            "time": "2015-11-27 06:34:55"
        }]
    }, {
        "id": 1,
        "name": "王峰",
        "pic": "img/ben.png",
        "lastMessage": {
            "originalTime": "2015-11-26 5:22:55",
            "time": "",
            "timeFrome1970": 0,
            "content": "明天什么时候去吃饭?",
            "isFromeMe": false
        },
        "noReadMessages": 5,
        "showHints": true,
        "isTop": 0,
        "message": [{
            "isFromeMe": false,
            "content": "你好!",
            "time": "2015-11-22 08:50:22"
        }, {
            "isFromeMe": true,
            "content": "你好, 你是谁?",
            "time": "2015-11-22 08:51:02"
        }, {
            "isFromeMe": false,
            "content": "明天什么时候去吃饭?",
            "time": "2015-11-26 5:22:55"
        }]
    }, {
        "id": 7,
        "name": "潘敏",
        "pic": "img/max.png",
        "lastMessage": {
            "originalTime": "2015-11-22 15:34:55",
            "time": "",
            "timeFrome1970": 0,
            "content": "我就在软件园?",
            "isFromeMe": false
        },
        "noReadMessages": 0,
        "showHints": false,
        "isTop": 0,
        "message": [{
            "isFromeMe": false,
            "content": "你好!",
            "time": "2015-11-22 08:50:22"
        }, {
            "isFromeMe": true,
            "content": "你好, 你是谁?",
            "time": "2015-11-22 08:51:02"
        }, {
            "isFromeMe": false,
            "content": "我就在软件园?",
            "time": "2015-11-22 15:34:55"
        }]
    }, {
        "id": 2,
        "name": "王振启",
        "pic": "img/mike.png",
        "lastMessage": {
            "originalTime": "2015-11-21 15:34:55",
            "time": "",
            "timeFrome1970": 0,
            "content": "周末有什么安排?",
            "isFromeMe": false
        },
        "noReadMessages": 20,
        "showHints": true,
        "isTop": 0
    }, {
        "id": 6,
        "name": "许仁杰",
        "pic": "img/perry.png",
        "lastMessage": {
            "originalTime": "2014-10-12 15:34:55",
            "time": "",
            "timeFrome1970": 0,
            "content": "好",
            "isFromeMe": false
        },
        "noReadMessages": 0,
        "showHints": false,
        "isTop": 0
    }]
}
  messageService.init(data.messages);

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    // abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.message', {
    url: '/message',
    views: {
      'tab-message': {
        templateUrl: 'templates/tab-message.html',
        controller: 'messageCtrl'
      }
    }
  })
  .state('messageDetail', {
      url: '/messageDetail/:messageId',
      templateUrl: "templates/message-detail.html",
      controller: "messageDetailCtrl"
  })
  .state('tab.friends', {
      url: '/friends',
      views: {
          'tab-friends': {
              templateUrl: 'templates/tab-friends.html',
              controller: 'friendsCtrl'
          }
      }
  })
  .state('tab.find', {
      url: '/find',
      views: {
          'tab-find': {
              templateUrl: 'templates/tab-find.html',
              controller: "findCtrl"
          }
      },
  })
  .state('tab.setting', {
      url: '/setting',
      views: {
          'tab-setting': {
              templateUrl: 'templates/tab-setting.html',
              controller: "settingCtrl"
          }
      }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/message');
  $ionicConfigProvider.tabs.position('bottom');
});
