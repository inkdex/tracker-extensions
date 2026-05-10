import { type TestLogger } from "@paperback/types";

import { MangaUpdates } from "../MangaUpdates/main.js";
import sourceInfo from "../MangaUpdates/pbconfig.js";
import { TestSuite, registerDefaultTests } from "./suite.js";

export async function runTests(logger: TestLogger) {
  const suite = new TestSuite("MangaUpdates tests", logger);
  //@ts-expect-error mixins error
  registerDefaultTests(suite, MangaUpdates, sourceInfo);

  await suite.run();
}
