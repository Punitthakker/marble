import { M as MY_INBOX_ID } from "./inboxes-D556s0BB.mjs";
import { e as setToast, G as isNotFoundHttpError } from "./services-middleware-nMulUXHZ.mjs";
import { a as parseIdParamSafe, b as parseQuerySafe } from "./input-validation-D4mgQsey.mjs";
import { a4 as createMiddleware, a5 as getRequest, H as redirect } from "./server.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { t as tryit } from "./async-C3pYACua.mjs";
import { o as object, s as string } from "./short-uuid-fTZYJj_k.mjs";
const caseDetailMiddleware = createMiddleware({ type: "function" }).middleware([authMiddleware]).validator((input) => input).server(async ({ next, context, data }) => {
  const request = getRequest();
  const { cases: caseRepository, inbox: inboxRepository } = context.authInfo;
  const { i18nextService } = context.services;
  const parsedResult = await parseIdParamSafe(data?.params ?? {}, "caseId");
  if (!parsedResult.success) {
    throw redirect({ to: "/cases/inboxes" });
  }
  const [t, query] = await Promise.all([
    i18nextService.getFixedT(request, ["common", "cases"]),
    parseQuerySafe(request, object({ fromInbox: string() }).optional())
  ]);
  const [error, caseDetail] = await tryit(async () => caseRepository.getCase({ caseId: parsedResult.data.caseId }))();
  if (error) {
    const destinationInboxId = query.data?.fromInbox ? query.data.fromInbox : MY_INBOX_ID;
    await setToast({
      type: "error",
      message: isNotFoundHttpError(error) ? t("cases:errors.case_not_found") : t("common:errors.unknown")
    });
    throw redirect({ to: "/cases/inboxes/$inboxId", params: { inboxId: destinationInboxId } });
  }
  const inboxes = await inboxRepository.listInboxes();
  const caseInbox = inboxes.find((inbox) => inbox.id === caseDetail.inboxId);
  if (!caseInbox) {
    throw redirect({ to: "/cases/inboxes" });
  }
  return next({
    context: {
      inboxes,
      case: { detail: caseDetail, inbox: caseInbox }
    }
  });
});
export {
  caseDetailMiddleware as c
};
