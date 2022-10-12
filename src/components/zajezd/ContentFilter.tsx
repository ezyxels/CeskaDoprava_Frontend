import Button from "@components/bricks/Button";

type Props = {
  content: string;
  setContent: any;
}

export default function ContentFilter({ content, setContent }: Props) {
  return (
    <div className="grid grid-cols-2 gap-x-5 md:gap-x-0 md:grid-cols-4 my-32 md:divide-x divide-gray-300">
      <Button 
        color = {content == "informace" ? "primary" : "gray"}
        shape= "square"
        onClick={() => setContent("informace")}
      >
        Informace
      </Button>
      <Button 
        color = {content === "termin" ? "primary" : "gray"}
        shape= "square"
        onClick={() => setContent("termin")}
      >
        Termín a ceny
      </Button>
      <Button 
        color = {content === "galerie" ? "primary" : "gray"}
        shape= "square"
        className= "border-t border-gray-100 md:border-t-0"
        onClick={() => setContent("galerie")}
      >
        Galerie
      </Button>
      <Button 
        color = {content === "objednavka" ? "primary" : "gray"}
        shape= "square"
        className= "border-t border-gray-100 md:border-t-0"
        onClick={() => setContent("objednavka")}
      >
        Objednávka
      </Button>
    </div>
  )
}
