$(document).ready(function() {
  // Hide all post links initially
  $('.tag article').each(function() {
    $(this).hide();
  });

  // When tag clicked, toggle post links
  $('.tag header').click(function(event) {
    event.preventDefault();
    $(this).next().slideToggle();
  });
});
