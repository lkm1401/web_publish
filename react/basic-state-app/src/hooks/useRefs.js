// import { useRef, useMemo } from "react";

// const useRefs = (keys) => {
//   // keys 배열의 각 요소에 대해 useRef를 호출
//   const refs = keys.reduce((acc, key) => {
//     acc[key] = useRef(null); // 호출 순서를 보장
//     return acc;
//   }, {});

//   // useMemo로 객체를 메모화하여 불필요한 재생성을 방지
//   return useMemo(() => refs, [keys]);
// };

// export default useRefs;