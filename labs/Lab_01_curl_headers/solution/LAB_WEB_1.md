# **Лабораторная работа 1**

Для всех сайтов было использовано - `curl <сайт> -I -k -L -s`

---
# РГУПС

HTTP/1.1 301 Moved Permanently - *Статус ответа, который указывает, что запрашиваемый ресурс был перемещен на постоянной основе и содержит новый адрес (URL)*  
Server: nginx/1.19.1 - *Сервер, обслуживающий запрос - nginx версии 1.19.1.*  
Date: Sat, 16 Sep 2023 13:59:45 GMT - *Дата и время, когда сервер сгенерировал ответ*  
Content-Type: text/html - *Тип контента, предоставляемый сервером в данном ответе, будет HTML*  
Content-Length: 169 - *Размер содержимого ответа в байтах: 169 байт*  
Connection: keep-alive - *Поддержание соединения между клиентом и сервером после обмена текущими данными*  
Location: https://rgups.ru/ - *урл*  
  
HTTP/1.1 200 OK - *Статус ответа, означающий, что запрос клиента был успешно выполнен.*  
Server: nginx/1.19.1 - *Веб-сервер, обслуживающий запрос, будет использовать программное обеспечение nginx версии 1.19.1.*  
Date: Sat, 16 Sep 2023 13:59:46 GMT - *Дата и время отправки ответа от сервера*  
Content-Type: text/html; charset=utf-8 - *Тип контента, предоставляемый сервером в данном ответе будет HTML с указанным набором символов UTF-8*  
Connection: keep-alive - *Инструкция сервера использовать постоянное соединение*  
X-Powered-By: ProcessWire CMS - *Контент-менеджер сайта*  
Set-Cookie: wire=64ec13a06e099ed48dd5879543610af7; path=/; HttpOnly; SameSite=Lax - *устанавливает cookie с именем "wire", значением, дополнительными настройками доступности и атрибутами безопасности*  
Expires: Thu, 19 Nov 1981 08:52:00 GMT - *Заголовок управления кэшированием, указывающий, что ресурс истек и не должен храниться в кэше*  
Cache-Control: no-store, no-cache, must-revalidate - *Заголовок управления кэшированием, указывающий, что ответ не должен кэшироваться и должен быть повторно подтвержден перед каждым использованием*  
Pragma: no-cache - *Дополнительный заголовок, который сообщает клиенту, что кэширование данного ответа запрещено*  
  
---

# GitHub

HTTP/1.1 301 Moved Permanently  
Content-Length: 0  
Location: https://github.com/  
  
