var FollowingService = function () {

    var createFollowing = function (foloweeId, done, fail) {
        $.post("/api/followings", { foloweeId: foloweeId })
            .done(done)
            .fail(fail);
    }

    var deleteFollowing = function (foloweeId, done, fail) {
        $.ajax({
            url: "/api/followings" + foloweeId,
            method: "DELETE"
        })
            .done(done)
            .fail(fail);
    }

    return {
        createFollowing: createFollowing,
        deleteFollowing: deleteFollowing
    }

}();