function supports_html5_storage() {
	try {
		return 'sessionStorage' in window && window['sessionStorage'] !== null;
	} catch (e) {
		return false;
	}
}

function setLang(l)
{
	document.body.className=l;
	if (supports_html5_storage()) {
		sessionStorage.setItem('lang', l);
	}
}

function loadLang()
{
	if (supports_html5_storage()) {
		l = sessionStorage.getItem('lang');
		if (l == '') {
			l = window.navigator.userLanguage || window.navigator.language;
		}
	} else {
		l = window.navigator.userLanguage || window.navigator.language;
	}
	setLang(l);
}
