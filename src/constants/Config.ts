export interface IConfig {
  applicationUrl: string;
  apiDentistGatewayUrl: string;
  apiAccountGateway: string;
  apiGatewayUrl: string;
  ssoUrl: string;
  logoutUrl: string;
  practiceUrl: string;
  apps: {
    flynotes: string;
    flySend: string;
    flymed: string;
    flyCommand: string;
    flyAccount: string;
    fallowTimeCalculator: string;
  };
}

const localAppUrl = "http://localhost:3000";
const devAppUrl = "https://flymed.dev.myflynotes.com";
const stagingAppUrl = "https://flymed.staging.myflynotes.com";
const prodAppUrl = "https://flymed.prod.myflynotes.com";

const localConfig: IConfig = {
  applicationUrl: localAppUrl,
  apiGatewayUrl: "https://apiflymed.dev.myflynotes.com",
  apiDentistGatewayUrl: "https://apiflymed.dev.myflynotes.com",
  apiAccountGateway: "https://apiaccount.dev.myflynotes.com",
  ssoUrl: `https://account.dev.myflynotes.com/sso.html?callbackDomain=${localAppUrl}`,
  logoutUrl: `https://account.dev.myflynotes.com/logout/login?callbackApp=flynotes`,
  apps: {
    flynotes: "https://flynotes.dev.myflynotes.com",
    flySend: "https://apidev.comdetect.com",
    flymed: "https://flymed.dev.myflynotes.com",
    flyCommand: "https://flymed.dev.myflynotes.com",
    flyAccount: "https://accountflynotes.afivn.com",
    fallowTimeCalculator: "http://localhost:3000",
  },
  practiceUrl: "https://flynotes.dev.myflynotes.com/#/?token={jwt}",
};

const developmentConfig: IConfig = {
  applicationUrl: devAppUrl,
  apiGatewayUrl: "https://apiflymed.dev.myflynotes.com",
  apiDentistGatewayUrl: "https://apiflymed.dev.myflynotes.com",
  apiAccountGateway: "https://apiaccount.dev.myflynotes.com",
  ssoUrl: `https://account.dev.myflynotes.com/sso.html?callbackDomain=${devAppUrl}`,
  logoutUrl: `https://account.dev.myflynotes.com/logout/login?callbackApp=flynotes`,
  practiceUrl: "https://flynotes.dev.myflynotes.com/#/?token={jwt}",
  apps: {
    flynotes: "https://flynotes.dev.myflynotes.com",
    flySend: "https://apidev.comdetect.com",
    flymed: "https://flymed.dev.myflynotes.com",
    flyCommand: "https://flymed.dev.myflynotes.com",
    flyAccount: "https://accountflynotes.afivn.com",
    fallowTimeCalculator: "http://ftc.dev.myflynotes.com",
  },
};

const stagingConfig: IConfig = {
  applicationUrl: stagingAppUrl,
  apiGatewayUrl: "https://apiflymed.staging.myflynotes.com",
  apiDentistGatewayUrl: "https://apiflymed.staging.myflynotes.com",
  apiAccountGateway: "https://apiaccount.staging.myflynotes.com",
  ssoUrl: `https://account.staging.myflynotes.com/sso.html?callbackDomain=${stagingAppUrl}`,
  logoutUrl: `https://account.staging.myflynotes.com/logout/login?callbackApp=flynotes`,
  practiceUrl: "https://flynotes.staging.myflynotes.com/#/?token={jwt}",
  apps: {
    flynotes: "https://flynotes.staging.myflynotes.com",
    flySend: "https://apidev.comdetect.com",
    flymed: "https://flymed.staging.myflynotes.com",
    flyCommand: "https://flymed.staging.myflynotes.com",
    flyAccount: "https://account.staging.myflynotes.com",
    fallowTimeCalculator: "http://ftc.staging.myflynotes.com",
  },
};


const productionConfig: IConfig = {
  applicationUrl: prodAppUrl,
  apiGatewayUrl: "https://apiflymed.prod.myflynotes.com",
  apiDentistGatewayUrl: "https://apiflymed.prod.myflynotes.com",
  apiAccountGateway: "https://apiaccount.prod.myflynotes.com",
  ssoUrl: `https://account.prod.myflynotes.com/sso.html`,
  logoutUrl: `https://account.prod.myflynotes.com/logout/login?callbackApp=flynotes`,
  practiceUrl: "https://app.myflynotes.com/#/?token={jwt}",
  apps: {
    flynotes: "https://app.myflynotes.com",
    flySend: "https://flysend.prod.myflynotes.com",
    flymed: "https://flymed.prod.myflynotes.com",
    flyCommand: "https://flycommand.prod.myflynotes.com",
    flyAccount: "https://account.prod.myflynotes.com",
    fallowTimeCalculator: "https://ftc.prod.myflynotes.com",
  },
};

const config =
  process.env.REACT_APP_ENV === "production"
    ? productionConfig
    : process.env.REACT_APP_ENV === "staging"
    ? stagingConfig
    : process.env.REACT_APP_ENV === "development"
    ? developmentConfig
    : localConfig

console.log(
  `====== Start success with env is ${process.env.REACT_APP_ENV} =====`
);
export default config;