HTTP/1.1 200 OK  
Server: GitHub.com  
Date: Sat, 16 Sep 2023 14:29:51 GMT  
Content-Type: text/html; charset=utf-8  
Vary: X-PJAX, X-PJAX-Container, Turbo-Visit, Turbo-Frame, Accept-Language, Accept-Encoding, Accept, X-Requested-With - *Этот заголовок указывает на факторы, 
которые могут влиять на кэширование ответа на стороне клиента или прокси-сервера*  
content-language: en-US - *Этот заголовок указывает на язык контента, который отправляется в ответе*  
ETag: W/"b761c5e371b92240c4942563af24c28e" - *Заголовок представляет собой метку, которая идентифицирует уникальную версию ресурса. Он используется для управления кэшированием на стороне клиента. Если ресурс изменяется, ETag изменяется, и клиент может использовать его для определения, нужно ли ему получить обновленную версию ресурса*  
Cache-Control: max-age=0, private, must-revalidate  
Strict-Transport-Security: max-age=31536000; includeSubdomains; preload - *Этот заголовок относится к безопасности. Он указывает, что клиент должен поддерживать строгую защиту транспортного уровня (HTTPS) в течение 31536000 секунд и включать поддомены*  
X-Frame-Options: deny - *Это мера безопасности, которая может помочь предотвратить атаки*  
X-Content-Type-Options: nosniff - *Этот заголовок предотвращает браузер от интерпретации содержимого как чего-то, отличного от указанного в Content-Type*  
X-XSS-Protection: 0 - *Этот заголовок указывает на то, что браузер не должен активировать механизм защиты от межсайтового скриптового выполнения (XSS)*  
Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin - *Заголовок управляет тем, какой информацией о предыдущей странице делится браузер при переходе по ссылке*  
Content-Security-Policy: default-src 'none'; base-uri 'self'; child-src github.com/assets-cdn/worker/ gist.github.com/assets-cdn/worker/; connect-src 'self' uploads.github.com www.githubstatus.com collector.github.com raw.githubusercontent.com api.github.com github-cloud.s3.amazonaws.com github-production-repository-file-5c1aeb.s3.amazonaws.com github-production-upload-manifest-file-7fdce7.s3.amazonaws.com github-production-user-asset-6210df.s3.amazonaws.com cdn.optimizely.com logx.optimizely.com/v1/events objects-origin.githubusercontent.com *.actions.githubusercontent.com productionresultssa0.blob.core.windows.net/ productionresultssa1.blob.core.windows.net/ productionresultssa2.blob.core.windows.net/ productionresultssa3.blob.core.windows.net/ productionresultssa4.blob.core.windows.net/ productionresultssa5.blob.core.windows.net/ productionresultssa6.blob.core.windows.net/ productionresultssa7.blob.core.windows.net/ productionresultssa8.blob.core.windows.net/ productionresultssa9.blob.core.windows.net/ wss://*.actions.githubusercontent.com github-production-repository-image-32fea6.s3.amazonaws.com github-production-release-asset-2e65be.s3.amazonaws.com insights.github.com wss://alive.github.com github.githubassets.com; font-src github.githubassets.com; form-action 'self' github.com gist.github.com objects-origin.githubusercontent.com; frame-ancestors 'none'; frame-src viewscreen.githubusercontent.com notebooks.githubusercontent.com support.github.com; img-src 'self' data: github.githubassets.com media.githubusercontent.com camo.githubusercontent.com identicons.github.com avatars.githubusercontent.com github-cloud.s3.amazonaws.com objects.githubusercontent.com secured-user-images.githubusercontent.com/ user-images.githubusercontent.com/ private-user-images.githubusercontent.com opengraph.githubassets.com github-production-user-asset-6210df.s3.amazonaws.com customer-stories-feed.github.com spotlights-feed.github.com objects-origin.githubusercontent.com *.githubusercontent.com; manifest-src 'self'; media-src github.com user-images.githubusercontent.com/ secured-user-images.githubusercontent.com/ private-user-images.githubusercontent.com github.githubassets.com; script-src github.githubassets.com; style-src 'unsafe-inline' github.githubassets.com; upgrade-insecure-requests; worker-src github.com/assets-cdn/worker/ gist.github.com/assets-cdn/worker/ - *Доп. уровень безопасности, позволяющий распознавать и устранять определённые типы атак, таких как Cross Site Scripting (XSS) и атаки внедрения данных*  
Set-Cookie: _gh_sess=5YlXgOgdJkaGeYvq3yBSOvAeA1uOzlokbImzaiozQooCD%2BJTAbKmK5SnzsWcMjA1mtjTTw7ytUBahKagc%2Bxng4LINZhfGKLKhZwzenMS4rSEsz6YhCGFeR%2BIUMYnRX5t6Wk7Qwgtv6ip12lmvtiTHJ7aGvGA7XN3l3SmQYcAlYX1Eb7iwWiCF%2BQCiM1VhgS1C05pXxVqjBWilvw3kRj7F6M%2Bl%2FaJw22a6UFvJ5iXmm6A%2FFVWbEkHSvw9hRn2xCuNhSd9t6QjrqSAiB%2BZutxFgg%3D%3D--5ChdZ4P3u4LY7KNd--UajobmG10%2FRwHVb7FHlBsA%3D%3D; Path=/; HttpOnly; Secure; SameSite=Lax  
Set-Cookie: _octo=GH1.1.717263505.1694874601; Path=/; Domain=github.com; Expires=Mon, 16 Sep 2024 14:30:01 GMT; Secure; SameSite=Lax  
Set-Cookie: logged_in=no; Path=/; Domain=github.com; Expires=Mon, 16 Sep 2024 14:30:01 GMT; HttpOnly; Secure; SameSite=Lax  
Accept-Ranges: bytes - *Этот заголовок указывает, что сервер поддерживает диапазоны запросов для данного ресурса*  
X-GitHub-Request-Id: 0444:5553:16E76F80:17357C55:6505BBE9 - *Заголовок содержит идентификатор запроса, который может быть полезен для отслеживания запроса на стороне сервера*  

