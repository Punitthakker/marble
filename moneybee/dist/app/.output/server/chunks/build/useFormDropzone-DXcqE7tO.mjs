import { u as useCallbackRef } from "./use-callback-ref-DoQNLci-.mjs";
import { u as useDropzone } from "./index-CBe2FUD4.mjs";
const MAX_FILE_SIZE_MB = 20;
const MAX_FILE_SIZE = MAX_FILE_SIZE_MB * 1024 * 1024;
const DEFAULT_ACCEPT = {
  "image/*": [".png", ".jpg", ".jpeg", ".gif"],
  "application/pdf": [".pdf"],
  "application/zip": [".zip"],
  "application/msword": [".doc", ".docx"],
  "application/vnd.openxmlformats-officedocument.*": [".docx", ".xlsx"],
  "application/vnd.ms-excel": [".xls"],
  "text/*": [".csv", ".txt"]
};
function useFormDropzone({
  accept = DEFAULT_ACCEPT,
  maxSize = MAX_FILE_SIZE,
  multiple = true,
  onDrop: _onDrop
}) {
  const onDrop = useCallbackRef(_onDrop);
  return useDropzone({
    onDrop,
    accept,
    multiple,
    maxSize
  });
}
export {
  MAX_FILE_SIZE as M,
  MAX_FILE_SIZE_MB as a,
  useFormDropzone as u
};
