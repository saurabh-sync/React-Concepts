import "./App.css";
import Card from "./components/Card";

function App() {
  // let myObj = {
  //   username: "hitesh",
  //   age: 21,
  // };
  // let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      {/* <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://render.fineartamerica.com/images/rendered/medium/poster/6.5/8/break/images/artworkimages/medium/1/la-bici-guido-borelli.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I&apos;ve seen scale on
              large teams. It&apos;s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure> */}
      <Card username="chaiaurcode" />
      <Card username="saurabh" />
    </>
  );
}

export default App;
