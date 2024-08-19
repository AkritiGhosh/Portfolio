import AboutMe from "./sections/AboutMe";
import Landing from "./sections/Landing";

export const smoothScroll = (e, sectionId) => {
  let section = document.getElementById(sectionId);
  e.preventDefault(); // Stop Page Reloading
  section && section.scrollIntoView({ behavior: "smooth", block: "start" });
};

function App() {
  return (
    <main className="w-screen h-screen overflow-hidden bg-navy p-1 !scroll-smooth">
      <div className="w-full h-full snap-y snap-mandatory overflow-auto">
        <Landing />
        <AboutMe />
      </div>
    </main>
  );
}

export default App;
