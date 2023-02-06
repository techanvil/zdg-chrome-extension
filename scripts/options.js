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

function main() {
  document.addEventListener("DOMContentLoaded", restoreOptions);
  document.getElementById("save").addEventListener("click", saveOptions);

  // Saves options to chrome.storage
  async function saveOptions() {
    const apiKey = document.getElementById("api-key").value;
    const { organizationName, workspaceName } = JSON.parse(
      document.getElementById("workspace").value || "{}"
    );

    await chrome.storage.sync.set({
      apiKey,
      organizationName,
      workspaceName,
    });
    // Update status to let user know options were saved.
    const status = document.getElementById("status");
    status.textContent = "Options saved.";
    setTimeout(function () {
      status.textContent = "";
    }, 750);
  }

  // Restores options UI state using the preferences stored in chrome.storage.
  async function restoreOptions() {
    const repositoryID = await findRepositoryID();

    const { apiKey, ...workspace } = await chrome.storage.sync.get({
      apiKey: "", // Default value
      organizationName: "",
      workspaceName: "",
    });

    document.getElementById("api-key").value = apiKey;

    if (apiKey) {
      const workspaceSelect = document.getElementById("workspace");
      workspaceSelect.innerHTML = "";

      const workspaces = await findWorkspaces(repositoryID, apiKey);

      workspaces.forEach(({ workspaceName, organizationName }) => {
        const option = document.createElement("option");

        option.value = JSON.stringify({
          workspaceName,
          organizationName,
        });

        option.text = `${organizationName} / ${workspaceName}`;
        workspaceSelect.add(option);

        if (
          workspaceName === workspace.workspaceName &&
          organizationName === workspace.organizationName
        ) {
          console.log("selecting", option.value);
          workspaceSelect.value = option.value;
        }
      });
    }
  }

  async function findRepositoryID() {
    const [tab] = await chrome.tabs.query({ active: true });

    const result = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: function () {
        return document
          .querySelector("meta[name=octolytics-dimension-repository_id]")
          ?.getAttribute("content");
      },
    });

    const repositoryID = result[0]?.result;
    return repositoryID && parseInt(repositoryID, 10);
  }
}

/**
 * GRAPHQL QUERIES
 */

const FIND_WORKSPACES_QUERY = gql`
  query FindWorkspaces($ghIds: [Int!]!) {
    repositoriesByGhId(ghIds: $ghIds) {
      workspacesConnection {
        nodes {
          name
          zenhubOrganization {
            name
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

async function findWorkspaces(repositoryID, zenhubApiKey) {
  const gqlQuery = createGqlQuery(ENDPOINT_URL, zenhubApiKey);

  const result = await gqlQuery(FIND_WORKSPACES_QUERY, "FindWorkspaces", {
    ghIds: [repositoryID],
  });
  const {
    repositoriesByGhId: [
      {
        workspacesConnection: { nodes: workspaces },
      },
    ],
  } = await gqlQuery(FIND_WORKSPACES_QUERY, "FindWorkspaces", {
    ghIds: [repositoryID],
  });

  return workspaces.map(
    ({
      name: workspaceName,
      zenhubOrganization: { name: organizationName },
    }) => ({
      workspaceName,
      organizationName,
    })
  );
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
