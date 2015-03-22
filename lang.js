/**
 * @licstart  The following is the entire license notice for the
 *  JavaScript code in this page.
 *
 * Copyright (C) 2014 GNUnet e.V.
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 */

// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later

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

// @license-end
