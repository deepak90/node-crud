
$(".edit-item").on("click", function () {
    var $parentListItemContainer = $(this).parents("li");
    $parentListItemContainer.attr("data-isediting", true);
});

$(".item-edit-cancel").on("click", function() {
    var $parentListItemContainer = $(this).parents("li");
    $parentListItemContainer.attr("data-isediting", false);
});

$(".delete-item").on("click", function() {
     var $nameText = $(this).parents(".btn-group").siblings(".name-item").text();
     console.log($nameText);
     $("#deleteModal").find(".modal-name-item").html($nameText);
})