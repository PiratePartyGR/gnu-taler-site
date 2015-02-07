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
	if (l == 'en') document.title = 'GNU Taler - Taxable Anonymous Libre Electronic Reserve';
	if (l == 'de') document.title = 'GNU Taler - Taxierbare Anonyme Liberale Elektronische Reserven';
	if (l == 'fr') document.title = 'GNU Taler - Taxable Anonyme Libre Électronique Réserve';
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
}

function activate_menu()
{
	b = document.getElementsByClassName("m_" + document.URL.replace(/^.*(\\|\/|\:)/, '').split('.')[0])
	for (i = 0; i < b.length; i++) {
		s = b[i].getAttribute('class');
		b[i].setAttribute('class', s + ' active');
	}
}
