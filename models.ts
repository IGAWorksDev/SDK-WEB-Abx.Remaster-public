import exp from 'constants';

export const instanceOf = <T>(p: any, key: string): p is T => p.hasOwnProperty(key);

export enum UtmParamsEnum {
  UTM_SOURCE = 'utm_source',
  UTM_MEDIUM = 'utm_medium',
  UTM_CAMPAIGN = 'utm_campaign',
  UTM_TERM = 'utm_term',
  UTM_CONTENT = 'utm_content',
}

export enum NaverParamsEnum {
  N_CAMPAIGN_TYPE = 'n_campaign_type',
  N_AD_GROUP = 'n_ad_group',
  N_MEDIA = 'n_media',
  N_AD = 'n_ad',
  N_KEYWORD = 'n_keyword',
  N_KEYWORD_ID = 'n_keyword_id',
  N_QUERY = 'n_query',
  N_RANK = 'n_rank',
  N_MALL_PID = 'n_mall_pid',
  N_CONTRACT = 'n_contract'
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

export enum CommerceSharingChannelEnum {
  Facebook = 'Facebook',
  KakaoTalk = 'KakaoTalk',
  KakaoStory = 'KakaoStory',
  Line = 'Line',
  whatsApp = 'whatsApp',
  QQ = 'QQ',
  WeChat = 'WeChat',
  SMS = 'SMS',
  Email = 'Email',
  copyUrl = 'copyUrl',
  ETC = 'ETC',
}


export enum CurrencyEnum {
  KRW = 'KRW',
  USD = 'USD',
  JPY = 'JPY',
  EUR = 'EUR',
  GBP = 'GBP',
  CNY = 'CNY',
  TWD = 'TWD',
  HKD = 'HKD',
  IDR = 'IDR',
  INR = 'INR',
  RUB = 'RUB',
  THB = 'THB',
  VND = 'VND',
  MYR = 'MYR',
}

export enum PaymentMethodEnum {
  CreditCard = 'CreditCard',
  BankTransfer = 'BankTransfer',
  MobilePayment = 'MobilePayment',
  ETC = 'ETC',
}


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
  isIncludeGclid: boolean;
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
  readonly MAX_RETRIES_REQUEST_EVENT: number;
  readonly ADBRIX_PREFIX_COOKIE_KEY: string;
  readonly ADBRIX_PREDEFINED_EVENTS: Array<string>;
}

export interface IAbxMetaStorageData {
  firstPartyId: string | null;
  lastFirstOpenId: string | null;
  lastDeeplinkId: string | null;
  lastEventLogId: string | null;
  lastDailyFirstOpenTime: number | null;
  session: IAbxSession;
  userId: string | number | null;
  userProperty: IUserProperty;
}

export interface IAbxLocalStorageData {
  failed_event_requests: Record<string, IAbxSendEventModel>;
  lastUpdate: number | null;
}

export interface IAbxSendEventModel {
  request_id: string;
  url: string;
  request: any;
  timestamp: number,
  retry_count: number
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

  // 2depth용
  array = 'array',
  dictionary = 'dictionary',
}

export interface IProperty {
  key: string,
  value: string | boolean | number | Array<IProperty>;
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
  // 사용자 해쉬값
  userHash?: string | number | null;
  appVersion?: string;

  // 광고 추적을 위한 옵트아웃
  isOptOut?: boolean;

  // utm 추적
  isIncludeUtm?: boolean;
  // naver 추적
  isIncludeNaver?: boolean;
  // referrer 추적
  isIncludeReferrer?: boolean;
  // gclid 추적
  isincludeGclid?: boolean;
  // 오탈자로 인한 추가 (21-06-25)
  isIncludeGclid?: boolean;

  // init시, page 추적
  isExecPageViewEvent?: boolean;

  // 커스텀 query param 추적
  supportUrlQueryKeys?: string[];

  // 서브도메인 추적 여부
  // true가 기본값
  shareSubdomainCookie?: boolean;

  traceLevel?: TraceLevel | string;
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

  onInitialized(callback: () => void): void;

  login(userId: string | number): void;

  getUserId(): string | number | null;

  logout(): void;

  userProperty: IAdbrixSdkCoreUserProperty;

  common: IAdbrixSdkCoreCommon;

  event: IAdbrixSdkCoreEvent;

  debug: IAdbrixSdkCoreDebug;

  commerceAttr: IAdbrixSdkCoreCommerceAttr;
}

export interface IAdbrixSdkCoreUserProperty {
  get(key: string): string | number | boolean | null;

  getAll(): Dictionary<string | number | boolean> | null;

  addOrUpdate(key: string, value: string | number | boolean): void;

  remove(key: string): void;

  removes(keys: string[]): void;
}

export interface IAdbrixSdkCoreCommon {
  signUp(signChannel: SignUpEnum, properties?: Dictionary<any> | null | undefined): boolean;

