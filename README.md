# retro-clock
The goal was to make a working old-school digital clock.

Link to GitHub Page here: https://chapeljuice.github.io/retro-clock/

Link to CodePen here: https://codepen.io/ryan-chapel/pen/xxZKJve

![Retro Clock](https://github.com/chapeljuice/retro-clock/blob/master/retro-clock.png)

I approached it a bit differently in that it's NOT USING ANY TEXT OR FONTS.
I created the elements using spans containing empty divs and borders. The rest is just CSS and JS.

```
<div class="clock">

  <span class="number first">
    <div class="top"><!></div>
    <div class="bottom"><!></div>
  </span>

  <span class="number second">
    <div class="top"><!></div>
    <div class="bottom"><!></div>
  </span>

  <span class="colon">
    <div><!></div>
    <div><!></div>
  </span>

  <span class="number third">
    <div class="top"><!></div>
    <div class="bottom"><!></div>
  </span>

  <span class="number fourth">
    <div class="top"><!></div>
    <div class="bottom"><!></div>
  </span>

</div>
```
