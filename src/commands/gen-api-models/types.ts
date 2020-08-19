import { ITuple3 } from "italia-ts-commons/lib/tuples";
import { OpenAPIV2 } from "openapi-types";

export interface IGenerateApiOptions {
  specFilePath: string | OpenAPIV2.Document;
  definitionsDirPath: string;
  tsSpecFilePath?: string;
  strictInterfaces?: boolean;
  generateRequestTypes?: boolean;
  generateResponseDecoders?: boolean;
  generateClient?: boolean;
  defaultSuccessType?: string;
  defaultErrorType?: string;
  camelCasedPropNames: boolean;
}

export type SupportedMethod = "get" | "post" | "put" | "delete";
export interface IParameterInfo {
  name: string;
  type: string;
  in: string;
  headerName?: string;
}
export interface IHeaderParameterInfo extends IParameterInfo {
  in: "header";
  headerName: string;
}

export interface IAuthHeaderParameterInfo extends IHeaderParameterInfo {
  tokenType: "basic" | "apiKey" | "oauth2";
}

export interface IOperationInfo {
  method: SupportedMethod;
  operationId: string;
  parameters: IParameterInfo[];
  responses: Array<ITuple3<string, string, string[]>>;
  headers: string[];
  importedTypes: Set<string>;
  path: string;
  consumes?: string;
  produces?: string;
}
