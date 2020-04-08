---
title: "Add Agents"
metaTitle: "Add Queue"
metaDescription: "Adding a Queue Transfer to our main Contact Flow"
---

## Overview
Technically right now, if you where to ring your Toll-Free number and select Option 2, you'd land in a queue waiting for an agent... However, we don't currently have any agents. So lets set one up.

## Create new User Account
1. From the <b>Users</b> Menu select the <b>User Management</b> page.
![Link Blocks Together](./enablingAgents-7.png)

2. Next, click <b>Add new users</b> from the top right hand side of the page.
![Link Blocks Together](./enablingAgents-8.png)

3. For our purposes today we only want to create a single user so we can leave the top option selected, however we could use a csv template to import users. Go ahead and click <b>Next</b>.
![Link Blocks Together](./enablingAgents-9.png)

4. Here we see the <b>New User</b> form which looks more daunting than it actually is.
![Link Blocks Together](./enablingAgents-10.png)

5. Give your new user a first name, Last Name, Login Name, email address and a password. 
![Link Blocks Together](./enablingAgents-11.png)

6. Next we need to define the users <b>Routing Policy</b> and <b>Security Profile</b> neither of which we've looked at throughout this workshop. A routing policy allows you to default a group of Queues that an agent might be a member of and to which order they will be routed calls. 

A security Policy on the other hand is simply a policy that defines what actions a user can take... similar to an IAM policy. For our workshop we are happy with the default <b>Basic Routing Profile</b> as we only have a single queue... and the <b>Agent</b> security profile as this user will not require access to the Instance Management console. Once those are defined, we can leave the other settings as is and click <b>Save</b>.
![Link Blocks Together](./enablingAgents-13.png)

7. Here we can simply review are changes and click <b>Create users</b> to continue.
![Link Blocks Together](./enablingAgents-14.png)

8. And we now see our Agent listed in our <b>User management</b> Page.
![Link Blocks Together](./enablingAgents-15.png)

## Nex Steps
At this point we only have one more step left and that's for the agent to log into the Agent Console and accept their first call. proceed to the <b>Add Agents</b> section by click the <b>next</b> button below or selecting it from the sidebar on the left.