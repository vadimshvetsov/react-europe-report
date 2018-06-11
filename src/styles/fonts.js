import { injectGlobal } from "styled-components";

import MuseoSans from "../assets/fonts/museosans-500.woff";
import MuseoSansBold from "../assets/fonts/museosans-700.woff";

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @font-face {
    font-family: 'MuseoSans';
    src: url('${MuseoSans}') format('woff');
    font-weight: 500;
  }

  @font-face {
    font-family: 'MuseoSans';
    src: url('${MuseoSansBold}') format('woff');
    font-weight: 700;
  }
`;
