import { type TestLogger } from "@paperback/types";

import { AniList } from "../AniList/main.js";
import sourceInfo from "../AniList/pbconfig.js";
import { TestSuite, registerDefaultTests } from "./suite.js";

export async function runTests(logger: TestLogger) {
  const suite = new TestSuite("AniList tests", logger);
  //@ts-expect-error mixins error
  registerDefaultTests(suite, AniList, sourceInfo);

  await suite.run();
}
