import Heading from "@components/bricks/Heading";
import Wrapper from "@components/bricks/Wrapper";
import NearestDeparturesCard from "@components/home/NearestDeparturesCard";


type Props = {
  trips: any;
}
export default function NearestDepartures({ trips }: Props) {
  return (
    <Wrapper className="pb-28 md:pb-36">
      <Heading level={2} size="sm" className="mb-12">
        Nejbližší odjezdy
      </Heading>
      <div className="grid grid-cols-1 gap-6 md:gap-10 xs:grid-cols-2 lg:grid-cols-4">
        {trips.map((trip: any) => (
          <NearestDeparturesCard
            tripId={trip.id}
            key={trip.id}
            imageSrc={trip.attributes.uvodniFoto.data.attributes.url}
            imageAlt={trip.attributes.nazev}
            country={trip.attributes.stat}
            name={trip.attributes.nazev}
            dateAndPrice={trip.attributes.terminACena}
          />
        ))}
      </div>
    </Wrapper>
  )
}