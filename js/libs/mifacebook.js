window.fbAsyncInit = function() {
    FB.init({
        appId: '813875479438305',
        cookie: true,
        xfbml: true,
        version: 'v2.9'
    });
    FB.AppEvents.logPageView();
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function shareScore(score, user) {
    FB.ui({
        method: 'share',
        href: 'http://prueba.edukt.studio/',    //Aqui va el link de tu página ya hosteada (el indice)
        hashtag: '#SteamScapes',                //Hashtag del juego, pueden ser random
        quote: 'Steam Scapes\nMi puntuacion: ' + score + '\nMi usuario: ' + user
    }, function(response) {});
}