$('#mainNav').affix({
  offset: {
    top: 20
  }
});

 $(function () { 
  $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});  

$(function () { 
  $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});  

$( window ).scroll(function() {   
  if($( window ).scrollTop() > 200){   
  $(".progress-bar").each(function(){
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
  });
       
  }  
});

         document.getElementById('tri').addEventListener('click', function () {
            if (this.classList.contains('triangle')) {
                this.classList.add('movetr');
            }
          });

          document.getElementById('tri-1').addEventListener('click', function () {
            if (this.classList.contains('triangle')) {
                this.classList.add('movetr-1');
            }
          });

          document.getElementById('tri-2').addEventListener('click', function () {
            if (this.classList.contains('triangle')) {
                this.classList.add('movetr-2');
            }
          });
