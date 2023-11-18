import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../counter";

function Home() {
  document.title = 'GoFitLife | Home';

  const count = useSelector(state => state.counter.value);
  const dispacth = useDispatch();

  return (
    <main className="mt-20 mx-[5.5%]">
      <h1>Home Page</h1>

      <span>{ count }</span>
      <button onClick={() => dispacth(increment())}>Increment</button>
      <button onClick={() => dispacth(decrement())}>Decrement</button>
    </main>
  );
}

export default Home;