---
# РЖД

Дополнительно использовалось - `--User-agent "Yandex"`

HTTP/1.1 301 Moved Permanently  
Date: Sat, 16 Sep 2023 14:51:10 GMT  
Content-Type: text/html  
Content-Length: 150  
Connection: keep-alive  
Location: https://rzd.ru:443/  

HTTP/1.1 301 Moved Permanently  
Content-Type: text/html  
Content-Length: 185  
Connection: keep-alive  
Date: Sat, 16 Sep 2023 14:51:11 GMT  
Location: https://www.rzd.ru/  
Set-Cookie: session-cookie=1785689ff5514fad7e32755718991a24b0086af5702185995b11679c7be94628d4749b89e1a81f2b70add0c0261f3947; Max-Age=86400; Path=/; secure; HttpOnly  
X-XSS-Protection: 1; mode=block - *Этот заголовок говорит браузеру о включенной защите от XSS и указывает ему блокировать скрипты, которые могут представлять угрозу безопасности*  

HTTP/1.1 200  
Content-Type: text/html;charset=utf-8  
Content-Length: 209317  
Connection: keep-alive  
Date: Sat, 16 Sep 2023 14:51:11 GMT  
Vary: Accept-Encoding  
X-UCM-Pod-Name: inex-ucm-776d97f9d-p87lc - *Этот заголовок связан с идентификацией серверного подключения*  
Strict-Transport-Security: max-age=15724800; includeSubDomains  
Via: nginx1 - *Этот заголовок указывает на прокси-сервер, через который прошел запрос*  
X-Frame-Options: sameorigin  
Set-Cookie: session-cookie=178568a0063f15f07e32755718991a240df1657e58509efd1d2a2f2228f4644b435720f7604a0403cc83ca46f06be496; Max-Age=86400; Path=/; secure  
X-XSS-Protection: 1; mode=block  

---
# Я
Дополнительно использовалось - `--User-agent "Yandex"`

HTTP/1.1 302 Moved temporarily  
Accept-CH: Sec-CH-UA-Platform-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA, Sec-CH-UA-Full-Version-List, Sec-CH-UA-WoW64, Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Platform, Sec-CH-UA-Full-Version, Viewport-Width, DPR, Device-Memory, RTT, Downlink, ECT - *Строка указывающая на тип принимаемого контента*  
Cache-Control: max-age=1209600,private  
Date: Sat, 16 Sep 2023 15:16:29 GMT  
Location: https://dzen.ru/?yredirect=true  
NEL: {"report_to": "network-errors", "max_age": 100, "success_fraction": 0.001, "failure_fraction": 0.1} - *политика обработки ошибок сети, указывает, что отчеты об ошибках сети должны быть отправлены на указанный адрес URI в поле report_to*  
P3P: policyref="/w3c/p3p.xml", CP="NON DSP ADM DEV PSD IVDo OUR IND STP PHY PRE NAV UNI"  
Portal: Home  
Report-To: { "group": "network-errors", "max_age": 100, "endpoints": [{"url": "https://dr.yandex.net/nel", "priority": 1}, {"url": "https://dr2.yandex.net/nel", "priority": 2}]} - *объявляет группы конечных точек отчетности для веб-сайта разработчика*  
X-Content-Type-Options: nosniff  
X-Robots-Tag: unavailable_after: 12 Sep 2022 00:00:00 PST  
X-Yandex-Req-Id: 1694877389100953-1276908657129942879-balancer-l7leveler-kubr-yp-sas-24-BAL-9613  
set-cookie: is_gdpr=0; Path=/; Domain=.yandex.ru; Expires=Mon, 15 Sep 2025 15:16:29 GMT  
set-cookie: is_gdpr_b=COj6IhDizgEoAg==; Path=/; Domain=.yandex.ru; Expires=Mon, 15 Sep 2025 15:16:29 GMT  
set-cookie: _yasc=2ydS6kRxAyk3g3Ch8jyNmW2wfINzyFo4wu41n4Ed4RSW7iFabLO9wR1KrLMsWzIWRFyn; domain=.yandex.ru; path=/; expires=Tue, 13 Sep 2033 15:16:29 GMT; secure  

