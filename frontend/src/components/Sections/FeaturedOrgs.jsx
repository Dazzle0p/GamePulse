import DestinationCarousel from "../Ui/DestinationCarousel";
const FeaturedOrganization = () => {
  return (
    <section className="py-5 px-4">
      <div className="max-w-7xl mx-auto space-y-8 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Featured Organizations</h2>
          <p className="text-gpgray">Indias Leading Organizations</p>
        </div>
        <section className="relative">
          <DestinationCarousel />
        </section>
      </div>
    </section>
  );
};

export default FeaturedOrganization;
