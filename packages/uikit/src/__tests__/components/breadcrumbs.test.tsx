import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { renderWithTheme } from "../../testHelpers";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Breadcrumbs>Link</Breadcrumbs>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      list-style-type: none;
    }

    .c0 a {
      color: #E85F34;
    }

    .c0 a:hover {
      color: #53DEE9;
    }

    <ul
        class="c0"
      />
    </DocumentFragment>
  `);
});
