import React, { useState } from "react";
import classes from "./SideNavLists.module.css";

import { ReactComponent as Dropdown } from "../util/icons/expand_less.svg";
import { ReactComponent as Inbox } from "../util/icons/inbox.svg";
import { ReactComponent as DriveFiles } from "../util/icons/drive_folder_upload.svg";
import { ReactComponent as Boards } from "../util/icons/dashboard_customize.svg";
import { ReactComponent as Updates } from "../util/icons/access_time.svg";
import { ReactComponent as Analytics } from "../util/icons/data_usage.svg";
import { ReactComponent as CRM } from "../util/icons/space_dashboard.svg";
import { ReactComponent as Ecommerce } from "../util/icons/sell.svg";
import { ReactComponent as CryptoC } from "../util/icons/payment.svg";
import { ReactComponent as Projects } from "../util/icons/lock_clock.svg";
import { ReactComponent as NFT } from "../util/icons/image_search.svg";
import { ReactComponent as Settings } from "../util/icons/tune.svg";
import { ReactComponent as Tag } from "../util/icons/tag.svg";
import { ReactComponent as Add } from "../util/icons/add_circle.svg";

function SideNavLists(props) {
  const dashboards = props.data.NavDashboard;
  const projects = props.data.Projects;

  const [dash, setDashboards] = useState(false);
  const [project, setProject] = useState(false);

  return (
    <>
      <div className={classes.dashboards}>
        <div className={classes.heading} onClick={()=>{setDashboards(!dash)}}>
          <p>Dashboards</p>
          <Dropdown className={classes.icon} />
        </div>
        <div className={dash ? classes.content : `${classes.content} ${classes.closed}`}>
          <div className={classes.tabs}>
            <div className={classes.name}>
              <Inbox className={classes.icon} />
              <span>Inbox</span>
            </div>
            <div className={dashboards.inbox < 1 ? "" : classes.noti}>
              {dashboards.inbox < 1 ? "" : dashboards.inbox}
            </div>
          </div>
          <div className={classes.tabs}>
            <div className={classes.name}>
              <DriveFiles className={classes.icon} />
              <span>Drive Files</span>
            </div>
            <div className={dashboards.drive_files < 1 ? "" : classes.noti}>
              {dashboards.drive_files < 1 ? "" : dashboards.drive_files}
            </div>
          </div>
          <div className={classes.tabs}>
            <div className={classes.name}>
              <Boards className={classes.icon} />
              <span>Boards</span>
            </div>
            <div className={dashboards.boards < 1 ? "" : classes.noti}>
              {dashboards.boards < 1 ? "" : dashboards.boards}
            </div>
          </div>
          <div className={classes.tabs}>
            <div className={classes.name}>
              <Updates className={classes.icon} />
              <span>Updates</span>
            </div>
            <div className={dashboards.updates < 1 ? "" : classes.noti}>
              {dashboards.updates < 1 ? "" : dashboards.updates}
            </div>
          </div>
          <div className={classes.tabs}>
            <div className={classes.name}>
              <Analytics className={classes.icon} />
              <span>Analytics</span>
            </div>
            <div className={dashboards.analytics < 1 ? "" : classes.noti}>
              {dashboards.analytics < 1 ? "" : dashboards.analytics}
            </div>
          </div>
          <div className={classes.tabs}>
            <div className={classes.name}>
              <CRM className={classes.icon} />
              <span>CRM Dashboard</span>
            </div>
            <div className={dashboards.crm_dashboard < 1 ? "" : classes.noti}>
              {dashboards.crm_dashboard < 1 ? "" : dashboards.crm_dashboard}
            </div>
          </div>
          <div className={classes.tabs}>
            <div className={classes.name}>
              <Ecommerce className={classes.icon} />
              <span>Ecommerce</span>
            </div>
            <div className={dashboards.ecommerce < 1 ? "" : classes.noti}>
              {dashboards.ecommerce < 1 ? "" : dashboards.ecommerce}
            </div>
          </div>
          <div className={classes.tabs}>
            <div className={classes.name}>
              <CryptoC className={classes.icon} />
              <span>Cryptocurrency</span>
            </div>
            <div className={dashboards.cryptocurrency < 1 ? "" : classes.noti}>
              {dashboards.cryptocurrency < 1 ? "" : dashboards.cryptocurrency}
            </div>
          </div>
          <div className={classes.tabs}>
            <div className={classes.name}>
              <Projects className={classes.icon} />
              <span>Projects</span>
            </div>
            <div className={dashboards.projects < 1 ? "" : classes.noti}>
              {dashboards.projects < 1 ? "" : dashboards.projects}
            </div>
          </div>
          <div className={classes.tabs}>
            <div className={classes.name}>
              <NFT className={classes.icon} />
              <span>NFT Marketplace</span>
            </div>
            <div className={dashboards.nft_marketplace < 1 ? "" : classes.noti}>
              {dashboards.nft_marketplace < 1 ? "" : dashboards.nft_marketplace}
            </div>
          </div>
          <div className={classes.tabs}>
            <div className={classes.name}>
              <Settings className={classes.icon} />
              <span>Settings</span>
            </div>
            <div className={dashboards.settings < 1 ? "" : classes.noti}>
              {dashboards.settings < 1 ? "" : dashboards.settings}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.projects}>
        <div className={classes.heading} onClick={()=>{setProject(!project)}}>
          <p>Projects</p>
          <Dropdown className={classes.icon} />
        </div>
        <div className={project ? classes.content : `${classes.content} ${classes.closed}`}>
          <div className={classes.tabs}>
            <div className={classes.name}>
              <Tag className={classes.icon} />
              <span>Additional Calendar</span>
            </div>
            <div className={projects.additional_calendar < 1 ? "" : classes.noti}>
              {projects.additional_calendar < 1 ? "" : projects.additional_calendar}
            </div>
          </div>
          <div className={classes.tabs}>
            <div className={classes.name}>
              <Tag className={classes.icon} />
              <span>Branch Logo Design</span>
            </div>
            <div className={projects.branch_logo_design < 1 ? "" : classes.noti}>
              {projects.branch_logo_design < 1 ? "" : projects.branch_logo_design}
            </div>
          </div>
          <div className={classes.tabs}>
            <div className={classes.name}>
              <Tag className={classes.icon} />
              <span>User Research</span>
            </div>
            <div className={projects.user_research < 1 ? "" : classes.noti}>
              {projects.user_research < 1 ? "" : projects.user_research}
            </div>
          </div>
          <div className={classes.tabs}>
            <div className={classes.name}>
              <Tag className={classes.icon} />
              <span>Marketing Sales</span>
            </div>
            <div className={projects.marketing_sales < 1 ? "" : classes.noti}>
              {projects.marketing_sales < 1 ? "" : projects.marketing_sales}
            </div>
          </div>
          <div className={classes.tabs}>
            <div className={classes.name}>
              <Tag className={classes.icon} />
              <span>New Project Template</span>
            </div>
            <div className={projects.new_project_template < 1 ? "" : classes.noti}>
              {projects.new_project_template < 1 ? "" : projects.new_project_template}
            </div>
          </div>
          <div className={classes.tabs}>
            <div className={classes.name}>
              <Add className={classes.icon} />
              <span>Add New Project</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNavLists;
