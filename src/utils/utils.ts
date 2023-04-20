export const killNulls = (params: {
  [key: string]: any;
}): { [key: string]: any } => {
  let formattedParams = JSON.parse(JSON.stringify(params));
  for (let key in formattedParams) {
    if (formattedParams[key] === null || formattedParams[key] === "") {
      delete formattedParams[key];
    }

    if (
      typeof formattedParams[key] === "object" &&
      !Array.isArray(formattedParams[key]) &&
      !Object.keys(formattedParams[key]).length
    ) {
      delete formattedParams[key];
    }
    if (Array.isArray(formattedParams[key])) {
      formattedParams[key].forEach((item: any) => {
        if (
          typeof item === "object" &&
          !Array.isArray(item) &&
          Object.keys(item).length
        ) {
          killNulls(item);
        }
      });
    }
  }

  return formattedParams;
};