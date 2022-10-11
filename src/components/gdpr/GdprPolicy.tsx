import Link from "next/link";

type Props = {
  ownerName: string;
  ico: string;
  adress: string;
  email: string;
  phone: string;
  takesEffectDate: string;
};

export default function GdprPolicy({
  ownerName = "Jméno Příjmení",
  ico = "01234567",
  adress = "Ulice 123, 123 456 Město",
  email = "info@domena.cz",
  phone = "+420 123 456 789",
  takesEffectDate = "15. 10. 2021",
}: Props) {
  return (
    <section id="gdpr" className="text-formatter">
      <p>
        <strong className="text-xl leading-loose">
          Ochranu osobních údajů nebereme na lehkou váhu. V souladu s nařízením
          Evropského Parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v
          souvislosti se zpracováním osobních údajů a o volném pohybu těchto
          údajů (dále také „GDPR“) a o zrušení směrnice 95/46/ES (obecné
          nařízení o ochraně osobních údajů) předkládáme následující prohlášení.
        </strong>
      </p>

      <h2 className="pt-20">Základní informace</h2>
      <h3>Správce osobních údajů</h3>
      <p>
        {ownerName}, {adress}, IČ: {ico} <br />
        (dále jen jako „Správce“)
      </p>

      <h4>Kontaktní údaje správce</h4>
      <ul>
        <li>Telefon: {phone}</li>
        <li>E-mail: {email}</li>
        <li>Adresa: {adress}</li>
      </ul>

      <p>
        Správce je povinen zajistit veškeré úsilí k tomu, aby bylo s osobními
        daty nakládáno v souladu se zákonem č. 110/2019 Sb.
      </p>

      <h2>Zdroj osobních údajů</h2>
      <p>
        Osobní údaje jsou získány na základě vzájemné komunikace, uzavřených
        smluv, či z vyplněných formulářů a pohybu po webových stránkách. Další
        osobní údaje pochází z veřejně dostupných zdrojů (rejstříků, evidencí,
        atd.).
      </p>

      <h2>Seznam osobních údajů</h2>
      <h3>Zpracováváme následující osobní údaje:</h3>
      <ul>
        <li>Jméno a příjmení, E-mail, Telefon, Adresa</li>
        <li>Historii vzájemné komunikace</li>
      </ul>

      <h3>Osobní údaje z vyplněných formulářů z webových stránek:</h3>
      <ul>
        <li>Jméno a příjmení, E-mail, Telefon, Adresa</li>
      </ul>

      <h3>
        Pro zlepšení našich služeb využíváme možnosti uložení cookies do vašeho
        prohlížeče.
      </h3>
      <p>
        Pro více informací o cookies si přečtěte naše{" "}
        <Link href="/cookies">
          <a>zásady používání cookies.</a>
        </Link>
      </p>

      <h2>Účel zpracování osobních údajů</h2>
      <ul>
        <li>Naplnění závazků mezi správcem a subjektem údajů</li>
        <li>PR a Marketingové účely</li>
      </ul>

      <h2>Doba zpracování</h2>
      <p>
        Osobní údaje budou zpracovány po dobu nezbytně nutnou k daným účelům. Ne
        však po dobu delší než 30 let. Po uplynutí této doby budou osobní údaje
        odstraněny.
      </p>

      <h2>Informování, editace, nebo výmaz osobních údajů</h2>
      <p>
        Ze statutu nařízení máte právo ovlivnit způsob nakládání s vašimi
        osobními údaji. Zejména se jedná o:
      </p>

      <ul>
        <li>Právo na informace o zpracování vašich osobních údajů</li>
        <li>Právo na opravu osobních údajů</li>
        <li>Právo na odstranění (právo být zapomenut)</li>
      </ul>

      <p>
        <strong>
          Pro uplatnění tohoto práva využijte kontaktních údajů správce na
          začátku dokumentu.
        </strong>
      </p>

      <p className="mt-20 text-lg font-semibold">
        Tyto podmínky nabývají účinnosti dnem {takesEffectDate}.
      </p>
    </section>
  );
}
