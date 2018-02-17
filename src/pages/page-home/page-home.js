function init() {
    if (!$(".page-home").length) {
        return false;
    }

    console.log("page-home");
}

module.exports = {
    init: init
};