import Heading from "@components/bricks/Heading";
import Wrapper from "@components/bricks/Wrapper";
import GdprPolicy from "@components/gdpr/GdprPolicy";
import Seo from "@components/root/seo/Seo";
import type { NextPage } from "next";
import { globalConfig } from "src/configs/globalConfig";

const GdprPage: NextPage = () => {
  return (
    <>
      <Seo title="Zpracování osobních údajů" description="" />
      <Wrapper className="pt-24 md:pb-16 md:pt-36">
        <Heading
          level={1}
          size="3xl"
          font="display"
          weight="medium"
          className="pt-20 md:pt-32"
          align="center"
        >
          Zpracování osobních údajů
        </Heading>
      </Wrapper>
      <Wrapper size="sm" className="pt-24 pb-40">
        <GdprPolicy
          ownerName={globalConfig.client.fullName}
          adress={globalConfig.client.adress}
          email={globalConfig.client.email}
          phone={globalConfig.client.phone}
          ico={globalConfig.client.ico}
          takesEffectDate="1. 9. 2022"
        />
      </Wrapper>
    </>
  );
};

export default GdprPage;
