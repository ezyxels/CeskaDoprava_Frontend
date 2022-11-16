import Accordion from '@components/bricks/Accordion'
import AccordionStack from '@components/bricks/AccordionStack'
import Heading from '@components/bricks/Heading'
import Wrapper from '@components/bricks/Wrapper'

export default function Questions() {
  return (
    <div className='bg-body-100'>
      <Wrapper as="section" size="base" paddedContent='sm'>
        <Heading level={2} size="xl">Často kladené otázky</Heading>
        {/*         <p className='mt-4 max-w-prose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ullam cupiditate ea eveniet vel voluptatum expedita iusto cum dicta libero velit porro neque recusandae eius cumque, quidem sequi hic corporis alias deleniti?</p>
 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
          <div>
            <AccordionStack>
              <Accordion title='Mohu si rezervovat konkrétní místo v autobusu?'>
                Ano, cena místenky je 300 kč.
              </Accordion>
              <Accordion title='Kolik zavazadel si mohu vzít do autobusu?'>
                Každý cestující má v ceně jízdného zahrnutou přepravu 1 zavazadla o hmotnosti do 20 kg v zavazadlovém prostoru a 1 příručního zavazadla na palubě autobusu.
              </Accordion>
              <Accordion title='Přepravují se také psi?'>
                Ano, psi  je možné přepravovat, ale pouze za předpokladu že splňují všechny podmínky pro přepravu zvířat v rámci EU. Přeprava psa je zpoplatněna částkou 500,- kč. Pes musí být opatřen náhubkem a musí být přepravován v přepravním boxu v zavazadlovém prostoru. Přepravu psa je potřeba hlásit při rezervaci jízdenek.
              </Accordion>
              <Accordion title='Je možné přepravovat kočárek?'>
                Ano, přeprava kočárku je možná. Kočárek se přepravuje v zavazadlovém prostoru ve složeném stavu za příplatek 200 kč. Přepravu kočárku je potřeba hlásit při rezervaci jízdenek.
              </Accordion>
              <Accordion title='Je umožněna přeprava invalidních osob?'>
                Ano, je však potřeba zvážit stav přepravované osoby. Autobusy nejsou nízkopodlažní. Nástup a výstup osob se sníženou schopností pohybu je možný za asistence palubního personálu, případně doprovodu invalidní osoby. Na palubu autobusu není možné dostat invalidní vozík. V případě nutnosti přepravy invalidního vozíku, musí cestující cestovat na sedadle v autobusu a invalidní vozík se přepraví v zavazadlovém prostoru. Invalidním osobám je během celé přepravy k dispozici palubní personál a poskytne nadstandardní péči a asistenci.
              </Accordion>
              <Accordion title='Jsou v autobusech dětské sedačky?'>
                Nejsou, dětské autosedačky je možné použít vlastní, ale upozorňujeme, že ne každá autosedačka je konstruována pro uchycení v autobusu.
              </Accordion>
            </AccordionStack>
          </div>

          <div>
            <AccordionStack>
              <Accordion title='Jak dlouho trvá cesta?'>
                Délka cesty záleží na zvoleném nástupním a výstupním místě. Běžná doba cesty se pohybuje okolo 12 hodin.
              </Accordion>
              <Accordion title='Jaké potřebuji cestovní doklady?'>
                Občanský průkaz nebo cestovní pas
              </Accordion>
              <Accordion title='Lze nastoupit a vystoupit i mimo uvedená místa?'>
                Ano, výčet míst je orientační. Autobus vás nabere a vysadí kdekoli po své trase na území ČR  a HR. Individuální požadavky na nástupní a výstupní místa je vždy potřeba řešit při objednávce jízdenek.
              </Accordion>
              <Accordion title='Mám zakoupenou jízdenku, ale nemohu odjet '>
                Máte-li zaplacenou jízdenku a nemůžete odjet, můžete využít některou z následujících možností:<br />
                - vrácení jízdného (stornopoplatek dle VOP)<br />
                - změna termínu (lze maximálně 20 dní před odjezdem)<br />
                - změna cestujícího (jízdenka je přenosná, změna cestujícího stojí 100,- kč)<br />
              </Accordion>
              <Accordion title='Jak často jsou bezpečnostní přestávky?'>
                Frekvence bezpečnostních přestávek závisí na situaci v provozu, standardně řidiči dělají přestávky po 3,5 hodinách jízdy.
              </Accordion>
              <Accordion title='Kdy dostanu pokyny k odjezdu?'>
                Pokyny k odjezdu s přesným časem a místem odjezdu obdržíte na uvedený email zpravidla 5 dní před odjezdem.
              </Accordion>
            </AccordionStack>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}