/**
 * Created by joshuabrown on 8/25/16.
 */
(function(){
    var outputDisplayToggle = (function(){
        console.log('output initting');
        var displayState = false;
        return function(){
            var output_span = document.getElementById('output');
            console.log('output toggling!');
            if( displayState ){
                displayState = false;
                output_span.innerHTML = '';
            }
            else{
                displayState = true;
                output_span.innerHTML = 'document height: ' + document.body.offsetHeight + '<br>document width: ' +
                    document.body.offsetWidth;
            }
        };
    })();
    var offerClick = function(){
        alert('OMG, a Special OFFER!');
    };

    function application(){
        var offer = document.getElementsByClassName('offer');
        console.log( offer );
        //document.addEventListener('click',  outputDisplayToggle, false );
        //document.addEventListener('touchstart',  outputDisplayToggle, false );
        for( var i = 0; i < offer.length; i += 1 ){
            offer[ 0 ].addEventListener( 'click',  offerClick, false );
            offer[ 0 ].addEventListener( 'touchstart',  offerClick, false );
        }

    }

    var document_ready = setInterval(function () {
        if ( document.readyState === 'complete' ) {
            clearInterval( document_ready );
            application();
        }
    }, 10);
})();
