---
title: "Introduction"
metaTitle: "Introduction to Workshop"
metaDescription: "Introduction and outline of workshop objectives"
---

## Overview
This is the <b>Getting Started with Amazon Connect: Part 2 to a truly cognitive experience</b> workshop, the second in a series of workshops written by [Matthew Merriel](https://www.linkedin.com/in/matthewmerriel/). These Workshops are designed to build a readers skills around the Amazon Connect platform. 

This workshop was originally created for the [Melbourne AWS Programming and Tools Meetup](https://www.meetup.com/Melbourne-AWS-Programming-and-Tools-Meetup/).

This Workshop builds on the information learnt in the pervious parts of the workshop, however it is not a requirement that previous sections be completed first. This Workshop contains step by steps instructions and the required assets to help expand an Amazon Connect instance to leverage information stored elsewhere within AWS.  It is broken up into 6 key Parts, each containing instructions to get your first Contact Centre up and accepting calls.

| Part | Description |
|:---:|:---|
| <b>Introduction</b> | (This Page) provides an introduction and instructions on creating the required AWS environment. |
| <b>Connect Setup</b> | This Section is a quick revisit on how we can setup an Amazon Connect Instance. |
| <b>Adding a Lambda Function</b> | Here we integrate our first AWS Lambda function to provide logic into our contact flow |
| <b>Logging customer details</b> | In this part, we expand our new Lambda Function and log the calling parties phone number into a DynamoDB table. |
| <b>Handling Lambda responses</b> | Here we can check to see if the caller has rung through before. |
| <b>Adding Conditional Contact Flows</b> | Finally, we will configure our agents who will be responsible for answering our calls. |

At the end of this Workshop you will have an Amazon Connect environment that performs a simple check to all incoming calls to see if the caller has rang the contact centre before and play a custom message if they have. In future Amazon Connect Workshops, we will expand on this by adding predictive algorithms, chatbot functionality and other advanced features to provide our callers and agents with a seamless, reliable experience.

## What is Amazon Connect
Amazon Connect is an easy to use omnichannel cloud contact center that helps companies provide superior customer service at a lower cost. Over 10 years ago, Amazon’s retail business needed a contact center that would give our customers personal, dynamic, and natural experiences. We couldn’t find one that met our needs, so we built it. We've now made this available for all businesses, and today thousands of companies ranging from 10 to tens of thousands of agents use Amazon Connect to serve millions of customers daily.

Designed from the ground up to be omnichannel, Amazon Connect provides a seamless experience across voice and chat for your customers and agents. This includes one set of tools for skills-based routing, powerful real-time and historical analytics, and easy-to-use intuitive management tools – all with pay-as-you-go pricing, which means Amazon Connect simplifies contact center operations, improves agent efficiency, and lowers costs. You can set up a contact center in minutes that can scale to support millions of customers.

![https://aws.amazon.com/connect/](./connect.png)

You can get find more information on Amazon Connect by visiting the Amazon Connect [Product Page](https://aws.amazon.com/connect).

## Account Preparation
in order to follow along with this workshop, you'll need to already have the following:
- <b>AWS Account</b> We will be using AWS as our Cloud provider. sign-up at https://aws.amazon.com if you don't already have one
- <b>IAM Account</b> to be able to interact with the Amazon Connect Instance.
- <b>Mobile or Soft Phone</b> As we will be creating an inbound contact flow you will need something capable of ringing of the provisioned DID

for the purposes of this workshop, we will be deploying all of our resources in the <b>ap-southeast-2</b> region.

<b>NOTE:</b> throughout this workshop we will be deploying resources that will generated costs against your AWS account. While all effort has been made to try and only use resources available under the AWS Free-Tier, some costs may be generated.

## Conclusion
You should now have your AWS account ready to deploy your Amazon Connect instance in as well as be using an IAM user with <b>"AmazonConnectFullAccess"</b> permissions. Once you have both of these in place, you can proceed to the "Introduction" stage of the workshop by clicking the link below or on the sidebar to the left.

