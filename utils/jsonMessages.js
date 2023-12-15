export const messages = (status, options) => {
  switch (status) {
    case 200:
      return {
        status: "200",
        success: true,
        message: "OK",
        tasks: options,
      };
    case 201:
      return {
        status: "201",
        success: true,
        message: "Created",
        task: options,
      };
    case 202:
      return {
        status: "202",
        success: true,
        message: "Accepted",
        tasks: options,
      };
    case 204:
      return { status: "204", success: true, message: "No Content" };
    case 400:
      return { status: "400", success: false, message: "Bad Request" };
    case 401:
      return { status: "401", success: false, message: "Unauthorized" };
    case 403:
      return { status: "403", success: false, message: "Forbidden" };
    case 404:
      return { status: "404", success: false, message: "Not Found" };
    case 500:
      return {
        status: "500",
        success: false,
        message: "Internal Server Error",
      };
    default:
      return {
        status: "500",
        success: false,
        message: "Internal Server Error",
      };
  }
};