HTTP/1.1 200 Ok  
Cache-Control: no-cache, no-store, max-age=0, must-revalidate  
Content-Security-Policy-Report-Only: default-src 'none'; connect-src 'self' an.yandex.ru strm.yandex.ru *.strm.yandex.net mc.yandex.ru yandex.st yastatic.net matchid.adfox.yandex.ru adfox.yandex.ru ads.adfox.ru ads6.adfox.ru jstracer.yandex.ru yastat.net yandex.ru awaps.yandex.net awaps.yandex.ru verify.yandex.ru *.verify.yandex.ru favicon.yandex.net pixel.adsafeprotected.com tps.doubleverify.com ad.adriver.ru amc.yandex.ru *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc.yandex.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.yandex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.tj mc.yandex.tm mc.yandex.ua mc.yandex.uz mc.admetrica.ru yandexmetrica.com yandexmetrica.com:29009 yandexmetrica.com:30102 forms-ext-api.yandex.ru strm.yandex.net *.strm.yandex.ru *.cdn.ngenix.net zen-rc3.yandex.ru frontend.vh.yandex.ru https://vh.test.yandex.ru/live/ wss://push.yandex.ru api.passport.yandex.ru api.passport-test.yandex.ru suggest-maps.yandex.ru/suggest-geo vk.ru static.dzeninfra.ru avatars.dzeninfra.ru cdn.dzen.ru video.dzen.ru log.dzen.ru playlog.dzen.ru cdn.dzeninfra.ru *.cdn.dzeninfra.ru *.extcdn.dzeninfra.ru *.hot-video.dzeninfra.ru cold-video.dzeninfra.ru *.cold-video.dzeninfra.ru s3.dzeninfra.ru *.s3.dzeninfra.ru *.ms.dzen.ru notify.dzen.ru clck.dzen.ru static-mon.yandex.net cloud-api.yandex.ru yandex.ru dzen.ru *.adlooxtracking.com *.adlooxtracking.ru *.adsafeprotected.com *.doubleverify.com *.moatads.com *.serving-sys.com *.serving-sys.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net; frame-src awaps.yandex.net yandexadexchange.net *.yandexadexchange.net yastatic.net *.yandex.ru banners.adfox.ru yastat.net yandex.ru storage.mds.yandex.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru blob: mc.yandex.ru mc.yandex.md zenadservices.net sso.passport.yandex.ru id.vk.com *.dzen.ru sso.dzen.ru static.dzeninfra.ru suggest.dzen.ru 'self' yandex.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net *.doubleverify.com *.doubleclick.net; img-src 'self' data: avatars-fast.yandex.net favicon.yandex.net an.yandex.ru banners.adfox.ru content.adfox.ru ads6.adfox.ru tns-counter.ru *.tns-counter.ru s3.mds.yandex.net ads.adfox.ru amc.yandex.ru mc.admetrica.ru wcm-ru.frontend.weborama.fr wcm.solution.weborama.fr ad.adriver.ru bs.serving-sys.com ad.doubleclick.net counter.yadro.ru gdeby.hit.gemius.pl mc.yandex.ru verify.yandex.ru *.verify.yandex.ru yastatic.net yastat.net avatars.mds.yandex.net yandex.ru px.moatads.com awaps.yandex.net awaps.yandex.ru gdero.hit.gemius.pl pixel.adlooxtracking.com tps.doubleverify.com impression.appsflyer.com rgi.io track.rutarget.ru ssl.hurra.com pixel.adsafeprotected.com storage.mds.yandex.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc.yandex.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.yandex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.tj mc.yandex.tm mc.yandex.ua mc.yandex.uz mc.webvisor.org *.mediascope.mc.yandex.ru avatars.mdst.yandex.net zen.s3.yandex.net strm.yandex.ru strm.yandex.net sso.passport.yandex.ru dzen.ru avatars.dzeninfra.ru static.dzeninfra.ru cdn.dzen.ru video.dzen.ru log.dzen.ru playlog.dzen.ru s3.dzeninfra.ru *.ms.dzen.ru *.s3.dzeninfra.ru *.zen.yandex.com *.m-counter.ru www.m-counter.ru www.tns-counter.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net *.doubleverify.com *.adsafeprotected.com *.serving-sys.com *.serving-sys.ru *.weborama.fr *.weborama-tech.ru *.hit.gemius.pl consentmanager.mgr.consensu.org cdn.consentmanager.mgr.consensu.org *.adlooxtracking.com *.adlooxtracking.ru vk.com vk.ru *.userapi.com *.vk.com *.vk.ru; media-src *.yandex.net strm.yandex.ru *.strm.yandex.ru yandex.ru yandex.st yastatic.net banners.adfox.ru content.adfox.ru data: yastat.net *.mycdn.me *.vkuser.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru blob: *.strm.yandex.net *.cdn.ngenix.net cdn.dzen.ru video.dzen.ru *.cdn.dzeninfra.ru *.extcdn.dzeninfra.ru *.hot-video.dzeninfra.ru cold-video.dzeninfra.ru *.cold-video.dzeninfra.ru *.s3.dzeninfra.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net; script-src 'unsafe-inline' 'unsafe-eval' an.yandex.ru yandex.st yastatic.net mc.yandex.ru banners.adfox.ru ads.adfox.ru ads6.adfox.ru yastat.net yandex.ru z.moatads.com storage.mds.yandex.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc.yandex.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.yandex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.tj mc.yandex.tm mc.yandex.ua mc.yandex.uz chat.s3.yandex.net sso.dzen.ru sso.passport.yandex.ru static.dzeninfra.ru 'self' *.zen.yandex.com dzen.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net *.adlooxtracking.com *.adlooxtracking.ru *.adsafeprotected.com *.doubleverify.com *.moatads.com *.dvtps.com *.doubleclick.net *.serving-sys.ru *.userapi.com vk.com vk.ru *.vk.com *.vk.ru; style-src 'unsafe-inline' 'unsafe-eval' yandex.st yastatic.net banners.adfox.ru content.adfox.ru yastat.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru yandex.ru static.dzeninfra.ru 'self' *.zen.yandex.com dzen.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net; font-src 'self' data: an.yandex.ru yastatic.net yastat.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru static.dzeninfra.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net fonts.gstatic.com; child-src blob: mc.yandex.ru; manifest-src *.dzen.ru/manifest.webmanifest 'self'; report-uri https://csp.yandex.net/csp?from=zen_old&project=zen&yandex_login=&yandexuid=8287907111694877389&requestid=346722173.220.1694877389402.66547&page=site_desktop;  
Content-Type: text/html; charset=utf-8  
Set-Cookie: _yasc=yEz+7iyexB3gdxNcLDRd9HF+RVrPtIj6lYSLY6iN6v3vonvR0nD1uVZ/lKQskqqJ; domain=.dzen.ru; path=/; expires=Tue, 13 Sep 2033 15:16:29 GMT; secure  
X-Content-Type-Options: nosniff  
X-Frame-Options: deny  
X-Requestid: 346722173.220.1694877389402.66547  
X-XSS-Protection: 1; mode=block  
X-Yandex-Req-Id: 1694877389376721-1623945499538123456200109-production-app-host-vlx-zen-304  

