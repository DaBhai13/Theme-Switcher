(function () {

    var eventUtility = {

        addEvent: function (el, type, fn) {
            if (typeof addEventListener !== "undefined") {
                el.addEventListener(type, fn, false);
            } else {
                el.attachEvent("on" + type, fn);
            }
        },

        getTarget: function (event) {
            if (event.target) {
                return event.target;
            } else {
                return event.srcElement;
            }
        }

    };

    var mouseClick = function (evt) {
        var target = eventUtility.getTarget(evt),
            classData = target.getAttribute("data-body-class");

        if (classData) {
            if (evt.type === "click") {
                document.body.className = classData;
            }
        }
    };

    eventUtility.addEvent(document, "click", mouseClick);

}());
