import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main>
      <form>
        <label>
          <span>Name</span>
          <input type="text" name="name" />
        </label>
        <button type="submit">Submit Form</button>
      </form>
    </main>
  );
};

export default Home;
