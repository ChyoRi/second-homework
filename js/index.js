
$(function(){

    $('button').click(function(){
        var text = $('input').val();
        $('.list').append('<li>' + text + '</li>');
    });
    
 });