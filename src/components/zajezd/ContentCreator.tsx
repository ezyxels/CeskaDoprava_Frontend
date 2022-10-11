import Wrapper from "@components/bricks/Wrapper";
import { useState } from "react";

import ContentFilter from "./ContentFilter";
import DatesAll from "./DatesAll";
import Information from "./Information";
import Gallery from "./Gallery";
import Form from "./Form/Form";

type Props = {
  code: string;
  imageSrc: string;
  otherImages?: any;
  dateAndPrice : [{
    datumOd: string;
    datumDo: string;
    cena: number;
    pocetDni: number;
    pocetNoci: number;
  }];
  departurePoints: [{
    mesto: string;
    ulice: string;
    cisloPopisne: number;
  }];
  text: string;
  information?: string;
  housing?: string;
  catering?: string;
  transport?: string;
  programme?: string;
  events?: string;
  tips?: string;
  comment?: string;
}

export default function ContentCreator({
  code,
  otherImages,
  dateAndPrice,
  departurePoints,
  text,
  information,
  housing,
  catering,
  transport,
  programme,
  events,
  tips,
  comment
}: Props) {
  const [content, setContent] = useState("informace");
  var contentShown: any;

  if(content === "informace"){
    contentShown = 
      <Information 
          text={text}
          information={information}
          housing={housing}
          catering={catering}
          transport={transport}
          programme={programme}
          events={events}
          tips={tips}
          comment={comment}
      />
  } 
  else if(content === "termin"){
    contentShown = 
      <DatesAll
        dateAndPrice ={dateAndPrice}
      />
  }

  
  else if(content === "galerie"){
    contentShown = 
      <Gallery images={otherImages}/>
  }
   else if(content === "objednavka"){
    contentShown = 
      <Form 
        code={code}
        dateAndPrice ={dateAndPrice}
        departurePoints={departurePoints}
    />
  }
  




  return(
    <Wrapper
      size="sm"
      as={"section"}
    >
      <ContentFilter content={content} setContent={setContent}/>

      {contentShown}
    </Wrapper>
  )
}