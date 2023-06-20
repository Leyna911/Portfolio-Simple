$(document).ready(function(){
    let $btns = $('.project-area .button-group button');
    let $gridRow = $('.project-area .grid-row');

    $btns.click(function(e){
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr("data-filter");
        $gridRow.isotope({
            filter:selector
        });
        return false;
    })
})