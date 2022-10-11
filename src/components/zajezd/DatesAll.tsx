import Heading from "@components/bricks/Heading";
import Wrapper from "@components/bricks/Wrapper";

type Props = {
  dateAndPrice : [{
    datumOd: string;
    datumDo: string;
    cena: number;
    pocetDni: number;
    pocetNoci: number;
  }];
}

export default function DatesAll({dateAndPrice}: Props){
  
  {/*  Sort dates  */}
  dateAndPrice.sort(function(a,b){
    return new Date(a.datumOd).getTime() - new Date(b.datumOd).getTime()
  })
  
  {/* Returns amount of days in named month */}
  function daysInMonth (month: number) {
    return new Date(new Date().getFullYear(), month, 0).getDate();
  }

  {/*  Counts amount of days between dateFrom and dateTo [date format yyyy-mm-dd] */}
  function dayCounter(dateFrom: string, dateTo: string){
    if(dateFrom.split("-")[1] !== dateTo.split("-")[1]){
      return ((daysInMonth(parseInt(dateFrom.split("-")[1])) - parseInt(dateFrom.split("-")[2])) + parseInt(dateTo.split("-")[2]))
    }
    else{
      return (parseInt(dateTo.split("-")[2]) - parseInt(dateFrom.split("-")[2]))
    }
  }

  {/* Changes date to dd.mm.yyyy format */}
  function changeDateType(date: string){
    var newDate = date.split("-")[2] + "." + date.split("-")[1] + "." + date.split("-")[0] 
    return newDate;
  }

  {/* Returns first 2 letters of a day */}
  function getDayName(date: string){
    var d = new Date(date);

    switch(d.getDay()){
      case 0 : return "Ne"; 
      case 1 : return "Po";
      case 2 : return "Út";
      case 3 : return "St";
      case 4 : return "Čt";
      case 5 : return "Pá";
      case 6 : return "So";
    }
  }
  
  return(
    <Wrapper
      size="base"
      as={"section"}
      className="mb-10"
      >
        <Heading level={2} size={"xl"}>Termíny a ceny</Heading>
        <div className="mt-24">
          <table className="w-full">
            <thead className="text-left border-b-1 border-gray-300 pb-4">
              <tr>
                <th className="py-4">Odjezd</th>
                <th>Návrat</th>
                <th className="text-center">Počet dní/nocí</th>
                <th className="w-20 text-right">Cena</th>
              </tr>
            </thead>
            <tbody>
              {dateAndPrice.map((entry, key) => {
                /* if(entry.datumOd > new Date().toISOString().slice(0, 10)){ */
                  return(
                    <tr className="border-b-1 border-gray-200" key={key}>
                      <td className="text-gray-500 py-3">{getDayName(entry.datumOd)} {changeDateType(entry.datumOd).slice(0, 6)}</td>
                      <td className="text-gray-500 py-3">{getDayName(entry.datumDo)} {changeDateType(entry.datumDo)}</td>
                      <td className="text-gray-500 py-3 text-center">{entry.pocetDni} / {entry.pocetNoci}</td>
                      <td className="text-gray-500 py-3 text-right">{entry.cena} Kč / osoba</td>
                    </tr>
                    )
                  /* } */
                })}
            </tbody>
          </table>
        </div>
      </Wrapper>
  )
}