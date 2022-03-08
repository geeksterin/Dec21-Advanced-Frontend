import React from "react";

export default function Assignment() {
  const url = "https://reqres.in/api/users?page=2";

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    //body of call back Fn
    fetch(url)
      .then((r) => r.json())
      .then((result) => {
        // console.log(result.data);
        setApiData(result.data);
      });
  }, []);
  // console.log(apiData);

  return (
    <div className="App">
      <header className="App-header">
        fetching data
        {apiData.map((item, index) => {
          return (
            <div key={item.id}>
              <img src={item.avatar} />
              <p>{item.first_name}</p>
              <p>{item.last_name}</p>
              <p>{item.email}</p>
              <hr />
            </div>
          );
        })}
      </header>
    </div>
  );
}
