export interface IAbxOption {
  setOptions(opts?: IAbxCoreInitOptions): void;

  sdkVersion: string | null;
  apiVersion: string | null;
  sessionExpireSec: number;
  appkey: string | null;
  userHash: string | number | null;
  appVersion: string;
  isOptOut: boolean;
  isUtmParsing: boolean;
  isNaverParsing: boolean;
  isIncludeReferrer: boolean;
  isincludeGclid: boolean;
  isExecPageViewEvent: boolean;
  traceLevel: TraceLevel;
  traceListener: Function;
}

export interface IAbxConstant {
  readonly SDK_VERSION: string;
  readonly API_VERION: string;
  readonly MAX_PROPERTY_KEYS: number,
  readonly MAX_PROPERTY_KEY_LENGTH: number,
  readonly MAX_PROPERTY_VALUE_BYTE_SIZE: number;
  readonly ADBRIX_PREFIX_COOKIE_KEY: string;
  readonly ADBRIX_PREDEFINED_EVENTS: Array<string>;
}

export interface IAbxMetaStorageData {
  firstPartyId: string | null;
  lastFirstOpenId: string | null;
  lastEventLogId: string | null;
  lastDailyFirstOpenTime: number | null;
  session: IAbxSession;
  userId: string | number | null;
  userProperty: IUserProperty;
}

export interface IAbxCookieOption {
  expireDay: number;
  domain: string;
  secure: string;
  sameSite: string;
}

export enum PropertyDataType {
  string = 'string',
  long = 'long',
  double = 'double',
  boolean = 'boolean',
}

export interface IProperty {
  key: string,
  value: string | boolean | number;
  dataType: PropertyDataType,
}

// 절대 바꾸지 마세요.
export interface IUserProperty {
  userProperty: Array<IProperty>;
  snapshot: string | null;
}

// 절대 바꾸지 마세요.
export interface IAbxSession {
  sessionId: string | null;
  lastUpdate: number | null;
}

export interface IAbxCoreGlobal {
  sdkVersion: string;
  apiVersion: string;
  sessionExpireSec: number;
}

export enum TraceLevel {
  DISABLE,
  ERROR,
  WARN,
  INFO,
}

export interface IAbxCoreInitOptions {
  appkey: string | null;
  webSecretkey: string | null;
  userHash?: string | number | null;
  appVersion?: string;

  isOptOut?: boolean;

  isIncludeUtm?: boolean;
  isIncludeNaver?: boolean;
  isIncludeReferrer?: boolean;
  isincludeGclid?: boolean;

  isExecPageViewEvent?: boolean;

  traceLevel?: TraceLevel;
  traceListener?: Function;

}

export interface IAbxCore {
  init(opts: IAbxCoreInitOptions): void;

  getUserProperty(): Dictionary<string | number | boolean> | null;

  setUserProperty(key: string, value: string | number | boolean): void;

  syncUserProperty(): void;

  removeUserProperty(key: string): void;

  clearUserProperty(): void;

  sendEvent(evtName: string, evtProps: Dictionary<string | number | boolean>): void;
}

export interface IAdbrixSdkCore {
  abxOptions: IAbxOption;
  queue: Array<any>;

  init(opts: IAbxCoreInitOptions): void;

  login(userId: string | number): void;

  getUserId(): string | number | null;

  logout(): void;

  userProperty: IAdbrixSdkCoreUserProperty;

  common: IAdbrixSdkCoreCommon;

  event: IAdbrixSdkCoreEvent;

  debug: IAdbrixSdkCoreDebug;
}

export interface IAdbrixSdkCoreUserProperty {
  get(key: string): string | number | boolean | null;

  getAll(): Dictionary<string | number | boolean> | null;

  addOrUpdate(key: string, value: string | number | boolean): void;

  remove(key: string): void;

  removes(keys: string[]): void;
}

export interface IAdbrixSdkCoreCommon {
  signUp(signChannel: SignUpEnum): void;

  invite(inviteChannel: SignUpEnum, userId: string | number): void;

  useCredit(credit: number): void;
}

export interface IAdbrixSdkCoreEvent {
  send(key: string, eventProperty: Dictionary<string | number | boolean> | null | undefined): void;
}

export interface IAdbrixSdkCoreDebug {
  traceListener(fn: Function): void;
}

export interface IAdbrixSendEventBulkParam {
  evtName: string,
  evtProps: Dictionary<string | number | boolean>
}

export interface IAdbrixSendEventParam {
  eventName: string;
  eventProperties: Array<IProperty>;
}

export enum AdbrixEventGroupEnum {
  abx = 'abx',
  custom = 'custom'
}

export interface IAdbrixEventParam {
  group: AdbrixEventGroupEnum;
  eventName: string;
  properties: Array<IProperty>;
}

export interface IAdbrixEventRequestJsonObject {
  prev_id: string,
  event_datetime: string,
  group: AdbrixEventGroupEnum,
  event_name: string,
  param: Dictionary<any> | null,
  session_interval: number,
  session_length: number,
  log_id: string,
  session_id: string,
  user_snapshot_id: string,
  location: string | null,
  user_properties: Dictionary<any> | null,
}

export interface IAdbrixEventIdentity {
  cookie: string;
  uuid: string | null;
  adid: string | null;
  idfv?: string | null;
  ad_id_opt_out: boolean;
  user_hash?: string | null;
  device_id?: string | null;
}

export interface IAdbrixEventDeviceInfo {
  os?: string | null;
  model?: string | null;
  vendor?: string | null;
  resolution: string;
  is_portrait: boolean;
  platform: string;
  network?: string | null;
  carrier?: string | null;
  language: string;
  country?: string | null;
}

export interface IAdbrixEventCommonModel {
  request_datetime: string;
  identity: IAdbrixEventIdentity;
  device_info: IAdbrixEventDeviceInfo;
  package_name: string;
  appkey: string;
  api_version: string;
  sdk_version: string;
  installer?: string | null;
  app_version: string;
  build_id?: string | null;
  last_firstopen_id?: string | null;
  last_deeplink_id?: string | null;
}

export interface IAdbrixEventRequestModel {
  common: Dictionary<any>,
  evts: Array<IAdbrixEventRequestJsonObject>
}

export interface IURL {
  href: string;
  protocol: string;
  host: string;
  hostname: string;
  port: string;
  pathname: string;
  search: string;
  hash: string;
}

export enum SignUpEnum {
  Kakao = 'Kakao',
  Naver = 'Naver',
  Line = 'Line',
  Google = 'Google',
  Facebook = 'Facebook',
  Twitter = 'Twitter',
  whatsApp = 'whatsApp',
  QQ = 'QQ',
  WeChat = 'WeChat',
  UserId = 'UserId',
  ETC = 'ETC',
  SkTid = 'SkTid',
  AppleId = 'AppleId',
}
