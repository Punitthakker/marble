import { Q as jsxRuntimeExports, M as reactExports } from "./server.mjs";
import { C as CustomerGraphProvider, R as ReactFlowProvider, e as graphI18n, f as useSelectedObject, h as useGraphStructureActions, j as useGraphAnnotationsActions, k as useGraphStats, r as resolveTitle, n as nodeKey, a as useGraphInteractionActions, l as useSelectionMode, m as useCheckedNodeIds, o as useSetSelectedObject, p as useGraphStructure, q as useSetGraphStats, u as useLaidOutGraph, E as EMPTY_HOVER_TRAIL, s as shortestPathUnion, G as GraphIndexProvider, i as index, g as graphFitViewOptions, b as graphEdgeTypes, c as graphNodeTypes, d as GraphMeasuredLayout, t as Controls, A as AutoLayoutControlButton, v as ControlButton, O as ObjectTagLineSkeleton, w as applyVisibilityFilters, x as rootNodeId, y as useIsNodeChecked, z as subEntityIcon, B as parseNodeKey, D as useObjectTags, F as ObjectTagLine } from "./use-laid-out-graph-DCX5NTEx.mjs";
import { u as useGraphSession, t as tableFilterOptions } from "./GraphSessionContext-DR4cbEeZ.mjs";
import { u as useTheme } from "./ThemeContext-DjRULCu0.mjs";
import { u as useTranslation, aq as Card, B as Button, I as Icon, d as cn, M as MenuCommand, an as Panel } from "./Tabs-CzpyUi7T.mjs";
import { u as useGraphViewSettings, C as CLUSTER_THRESHOLD_OPTIONS } from "./graph-CqpSMa0d.mjs";
import { T as TagPreview } from "./TagPreview-DaOqtPxx.mjs";
import { C as ClientCommentForm, u as useCreateAnnotationMutation } from "./ClientCommentForm-CxGdh-J3.mjs";
import { u as useOrganizationObjectTags } from "./organization-object-tags-BKGicIcs.mjs";
import { u as useQueryClient } from "./query-BmG5BEas.mjs";
import { T as Tag, z as zt } from "./create-context-k6HmQ6bB.mjs";
import { a2 as M, aS as z } from "./services-middleware-nMulUXHZ.mjs";
import { t as toggle } from "./array-BFSjnO9c.mjs";
import { C as ClientObjectTagList, u as useScoreLatestQuery, S as ScoreDetailPanel } from "./get-score-latest-3W-Su_jV.mjs";
import { u as useOrganizationUsers } from "./organization-users-CEJGnALa.mjs";
import { M as Markdown } from "./Markdown-Djw5Zezo.mjs";
import { A as Avatar } from "./Avatar-DDGL3Siw.mjs";
import { E as EventTime } from "./Time-CKTfEtti.mjs";
import { S as Spinner } from "./Spinner-DmLieYoS.mjs";
import { d as debounce } from "./curry-D3P8tFW_.mjs";
import { u as useObjectDetailsQuery, g as DataFields } from "./DataField-BczNbAhi.mjs";
import { u as useGetAnnotationsQuery } from "./get-annotations-DHuYMH09.mjs";
import { u as useDataModel } from "./data-model-Dfj0lN5a.mjs";
import { C as Checkbox } from "./Checkbox-C8nszDsh.mjs";
import { S as Switch } from "./Switch-BV-_0Knl.mjs";
import { T as ThresholdRange } from "./ThresholdRange-CusKNWqi.mjs";
import { E as ExpandableGroupTagLine } from "./ExpandableGroupTagLine-MgT0uQKb.mjs";
import { S as SCORING_LEVELS_COLORS, a as SCORING_LEVELS_LABEL_KEYS } from "./display-TKj7AN5a.mjs";
function personListItemKey(item) {
  return item.id;
}
function personRefFromData(data) {
  return {
    objectType: data.objectType,
    objectId: data.objectId,
    label: data.label,
    riskLevel: data.riskLevel,
    semanticType: data.semanticType,
    subEntity: data.subEntity
  };
}
function personRefFromRfNode(node) {
  return personRefFromData(node.data);
}
function pivotRefFromData(data) {
  return {
    objectType: data.objectType,
    objectId: data.value,
    label: data.label
  };
}
function pivotRefFromRfNode(node) {
  return pivotRefFromData(node.data);
}
function personListItemsFromMemberIds(memberIds, allNodes) {
  const nodesById = new Map(allNodes.map((node) => [node.id, node]));
  const items = [];
  for (const id of memberIds) {
    const node = nodesById.get(id);
    if (node?.type === "person") {
      items.push({ type: "person", id, ref: personRefFromData(node.data) });
      continue;
    }
    if (node?.type === "pivot") {
      items.push({ type: "pivot", id, ref: pivotRefFromData(node.data) });
    }
  }
  return items;
}
function toPersonListItem(node, allNodes) {
  if (node.type === "person") return { type: "person", id: node.id, ref: personRefFromData(node.data) };
  if (node.type !== "cluster") return null;
  return {
    type: "cluster",
    id: node.id,
    ref: personRefFromData(node.data.root),
    nodeCount: node.data.nodeCount,
    internalEdgeCount: node.data.internalEdgeCount,
    members: personListItemsFromMemberIds(node.data.memberIds, allNodes)
  };
}
function connectedPersonListItems(visibleNodes, neighborIds, allNodes) {
  if (!neighborIds) return [];
  const items = [];
  for (const node of visibleNodes) {
    if (!neighborIds.has(node.id)) continue;
    const item = toPersonListItem(node, allNodes);
    if (item) items.push(item);
  }
  return items;
}
function samePersonListItems(a, b) {
  if (a.length !== b.length) return false;
  return a.every((item, i) => {
    const other = b[i];
    if (other == null || item.type !== other.type || item.id !== other.id) return false;
    if (item.type === "cluster" && other.type === "cluster") {
      return item.nodeCount === other.nodeCount && item.internalEdgeCount === other.internalEdgeCount && samePersonListItems(item.members, other.members);
    }
    return true;
  });
}
function GraphImpl({ data, dataModel }) {
  const { t } = useTranslation(graphI18n);
  const theme = useTheme();
  const { showEdgeLabels, setShowEdgeLabels, showHypernodes } = useGraphViewSettings();
  const selectedObject = useSelectedObject();
  const setSelectedObject = useSetSelectedObject();
  const { hiddenNodeIds } = useGraphStructure();
  const setGraphStats = useSetGraphStats();
  const { hoverNode, hoverEdge } = useGraphInteractionActions();
  const selectionMode = useSelectionMode();
  const checkedNodeIds = useCheckedNodeIds();
  const { nodes, edges, onNodesChange, onEdgesChange, autoLayoutElements, flatGraph, visibleGraph, graphIndex } = useLaidOutGraph({
    data,
    dataModel
  });
  const graphStats = reactExports.useMemo(() => {
    const countWith = (hidden) => applyVisibilityFilters(flatGraph.nodes, flatGraph.edges, hidden, flatGraph.startKey, showHypernodes).nodes.length;
    const unhiddenCount = hiddenNodeIds.size === 0 ? visibleGraph.nodes.length : countWith(/* @__PURE__ */ new Set());
    const hiddenCount = unhiddenCount - visibleGraph.nodes.length;
    if (checkedNodeIds.size === 0) return { hiddenCount, hidePreviewOrphans: 0 };
    const withChecked = countWith(/* @__PURE__ */ new Set([...hiddenNodeIds, ...checkedNodeIds]));
    const removed = visibleGraph.nodes.length - withChecked;
    return { hiddenCount, hidePreviewOrphans: Math.max(0, removed - checkedNodeIds.size) };
  }, [flatGraph, hiddenNodeIds, checkedNodeIds, visibleGraph, showHypernodes]);
  reactExports.useEffect(() => {
    setGraphStats(graphStats);
  }, [graphStats, setGraphStats]);
  const connectedPersonsForNode = reactExports.useCallback(
    (nodeId) => connectedPersonListItems(nodes, graphIndex.neighbors.get(nodeId), flatGraph.nodes),
    [graphIndex, nodes, flatGraph.nodes]
  );
  reactExports.useEffect(() => {
    if (!selectedObject || selectedObject.nodeType === "cluster" || selectedObject.nodeType === "hypernode") return;
    const nodeId = nodeKey(selectedObject.objectType, selectedObject.objectId);
    if (!nodes.some((n) => n.id === nodeId)) return;
    const persons = connectedPersonsForNode(nodeId);
    if (samePersonListItems(selectedObject.persons, persons)) return;
    setSelectedObject({ ...selectedObject, persons });
  }, [connectedPersonsForNode, nodes, selectedObject, setSelectedObject]);
  reactExports.useEffect(() => {
    if (showHypernodes || selectedObject?.nodeType !== "hypernode") return;
    const startNode = flatGraph.nodes.find(
      (n) => n.id === flatGraph.startKey && n.type === "person"
    );
    if (!startNode) return;
    setSelectedObject({
      nodeType: "person",
      ...personRefFromRfNode(startNode),
      persons: connectedPersonsForNode(startNode.id)
    });
  }, [showHypernodes, selectedObject, flatGraph, connectedPersonsForNode, setSelectedObject]);
  const onNodeClick = reactExports.useCallback(
    (_event, node) => {
      if (node.type === "person") {
        setSelectedObject({
          nodeType: "person",
          ...personRefFromRfNode(node),
          persons: connectedPersonsForNode(node.id)
        });
        return;
      }
      if (node.type === "cluster") {
        setSelectedObject({
          nodeType: "cluster",
          objectType: node.data.root.objectType,
          objectId: node.data.root.objectId,
          label: node.data.root.label,
          nodeCount: node.data.nodeCount,
          internalEdgeCount: node.data.internalEdgeCount,
          persons: personListItemsFromMemberIds(node.data.memberIds, flatGraph.nodes)
        });
        return;
      }
      if (node.type === "hypernode") {
        setSelectedObject({
          nodeType: "hypernode",
          objectType: node.data.objectType,
          objectId: node.data.objectId,
          hypernodeCount: node.data.count,
          persons: []
        });
        return;
      }
      setSelectedObject({
        nodeType: "pivot",
        ...pivotRefFromRfNode(node),
        persons: connectedPersonsForNode(node.id)
      });
    },
    [connectedPersonsForNode, flatGraph.nodes, setSelectedObject]
  );
  const onNodeMouseEnter = reactExports.useCallback(
    (_event, node) => {
      if (selectionMode) return;
      hoverNode(
        node.id,
        node.type === "person" ? shortestPathUnion(graphIndex, flatGraph.startKey, node.id) : EMPTY_HOVER_TRAIL
      );
    },
    [selectionMode, hoverNode, graphIndex, flatGraph.startKey]
  );
  const onNodeMouseLeave = reactExports.useCallback(() => {
    hoverNode(null);
  }, [hoverNode]);
  const onEdgeMouseEnter = reactExports.useCallback(
    (_event, edge) => {
      hoverEdge(edge.id);
    },
    [hoverEdge]
  );
  const onEdgeMouseLeave = reactExports.useCallback(
    (event) => {
      const next = event.relatedTarget;
      if (next instanceof Element && next.closest("[data-graph-edge-label]")) return;
      hoverEdge(null);
    },
    [hoverEdge]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GraphIndexProvider, { index: graphIndex, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    index,
    {
      className: "h-full min-h-0",
      nodeTypes: graphNodeTypes,
      edgeTypes: graphEdgeTypes,
      nodes,
      edges,
      onNodesChange,
      onEdgesChange,
      onNodeClick,
      onNodeMouseEnter,
      onNodeMouseLeave,
      onEdgeMouseEnter,
      onEdgeMouseLeave,
      fitView: true,
      fitViewOptions: graphFitViewOptions,
      maxZoom: 5,
      minZoom: 0.1,
      proOptions: { hideAttribution: true },
      colorMode: theme.theme,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GraphMeasuredLayout, { layoutElements: autoLayoutElements }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Controls, { position: "bottom-left", className: "z-10", fitViewOptions: graphFitViewOptions, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AutoLayoutControlButton, { layoutElements: autoLayoutElements }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ControlButton,
            {
              onClick: () => setShowEdgeLabels(!showEdgeLabels),
              title: showEdgeLabels ? t("graph:controls.hide_edge_labels") : t("graph:controls.show_edge_labels"),
              "aria-label": showEdgeLabels ? t("graph:controls.hide_edge_labels") : t("graph:controls.show_edge_labels"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: showEdgeLabels ? "eye-slash" : "eye", className: "size-4" })
            }
          )
        ] })
      ]
    }
  ) });
}
function BulkAddTagsMenu({ checkedKeys, disabled }) {
  const { t } = useTranslation([...graphI18n, "cases"]);
  const { addTagsToNodes } = useGraphAnnotationsActions();
  const { orgObjectTags } = useOrganizationObjectTags();
  const createAnnotationMutation = useCreateAnnotationMutation();
  const queryClient = useQueryClient();
  const [open, setOpen] = reactExports.useState(false);
  const [selectedTagIds, setSelectedTagIds] = reactExports.useState([]);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const handleOpenChange = (next) => {
    setOpen(next);
    if (!next) {
      setSelectedTagIds([]);
    }
  };
  const handleConfirm = async () => {
    if (selectedTagIds.length === 0 || checkedKeys.size === 0) return;
    setIsSubmitting(true);
    try {
      const persons = [...checkedKeys].map(parseNodeKey);
      const personsToUpdate = persons.flatMap((person) => {
        const cached = queryClient.getQueriesData({
          queryKey: ["annotations", person.objectType, person.objectId]
        });
        const existing = cached.find(([, data]) => data != null)?.[1]?.annotations.tags.map((a) => a.payload.tag_id) ?? [];
        const addedTags = selectedTagIds.filter((id) => !existing.includes(id));
        return addedTags.length > 0 ? [{ person, addedTags }] : [];
      });
      if (personsToUpdate.length > 0) {
        const results = await Promise.allSettled(
          personsToUpdate.map(
            ({ person, addedTags }) => createAnnotationMutation.mutateAsync({
              tableName: person.objectType,
              objectId: person.objectId,
              type: "tag",
              payload: {
                addedTags,
                removedAnnotations: []
              }
            })
          )
        );
        const succeeded = personsToUpdate.flatMap((personToUpdate, index2) => {
          const result = results[index2];
          return result?.status === "fulfilled" && result.value.success ? [personToUpdate] : [];
        });
        if (succeeded.length > 0) {
          await Promise.all(
            succeeded.map(
              ({ person }) => queryClient.invalidateQueries({ queryKey: ["annotations", person.objectType, person.objectId] })
            )
          );
          addTagsToNodes(
            succeeded.map(({ person, addedTags }) => ({
              nodeId: nodeKey(person.objectType, person.objectId),
              tagIds: addedTags
            }))
          );
        }
        if (succeeded.length !== personsToUpdate.length) {
          zt.error(t("common:errors.unknown"));
          return;
        }
      }
      setSelectedTagIds([]);
      setOpen(false);
    } catch {
      zt.error(t("common:errors.unknown"));
    } finally {
      setIsSubmitting(false);
    }
  };
  if (disabled) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "primary", appearance: "stroked", size: "small", disabled: true, children: t("graph:selection.add_tags") });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { persistOnSelect: true, open, onOpenChange: handleOpenChange, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "primary", appearance: "stroked", size: "small", children: t("graph:selection.add_tags") }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Content, { side: "bottom", align: "end", sideOffset: 4, className: "w-85", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.List, { children: [
        orgObjectTags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          MenuCommand.Item,
          {
            value: tag.id,
            onSelect: () => setSelectedTagIds((prev) => toggle(prev, tag.id)),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TagPreview, { name: tag.name }),
              selectedTagIds.includes(tag.id) ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tick", className: "text-purple-primary size-5" }) : null
            ]
          },
          tag.id
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Empty, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: t("cases:case_detail.add_a_tag.empty") }) })
      ] }),
      selectedTagIds.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-grey-border flex justify-end gap-sm overflow-x-auto border-t p-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.HeadlessItem, { children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { mode: "icon", type: "button", disabled: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "spinner", className: "size-4 animate-spin" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "small", type: "button", onClick: handleConfirm, children: t("graph:selection.confirm") }) }) }) : null
    ] })
  ] });
}
function GraphSelectionToolbar() {
  const { t } = useTranslation(graphI18n);
  const { hideNodes } = useGraphStructureActions();
  const graphStats = useGraphStats();
  const { enterSelectionMode, exitSelectionMode, clearCheckedNodes } = useGraphInteractionActions();
  const selectionMode = useSelectionMode();
  const checkedNodeIds = useCheckedNodeIds();
  const hasCheckedNodes = checkedNodeIds.size > 0;
  const handleHide = () => {
    hideNodes([...checkedNodeIds]);
    clearCheckedNodes();
  };
  if (!selectionMode) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute top-sm end-sm z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        type: "button",
        variant: "secondary",
        appearance: "stroked",
        size: "small",
        className: "pointer-events-auto",
        onClick: enterSelectionMode,
        children: t("graph:selection.select_entities")
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "pointer-events-auto absolute top-sm end-sm z-20",
        "bg-surface-card flex items-center gap-sm rounded-lg px-sm py-xs shadow-md"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "primary", appearance: "stroked", size: "small", disabled: true, children: t("graph:selection.add_to_case") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BulkAddTagsMenu, { checkedKeys: checkedNodeIds, disabled: !hasCheckedNodes }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            variant: "secondary",
            appearance: "stroked",
            size: "small",
            disabled: !hasCheckedNodes,
            onClick: handleHide,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "eye-slash", className: "size-4" }),
              t("graph:selection.hide", { count: checkedNodeIds.size }),
              graphStats.hidePreviewOrphans > 0 ? t("graph:selection.hide_orphans", { count: graphStats.hidePreviewOrphans }) : null
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", appearance: "link", size: "small", onClick: exitSelectionMode, children: t("common:cancel") })
      ]
    }
  );
}
const MAX_EVENTS_BEFORE_DEBOUNCE = 60;
const EVENT_DELAY = 100;
const ClientComments = ({ objectType, objectId, annotationsQuery, root }) => {
  const { t } = useTranslation(["common"]);
  const queryClient = useQueryClient();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-grey-border bg-surface-card flex flex-col rounded-lg border overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-md", children: M(annotationsQuery).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-6" }) })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-center", children: t("common:generic_fetch_data_error") }) })).with({ isSuccess: true }, ({ data }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Comments, { comments: data.annotations.comments, root })).exhaustive() }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-grey-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ClientCommentForm,
      {
        tableName: objectType,
        objectId,
        onAnnotateSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["annotations", objectType, objectId] });
        },
        className: "rounded-t-none"
      }
    ) })
  ] });
};
const Comments = ({ comments: _comments, root }) => {
  const comments = reactExports.useMemo(() => _comments.toReversed(), [_comments]);
  const { t } = useTranslation(["common"]);
  const containerRef = reactExports.useRef(null);
  const [showAll, setShowAll] = reactExports.useState(false);
  const [olderCommentCount, setOlderCommentCount] = reactExports.useState(0);
  const [newerCommentCount, setNewerCommentCount] = reactExports.useState(0);
  const { getOrgUserById } = useOrganizationUsers();
  reactExports.useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const items = Array.from(container.children);
    let callback = () => {
      let itemsBeforeVisible = 0;
      let itemsAfterVisible = 0;
      for (const item of items) {
        const itemRect = item.getBoundingClientRect();
        if (itemRect.bottom + (root.current?.scrollTop ?? 0) < containerRect.top) {
          itemsBeforeVisible++;
        } else if (itemRect.top + (root.current?.scrollTop ?? 0) > containerRect.bottom) {
          itemsAfterVisible++;
        }
      }
      setNewerCommentCount(itemsBeforeVisible);
      setOlderCommentCount(itemsAfterVisible);
    };
    if (comments.length > MAX_EVENTS_BEFORE_DEBOUNCE) {
      callback = debounce({ delay: EVENT_DELAY }, callback);
    }
    callback();
    container.addEventListener("scroll", callback);
    return () => container.removeEventListener("scroll", callback);
  }, [comments]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-0 flex w-full flex-col gap-md", children: [
    comments.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute start-0 top-0 flex h-full w-6 flex-col items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border -z-10 h-full w-px" }) }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-card sticky start-0 top-0 z-[-15] flex w-full items-center justify-between ps-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary text-small", children: t("cases:investigation.more_recent", { number: newerCommentCount }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", onClick: () => setShowAll(!showAll), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: showAll ? "eye-slash" : "eye", className: "size-3.5" }),
        showAll ? t("common:collapse") : t("common:expand")
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: containerRef,
        className: cn("flex flex-col gap-md overflow-x-hidden", {
          "max-h-[400px] overflow-y-scroll": !showAll
        }),
        children: comments.map((comment) => {
          const user = getOrgUserById(comment.annotated_by);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { firstName: user?.firstName, lastName: user?.lastName, size: "xxs", color: "grey" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary whitespace-pre-wrap text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Markdown, { children: comment.payload.text }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(EventTime, { time: comment.created_at })
          ] }, comment.id);
        })
      }
    ),
    showAll ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: cn("bg-surface-card text-grey-secondary sticky start-0 top-0 z-[-15] ps-lg text-xs", {
          "text-grey-white": showAll
        }),
        children: comments.length === 0 || olderCommentCount === 0 ? t("cases:investigation.no_older") : t("cases:investigation.older", { number: olderCommentCount })
      }
    )
  ] });
};
function GraphMultiFilterSelect({ options, value, onToggle, placeholder }) {
  const selectedOptions = options.filter((option) => value.includes(option.value));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { persistOnSelect: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.SelectButton, { className: "w-full", size: "medium", "aria-label": placeholder, children: selectedOptions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-placeholder text-s", children: placeholder }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      ExpandableGroupTagLine,
      {
        classname: "gap-xs",
        items: selectedOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "purple", size: "small", children: option.label }, option.value)),
        moreButton: (overflow) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { color: "purple", size: "small", className: "shrink-0", children: [
          "+",
          overflow
        ] })
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { sameWidth: true, align: "start", sideOffset: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      MenuCommand.Item,
      {
        value: `${option.label} ${option.value}`,
        className: "flex items-center justify-start gap-sm",
        onSelect: () => onToggle(option.value),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { size: "small", checked: value.includes(option.value) }),
          option.label
        ]
      },
      option.value
    )) }) })
  ] });
}
function isClusterThreshold(value) {
  return CLUSTER_THRESHOLD_OPTIONS.includes(value);
}
function ClusterThresholdControl() {
  const { t } = useTranslation(graphI18n);
  const { clusterThreshold, setClusterThreshold } = useGraphViewSettings();
  const thresholdValue = clusterThreshold === 0 ? t("graph:cluster.threshold.off") : String(clusterThreshold);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.SelectButton, { className: "w-full", size: "medium", children: t("graph:cluster.threshold.button", { value: thresholdValue }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { sameWidth: true, align: "start", sideOffset: 4, className: "min-w-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-md", onPointerDown: (event) => event.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ThresholdRange,
      {
        title: t("graph:cluster.threshold.title"),
        defaultDescription: t("graph:cluster.threshold.description"),
        value: clusterThreshold,
        onChange: (value) => {
          if (isClusterThreshold(value)) setClusterThreshold(value);
        },
        values: CLUSTER_THRESHOLD_OPTIONS.map((option) => ({
          value: option,
          label: option === 0 ? t("graph:cluster.threshold.option_off") : t("graph:cluster.threshold.option", { count: option }),
          color: "var(--color-purple-primary)"
        })),
        initialColor: "var(--color-purple-primary)",
        max: CLUSTER_THRESHOLD_OPTIONS.at(-1)
      }
    ) }) })
  ] });
}
function DetailCardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ObjectTagLineSkeleton, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border h-6 w-full animate-pulse rounded-sm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border h-6 w-full animate-pulse rounded-sm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border h-6 w-3/4 animate-pulse rounded-sm" })
    ] })
  ] });
}
function QueryError({ onRetry }) {
  const { t } = useTranslation(["common"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary text-xs", children: t("common:generic_fetch_data_error") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "small", onClick: onRetry, children: t("common:retry") })
  ] });
}
function ScoreDetailFetchPanel({
  open,
  onOpenChange,
  objectType,
  objectId
}) {
  const { t } = useTranslation(["client360"]);
  const { scoringSettings } = useGraphViewSettings();
  const scoreQuery = useScoreLatestQuery(objectType, objectId);
  if (scoringSettings == null) return null;
  return M(scoreQuery).with({ isSuccess: true, data: { score: z.nonNullable } }, ({ data: { score } }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScoreDetailPanel,
    {
      open,
      onOpenChange,
      objectType,
      activeScore: score,
      scoringSettings
    }
  )).otherwise(() => /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Root, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Content, { className: "flex flex-col gap-lg", children: scoreQuery.isError ? /* @__PURE__ */ jsxRuntimeExports.jsx(QueryError, { onRetry: () => scoreQuery.refetch() }) : scoreQuery.isSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s text-grey-secondary", children: t("client360:client_detail.score_panel.evaluation_unavailable") }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-6" }) }) }) }) }));
}
function ObjectRiskBadge({ objectType, objectId, riskLevel }) {
  const { t } = useTranslation(["cases", "user-scoring"]);
  const { maxRiskLevel } = useGraphViewSettings();
  const [panelOpen, setPanelOpen] = reactExports.useState(false);
  if (riskLevel == null || maxRiskLevel == null) return null;
  const scoreColor = SCORING_LEVELS_COLORS[maxRiskLevel][riskLevel] ?? "inherit";
  const scoreLabel = t(SCORING_LEVELS_LABEL_KEYS[maxRiskLevel][riskLevel] ?? riskLevel.toString());
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: (event) => {
          event.stopPropagation();
          setPanelOpen(true);
        },
        className: "inline-flex cursor-pointer items-center gap-xs rounded-full border px-sm py-px text-xs",
        style: { backgroundColor: `${scoreColor}20`, borderColor: scoreColor },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 shrink-0 rounded-full", style: { backgroundColor: scoreColor } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            t("cases:manager.client.risk_label"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: scoreLabel })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "visibility", className: "size-3" })
        ]
      }
    ),
    panelOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScoreDetailFetchPanel,
      {
        open: panelOpen,
        onOpenChange: setPanelOpen,
        objectType,
        objectId
      }
    ) : null
  ] });
}
function ObjectTags({ objectType, objectId }) {
  const { isPending, tags } = useObjectTags(objectType, objectId);
  if (isPending) return /* @__PURE__ */ jsxRuntimeExports.jsx(ObjectTagLineSkeleton, {});
  if (tags.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ObjectTagLine, { tags });
}
function PersonRow({ item, showTags }) {
  const { t } = useTranslation(graphI18n);
  const setSelectedObject = useSetSelectedObject();
  const { hoverNode } = useGraphInteractionActions();
  const selectionMode = useSelectionMode();
  const checkableId = rootNodeId(item.id);
  const isNodeChecked = useIsNodeChecked(checkableId);
  const { toggleCheckedNode } = useGraphInteractionActions();
  const title = resolveTitle(item.ref.label, item.ref.objectId);
  function handleClick() {
    if (selectionMode) return;
    if (item.type === "cluster") {
      setSelectedObject({
        ...item.ref,
        nodeType: "cluster",
        nodeCount: item.nodeCount,
        internalEdgeCount: item.internalEdgeCount,
        persons: item.members
      });
      return;
    }
    setSelectedObject({ ...item.ref, nodeType: "person", persons: [item] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "li",
    {
      className: "-mx-xs rounded-sm px-xs py-2xs transition-colors border border-transparent hover:bg-purple-background-light hover:border hover:border-purple-border cursor-pointer",
      onMouseEnter: () => {
        if (!selectionMode) hoverNode(item.id);
      },
      onMouseLeave: () => hoverNode(null),
      onClick: handleClick,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex flex-wrap items-center gap-sm", htmlFor: checkableId, children: [
          selectionMode && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Checkbox,
            {
              size: "small",
              checked: isNodeChecked,
              onCheckedChange: () => toggleCheckedNode(checkableId),
              id: checkableId
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: subEntityIcon(item.ref), className: "size-4 shrink-0 text-purple-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: title }),
          item.type === "cluster" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary text-xs", children: t("graph:count.nodes", { count: item.nodeCount }) }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", size: "small", children: item.ref.objectType }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ObjectRiskBadge, { ...item.ref })
        ] }),
        showTags && item.type === "person" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ObjectTags, { ...item.ref }) : null
      ] })
    }
  );
}
const PERSON_LIST_PREVIEW_COUNT = 5;
function PersonListDetail({
  header,
  persons,
  showTags
}) {
  const { t } = useTranslation(graphI18n);
  const [showAll, setShowAll] = reactExports.useState(false);
  const structural = persons.filter((item) => item.type !== "pivot");
  const total = structural.length;
  const hasMore = total > PERSON_LIST_PREVIEW_COUNT;
  const displayedPersons = showAll || !hasMore ? structural : structural.slice(0, PERSON_LIST_PREVIEW_COUNT);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-sm", children: [
      header,
      total > displayedPersons.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: "small", color: "grey", children: t("graph:panel.items", { count: total }) }) : null
    ] }),
    total === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-grey-secondary text-xs", children: t("graph:panel.no_connected_nodes") }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-sm ps-md", children: displayedPersons.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(PersonRow, { item, showTags }, personListItemKey(item))) }),
      hasMore ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "small", onClick: () => setShowAll((prev) => !prev), children: showAll ? t("graph:panel.show_less") : t("graph:panel.show_more") }) : null
    ] })
  ] });
}
function GraphSettingsPanel() {
  const { t } = useTranslation(graphI18n);
  const dataModel = useDataModel();
  const {
    selectedTableNames,
    toggleTableName,
    relationGroups,
    selectedRelationGroupIds,
    toggleRelationGroup,
    isFilterDirty,
    refreshGraph,
    isGeneratingGraph
  } = useGraphSession();
  const { showRiskScore, setShowRiskScore, showTags, setShowTags, showHypernodes, setShowHypernodes } = useGraphViewSettings();
  const selectedObject = useSelectedObject();
  const { restoreHiddenNodes } = useGraphStructureActions();
  const { setNodeTagIds } = useGraphAnnotationsActions();
  const graphStats = useGraphStats();
  const objectType = selectedObject?.objectType ?? "";
  const objectId = selectedObject?.objectId ?? "";
  const hasSelection = !!selectedObject;
  const asideRef = reactExports.useRef(null);
  const tableOptions = reactExports.useMemo(() => tableFilterOptions(dataModel), [dataModel]);
  const detailsQuery = useObjectDetailsQuery(
    objectType,
    objectId,
    hasSelection && selectedObject.nodeType === "person"
  );
  const annotationsQuery = useGetAnnotationsQuery(
    objectType,
    objectId,
    false,
    hasSelection && selectedObject.nodeType === "person"
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { ref: asideRef, className: "flex min-h-0 flex-col gap-md overflow-y-auto p-md h-fit min-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        GraphMultiFilterSelect,
        {
          options: tableOptions,
          value: selectedTableNames,
          onToggle: toggleTableName,
          placeholder: t("graph:filter.tables.placeholder")
        }
      ),
      relationGroups.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        GraphMultiFilterSelect,
        {
          options: relationGroups,
          value: selectedRelationGroupIds,
          onToggle: toggleRelationGroup,
          placeholder: t("graph:filter.relations.placeholder")
        }
      ) : null,
      isFilterDirty ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "secondary",
          appearance: "stroked",
          size: "small",
          disabled: isGeneratingGraph,
          onClick: refreshGraph,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "restart-alt", className: cn("size-4", isGeneratingGraph && "animate-spin") }),
            t("graph:filter.refresh")
          ]
        }
      ) : null
    ] }),
    graphStats.hiddenCount > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", appearance: "stroked", size: "small", onClick: restoreHiddenNodes, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "eye", className: "size-4" }),
      t("graph:panel.show_hidden_nodes", { count: graphStats.hiddenCount })
    ] }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-grey-border bg-grey-background-light flex flex-col gap-sm rounded-md border p-md", children: selectedObject ? M(selectedObject).with({ nodeType: "person" }, (person) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-primary text-sm font-semibold", children: resolveTitle(person.label, person.objectId) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", size: "small", children: person.objectType }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ObjectRiskBadge, { ...person })
      ] }),
      M(detailsQuery).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx(QueryError, { onRetry: () => detailsQuery.refetch() })).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx(DetailCardSkeleton, {})).with({ isSuccess: true }, ({ data: objectDetails }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ClientObjectTagList,
          {
            tableName: objectType,
            objectId,
            onTagIdsChange: (tagIds) => setNodeTagIds(nodeKey(objectType, objectId), tagIds)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DataFields,
          {
            table: objectType,
            object: objectDetails,
            options: { hideLinks: true, maxVisibleFields: 6, displayExpandButton: true }
          }
        )
      ] })).exhaustive(),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ClientComments,
        {
          objectType,
          objectId,
          annotationsQuery,
          root: asideRef
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PersonListDetail,
        {
          header: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: t("graph:panel.connected_nodes") }),
          persons: person.persons,
          showTags
        }
      )
    ] })).with({ nodeType: "pivot" }, (pivot) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      PersonListDetail,
      {
        header: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-xs items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-orange-primary truncate text-sm font-semibold", children: pivot.objectId }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", size: "small", children: pivot.label })
        ] }) }),
        persons: pivot.persons,
        showTags
      }
    )).with({ nodeType: "cluster" }, (cluster) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      PersonListDetail,
      {
        header: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-secondary text-xs leading-none", children: t("graph:panel.grouped_branch") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "truncate text-sm flex gap-xs items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary font-semibold", children: t("graph:count.nodes", { count: cluster.nodeCount }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "dot", className: "size-3 text-grey-secondary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary", children: t("graph:count.edges", { count: cluster.internalEdgeCount }) })
          ] })
        ] }),
        persons: cluster.persons,
        showTags
      }
    )).with({ nodeType: "hypernode" }, (hypernode) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-secondary text-xs leading-none", children: t("graph:panel.hypernode") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-primary text-sm font-semibold", children: t("graph:panel.records_count_approx", { count: hypernode.hypernodeCount }) })
    ] })).exhaustive() : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-grey-secondary text-xs", children: t("graph:panel.select_node") }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "show-risk-score", className: "text-grey-primary cursor-pointer text-sm", children: t("graph:panel.show_risk_score") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { id: "show-risk-score", checked: showRiskScore, onCheckedChange: setShowRiskScore })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "show-tags", className: "text-grey-primary cursor-pointer text-sm", children: t("graph:panel.show_tags") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { id: "show-tags", checked: showTags, onCheckedChange: setShowTags })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "hide-hyper-connected-nodes", className: "text-grey-primary cursor-pointer text-sm", children: t("graph:panel.show_hyper_connected_nodes") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { id: "hide-hyper-connected-nodes", checked: showHypernodes, onCheckedChange: setShowHypernodes })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ClusterThresholdControl, {})
    ] })
  ] });
}
function SessionGraphCanvas({ placeholder, withCard = true }) {
  const dataModel = useDataModel();
  const { graphData, graphGeneration, graphSettings } = useGraphSession();
  if (!graphData) return placeholder;
  const startNode = graphData.nodes.find(
    (node) => node.type === graphData.start.type && node.id === graphData.start.id
  );
  const Component = withCard ? Card : "div";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CustomerGraphProvider,
    {
      ...graphSettings,
      initialSelectedObject: {
        nodeType: "person",
        objectType: graphData.start.type,
        objectId: graphData.start.id,
        label: startNode?.metadata?.label,
        riskLevel: startNode?.metadata?.riskLevel,
        persons: []
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Component, { className: "flex min-h-0 min-w-0 flex-1 flex-col overflow-x-hidden overflow-y-auto p-sm lg:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GraphSettingsPanel, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ReactFlowProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-100 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GraphSelectionToolbar, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GraphImpl, { data: graphData, dataModel })
        ] }) })
      ] })
    },
    graphGeneration
  );
}
export {
  ClientComments as C,
  SessionGraphCanvas as S
};
