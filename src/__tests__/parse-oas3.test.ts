import * as SwaggerParser from "swagger-parser";
test("Validate Schema OpenApi 3.0 ", () => {
  SwaggerParser.validate(`${__dirname}/api_oas3.yaml`, (err, api: any) => {
    if (err) {
      console.error(err);
    } else {
      console.log(
        "API name: %s, Version: %s",
        api.info.title,
        api.info.version
      );
    }
    expect(err).toBeNull();
  });
});