import { getLuckyClover, getTop15 } from "@/lib/plays";
import { HomeClient } from "@/components/home/HomeClient";

export default async function HomePage() {
  const [luckyClover, top15] = await Promise.all([
    getLuckyClover(),
    getTop15(),
  ]);

  return <HomeClient luckyClover={luckyClover} top15={top15} />;
}
