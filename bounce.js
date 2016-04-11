// $(document).ready(function(){
//   animateDiv();
// });

// function makeNewPosition(){
    
//   // Get viewport dimensions (remove the dimension of the div)
//   var h = $(window).height();
//   var w = $(window).width();
  
//   var nh = Math.floor(Math.random() * h);
//   var nw = 0 || w;
  
//   return [nh,nw];
    
// }

// function animateDiv(){
//   var newq = makeNewPosition();
//   var oldq = $('.emoji').offset();
  
//   $('.emoji').animate({ top: newq[0], left: newq[1] }, 2000, "linear", function(){
//     animateDiv();        
//   });
// };