import React from "react";

import Tag from "../../components/Tag/Tag";
import { renderWithTheme } from "../../testHelpers";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Tag>Core</Tag>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      border-radius: 16px;
      color: #ffffff;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      font-weight: 400;
      white-space: nowrap;
      height: 28px;
      padding: 0 8px;
      font-size: 14px;
      background-color: #E85F34;
    }

    .c0 > svg {
      fill: currentColor;
    }

    <div
        class="c0"
        scale="md"
      >
        Core
      </div>
    </DocumentFragment>
  `);
});
