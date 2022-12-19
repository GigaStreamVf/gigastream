var body = document.getElementsByTagName('body')[0];
var dark_theme_class = 'dark-theme';
var oled_theme_class = 'oled-theme';
var theme = getCookie('theme');
if(theme != '') {
    body.classList.add(theme);
}
document.addEventListener('DOMContentLoaded', function () {
    $('#theme-toggle').on('click', function () {
	
        if (body.classList.contains(dark_theme_class)) {
            body.classList.remove(dark_theme_class);
			body.classList.add(oled_theme_class);
            $('#mode').text('Oled Mode')
            setCookie('theme', 'oled-theme');
        }
        else {
			if (body.classList.contains(oled_theme_class)) {
            	body.classList.remove(dark_theme_class);
				body.classList.remove(oled_theme_class);
            	$('#mode').text('Light Mode')
            	setCookie('theme', 'light-theme');
			}
			
			else {
            	body.classList.add(dark_theme_class);
            	$('#mode').text('Light Mode')
            	setCookie('theme', 'dark-theme');
			}
        }
    });
});
// enregistrement du theme dans le cookie
function setCookie(name, value) {
    var d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    var expires = "expires=" + d.toUTCString();
    console.log(expires)
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    console.log(document.cookie)
}
// methode de recuperation du theme dans le cookie
function getCookie(cname) {
    var theme = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(theme) == 0) {
            return c.substring(theme.length, c.length);
        }
    }
    return "";
}