  invite(inviteChannel: SignUpEnum, userId: string | number, properties?: Dictionary<any> | null | undefined): boolean;

  useCredit(credit: number, properties?: Dictionary<any> | null | undefined): boolean;

  purchase(orderId: string, products: ICommerceProduct[], orderSales: number, discount: number, deliveryCharge: number, paymentMethod: PaymentMethodEnum | null, properties?: Dictionary<string | number | boolean> | null | undefined): boolean;
}

export interface IAdbrixSdkCoreCommerceAttr {
  categories(category: string, category2?: string, category3?: string, category4?: string, category5?: string): ICommerceCategory;

  product(productId: string | null, productName: string | null, price: number, quantity: number, discount: number, currency: CurrencyEnum, categories: ICommerceCategory, properties?: Dictionary<string | number | boolean> | null | undefined): ICommerceProduct | null;
}

export interface IAdbrixSdkCoreCommerce {
  viewHome(): boolean;

  categoryView(categories: ICommerceCategory, products: ICommerceProduct[] | null, properties?: Dictionary<string | number | boolean> | null | undefined): boolean;

  productView(product: ICommerceProduct | null, properties?: Dictionary<string | number | boolean> | null | undefined): boolean;

  addToCart(products: ICommerceProduct[] | null, properties?: Dictionary<string | number | boolean> | null | undefined): boolean;

  addToWishList(product: ICommerceProduct | null, properties?: Dictionary<string | number | boolean> | null | undefined): boolean;

  reviewOrder(orderId: string, products: ICommerceProduct[] | null, discount?: number, deliveryCharge?: number, properties?: Dictionary<string | number | boolean> | null | undefined): boolean;

  refund(orderId: string, products: ICommerceProduct[] | null, penaltyCharge?: number, properties?: Dictionary<string | number | boolean> | null | undefined): boolean;

  search(keyword: string, products: ICommerceProduct[] | null, properties?: Dictionary<string | number | boolean> | null | undefined): boolean;

  share(sharingChannel: CommerceSharingChannelEnum, products: ICommerceProduct[] | null, properties?: Dictionary<string | number | boolean> | null | undefined): boolean;

  listView(products: ICommerceProduct[] | null, properties?: Dictionary<string | number | boolean> | null | undefined): boolean;

  cartView(products: ICommerceProduct[] | null, properties?: Dictionary<string | number | boolean> | null | undefined): boolean;

  paymentInfoAdded(properties?: Dictionary<string | number | boolean> | null | undefined): boolean;
}

export interface IAdbrixSdkCoreGame {
  tutorialComplete(isSkip: boolean, properties?: Dictionary<string | number | boolean> | null | undefined): boolean;

  characterCreated(properties?: Dictionary<string | number | boolean> | null | undefined): boolean;

  stageCleared(stageName: string, properties?: Dictionary<string | number | boolean> | null | undefined): boolean;

  levelAchieved(level: number, properties?: Dictionary<string | number | boolean> | null | undefined): boolean;
}

export interface IAdbrixSdkCoreEvent {
  send(key: string, properties?: Dictionary<string | number | boolean> | null | undefined): boolean;
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
  time_zone_offset?: number | null;
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


export interface AppLandingMetaInfo {
  appkey: string;
  web_secretkey_sha256: string;
  app_name: string;
  aos_market_url: string;
  ios_market_url: string;
  app_icon: string;
  web_url: string;
  og_tag: OgTagModel;
  measurement: boolean;
  last_updated_datetime: Date | string;
}

export interface OgTagModel {
  title: string;
  description: string;
  image_url: string;
}

export interface ICommerceCategory {
  'abx:category1'?: string,
  'abx:category2'?: string,
  'abx:category3'?: string,
  'abx:category4'?: string,
  'abx:category5'?: string,
}

export interface ICommerceProduct extends ICommerceCategory, Dictionary<any> {
  'abx:item_id': string,
  'abx:price': number,
  'abx:quantity': number,
  'abx:discount': number,
  'abx:sales': number,
  'abx:product_id'?: string,
  'abx:product_name'?: string,
  'abx:currency'?: CurrencyEnum,
}

export interface ICommonSignUp extends Dictionary<any> {
  'abx:sign_channel': string;
}

export interface ICommonInvite extends Dictionary<any> {
  'abx:invite_channel': string,
  'user_id': string | number
}

export interface ICommonUseCredit extends Dictionary<any> {
  'credit': number,
}

export interface ICommonPurchase extends Dictionary<any> {
  'abx:order_sales': number,
  'abx:discount': number,
  'abx:delivery_charge': number,
  'abx:order_id'?: string,
  'abx:payment_method'?: PaymentMethodEnum,
  'abx:items'?: ICommerceProduct[]
}
