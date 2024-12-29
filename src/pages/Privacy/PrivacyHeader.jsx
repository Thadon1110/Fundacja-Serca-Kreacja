import AnimateOnScroll from '../../components/AnimateOnScroll/AnimateOnScroll';
import './Privacy.scss';

const PrivacyHeader = () => {
	return (
		<header className='privacy__header section wrapper'>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-big'></div>
			<div className='section-ball section-ball-big'></div>
			<div className='section-ball section-ball-big'></div>
			<div className='section-ball section-ball-small'></div>

			<div className='privacy__header__content'>
				<AnimateOnScroll direction='up'>
					<div className='privacy__header__content__header'>
						<h1>POLITYKA PRYWATNOŚCI</h1>
						<p>Ostatnia aktualizacja: 01 Luty, 2025</p>
					</div>
				</AnimateOnScroll>

				<div className='privacy__header__content__texts'>
					<div className='privacy__header__content__texts__tableOfContents'>
						<div className='privacy__header__content__texts__tableOfContents__content'>
							<p>
								<strong>Spis treści</strong>
							</p>

							<ol>
								<li>
									<a href='#dane_osobowe'>Dane osobowe</a>
								</li>
								<li>
									<a href='#zgoda_na_utrwalenie'>Zgoda na utrwalenie i publikację wizerunku</a>
								</li>
								<li>
									<a href='#cele_i_czynnosci'>Cele i czynności przetwarzania</a>
								</li>
								<li>
									<a href='#pliki_cookies'>Pliki cookies i inne technologie śledzące</a>
								</li>
								<li>
									<a href='#logi_serwera'>Logi serwera</a>
								</li>
							</ol>

							<hr />
						</div>
					</div>

					<div className='privacy__header__content__texts__text'>
						<h2>
							Na tej stronie znajdziesz zasady przetwarzania danych osobowych oraz wykorzystywania plików cookies w związku z korzystaniem ze strony
							internetowej <a href='/'>http://sercakreacja.pl</a>
						</h2>
						<p>
							Administratorem strony jest Fundacja Serca Kreacja, Gliwicka 35, 42-600 Tarnowskie Góry, wpisaną do Krajowego Rejestru Sądowego,
							prowadzonego przez Sąd Rejonowy w Gliwicach pod numerem KRS: 0000898298 . Numer identyfikacji podatkowej (NIP): 6452569434.
						</p>
						<p>
							W razie jakichkolwiek wątpliwości związanych z polityką prywatności możesz skontaktować się z nami w każdej chwili, wysyłając wiadomość
							na adres <a href='mailto:fundacja@sercakreacja.pl'>fundacja@sercakreacja.pl</a>.
						</p>

						<h3>Skrócona wersja - najważniejsze informacje</h3>
						<p>Tutaj znajdziesz skróconą wersję najważniejszych zasad związanych z ochroną prywatności.</p>
						<p>
							Zakładając konto użytkownika za pośrednictwem strony, składając zamówienie, zapisując się do newslettera, składając reklamację,
							odstępując od umowy czy po prostu kontaktując się z nami przez formularz na stronie, przekazujesz nam swoje dane osobowe, a my
							gwarantujemy Ci, że Twoje dane pozostaną poufne, bezpieczne i nie zostaną udostępnione jakimkolwiek podmiotom trzecim bez Twojej
							wyraźnej zgody.
						</p>
						<p>
							Powierzamy przetwarzanie danych osobowych tylko sprawdzonym i zaufanym podmiotom świadczącym usługi związane z przetwarzaniem danych
							osobowych (chodzi tu o firmę hostingową, narzędzie do newslettera czy firmę księgową; szczegółową listę znajdziesz w dalszej części tego
							dokumentu).
						</p>
						<p>
							Na stronie korzystamy z narzędzi analitycznych Google Analytics, które zbierają informacje na temat Twoich odwiedzin strony, takie jak:
							podstrony, które wyświetliłaś, czas, jaki spędziłaś na stronie czy przejścia pomiędzy poszczególnymi podstronami. W tym celu
							wykorzystywane są pliki cookies firmy Google LLC dotyczące usługi Google Analytics. W ramach mechanizmu do zarządzania ustawieniami
							plików cookies masz możliwość zadecydowania, czy w ramach usługi Google Analytics będziemy mogli korzystać również z funkcji
							marketingowych, czy nie.
						</p>
						<p>
							Korzystamy także z narzędzi marketingowych takich jak Facebook Pixel, by kierować do Ciebie reklamy. Wiąże się to z wykorzystywaniem
							plików cookies firmy Facebook. W ramach ustawień plików cookies możesz zadecydować, czy wyrażasz zgodę na korzystanie przez nas w Twoim
							przypadku z Pixela Facebooka, czy nie.
						</p>
						<p>
							Korzystamy z narzędzi remarketingowych Google AdWords. Wiąże się to z wykorzystywaniem plików cookies firmy Google LLC dotyczących
							usługi Google AdWords. W ramach mechanizmu do zarządzania ustawieniami plików cookies masz możliwość zadecydowania, czy będziemy mogli w
							Twoim przypadku korzystać z Google AdWords, czy nie.
						</p>
						<p>
							Na stronie umieszczamy nagrania wideo z serwisu YouTube i Vimeo. Gdy odtwarzasz takie nagrania, wykorzystywane są pliki cookies firmy
							Google LLC dotyczące usługi YouTube oraz pliki cookies firmy Vimeo.
						</p>
						<p>
							Zapewniamy możliwość korzystania z funkcji społecznościowych, takich jak udostępnianie treści w serwisach społecznościowych oraz
							subskrypcja naszego profilu społecznościowego. Korzystanie z tych funkcji wiąże się z wykorzystywaniem plików cookies administratorów
							serwisów społecznościowych takich jak Facebook, Instagram, YouTube, Twitter, Google+, LinkedIN.
						</p>
						<p>Wykorzystujemy też pliki cookies własne w celu prawidłowego działania strony.</p>
						<p>Jeżeli powyższe informacje nie są dla Ciebie wystarczające, poniżej znajdziesz dalej idące szczegóły.</p>

						<h4 id='dane_osobowe'>Dane osobowe</h4>
						<p>
							Administratorem Twoich danych osobowych w rozumieniu przepisów o ochronie danych osobowych jest Fundacja Serca Kreacja, Gliwicka 35,
							42-600 Tarnowskie Góry, wpisaną do Krajowego Rejestru Sądowego, prowadzonego przez Sąd Rejonowy w Gliwicach pod numerem KRS: 0000898298
							. Numer identyfikacji podatkowej (NIP): 6452569434.
						</p>
						<p>
							Cele, podstawy prawne oraz okres przetwarzania danych osobowych wskazane są odrębnie w stosunku do każdego celu przetwarzania danych
							(patrz: opis poszczególnych celów przetwarzania danych osobowych poniżej).
						</p>
						<p>
							Uprawnienia. RODO przyznaje Ci następujące potencjalne uprawnienia związane z przetwarzaniem Twoich danych osobowych:
							<ul>
								<li>prawo dostępu do danych osobowych,</li>
								<li>prawo do sprostowania danych osobowych,</li>
								<li>prawo do usunięcia danych osobowych,</li>
								<li>prawo do ograniczenia przetwarzania danych osobowych,</li>
								<li>prawo do wniesienia sprzeciwu co do przetwarzania danych osobowych,</li>
								<li>prawo do przenoszenia danych,</li>
								<li>prawo do wniesienia skargi do organu nadzorczego,</li>
								<li>prawo do odwołania zgody na przetwarzanie danych osobowych, jeżeli takową zgodę wyraziłeś.</li>
							</ul>
						</p>
						<p>
							Zasady związane z realizacją wskazanych uprawnień zostały opisane szczegółowo w art. 16 - 21 RODO. Zachęcamy Cię do zapoznania się z
							tymi przepisami. Zwróć uwagę jednak, że wskazane powyżej uprawnienia nie są bezwzględne i nie będą przysługiwać Ci w stosunku do
							wszystkich czynności przetwarzania Twoich danych osobowych. Dla Twojej wygody dokładamy starań, by w ramach opisu poszczególnych
							operacji przetwarzania danych osobowych wskazać na przysługujące Ci w ramach tych operacji uprawnienia.
						</p>
						<p>
							Pamiętaj, że jedno z uprawnień wskazanych powyżej przysługuje Ci zawsze - jeżeli uznasz, że przy przetwarzaniu Twoich danych osobowych
							dopuściliśmy się naruszenia przepisów o ochronie danych osobowych, masz możliwość wniesienia skargi do organu nadzorczego (Prezesa
							Urzędu Ochrony Danych Osobowych).
						</p>
						<p>
							Zawsze możesz również zwrócić się do nas z żądaniem udostępnienia Ci informacji o tym, jakie dane na Twój temat posiadamy oraz w jakich
							celach je przetwarzamy. Wystarczy, że wyślesz wiadomość na adres <a href='mailto:fundacja@sercakreacja.pl'>fundacja@sercakreacja.pl</a>.
						</p>
						<p>
							Dokładamy jednak wszelkich starań, by interesujące Cię informacje zostały wyczerpująco przedstawione w niniejszej polityce prywatności.
							Podany powyżej adres e-mail możesz wykorzystać również w razie jakichkolwiek pytań związanych z przetwarzaniem Twoich danych osobowych.
						</p>
						<p>
							Bezpieczeństwo. Gwarantujemy Ci poufność wszelkich przekazanych mi danych osobowych. Zapewniamy podjęcie wszelkich środków
							bezpieczeństwa i ochrony danych osobowych wymaganych przez przepisy o ochronie danych osobowych. Dane osobowe są gromadzone z należytą
							starannością i odpowiednio chronione przed dostępem do nich przez osoby do tego nieupoważnione.
						</p>
						<p>
							Wykaz powierzeń. Powierzamy przetwarzanie danych osobowych następującym podmiotom:
							<ul>
								<li>Siteground.com - w celu przechowywania danych osobowych na serwerze,</li>
								<li>
									MailerLite - w celu korzystania z systemu mailingowego, w którym przetwarzane są Twoje dane, jeżeli zapisałaś się do newslettera,
								</li>
								<li>QuickBooksOnline - w celu fakturowania,</li>
								<li>Fakturownia.pl - w celu fakturowania,</li>
								<li>Green Shoots Accounting - w celu korzystania z usług księgowości,</li>
								<li>PayU - w celu realizacji usługi szybkich płatności,</li>
							</ul>
							Wszystkie podmioty, którym powierzamy przetwarzanie danych osobowych gwarantują stosowanie odpowiednich środków ochrony i bezpieczeństwa
							danych osobowych wymaganych przez przepisy prawa.
						</p>

						<h4 id='zgoda_na_utrwalenie'>Zgoda na utrwalenie i publikację wizerunku</h4>
						<p>
							Klient biorąc udział w szkoleniu, konferencji lub innym wydarzeniu organizowanym przez Fundację Serca Kreacja wyraża zgodę na
							nieodpłatne wykorzystywanie jego wizerunku uwiecznionego na zdjęciach oraz nagraniach audiowizualnych pochodzących z poszczególnych
							wydarzeń w dowolny sposób - w tym poprzez zamieszczanie na stronie WWW i sklepie strony{' '}
							<a href='www.sercakreacja.com' target='_blank' rel='noopener noreferrer'>
								www.sercakreacja.com
							</a>{' '}
							w serwisach społecznościowych czy w sieci Internet, dla celów informacyjnych, promocyjnych, reklamowych lub marketingowych Fundacji
							Serca Kreacja lub sprzedawanych przez Fundację Serca Kreacja towarów bądź usług, przez czas nieoznaczony. Zgoda, o której mowa powyżej
							może być przez klienta odwołana w każdym czasie, poprzez wysłanie stosownego oświadczenia na adres e-mail:{' '}
							<a href='mailto:fundacja@sercakreacja.pl'>fundacja@sercakreacja.pl</a>.
						</p>

						<h4 id='cele_i_czynnosci'>Cele i czynności przetwarzania</h4>
						<p>
							Konto użytkownika. Zakładając konto użytkownika, musisz podać swój adres e-mail oraz zdefiniować hasło do konta. Podanie danych jest
							dobrowolne, ale niezbędne do założenia konta. W ramach edycji profilu użytkownika możesz podać dalej idące dane na swój temat, tj. imię
							i nazwisko, adres rozliczeniowy oraz adres do wysyłki. Podanie tych danych jest całkowicie dobrowolne. Możesz posiadać konto, nie
							podając tych dalej idących danych. W takiej sytuacji, składając zamówienie będziesz musiała te dane wprowadzić ręcznie.
						</p>
						<p>
							Dane wprowadzone przez Ciebie w ramach konta użytkownika przetwarzane są wyłącznie w celu utrzymywania konta i zapewnienia Ci możliwości
							korzystania z niego. Podanie danych w koncie użytkownika ma za zadanie ułatwić Ci składanie zamówień w sklepie poprzez automatyczne
							podstawianie danych do formularza zamówienia.
						</p>
						<p>
							Podstawą prawną przetwarzania Twoich danych osobowych w ramach konta użytkownika jest realizacja umowy o prowadzenie konta, którą
							zawierasz na podstawie regulaminu sklepu – art. 6 ust. 1 lit. b RODO.
						</p>
						<p>
							Dane zgromadzone w koncie użytkownika przetwarzane są w ramach systemu WordPress i WooCommerce i przechowywane na serwerze zapewnianym
							przez Siteground.com.
						</p>
						<p>
							Twoje dane będą przetwarzane w ramach konta tak długo, jak długo będziesz posiadać konto użytkownika. Po usunięciu konta Twoje dane
							zostaną usunięte z bazy, za wyjątkiem danych o złożonych zamówieniach.
						</p>
						<p>
							W każdej chwili możesz uzyskać dostęp do swoich danych osobowych przetwarzanych w ramach konta, logując się do swojego konta
							użytkownika. Po zalogowaniu się do konta możesz w każdej chwili zmodyfikować swoje dane, jak również je usunąć, za wyjątkiem danych o
							złożonych zamówieniach. W każdej chwili możesz podjąć również decyzję o usunięciu konta.
						</p>
						<p>
							W stosunku do danych zgromadzonych w koncie użytkownika przysługuje Ci również prawo do przenoszenia danych, o którym mowa w art. 20
							RODO.
						</p>
						<p>
							Zamówienia. Składając zamówienie, musisz podać dane niezbędne do realizacji zamówienia, tj. imię i nazwisko, adres rozliczeniowy, adres
							do dostawy, adres e-mail, numer telefonu. Podanie danych jest dobrowolne, ale niezbędne do złożenia zamówienia.
						</p>
						<p>
							Dane przekazane nam w związku z zamówieniem przetwarzane są w celu realizacji zamówienia (art. 6 ust. 1 lit. b RODO), wystawienia
							faktury (art. 6 ust. 1 lit. c RODO), uwzględnienia faktury w naszej dokumentacji księgowej (art. 6 ust. 1 lit. c RODO) oraz w celach
							archiwalnych i statystycznych (art. 6 ust. 1 lit. f RODO).
						</p>
						<p>
							Dane zawarte w zamówieniu złożonym za pośrednictwem sklepu przetwarzane są w ramach systemu WordPress i WooCommerce i przechowywane na
							serwerze zapewnianym przez siteground.com.
						</p>
						<p>Jeżeli posiadasz konto użytkownika, to Twoje zamówienie będzie widoczne w ramach historii zamówień danego konta.</p>
						<p>
							Każde zamówienie dokumentowane jest fakturą. Faktury wystawiane są z wykorzystaniem systemu QuickBooksOnline. Faktury przekazywane są do
							biura rachunkowego Green Shoots Accounting.
						</p>
						<p>Zamówienia są również rejestrowane w naszej wewnętrznej bazie w celach archiwalnych i statystycznych.</p>
						<p>
							Dane o zamówieniach będą przetwarzane przez czas niezbędny do realizacji zamówienia, a następnie do czasu upływu terminu przedawnienia
							roszczeń z tytułu zawartej umowy. Ponadto, po upływie tego terminu, dane nadal mogą być przez nas przetwarzane w celach statystycznych.
							Pamiętaj również, że mamy obowiązek przechowywać faktury z Twoimi danymi osobowymi przez okres 5 lat od końca roku podatkowego, w którym
							powstał obowiązek podatkowy.
						</p>
						<p>
							W przypadku danych o zamówieniach nie masz możliwości sprostowania tych danych po realizacji zamówienia. Nie możesz również sprzeciwić
							się przetwarzaniu danych oraz domagać się usunięcia danych do czasu upływu terminu przedawnienia roszczeń z tytułu zawartej umowy.
							Podobnie nie możesz sprzeciwić się przetwarzaniu danych oraz domagać się usunięcia danych zawartych w fakturach. Po upływie terminu
							przedawnienia roszczeń z tytułu zawartej umowy możesz jednak sprzeciwić się przetwarzaniu przez nas Twoich danych w celach
							statystycznych, jak również domagać się usunięcia Twoich danych z naszej bazy.
						</p>
						<p>W stosunku do danych o zamówieniach przysługuje Ci również prawo do przenoszenia danych, o którym mowa w art. 20 RODO.</p>
						<p>
							Newsletter. Jeżeli chcesz zapisać się do newslettera, musisz przekazać nam swój adres e-mail za pośrednictwem formularza zapisu do
							newslettera.
						</p>
						<p>
							Dane przekazane nam podczas zapisu do newslettera wykorzystywane są w celu przesyłania Ci newslettera, a podstawą prawną ich
							przetwarzania jest Twoja zgoda (art. 6 ust. 1 lit. a RODO) wyrażona podczas zapisywania się do newslettera.
						</p>
						<p>Dane przetwarzane są w ramach systemu mailingowego MailerLite i przechowywane na serwerze zapewnianym przez MailerLite.</p>
						<p>
							Dane będą przetwarzane przez czas funkcjonowania newslettera, chyba że wcześniej zrezygnujesz z jego otrzymywania, co spowoduje
							usunięcie Twoich danych z bazy.
						</p>
						<p>
							W każdej chwili możesz sprostować swoje dane zapisane w bazie newsletterowej, jak również zażądać ich usunięcia, rezygnując z
							otrzymywania newslettera. Przysługuje Ci również prawo do przenoszenia danych, o którym mowa w art. 20 RODO
						</p>
						<p>
							Reklamacje i odstąpienie od umowy. Jeżeli składasz reklamację lub odstępujesz od umowy, to przekazujesz nam dane osobowe zawarte w
							treści reklamacji lub oświadczeniu o odstąpieniu od umowy, które obejmują imię i nazwisko, adres zamieszkania, numer telefonu, adres
							e-mail, numer rachunku bankowego.
						</p>
						<p>
							Dane przekazane nam w związku ze złożeniem reklamacji lub odstąpieniem od umowy wykorzystywane są w celu realizacji procedury
							reklamacyjnej lub procedury odstąpienia od umowy (art. 6 ust. 1 lit. c RODO).
						</p>
						<p>
							Dane będą przetwarzane przez czas niezbędny do realizacji procedury reklamacyjnej lub procedury odstąpienia. Reklamacje oraz
							oświadczenia o odstąpieniu od umowy mogą być ponadto archiwizowane w celach statystycznych.
						</p>
						<p>
							W przypadku danych zawartych w reklamacjach oraz oświadczeniach o odstąpieniu od umowy nie masz możliwości sprostowania tych danych. Nie
							możesz również sprzeciwić się przetwarzaniu danych oraz domagać się usunięcia danych do czasu upływu terminu przedawnienia roszczeń z
							tytułu zawartej umowy. Po upływie terminu przedawnienia roszczeń z tytułu zawartej umowy możesz jednak sprzeciwić się przetwarzaniu
							przez nas Twoich danych w celach statystycznych, jak również domagać się usunięcia Twoich danych z naszej bazy.
						</p>
						<p>
							Kontakt e-mailowy. Kontaktując się z nami za pośrednictwem poczty elektronicznej, w tym również przesyłając zapytanie poprzez formularz
							kontaktowy, w sposób naturalny przekazujesz nam swój adres e-mail jako adres nadawcy wiadomości. Ponadto w treści wiadomości możesz
							zawrzeć również inne dane osobowe.
						</p>
						<p>
							Twoje dane są w tym przypadku przetwarzane w celu kontaktu z Tobą, a podstawą przetwarzania jest art. 6 ust. 1 lit. a RODO, czyli Twoja
							zgoda wynikająca z zainicjowania z nami kontaktu. Podstawą prawną przetwarzania po zakończeniu kontaktu jest usprawiedliwiony cel w
							postaci archiwizacji korespondencji na potrzeby wewnętrzne (art. 6 ust. 1 lit. c RODO).
						</p>
						<p>
							Treść korespondencji może podlegać archiwizacji i nie jesteśmy w stanie jednoznacznie określić, kiedy zostanie usunięta. Masz prawo do
							domagania się przedstawienia historii korespondencji, jaką z nami prowadziłaś (jeżeli podlegała archiwizacji), jak również domagać się
							jej usunięcia, chyba że jej archiwizacja jest uzasadniona z uwagi na nasze nadrzędne interesy, np. obrona przed potencjalnymi
							roszczeniami z Twojej strony.
						</p>

						<h4 id='pliki_cookies'>Pliki cookies i inne technologie śledzące</h4>
						<p>
							Nasza strona, podobnie jak niemal wszystkie inne strony internetowe, wykorzystuje pliki cookies, by zapewnić Ci najlepsze doświadczenia
							związane z korzystaniem z niej.
						</p>
						<p>
							Cookies to niewielkie informacje tekstowe, przechowywane na Twoim urządzeniu końcowym (np. komputerze, tablecie, smartfonie), które mogą
							być odczytywane przez nasz system teleinformatyczny.
						</p>
						<p>Cookies można podzielić na cookies własne oraz cookie podmiotów trzecich.</p>
						<p>Więcej szczegółów znajdziesz poniżej.</p>
						<p>
							Zgoda na cookies. Podczas pierwszej wizyty na stronie wyświetlana jest Ci informacja na temat stosowania plików cookies wraz z pytaniem
							o zgodę na wykorzystywanie plików cookies. Zawsze możesz zmienić ustawienia cookies z poziomu swojej przeglądarki albo w ogóle usunąć
							pliki cookies. Pamiętaj jednak, że wyłączenie plików cookies może powodować trudności w korzystaniu ze strony, jak również z wielu
							innych stron internetowych, które stosują cookies.
						</p>
						<p>
							Cookies własne. Cookies własne wykorzystujemy w celu zapewnienia Ci prawidłowego działania strony, w szczególności w celu rozpoznania
							użytkownika podczas kolejnej wizyty na stronie, w celu ulepszenia i spersonalizowania strony, logowania na konto użytkownika i
							zapamiętania preferencji.
						</p>
						<p>
							Cookies podmiotów trzecich. Nasza strona, podobnie jak większość współczesnych stron internetowych, wykorzystuje funkcje zapewniane
							przez podmioty trzecie, co wiąże się z wykorzystywaniem plików cookies pochodzących od podmiotów trzecich. Wykorzystanie tego rodzaju
							plików cookies zostało opisane poniżej.
						</p>
						<p>
							Analiza i statystyka. Wykorzystujemy cookies do śledzenia statystyk strony, takich jak liczba osób odwiedzających, rodzaj systemu
							operacyjnego i przeglądarki internetowej wykorzystywanej do przeglądania strony, czas spędzony na stronie, odwiedzone podstrony etc.
							Korzystamy w tym zakresie z Google Analytics, co wiąże się z wykorzystaniem plików cookies firmy Google LLC. W ramach mechanizmu do
							zarządzania ustawieniami plików cookies masz możliwość zadecydowania, czy w ramach usługi Google Analytics będziemy mogli korzystać
							również z funkcji marketingowych, czy nie.
						</p>
						<p>
							Marketing. Korzystamy z narzędzi marketingowych takich jak Facebook Pixel, by kierować do Ciebie reklamy. Wiąże się to z
							wykorzystywaniem plików cookies firmy Facebook. W ramach ustawień plików cookies możesz zadecydować, czy wyrażasz zgodę na korzystanie
							przez nas w Twoim przypadku z Pixela Facebooka, czy nie.
						</p>
						<p>
							Korzystamy z narzędzi remarketingowych Google AdWords. Wiąże się to z wykorzystywaniem plików cookies firmy Google LLC dotyczących
							usługi Google AdWords. W ramach mechanizmu do zarządzania ustawieniami plików cookies masz możliwość zadecydowania, czy będziemy mogli w
							Twoim przypadku korzystać z Google AdWords, czy nie. Narzędzia społecznościowe. Zapewniamy możliwość korzystania z funkcji
							społecznościowych, takich jak udostępnianie treści w serwisach społecznościowych oraz subskrypcja profilu społecznościowego. Korzystanie
							z tych funkcji wiąże się z wykorzystywaniem plików cookies administratorów serwisów społecznościowych takich jak Facebook, Instagram,
							YouTube, Twitter, Google+, LinkedIN.
						</p>
						<p>
							Osadzamy na stronie nagrania wideo z serwisu YouTube i Vimeo. Gdy odtwarzasz takie nagrania, wykorzystywane są pliki cookies firmy
							Google LLC dotyczące usługi YouTube lub firmy Vimeo.
						</p>

						<h4 id='logi_serwera'>Logi serwera</h4>
						<p>
							Korzystanie ze strony wiąże się z przesyłaniem zapytań do serwera, na którym przechowywana jest strona. Każde zapytanie skierowane do
							serwera zapisywane jest w logach serwera.
						</p>
						<p>
							Logi obejmują m.in. Twój adres IP, datę i czas serwera, informacje o przeglądarce internetowej i systemie operacyjnym z jakiego
							korzystasz. Logi zapisywane i przechowywane są na serwerze.
						</p>
						<p>
							Dane zapisane w logach serwera nie są kojarzone z konkretnymi osobami korzystającymi ze strony i nie są wykorzystywane przez nas w celu
							Twojej identyfikacji.
						</p>
						<p>
							Logi serwera stanowią wyłącznie materiał pomocniczy służący do administrowania stroną, a ich zawartość nie jest ujawniana nikomu poza
							osobami upoważnionymi do administrowania serwerem.
						</p>
						<p>
							W razie jakichkolwiek pytań prosimy o kontakt pod adresem <a href='mailto:fundacja@sercakreacja.pl'>fundacja@sercakreacja.pl</a>.
						</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default PrivacyHeader;
