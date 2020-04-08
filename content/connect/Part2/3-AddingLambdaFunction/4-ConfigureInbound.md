---
title: "Configure Inbound Calls"
metaTitle: "Configure Inbound Calls"
metaDescription: "Connecting Contact Flow to DID"
---

## Overview
We have our phone number and we have our Contact Flow... now it's time to join the two together and tell Connect that whenever our phone number is dialed, it should use our new Contact Flow.

## Routing our calls

1. First things first, we need to  open the <b>"Phone Numbers"</b> page which can be found in the <b>"Routing"</b> menu. 
![Phone Numbers](./CreateLambdaFunction-22.png)

2. Here we can see a list of all the phone numbers assigned to our Connect Instance. Go ahead and click on the Phone number to open it's settings page.
![List Phone Numbers](./CreateLambdaFunction-23.png)

Here we can see that we are presented with several settings we can change including the Description as well as the "Contact flow / IVR" that's being used.
![Edit Phone Number](./CreateLambdaFunction-24.png)

3. Here we can select the Contact Flow/IVR that it's using. From the drop-down list, select <b>IncomingLambdaIntegration</b> (or whatever you called it).
![Select Flow](./CreateLambdaFunction-25.png)

4. Click <b>"Save"</b>

5. Make sure that the table lists the correct, new "Contact Flow".
![Configured Number](./CreateLambdaFunction-26.png)

## Next Steps
We are now in a position to test oru new number. You can proceed to the next chapter of the workshop be clicking the link below or on the sidebar to the left.