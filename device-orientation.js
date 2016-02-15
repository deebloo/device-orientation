(function () {
    expose('createDeviceOrientation', register, factory);

    /**
     * Exposes the new component to the window or to a module
     *
     * @param {string} name - the factory name to expose
     * @param {function} definition - the definition of your web component. registers to the document
     * @param {function} factory - method for programmatically creating web component
     */
    function expose(name, definition, factory) {
        var Component = definition();

        if (typeof exports === 'object') {
            if (typeof module === 'object' && typeof module.exports === 'object') {
                module.exports = exposeFactory;
            }

            exports[name] = exposeFactory;

            return exposeFactory;
        }

        this[name] = exposeFactory;

        function exposeFactory(opts) {
            return factory(Component, opts);
        }

        return exposeFactory;
    }

    /**
     * Create and register component with the document
     */
    function register() {
        var doProto = Object.create(HTMLElement.prototype);

        doProto.createdCallback = function () {
            this.lr = 0;
            this.fb = 0;
            this.direction = 0;

            this.setAttrs({
                gamma: 0,
                beta: 0,
                alpha: 0
            });
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
            this.setAttribute('direction', this.direction);
        };

        doProto.attributeChangedCallback = function () {
            if(this.orientationChanged) {
                this.orientationChanged.apply(this, arguments);
            }
        };

        return document.registerElement('device-orientation', {
            prototype: doProto
        });
    }

    /**
     * create a new instance of the registered component
     *
     * @param {function} Component - the registered component Constructor/class
     * @param {object} options - a map of attributes to attach to the new component instance
     *
     * @return {*}
     */
    function factory(Component, options) {
        var newEl = new Component();

        for(var option in options) {
            if(options.hasOwnProperty(option)) {
                newEl.setAttribute(option, options[option]);
            }
        }

        return newEl;
    }
})();
