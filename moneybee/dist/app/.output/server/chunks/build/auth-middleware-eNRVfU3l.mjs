import { s as servicesMiddleware, y as useAuthSession } from "./services-middleware-nMulUXHZ.mjs";
import { s as setRequestUserEmail, a as setRequestOrgId } from "./logger.server-DV14d0iZ.mjs";
import { a4 as createMiddleware, a5 as getRequest, H as redirect } from "./server.mjs";
const authMiddleware = createMiddleware({ type: "function" }).middleware([servicesMiddleware]).server(async ({ next, context }) => {
  const request = getRequest();
  const { authService } = context.services;
  let authInfo;
  try {
    authInfo = await authService.isAuthenticated(request, {
      failureRedirect: "/sign-in"
    });
  } catch (error) {
    if (error instanceof Response && error.status >= 300 && error.status < 400) {
      throw redirect({ href: error.headers.get("Location"), statusCode: error.status });
    }
    throw error;
  }
  setRequestUserEmail(authInfo.user.actorIdentity.email);
  setRequestOrgId(authInfo.user.organizationId);
  const result = await next({ context: { authInfo } });
  const tokenUpdate = authInfo.tokenService.getUpdate();
  if (tokenUpdate.status) {
    const { marbleToken, refreshToken } = tokenUpdate;
    const authSession = await useAuthSession();
    await authSession.update({
      authToken: marbleToken ?? void 0,
      ...refreshToken ? { refreshToken } : {}
    });
  }
  return result;
});
export {
  authMiddleware as a
};
