$(document).ready(function() {
    document.addEventListener("deviceready", onDeviceReadyTouch, false);
});

$(document).getElementById('write').addEventListener('click', writeToLocal, false);

function onDeviceReadyTouch() {
    init3d();
    startPdfHandler();
}

function init3d() {
    ThreeDeeTouch.onHomeIconPressed = function (payload) {
        if ( (payload.type == 'app') && (payload.title == 'CITICtoken') ) {
            var url_scheme = 'iDGateCITIC://';
            // var url_scheme = 'calshow://';

            appAvailability.check(
                url_scheme,
                function() {
                    window.open(url_scheme, '_system');
                },
                function() {
                    window.open("https://itunes.apple.com/app/id1219197546");
                }
            );
        } else if ( (payload.type == 'browser') && (payload.title == 'Corporate Website') ) {
            window.open('https://www.cncbinternational.com');
        }
    }
}

function startPdfHandler() {
    window.onclick = function(event) { 
        if (event.toElement.pathname) {
            if (event.toElement.pathname.match("pdf$")) {
                var url = event.toElement.protocol + "\/\/" + event.toElement.hostname + event.toElement.pathname;
                if (device.platform == 'Android') {
                    event.preventDefault(); 
                    navigator.app.loadUrl(url, { openExternal:true });
                } else if (device.platform == 'iOS') {
                    event.preventDefault(); 
                    var ref = cordova.InAppBrowser.open(url, '_blank', 'location=no');                    
                }
            }
        }
    };
}


function writeToLocal() {
    var tempStorage = window.sessionStorage;
    window.localStorage.setItem("key", "value");

}
