//Let's play a game, spot the impurity!
(function() {
  let a = 1;  
  function addtoA(b) {
      return a + b;
  }
  
  const c = addToA(1);
  //can we reasonably assume the following?
  addtoA(1) //always 2
  addtoA(2) //always 3

  function add(x, y) {
    var result = x + y;
    console.log(result);
    return result;
  }

  function getMovies(theaterService) {
    var showDate = new Date();
    return theaterService.getShowings(showDate)
  }
}())

(function() {
  //referential transparency
  function numbers(x, y) {
    return {
      x:x,
      y: y
    };
  }

  const addMe = numbers(1,2);

  function add(addMe) {
    return x + y;
  }

  const result = add(1, 2);

  if(result === 3) {
    //do something awesome
  } else {
    //do something kind of awesome
  }
}())

(function() {
  //functions returning functions y'all
  function trackEvent(category, name) {
    return function(data) {
      ga('send', 'event', category, name, data);
    }
  }

  var timeoffApprovalEvent = trackEvent('timeoff', 'approval');
  timeoffApprovalEvent('approved');
  timeoffApprovalEvent('declined');
}())