const createTestimonials = () => {
	$(document).ajaxStart(() => {
		$(".loader").show();
	}).ajaxComplete(() => {
		$(".loader").hide();
	})
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
					// $(".loader").hide();
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

const createTutorials = () => {
	const url = "https://smileschool-api.hbtn.info/popular-tutorials";
	$.get(
		url,
		(data, status) => {
			if (status === 'success') {
				data.forEach(element => {
					const carouselItem = $("<div>").append($(`<div class="d-flex card-container">`));
					carouselItem.attr("class",
						element["id"] === 1 ? `carousel-item active item-${element["id"]}` : `carousel-item item-${element["id"]}`);
					
					const card = $(`<div class="card card-${element["id"]} card-col-lg-3 col-md-6 col-sm-12 border-0">`)
							.append($(`<img class="card-img-top" src=${element["thumb_url"]}>`),
								$(`<div class="card-body">`)
									.append(
										$(`<h5 class="card-title font-weight-bold tutorials-h1">`).text(element["title"]),
										$(`<p class="card-text tutorials-p">`).text(element["sub-title"]),
										$(`<div class="row author-image-row">`)
											.append(
												$(`<img class="rounded-circle mx-3" src=${element["author_pic_url"]} width="30px" height="30px">`),
												$(`<p class="purple-text pt-1 author">`).text(element["author"])),
										$(`<div class="row justify-content-between mt-1 row-stars-time">`)
											.append(
												$(`<div class="col stars">`).append(
													$(`<span class="holberton_school-icon-star purple-text"></span>`.repeat(element["star"])),
													$(`<span class="holberton_school-icon-star gray-text"></span>`.repeat(5 - element["star"])),
												),
												$(`<p class="purple-text mr-3 duration">`).text(element["duration"])
												)
							)
						)
						
					$(".card-container").append(card);
					$(".carousel-tutorials-inner").append(carouselItem);
				})
			}
		}
	)
}

const createVideos = () => {
	const url = "https://smileschool-api.hbtn.info/latest-videos";
	$.get(
		url,
		(data, status) => {
			if (status === 'success') {
				data.forEach(element => {
					const carouselItem = $("<div>").append($(`<div class="d-flex card-container">`));
					carouselItem.attr("class",
						element["id"] === 1 ? `carousel-item active item-${element["id"]}` : `carousel-item item-${element["id"]}`);
					
					const card = $(`<div class="card card-${element["id"]} card-col-lg-3 col-md-6 col-sm-12 border-0">`)
							.append($(`<img class="card-img-top" src=${element["thumb_url"]}>`),
								$(`<div class="card-body">`)
									.append(
										$(`<h5 class="card-title font-weight-bold tutorials-h1">`).text(element["title"]),
										$(`<p class="card-text tutorials-p">`).text(element["sub-title"]),
										$(`<div class="row author-image-row">`)
											.append(
												$(`<img class="rounded-circle mx-3" src=${element["author_pic_url"]} width="30px" height="30px">`),
												$(`<p class="purple-text pt-1 author">`).text(element["author"])),
										$(`<div class="row justify-content-between mt-1 row-stars-time">`)
											.append(
												$(`<div class="col stars">`).append(
													$(`<span class="holberton_school-icon-star purple-text"></span>`.repeat(element["star"])),
													$(`<span class="holberton_school-icon-star gray-text"></span>`.repeat(5 - element["star"])),
												),
												$(`<p class="purple-text mr-3 duration">`).text(element["duration"])
												)
							)
						)
						
					$(".card-container").append(card);
					$(".carousel-videos-inner").append(carouselItem);
				})
			}
		}
	)
}

$(document).ready(() => {
	createTestimonials();
	createTutorials();
	createVideos();
})