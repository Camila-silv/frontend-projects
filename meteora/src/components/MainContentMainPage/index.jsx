import BenefitsSection from "./BenefitsSection";
import BestSellingProductsSection from "./BestSellingProductsSection";
import CategoriesSection from "./CategoriesSection";
import RegistrationSection from "./RegistrationSection";

export default function MainContentMainPage() {
  return (
    <>
      <CategoriesSection />
      <BestSellingProductsSection />
      <BenefitsSection />
      <RegistrationSection />
    </>
  );
}
