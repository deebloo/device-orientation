(function (document) {
    var doProto = Object.create(HTMLElement.prototype);

    doProto.createdCallback = function () {
        this.setAttrs(0, 0, 0);

        window.addEventListener('deviceorientation', function (e) {
            this.setAttrs(e.gamma, e.beta, e.alpha);
        }.bind(this));
    };

    doProto.setAttrs = function (lr, fb, dir) {
        this.setAttribute('lr', lr);
        this.setAttribute('fb', fb);
        this.setAttribute('dir', dir);
    };

    doProto.attributeChangedCallback = function () {
        this.orientationChanged.apply(this, arguments);
    };

    doProto.orientationChanged = function () {};

    document.registerElement('device-orientation', {
        prototype: doProto
    });
})(document);