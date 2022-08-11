const Page = require("./page");

class RequestHelper extends Page {
  async requestDetails(req) {
    const request = req;
    const responseStatus = await request.response?.statusCode;
    const responseBody = await Object.values(request.response?.body)[0];
    return { request, responseStatus, responseBody };
  }
}

module.exports = new RequestHelper();
