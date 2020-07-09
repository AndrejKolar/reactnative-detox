# reactnative-detox
Example react native project with detox e2e testing and fastlane


## Setup

Run
```
yarn install
```


## Detox

Run
```
detox build -c ios
detox test -c ios
```


## Fastlane

In the `./ios` folder

Install fastlane gem
```
bundle update
```

Run
```
bundle exec fastlane detox
```
