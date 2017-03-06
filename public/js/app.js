
$(".edit-item").on("click", function () {
    var $parentListItemContainer = $(this).parents("li");
    $parentListItemContainer.attr("data-isediting", true);
});

$(".item-edit-cancel").on("click", function() {
    var $parentListItemContainer = $(this).parents("li");
    $parentListItemContainer.attr("data-isediting", false);
});