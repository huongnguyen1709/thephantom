$(document).ready(function() {   

    /* LOADING PROGRESS */ 

    $('.home').hide();
    $('.main').hide();

    setTimeout(function(){
        $('.loading-bar').css('opacity', '1');
        setTimeout(function(){
            $('.loading-fill').animate({'width':'30%',},800, function() {
                setTimeout(function(){
    
                    $('.loading-fill').animate({'width':'40%',},1300);  
    
                    $('.loading-fill').animate({'width':'75%',},600, function() {
                        setTimeout(function(){
                            $('.loading-fill').animate({'width':'85%',},1100);
                            $('.loading-fill').animate({'width':'100%',},200, function() {
                                $('.loading').hide();
                                $('.home').show();
                                $('.main').show();
                            });
                        }, 300);
                    });
    
                }, 500);
                
            });
        }, 1500);
        
    }, 400);


    /* ANIMATION FOR HIDING HEADER & SHOWING MAIN BODY */

    setTimeout(function(){
        $('.home').addClass('hiding-home');
        $('html, body').animate({ scrollTop: 1000 }, 1000, function() {
            $('.home').removeClass('hiding-home');
            $('.main').addClass('showing-main');
        });
       
       
    }, 10500);


    /* ANIMATION FOR HEADER-TEXT & NAVIGATION */

    setTimeout(function(){
        $('.header-text').toggleClass('slide-header');
        $('.logo').toggleClass('scale-show');
        setTimeout(function(){
            $('.nav-list').css('opacity', '1');
            $('.languages').css('opacity', '1');
        }, 300);
        
    }, 8000);


    /* WINDOW SCROLL & ANIMATIONS FOR SECTIONS HAPTICS, FEATURES & STATEMENT */ 

    $(window).scroll( function(){

        $('#bar-fill-1').each( function(i){

            const top_of_element = $(this).height();
            const bottom_of_window = $(window).scrollTop(); 

            if( bottom_of_window > top_of_element ){

                $(this).animate({'height':'100%',},5000, function() {
                    $(this).hide();
                    
                    $('#haptics-bar').css('height', '3rem');
                    $('.haptics-text').toggleClass('blur');
                    $('#features-bar').css('height', '12rem');
                    $('.section-features').css('top', '70%');
                    $('.features-text').toggleClass('slide');
                    $('#bar-fill-2').animate({'height':'100%',},5000, function() {
                        $('#bar-fill-2').hide();
                        $('#features-bar').css('height', '3rem');                 
                        $('.features-text').toggleClass('slide');
                        $('.features-text').toggleClass('blur');
                        $('#statement-bar').css('height', '12rem');
                        $('.section-statement').css('top', '100%');
                        $('.statement-text').toggleClass('slide');
                        $('#bar-fill-3').animate({'height':'100%',},5000);
                    });

                });

                $(window).off('scroll');
            }
            
        });
        
    })
    
})