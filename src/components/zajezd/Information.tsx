import Heading from "@components/bricks/Heading";
import Wrapper from "@components/bricks/Wrapper";

type Props = {
  text?: string;
  information?: string;
  housing?: string;
  catering?: string;
  transport?: string;
  programme?: string;
  events?: string;
  tips?: string;
  comment?: string;
}

export default function Information({
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
  return (
    <Wrapper
      size="sm"
      id="informace"
    >
      <div className={`mb-32 ${text === null ? "hidden" : "block"}`}>
        <Heading level={2} size={"lg"}>Popis</Heading>
        <p className="text-sm my-10">{text}</p>
      </div>
      <div className={`mb-32 ${information === null ? "hidden" : "block"}`}>
        <Heading level={2} size={"lg"}>Důležité informace</Heading>
        <p className="text-sm my-10">{information}</p>
      </div>
      <div className={`mb-32 ${housing === null ? "hidden" : "block"}`}>
        <Heading level={2} size={"lg"}>Ubytování</Heading>
        <p className="text-sm my-10">{housing}</p>
      </div>
      <div className={`mb-32 ${catering === null ? "hidden" : "block"}`}>
        <Heading level={2} size={"lg"}>Stravování</Heading>
        <p className="text-sm my-10">{catering}</p>
      </div>
      <div className={`mb-32 ${transport === null ? "hidden" : "block"}`}>
        <Heading level={2} size={"lg"}>Doprava</Heading>
        <p className="text-sm my-10">{transport}</p>
      </div>
      <div className={`mb-32 ${programme === null ? "hidden" : "block"}`}>
        <Heading level={2} size={"lg"}>Program</Heading>
        <p className="text-sm my-10">{programme}</p>
      </div>
      <div className={`mb-32 ${events === null ? "hidden" : "block"}`}>
        <Heading level={2} size={"lg"}>Zábava</Heading>
        <p className="text-sm my-10">{events}</p>
      </div>
      <div className={`mb-32 ${tips === null ? "hidden" : "block"}`}>
        <Heading level={2} size={"lg"}>Tipy</Heading>
        <p className="text-sm my-10">{tips}</p>
      </div>
      <div className={`mb-32 ${comment === null ? "hidden" : "block"}`}>
        <Heading level={2} size={"lg"}>Poznámka k zájezdu</Heading>
        <p className="text-sm my-10">{comment}</p>
      </div>
    </Wrapper>
  )
}