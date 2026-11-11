(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = $(".front");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${(_mouseX - _w) * 0.04}% ${(_mouseY - _h) * 0.004}%`;
        let _depth2 = `${(_mouseX - _w) * 0.03}% ${(_mouseY - _h) * 0.003}%`;
        let _depth3 = `${(_mouseX - _w) * 0.02}% ${(_mouseY - _h) * 0.002}%`;
        let _depth4 = `${(_mouseX - _w) * 0.01}% ${(_mouseY - _h) * 0.001}%`;
        let x = `${_depth2}, ${_depth1}`;
        //console.log(x);
        if (!$("html").hasClass("disable_animation")) {
            $("img.p4", elem).css('translate',`${_depth1}`)
            $("img.p3", elem).css('translate',`${_depth2}`)
            $("img.p2", elem).css('translate',`${_depth3}`)
            $("img.p1", elem).css('translate',`${_depth4}`)
        }
        
        //elem.style.backgroundPosition = x;
    }

})();

/*(function() {
    
    $(".card-button").click(function(event) {
        let that = $(this);
        //$("#welcome .myrole").removeClass("active");
        $("#context .start").addClass("active");
        that.addClass("go").on("animationend", function() {
            //that.removeClass("go");
            $("#welcome .myrole").removeClass("active");
            $("body").scrollTop(0);
        });
    });

})();*/