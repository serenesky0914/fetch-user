import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { data } from "../mock/mockdata";

export default function RichObjectTreeView() {
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <>
      <div className="container mx-auto px-4 mt-50 flex justify-evenly flex-col md:flex-row w-screen m-3 flex-auto">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="p-30">
            <h1 className="text-3xl font-bold mb-10">Please enter your name and pick the Sectors you are currently involved in.</h1>
            <div className="name-input mb-10">
              <label className="text-gray-700 text-sm font-bold mb-2">Name : </label>
              <input className="name"></input>
            </div>
            <div className="sectors mb-10">
              <label>Sectors : </label>
              <TreeView
                aria-label="rich object"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpanded={["root"]}
                defaultExpandIcon={<ChevronRightIcon />}
                sx={{ height: 110, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
              >
                {renderTree(data)}
              </TreeView>
            </div>
            <div className="agree mb-10">
              <input type='checkbox'></input>
              <label>Agree to terms</label>
            </div>
            <div className="actions">
              <button className="">Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
