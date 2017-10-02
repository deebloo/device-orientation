export default class DeviceOrientation extends HTMLElement {
    static get is() {
        return 'device-orientation';
    }

    static get observedAttributes() {
        return ['direction', 'fb', 'lr'];
    }

    constructor() {
        super();
        this._setAttrs = this._setAttrs.bind(this);
    }

    connectedCallback() {
        addEventListener('deviceorientation', this._setAttrs);
    }

    disconnectedCallback() {
        removeEventListener('deviceorientation', this._setAttrs);
    }

    _setAttrs({ alpha, beta, gamma }) {
        if (alpha === null && beta === null && gamma === null) return;
        this.setAttribute('direction', alpha);
        this.setAttribute('fb', beta);
        this.setAttribute('lr', gamma);
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        if (newVal !== oldVal) {
            switch (attrName) {
                case 'direction':
                    this.direction = newVal;
                    break;
                case 'fb':
                    this.fb = newVal;
                    break;
                case 'lr':
                    this.lr = newVal;
                    break;
                default:
                    break;
            }
        }
    }

    set direction(val) {
        if (val) {
            this.setAttribute('direction', val);
        } else {
            this.removeAttribute('direction');
        }
    }

    get direction() {
        return this.getAttribute('direction');
    }

    set fb(val) {
        if (val) {
            this.setAttribute('fb', val);
        } else {
            this.removeAttribute('fb');
        }
    }

    get fb() {
        return this.getAttribute('fb');
    }

    set lr(val) {
        if (val) {
            this.setAttribute('lr', val);
        } else {
            this.removeAttribute('lr');
        }
    }

    get lr() {
        return this.getAttribute('lr');
    }
}

customElements.define(DeviceOrientation.is, DeviceOrientation);