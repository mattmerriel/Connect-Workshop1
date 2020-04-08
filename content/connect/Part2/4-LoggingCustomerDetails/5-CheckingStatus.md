---
title: "Checking Caller Status"
metaTitle: "Checking Caller Status"
metaDescription: "Setting up our Amazon Connect Instance"
---

## Overview
In this chapter we will update our <b>AWS Lambda Function</b> for the last time to add a check to see if the caller's phone number is already in our <b>CallerId</b> table. We will then return that in our response payload back to our Connect Instance.

## Getting Started
1. To get started, we want to visit the AWS Lambda Management Console available at [https://ap-southeast-2.console.aws.amazon.com/lambda/](https://ap-southeast-2.console.aws.amazon.com/lambda/) (note the <b>ap-southeast-2</b> region being used). This should display a list of your lambda functions within the current region as shown below (you page may contain lambda functions). Go ahead and select the one we created previously.
![Getting Started](./LoggingCustomerDetails-7.png)

2. Next we need to update our existing <b>Lambda Function</b> again so that it can check the <b>DynamoDB</b> table we created and see if the caller's phone number already exists. Replace the existing <b>AWS Lambda</b> code with the below:

```python
import json
import calendar
import time
import boto3
from boto3.dynamodb.conditions import Key, Attr

# Get the Service Resources
dynamodb = boto3.resource('dynamodb')

def lambda_handler(event, context):
  # Set PreviousCaller to 0
  PreviousCaller = 0
  
  # Instantiate a table resource object without creating the table
  table = dynamodb.Table('CallRecords')

  # Get current time from epoh
  ts = calendar.timegm(time.gmtime())

  # Get Parameter from event
  CallersNumber = event['Details']['Parameters']['CallersNumber']

  PreviousCallCheck = table.query(
    KeyConditionExpression=Key('CallerId').eq(CallersNumber),
    ScanIndexForward=False,
    Limit=1,
    Select='COUNT'
  )
  print(PreviousCallCheck)
  if PreviousCallCheck['Count'] > 0:
    PreviousCaller = 1
  
  # submit record to DynamoDB
  table.put_item(
      Item={
          'CallerId': CallersNumber,
          'TimeOfCall': ts
      }
  )

  return {
    'statusCode': 200,
    'previousCaller': PreviousCaller
  }
```
Here we are simply adding the <b>PreviousCallCheck</b> where we take the callers number and perform a count on the DynamoDB table. If the count is greater than 0 then we know the number is in the database which means they have called us previously and that's what we return back to Amazon Connect. <b>NOTE: As has been outlined several times in this workshop, this is not production code and is for demostration purposes only. Please DO NOT run this code in production</b>.


## Next Steps
And that's all there is for this chapter, pretty short and sweet. In the final section of this workshop we will take the response we are receiving back from the <b>AWS Lambda Function</b> and use it to alter our <b>Connect Flow</b>.