function tryCatch(input) {
  if (input instanceof Promise) {
    return input.then(
      (value) => ({ ok: true, value }),
      (error) => ({ ok: false, error: toError(error) })
    );
  }
  try {
    const result = input();
    if (result instanceof Promise) {
      return result.then(
        (value) => ({ ok: true, value }),
        (error) => ({ ok: false, error: toError(error) })
      );
    }
    return { ok: true, value: result };
  } catch (error) {
    return { ok: false, error: toError(error) };
  }
}
function toError(error) {
  return error instanceof Error ? error : new Error(String(error));
}
export {
  tryCatch as t
};
