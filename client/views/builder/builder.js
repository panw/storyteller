Template.builder.rendered = function (){
	$(".accordion").accordion({
	  heightStyle: "content"
	});

	// Add Button //
	$("#addPage").click(function(){
	 $(".scroll-content").append("<div class='scroll-content-item ui-widget-header'>2</div>");
	});
};