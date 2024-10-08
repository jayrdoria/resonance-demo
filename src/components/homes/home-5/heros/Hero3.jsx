import { useEffect } from "react";

export default function Hero3({ dark }) {
  useEffect(() => {
    const addPaddingLeft = () => {
      document.getElementById("paddingLeft").style.paddingLeft = `${
        (window.innerWidth -
          document.getElementById("paddingLeftContainer").offsetWidth) /
        2
      }px`;
    };

    addPaddingLeft();

    window.addEventListener("resize", addPaddingLeft);

    return () => {
      window.removeEventListener("resize", addPaddingLeft);
    };
  }, []);

  return (
    <>
      <div id="paddingLeftContainer" className="container" />
      <div className="row g-0">
        <div className="col-lg-6">
          <div
            id="paddingLeft"
            className={`split-column-left pt-100 pb-100 pt-sm-70 pb-sm-70 ${
              dark ? "bg-dark-2 light-content" : ""
            } min-height-100vh rounded-0 position-relative d-flex align-items-center`}
          >
            <div className="w-100 text-center text-lg-start pt-80">
              <div className="mb-30 mb-sm-20 wow fadeIn">
                <div className="hs-icon">
                  {/* Icon Code */}
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    width={64}
                    height={64}
                    viewBox="0 0 56 64"
                  >
                    <path d="M45.375 35.5c-3.625 0-8.125-0.875-11.625-1.75-0.125 0.375-0.25 0.75-0.5 1.125 3.125 1.875 7 4.5 9.5 7 5 5 6.625 8.5 5.125 10-0.375 0.375-0.875 0.5-1.5 0.5-1.875 0-4.75-1.875-8.5-5.625-2.5-2.5-5.125-6.375-7-9.5-0.375 0.25-0.875 0.375-1.25 0.5 0.875 3.5 1.875 8 1.875 11.625 0 7-1.5 10.625-3.5 10.625s-3.5-3.625-3.5-10.625c0-3.625 1-8.125 1.875-11.625-0.375-0.125-0.875-0.25-1.25-0.5-1.875 3.125-4.5 7-7 9.5-3.75 3.75-6.625 5.625-8.5 5.625-0.625 0-1.125-0.125-1.5-0.5-1.5-1.5 0.125-5 5.125-10 2.5-2.5 6.375-5.125 9.5-7-0.25-0.375-0.375-0.75-0.5-1.125-3.5 0.875-8 1.75-11.625 1.75-7 0-10.625-1.5-10.625-3.5s3.625-3.5 10.625-3.5c3.625 0 8.125 1 11.625 1.875 0.125-0.375 0.25-0.875 0.5-1.25-3.125-1.875-7-4.375-9.5-6.875-5-5-6.625-8.5-5.125-10 0.375-0.375 0.875-0.5 1.5-0.5 1.875 0 4.75 1.75 8.5 5.5 2.5 2.5 5.125 6.375 7 9.5 0.375-0.25 0.875-0.375 1.25-0.5-0.875-3.5-1.875-8-1.875-11.625 0-7 1.5-10.625 3.5-10.625s3.5 3.625 3.5 10.625c0 3.625-1 8.125-1.875 11.625 0.375 0.125 0.875 0.25 1.25 0.5 1.875-3.125 4.5-7 7-9.5 3.75-3.75 6.625-5.5 8.5-5.5 0.625 0 1.125 0.125 1.5 0.5 1.5 1.5-0.125 5-5.125 10-2.5 2.5-6.375 5-9.5 6.875 0.25 0.375 0.375 0.875 0.5 1.25 3.5-0.875 8-1.875 11.625-1.875 7 0 10.625 1.5 10.625 3.5s-3.625 3.5-10.625 3.5zM36 31.875v0.375c3.75 0.875 7 1.25 9.375 1.25 2.625 0 4.875-0.25 6.5-0.625 1.25-0.375 1.75-0.75 2-0.875-0.25-0.125-0.75-0.5-2-0.875-1.625-0.375-3.875-0.625-6.5-0.625-2.375 0-5.625 0.5-9.375 1.375zM39.25 18.625c-1.75 1.75-3.75 4.375-5.75 7.625l0.25 0.25c3.25-2 5.875-4 7.625-5.75 1.875-1.875 3.25-3.5 4.125-5 0.625-1.125 0.875-1.75 0.875-2-0.5 0-2.75 0.5-7.125 4.875zM22.25 26.5l0.25-0.25c-2-3.25-4-5.875-5.75-7.625-4.375-4.375-6.625-4.875-7.125-4.875 0 0.25 0.25 0.875 0.875 2 0.875 1.5 2.25 3.125 4.125 5 1.75 1.75 4.375 3.75 7.625 5.75zM10.625 33.5c2.375 0 5.625-0.375 9.375-1.25v-0.375c-3.75-0.875-7-1.375-9.375-1.375-2.625 0-4.875 0.25-6.5 0.625-1.25 0.375-1.75 0.75-2 0.875 0.25 0.125 0.625 0.5 1.875 0.875 1.625 0.375 4 0.625 6.625 0.625zM16.75 45.375c1.75-1.75 3.75-4.375 5.75-7.625l-0.25-0.25c-3.25 2-5.875 4-7.625 5.75-1.875 1.875-3.25 3.625-4.125 5.125-0.625 1.125-0.875 1.75-0.875 2 0.5 0 2.75-0.625 7.125-5zM33.75 37.5l-0.25 0.25c2 3.25 4 5.875 5.75 7.625 4.375 4.375 6.625 5 7.125 5 0-0.25-0.25-0.875-0.875-2-0.875-1.5-2.25-3.25-4.125-5.125-1.75-1.75-4.375-3.75-7.625-5.75zM27.125 8.125c-0.375 1.625-0.625 3.875-0.625 6.5 0 2.375 0.5 5.625 1.375 9.375h0.25c0.875-3.75 1.375-7 1.375-9.375 0-2.625-0.25-4.875-0.625-6.5-0.375-1.25-0.75-1.75-0.875-2-0.125 0.25-0.5 0.75-0.875 2zM28.875 56c0.375-1.625 0.625-4 0.625-6.625 0-2.375-0.5-5.625-1.375-9.375h-0.25c-0.875 3.75-1.375 7-1.375 9.375 0 2.625 0.25 5 0.625 6.625 0.375 1.25 0.75 1.625 0.875 1.875 0.125-0.25 0.5-0.625 0.875-1.875zM28 36c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4zM39.125 50.75c1.25 4.25 0.875 6.625-0.625 7.25-0.25 0.125-0.375 0.125-0.625 0.125-1.375 0-3.125-1.625-4.625-4.375 0.625-4.375-0.25-9.5-0.25-9.5s3 4.25 6.125 6.5zM37.75 56.125c0.125-0.5 0.25-1.75-0.375-4.25-0.625-0.5-1.25-1.125-1.875-1.75 0 1.125 0 2.125-0.125 3.125 1.25 2 2 2.75 2.375 2.875zM22.75 10.375c-0.75 4.375 0.125 9.375 0.125 9.375s-3.375-4.375-6-6.375c-1.25-4.375-0.875-6.75 0.625-7.375 0.25-0.125 0.375-0.125 0.625-0.125 1.375 0 3 1.5 4.625 4.5zM20.5 13.875c0-1.125 0-2.125 0.125-3.125-1.25-2-2-2.625-2.375-2.75-0.125 0.5-0.25 1.75 0.375 4.25 0.625 0.5 1.25 1 1.875 1.625zM6.25 37.375c4.375 0.5 9.5-0.25 9.5-0.25s-4.25 3-6.375 6c-1.5 0.5-3.25 0.75-4.375 0.75-1.625 0-2.625-0.5-3-1.375-0.625-1.375 0.875-3.125 4.25-5.125zM8.25 41.375c0.5-0.625 1-1.25 1.625-1.875-1.125 0-2.125 0-3.125-0.125-2 1.25-2.625 2-2.75 2.375 0.125 0 0.5 0.125 1 0.125 0.875 0 2-0.125 3.25-0.5zM54 21.5c0.625 1.375-0.875 3.25-4.25 5.25-4.375-0.625-9.5 0.25-9.5 0.25s4.125-3.125 6.375-6.125c1.625-0.5 3.25-0.625 4.375-0.625 1.625 0 2.625 0.375 3 1.25zM49.25 24.75c2-1.25 2.625-2 2.75-2.375-0.125 0-0.5-0.125-1-0.125-0.875 0-2 0.125-3.25 0.5-0.5 0.625-1 1.125-1.625 1.75 1.125 0 2.125 0.125 3.125 0.25zM16.375 51.125c3.875-3 6.625-6.875 6.625-6.875s-0.875 4.875-0.375 8.875c-1.875 3.25-3.5 4.875-4.875 4.875-0.25 0-0.5 0-0.75-0.125-1.375-0.625-1.625-3-0.625-6.75zM17.875 55.875c0.5-0.25 1.5-1 2.75-3.25 0-0.75-0.125-1.625-0.125-2.5-0.75 0.75-1.625 1.5-2.375 2.125-0.5 2.25-0.375 3.25-0.25 3.625zM39 6.25c1.375 0.625 1.625 2.75 0.625 6.75-3.625 2.625-6.625 6.875-6.625 6.875s1-6 0.375-8.875c1.625-3.125 3.5-4.875 4.875-4.875 0.25 0 0.5 0 0.75 0.125zM37.875 11.875c0.625-2.25 0.375-3.375 0.25-3.75-0.5 0.25-1.5 1-2.75 3.25 0 0.75 0.125 1.75 0.125 2.625 0.75-0.75 1.625-1.5 2.375-2.125zM8.875 20.375c2.25 3 6.875 6.625 6.875 6.625s-5-0.875-8.75-0.375c-3.5-1.875-5.375-4-4.75-5.5 0.375-0.875 1.25-1.375 2.75-1.375 1 0 2.625 0.125 3.875 0.625zM4.125 21.875c0.25 0.5 1 1.5 3.25 2.75 0.75 0 1.625-0.125 2.5-0.125-0.75-0.75-1.5-1.5-2.125-2.25-1-0.25-2-0.5-2.75-0.5-0.5 0-0.75 0.125-0.875 0.125zM49 37.375c3.75 2.125 5.375 4.125 4.75 5.625-0.375 0.875-1.25 1.25-2.75 1.25-1 0-2.375-0.125-3.875-0.625-2.5-3.375-6.875-6.5-6.875-6.5s5.625 1 8.75 0.25zM51 42.25c0.5 0 0.75-0.125 0.875-0.125-0.25-0.5-1-1.5-3.25-2.75-0.75 0-1.625 0.125-2.5 0.125 0.75 0.75 1.5 1.625 2.125 2.375 1 0.25 2 0.375 2.75 0.375z" />
                  </svg>
                  {/* End Icon Code */}
                </div>
                <div className="hs-icon opacity-05">
                  {/* Icon Code */}
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    width={64}
                    height={64}
                    viewBox="0 0 56 64"
                  >
                    <path d="M45.375 35.5c-3.625 0-8.125-0.875-11.625-1.75-0.125 0.375-0.25 0.75-0.5 1.125 3.125 1.875 7 4.5 9.5 7 5 5 6.625 8.5 5.125 10-0.375 0.375-0.875 0.5-1.5 0.5-1.875 0-4.75-1.875-8.5-5.625-2.5-2.5-5.125-6.375-7-9.5-0.375 0.25-0.875 0.375-1.25 0.5 0.875 3.5 1.875 8 1.875 11.625 0 7-1.5 10.625-3.5 10.625s-3.5-3.625-3.5-10.625c0-3.625 1-8.125 1.875-11.625-0.375-0.125-0.875-0.25-1.25-0.5-1.875 3.125-4.5 7-7 9.5-3.75 3.75-6.625 5.625-8.5 5.625-0.625 0-1.125-0.125-1.5-0.5-1.5-1.5 0.125-5 5.125-10 2.5-2.5 6.375-5.125 9.5-7-0.25-0.375-0.375-0.75-0.5-1.125-3.5 0.875-8 1.75-11.625 1.75-7 0-10.625-1.5-10.625-3.5s3.625-3.5 10.625-3.5c3.625 0 8.125 1 11.625 1.875 0.125-0.375 0.25-0.875 0.5-1.25-3.125-1.875-7-4.375-9.5-6.875-5-5-6.625-8.5-5.125-10 0.375-0.375 0.875-0.5 1.5-0.5 1.875 0 4.75 1.75 8.5 5.5 2.5 2.5 5.125 6.375 7 9.5 0.375-0.25 0.875-0.375 1.25-0.5-0.875-3.5-1.875-8-1.875-11.625 0-7 1.5-10.625 3.5-10.625s3.5 3.625 3.5 10.625c0 3.625-1 8.125-1.875 11.625 0.375 0.125 0.875 0.25 1.25 0.5 1.875-3.125 4.5-7 7-9.5 3.75-3.75 6.625-5.5 8.5-5.5 0.625 0 1.125 0.125 1.5 0.5 1.5 1.5-0.125 5-5.125 10-2.5 2.5-6.375 5-9.5 6.875 0.25 0.375 0.375 0.875 0.5 1.25 3.5-0.875 8-1.875 11.625-1.875 7 0 10.625 1.5 10.625 3.5s-3.625 3.5-10.625 3.5zM36 31.875v0.375c3.75 0.875 7 1.25 9.375 1.25 2.625 0 4.875-0.25 6.5-0.625 1.25-0.375 1.75-0.75 2-0.875-0.25-0.125-0.75-0.5-2-0.875-1.625-0.375-3.875-0.625-6.5-0.625-2.375 0-5.625 0.5-9.375 1.375zM39.25 18.625c-1.75 1.75-3.75 4.375-5.75 7.625l0.25 0.25c3.25-2 5.875-4 7.625-5.75 1.875-1.875 3.25-3.5 4.125-5 0.625-1.125 0.875-1.75 0.875-2-0.5 0-2.75 0.5-7.125 4.875zM22.25 26.5l0.25-0.25c-2-3.25-4-5.875-5.75-7.625-4.375-4.375-6.625-4.875-7.125-4.875 0 0.25 0.25 0.875 0.875 2 0.875 1.5 2.25 3.125 4.125 5 1.75 1.75 4.375 3.75 7.625 5.75zM10.625 33.5c2.375 0 5.625-0.375 9.375-1.25v-0.375c-3.75-0.875-7-1.375-9.375-1.375-2.625 0-4.875 0.25-6.5 0.625-1.25 0.375-1.75 0.75-2 0.875 0.25 0.125 0.625 0.5 1.875 0.875 1.625 0.375 4 0.625 6.625 0.625zM16.75 45.375c1.75-1.75 3.75-4.375 5.75-7.625l-0.25-0.25c-3.25 2-5.875 4-7.625 5.75-1.875 1.875-3.25 3.625-4.125 5.125-0.625 1.125-0.875 1.75-0.875 2 0.5 0 2.75-0.625 7.125-5zM33.75 37.5l-0.25 0.25c2 3.25 4 5.875 5.75 7.625 4.375 4.375 6.625 5 7.125 5 0-0.25-0.25-0.875-0.875-2-0.875-1.5-2.25-3.25-4.125-5.125-1.75-1.75-4.375-3.75-7.625-5.75zM27.125 8.125c-0.375 1.625-0.625 3.875-0.625 6.5 0 2.375 0.5 5.625 1.375 9.375h0.25c0.875-3.75 1.375-7 1.375-9.375 0-2.625-0.25-4.875-0.625-6.5-0.375-1.25-0.75-1.75-0.875-2-0.125 0.25-0.5 0.75-0.875 2zM28.875 56c0.375-1.625 0.625-4 0.625-6.625 0-2.375-0.5-5.625-1.375-9.375h-0.25c-0.875 3.75-1.375 7-1.375 9.375 0 2.625 0.25 5 0.625 6.625 0.375 1.25 0.75 1.625 0.875 1.875 0.125-0.25 0.5-0.625 0.875-1.875zM28 36c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4zM39.125 50.75c1.25 4.25 0.875 6.625-0.625 7.25-0.25 0.125-0.375 0.125-0.625 0.125-1.375 0-3.125-1.625-4.625-4.375 0.625-4.375-0.25-9.5-0.25-9.5s3 4.25 6.125 6.5zM37.75 56.125c0.125-0.5 0.25-1.75-0.375-4.25-0.625-0.5-1.25-1.125-1.875-1.75 0 1.125 0 2.125-0.125 3.125 1.25 2 2 2.75 2.375 2.875zM22.75 10.375c-0.75 4.375 0.125 9.375 0.125 9.375s-3.375-4.375-6-6.375c-1.25-4.375-0.875-6.75 0.625-7.375 0.25-0.125 0.375-0.125 0.625-0.125 1.375 0 3 1.5 4.625 4.5zM20.5 13.875c0-1.125 0-2.125 0.125-3.125-1.25-2-2-2.625-2.375-2.75-0.125 0.5-0.25 1.75 0.375 4.25 0.625 0.5 1.25 1 1.875 1.625zM6.25 37.375c4.375 0.5 9.5-0.25 9.5-0.25s-4.25 3-6.375 6c-1.5 0.5-3.25 0.75-4.375 0.75-1.625 0-2.625-0.5-3-1.375-0.625-1.375 0.875-3.125 4.25-5.125zM8.25 41.375c0.5-0.625 1-1.25 1.625-1.875-1.125 0-2.125 0-3.125-0.125-2 1.25-2.625 2-2.75 2.375 0.125 0 0.5 0.125 1 0.125 0.875 0 2-0.125 3.25-0.5zM54 21.5c0.625 1.375-0.875 3.25-4.25 5.25-4.375-0.625-9.5 0.25-9.5 0.25s4.125-3.125 6.375-6.125c1.625-0.5 3.25-0.625 4.375-0.625 1.625 0 2.625 0.375 3 1.25zM49.25 24.75c2-1.25 2.625-2 2.75-2.375-0.125 0-0.5-0.125-1-0.125-0.875 0-2 0.125-3.25 0.5-0.5 0.625-1 1.125-1.625 1.75 1.125 0 2.125 0.125 3.125 0.25zM16.375 51.125c3.875-3 6.625-6.875 6.625-6.875s-0.875 4.875-0.375 8.875c-1.875 3.25-3.5 4.875-4.875 4.875-0.25 0-0.5 0-0.75-0.125-1.375-0.625-1.625-3-0.625-6.75zM17.875 55.875c0.5-0.25 1.5-1 2.75-3.25 0-0.75-0.125-1.625-0.125-2.5-0.75 0.75-1.625 1.5-2.375 2.125-0.5 2.25-0.375 3.25-0.25 3.625zM39 6.25c1.375 0.625 1.625 2.75 0.625 6.75-3.625 2.625-6.625 6.875-6.625 6.875s1-6 0.375-8.875c1.625-3.125 3.5-4.875 4.875-4.875 0.25 0 0.5 0 0.75 0.125zM37.875 11.875c0.625-2.25 0.375-3.375 0.25-3.75-0.5 0.25-1.5 1-2.75 3.25 0 0.75 0.125 1.75 0.125 2.625 0.75-0.75 1.625-1.5 2.375-2.125zM8.875 20.375c2.25 3 6.875 6.625 6.875 6.625s-5-0.875-8.75-0.375c-3.5-1.875-5.375-4-4.75-5.5 0.375-0.875 1.25-1.375 2.75-1.375 1 0 2.625 0.125 3.875 0.625zM4.125 21.875c0.25 0.5 1 1.5 3.25 2.75 0.75 0 1.625-0.125 2.5-0.125-0.75-0.75-1.5-1.5-2.125-2.25-1-0.25-2-0.5-2.75-0.5-0.5 0-0.75 0.125-0.875 0.125zM49 37.375c3.75 2.125 5.375 4.125 4.75 5.625-0.375 0.875-1.25 1.25-2.75 1.25-1 0-2.375-0.125-3.875-0.625-2.5-3.375-6.875-6.5-6.875-6.5s5.625 1 8.75 0.25zM51 42.25c0.5 0 0.75-0.125 0.875-0.125-0.25-0.5-1-1.5-3.25-2.75-0.75 0-1.625 0.125-2.5 0.125 0.75 0.75 1.5 1.625 2.125 2.375 1 0.25 2 0.375 2.75 0.375z" />
                  </svg>
                  {/* End Icon Code */}
                </div>
                <div className="hs-icon opacity-025">
                  {/* Icon Code */}
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    width={64}
                    height={64}
                    viewBox="0 0 56 64"
                  >
                    <path d="M45.375 35.5c-3.625 0-8.125-0.875-11.625-1.75-0.125 0.375-0.25 0.75-0.5 1.125 3.125 1.875 7 4.5 9.5 7 5 5 6.625 8.5 5.125 10-0.375 0.375-0.875 0.5-1.5 0.5-1.875 0-4.75-1.875-8.5-5.625-2.5-2.5-5.125-6.375-7-9.5-0.375 0.25-0.875 0.375-1.25 0.5 0.875 3.5 1.875 8 1.875 11.625 0 7-1.5 10.625-3.5 10.625s-3.5-3.625-3.5-10.625c0-3.625 1-8.125 1.875-11.625-0.375-0.125-0.875-0.25-1.25-0.5-1.875 3.125-4.5 7-7 9.5-3.75 3.75-6.625 5.625-8.5 5.625-0.625 0-1.125-0.125-1.5-0.5-1.5-1.5 0.125-5 5.125-10 2.5-2.5 6.375-5.125 9.5-7-0.25-0.375-0.375-0.75-0.5-1.125-3.5 0.875-8 1.75-11.625 1.75-7 0-10.625-1.5-10.625-3.5s3.625-3.5 10.625-3.5c3.625 0 8.125 1 11.625 1.875 0.125-0.375 0.25-0.875 0.5-1.25-3.125-1.875-7-4.375-9.5-6.875-5-5-6.625-8.5-5.125-10 0.375-0.375 0.875-0.5 1.5-0.5 1.875 0 4.75 1.75 8.5 5.5 2.5 2.5 5.125 6.375 7 9.5 0.375-0.25 0.875-0.375 1.25-0.5-0.875-3.5-1.875-8-1.875-11.625 0-7 1.5-10.625 3.5-10.625s3.5 3.625 3.5 10.625c0 3.625-1 8.125-1.875 11.625 0.375 0.125 0.875 0.25 1.25 0.5 1.875-3.125 4.5-7 7-9.5 3.75-3.75 6.625-5.5 8.5-5.5 0.625 0 1.125 0.125 1.5 0.5 1.5 1.5-0.125 5-5.125 10-2.5 2.5-6.375 5-9.5 6.875 0.25 0.375 0.375 0.875 0.5 1.25 3.5-0.875 8-1.875 11.625-1.875 7 0 10.625 1.5 10.625 3.5s-3.625 3.5-10.625 3.5zM36 31.875v0.375c3.75 0.875 7 1.25 9.375 1.25 2.625 0 4.875-0.25 6.5-0.625 1.25-0.375 1.75-0.75 2-0.875-0.25-0.125-0.75-0.5-2-0.875-1.625-0.375-3.875-0.625-6.5-0.625-2.375 0-5.625 0.5-9.375 1.375zM39.25 18.625c-1.75 1.75-3.75 4.375-5.75 7.625l0.25 0.25c3.25-2 5.875-4 7.625-5.75 1.875-1.875 3.25-3.5 4.125-5 0.625-1.125 0.875-1.75 0.875-2-0.5 0-2.75 0.5-7.125 4.875zM22.25 26.5l0.25-0.25c-2-3.25-4-5.875-5.75-7.625-4.375-4.375-6.625-4.875-7.125-4.875 0 0.25 0.25 0.875 0.875 2 0.875 1.5 2.25 3.125 4.125 5 1.75 1.75 4.375 3.75 7.625 5.75zM10.625 33.5c2.375 0 5.625-0.375 9.375-1.25v-0.375c-3.75-0.875-7-1.375-9.375-1.375-2.625 0-4.875 0.25-6.5 0.625-1.25 0.375-1.75 0.75-2 0.875 0.25 0.125 0.625 0.5 1.875 0.875 1.625 0.375 4 0.625 6.625 0.625zM16.75 45.375c1.75-1.75 3.75-4.375 5.75-7.625l-0.25-0.25c-3.25 2-5.875 4-7.625 5.75-1.875 1.875-3.25 3.625-4.125 5.125-0.625 1.125-0.875 1.75-0.875 2 0.5 0 2.75-0.625 7.125-5zM33.75 37.5l-0.25 0.25c2 3.25 4 5.875 5.75 7.625 4.375 4.375 6.625 5 7.125 5 0-0.25-0.25-0.875-0.875-2-0.875-1.5-2.25-3.25-4.125-5.125-1.75-1.75-4.375-3.75-7.625-5.75zM27.125 8.125c-0.375 1.625-0.625 3.875-0.625 6.5 0 2.375 0.5 5.625 1.375 9.375h0.25c0.875-3.75 1.375-7 1.375-9.375 0-2.625-0.25-4.875-0.625-6.5-0.375-1.25-0.75-1.75-0.875-2-0.125 0.25-0.5 0.75-0.875 2zM28.875 56c0.375-1.625 0.625-4 0.625-6.625 0-2.375-0.5-5.625-1.375-9.375h-0.25c-0.875 3.75-1.375 7-1.375 9.375 0 2.625 0.25 5 0.625 6.625 0.375 1.25 0.75 1.625 0.875 1.875 0.125-0.25 0.5-0.625 0.875-1.875zM28 36c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4zM39.125 50.75c1.25 4.25 0.875 6.625-0.625 7.25-0.25 0.125-0.375 0.125-0.625 0.125-1.375 0-3.125-1.625-4.625-4.375 0.625-4.375-0.25-9.5-0.25-9.5s3 4.25 6.125 6.5zM37.75 56.125c0.125-0.5 0.25-1.75-0.375-4.25-0.625-0.5-1.25-1.125-1.875-1.75 0 1.125 0 2.125-0.125 3.125 1.25 2 2 2.75 2.375 2.875zM22.75 10.375c-0.75 4.375 0.125 9.375 0.125 9.375s-3.375-4.375-6-6.375c-1.25-4.375-0.875-6.75 0.625-7.375 0.25-0.125 0.375-0.125 0.625-0.125 1.375 0 3 1.5 4.625 4.5zM20.5 13.875c0-1.125 0-2.125 0.125-3.125-1.25-2-2-2.625-2.375-2.75-0.125 0.5-0.25 1.75 0.375 4.25 0.625 0.5 1.25 1 1.875 1.625zM6.25 37.375c4.375 0.5 9.5-0.25 9.5-0.25s-4.25 3-6.375 6c-1.5 0.5-3.25 0.75-4.375 0.75-1.625 0-2.625-0.5-3-1.375-0.625-1.375 0.875-3.125 4.25-5.125zM8.25 41.375c0.5-0.625 1-1.25 1.625-1.875-1.125 0-2.125 0-3.125-0.125-2 1.25-2.625 2-2.75 2.375 0.125 0 0.5 0.125 1 0.125 0.875 0 2-0.125 3.25-0.5zM54 21.5c0.625 1.375-0.875 3.25-4.25 5.25-4.375-0.625-9.5 0.25-9.5 0.25s4.125-3.125 6.375-6.125c1.625-0.5 3.25-0.625 4.375-0.625 1.625 0 2.625 0.375 3 1.25zM49.25 24.75c2-1.25 2.625-2 2.75-2.375-0.125 0-0.5-0.125-1-0.125-0.875 0-2 0.125-3.25 0.5-0.5 0.625-1 1.125-1.625 1.75 1.125 0 2.125 0.125 3.125 0.25zM16.375 51.125c3.875-3 6.625-6.875 6.625-6.875s-0.875 4.875-0.375 8.875c-1.875 3.25-3.5 4.875-4.875 4.875-0.25 0-0.5 0-0.75-0.125-1.375-0.625-1.625-3-0.625-6.75zM17.875 55.875c0.5-0.25 1.5-1 2.75-3.25 0-0.75-0.125-1.625-0.125-2.5-0.75 0.75-1.625 1.5-2.375 2.125-0.5 2.25-0.375 3.25-0.25 3.625zM39 6.25c1.375 0.625 1.625 2.75 0.625 6.75-3.625 2.625-6.625 6.875-6.625 6.875s1-6 0.375-8.875c1.625-3.125 3.5-4.875 4.875-4.875 0.25 0 0.5 0 0.75 0.125zM37.875 11.875c0.625-2.25 0.375-3.375 0.25-3.75-0.5 0.25-1.5 1-2.75 3.25 0 0.75 0.125 1.75 0.125 2.625 0.75-0.75 1.625-1.5 2.375-2.125zM8.875 20.375c2.25 3 6.875 6.625 6.875 6.625s-5-0.875-8.75-0.375c-3.5-1.875-5.375-4-4.75-5.5 0.375-0.875 1.25-1.375 2.75-1.375 1 0 2.625 0.125 3.875 0.625zM4.125 21.875c0.25 0.5 1 1.5 3.25 2.75 0.75 0 1.625-0.125 2.5-0.125-0.75-0.75-1.5-1.5-2.125-2.25-1-0.25-2-0.5-2.75-0.5-0.5 0-0.75 0.125-0.875 0.125zM49 37.375c3.75 2.125 5.375 4.125 4.75 5.625-0.375 0.875-1.25 1.25-2.75 1.25-1 0-2.375-0.125-3.875-0.625-2.5-3.375-6.875-6.5-6.875-6.5s5.625 1 8.75 0.25zM51 42.25c0.5 0 0.75-0.125 0.875-0.125-0.25-0.5-1-1.5-3.25-2.75-0.75 0-1.625 0.125-2.5 0.125 0.75 0.75 1.5 1.625 2.125 2.375 1 0.25 2 0.375 2.75 0.375z" />
                  </svg>
                  {/* End Icon Code */}
                </div>
              </div>
              <div className="row">
                <div className="col-md-10 offset-md-1 col-lg-12 offset-lg-0">
                  <h1 className="hs-title-3a mb-30 mb-sm-20 wow fadeInUp">
                    Global Design and Development Agency
                  </h1>
                  <p
                    className="section-title-tiny mb-40 mb-sm-30 wow fadeInUp"
                    data-wow-delay="0.15s"
                  >
                    We’re a global creative company delivering innovative
                    solutions to our clients.
                  </p>
                </div>
              </div>
              <div
                className="wow fadeInUp wch-unset"
                data-wow-delay="0.3s"
                data-wow-offset={0}
              >
                <div className="local-scroll mb-60 mb-sm-50">
                  <a
                    href="#contact"
                    className={`btn btn-mod ${
                      dark ? "btn-w" : ""
                    } btn-large btn-circle btn-hover-anim`}
                  >
                    <span>Get a Consultation</span>
                  </a>
                </div>
                {/* Features List */}
                <div className="mt-n10">
                  {/* Features List Item */}
                  <div className="d-flex justify-content-center justify-content-lg-start mt-10">
                    <div className="features-list-icon">
                      <i className="mi-check" />
                    </div>
                    <div className="features-list-text">
                      No credit card required
                    </div>
                  </div>
                  {/* End Features List Item */}
                  {/* Features List Item */}
                  <div className="d-flex justify-content-center justify-content-lg-start mt-10">
                    <div className="features-list-icon">
                      <i className="mi-check" />
                    </div>
                    <div className="features-list-text">
                      Free 30 minute consultation
                    </div>
                  </div>
                  {/* End Features List Item */}
                  {/* Features List Item */}
                  <div className="d-flex justify-content-center justify-content-lg-start mt-10">
                    <div className="features-list-icon">
                      <i className="mi-check" />
                    </div>
                    <div className="features-list-text">
                      Free usability report
                    </div>
                  </div>
                  {/* End Features List Item */}
                </div>
                {/* End Features List */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-stretch">
          <div className="split-image-right rounded-0">
            <img
              src="/assets/images/demo-elegant/hs-image-1.jpg"
              alt="Image Description"
              width={960}
              height={1080}
              className="wow fadeScaleOutIn"
              data-wow-duration="1.3s"
            />
          </div>
        </div>
      </div>
    </>
  );
}
