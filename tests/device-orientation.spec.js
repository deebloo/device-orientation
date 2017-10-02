describe('WebNotification', function () {
    var orientationEl;

    beforeEach(function () {
        orientationEl = new DeviceOrientation();
    });

    it('created element should have the correct attributes', function () {
        console.log(orientationEl.direction);

        // expect(orientationEl.getAttribute('lr')).toBe('0');
        // expect(orientationEl.getAttribute('fb')).toBe('0');
        // expect(orientationEl.getAttribute('direction')).toBe('0');
    });

    it('created element should match string representation', function () {
        // var expectedEl = '<device-orientation lr="0" fb="0" direction="0"></device-orientation>';

        // var orientationWrapper = document.createElement('div');
        // orientationWrapper.appendChild(orientationEl);

        // expect(orientationWrapper.innerHTML).toBe(expectedEl);
    });
});