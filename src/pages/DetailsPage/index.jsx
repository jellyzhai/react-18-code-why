import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";

function DetailsPage() {
    const navigate = useNavigate()
    const pathParams = useParams();
  const location = useLocation();
//   const searchParams = Object.fromEntries(new URLSearchParams(location.search));
  const [params, setSearchParams] = useSearchParams();
  const searchParams = Object.fromEntries(params);


  useEffect(() => {
    console.log("pathParams: ", pathParams);
    console.log("location: ", location);
    console.log("searchParams: ", searchParams);
  }, []);

  return (
    <div>
      <h2>DetailsPage</h2>
      <button onClick={e => navigate(-1)}>返回</button>
      <pre>
      pathParams: <code>{JSON.stringify(pathParams)}</code> <br />
        location: <code>{JSON.stringify(location)}</code> <br />
        searchParams: <code>{JSON.stringify(searchParams)}</code>
      </pre>
    </div>
  );
}

export default DetailsPage;
