$(document).ready(function(){
    
  
  $('.search-icon').click(function(){
      $(this).next().slideToggle();
      $('.small-cart').removeClass('active');
      
      
  });
       
  $('.small-cart-icon').click(function(){
      $(this).next().addClass('active');
      $('.search-form').slideUp();
      
  });
  
  $('.close-small-cart').click(function(){
      $(this).parent().removeClass('active');
      
      
  });
    
    
    
    
    
    
    
    
});


