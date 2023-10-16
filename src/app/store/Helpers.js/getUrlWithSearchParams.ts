import queryString, { StringifiableRecord, StringifyOptions } from "query-string";

export const getUrlWithSearchParams = (
  baseUrl: string,
  queryParamsProps: StringifiableRecord,
  options?: StringifyOptions
) => {
  return queryString.stringifyUrl(
    { url: baseUrl, query: queryParamsProps },
    { skipEmptyString: true, skipNull: true, ...options }
  );
};
