import {
  Header,
  SubscriptionNewsletter,
  Vector,
  InstructionSection,
  OurPlantsSection,
  FilterContainer,
  RegistrationConfirmationContainer,
} from "../components";

export default function Home() {
  return (
    <div className="bg-lines bg-white-2 font-montSerrat px-8 relative">
      <>
        <Header />
        <SubscriptionNewsletter />
        <Vector />
      </>

      <InstructionSection />
      <OurPlantsSection />

      <RegistrationConfirmationContainer />

      <FilterContainer />
    </div>
  );
}
