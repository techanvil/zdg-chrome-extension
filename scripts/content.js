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
<svg version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
  <g>
    <path d="m833.3 111.07h-466.61c-29.566 0-53.566 24-53.566 53.566v75.91c0 29.594 24 53.594 53.566 53.594h466.59c29.566 0 53.566-24 53.566-53.594v-75.906c0.023438-29.57-23.977-53.57-53.543-53.57z" style="fill: rgb(205, 76, 96);"/>
    <path d="m833.3 508.46h-466.61c-29.617 0-53.566 24-53.566 53.566v75.938c0 29.566 23.977 53.543 53.566 53.543h466.59c29.566 0 53.566-23.977 53.566-53.543v-75.938c0.023438-29.566-23.977-53.566-53.543-53.566z" style="fill: rgb(74, 163, 97);"/>
    <path d="m833.3 905.83h-466.61c-29.617 0-53.566 23.977-53.566 53.594v75.91c0 29.543 23.977 53.566 53.566 53.566h466.59c29.566 0 53.566-24.023 53.566-53.566v-75.91c0.023438-29.617-23.977-53.594-53.543-53.594z" style="fill: rgb(95, 199, 125);"/>
    <path d="m1122.4 178.59h-142.89c-13.273 0-24 10.754-24 24 0 13.246 10.727 24 24 24h142.89c16.32 0 29.566 13.273 29.566 29.594v290.23c0 16.316-13.273 29.59-29.566 29.59h-74.594l18.504-19.969c9.0234-9.7188 8.4492-24.91-1.2969-33.938-9.7188-9.0234-24.938-8.4492-33.91 1.2969l-55.824 60.289c-0.81641 0.88672-1.1523 1.9922-1.8008 2.9297-0.046875 0.097656-0.12109 0.19141-0.19141 0.28906-0.79297 1.1758-1.8242 2.2305-2.375 3.5273-0.12109 0.26562-0.16797 0.55078-0.28906 0.83984-0.50391 1.3438-0.60156 2.7344-0.88672 4.1289-0.28906 1.3906-0.74219 2.7344-0.76953 4.1523 0 0.16797-0.097656 0.28906-0.097656 0.45703 0 0.16797 0.097656 0.28906 0.097656 0.43359 0.023438 1.4141 0.50391 2.7344 0.76953 4.1289 0.26562 1.3906 0.35938 2.7852 0.88672 4.1289 0.12109 0.28906 0.16797 0.57422 0.28906 0.88672 0.50391 1.1523 1.4648 2.0898 2.1367 3.1445 0.19141 0.3125 0.38281 0.57422 0.57422 0.88672 0.60156 0.86328 0.88672 1.8945 1.6328 2.6875l0.60156 0.67188c0.023437 0 0.023437 0 0.023437 0.023438l55.199 59.594c4.7266 5.1133 11.16 7.6797 17.594 7.6797 5.832 0 11.688-2.1133 16.32-6.4062 9.7188-9 10.32-24.191 1.2969-33.91l-18.461-19.953h74.543c42.793 0 77.594-34.801 77.594-77.566v-290.26c0-42.77-34.801-77.59-77.566-77.59z" style="fill: rgb(136, 136, 136);"/>
    <path d="m220.49 576h-142.92c-42.766 0-77.566 34.801-77.566 77.566v290.26c0 42.77 34.801 77.566 77.566 77.566h74.543l-18.48 19.945c-9 9.7188-8.4258 24.91 1.2969 33.91 4.6328 4.2969 10.488 6.4062 16.32 6.4062 6.457 0 12.887-2.5664 17.617-7.6797l55.824-60.289c0.76953-0.83984 1.0781-1.8945 1.7031-2.7852 0.21484-0.33594 0.43359-0.64844 0.64844-0.98438 0.625-0.98437 1.5117-1.8477 1.9922-2.9297 0.12109-0.28906 0.16797-0.57422 0.28906-0.88672 0.52734-1.3672 0.625-2.7617 0.88672-4.1758 0.26562-1.3672 0.74219-2.6641 0.76953-4.0781 0-0.16797 0.097657-0.28906 0.097657-0.45703s-0.097657-0.3125-0.097657-0.48047c-0.023437-1.3906-0.50391-2.6875-0.76953-4.0781-0.26562-1.4141-0.35938-2.8086-0.88672-4.1758-0.12109-0.28906-0.16797-0.57422-0.28906-0.86328-0.50391-1.1992-1.4883-2.1836-2.207-3.2891-0.097657-0.14453-0.16797-0.28906-0.26562-0.40625-0.67188-1.0078-1.0078-2.1367-1.8477-3.0469l-55.824-60.289c-9.0234-9.7422-24.215-10.344-33.938-1.2969-9.7188 9-10.297 24.191-1.2969 33.91l18.504 19.969-74.59 0.003906c-16.293 0.070312-29.566-13.199-29.566-29.52v-290.26c0-16.293 13.273-29.566 29.566-29.566h142.89c13.246 0 24-10.754 24-24 0.003906-13.246-10.727-24-23.973-24z" style="fill: rgb(136, 136, 136);"/>
    <path d="m243.6 198.05c-0.26562-1.4141-0.35937-2.8086-0.88672-4.1523-0.12109-0.28906-0.16797-0.60156-0.28906-0.88672-0.50391-1.1289-1.4414-2.0625-2.1133-3.1211-0.16797-0.23828-0.3125-0.48047-0.50391-0.71875-0.625-0.9375-0.9375-2.0156-1.7305-2.8555l-55.82-60.289c-9.0234-9.7188-24.215-10.32-33.938-1.2969-9.6953 9-10.297 24.195-1.2969 33.914l18.48 19.945h-141.5c-13.246 0-24 10.754-24 24 0 13.246 10.754 24 24 24h141.53l-18.504 19.969c-9 9.7188-8.4258 24.91 1.2969 33.938 4.6328 4.2734 10.488 6.3828 16.32 6.3828 6.457 0 12.887-2.5938 17.617-7.6797l55.82-60.293c0.86328-0.9375 1.1992-2.0625 1.8945-3.0977 0.027344-0.042969 0.050782-0.09375 0.097656-0.14063 0.79297-1.1758 1.8008-2.2305 2.375-3.5039 0.12109-0.28906 0.16797-0.57422 0.28906-0.83984 0.52734-1.3672 0.625-2.7617 0.88672-4.1758 0.26562-1.3906 0.74219-2.6875 0.76953-4.1055 0-0.14453 0.097656-0.28906 0.097656-0.45703s-0.097656-0.28906-0.097656-0.45703c-0.023437-1.3906-0.50391-2.6836-0.78906-4.0781z" style="fill: rgb(136, 136, 136);"/>
  </g>
