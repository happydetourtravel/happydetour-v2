import CruisePage from "../../components/CruisePage";

export default function BahamasKeyWest() {
  return (
    <CruisePage
      title="Key West & Bimini Beach Club"
      image="/images/bahamas-key-west.jpg"
      date="January 28, 2027"
      nights={4}
      ship="Scarlet Lady"
      port="Miami, FL"
      price="$734"
      originalPrice="$1,005"
      bookingLink="https://www.virginvoyages.com/book/voyage-planner/find-a-voyage?cabins=1&currencyCode=USD&agentId=278796&agencyId=589&bookingChannel=FMLINK&dateFrom=2027-01-01&dateTo=2027-01-31&ships=SC&durations=1-4"
      cabins={[
        { type: "Sea View", price: "from $734/sailor", note: "Porthole window, rainshower, mood lighting" },
        { type: "Sea Terrace", price: "from $734/sailor", note: "Private balcony with hammock" },
        { type: "RockStar Quarters", price: "from $2,100/sailor", note: "Rooftop access, in-room bar, priority booking" },
        { type: "Mega RockStar Quarters", price: "from $3,720/sailor", note: "Daily bar tab, spa access, largest spaces" },
      ]}
      days={[
        { day: 1, port: "Miami, Florida", description: "Departs 5:00 PM — all aboard 1 hour before departure" },
        { day: 2, port: "Key West, Florida", description: "8:00 AM – 5:00 PM" },
        { day: 3, port: "At Sea", description: "Sailing day" },
        { day: 4, port: "The Beach Club at Bimini, Bahamas", description: "9:00 AM – 6:00 PM" },
        { day: 5, port: "Miami, Florida", description: "Arrives 6:30 AM — disembarkation" },
      ]}
    />
  );
}
