import axios from "axios";

import React from "react";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";

const Test = () => {
  const userCheck = "user" ? true : false;
  const queryClient = new QueryClient();
  const { data, refetch: getBookRemind } = useQuery(
    ["query"],
    () => axios.post("https://funphonics.ai:8443/api/all/ap003", {}),
    {
      staleTime: 60 * 60 * 1000, // 최신화가 필요해지는 기간(서버에 불필요한 같은 요청을 한시간동안 하지 않는다)
      cacheTime: 60 * 60 * 1000, // 데이터가 캐싱되어 있는 기간
      onError: (err) => {
        // reject :: RTK
      },
      onSuccess: (res) => {
        // fullfilled :: RTK
      },
      onSettled: () => {
        // finally :: 무조건 실행
      },
      enabled: userCheck,
    }
  );
  const { mutate: getBook } = useMutation(["query"], () => axios.post("https://funphonics.ai:8443/api/all/ap003", {}), {
    onMutate: () => {
      // 서버에 요청할때 즉각적으로 유저에게 정보를 제공
    },
    onSuccess: () => {
      // 성공했을때
    },
    onError: () => {
      // 나는 성공을 전제로 유저에게 정보를 제공했는데 실패했다면 성공한 것들만 유저에게 제공하도록 변경
      // onMutate를 사용하면 쿼리 무효화 :: 내가 받았다고 생각하고 처리한 것들을 무효화 시키는 것
      queryClient.invalidateQueries(["query"]);
    },
  }); // 돌연변이, 변형
  console.log(data);
  return <div>hi</div>;
};

export default Test;