---

# Python
HTTP/1.1 301 Moved Permanently  
Connection: close  
Content-Length: 0  
Server: Varnish - *заголовок Server указывает на программное обеспечение, используемое сервером. Здесь Varnish является сервером кеширования и/или балансировщиком нагрузкb*  
Retry-After: 0 - *заголовок Retry-After используется сервером для указания клиенту времени ожидания перед повторным запросом. Значение 0 означает, что клиент может повторить запрос без задержки*  
Accept-Ranges: bytes - *заголовок Retry-After используется сервером для указания клиенту времени ожидания перед повторным запросом. Значение 0 означает, что клиент может повторить запрос без задержки*  
Date: Sat, 16 Sep 2023 15:40:41 GMT  
Via: 1.1 varnish  
X-Served-By: cache-bma1657-BMA  
X-Cache: HIT  
X-Cache-Hits: 0  
X-Timer: S1694878841.280243,VS0,VE0  
Location: https://www.python.org/  
Strict-Transport-Security: max-age=315360000; preload  

HTTP/1.1 200 OK  
Connection: keep-alive  
Content-Length: 50632  
Server: nginx  
Content-Type: text/html; charset=utf-8  
X-Frame-Options: SAMEORIGIN  
Via: 1.1 vegur, 1.1 varnish, 1.1 varnish  
Accept-Ranges: bytes  
Date: Sat, 16 Sep 2023 15:40:41 GMT  
Age: 719  
X-Served-By: cache-iad-kiad7000025-IAD, cache-hel1410031-HEL  
X-Cache: HIT, HIT  
X-Cache-Hits: 3, 4  
X-Timer: S1694878842.574546,VS0,VE0  
Vary: Cookie  
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload  

