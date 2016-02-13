(function (document) {
    var doProto = Object.create(HTMLElement.prototype);

    doProto.lr = 0;
    doProto.fb = 0;
    doProto.direction = 0;

    doProto.createdCallback = function () {
        this.setAttrs(0, 0, 0);
        window.addEventListener('deviceorientation', this.setAttrs.bind(this));
    };

    doProto.detachedCallback = function () {
        window.removeEventListener('deviceorientation', this.setAttrs.bind(this));
    };

    doProto.setAttrs = function (e) {
        this.lr = e.gamma;
        this.fb = e.beta;
        this.direction = e.alpha;

        this.setAttribute('lr', this.lr);
        this.setAttribute('fb', this.fb);
        this.setAttribute('dir', this.dir);
    };

    doProto.attributeChangedCallback = function () {
        if(this.orientationChanged) {
            this.orientationChanged.apply(this, arguments);
        }
    };

    document.registerElement('device-orientation', {
        prototype: doProto
    });
})(document);