import { schema } from "../models/schema.js";

export const messages = (status, options) => {
  switch (status) {
    case 200:
      return {
        status: "200",
        error: false,
        message: "OK",
        tasks: options,
      };
    case 201:
      return {
        status: "201",
        error: false,
        message: "Created",
        task: options,
      };
    case 202:
      return {
        status: "202",
        error: false,
        message: "Accepted",
        tasks: options,
      };
    case 204:
      return { status: "204", error: false, message: "No Content" };
    case 400:
      return {
        status: "400",
        error: true,
        message: "Bad Request",
        errors: options,
        sugggestedSchema: schema,
      };
    case 401:
      return { status: "401", error: true, message: "Unauthorized" };
    case 403:
      return { status: "403", error: true, message: "Forbidden" };
    case 404:
      return { status: "404", error: true, message: "Not Found" };
    case 500:
      return {
        status: "500",
        error: true,
        message: "Internal Server Error",
      };
    default:
      return {
        status: "500",
        error: true,
        message: "Internal Server Error",
      };
  }
};
