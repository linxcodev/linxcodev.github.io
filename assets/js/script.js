jQuery(document).ready(function(){

    // Scroll ke tujuan
    $('a[data-slide="slide"]').click(function(e){
        e.preventDefault();
        var target = $(this).data('slide-target');
        $("html, body").animate({
            scrollTop: $(target).offset().top - 80
        }, 1200);
    });

    function hasScrolled() {
        var navbar = $(".head-nav");
        if (window.scrollY > 100) {
            navbar.addClass('scrolled');
        }else {
            navbar.removeClass('scrolled');
        }
    }

    $(window).scroll(function() {
        hasScrolled();
    });

    hasScrolled();

    AOS.init({
      duration: 700,
    })

    $('.btn-download').click(function () {
      alert('Soon...')
      return false;
    })
});

$(function(){
    $(window).scroll(function(){
        $(this).scrollTop()>100 ? $(".backtotop").fadeIn() : $(".backtotop").fadeOut()
    }),
    $(".backtotop").click(function(){
        return $("html,body").animate({scrollTop:0},800),!1})
});

$('.sidebar-toggle').click(function(e){
  e.preventDefault();
  $('.sidebar').addClass('active');
  $('.sidebar-overlay').css('visibility', 'visible');
  $('.sidebar-list').click(function(e){
    e.preventDefault();
    $('.sidebar').removeClass('active');
    $('.sidebar-overlay').css('visibility', 'hidden');
  })
})
$('.sidebar-overlay').click(function(e){
  e.preventDefault();
  $('.sidebar').removeClass('active');
  $('.sidebar-overlay').css('visibility', 'hidden');
});

// Function Tabs
function openTabs(evt, tabName) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
