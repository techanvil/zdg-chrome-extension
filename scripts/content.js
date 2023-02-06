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

function main() {
  const githubHeaderActions = document.querySelector(".gh-header-actions");
  const issueNumber = document.location.pathname.split("/").pop();
  const repositoryID = document
    .querySelector("meta[name=octolytics-dimension-repository_id]")
    ?.getAttribute("content");

  if (githubHeaderActions && issueNumber && repositoryID) {
    findEpicAndInsertButton();
  }

  async function findEpicAndInsertButton() {
    const epicIssueNumber = await getEpicForIssue(
      parseInt(issueNumber, 10),
      parseInt(repositoryID, 10)
    );

    if (epicIssueNumber) {
      insertButton();
    }
  }

  function insertButton() {
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
}

/**
 * GRAPHQL QUERIES
 */

// Note, `parentEpics` is deprecated and the API suggests to use `parentZenhubEpics`, but this doesn't return anything.
// As mentioned here: https://community.zenhub.com/t/api-get-the-epic-an-issue-is-assigned-to/1041/2
const GET_EPIC_FOR_ISSUE_QUERY = gql`
  query GetEpicForIssue($issueNumber: Int!, $repositoryGhId: Int!) {
    issueByInfo(issueNumber: $issueNumber, repositoryGhId: $repositoryGhId) {
      parentEpics {
        nodes {
          issue {
            number
          }
        }
      }
    }
  }
`;

// For the sake of syntax highlighting:
function gql(strings) {
  return strings[0];
}

/**
 * DATA RETRIEVAL FUNCTIONS
 */

const ENDPOINT_URL = "https://api.zenhub.com/public/graphql/";
const ZENHUB_API_KEY = "";

async function getEpicForIssue(issueNumber, repositoryID) {
  const gqlQuery = createGqlQuery(ENDPOINT_URL, ZENHUB_API_KEY);

  const {
    issueByInfo: {
      parentEpics: {
        // Currently, we return the first epic, in future we should allow the user to choose from a list when there is more than one.
        nodes: [
          {
            issue: { number: epicIssueNumber },
          },
        ],
      },
    },
  } = await gqlQuery(GET_EPIC_FOR_ISSUE_QUERY, "GetEpicForIssue", {
    issueNumber,
    repositoryGhId: repositoryID,
  });

  console.log("epicIssueNumber", epicIssueNumber);

  return epicIssueNumber;
}

function createGqlQuery(endpointUrl, zenhubApiKey) {
  return async function gqlQuery(query, operationName, variables) {
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${zenhubApiKey}`,
      },
      body: JSON.stringify({
        operationName,
        query,
        variables,
      }),
    };

    const response = await fetch(endpointUrl, options);
    const json = await response.json();
    return json.data;
  };
}

/**
 * RUN THE SCRIPT
 */
main();
