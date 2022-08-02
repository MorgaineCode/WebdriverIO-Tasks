const Page = require("./page");

class RequestHelper extends Page {
  async requestDetails(req) {
    const request = req;
    const responseStatus = await request.response?.statusCode;
    const responseBody = JSON.stringify(request.response?.body).replace(
      /[^a-zA-Z0-9:. ]/g,
      ""
    );
    return { request, responseStatus, responseBody };
  }
}

module.exports = new RequestHelper();
