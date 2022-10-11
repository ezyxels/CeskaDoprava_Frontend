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
        <span className="mb-5 block text-xl font-semibold tracking-wider text-muted">
          Lorem ipsum dolor
        </span>
        <Heading level={1} size="xl" className="mb-12 max-w-xl">
          Lorem ipsum dolor sit amet
        </Heading>
        <p className="max-w-prose text-lg font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea explicabo
          sint repellat dolorum eos officiis qui beatae totam, ipsum obcaecati!
        </p>
      </div>
    </Wrapper>
  );
}
