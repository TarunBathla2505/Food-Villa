import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>koi bkl hi hoga jo url bhi galat dega 🎃</h1>
      <h2>{error.data}</h2>
    </div>
  );
}

export default Error;
