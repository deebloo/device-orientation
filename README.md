# ```<device-orientation>```

A Web Components for detecting device orientation. Can be used with or without Polymer. Usage is exactly the same.

```
npm i --save device-orientation

```

```HTML
<device-orientation></device-orientation>
```

### Example
```HTML
<!-- For Vanilla with no modules -->
<script src="device-orientation.js"></script>

<device-orientation id="orientationEl"></device-orientation>

<p>Left Right: <span id="lr">0</span></p>
<p>Left Right: <span id="fb">0</span></p>
<p>Left Right: <span id="direction">0</span></p>

<script>
    var el = document.getElementById('orientationEl');
    var lr = document.getElementById('lr');
    var fb = document.getElementById('fb');
    var direction = document.getElementById('direction');

    el.orientationChanged = function () {
        lr.innerText = el.lr;
        fb.innerText = el.fb;
        direction.innerText = el.direction;
    };
</script>
```

### properties

#### lr
Type: Number

left to right value

#### fb
Type: Number

front to back value

#### direction
Type: number

direction value
