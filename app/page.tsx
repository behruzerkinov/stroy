import TopMenu from "./layouts/TopMenu"
import ActionBar from "./layouts/ActionBar"

export default function Home() {
  return (
    <div className="max-w-[1620px] px-[5vw]">
      <nav>
        <TopMenu />
        <ActionBar />
      </nav>
    </div>
  );
}
