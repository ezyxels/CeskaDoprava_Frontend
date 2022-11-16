import Heading from "@components/bricks/Heading";
import Wrapper from "@components/bricks/Wrapper";

export default function Hero() {
  return (
    <Wrapper
      as="header"
      paddedContent="base"
      className="flex items-center justify-start"
    >
      {/* Content */}
      <div className="flex flex-col pt-10">
        {/* <span className="mb-5 block text-xl font-semibold tracking-wider text-muted">
          Slogan:
        </span> */}
        <Heading level={1} size="xl" className="mb-12 max-w-xl">
          Doprava nás baví
        </Heading>
        <p className="max-w-prose text-lg font-medium">
          Naše společnost působí v oblasti cestovního ruchu, osobní a autobusové dopravy ale i dopravy nákladní a všem svým klientům poskytuje komplexní služby založené na přátelském a prozákaznickém přístupu. Vyzkoušejte nás i vy!
        </p>
      </div>
    </Wrapper>
  );
}
