import Button from "@components/bricks/Button";
import Heading from "@components/bricks/Heading";
import Wrapper from "@components/bricks/Wrapper";
import Seo from "@components/root/seo/Seo";
import type { NextPage } from "next";
import Link from "next/link";

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Seo
        title="Stránka nenalezena"
        description="Stránka, kterou se pokoušíte nalézt již neexistuje, nebo byla přesunuta"
        noFollow={true}
        noIndex={true}
      />
      <Wrapper
        className="flex min-h-screen flex-col items-center justify-start"
        paddedContent="lg"
      >
        <Heading
          level={1}
          size="3xl"
          font="display"
          align="center"
          weight="medium"
          className="pt-20 md:pt-32"
        >
          Stráka nenalazena
        </Heading>
        <Heading level={2} size="base" color="primary" align="center">
          Chyba 404
        </Heading>
        <div className="mt-10 flex flex-col items-center justify-center gap-10 md:mt-20">
          <p className="max-w-prose text-center text-lg font-medium">
            Stránka, kterou se pokoušíte nalézt již neexistuje, nebo byla
            přesunuta. Kliknutím na následující tlačítko se dostanete na hlavní
            stránku webu.
          </p>
          <Link href={"/"}>
            <Button size="lg">Hlavní strana</Button>
          </Link>
        </div>
      </Wrapper>
    </>
  );
};

export default NotFoundPage;
