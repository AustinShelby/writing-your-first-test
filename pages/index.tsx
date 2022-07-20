import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main>
      <h1 data-useless="omega" className="title" id="hello-world">
        Hello World
      </h1>
      <h2 className="sub-title">Fruits</h2>
      <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li className="red">Mango</li>
        <li className="blue">Watermelon</li>
      </ul>
      <h2>Form</h2>
      <form>
        <label>
          <span>Name</span>
          <input type="text" name="name" value={"Omega"} />
        </label>
        <button type="submit">Submit Form</button>
      </form>
    </main>
  );
};

export default Home;
