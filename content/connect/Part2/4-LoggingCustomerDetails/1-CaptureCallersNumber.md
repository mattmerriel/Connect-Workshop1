---
title: "Capturing Calling Number"
metaTitle: "Capturing a Callers Number"
metaDescription: "Setting up our Amazon Connect Instance"
---

## Overview
In this chapter we will modify the <b>Contact Flow</b>

## Getting Started
1. To get started, we want to visit the AWS Lambda Management Console available at [https://ap-southeast-2.console.aws.amazon.com/lambda/](https://ap-southeast-2.console.aws.amazon.com/lambda/) (note the <b>ap-southeast-2</b> region being used). This should display a list of your lambda functions within the current region as shown below (you page may contain lambda functions).
![Getting Started](./CreateLambdaFunction-1.png)

2. Next, we can go ahead and click on the <b>Create Function</b> on the top right of the page.
![Create Function](./CreateLambdaFunction-2.png)

3. On the <b>Create Function</b> page, we want to <b>Author from Scratch</b>, we can give it the name <b>IncomingCallLogging</b>, make sure to set the runtime to <b>Python 3.7</b>. Once that's done, we can go ahead and click <b>Create Function</b>.
![Create Function - Complete](./CreateLambdaFunction-3.png)

4. For the moment, all we are going to do is log the event passed by Amazon Connect and return the standard boilerplate response. To achieve this, scroll down to the <b>Function Code</b> section and replace the pre-populated code with the code below. Don't forget to click <b>save</b> once you've updated the code.

```python
import json

def lambda_handler(event, context):
  # TODO implement
  print(event)
  return {
    'statusCode': 200,
    'body': json.dumps('Hello from Lambda!')
  }
```

Your screen should now look like the below:
![Create Function - Complete](./CreateLambdaFunction-4.png)

5. Next, we need to test our Lambda function to make sure it's working correctly. Start off by clicking the "Test" button at the top of the page.
![Create Test](./CreateLambdaFunction-5.png)

6. In the <b>Configure Test Event</b> window, under the <b>Event Template</b> dropdown... Select <b>Amazon Connect Contact Flow</b>. Enter <b>TestNumberCapture</b> for the <b>Event name</b> and click <b>Create</b> to save the test.
![Configure Test](./CreateLambdaFunction-6.png)

7. Now we can click the <b>Test</b> button again to run the test using the previously supplied JSON document (notice how the drop down menu is now populated).
![Run Test](./CreateLambdaFunction-7.png)

8. If everything worked correctly, you should see the output of the function appear in the <b>Execution Results</b> window.
![Test Results](./CreateLambdaFunction-8.png)

And for the moment, that's all we need to do. We will be updating and changing both the function and the associated test event as we progress through the remainder of the workshop.

## Next Steps
You now a functioning AWS Lambda function capable of capturing the event data and returning a JSON object. In the next section we will configure Amazon Connect so that it has the appropriate permission to execute our lambda function. You can proceed to the next chapter of the workshop be clicking the link below or on the sidebar to the left.