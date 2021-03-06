﻿var GigDetailsController = function (followingService) {
    var followButton;

    var init = function (container) {
        $(".js-toggle-follow").click(toggleFollowing);
    };

    var toggleFollowing = function (e) {
        followButton = $(e.target);

        var foloweeId = button.attr("data-user-id");

        if (followButton.hasClass("btn-default"))
            followingService.createFollowing(foloweeId, done, fail);
        else
            followingService.deleteFollowing(foloweeId, done, fail);
    };


    var done = function () {
        var text = (followButton.text() == "Follow") ? "Following" : "Follow";

        followButton.toggleClass("btn-info").toggleClass("btn-default").text(text);
    };

    var fail = function () {
        alert("Something failed");
    };

    return {
        init: init
    }

}(FollowingService);