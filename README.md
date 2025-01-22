# Calling Tracking Demo using Node and the Vonage Voice API

This app used the Vonage Voice API to demonstrate how a call tracking
application could be built.

* The call is tracked
* Incoming calls are proxied to a destination number

You can read the [detailed tutorial on Vonage's Developer Portal](https://developer.vonage.com/en/voice/voice-api/guides/call-tracking)
about call tracking; this repo is the sample code to accompany that tutorial.

## Prerequisites

You will need:

* At least one Vonage Virtual Number (Phone Number)
* The [Vonage CLI](https://github.com/vonage/vonage-cli/) installed
* Somewhere to host this web app, Heroku or Your Local Machine with ngrok both
work well

## Installation

```sh
git clone https://github.com/nexmo/node-call-tracker.git
cd node-call-tracker
npm install
```

## Setup

Rename the config file:

```sh
cp .env-example .env
```

Fill in the values in `.env` as appropriate.

Edit the following command to use the URL of where your application is hosted.
Then run the [Vonage CLI](https://github.com/vonage/vonage-cli) command below
and take note of the application universally unique identifier (UUID) it returns:

```sh
voange apps create demo-app
```

Then configure the application to use voice and send events to the application

```sh
vonage apps capabilities update voice --voice-answer-url='http://your-url-here/track-call' --voice-event-url='http://your-url-here/event'

```

Buy numbers for calls that you would like to track. The following example buys
the first available number in a given country by country code.

```sh
vonage numbers buy --country_code [YOUR_COUNTRY_CODE]
```

Link each number to the application by running a command like this with the
application UUID and the number to link.

```sh
voange apps numbers link [app-id] [NUMBER]
```

### Running the App

```sh
npm start
```

The application should be available on <http://localhost:5000>.

### Using the App

Call one of the virtual numbers that you rented. The call will be tracked and
forwarded to the desired destination number.

You can see a list of tracked calls by accessing <http://localhost:5000/tracked-calls>.
