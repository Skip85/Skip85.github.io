
$(function () {
  var options = {
    threshold: 1.0
  }

  var observer = new IntersectionObserver(callback, options);

  var target = document.querySelector('#listItem');
  observer.observe(target);

  var callback = function(entries, observer) {
    debugger
    entries.forEach(entry => {
        debugger
        entry.time;               // a DOMHightResTimeStamp indicating when the intersection occurred.
        entry.rootBounds;         // a DOMRectReadOnly for the intersection observer's root.
        entry.boundingClientRect; // a DOMRectReadOnly for the intersection observer's target.
        entry.intersectionRect;   // a DOMRectReadOnly for the visible portion of the intersection observer's target.
        entry.intersectionRatio;  // the number for the ratio of the intersectionRect to the boundingClientRect.
        entry.target;             // the Element whose intersection with the intersection root changed.
        entry.isIntersecting;     // intersecting: true or false
    });
  };
});