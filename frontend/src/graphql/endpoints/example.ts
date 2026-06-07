import EXAMPLE_FRAGMENT from "@/graphql/fragments/example";

const exampleQuery = `
query Example {
    example {
        ${EXAMPLE_FRAGMENT}
    }
}
`;

export const EXAMPLE_ENDPOINTS = {
    exampleQuery,
}