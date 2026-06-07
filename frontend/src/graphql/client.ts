import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const BASE_API_URL = process.env.VITE_BASE_API_URL;
const GRAPHQL_API_URL = `${BASE_API_URL}/graphql/`;

class GraphqlClient {
  /**
   * Graphql client that supports uploads.
   *
   * @param query GraphQL query string
   * @param variables variables object (e.g. { input: { ... } })
   * @param files map of fieldName -> File[] (these fieldNames map to variables.input[fieldName])
   * @param inputName name of the input object in the variables object (e.g. "input")
   * @example
   * const client = new GraphqlClient(
   *   `mutation CreateMemorial($input: CreateMemorialInput!) {
   *     createMemorial(input: $input) {
   *       id
   *     }
   *   }`,
   *   { input: { fullName: "John Doe", dateOfBirth: "1990-01-01", dateOfDeath: "2020-01-01" } },
   *   "input",
   *   { galleryImages: [new File([], "image.jpg")] }
   * );
   */
  query: string;
  variables: Record<string, any>;
  files?: Record<string, File | File[]>;
  inputName: string;
  constructor(
    query: string,
    variables: Record<string, any>,
    files?: Record<string, File | File[]>,
    inputName = "input",
  ) {
    this.query = query;
    this.variables = variables;
    this.files = files;
    this.inputName = inputName;
    if (!GRAPHQL_API_URL) {
      throw new Error("GraphQL API URL is not set");
    }
  }

  async execute(): Promise<any> {
    let response: any;
    if (!this.hasFiles()) {
      response = await this.makeRequestWithoutFiles();
    } else {
      response = await this.makeRequestWithFiles();
    }
    return response.data?.data ?? response.data;
  }

  private hasFiles(): boolean {
    if (!this.files) return false;
    const filesFound = Object.values(this.files).some(
      (value) =>
        value instanceof File || (Array.isArray(value) && value.length > 0),
    );
    return Boolean(filesFound);
  }
  private async makeRequestWithoutFiles(): Promise<any> {
    const response = await axios.post(
      GRAPHQL_API_URL,
      { query: this.query, variables: this.variables },
      {
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": cookies.get("csrftoken"),
        },
        withCredentials: true,
      },
    );
    return response;
  }
  private async makeRequestWithFiles() {
    const vars = this.variables
      ? { ...this.variables }
      : { [this.inputName]: {} };
    // create a shallow copy of variables to avoid overwriting the original variables object
    vars[this.inputName] = { ...(vars[this.inputName] || {}) };
    if (!vars[this.inputName]) vars[this.inputName] = {};
    //insert null placeholders where files will be inserted
    for (const [fieldName, fileValue] of Object.entries(this.files || {})) {
      if (!fileValue) continue;
      if (Array.isArray(fileValue)) {
        vars[this.inputName][fieldName] = Array(fileValue.length).fill(null);
      } else {
        vars[this.inputName][fieldName] = null;
      }
    }
    // Build multipart/form-data according to Graphql multipart request spec
    const formData = new FormData();
    const operations = {
      query: this.query,
      variables: vars,
    };
    //Build map: numeric string keys for file arrays -> ["variables.inputName.fieldName" or "variables.inputName.fieldname.index"]
    const map: Record<string, string[]> = {};
    let fileIndex = 0;
    for (const [fieldName, fileValue] of Object.entries(this.files || {})) {
      if (!fileValue) continue;
      if (Array.isArray(fileValue)) {
        for (let i = 0; i < fileValue.length; i++) {
          map[fileIndex.toString()] = [
            `variables.${this.inputName}.${fieldName}.${i}`,
          ];
          fileIndex++;
        }
      } else {
        map[fileIndex.toString()] = [
          `variables.${this.inputName}.${fieldName}`,
        ];
        fileIndex++;
      }
    }
    // Append operations and map to formData
    formData.append("operations", JSON.stringify(operations));
    formData.append("map", JSON.stringify(map));
    // Append files in same order as we assigned indices in map
    let appendIndex = 0;
    for (const fileValue of Object.values(this.files || {})) {
      if (!fileValue) continue;
      if (Array.isArray(fileValue)) {
        for (const file of fileValue) {
          formData.append(appendIndex.toString(), file);
          appendIndex++;
        }
      } else {
        formData.append(appendIndex.toString(), fileValue);
        appendIndex++;
      }
    }
    // make request to backend
    const response = await axios.post(GRAPHQL_API_URL, formData, {
      headers: {
        "X-CSRFToken": cookies.get("csrftoken"),
      },
      withCredentials: true,
    });
    return response;
  }
}
export { GraphqlClient };
