const createTestimonials = () => {
	// $(document).ajaxStart(() => {
	// 	$(".loader").show();
	// }).ajaxComplete(() => {
	// 	$(".loader").hide();
	// })
	// $('.loader').hide().ajaxStart(function () {
	// 	console.log(this)
	// 	$(this).show();  // show Loading Div
	// 	} ).ajaxStop ( function(){
	// 	$(this).hide(); // hide loading div
	// 	});
	const url = "https://smileschool-api.hbtn.info/quotes";
	$.get(
		url,
		(data, status) => {
			if (status === 'success') {
				data.forEach(element => {
					$(".loader").hide();
					$(".carousel-inner").append(
						$("<div>", {
							class: element["id"] === 1 ? "carousel-item active" : "carousel-item"
						}).append(
							$("<div>", {
									class: "row justify-content-around align-items-center my-5 px-5"
							}).append(
								$("<img>", {
									class: "rounded-circle",
									src: element["pic_url"],
									width: "160px",
									height: "160px"
								}),
								$("<div>", {
									class: "col-8"
								}).append(
									$("<p>", {
										class: "quote",
										text: element["text"]
									}),
									$("<p>", {
										class: "name font-weight-bold",
										text: element["name"]
									}),
									$("<p>", {
										class: "title font-italic",
										text: element["title"]
									})
								)
							)
						)
					)
					// $('.loader').hide().ajaxStart( function() {
					// 	$(this).show();  // show Loading Div
					// 	} ).ajaxStop ( function(){
					// 	$(this).hide(); // hide loading div
					// 	});
				// $(".loader").show();
				});
			}
		}
	)
	// $(document).ajaxStop(() => {
	// 	$(".loader").hide();
	// })
}

$(document).ready(() => {
    createTestimonials();
})