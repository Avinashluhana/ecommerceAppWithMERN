import React from "react";
import "./sidebar.css";
import logo from "../../images/logo.png";
import { a } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="">
        <img src={logo} alt="Ecommerce" />
      </a>
      <a href="">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </a>
      <a>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Products">
            <a href="">
              <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
            </a>

            <a href="">
              <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
            </a>
          </TreeItem>
        </TreeView>
      </a>
      <a href="">
        <p>
          <ListAltIcon />
          Orders
        </p>
      </a>
      <a href="">
        <p>
          <PeopleIcon /> Users
        </p>
      </a>
      <a href="">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </a>
    </div>
  );
};

export default Sidebar;