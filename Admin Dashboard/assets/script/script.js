
$(document).ready(function(){

  // Active NavBar
    $('.nav-link').click(function() {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        
        // SideBar Accordion
        const menu = $('.sidebar-menu-items')
        const scrollHeight = $(menu)[0].scrollHeight;
        $(this).next('.sidebar-menu-items').css('height', menu.height() == 0 ? scrollHeight + 'px' : '0px')
        $(this).find('i').toggleClass('bx-chevron-down bx-chevron-right')
    });

    // Close SideBar
    $('.menu-icon').click(function() {
        $('.sidebar').toggleClass("sidebar-close");
        $('.main-container').toggleClass('expand');
    });

    // Popup
    $('.btn-action').click(function() {
        $(this).parents('.dropdown-container').toggleClass('open_popup');
    });

     
})

// Change Page
function changePage(page) {

    $.ajax({
        url: page + '.html',
        success: function(data) {
            $('.main-container').html(data);
            addCard();
            configure_libraries();
        },
        error: function(err) {
            console.log(err);
        }
    });
    
}

// changePage("invoice")

// Create Notes Card

function addCard(){
      
    const template = $('.notes-template');

    $('.open-modal').click(function() {
        $('.overlay').addClass("open_modal");
    });

    $('.close-icon').click(function() {
        $('.overlay').removeClass("open_modal");
    });

    $('.submit-btn').click(function() {
        let title = $('.form-inputs').val();
        let description = $('.form-textarea').val();

        if (title && description) {
            const clone = template.contents().clone();
            clone.find('.note-title').text(title);
            clone.find('.note-description').text(description);
            $('.no-cards-message').hide();

            $('.note-container').append(clone);

            $(clone.find('.btn-action')).click(function() {
                $(this).parents('.dropdown-container').toggleClass('open_popup');
            });

            $(clone.find('.btn-delete')).click(function() {
                $(this).closest('.note-card').remove();
            });

            $(clone.find('.dropdown-link')).click(function(){
                let SelectValue= $(this).data('name');
                $(this).closest('.note-card').attr('data-filter', SelectValue)
                $(this).closest('.dropdown-container').toggleClass('open_popup')
            })

        }

        $('.overlay').removeClass("open_modal");
        $('.form-inputs').val('');
        $('.form-textarea').val('');
    });

    // filter Card type
    $('.tabToggle').click(function() {
        const tabValue = $(this).data('type');

        $('.tabToggle').removeClass('active');
        $(this).addClass("active");

        $('.note-card').each(function() {
            const cardValue = $(this).data("filter");

            if (tabValue === cardValue || tabValue === "all") {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

}