---
# Git

HTTP/1.1 301 Moved Permanently  
Date: Sat, 16 Sep 2023 15:43:23 GMT  
Connection: keep-alive  
Cache-Control: max-age=3600  
Expires: Sat, 16 Sep 2023 16:43:23 GMT  
Location: https://git-scm.com/  
Server: cloudflare  
CF-RAY: 807a398bedb67a75-DME - *уникальный идентификатор запроса, который помогает Cloudflare обеспечить отслеживание и отладку запросов при возникновении проблем*  

HTTP/1.1 200 OK  
Date: Sat, 16 Sep 2023 15:43:23 GMT  
Content-Type: text/html; charset=utf-8  
Connection: keep-alive  
X-Frame-Options: SAMEORIGIN  
X-Xss-Protection: 1; mode=block  
X-Content-Type-Options: nosniff  
X-Download-Options: noopen - *HTTP-заголовок безопасности, предназначенный для использования в браузерах на основе Internet Explorer и объясняет, как браузер должен обрабатывать файлы, предложенные для загрузки*  
X-Permitted-Cross-Domain-Policies: none  
Referrer-Policy: strict-origin-when-cross-origin  
Cache-Control: public, max-age=14400  
Etag: W/"db69273d9410cbf4536e9d4b3a59685d" - *аббревиатура для "Сущность-тег" и является заголовком HTTP-ответа, который позволяет клиенту получить информацию о версии ресурса на сервере. Это уникальный идентификатор*  
X-Request-Id: 476d2e08-474c-4f3d-8503-d83ed21ae45f  
X-Runtime: 0.015343  
Via: 1.1 vegur  
CF-Cache-Status: HIT  
Age: 5595  
Server: cloudflare  
CF-RAY: 807a398d7cd97b37-DME  

---
# JetBrains

HTTP/1.1 301 Moved Permanently  
Server: CloudFront  
Date: Sat, 16 Sep 2023 15:46:45 GMT  
Content-Type: text/html  
Content-Length: 167  
Connection: keep-alive  
Location: https://jetbrains.com/  
X-Cache: Redirect from cloudfront  
Via: 1.1 9f0b85e863c4851506cb4ff2d368aac2.cloudfront.net (CloudFront)  
X-Amz-Cf-Pop: HEL50-C1 - *Заголовок указывает на CloudFront Point of Presence (PoP), через который обрабатывается ваш запрос. Значение WAW51-P4 соответствует определенному PoP, обычно обозначающему географическое местонахождение*  
Alt-Svc: h3=":443"; ma=86400 - *Заголовок определяет альтернативные сервисы для текущего ресурса*  
X-Amz-Cf-Id: TviwMzlsoNsXLhD97xaVQwTyuZiPXfipvoHtK-HgDD95VFQPW7QPdA== - *Заголовок используется Amazon Cloudfront для связывания ответа с определенной сессией и запросом, который он обрабатывал*  

