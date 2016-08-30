/**
 * Created by joshuabrown on 8/25/16.
 */
(function(){
    var outputDisplayToggle = (function(){
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
        // create and dispatch the event
        var event = new CustomEvent( 'vendri_play_an_ad' );
        window.dispatchEvent( event );
    };
    var authorized = function(){
        var obfuscators = document.getElementsByClassName('obfuscated');
        var offers = document.getElementsByClassName('offer');
        for( var i = 0; i < offers.length; i += 1 ){
            offers[ i ].parentNode.removeChild( offers[ i ] );
        }
        for( var j = 0; j < obfuscators.length; j += 1 ){
            obfuscators[ j ].parentNode.removeChild( obfuscators[ j ] );
        }
    };
    function application(){
        var offer = document.getElementsByClassName('offer');
        //document.addEventListener('click',  outputDisplayToggle, false );
        //document.addEventListener('touchstart',  outputDisplayToggle, false );

        for( var i = 0; i < offer.length; i += 1 ){
            offer[ 0 ].addEventListener( 'click',  offerClick, false );
            offer[ 0 ].addEventListener( 'touchstart',  offerClick, false );
        }
        window.addEventListener('vendri_authorized', authorized, false );
    }

    var document_ready = setInterval(function () {
        if ( document.readyState === 'complete' ) {
            clearInterval( document_ready );
            application();
        }
    }, 10);
})();
