// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const buttonIconSVG = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 30 40" xmlns="http://www.w3.org/2000/svg">
  <rect style="stroke: rgb(0, 0, 0); fill: rgb(205, 76, 96); paint-order: fill; stroke-width: 0px;" x="0" y="0" width="30" height="10" rx="3" ry="3"/>
  <rect style="stroke: rgb(0, 0, 0); paint-order: fill; stroke-width: 0px; fill: rgb(74, 163, 97);" x="0" y="15" width="30" height="10" rx="3" ry="3"/>
  <rect style="stroke: rgb(0, 0, 0); paint-order: fill; stroke-width: 0px; fill: rgb(95, 199, 125);" x="0" y="30" width="30" height="10" rx="3" ry="3"/>
</svg>`;

const githubHeaderActions = document.querySelector(".gh-header-actions");

if (githubHeaderActions) {
  const text = githubHeaderActions.textContent;

  const button = document.createElement("button");
  button.className =
    "btn btn-sm float-none d-flex flex-items-center flex-order-2 mr-1"; // TODO: Remove flex order?
  button.innerHTML = buttonIconSVG + " Deps";

  const svg = button.children[0];
  // Need to use setAttribute to set the class on an SVG element.
  svg.setAttribute("class", "mr-1");
  svg.className = "mr-1";
  svg.style = "height: 1em;";

  // append to the end of the header actions
  githubHeaderActions.appendChild(button);
}
