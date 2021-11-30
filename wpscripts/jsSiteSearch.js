﻿function GetSiteSearchResults(newWindow,frameObject,frameObjectName,fontFace,fontSize,fontColour,linkFace,linkSize,linkColour,bgColour,resultsText)
{
var sTerms="";
var iDepth = 0;
var sURL = new String(window.location.href);
if (sURL.indexOf("swr=true") != -1)
	return;
if (sURL.indexOf("?") > 0)
{
var arrParams = sURL.split("?" );
var arrURLParams = arrParams[1].split("&" );
for (var i=0;i<arrURLParams.length;i++)
{
var sParam = arrURLParams[i].split("=" );
var sValue = decodeURIComponent(sParam[1]);
if( decodeURIComponent(sParam[0]) == frameObjectName)
	sTerms = sValue;
if( decodeURIComponent(sParam[0]) == "depth")
	iDepth = parseInt(sValue);
}
}
var d=frameObject.document;
if (sTerms=="") {d.open(); d.write("<html><head></head><body style=\"background: transparent;\"></body></html>" ); d.close();return;}
var sBack=""; for (i=0; i<iDepth; i++) sBack+='..\\\\';
d.open();
d.write("<!doctype html>" );
d.write("<html lang=\"en\">" );
d.write("<head>" );
d.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">" );
d.write("</head>" );
d.write("<body style=\"margin: 0px 0px 0px 0px; font-family: "+fontFace+"; font-size: "+fontSize+"; color: "+fontColour+"; background: "+bgColour+";\">" );
d.write("<div id=\"wpSearchResults\"></div>" );
d.write("<script type=\"text/javascript\">" );
d.write("var wordMap = new Array(\" kategorie chronologiczne wiek 1900 1917 biała podlaska brześć jabłeczna janów podlaski kijowiec kodeń konstantynów leśna miedzyrzec parczew piszczac rokitno studzianka terespol łomazy łosice 1918 1938 bohukały błotkow cieleśnica dobryń dokudów dołha horbów hrud kopytów kostomłoty koszoły nosów ortel królewski osówka rozbitówka styrzyniec woskrzenice duże zabłocie zalesie łuków 1939 1945 rossosz wisznice włodawa 1946 2000 2001 dziś tematyczne pułk artylerii piechoty akcja rewindykacji cerkwi prawosławnych armia carska bialska kolej wąskotorowa carski pomnik cerkiew cmentarz żydowski dworzec elektrownia fabryka rudolfa tajbera henryka raabe'go raabego gimnazjum męskie kraszewskiego żeńskie plater wojna światowa kamienica wieszczami kominiarze kościół narodzenia najświętszej marii panny anny antoniego krzna kultura teatr sztuka meczet miejska biblioteka publiczna mieszkańcy ośrodek wodny piłka nożna plac rubina wolności wytwórnia samolotów policja radziwiłłowie rosjanie rynek okręgowy sklepy synagoga szkolny dwór szkoła szpital wojskowy żydowski ukraińcy brzeska garncarska grabarowska janowska kościuszki narutowicza piłsudkiego reformacka warszawska łomaska warsztat masarski wojna polsko-bolszewicka wojsko polskie zakłady przemysłowe raabe zamek radziwiłłów żydzi holocaust getta judaica okolice dołholiska międzyrzec romanów witulin zakalinki prywatne archiwa wczoraj galeria dodatkowe materiały terenie regionu bialskopodlaskiego czasie wojny światowej \",\" stronie biała podlaska okolice historia zdjęciach rzeczywistości jest chronologią miasta regionu prezentacją faktów zgodnie kolejnością wydarzeń oraz materiałem którym dokumenty ikonograficzne obrazowo przedstawiające odpowiedni moment historii projektu celem projektujest promowanie wiedzy temat okolic jako sumy historycznych dotyczących bialskopodlaskiego dlaczego chronologia związku chronologiczne myślenie podstawą historycznego uzasadnienia zrozumienia wagi chronologii czyli przedstawionych kolejności możliwości analizy zależności między tymi wydarzeniami wyjaśnienia historycznej przyczynowości chronologia zapewnia rusztowanie myśli rozumienia jedną cech definiujących narrację historyczną wiarygodne opisanie jednak pozostaje materiał fakty materiałem zaznaczone wstępie zdjęcia podkreślmy więc plusy minusy ikonograficznego podejścia opisania bezsprzecznie zaletą fakt najbardziej wyrazisty emocjonalny sposób przedstawienia drugiej jednak strony brak zdjęć niektórych rożnych powodów może ograniczeniem takiego dlatego serdecznie zapraszam współpracy przy zapełnianiu wspomnianych jeżeli jesteście państwo posiadaniu fotografii białej podlaskiej chcielibyście zamieścić naszej prosimy kontakt zapraszamy odwiedzić sekcje źródła gdzie można znaleźć więcej informacji materiałach książkach archiwach stronach dziękujemy uwagę zainteresowanie projektem bialapodlaska myoptimus \",\" prasa podlasie dzieje 2014 fotografie żyją dalej swoim życiem umierają wraz właścicielem wywiad administratorami portalu historia zdjęciach marta gadomska tygodnik podlaski października listopada ożywają stare fotografie \",\" podlasie dzieje 2014 fotografie żyją dalej swoim życiem umierają wraz właścicielem wywiad administratorami portalu historia zdjęciach marta gadomska link http podlasiesiedzieje +pxh01 stałe mieszkają stanach zjednoczonych poprzez prowadzenie profilu biała podlaska okolice historia starają promować rodzinne miasto administratorzy facebook'owego facebookowego specjalnej rozmowie czytelników opowiedzieli pomagają odnaleźć przodków mieszkających białej wykorzystują porównującą technikę wczoraj dziś oraz pokazali letnią fotografię którą posiadają swoich zbiorach skąd wziął pomysł założenie profilu? pomysł zakiełkował 1998 roku podczas zbierania materiałów potrzebnych napisania pracy magisterskiej jednego uczestników projektu tematem była zagłada ludności żydowskiej terenach województwa bialskopodlaskiego holocaust myoptimus pozostało dużo niewykorzystanych także zdjęć które racji specyfiki tematu mogły zostać niej dodane stanęliśmy więc przed wyborem albo materiały wyrzucić znaleźć nich miejsce dostępne wszystkich padło internet jeden projektodawców dorzucił porównywać stare zdjęcia nowymi stylu «wczoraj dziś» odnajdywać miejsca widniejące powstał projekt strony internetowej bialapodlaska która następnie została połączona profilem facebook'u facebooku przeciągu profil zgromadził ponad tysiące fanów spodziewaliście dużego zainteresowania? początkowo przewidywaliśmy zainteresowanie naszym będzie duże strona skierowana jest głównie osób interesujących historią szczególności regionu jesteśmy mile zaskoczeni tematyka zawarta stronach spotkała dużą reakcją szczególnie wśród młodzieży według danych statystycznych facebook'a facebooka naszą stronę dotychczas wizytowali mieszkańcy miast krajów następujących grupach wiekowych 13-24 lata 25-34 35-65+ oczekiwaliśmy pomimo rozmieszczania organizacji przyjdzie zajmować dużej mierze działalnością informacyjną taką tłumaczenie język polski historycznych pomoc odnajdywaniu podlaskiej okolicach śladów pobytu walczących wziętych niewoli obywateli innych konsultacji doradztwa pomocy przy wyszukiwaniu książek esejów referatów inicjatywach promujących historię korzystając okazji chcielibyśmy podziękować wszystkim odwiedzającym nasz portal czynne stroną wysyłają ciekawe umieszczamy sukcesywnie stronie opisywania ustalenia źródeł pochodzenia fotografii prób lokalizacji obiektów znajdujących fotografiach wreszcie tłumaczeniu dokumentów robert gliński reżyser kamieni szaniec stwierdził polski bardzo filmowa uważacie podobnie możemy powiedzieć okolicy fotogeniczna? każdej innej części mogłaby równie filmie cytowanym powyżej trzeba jedynie pozbyć rutyny spróbować chcieć odkryć nowo istocie zwykłych ścianach ulicach ukrywają całe wieki faktów wszystkie same wydarzenia historyczne miały regionie większym mniejszym stopniu częściach każdy okres historyczny swój sposób ciekawy fotogeniczny najstarsze dzieje czas rozbiorów analiza mitów życia radziwiłłów relacje między narodowościami zamieszkującymi wojną światową losy wybory mieszkańców miasta czasie zawirowań wojennych tragedia narodowości walka zbrojna tragiczny żołnierzy dramatyczny powojenny obecność starych facebook'u facebooku połączenie historii nowoczesnością czyżbyście znaleźli idealny przekazanie młodym ludziom miasta? technika porównująca fotografie staje popularna ostatnich latach naszej opinii dodatkowy emocjonalny spojrzenia znajome elementy jego ulice budynki przez pryzmat wieku mogła dostrzec zmian technika może nawet odkrywcza pozwala popuszczenie wodzów fantazji refleksję ludzi temu jaki pozyskujecie publikowane zdjęcia? adresaci dostarczają rodzinnych albumów przeglądamy znajdujące archiwach bibliotekach pomocny procesie wyszukiwania wygląda sama procedura zamieszczania fotografii? przybliżeniu następująco wyszukanie źródła mogą różne prywatne archiwa biblioteki aukcje portale opis ustalenie źródła zawsze mamy stuprocentową pewność fotografia przedstawiająca białą takim przypadku powołujemy osobę której pochodzi zdjęcie następnie opisujemy ewentualnie dodajemy niego inne źródłowe jeśli takowe posiadamy niektóre umieszczane opisu uzupełniamy precyzujemy rzadko odwiedzających jeżeli wielu powodów odpowiada tematyce zaistnieją obiekcje dotyczące publikacji wtedy kasujemy zaletą umieszczania fakt wcześniej wspomnieliśmy uzupełnione opisem udoskonalone źródłem obrasta ciekawymi opowieściami historiami więcej interaktywny prezentowania informacji ponieważ goście tylko obserwują nowego pojawia dzielą swoimi przemyśleniami przyłączają dyskusji non-profit wszystkie zostały opublikowane celach edukacyjnych jeszcze dziękujemy komentarze uatrakcyjniacie zamieszczając zestawione tych samych czasu zajmuje stworzenie takich zdjęć? wskazane starej obecnego obiektu pozostaje dopasować dzisiejsze zrobione samym kątem technicznej dwóch obrazów stosunkowo proste szeroko opisane internecie kogokolwiek zainteresuje techniczna strona montażu jesteśmy stanie dostarczyć prosimy kontakt pośrednictwem przyporządkowanie dawnych obecnych sprawia sporo trudności? brak stuprocentowej gwarancji obiekt dzisiejszej wersji musimy najmniejszych detalach przeanalizować bywa część elewacji rynna drzwi okiennica domu pasuje stojącego obecnie miejscu czasami ulica drzewo przypominają obecne dlatego chętnie posługujemy pomocą kolei żyjących starszych krewnych jest interaktywna ciężka praca szerokiej grupy użytkowników trakcie wszyscy pochodzą konsensusu materiał fotograficzny uzupełnione zostaje komentarzami informacjami historycznymi czasami google street view bywa pomocnym narzędziem określaniu którego najstarsza zamieściliście portalu? najstarsza jaką naszych 1883 zrobiono przedstawia pałac zaraz potem niestety został sprzedany rozebrany zdjęcie wykonał eliasz stumann udostępniacie wiele prywatnych archiwów mieszkańcy podlasia wami kawałkiem swojej rodzinnej historii? myślicie skąd taka potrzeba? istnieje kilka którymi moglibyśmy wyjaśnić często zdarza giną różnych zostają wyrzucone zapomniane można zjada wraz takimi fotografiami umiera przedstawiona prawdopodobnie chcą wnieść wkład uczestniczyć zbiorze pokazują których żywych utraconą bezpowrotnie zaginęła zaufanie jakim obdarzyli którzy współtworzą dostarczanie macie planach wystawy zgromadzonych wydanie albumu inny przejaw pokazania realu przyjemnością miarę możliwości uczestniczylibyśmy wystawach wydarzeniach związanych promocją kultury mamy wydania którym połączyć nowe czynimy ważymy przeciw plusy minusy takiego pomysłu jednej pewności zostałby odebrany bardziej związane inwestycjami finansowymi drugiej powielać podobnych tematycznie wydań każdym razie jeżeli ktoś byłby zainteresowany udziałem projekcie miło współpracować zależy przekazywaniu wiedzy temat niedoinformowani zakresie? uważamy byli zakresie zaprzeczeniem tego chociażby aktywne entuzjastyczne współtworzenie naszego wspólne starania gości nasze zebrać dowody jednym nasze archiwum fundamentalnym kompendium służącym badaniu jednak nadzieję pomóc zwłaszcza odsłanianiu kart lepszym zrozumieniu dzieł oznacza lokalny patriotyzm? termin patriotyzm zawiera miłych wspomnień miejscem człowiek urodził przebywał rezultacie powstawały stabilne więzi duchowe regionem potrzeba styczności faktami pochodzącymi rozumieniu najważniejsze wiedzieć pochodzimy słusznie powiedział andrzej majewski drzewo pozbawione korzeni upada prosi dodać świadomy traci zubaża siebie kryje administracją fanpage? opowiedzcie trochę sobie grupa zajmująca tworzeniem duża danej chwili trzyosobowa wszyscy regionalistami pasjonatami ziem bialskopodlaskich staramy cząstkę promowanie okolic mieszkamy granicą często odwiedzamy łączą miastem mieszka przyjaciół koniec zdradźcie związana zdjęciem umieszczonym wydaje najciekawsza? ponieważ przedstawiające wiążą ogromną ilością nimi osobnym wywiadzie rzece przytoczymy przykłady chyba najciekawsze dobrze znana kartka pocztowa placu wolności około 1916 przyglądając wszysko podobne takie dlaczego? otóż odwrócony obraz okazało błąd techniczny tworzenia kartek okolicznościowych negatyw błędnie skopiowany znajdujący prawej widokówce widnieje lewej innym ciekawym przykładem czasów wojny światowej benedykta kraskowskiego który schindler uznany sprawiedliwego narodów świata benedykt kraskowski folksdojczem ratował żydów dając pracę schronienie zakładzie stolarskim znajdował centrum prawdopodobnie ulicy pocztowej nieistniejącym budynku bożnicy wkrótce opublikujemy tłumaczone szczegółów dziękuję rozmowę redaktor wykształcenia politolog absolwentka stosunków międzynarodowych zamiłowania kinomanka sympatyczka handmade'u handmadeu miłośniczka wydarzeń kulturalnych lubi reportaże inspirują zwykli-niezwykli ludzie prasa \",\" tygodnik podlaski października listopada 2014 ożywają stare fotografie marta gadomska link tygodnikpodlaski tygodnik_podlaski_nr_44_162_47 biała podlaska historia zdjęciach niezwykły projekt strony internetowej oraz profilu facebooku portal białczan stałe mieszkających zawiera oryginalne zbiory dawnych zdjęć miasta wszystko zaczęło 1998 roku jeden administratorów portalu podczas pisania pracy magisterskiej zgromadził obszerny zasób materiałów temat zagłady żydowskiej ludności terenie ówczesnego województwa bialskopodlaskiego niewykorzystane fotografe mogły zmarnować stanęliśmy przed wyborem albo materiały wyrzucić znaleźć nich miejsce dostępne wszystkich wybór padł internet mówi okolice postanowili zatem zgromadzić zdjęcia białej podlaskiej jednym miejscu przetrwały kolejnych pokoleń początkowo powstał bialapodlaska myopti-mus która następnie została połączona profilem pomysł okazał strzałem dziesiątkę profil ponad tysiąca fanów stronę odwiedzili dotychczas mieszkańcy miast krajów głównie ludzie młodzi administratorzy chcąca zachować anonimowość trzyosobowa grupa mieszka stanach zjednoczonych regionaliści pasjonaci ziem bialskopodlaskich często odwiedzają białą wracając swoich rodzin przyjaciół poprzez prowadzenie starają promować rodzinne miasto oprócz zamieszczania archiwalnych zajmują również działalnością popularyzatorską informacyjną technika wczoraj dziś uatrakcyjnili portal zamieszczając tych samych obiektów przy użyciu techniki pewność wskazane fotografii odpowiada lokalizacji obecnego obiektu pozwala dopasować ryzyka błędu zamieścić stronie sądzimy jest dodatkowy bardzo emocjonalny sposób spojrzenia znajome elementy jego ulice budynki przez pryzmat historii mówią twórcy przypadku brak stuprocentowej gwarancji obiekt starej fotografi dzisiejszej wersji nawet najmniejszy detal wymaga dogłębnej analizy bywa tylko drobny fragment rynna drzwi okiennica domu pasuje stojącego obecnie samym budynku administrator 130-letni kadr najstarsza fotografia jaka zamieszczona pochodzi 1883 temu eliasz staumann sfotografował pałac radziwiłłów wkrótce potem został niestety sprzedany rozebrany zbiorach znajduje nietypowa kartka pocztowa przedstawiająca zdjęcie placu wolności 1916 przyglądając wszystko wydaje podobne takie same dlaczego? otóż odwrócony obraz miejsca będący okazało efektem technicznego procesie tworzenia kartek okolicznościowych negatyw błędnie skopiowany rezultacie znajdujący prawej widokówce widnieje lewej wyjaśniają administratorzy press2a przykłady spośród wielu kadrów zgromadzonych pasjonatów którzy udowodnili muszą umierać wraz właścicielem mogą dalej nowym życiem prasa \",\" jeżeli chcielibyście państwo rozszerzyć swoją wiedzę historii miasta regionu zapraszamy zaznajomienia poniższą informacją książki materiały biała podlaska historia tożsamość jarosław domański 2010 podlasiu dzieje okolic 1795r jerzy flisiński 2009 latach 1918-1939 henryk mierzwiński 1939-1944 2013 mojej pamięci zdzisław jobda 2000 sefer biala book kupat gmilut hesed community aviv 1961 garnizon wojska polskiego białej podlaskiej paweł borek 2006 hitler's hitlers willing executioners ordinary germans holocaust daniel goldhagen york 1997 monografia powiatu bialskiego bolesław górny 1939 podlasie uścisku nazizmu podlyashe natsi-klem notitsn shurbn fajgenbaum comite amigos buenos aires 1953 przedwojenne fotografie podlasia zbiorów jana makaruka miejska biblioteka publiczna strony internetowe bialapodlaska urząd miasta cerkiew1938 prawosławną diecezją lubelsko-chełmską fotopolska polska fotografii mojepodlasie friko południowe okolice muzeumbiala muzeum południowego fotoklub portal fotoklubu podlaskiego sztetl city biala-podlaska historii żydów polskich źródła \",\" napisz \",\" wszystkie pola formularza powinny wypełnione \",\" dziękujemy poświęcenie czasu skontaktowanie name twoja wiadomość została pomyślnie wysłana \",\" wyniki wyszukiwania \",\" kategorie chronologiczne wiek 1900 1917 1918 1938 1939 1945 1946 2000 2001 dziś tematyczne biała podlaska okolice prywatne archiwa wczoraj dodatkowe materiały \",\" biała podlaska radziwiłłowie brześć jabłeczna janów podlaski kijowiec kodeń konstantynów leśna miedzyrzec parczew piszczac rokitno studzianka terespol łomazy łosice wiek \",\" biała podlaska dworzec kolejowy szpital wojskowy plac wolności wieża zamkowa park radziwiłłowski zespół zamkowy radziwiłłów kościół antoniego przy klasztorze kapucynów grupa uczniów gimnazjum kraszewskiego białej podlaskiej nauczycielem targ żydowski przed pomnikiem carskim brześć jabłeczna janów podlaski kijowiec kodeń konstantynów leśna miedzyrzec parczew piszczac rokitno studzianka terespol łomazy łosice 1900 1917 \",\" biała podlaska brzeska plac wolności wojskowy szpital mikołaja kopernika warszawska dworzec kolejowy stalag oflag 366z obóz jeńców włoskich autor obrazów ercolani ernesto 1909 1974 brześć spotkanie żołnierzy wehrmachtu żołnierzami armii czerwonej brześciu bugiem 1939 jabłeczna janów podlaski kijowiec kodeń konstantynów leśna miedzyrzec parczew piszczac rokitno studzianka terespol łomazy łosice 1945 \",\" biała podlaska brześć jabłeczna janów podlaski kijowiec kodeń konstantynów leśna miedzyrzec parczew piszczac rokitno studzianka terespol łomazy łosice serpelice międzyrzec 1946 2000 \",\" biała podlaska janowska nowa artyleryjska zamkowa marszałka józefa piłsudskiego plac wolnośc kościół narodzenia rubina antoniego gabriela narutowicza liceum ogólnokształcące emilii plater brześć jabłeczna janów podlaski kijowiec kodeń konstantynów leśna miedzyrzec parczew piszczac rokitno studzianka terespol łomazy łosice 2001 dzis \",\" biała podlaska brześć jabłeczna janów podlaski kijowiec kodeń konstantynów leśna miedzyrzec parczew piszczac rokitno studzianka terespol łomazy łosice kategorie tematyczne \",\" brześć jabłeczna janów podlaski kijowiec kodeń konstantynów leśna podlaska miedzyrzec parczew piszczac rokitno studzianka terespol łomazy łosice okolice \",\" adam kwapień wieża zamkowa park radziwiłłowski garncarska plac wolności pomnik karola boromeusz marcin izdebski zamek warszawska brzeska janowska moniuszki brama radziwiłłowska lotnicy postój taksówek dworzec kolejowy getto amfiteatr piotr seczyk biała podlaska leśna terespol kapliczka jana nepomucena sworach gubernator siedlecki stiepan gromeka zespół pałacowy radziwiłłów inhumenia katarzyna jelifemowska brześć jabłeczna janów podlaski kijowiec kodeń konstantynów miedzyrzec parczew piszczac rokitno studzianka łomazy łosice prywatne archiwa \",\" biała podlaska wczoraj dziś pałac radziwiłłów plac wolności kościół anny warszawska reformacka brzeska dzis \",\" holocaust terenie regionu bialskopodlaskiego czasie wojny światowej dodatkowe materiały \",\" biała podlaska kino miraż łomaska plac wolności wieża zamkowa obchody święta wojska marszałek józef piłsudski warszawska narutowicza podlasiak głos społeczny żołnierze żydowscy czasie święta pesach gimnazjum kraszewskiego podpułkownik świątecki święto pułkowe defilada oficerowie podoficerowie dniu mistrzostwa strzelectwie wytwórnia samolotów pws11 pws12 pws10 sportowy jednomiescowy pws12a ludność żydowska judaika kinderheim dziecka komitet domu kawiarnia podlasier lebn obóz letni zbiórka funduszy rzecz szpitala żydowskiego brześć jabłeczna janów podlaski kijowiec kodeń konstantynów leśna miedzyrzec parczew piszczac rokitno studzianka terespol łomazy łosice 1918 1938 \" );" );
d.write("var pageMap = new Array(\"Biała Podlaska i okolice - Historia w zdjęciach | Zdjęcia Białej\",\"O stronie | Biała Podlaska - Historia w zdjęciach\",\"Prasa o nas | Biała Podlaska - Historia w zdjęciach\",\"Podlasie Się Dzieje\",\"Tygodnik Podlaski\",\"Źródła | Biała Podlaska - Historia w zdjęciach\",\"Napisz do nas | Biała Podlaska - Historia w zdjęciach\",\"Napisz do nas\",\"Napisz do nas\",\"Wyniki wyszukiwania\",\"Kategorie | Biała Podlaska - Historia w zdjęciach\",\"16-19 wiek | Biała Podlaska - Historia w zdjęciach\",\"1900 - 1917 | Biała Podlaska - Historia w zdjęciach\",\"1939 - 1945 | Biała Podlaska - Historia w zdjęciach\",\"1946 - 2000 | Biała Podlaska - Historia w zdjęciach\",\"2001 - Do dziś | Biała Podlaska - Historia w zdjęciach\",\"Kategorie tematyczne | Biała Podlaska - Historia w zdjęciach\",\"Okolice | Biała Podlaska - Historia w zdjęciach\",\"Prywatne archiwa | Biała Podlaska - Historia w zdjęciach\",\"Wczoraj i dziś | Biała Podlaska - Historia w zdjęciach\",\"Dodatkowe materiały | Biała Podlaska - Historia w zdjęciach\",\"1918 - 1938 | Biała Podlaska - Historia w zdjęciach\" );" );
d.write("var linkMap = new Array(\"index.html\",\"o-stronie.html\",\"Prasa-o-nas.html\",\"Podlasie-Sie-Dzieje.html\",\"Tygodnik-Podlaski.html\",\"Zrodla.html\",\"feedback.html\",\"feedbackerr.htm\",\"thankyou.htm\",\"search.html\",\"albums/index.html\",\"albums/16-19-wiek.html\",\"albums/1900-1917.html\",\"albums/1939-1945.html\",\"albums/1946-2000.html\",\"albums/2001-Do-dzis.html\",\"albums/Kategorie-tematyczne.html\",\"albums/okolice.html\",\"albums/prywatne-archiwa.html\",\"albums/wczoraj-i-dzis.html\",\"albums/dodatkowe-materialy.html\",\"albums/1918-1938.html\" );" );
d.write("var preMap = new Array(\"Kategorie Chronologiczne 16 - 19 wiek 1900 - 1917  Biała Podlaska | Brześć | Jabłeczna   | Janów Podlaski  | Kijowiec  | Kodeń  | Konstantynów  | Leśna Podlaska  | Miedzyrzec Podlaski  | Parczew  | Pi\",\"O stronie Biała Podlaska i okolice – historia w zdjęciach w rzeczywistości jest chronologią miasta i regionu  prezentacją faktów zgodnie z kolejnością ich wydarzeń oraz materiałem  którym są dokumenty\",\"Prasa o nas Podlasie Się Dzieje  20 Maj 2014  Fotografie żyją dalej swoim życiem  nie umierają wraz z ich właścicielem - wywiad z administratorami portalu Historia w zdjęciach  Marta Gadomska   Tygodn\",\"Podlasie Się Dzieje  20 Maj 2014  Fotografie żyją dalej swoim życiem  nie umierają wraz z ich właścicielem - wywiad z administratorami portalu Historia w zdjęciach  Marta Gadomska Link  http   podlasi\",\"Tygodnik Podlaski  Nr 44  162   31 października – 6 listopada 2014  Jak ożywają stare fotografie  Marta Gadomska Link  www tygodnikpodlaski pl … tygodnik_podlaski_nr_44_162_47 pdf   Biała Podlaska - h\",\"Jeżeli chcielibyście Państwo rozszerzyć swoją wiedzę o historii miasta i regionu zapraszamy do zaznajomienia się z poniższą informacją     Książki  materiały Biała Podlaska  historia i tożsamość miast\",\"Napisz do nas \",\"Wszystkie pola formularza powinny być wypełnione  \",\"Dziękujemy za poświęcenie czasu na skontaktowanie się z name   Twoja wiadomość została pomyślnie wysłana   \",\"Wyniki wyszukiwania \",\"   Kategorie Chronologiczne 16 - 19 wiek 1900 - 1917  1918 - 1938  1939 - 1945  1946 - 2000 2001 - Do dziś   Kategorie Kategorie Tematyczne Biała Podlaska - Okolice prywatne archiwa  wczoraj i dziś  D\",\"Biała Podlaska  Radziwiłłowie 1 Brześć | Jabłeczna   | Janów Podlaski  | Kijowiec  | Kodeń  | Konstantynów  | Leśna Podlaska  | Miedzyrzec Podlaski  | Parczew  | Piszczac  | Rokitno  | Studzianka  | T\",\"Biała Podlaska Dworzec kolejowy  Szpital Wojskowy  Plac Wolności  Wieża Zamkowa  Park Radziwiłłowski  Zespół zamkowy Radziwiłłów  Kościół św  Antoniego przy klasztorze kapucynów Plac Wolności  Wieża Z\",\"Biała Podlaska ul  Brzeska  Plac Wolności  Wojskowy Szpital  Mikołaja Kopernika i Warszawska  Dworzec Kolejowy Stalag   Oflag 366Z  Obóz jeńców włoskich  autor obrazów  Ercolani Ernesto 1909 - 1974 Br\",\"Biała Podlaska  Brześć | Jabłeczna   | Janów Podlaski  | Kijowiec  | Kodeń  | Konstantynów  | Leśna Podlaska  | Miedzyrzec Podlaski  | Parczew  | Piszczac  | Rokitno  | Studzianka  | Terespol  | Łomaz\",\"Biała Podlaska Ul  Janowska  Nowa  Artyleryjska  Zamkowa  Marszałka Józefa Piłsudskiego Plac Wolnośc  Kościół pw  Narodzenia NMP  Plac Rubina  Kościół św  Antoniego  Ul  Gabriela Narutowicza  II Liceu\",\"Biała Podlaska  Brześć | Jabłeczna   | Janów Podlaski  | Kijowiec  | Kodeń  | Konstantynów  | Leśna Podlaska  | Miedzyrzec Podlaski  | Parczew  | Piszczac  | Rokitno  | Studzianka  | Terespol  | Łomaz\",\"Brześć | Jabłeczna   | Janów Podlaski  | Kijowiec  | Kodeń  | Konstantynów  | Leśna Podlaska  | Miedzyrzec Podlaski  | Parczew  | Piszczac  | Rokitno  | Studzianka  | Terespol  | Łomazy  | Łosice  OKO\",\"Adam Kwapień Wieża Zamkowa  Park Radziwiłłowski  Ul  Garncarska  Plac Wolności  Pomnik św  Karola Boromeusz Marcin Izdebski Zamek  Plac Wolności  ul  Warszawska  Brzeska  Janowska  Moniuszki  Brama ra\",\" Biała Podlaska Wczoraj i Dziś  Pałac Radziwiłłów  Plac Wolności  Kościół św  Anny  ul  Warszawska  Reformacka  Brzeska   Wczoraj i dziS  \",\"Holocaust na terenie regionu bialskopodlaskiego w czasie II wojny światowej  Dodatkowe materiały  \",\"Biała Podlaska Kino Miraż  ul  Łomaska  Plac Wolności  Wieża Zamkowa  Obchody Święta Wojska  Marszałek Józef Piłsudski  ul  Warszawska  Narutowicza  Plac Wolności  Podlasiak  Głos Społeczny  Żołnierze\" );" );
d.write("function doNav(ind)" );
d.write("{" );
if (newWindow)
d.write("		 window.open(\""+sBack+"\"+linkMap[ind],\"_blank\" );" );
else
d.write("		 parent.window.location.href=linkMap[ind];" );
d.write("}" );
d.write("function wpDoSearch(searchTerms){" );
d.write("var terms = searchTerms.split(\" \" );" );
d.write("if (terms==\"\") return;" );
d.write("var results = \"\";" );
d.write("var resultscount = 0;" );
d.write("for (var i=0; i<wordMap.length; i++)" );
d.write("{" );
d.write("			var found=true;" );
d.write("			for (var j=0; j<terms.length; j++)" );
d.write("					if (wordMap[i].indexOf(terms[j].toLowerCase())==-1) found=false;" );
d.write("			if (found)" );
d.write("			{" );
d.write("				 results+=\"<a style=\\\"cursor: pointer; font-family: "+linkFace+"; font-size: "+linkSize+"; color: "+linkColour+"; \\\" onclick=\\\"doNav(\"+i+\" );\\\"><u>\"+pageMap[i]+\"</u></a><br>\"+preMap[i]+\"...<br><br>\";" );
d.write("				 resultscount++;" );
d.write("			}" );
d.write("}" );
d.write("document.getElementById(\"wpSearchResults\").innerHTML=resultscount+\" "+resultsText+" \"+searchTerms+\"<br><br>\"+results;" );
d.write("}" );
while(sTerms.indexOf("\"") != -1 ) {
sTerms = sTerms.replace("\"","" );
};
d.write("wpDoSearch(\""+sTerms+"\" );" );
d.write("</script>" );
d.write("</body></html>" );
d.close();
}