**HOW TO CREATE AN EMAIL REMINDER?**

1. Create a Lambda function with the code given. And give approprite SNS permission as well.
2. Go to the SNS service and go to the **Verified Identities** tab and verify your email.
3. Once you do that go to the EventBridge service and create a rule with any name and there will be 2 options you can choose. One is the Event pattern and the other is the Schedule. Under Schedule there are two more options, one is a fixed rate at which the email needs to be sent and the other is to schedule using time and date(This uses cronjob).
4. As for the target choose Lambda Function and choose the one you just created.
5. Thats it!


