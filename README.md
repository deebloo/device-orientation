# ```<device-orientation>```

A Web Components for detecting device orientation.

```HTML
<device-orientation></device-orientation>
```

### Example
```HTML
<device-orientation id="orientationEl"></device-orientation>

<p>Left Right: <span id="lr">0</span></p>
<p>Left Right: <span id="fb">0</span></p>
<p>Left Right: <span id="dir">0</span></p>

<script>
    var el = document.getElementById('orientationEl');
    var lr = document.getElementById('lr');
    var fb = document.getElementById('fb');
    var dir = document.getElementById('dir');
    
    el.attributeChanged = function () {
        lr.innerText = el.lr;
        fb.innerText = el.fb;
        dir.innerText = el.dir;
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

#### dir
Type: number

direction value