HTTP/1.1 308 Found  
Server: CloudFront  
Date: Sat, 16 Sep 2023 15:46:45 GMT  
Content-Length: 0  
Connection: keep-alive  
Location: https://www.jetbrains.com/  
Strict-Transport-Security: max-age=31536000;  
X-Cache: FunctionGeneratedResponse from cloudfront  
Via: 1.1 b44f106cb108901846bfcc9a6508c900.cloudfront.net (CloudFront)  
X-Amz-Cf-Pop: HEL50-C1  
Alt-Svc: h3=":443"; ma=86400  
X-Amz-Cf-Id: qFysNKd_9B7Hm2S6OrQIWOM8PEWamGokpMoBDUm09ynvsmO7RdRxTA==  

HTTP/1.1 200 OK  
Content-Type: text/html; charset=utf-8  
Content-Length: 47213  
Connection: keep-alive  
Date: Sat, 16 Sep 2023 15:42:03 GMT  
Server: nginx  
X-Content-Type-Options: nosniff  
Referrer-Policy: same-origin  
Expires: Sat, 16 Sep 2023 15:42:03 GMT  
Cache-Control: max-age=0  
Pragma: no-cache - *HTTP заголовок запроса, используемый для указания, что промежуточные серверы (прокси или кеширование серверы) не должны кешировать этот конкретный запрос*  
X-Frame-Options: DENY  
X-Content-Type-Options: nosniff  
X-Xss-Protection: 1; mode=block  
Strict-Transport-Security: max-age=31536000;  
Vary: Accept-Encoding  
Via: 1.1 d625bdda26d203019262a5961e99d9fa.cloudfront.net (CloudFront)  
Alt-Svc: h3=":443"; ma=86400  
Age: 282 - *HTTP-заголовок ответа, который определяет время (в секундах), которое прошло с момента создания объекта ресурса на сервере-прокси или кеширующем сервере*  
Set-Cookie: cf_country-region=RU-ROS; Domain=jetbrains.com; Path=/; Secure  
X-Cache: Hit from cloudfront  
X-Amz-Cf-Pop: HEL50-C1  
X-Amz-Cf-Id: CU7VykNy5t9et5Tp3GTJa3WrCqfMUeGkNiX-nbfams48MQgDsrDfrA==  

---
# VSC

HTTP/1.1 307 Temporary Redirect  
Date: Sat, 16 Sep 2023 15:51:15 GMT  
Content-Type: text/html  
Content-Length: 0  
Connection: keep-alive  
Location: https://code.visualstudio.com/  
x-azure-ref: 20230916T155115Z-dgrad8gt0t3n38vde08x8ubenn00000005hg000000022uhb - *это пользовательский (нестандартный) HTTP-заголовок, используемый Microsoft Azure для обеспечения корреляции запросов в рамках своих сервисов. Значение этого заголовка представляет собой уникальный идентификатор*  
X-Cache: CONFIG_NOCACHE  

HTTP/1.1 200 OK  
Date: Sat, 16 Sep 2023 15:51:15 GMT  
Content-Type: text/html; charset=utf-8  
Content-Length: 50213  
Connection: keep-alive  
ETag: W/"c425-XBxswsHoV0dlJCAKuBbwZ9s5rjQ"  
Strict-Transport-Security: max-age=31536000; includeSubDomains  
Content-Security-Policy: frame-ancestors 'self'  
X-Frame-Options: SAMEORIGIN  
X-XSS-Protection: 1; mode=block  

X-Content-Type-Options: nosniff  
X-Content-Type-Options: nosniff  
X-Powered-By: ASP.NET  
x-azure-ref: 20230916T155115Z-krteg643hx7n59f8gr7ayybw5s00000000vg00000000htuc  
X-Cache: CONFIG_NOCACHE  
Accept-Ranges: bytes  

---
