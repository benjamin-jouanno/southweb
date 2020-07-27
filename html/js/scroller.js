var snapScroll = $("header, section, footer").SnapScroll({
    hashes: true
});

//Listen for active element change
//You could listen globally like $(document)
$("header").on(snapScroll.eventChangeActive, function (evt, newActive) {
});

//Listen for visible element change
//You could listen on a specific element like $("header")
$(document).on(snapScroll.eventChangeVisible, function (evt, visibleList) {
});
  
  