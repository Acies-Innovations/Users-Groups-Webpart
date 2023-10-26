import * as React from "react";
import { ITestO1Props } from "./ITestO1Props";
import { FunctionComponent, useState, useEffect } from "react";

const Test01: FunctionComponent<ITestO1Props> = (props) => {
  const [userGroups, setUserGroups] = useState<string[]>([]);

  useEffect(() => {
    // Replace with your access token
    const accessToken = "eyJ0eXAiOiJKV1QiLCJub25jZSI6ImZpclBLeVBlSzk0SEUzM29EWW9FYWY0M256MWRrWUFoT1B3c3ZjckZGQlEiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83ZGI0OGMzOC04YmFhLTRmYTktODM2MC0yMTNkMDAzZjk4MGQvIiwiaWF0IjoxNjk4MzAyMzcyLCJuYmYiOjE2OTgzMDIzNzIsImV4cCI6MTY5ODM4OTA3MiwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhVQUFBQUw5eGFMWG1GYjMySGF5YkpsU1N4U1JpcVRHNmJPem9HcmhYNm5QUDlRVU1KVG8zaUpOMkgvMnB3WWhvUjZZZDJtSytLcFg3ek5tU0pMWG56VTQ0c3RDcW5YMGN5RSs4S1pqZDQ2YzJqVUUwPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwX2Rpc3BsYXluYW1lIjoiR3JhcGggRXhwbG9yZXIiLCJhcHBpZCI6ImRlOGJjOGI1LWQ5ZjktNDhiMS1hOGFkLWI3NDhkYTcyNTA2NCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiTWVub24iLCJnaXZlbl9uYW1lIjoiUm9oaXQiLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiIxMjIuMTcxLjE2LjkwIiwibmFtZSI6IlJvaGl0IE1lbm9uIiwib2lkIjoiYmVlMTE1NWMtNjNiNC00ZGE4LWE3YzUtODMxODgwOGE0MjUzIiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAyRjI1RDFGNzIiLCJyaCI6IjAuQVhFQU9JeTBmYXFMcVUtRFlDRTlBRC1ZRFFNQUFBQUFBQUFBd0FBQUFBQUFBQUJ4QUtjLiIsInNjcCI6IkFjcm9ueW0uUmVhZC5BbGwgQm9va21hcmsuUmVhZC5BbGwgQ2hhdC5SZWFkIEV4dGVybmFsSXRlbS5SZWFkLkFsbCBGaWxlcy5SZWFkLkFsbCBHcm91cC5SZWFkLkFsbCBHcm91cC5SZWFkV3JpdGUuQWxsIG9wZW5pZCBQZW9wbGUuUmVhZC5BbGwgUHJlc2VuY2UuUmVhZC5BbGwgcHJvZmlsZSBSZXBvcnRzLlJlYWQuQWxsIFNpdGVzLkZ1bGxDb250cm9sLkFsbCBTaXRlcy5SZWFkLkFsbCBUYXNrcy5SZWFkIFVzZXIuSW52aXRlLkFsbCBVc2VyLlJlYWQgVXNlci5SZWFkV3JpdGUuQWxsIGVtYWlsIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiRzNsNmZCcFotREFHNjBRUF94ZjhQZGFDbWUxSUpob0E2eHhNUWtGZ2lRUSIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJBUyIsInRpZCI6IjdkYjQ4YzM4LThiYWEtNGZhOS04MzYwLTIxM2QwMDNmOTgwZCIsInVuaXF1ZV9uYW1lIjoicm9oaXQubWVub25AYWNpZXNpbm5vdmF0aW9ucy5jb20iLCJ1cG4iOiJyb2hpdC5tZW5vbkBhY2llc2lubm92YXRpb25zLmNvbSIsInV0aSI6InZGMGxBV0F2UVUtRjBGaHlfU0liQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfY2MiOlsiQ1AxIl0sInhtc19zc20iOiIxIiwieG1zX3N0Ijp7InN1YiI6IjcxT0V1Rks4amphWXluN213Tms4dUg5TE4xX2l5V2dIWi1McVMycnVUNUEifSwieG1zX3RjZHQiOjE2MzMxODEzNzJ9.s22n0Lx6exIxL8-viI7TYG1Myvf5nXRp18DRHv9tcdh1j_LG5hjQ3GVOqJtrO5rbJ0egjAToM69Nf9D6jSTH8owBNGkHJDpyDg8zZL508PTPs8yWv93llVdaBtCQm5Xzub9DQelJ0UMIQMUFJMn2v1F-CvHG9O-0VXBIEpFoM4wTJr5NJJ2MeLVdVOe7RNY7e091BS5KWYD-_j6p7u_50VILCC-IKVnLyGJIPRTwNgUQLLxLdSazZp1WI16zomFO3E24js-xAzX_OaXzxm9OR9NsBsSElOP95ORpG4qKRv_cfj1VThxTmXKR0aXo_-8HABZ5Sr4yBiwA_3M0-RCuXg";

    // Replace with the URL you want to fetch data from
    const graphApiUrl = "https://graph.microsoft.com/v1.0/me/memberOf";

    fetch(graphApiUrl, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const groups = data.value.map((group) => group.displayName);
        setUserGroups(groups);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {userGroups.length > 0 ? (
        <div>
          <p>Groups the user belongs to:</p>
          <ul>
            {userGroups.map((group, index) => (
              <li key={index}>{group}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading user groups...</p>
      )}
    </div>
  );
};

export default Test01;
