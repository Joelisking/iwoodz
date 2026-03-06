import { ShowroomHero } from "@/components/showroom/ShowroomHero";
import { ShowroomInfo } from "@/components/showroom/ShowroomInfo";
import { ShowroomGallery } from "@/components/showroom/ShowroomGallery";
import { ShowroomMap } from "@/components/showroom/ShowroomMap";
import { ShowroomVisitCTA } from "@/components/showroom/ShowroomVisitCTA";

export const metadata = {
  title: "Showroom — iWoodz Creation",
  description:
    "Visit the iWoodz Creation showroom in Accra, Ghana to experience our bespoke woodwork in person.",
};

export default function ShowroomPage() {
  return (
    <main>
      <ShowroomHero />
      <ShowroomInfo />
      <ShowroomGallery />
      <ShowroomMap />
      <ShowroomVisitCTA />
    </main>
  );
}
