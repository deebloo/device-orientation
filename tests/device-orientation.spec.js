describe('WebNotification', function () {
    window.createDeviceOrientation = window.createDeviceOrientation || function () {};

    var orientationEl;
    var config = {};

    beforeEach(function () {
        orientationEl = createDeviceOrientation(config);
    });

    it('created element should have the correct attributes', function () {
        expect(orientationEl.getAttribute('lr')).toBe('0');
        expect(orientationEl.getAttribute('fb')).toBe('0');
        expect(orientationEl.getAttribute('direction')).toBe('0');
    });

    it('created element should match string representation', function () {
        var expectedEl = '<device-orientation lr="0" fb="0" direction="0"></device-orientation>';

        var orientationWrapper = document.createElement('div');
        orientationWrapper.appendChild(orientationEl);

        expect(orientationWrapper.innerHTML).toBe(expectedEl);
    });
});