import React from "react";

function Assignment() {
  const storeData = useSelector();

  useEffect(() => {
    fetch()
      .then()
      .then((result) => setState(result));
  }, []);

  useEffect(() => {
    // const data = fetch.then().then()
    // setState(data)
    const someAsync = async () => {};
    someAsync();
  }, []);

  return <div>{storeData.map(JSX)}</div>;
  //   return <div>{state.map(JSX)}</div>;
}

export default Assignment;
