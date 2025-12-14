const logPrefix = "[mu-session]";

const STATE_MU_SESSION = "mu_sessiontoken";

interface SessionTokenJwtPayload {
  session: string;
  username: string;
  time_created: number;
}

export interface Session {
  sessionId: string;
  username: string;
  loginTime: string;
}

export function getSessionToken(): string | undefined {
  const sessionToken = Application.getSecureState(STATE_MU_SESSION) as string | null;
  if (sessionToken == null) {
    return undefined;
  }

  return String(sessionToken);
}

export function setSessionToken(sessionToken: string): void {
  if (typeof sessionToken !== "string") {
    console.log(`${logPrefix} tried to store invalid mu_sessiontoken: ${String(sessionToken)}`);
    throw new Error("tried to store invalid mu_sessiontoken");
  }

  Application.setSecureState(sessionToken, STATE_MU_SESSION);
}

export function clearSessionToken(): void {
  Application.setSecureState(null, STATE_MU_SESSION);
}

export function getSessionInfo(): Session | undefined {
  try {
    const sessionToken = getSessionToken();
    if (sessionToken == null) {
      return undefined;
    }

    const payloadBase64 = sessionToken.split(".")[1] || "";
    const payloadJson = Buffer.from(payloadBase64, "base64").toString();
    const payload = JSON.parse(payloadJson) as SessionTokenJwtPayload;

    const loginTime = new Date(payload.time_created * 1000);

    return {
      sessionId: payload.session,
      username: payload.username,
      loginTime: !isNaN(loginTime.getTime()) ? loginTime.toLocaleString() : "-",
    };
  } catch (e) {
    console.log(`${logPrefix} failed to parse session token`);
    console.log(e);
    return undefined;
  }
}

export function assertMustBeAuthenticated() {
  if (getSessionInfo() == null) {
    throw new Error("You are not authenticated, please log in through the MangaUpdates settings");
  }
}
