import { Q as jsxRuntimeExports, M as reactExports } from "./server.mjs";
import { y as Route$1f, x as useAgnosticNavigation, P as Page, T as Tooltip } from "./router-KSC-NEr8.mjs";
import { Q as QueryString } from "./input-validation-D4mgQsey.mjs";
import { a2 as M, aS as z, bg as makeDatasetsMap, be as REQUEST_TIMEOUT, Y as sanitizeTruthyDatasets, bf as SCREENING_CATEGORY_TO_DTO_SECTION } from "./services-middleware-nMulUXHZ.mjs";
import { u as useTranslation, B as Button, I as Icon, an as Panel, M as MenuCommand, T as Trans, a6 as Input, ao as PanelSharpFactory, W as CtaV2ClassName, c as clsx, d as cn, a as useFormatDateTime, S as Typo, aq as Card } from "./Tabs-CzpyUi7T.mjs";
import { E as ExpandableGroupTagLine } from "./ExpandableGroupTagLine-MgT0uQKb.mjs";
import { C as CopyToClipboardButton, T as Tag, z as zt } from "./create-context-k6HmQ6bB.mjs";
import { S as ScreeningNavigationTabs, G as GridTable } from "./Tabs-euCaPBQH.mjs";
import { u as useDatasetTitle, f as findDatasetOrTopicByKey } from "./dataset-utils-CXMfULsv.mjs";
import { C as ContinuousScreeningConfigurationStepper } from "./continuous-screenings-CbvELuxK.mjs";
import { L as ListAndTopicDatasetConfigurationBridge, O as ObjectMapping, D as DatasetSelection, S as ScoringConfiguration, F as FormPagination, a as Stepper } from "./ScoringConfiguration-D48zWHlS.mjs";
import { T as TextArea } from "./TextArea-p2rzbOeQ.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
import { o as object, s as string } from "./short-uuid-fTZYJj_k.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { u as updateContinuousScreeningConfigurationFn } from "./continuous-screening-CrmIE_W_.mjs";
import { u as useQueryClient } from "./query-BmG5BEas.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { a as Callout } from "./Callout-B0OuRL3q.mjs";
import { C as Collapsible } from "./Collapsible-CKx8cmdD.mjs";
import { D as DatasetTag } from "./DatasetTag-RXIheIFj.mjs";
import { D as DatatypeIcon, a as DatatypeToPrimitiveType } from "./DatatypeOption-CVRIpFKg.mjs";
import { u as useDataModelQuery } from "./get-data-model-BUauY6PR.mjs";
import { S as Spinner } from "./Spinner-DmLieYoS.mjs";
import { u as useGetInboxesQuery } from "./get-inboxes-BXwOxAig.mjs";
import { E as ExternalLink } from "./ExternalLink-BlVgwkVd.mjs";
import { u as useUploadTableQuery } from "./upload-table-DaVYnXjO.mjs";
import { i as ingestingDataByCsvDocHref } from "./documentation-href-DY9fs71n.mjs";
import { S as Switch } from "./Switch-BV-_0Knl.mjs";
import { u as uploadIngestionDataFn } from "./data-9UajV2HK.mjs";
import { u as useDropzone } from "./index-CBe2FUD4.mjs";
import { t } from "./hasAtLeast-BmuNoqMd.mjs";
import { t as toggle } from "./array-BFSjnO9c.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./security-headers.server-BdP3HrPp.mjs";
import "./ThemeContext-DjRULCu0.mjs";
import "./config--RFGchua.mjs";
import "./i18n-instance-store-UssbGYOM.mjs";
import "./auth-middleware-eNRVfU3l.mjs";
import "./logger.server-DV14d0iZ.mjs";
import "node:os";
import "node:events";
import "node:diagnostics_channel";
import "fs";
import "events";
import "path";
import "assert";
import "worker_threads";
import "module";
import "node:fs";
import "node:path";
import "node:url";
import "url";
import "buffer";
import "./data-model-feature-access-D7XsjRz2.mjs";
import "./feature-access-BSdB6UiC.mjs";
import "./datetime-insWKNBy.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
import "./case-detail-middleware-iDVIrW-c.mjs";
import "./inboxes-D556s0BB.mjs";
import "./async-C3pYACua.mjs";
import "./coerce-UidCu_Sb.mjs";
import "./files-fO9wUXBf.mjs";
import "./decisions--eKWwSYj.mjs";
import "./unique-cniTya2T.mjs";
import "./graph-pivots-Bblee9BN.mjs";
import "./scenarios-C5R2TE8p.mjs";
import "node:crypto";
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./Popover-Cp1XdSV2.mjs";
import "./DatasetSelectionContent-CIYFAVPQ.mjs";
import "./lists-config-DL0Z5yQK.mjs";
import "./screenings-C_YbbaUO.mjs";
import "./useQuery-Bb0AEcpf.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./capitalize-DXXvpSFO.mjs";
import "./Checkbox-C8nszDsh.mjs";
import "./index-22HmyALM.mjs";
import "./ScreeningThreshold-BK82ESq7.mjs";
import "./ThresholdRange-CusKNWqi.mjs";
import "./cases-C-fVFrVL.mjs";
import "./cases-BQ48izmh.mjs";
import "./data-BXamdbTM.mjs";
const useUploadIngestionData = (objectType) => {
  const uploadIngestionData = useServerFn(uploadIngestionDataFn);
  return useMutation({
    mutationFn: async (formData) => {
      const enriched = new FormData();
      for (const [key, value] of formData.entries()) {
        enriched.append(key, value);
      }
      enriched.append("objectType", objectType);
      return uploadIngestionData({ data: enriched });
    }
  });
};
const MAX_FILE_SIZE_MB = 32;
const MAX_FILE_SIZE = MAX_FILE_SIZE_MB * 1024 * 1024;
const generateCsvTemplateLink = (table) => {
  const csvContent = table.fields.map((field) => field.name).join(",") + "\n";
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8," });
  return URL.createObjectURL(blob);
};
function DownloadCsvTemplate({ tableModel, objectType }) {
  const { t: t2 } = useTranslation(["upload"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: generateCsvTemplateLink(tableModel),
      download: `${objectType}_template.csv`,
      className: CtaV2ClassName({ variant: "secondary" }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "download", className: "me-sm size-6" }),
        t2("upload:download_template_cta")
      ]
    }
  );
}
const ResultModal = ({
  onOpenChange,
  isOpen,
  modalContent,
  objectType
}) => {
  const { t: t2 } = useTranslation(["upload", "common"]);
  const icon = modalContent.success ? "tick" : "cross";
  const errorMessage = (errorString) => {
    if (errorString) {
      try {
        const error = JSON.parse(errorString);
        if ("message" in error) return error.message;
      } catch (_error) {
        return errorString;
      }
    }
    return errorString;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Root, { open: isOpen, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-card text-s flex flex-col items-center gap-lg p-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Icon,
        {
          icon,
          className: clsx(
            "size-[108px] rounded-full border-8",
            modalContent.success ? "bg-purple-background border-transparent text-purple-primary" : "bg-red-background border-transparent text-red-primary"
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-l font-semibold", children: t2("upload:results") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: modalContent.message }),
        !modalContent.success ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "first-letter:capitalize", children: errorMessage(modalContent.error) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-lg", children: t2("upload:failure_additional_message", {
            replace: { objectType }
          }) })
        ] }) : null
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Footer, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t2("common:understand"), leadingIcon: "tick" }) })
  ] }) });
};
const UploadForm = ({
  objectType,
  onSuccess,
  intermediateSteps = []
}) => {
  const { t: t$1 } = useTranslation(["upload", "common"]);
  const [loading, setLoading] = reactExports.useState(false);
  const [selectedFile, setSelectedFile] = reactExports.useState(null);
  const [stepIndex, setStepIndex] = reactExports.useState(0);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [modalContent, setModalContent] = reactExports.useState({
    message: "",
    success: true
  });
  const uploadIngestionData = useUploadIngestionData(objectType);
  const uploadStepDataRef = reactExports.useRef({});
  const hasIntermediateSteps = intermediateSteps.length > 0;
  const showIntermediateStep = hasIntermediateSteps && selectedFile !== null && !loading;
  const resetFileSelection = reactExports.useCallback(() => {
    setSelectedFile(null);
    setStepIndex(0);
    uploadStepDataRef.current = {};
  }, []);
  const computeModalMessage = reactExports.useCallback(
    ({
      success,
      linesProcessed,
      errorMessage
    }) => {
      if (success) {
        setModalContent({
          message: t$1("upload:success_message", {
            replace: { linesProcessed, objectType }
          }),
          success: true
        });
      } else {
        setModalContent({
          message: t$1("upload:failure_message"),
          error: errorMessage,
          success: false
        });
      }
    },
    [objectType, t$1]
  );
  const ingestFile = reactExports.useCallback(
    async (file, stepData) => {
      try {
        setLoading(true);
        const formData = new FormData();
        formData.append("file", file);
        for (const [key, value] of Object.entries(stepData ?? {})) {
          if (Array.isArray(value)) {
            for (const item of value) {
              formData.append(key, item);
            }
            continue;
          }
          formData.append(key, value);
        }
        const response = await uploadIngestionData.mutateAsync(formData);
        if (!response.ok) {
          setIsModalOpen(true);
          let errorMessage;
          if (response.status === REQUEST_TIMEOUT) {
            errorMessage = t$1("upload:errors.request_timeout");
          } else {
            errorMessage = (await response.text()).trim();
          }
          computeModalMessage({
            success: false,
            errorMessage: errorMessage ?? t$1("common:global_error")
          });
          return;
        }
        const uploadLog = await response.json();
        setIsModalOpen(true);
        computeModalMessage({
          success: true,
          linesProcessed: uploadLog.lines_processed
        });
        onSuccess?.(uploadLog);
      } catch (error) {
        setIsModalOpen(true);
        computeModalMessage({
          success: false,
          errorMessage: error instanceof Error ? error.message : t$1("common:global_error")
        });
      } finally {
        setLoading(false);
        resetFileSelection();
      }
    },
    [computeModalMessage, onSuccess, resetFileSelection, t$1, uploadIngestionData]
  );
  const onDrop = (acceptedFiles) => {
    if (!t(acceptedFiles, 1)) {
      return;
    }
    const file = acceptedFiles[0];
    if (hasIntermediateSteps) {
      setSelectedFile(file);
      setStepIndex(0);
      return;
    }
    void ingestFile(file);
  };
  const handleStepNext = (data) => {
    if (!selectedFile) return;
    if (data) {
      uploadStepDataRef.current = { ...uploadStepDataRef.current, ...data };
    }
    if (stepIndex < intermediateSteps.length - 1) {
      setStepIndex((index) => index + 1);
      return;
    }
    void ingestFile(selectedFile, uploadStepDataRef.current);
  };
  const handleStepBack = () => {
    if (stepIndex > 0) {
      setStepIndex((index) => index - 1);
      return;
    }
    resetFileSelection();
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      onDrop(acceptedFiles);
    },
    accept: { "text/*": [".csv"] },
    multiple: false,
    maxSize: MAX_FILE_SIZE
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(UploadFormLoading, {}) : null,
    showIntermediateStep && selectedFile ? intermediateSteps[stepIndex]({
      file: selectedFile,
      onNext: handleStepNext,
      onBack: handleStepBack
    }) : null,
    !loading && !showIntermediateStep ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ...getRootProps(),
        className: clsx(
          "text-s flex h-60 flex-col items-center justify-center gap-md rounded-sm border-2 border-dashed",
          isDragActive ? "bg-purple-background border-purple-disabled opacity-90" : "border-grey-placeholder"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...getInputProps() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t$1("upload:drop_file_cta") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-grey-secondary uppercase", children: t$1("common:or") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-5" }),
            t$1("upload:pick_file_cta")
          ] })
        ]
      }
    ) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ResultModal,
      {
        isOpen: isModalOpen,
        modalContent,
        objectType,
        onOpenChange: () => setIsModalOpen(!isModalOpen)
      }
    )
  ] });
};
const UploadFormLoading = ({ className }) => {
  const { t: t2 } = useTranslation(["common"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: clsx(
        className,
        "border-grey-placeholder flex h-60 flex-col items-center justify-center gap-md rounded-sm border-2 border-dashed"
      ),
      children: t2("common:loading")
    }
  );
};
const GeneralInfo = ({ stableId }) => {
  const { t: t2 } = useTranslation(["continuousScreening"]);
  const name = ContinuousScreeningConfigurationStepper.select((state) => state.data.$name);
  const description = ContinuousScreeningConfigurationStepper.select((state) => state.data.$description);
  const mode = ContinuousScreeningConfigurationStepper.select((state) => state.__internals.mode);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm p-md rounded-md bg-surface-card border border-grey-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[3fr_2fr] gap-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { readOnly: mode === "view", value: name.value, onChange: (e) => name.value = e.target.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "self-center min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CopyToClipboardButton, { toCopy: stableId, size: "chip", rounded: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs truncate", children: stableId }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TextArea,
      {
        readOnly: mode === "view",
        value: description.value,
        placeholder: mode === "view" ? t2("continuousScreening:field.description.view_placeholder") : t2("continuousScreening:field.description.placeholder"),
        onChange: (e) => description.value = e.target.value
      }
    )
  ] });
};
const ConfigurationPanel = ({
  baseConfig,
  newConfig,
  onUpdate,
  initialMode,
  baseStep
}) => {
  const { t: t2 } = useTranslation(["continuousScreening"]);
  const configurationStepper = ContinuousScreeningConfigurationStepper.createSharp(
    initialMode ?? "view",
    newConfig,
    (data) => {
      onUpdate(data);
    }
  );
  reactExports.useEffect(() => {
    if (baseStep !== void 0) {
      configurationStepper.actions.setCurrentStep(baseStep);
    }
  }, [baseStep]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "medium", className: "isolate", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContinuousScreeningConfigurationStepper.Provider, { value: configurationStepper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListAndTopicDatasetConfigurationBridge, { useCase: "continuous_monitoring", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfigurationPanelHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grow", children: M(configurationStepper.value.__internals.currentStep).with(0, () => /* @__PURE__ */ jsxRuntimeExports.jsx(GeneralInfo, { stableId: baseConfig.stableId })).with(1, () => /* @__PURE__ */ jsxRuntimeExports.jsx(ObjectMapping, { baseConfig })).with(2, () => /* @__PURE__ */ jsxRuntimeExports.jsx(DatasetSelection, { useCase: "continuous_monitoring" })).with(3, () => /* @__PURE__ */ jsxRuntimeExports.jsx(ScoringConfiguration, {})).otherwise(() => null) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormPagination,
      {
        className: "bg-surface-card",
        finalButtonText: t2("continuousScreening:edition.validate_button")
      }
    )
  ] }) }) }) });
};
const ConfigurationPanelHeader = () => {
  const { t: t2 } = useTranslation(["continuousScreening"]);
  const configurationStepper = ContinuousScreeningConfigurationStepper.useSharp();
  const mode = ContinuousScreeningConfigurationStepper.select((state) => state.__internals.mode);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Header, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-md shrink-0 sticky top-0 z-10 flex-wrap", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: mode === "view" ? t2("continuousScreening:panel.title.view") : t2("continuousScreening:panel.title.edit") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stepper, { fromZero: true, getStepLabel: (stepName) => t2(`continuousScreening:panel.stepper.${stepName}`) }),
    mode === "view" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: () => configurationStepper.actions.setMode("edit", 0), children: t2("common:edit") }) : null
  ] }) });
};
const basePayloadSchema = object({
  name: string().min(1),
  description: string()
});
const CreationModal = ({ open, onOpenChange, onSubmit }) => {
  const { t: t2 } = useTranslation(["common", "continuousScreening"]);
  const [name, setName] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const isValid = basePayloadSchema.safeParse({ name, description }).success;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onSubmit({ name, description });
    }
  };
  const innerOpenChange = (open2) => {
    if (!open2) {
      setName("");
      setDescription("");
    }
    onOpenChange(open2);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Root, { open, onOpenChange: innerOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t2("continuousScreening:creation.modal.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-lg p-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            name: "name",
            placeholder: t2("continuousScreening:creation.modal.name_placeholder"),
            value: name,
            onChange: (e) => setName(e.currentTarget.value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextArea,
          {
            name: "description",
            placeholder: t2("continuousScreening:creation.modal.description_placeholder"),
            rows: 3,
            value: description,
            onChange: (e) => setDescription(e.currentTarget.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t2("common:cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { label: t2("common:create"), type: "submit", disabled: !isValid })
      ] })
    ] })
  ] }) });
};
const useUpdateContinuousScreeningConfigurationMutation = (configStableId) => {
  const updateContinuousScreeningConfiguration = useServerFn(updateContinuousScreeningConfigurationFn);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["continuous-screening", "update-configuration"],
    mutationFn: async (payload) => {
      await updateContinuousScreeningConfiguration({ data: { ...payload, configStableId } });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["continuous-screening", "configurations"] });
    }
  });
};
function getSectionFromKey(key) {
  const section = key.split(":")[0];
  if (!section || !(section in SCREENING_CATEGORY_TO_DTO_SECTION)) return void 0;
  return section;
}
function DatasetChangeList({
  keys,
  catalog,
  emptyLabel
}) {
  const { formatItemName } = useDatasetTitle();
  const rows = keys.flatMap((key) => {
    const item = findDatasetOrTopicByKey(catalog, key);
    if (!item) return [];
    const category = getSectionFromKey(key);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate min-w-0", children: formatItemName(item) }),
      category ? /* @__PURE__ */ jsxRuntimeExports.jsx(DatasetTag, { category }) : null
    ] }, key);
  });
  if (rows.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary text-center", children: emptyLabel });
  }
  return rows;
}
const DatasetSelectionSection = ({ updatedConfig, baseConfig, datasets }) => {
  const { t: t2 } = useTranslation(["common", "continuousScreening"]);
  const addedDatasets = Object.keys(updatedConfig.datasets).filter(
    (k) => !!updatedConfig.datasets[k] && !baseConfig.datasets.includes(k)
  );
  const removedDatasets = baseConfig.datasets.filter((k) => !updatedConfig.datasets[k]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible.Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Title, { children: t2("continuousScreening:edition.validation.datasetSelection.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("continuousScreening:edition.validation.datasetSelection.added.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm border border-grey-border rounded-md p-md max-h-50 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DatasetChangeList,
          {
            keys: addedDatasets,
            catalog: datasets,
            emptyLabel: t2("continuousScreening:edition.validation.datasetSelection.no_added")
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("continuousScreening:edition.validation.datasetSelection.removed.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm border border-grey-border rounded-md p-md max-h-50 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DatasetChangeList,
          {
            keys: removedDatasets,
            catalog: datasets,
            emptyLabel: t2("continuousScreening:edition.validation.datasetSelection.no_removed")
          }
        ) })
      ] })
    ] }) })
  ] });
};
const GeneralInfoSection = ({ updatedConfig, baseConfig }) => {
  const { t: t2 } = useTranslation(["continuousScreening"]);
  const hasNameChanged = updatedConfig.name !== baseConfig.name;
  const hasDescriptionChanged = updatedConfig.description !== (baseConfig.description ?? "");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible.Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Title, { children: t2("continuousScreening:edition.validation.generalInfo.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[140px_1fr] gap-sm items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("continuousScreening:field.name.label") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
          hasNameChanged ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-through text-grey-secondary", children: baseConfig.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "->" })
          ] }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: updatedConfig.name })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[140px_1fr] gap-sm items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("continuousScreening:field.description.label") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
          hasDescriptionChanged ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-through text-grey-secondary", children: !baseConfig.description ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "(Empty)" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: baseConfig.description }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "->" })
          ] }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: updatedConfig.description })
        ] })
      ] })
    ] }) })
  ] });
};
const ObjectMappingSection = ({ updatedConfig, baseConfig }) => {
  const dataModelQuery = useDataModelQuery();
  const { t: t2 } = useTranslation(["common", "continuousScreening"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible.Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Title, { children: t2("continuousScreening:edition.validation.objectMapping.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Content, { children: M(dataModelQuery).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-10" }) })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md items-center justify-center h-50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: t2("common:generic_fetch_data_error") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => dataModelQuery.refetch(), children: t2("common:retry") })
    ] })).with({ isSuccess: true }, ({ data: { dataModel } }) => {
      const hasChanges = updatedConfig.mappingConfigs.some((mappingConfig) => {
        const table = dataModel.find((table2) => table2.name === mappingConfig.objectType);
        if (!table) return false;
        return Object.entries(mappingConfig.fieldMapping).map(([fieldId, ftmProperty]) => {
          const field = table.fields.find((field2) => field2.id === fieldId);
          return { field, ftmProperty };
        }).filter(({ field, ftmProperty }) => {
          return field && ftmProperty !== null && !field.ftmProperty;
        }).length > 0;
      });
      if (!hasChanges) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("continuousScreening:edition.validation.objectMapping.no_changes") }) });
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-md", children: updatedConfig.mappingConfigs.map((mappingConfig) => {
        const table = dataModel.find((table2) => table2.name === mappingConfig.objectType);
        return table ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableValidation, { table, objectMapping: mappingConfig }, mappingConfig.objectType) : null;
      }) });
    }).exhaustive() })
  ] });
};
const TableValidation = ({ table, objectMapping }) => {
  const { t: t2 } = useTranslation(["continuousScreening"]);
  const isAddedTable = !table.ftmEntity;
  const fieldsAdded = Object.entries(objectMapping.fieldMapping).map(([fieldId, ftmProperty]) => {
    const field = table.fields.find((field2) => field2.id === fieldId);
    return { field, ftmProperty };
  }).filter(({ field, ftmProperty }) => {
    return field && ftmProperty !== null && !field.ftmProperty;
  });
  if (fieldsAdded.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2(`continuousScreening:edition.validation.objectMapping.${isAddedTable ? "table_added" : "table_modified"}`, {
      tableName: table.name
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm border border-grey-border rounded-md p-md max-h-50 overflow-y-auto", children: fieldsAdded.map(({ field, ftmProperty }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DatatypeIcon, { dataType: DatatypeToPrimitiveType(field?.dataType ?? "String") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: field?.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "arrow-forward", className: "size-6 text-purple-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ftmProperty })
      ] }, field?.id);
    }) })
  ] });
};
const ScoringConfigurationSection = ({ updatedConfig, baseConfig }) => {
  const { t: t2 } = useTranslation(["continuousScreening", "screenings"]);
  const hasMatchThresholdChanged = updatedConfig.matchThreshold !== baseConfig.matchThreshold;
  const hasMatchLimitChanged = updatedConfig.matchLimit !== baseConfig.matchLimit;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible.Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Title, { children: t2("continuousScreening:edition.validation.scoringConfiguration.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[140px_1fr] gap-sm items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("screenings:match_threshold") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
          hasMatchThresholdChanged ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-through text-grey-secondary", children: baseConfig.matchThreshold }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "->" })
          ] }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: updatedConfig.matchThreshold })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[140px_1fr] gap-sm items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("screenings:match_limit") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
          hasMatchLimitChanged ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-through text-grey-secondary", children: baseConfig.matchLimit }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "->" })
          ] }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: updatedConfig.matchLimit })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(InboxDiff, { updatedConfig, baseConfig })
    ] }) })
  ] });
};
const InboxDiff = ({
  updatedConfig,
  baseConfig
}) => {
  const { t: t2 } = useTranslation(["continuousScreening"]);
  const inboxesQuery = useGetInboxesQuery();
  const hasInboxChanged = updatedConfig.inboxId !== baseConfig.inboxId;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[140px_1fr] gap-sm items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("continuousScreening:field.inbox.label") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-sm", children: M(inboxesQuery).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-4" })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t2("common:generic_fetch_data_error") })).with({ isSuccess: true }, ({ data }) => {
      if (!data) return null;
      const inboxes = data.inboxes;
      const baseInboxName = inboxes.find((inbox) => inbox.id === baseConfig.inboxId)?.name;
      const updatedInboxName = inboxes.find((inbox) => inbox.id === updatedConfig.inboxId)?.name;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        hasInboxChanged ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-through text-grey-secondary", children: baseInboxName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "->" })
        ] }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: updatedConfig.inboxId ? updatedInboxName : updatedConfig.inboxName })
      ] });
    }).exhaustive() })
  ] });
};
const EditionValidationPanel = ({
  baseConfig,
  updatedConfig,
  onCancel,
  datasets
}) => {
  const panelSharp = PanelSharpFactory.useSharp();
  const { t: t2 } = useTranslation(["continuousScreening", "common"]);
  const updateConfigurationMutation = useUpdateContinuousScreeningConfigurationMutation(baseConfig.stableId);
  const revalidate = useLoaderRevalidator();
  const handleValidateClick = () => {
    updateConfigurationMutation.mutateAsync({
      ...updatedConfig,
      datasets: sanitizeTruthyDatasets(updatedConfig.datasets)
    }).then(() => {
      zt.success(t2("common:success.save"));
      panelSharp.actions.close();
      revalidate();
    }).catch(() => {
      zt.error(t2("common:errors.unknown"));
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "medium", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Header, { children: t2("continuousScreening:edition.validation.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-lg grow flex flex-col gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { bordered: true, className: "bg-surface-card mx-md", children: t2("continuousScreening:edition.validation.validation_callout") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GeneralInfoSection, { updatedConfig, baseConfig }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DatasetSelectionSection, { updatedConfig, baseConfig, datasets }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScoringConfigurationSection, { updatedConfig, baseConfig }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ObjectMappingSection, { updatedConfig, baseConfig })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Footer, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.FooterButton, { variant: "secondary", onClick: () => onCancel(updatedConfig), label: t2("common:cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.FooterButton, { variant: "primary", onClick: handleValidateClick, label: t2("common:save") })
    ] })
  ] }) });
};
function PanelAddCsv({
  configuration,
  configsPerObjectType
}) {
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  const [panelOpen, setPanelOpen] = reactExports.useState(false);
  const [selectedObjectType, setSelectedObjectType] = reactExports.useState(null);
  const { t: t2 } = useTranslation(["continuousScreening", "upload"]);
  const dataModelQuery = useDataModelQuery();
  const objectTypes = configuration.objectTypes;
  const selectedTableModel = reactExports.useMemo(
    () => selectedObjectType ? dataModelQuery.data?.dataModel.find((table) => table.name === selectedObjectType) ?? null : null,
    [dataModelQuery.data?.dataModel, selectedObjectType]
  );
  const openPanelForObjectType = (objectType) => {
    setSelectedObjectType(objectType);
    setPanelOpen(true);
  };
  const handlePanelOpenChange = (open) => {
    setPanelOpen(open);
    if (!open) {
      setSelectedObjectType(null);
    }
  };
  const handleAddClick = (e) => {
    e.stopPropagation();
    if (objectTypes.length === 1) {
      openPanelForObjectType(objectTypes[0]);
    }
  };
  const stopRowInteraction = (e) => {
    e.stopPropagation();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: stopRowInteraction, onPointerDown: stopRowInteraction, children: [
    objectTypes.length > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { open: menuOpen, onOpenChange: setMenuOpen, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip.Default, { content: t2("continuousScreening:configurations.csv.button.addCsv"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", appearance: "stroked", onClick: (e) => e.stopPropagation(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "csv" })
      ] }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { align: "end", sideOffset: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Group, { heading: t2("upload:select_one_table"), children: objectTypes.map((objectType) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        MenuCommand.Item,
        {
          value: objectType,
          onSelect: () => {
            setMenuOpen(false);
            openPanelForObjectType(objectType);
          },
          children: objectType
        },
        objectType
      )) }) }) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip.Default, { content: t2("continuousScreening:configurations.csv.button.addCsv"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", appearance: "stroked", onClick: handleAddClick, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "csv" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Root, { open: panelOpen, onOpenChange: handlePanelOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Header, { children: t2("continuousScreening:configurations.csv.button.title", {
        objectType: selectedObjectType
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-s whitespace-pre-wrap text-grey-secondary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Trans,
            {
              t: t2,
              i18nKey: "upload:upload_callout_1",
              components: {
                DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: ingestingDataByCsvDocHref })
              },
              values: { objectType: selectedObjectType }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          t2("upload:upload_callout_2")
        ] }),
        selectedObjectType && selectedTableModel ? /* @__PURE__ */ jsxRuntimeExports.jsx(DownloadCsvTemplate, { tableModel: selectedTableModel, objectType: selectedObjectType }) : null,
        selectedObjectType ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          UploadForm,
          {
            objectType: selectedObjectType,
            intermediateSteps: [
              ({ file, onNext, onBack }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                CsvUploadConfirmStep,
                {
                  file,
                  configs: configsPerObjectType.get(selectedObjectType) ?? [],
                  onNext,
                  onBack
                }
              )
            ]
          }
        ) : null
      ] }),
      selectedObjectType ? /* @__PURE__ */ jsxRuntimeExports.jsx(PastUploads, { objectType: selectedObjectType, configsPerObjectType }) : null
    ] }) }) })
  ] });
}
function CsvUploadConfirmStep({
  file,
  configs,
  onNext,
  onBack
}) {
  const { t: t2 } = useTranslation(["continuousScreening", "common"]);
  const [placeUnderMonitoring, setPlaceUnderMonitoring] = reactExports.useState(true);
  const [selectedStableIds, setSelectedStableIds] = reactExports.useState(() => configs.map((config) => config.stableId));
  const [skipInitialScreening, setSkipInitialScreening] = reactExports.useState(true);
  const selectedConfigurations = reactExports.useMemo(
    () => configs.filter((config) => selectedStableIds.includes(config.stableId)),
    [configs, selectedStableIds]
  );
  const canValidate = !placeUnderMonitoring || selectedStableIds.length > 0;
  const handleToggleConfig = (stableId) => {
    setSelectedStableIds((current) => toggle(current, stableId));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-grey-placeholder flex flex-col gap-lg rounded-sm border-2 border-dashed p-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-primary", children: t2("continuousScreening:configurations.csv.confirm.going_to_upload") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Tag,
        {
          color: "grey",
          size: "small",
          className: "cursor-pointer",
          onClick: (event) => {
            event.preventDefault();
            event.stopPropagation();
            onBack();
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "max-w-[24ch] truncate", children: file.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "cross", className: "size-3 shrink-0" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              id: "place-under-monitoring",
              checked: placeUnderMonitoring,
              onCheckedChange: (checked) => {
                setPlaceUnderMonitoring(checked);
                if (!checked) {
                  setSelectedStableIds([]);
                } else if (selectedStableIds.length === 0) {
                  setSelectedStableIds(configs.map((config) => config.stableId));
                }
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "place-under-monitoring", className: "text-s text-grey-primary", children: t2("continuousScreening:configurations.csv.confirm.place_under_monitoring") })
        ] }),
        placeUnderMonitoring ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ps-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { persistOnSelect: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: cn(
                "border-grey-border bg-surface-card flex min-h-10 w-full items-center gap-sm rounded-md border px-sm py-xs text-start",
                "hover:border-grey-secondary focus-visible:ring-purple-primary focus-visible:ring-2 focus-visible:outline-hidden"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 flex-wrap gap-xs", children: selectedConfigurations.length > 0 ? selectedConfigurations.map((config) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  RemovableConfigTag,
                  {
                    label: config.name,
                    onRemove: () => handleToggleConfig(config.stableId)
                  },
                  config.stableId
                )) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-secondary", children: t2("continuousScreening:configurations.csv.confirm.configuration_placeholder") }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Icon,
                  {
                    icon: "caret-down",
                    className: "text-grey-secondary size-4 shrink-0 group-radix-state-open:rotate-180 transition-transform duration-200"
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            MenuCommand.Content,
            {
              className: "w-[var(--radix-popover-trigger-width)]",
              side: "bottom",
              align: "start",
              sideOffset: 8,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.List, { children: [
                configs.map((config) => {
                  const isSelected = selectedStableIds.includes(config.stableId);
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    MenuCommand.Item,
                    {
                      value: config.name,
                      className: "cursor-pointer",
                      onSelect: () => handleToggleConfig(config.stableId),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grow truncate", children: config.name }),
                        isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tick", className: "text-purple-primary size-5 shrink-0" }) : null
                      ]
                    },
                    config.stableId
                  );
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Empty, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-secondary px-md py-xs text-xs", children: t2("common:no_data_to_display") }) })
              ] })
            }
          )
        ] }) }) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Switch,
          {
            id: "skip-initial-screening",
            checked: skipInitialScreening,
            onCheckedChange: setSkipInitialScreening
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "skip-initial-screening", className: "text-s text-grey-primary", children: t2("continuousScreening:configurations.csv.confirm.skip_initial_screening") })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onBack, children: t2("common:cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "primary",
          onClick: () => onNext({
            monitor: String(placeUnderMonitoring),
            skip_screening: String(skipInitialScreening),
            ...placeUnderMonitoring ? { monitoring_config_id: selectedStableIds } : {}
          }),
          disabled: !canValidate,
          children: t2("continuousScreening:configurations.csv.confirm.validate_upload")
        }
      )
    ] })
  ] });
}
function RemovableConfigTag({ label, onRemove }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tag,
    {
      color: "purple",
      size: "small",
      className: "group cursor-pointer hover:bg-purple-primary/20 transition-colors",
      onClick: (event) => {
        event.preventDefault();
        event.stopPropagation();
        onRemove();
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "max-w-[20ch] truncate", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "cross", className: "size-3 shrink-0" })
      ] })
    }
  );
}
function PastUploads({
  objectType,
  configsPerObjectType
}) {
  const { t: t2 } = useTranslation("upload");
  const formatDateTime = useFormatDateTime();
  const uploadLogsQuery = useUploadTableQuery(objectType, true, {
    refetchInterval: 1e3
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2xl flex flex-col gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "subtitle1", children: t2("upload:past_uploads") }),
    Array.isArray(uploadLogsQuery?.data) && uploadLogsQuery.data.map((uploadLog) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-xs ", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: uploadLog.finished_at ? t2("upload:uploaded_at_date", {
          date: formatDateUpload(uploadLog.finished_at, formatDateTime)
        }) : t2("upload:started_at_date", {
          date: formatDateUpload(uploadLog.started_at, formatDateTime)
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-grey-secondary", children: t2("upload:record_vs_ingested", {
          linesProcessed: uploadLog.lines_processed,
          total: uploadLog.num_rows_ingested
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TagStatus, { status: uploadLog.status })
    ] }) }, uploadLog.started_at))
  ] });
}
function TagStatus({ status }) {
  const { t: t2 } = useTranslation(["upload"]);
  const color = M(status).with("pending", "progressing", () => "yellow").with("success", () => "green").with("failure", () => "red").otherwise(() => "grey");
  const text = t2(`upload:status_${status}`);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color, children: text });
}
function formatDateUpload(date, formatDateTime) {
  const hour = formatDateTime(date, { hour: "numeric", minute: "numeric" });
  const shortDate = formatDateTime(date, { day: "2-digit", month: "2-digit", year: "numeric" });
  return `${hour} - ${shortDate}`;
}
const ConfigurationsPage = ({ canEdit, configurations, datasets, isAdmin }) => {
  const { t: t2 } = useTranslation(["common", "continuousScreening", "navigation"]);
  const { formatItemName } = useDatasetTitle();
  const [creationModalOpen, setCreationModalOpen] = reactExports.useState(false);
  const navigate = useAgnosticNavigation();
  const [editingConfig, setEditingConfig] = reactExports.useState(null);
  const [draft, setDraft] = reactExports.useState(null);
  const [updatedConfig, setUpdatedConfig] = reactExports.useState(null);
  const configsPerObjectType = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const config of configurations) {
      for (const objectType of config.objectTypes) {
        const existing = map.get(objectType);
        if (existing) {
          existing.push(config);
        } else {
          map.set(objectType, [config]);
        }
      }
    }
    return map;
  }, [configurations]);
  const handlePanelOpenChange = () => {
    setEditingConfig(null);
    setDraft(null);
    setUpdatedConfig(null);
  };
  const handleCreationSubmit = (value) => {
    const qs = QueryString.stringify(value, { addQueryPrefix: true });
    navigate({
      pathname: "/continuous-screening/create",
      search: qs
    });
  };
  const handleRowClick = (baseConfig) => {
    const datasetsMap = makeDatasetsMap(baseConfig.datasets);
    const newConfig = {
      name: baseConfig.name,
      description: baseConfig.description ?? "",
      mappingConfigs: baseConfig.objectTypes.map((ot) => ({ objectType: ot, ftmEntity: null, fieldMapping: {} })),
      matchThreshold: baseConfig.matchThreshold,
      matchLimit: baseConfig.matchLimit,
      inboxId: baseConfig.inboxId,
      inboxName: null,
      datasets: datasetsMap
    };
    setEditingConfig(baseConfig);
    setDraft(newConfig);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Main, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Content, { width: "table", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-md", children: isAdmin ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScreeningNavigationTabs,
      {
        actions: canEdit ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: () => setCreationModalOpen(true), children: t2("continuousScreening:configurations.add_configuration") }) : void 0
      }
    ) : null }),
    M(configurations).with(z.nullish, () => null).with(
      z.array(),
      (configurations2) => configurations2.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm items-center justify-center py-2xl border border-grey-border rounded-lg bg-surface-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "scan-eye", className: "size-10 text-purple-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("continuousScreening:configurations.list.empty") }),
        canEdit ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", onClick: () => setCreationModalOpen(true), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4" }),
          t2("continuousScreening:configurations.add_configuration")
        ] }) : null
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(GridTable.Table, { className: "grid-cols-[minmax(0,_33.33%)_repeat(4,_1fr)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GridTable.Row, { isHeader: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: t2("continuousScreening:configurations.list.column.name") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: t2("continuousScreening:configurations.list.column.datasets") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: t2("continuousScreening:configurations.list.column.object_types") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: t2("continuousScreening:configurations.list.column.target_inbox") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: "" })
        ] }),
        configurations2.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          GridTable.Row,
          {
            className: "hover:bg-grey-background-light",
            onClick: () => handleRowClick(item),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(GridTable.Cell, { className: "flex gap-md items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: item.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CopyToClipboardButton, { toCopy: item.stableId, className: "min-w-40", size: "chip", rounded: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: item.stableId }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { className: "min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-w-0 w-full max-w-[20vw] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                ExpandableGroupTagLine,
                {
                  items: item.datasets.map((d) => {
                    const resolvedItem = findDatasetOrTopicByKey(datasets, d);
                    const itemName = resolvedItem ? formatItemName(resolvedItem) : d;
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", className: "w-fit", children: itemName }, d);
                  }),
                  overflowBehavior: "popover"
                }
              ) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { className: "min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-w-0 w-full max-w-[20vw] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                ExpandableGroupTagLine,
                {
                  items: item.objectTypes.map((ot) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: ot }, ot))
                }
              ) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: item.inbox?.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelAddCsv, { configuration: item, configsPerObjectType }) })
            ]
          },
          item.id
        ))
      ] })
    ).exhaustive(),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CreationModal, { open: creationModalOpen, onOpenChange: setCreationModalOpen, onSubmit: handleCreationSubmit }),
    editingConfig && draft ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Root, { open: true, onOpenChange: handlePanelOpenChange, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ConfigurationPanel,
        {
          baseConfig: editingConfig,
          newConfig: draft,
          onUpdate: (config) => {
            setUpdatedConfig(config);
          }
        }
      ),
      updatedConfig ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        EditionValidationPanel,
        {
          baseConfig: editingConfig,
          updatedConfig,
          datasets,
          onCancel: () => setUpdatedConfig(null)
        }
      ) : null
    ] }) : null
  ] }) });
};
function ContinuousScreeningConfigurations() {
  const {
    canEdit,
    configurations,
    datasets,
    isAdmin
  } = Route$1f.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ConfigurationsPage, { canEdit, configurations, datasets, isAdmin });
}
export {
  ContinuousScreeningConfigurations as component
};
