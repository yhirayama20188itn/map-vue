+function () { window._uac = {}; var ua = window.navigator.userAgent.toLowerCase(); var ver = window.navigator.appVersion.toLowerCase(); _uac.browser = function () { if (ua.indexOf("edge") !== -1) return "edge"; else if (ua.indexOf("iemobile") !== -1) return "iemobile"; else if (ua.indexOf("trident/7") !== -1) return "ie11"; else if (ua.indexOf("msie") !== -1 && ua.indexOf("opera") === -1) { if (ver.indexOf("msie 6.") !== -1) return "ie6"; else if (ver.indexOf("msie 7.") !== -1) return "ie7"; else if (ver.indexOf("msie 8.") !== -1) return "ie8"; else if (ver.indexOf("msie 9.") !== -1) return "ie9"; else if (ver.indexOf("msie 10.") !== -1) return "ie10" } else if (ua.indexOf("chrome") !== -1 && ua.indexOf("edge") === -1) return "chrome"; else if (ua.indexOf("safari") !== -1 && ua.indexOf("chrome") === -1) return "safari"; else if (ua.indexOf("opera") !== -1) return "opera"; else if (ua.indexOf("firefox") !== -1) return "firefox"; else return "unknown_browser" }(); _uac.device = function () { if (ua.indexOf("iphone") !== -1 || ua.indexOf("ipod") !== -1) return "iphone"; else if (ua.indexOf("ipad") !== -1) return "ipad"; else if (ua.indexOf("android") !== -1) return "android"; else if (ua.indexOf("windows") !== -1 && ua.indexOf("phone") !== -1) return "windows_phone"; else return "" }(); _uac.iosVer = function () { if (/iP(hone|od|ad)/.test(navigator.platform)) { var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/); var versions = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)]; return versions[0] } else return 0 }(); _uac.isIE = _uac.browser.substr(0, 2) === "ie" && _uac.browser !== "iemobile"; _uac.isiOS = _uac.device === "iphone" || _uac.device === "ipad"; _uac.isMobile = ua.indexOf("mobi") !== -1 || _uac.device === "iphone" || _uac.device === "windows_phone" && ua.indexOf("wpdesktop") === -1 || _uac.device === "iemobile"; _uac.isTablet = _uac.device === "ipad" || _uac.device === "android" && !_uac.isMobile; _uac.isTouch = "ontouchstart" in window; _uac.isModern = !(_uac.browser === "ie6" || _uac.browser === "ie7" || _uac.browser === "ie8" || _uac.browser === "ie9" || 0 < _uac.iosVer && _uac.iosVer < 8); var homeClass = function () { var classStr = " "; classStr += _uac.browser !== "" ? _uac.browser + " " : "browser-unknown ", classStr += _uac.device !== "" ? _uac.device + " " : "device-unknown ", classStr += _uac.isMobile ? "mobile " : "desktop ", classStr += _uac.isTouch ? "touch " : "mouse ", classStr += _uac.isiOS ? "ios " : "", classStr += _uac.isIE ? "ie " : "", classStr += _uac.isModern ? "modern " : "old "; return classStr }; document.addEventListener("DOMContentLoaded", function () { document.documentElement.className += homeClass() }) }();