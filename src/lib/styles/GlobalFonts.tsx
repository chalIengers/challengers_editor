import { Global, css } from "@emotion/react";

const GlobalFonts = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Pretendard-Regular";
          src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
            format("woff");
          font-style: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
        }
      `}
    />
  );
};

export default GlobalFonts;
