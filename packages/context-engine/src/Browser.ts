import { BrowserContext } from "./Context";

export class Browser {

  async getContext(): Promise<BrowserContext> {

    return {

      title: "",

      url: "",

      domain: ""

    };

  }

}
