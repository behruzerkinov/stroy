import ActionBar from "./layouts/ActionBar"
import Advantages from "./layouts/Advantages";
import ImageSlider from "./layouts/ImageSlider"
import StoryCards from "./layouts/StoryCards";
import TopMenu from "./layouts/TopMenu"

export default function Home() {
  return (
    <div className="max-w-[1620px] px-[2vw]">
      <nav>
        <TopMenu />
        <ActionBar />
      </nav>
      <ImageSlider />
      <Advantages />
      <StoryCards />
    </div>
  );
}
