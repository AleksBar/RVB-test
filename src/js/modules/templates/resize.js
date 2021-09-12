(function() {

    window.addEventListener("resize", resizeThrottler, false);
  
    var resizeTimeout;
    function resizeThrottler() {
      if ( !resizeTimeout ) {
        resizeTimeout = setTimeout(function() {
          resizeTimeout = null;
          setScrollbarPadding('.pad-r');
          setScrollbarPadding('.ind-r', headerCont);
         }, 66);
      }
    }
  
  }());