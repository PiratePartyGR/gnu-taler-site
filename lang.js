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

function get_default_lang()
{
	langs = ['en', 'de', 'fr'];

	for (var i in navigator.languages) {
		for (var j in langs) {
			if (navigator.languages[i].indexOf(langs[j]) != -1) {
				return langs[j];
			}
		}
	}

	return 'en';
}

function loadLang()
{
	l = 'null';
	if (supports_html5_storage()) {
		l = sessionStorage.getItem('lang');
	}

	if (l == 'null') l = get_default_lang();
	setLang(l);

	if (l == 'de') document.title = 'Taler - Taxierbare Anonyme Liberale Elektronische Reserven';
	if (l == 'fr') document.title = 'Taler - Taxable Anonyme Libre Électronique Réserve';
}

function activate_menu()
{
	document.getElementById("m_" + document.URL.replace(/^.*(\\|\/|\:)/, '').split('.')[0]).setAttribute('class', 'active');
}
