const createMenuItems = () => {
    const url = "https://smileschool-api.hbtn.info/courses";
    $.get(
        url,
        data => {
            const { topics } = data;
            for (let i = 0; i < topics.length; i++) {
                const topicOption = $(`<option value=${i + 1}></option>`).text(topics[i]);
                $(".topic-menu").append(topicOption);
            }

            const { sorts } = data;
            for (let j = 0; j < sorts.length; j++) {
                const sortOption = $(`<option value=${j + 1}></option>`).text(sorts[j]);
                $(".sort-by-menu").append(sortOption);
            }
        }
    )
}

const sortBy = value => {
    $(".card-container").empty();
    const url = "https://smileschool-api.hbtn.info/courses";
    $.get(
        url,
        data => {
            const { courses } = data;
            // Sort by most popular
            if (value === "1") { }
            // Sort by most recent
            else if (value === "2") {
                courses.sort((a, b) => (a.published_at < b.published_at) ? 1 : -1);
            }
            // Sort by most viewed
            else if (value === "3") {
                courses.sort((a, b) => (a.views < b.views) ? 1 : -1);
            }
            generateCards(courses);
        }
    )
}

const filterBy = value => {
    $(".card-container").empty();
    // if (value === "1")
    //     sortByMostPopular();
    // else if (value === "2")
    //     filterByNovice();
    // else if (value === "3")
    //     filterByIntermediate();
    // else if (value === "4")
    //     filterByExpert();
    const url = "https://smileschool-api.hbtn.info/courses";
    $.get(
        url,
        data => {
            const { courses } = data;
            // Filter by most all
            if (value === "1") { }
            // Filer by most Novice
            else if (value === "2") {
                const filteredTopic = courses.filter(function (element) {
                    return element.topic === "Novice"
                });
            }
            // Filter by most Intermediate
            else if (value === "3") {
                const filteredTopic = courses.filter(function (element) {
                    return element.topic === "Intermediate"
                });
            }
            // Filter by most Intermediate
            else if (value === "4") {
                const filteredTopic = courses.filter(function (element) {
                    return element.topic === "Expert"
                });
            }
            generateCards(filteredTopic);
        }
    )
}

const generateCards = courses => {
    courses.forEach(element => {
        const card = $(`<div class="card card-col-lg-3 col-md-6 col-sm-12 border-0">`)
            .append($(`<img class="card-img-top" src=${element["thumb_url"]}>`),
                $(`<div class="card-body">`)
                    .append(
                        $(`<h5 class="card-title font-weight-bold tutorials-h">`).text(element["title"]),
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
    });
}

$(document).ready(() => {
    createMenuItems();
    sortByMostPopular();
})