//expand button

// $(document).ready(function() {
//     $(".expand-button").click(function() {
//     $(this).closest(".experience-item").find(".experience-description").slideToggle(500);
//     });
//     });

$(document).ready(function () {
    var isExpanded = false;
    $(".expand-button").click(function () {
        var description = $(this).closest(".experience-item").find(".experience-description");
        description.slideToggle(500);
        isExpanded = !isExpanded;
        if (isExpanded) {
            $(this).text("Collapse");
        } else {
            $(this).text("Expand");
        }
    });
});