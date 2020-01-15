$(document).ready(function() {
    $(window).scroll( function(){
       
        $('#bar-fill-1').each( function(i){

            const top_of_element = $(this).height();;
            const bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > top_of_element ){
                $(this).animate({'height':'100%',},3000, function() {
                    $(this).hide();
                    
                    $('#haptics-bar').animate({'height':'5rem'},100);
                    $('#haptics-text').animate({'opacity':'.5'},100, function() {
                        
                        $('#features-bar').css('height', '5rem');
                        $('#section-features').animate({'top':'90%',},100, function() {
                            $('#haptics-bar').animate({'height':'3rem'},100);
                        });
                    });
                    
                    $('#haptics-text').animate({'opacity':'0'},100, function() {
                        
                        $('#features-bar').css('height', '11rem');
                        $('#section-features').animate({'top':'70%',},100);
                        $('#bar-fill-2').animate({'height':'100%',},3000, function() {});
                        
                        $('#features-text').animate({'opacity':'1',},500, function() {
                           
                        });

                      
                    });
                    
                   
                    /*$('#section-features').animate({'top':'70%',},300);*/
                    /*$('#features-text').animate({'opacity':'.5',},700, function() {
                        $('#features-text').animate({'opacity':'1',},700);
                    });*/
                    
                    
                });

                $(window).off('scroll');
            }
            
        });
       
    })
})