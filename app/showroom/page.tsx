import { ShowroomHero } from "@/components/showroom/ShowroomHero";
import { ShowroomMap } from "@/components/showroom/ShowroomMap";

export const metadata = {
  title: "Showroom — iWoodz Creation",
  description: "Visit the iWoodz Creation showroom to experience our bespoke woodwork in person.",
};

export default function ShowroomPage() {
  return (
    <main>
      <ShowroomHero />
      <ShowroomMap />
    </main>
  );
}