</svg>`;

const WORKSPACE = "Execution";

function main() {
  const githubHeaderActions = document.querySelector(".gh-header-actions");
  const pathParts = document.location.pathname.split("/");
  const organization = pathParts[1];
  const issueNumber = pathParts.pop();
  const repositoryID = document
    .querySelector("meta[name=octolytics-dimension-repository_id]")
    ?.getAttribute("content");

  if (githubHeaderActions && organization && issueNumber && repositoryID) {
    findEpicAndInsertButton();

    chrome.storage.sync.onChanged.addListener(() => {
      document.querySelector(".zenhub-dependency-graph-button")?.remove();
      findEpicAndInsertButton();
    });
  }

  async function findEpicAndInsertButton() {
    const { apiKey } = await chrome.storage.sync.get("apiKey");

    if (!apiKey) {
      return;
    }

    const epicIssueNumber = await getEpicForIssue(
      parseInt(issueNumber, 10),
      parseInt(repositoryID, 10),
      apiKey
    );

    if (epicIssueNumber) {
      insertButton(organization, epicIssueNumber);
    }
  }

  function insertButton(organization, epicIssueNumber) {
    const button = document.createElement("button");
    button.className =
      "btn btn-sm float-none d-flex flex-items-center flex-order-2 mr-1 zenhub-dependency-graph-button"; // TODO: Remove flex order?
    button.innerHTML = buttonIconSVG + " Deps";

    const svg = button.children[0];
    // Need to use setAttribute to set the class on an SVG element.
    svg.setAttribute("class", "mr-1");
    svg.className = "mr-1";
    svg.style = "height: 1.2em;";

    button.addEventListener("click", () => {
      const url = `https://techanvil.github.io/zenhub-dependency-graph/?organization=${encodeURIComponent(
        organization
      )}&workspace=${encodeURIComponent(WORKSPACE)}&epic=${encodeURIComponent(
        epicIssueNumber
      )}`;
      window.open(url, "_blank");
    });

    // append to the end of the header actions
    githubHeaderActions.appendChild(button);
  }
}

/**
 * GRAPHQL QUERIES
 */

// Note, `parentEpics` is deprecated and the API suggests to use `parentZenhubEpics`, but this doesn't currently return anything (Feb 2023).
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

async function getEpicForIssue(issueNumber, repositoryID, zenhubApiKey) {
  const gqlQuery = createGqlQuery(ENDPOINT_URL, zenhubApiKey);

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
