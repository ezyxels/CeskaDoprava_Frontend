type Props = {
  domain: string;
  ownerName: string;
  adress: string;
  ico: string;
  validTime: string;
  lastUpdated: string;
};

export default function CookiesPolicy({
  domain = "mojedomena.cz",
  ownerName = "spolecnost s.r.o",
  adress = "Ulice 123, 123 456 Město",
  ico = "01234567",
  validTime = "šest mesíců",
  lastUpdated = "10. 11. 2021",
}: Props) {
  return (
    <section id="cookies" className="text-formatter">
      <h2 className="mt-0">Základní ustanovení</h2>
      <p>
        Tyto zásady používání souborů cookies popisují jaké druhy cookies
        využíváme v souvislosti s webovou stránkou {domain} jejímž vlastníkem je{" "}
        {ownerName} se sídlem {adress}, IČO: {ico}.
      </p>

      <h2>Co jsou to soubory cookies?</h2>
      <p>
        Cookies jsou malé textové soubory, které do vašeho zařízení ukládají
        navštívené webové stránky. Soubory cookies jsou poté při každé další
        návštěvě odeslány zpět na web nebo na jinou webovou stránku, která tento
        soubor cookies rozpozná. Soubory cookies se používají k tomu, aby web
        fungoval, nebo aby fungoval efektivněji, stejně jako k poskytování
        informací vlastníkům webu. Tyto informace lze použít k personalizaci a
        zrychlení služeb. Cookies mohou být buď soubory cookies první strany
        nastavené přímo námi ve vašem zařízení, nebo soubory cookies třetích
        stran, které za nás nastavil externí poskytovatel. Kdykoli tento web
        navštívíte, prostřednictvím souborů cookies či jiných podobných
        technologií (např. webovými štítky, tagy, skripty, místním úložištěm)
        mohou být shromažďována data.
      </p>
      <p>
        Sběr cookies je dle obecného nařízení o ochraně osobních údajů (GDPR)
        považovaný za případ zpracování osobních údajů.
      </p>

      <h2>Za jakým účelem cookies používáme?</h2>
      <p>
        Soubory cookies používané na našem webu lze zařadit do následujících
        kategorií.
      </p>

      <h3>Nezbytně nutné soubory cookies</h3>
      <p>
        Obvykle se nastavují pouze v reakci na vámi provedené akce, které
        představují požadavek na služby, jako jsou nastavení vašich předvoleb
        ochrany osobních údajů, přihlášení nebo vyplňování formulářů.
      </p>

      <h3>Funkční soubory cookies</h3>
      <p>
        Umožňují webové stránce poskytovat lepší funkcionalitu a personalizaci
        na základě vaší vzájemné interakce. Mohou být nastaveny námi nebo
        poskytovateli třetích stran, jejichž služby jsme na naše stránky
        přidali.
      </p>

      <h3>Analytické a výkonnostní</h3>
      <p>
        Umožňují nám sledovat analytiku počítáním návštěv a provozních zdrojů,
        abychom mohli měřit a zlepšovat výkon našeho webu. Mohou být nastaveny
        námi nebo poskytovateli třetích stran (např. Google, Seznam, Adobe,
        Vercel, atd.), aby nám pomohly zjistit, které stránky, příspěvky nebo
        videa jsou nejvíce a nejméně populární a jak se návštěvníci na webových
        stránkách pohybují.
      </p>

      <h2>Doba uchování souborů cookies</h2>
      <p>
        Doba, po kterou soubory cookies zůstanou ve vašem zařízení, se odvíjí od
        toho, zda se jedná o „trvalé“ nebo „relační“ soubory cookies. Trvalé
        soubory cookies budou uloženy webovým prohlížečem a zůstanou platné až
        do nastaveného data vypršení platnosti, které je na našem webu nastavené
        na {validTime}, pokud je před vypršením platnosti neodstraníte. Poté
        budete při další návštěvě webu opětovně vyzváni k potvrzení cookies.
        Relační cookies naopak vyprší na konci vaší webové relace, když se
        webový prohlížeč zavře.
      </p>

      <h2>Souhlas s používáním souborů cookies</h2>
      <p>
        Používáním těchto webových stránek souhlasíte s užitím cookies. Můžete
        je vymazat nebo předem odmítnout jejich používání volbou v příslušném
        nastavení ve vašem prohlížeči. Nicméně pokud tak učiníte, některé služby
        a funkce webu nemusí fungovat správně.
      </p>

      <h2>Jak mít cookies pod kontrolou?</h2>
      <p>
        Většina prohlížečů cookies automaticky akceptuje, pokud není prohlížeč
        nastaven jinak. Cookies si můžete ve svém webovém prohlížeči spravovat,
        a to tak, že některá můžete zakázat a některá z nich povolit. Dejte však
        pozor, pokud některé cookies zakážete, může se stát, že nebudete moci
        plně využít některých funkcí našich webových stránek a plného komfortu,
        které cookies poskytují. Může se také stát, že některé funkce našich
        webových stránek vám nemusí fungovat správně.
      </p>

      <p>
        Z následujícího seznamu můžete získat bližší informace o tom, jak
        zakázat soubory cookie nebo spravovat nastavení souborů cookie pro
        prohlížeč, který používáte:
      </p>

      <ul>
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647?hl=cs&co=GENIE.Platform%3DDesktop"
            target="_blank"
            rel="noreferrer external"
          >
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/cs/kb/vymazani-cookies-dat-stranek"
            target="_blank"
            rel="noreferrer external"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/cs-cz/microsoft-edge/odstraněn%C3%AD-souborů-cookie-v-aplikaci-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
            target="_blank"
            rel="noreferrer external"
          >
            Microsoft Edge
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/cs-cz/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noreferrer external"
          >
            Safari
          </a>
        </li>
      </ul>

      <h2>Změny tohoto oznámení o souborech cookies</h2>
      <p>
        Oznámení o souborech cookies můžeme čas od času upravit či doplnit.
        Provedeme-li v tomto oznámení změny, pozměníme datum aktualizace ve
        spodní části této stránky a toto upravené nebo doplněné oznámení o
        cookies bude pro vás a vaše údaje platit od data uvedené aktualizace.
      </p>

      <p className="mt-20 text-lg font-semibold">
        Poslední aktualizace proběhla dne {lastUpdated}.
      </p>
    </section>
  );
}
