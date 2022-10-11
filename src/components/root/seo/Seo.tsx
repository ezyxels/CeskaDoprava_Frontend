import { NextSeo } from "next-seo";

type SeoOptions = {
  title: string;
  description: string;
  noIndex?: boolean;
  noFollow?: boolean;
};

export default function Seo({
  title = "",
  description = "",
  noIndex = false,
  noFollow = false,
}: SeoOptions) {
  return (
    <NextSeo
      title={title}
      titleTemplate="%s | Česká doprava"
      description={description}
      openGraph={{ title, description }}
      noindex={noIndex}
      nofollow={noFollow}
    />
  );
}
