import { NotificationPermission } from '@/push/models/notification-permission';
import { ServiceWorkerOptions } from '@/push/models/web-push-config';

export const instanceOf = <T>(p: any, key: string): p is T => p.hasOwnProperty(key);

export enum HttpStatus {
  OK = 200,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  GATEWAY_TIMEOUT = 504,
}
export enum StartSessionOpenType{
  FIRST_OPEN = 'first_open',
  BASIC_OPEN = 'basic_open',
  DEEPLINK_OPEN = 'deeplink_open'
}

export enum UserProfileResultCode {
    SUCCESS = 2000,
    INVALID_TOKEN = 4001,
    INVALID_REQUEST = 4002,
    BLOCKED_ACCOUNT = 4003,
    UNAHORIZED = 4004,
    TERMINATED_API = 4005,
    RATE_LIMIT_EXCEEDED = 4006,
    INTERNAL_SERVER_ERROR = 5001,
    SERVICE_MAINTENANCE = 5002
}
export enum SubscriptionStatusValue {
  SUBSCRIBED = 'Subscribed',
  UNSUBSCRIBED = 'Unsubscribed',
  UNDEFINED = 'Undefined',
}
export enum SubscriptionStatusProperty {
  INFORMATIVE_NOTIFICATION_FLAG = 'abx:info_flag',
  MARKETING_NOTIFICATION_FLAG = 'abx:mkt_flag',
  MARKETING_NOTIFICATION_FLAG_FOR_PUSH_CHANNEL = 'abx:mkt_push_flag',
  MARKETING_NOTIFICATION_FLAG_FOR_SMS_CHANNEL = 'abx:mkt_sms_flag',
  MARKETING_NOTIFICATION_FLAG_FOR_KAKAO_CHANNEL = 'abx:mkt_kakao_flag',
  MARKETING_NOTIFICATION_AT_NIGHT_FLAG = 'abx:night_flag',
  MARKETING_NOTIFICATION_AT_NIGHT_FLAG_FOR_PUSH_CHANNEL = 'abx:night_push_flag',
  MARKETING_NOTIFICATION_AT_NIGHT_FLAG_FOR_SMS_CHANNEL = 'abx:night_sms_flag',
  MARKETING_NOTIFICATION_AT_NIGHT_FLAG_FOR_KAKAO_CHANNEL = 'abx:night_kakao_flag',
}

export enum CiProperty{
  PHONE_NUMBER = 'abx:phone_number',
  KAKAO_ID = 'abx:kakao_id',
}

export enum IdentifierType {
  all = 'all',
  device_id = 'device_id',
  user_id = 'user_id',
}
export enum InAppMessageType {
  full_screen = 'full_screen',
  modal = 'modal',
  sticky_banner= 'sticky_banner',
}
export enum InAppMessageEventType {
  impression = 'impression',
  click = 'click',
}
export enum InAppMessageActionType {
  close = 'close',
  deeplink_and_close = 'deeplink_and_close',
  weblink = 'weblink',
  weblink_and_close = 'weblink_and_close',
  dont_show_me_today_and_close = 'dont_show_me_today_and_close',
}
export enum InAppMessageElementId {
  root = 'dfn-in-app-message-root',
  //invisible = '', remove 하면됨
}
export enum InAppMessageElementClass {
  visible = 'dfn-pop-up--visible',
  ready = 'dfn-pop-up--ready',
  //invisible = '', remove 하면됨
}
export enum InAppMessageElementDataset{
  campaign_id = 'data-dfn-campaign-id',
  action_id = 'data-dfn-action-id',
  action_type = 'data-dfn-action-type',
  action_arg = 'data-dfn-action-arg',
}
export enum InAppMessageTimeZone{
  global = 'Global',
  local = 'Local',
}

export enum Condition {
  greater = 'greater',
  greaterThanEqual = 'greaterThanEqual',
  less = 'less',
  lessThanEqual = 'lessThanEqual',
  between = 'between',
  contains = 'contains',
  notContains = 'notContains',
  notEqual = 'notEqual',
  equal = 'equal',
  startWith = 'startWith',
  notBetween = 'notBetween',
}
export enum ValueType {
  TEXT = 'text',
  NUMBER = 'number',
  BOOLEAN = 'boolean',
  DATETIME = 'datetime',
  ENUM = 'enum',
  LONG = 'long',
  DOUBLE = 'double',
}

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

export enum TransportEnum {
  BEACON,
  XHR,
  IMAGE,
}

export enum AppRegion {
  ap1 = 'ap1',
  ap2 = 'ap2',
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
  isIncludeFbclid: boolean;
  isExecPageViewEvent: boolean;
  transport: TransportEnum;

  traceLevel: TraceLevel;
  traceListener: Function;
}

export interface IAbxConstant {
  readonly SDK_VERSION: string;
  readonly API_VERION: string;
  readonly MAX_PROPERTY_KEYS: number,
  readonly MAX_PROPERTY_KEY_LENGTH: number,
  readonly MAX_PROPERTY_VALUE_BYTE_SIZE: number;
  readonly MAX_COOKIE_BYTE_SIZE: number;
  readonly MAX_HTTP_QUERY_STRING_BYTE_SIZE: number;
  readonly MAX_BEACON_HTTP_QUERY_STRING_BYTE_SIZE: number;
  readonly MAX_RETRIES_REQUEST_EVENT: number;
  readonly ADBRIX_PREFIX_COOKIE_KEY: string;
  readonly ADBRIX_PREDEFINED_EVENTS: Array<string>;
}

export interface IAbxMetaStorageData {
  firstPartyId: string | null;
  isSendFirstParty: boolean | null;
  lastFirstOpenId: string | null;
  lastDeeplinkId: string | null;
  lastEventLogId: string | null;
  lastDailyFirstOpenTime: number | null;
  session: IAbxSession;
  userHash: string | number | null;
  eventOrderNo : number;
  userProperty: IUserProperty;
  is_push_enable_os: boolean;
  is_push_enable: boolean;
  registration_id: string;
}

export interface IAbxLocalStorageData {
  failed_event_requests: Record<string, IAdbrixEventRequestJsonObject>;
  lastUpdate: number | null;
}

export interface IAbxSendEventModel {
  request_id: string;
  url: string;
  request: any;
  timestamp: number,
  // retry_count: number
}

export interface IAbxCookieOption {
  expireDay?: number;
  domain?: string;
  secure?: string;
  sameSite?: string;
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
  // fbclid 추적
  isIncludeFbclid?: boolean;

  // init시, page 추적
  isExecPageViewEvent?: boolean;

  // 커스텀 query param 추적
  supportUrlQueryKeys?: string[];

  // 서브도메인 추적 여부
  // true가 기본값
  shareSubdomainCookie?: boolean;

  // 전송방식  (image, xhr, beacon)
  // 참고: https://developers.google.com/analytics/devguides/collection/analyticsjs/sending-hits#specifying_different_transport_mechanisms
  transport?: TransportEnum | string;

  traceLevel?: TraceLevel | string;
  traceListener?: Function;

  push?: IPushInitOptions;
  inWebMessage?: IInWebMessageInitOptions;
}

export interface IPushInitOptions {
  enable: boolean;
  serviceWorkerOptions?: ServiceWorkerOptions;
  subscriptionPromptOptions?: SubscriptionPromptOptions;
}

export interface SubscriptionPromptOptions {
  zIndex: number;
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

  push: IAdbrixPush;
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

  addToCart(products: ICommerceProduct | ICommerceProduct[] | null, properties?: Dictionary<string | number | boolean> | null | undefined): boolean;

  addToWishList(product: ICommerceProduct | ICommerceProduct[] | null, properties?: Dictionary<string | number | boolean> | null | undefined): boolean;

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
  eventName: string,
  properties: Dictionary<string | number | boolean>
  isAbxPredefinedCheck: boolean
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
  retry_count: number | 0 
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
  region: AppRegion;
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
export interface GetUserProfileRequest{
  appkey: string;
  user_id: string;
  property_names: Array<string>;
}
export interface GetUserProfileResponse{
  result_code: number;
  result_msg: string | null;
  result_data: GetUserProfileResponseResultData | null | undefined;
}
export interface GetUserProfileResponseResultData{
  user_id: string;
  properties: Dictionary<any> | null;
}
export interface SetUserProfileRequest{
  appkey: string;
  user_id: string;
  properties: Dictionary<any>;
}
export interface SetUserProfileResponse{
  result_code: number;
  result_msg: string | null;
  result_data: SetUserProfileResponseResultData | null | undefined;
}
export interface SetUserProfileResponseResultData{
  user_id: string;
}
export interface GetSubscriptionStatusResult {
  is_success: boolean;
  result_code: number;
  result_message: string;
  informative_notification_flag?: boolean | undefined | null;
  marketing_notification_flag?: boolean | undefined | null;
  marketing_notification_flag_for_push_channel?: boolean | undefined | null;
  marketing_notification_flag_for_sms_channel?: boolean | undefined | null;
  marketing_notification_flag_for_kakao_channel?: boolean | undefined | null;
  marketing_notification_at_night_flag?: boolean | undefined | null;
  marketing_notification_at_night_flag_for_push_channel?: boolean | undefined | null;
  marketing_notification_at_night_flag_for_sms_channel?: boolean | undefined | null;
  marketing_notification_at_night_flag_for_kakao_channel?: boolean | undefined | null;
}
export interface SubscriptionStatus {
  informative_notification_flag?: boolean | undefined | null;
  marketing_notification_flag?: boolean | undefined | null;
  marketing_notification_flag_for_push_channel?: boolean | undefined | null;
  marketing_notification_flag_for_sms_channel?: boolean | undefined | null;
  marketing_notification_flag_for_kakao_channel?: boolean | undefined | null;
  marketing_notification_at_night_flag?: boolean | undefined | null;
  marketing_notification_at_night_flag_for_push_channel?: boolean | undefined | null;
  marketing_notification_at_night_flag_for_sms_channel?: boolean | undefined | null;
  marketing_notification_at_night_flag_for_kakao_channel?: boolean | undefined | null;
}

export interface SetSubscriptionStatusResult {
  is_success: boolean;
  result_code: number;
  result_message: string;
}

export interface SetCiPropertyRequest{
  appkey: string;
  user_id: string;
  user_ci_properties: Dictionary<string>;
}
export interface SetCiPropertyResponse{
  result_code: number;
  result_msg: string | null;
  result_data: SetCiPropertyResponseResultData | null | undefined;
}
export interface SetCiPropertyResponseResultData{
  user_id: string;
}

export interface SetCiProfileResult {
  is_success: boolean;
  result_code: number;
  result_message: string;
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

export interface IAdbrixPush {
  isPushEnabled: () => Promise<boolean>,
  isPushSupported: () => Promise<boolean>,
  showPrompt: () => Promise<void>,
  showNativePrompt: () => Promise<NotificationPermission | void>,
  getNotificationPermission: () => Promise<NotificationPermission>,
  showLocalNotification: (title: string, options: NotificationOptions) => Promise<Notification>,
}

// region inAppMessage
export interface IInWebMessageInitOptions {
  enable: boolean;
  openInNewWindow: boolean;
  fetchListener?: Function;
  clickListener?: Function;
  zIndex: number;
}

export interface DfnInWebMessage {
  campaign_id: string;
  identifier_type: string;
  ext_attr: string;
  timezone_offset: number;
  timezone_type: string;
  type: string;
  contents_html: string;
  bg_style_bg_color: string;
  bg_style_overlay_color: string;
  position_mobile: string;
  position_desktop: string;
  frequency_cap_per_session: number;
  frequency_cap_per_user: number;
  frequency_cap_for_period_in_minutes: number;
  frequency_cap_for_period_per_period: number;
  start_datetime: number;
  end_datetime: number;
  last_updated_datetime: number;
  ext_config: string;
}
export interface AvailableTime {
  campaign_id: string;
  identifier_type: string;
  day: string;
  start_min: number;
  end_min: number;
}
export interface CurrentFrequency {
  campaign_id: string;
  user_id: string;
  current_frequency_cap_per_session: number;
  current_frequency_cap_per_user: number;
  frequency_last_group_start_time: number;
  frequency_last_group_count: number;
  unavailable_day: string;
  unavailable_time: number;
}
export interface Triggers {
  campaign_id: string;
  identifier_type: string;
  type: string;
  event_name: string;
  priority: number;
  evt_properties: string;
  last_updated_datetime: number;
}

export interface FetchInAppMessageRequest {
  common: IAdbrixEventCommonModel;
  in_app_message: FetchInAppMessageRequestInAppMessage;
}
export interface FetchInAppMessageRequestInAppMessage {
  checksum: string;
  user_id: number;
  required_campaign_ids: Array<string>;
  max_touch_points: number;
}
export interface FetchInAppMessageResponse {
  result: string;
  resultCode: number;
  resultMsg: string;
  elapsedTime: number;
  data: FetchInAppMessageResponseData;
}

export interface FetchInAppMessageResponseData {
  checksum: string;
  status: string;
  minutes_to_expiry: number;
  common_js_url: string;
  in_app_messages: Array<FetchInAppMessageResponseDataInAppMessage>;
}

export interface FetchInAppMessageResponseDataInAppMessage {
  identifier_type: string;
  campaign_id: string;
  type: string;
  position: FetchInAppMessageResponseDataInAppMessagePosition;
  contents: FetchInAppMessageResponseDataInAppMessageContents;
  triggers: Array<FetchInAppMessageResponseDataInAppMessageTriggers>;
  ext_attr: string;
  frequency_cap: FetchInAppMessageResponseDataInAppMessageFrequencyCap;
  timezone_offset: number;
  timezone_type: string;
  available_time: Array<FetchInAppMessageResponseDataInAppMessageAvailableTime>;
  start_datetime: string;
  end_datetime: string;
  last_updated_datetime: string;
  is_campaign_to_test: boolean;
  ext_config: FetchInAppMessageResponseDataInAppMessageExtConfig;
}
export interface FetchInAppMessageResponseDataInAppMessagePosition {
  mobile: string;
  desktop: string;
}
export interface FetchInAppMessageResponseDataInAppMessageContents {
  html: string;
  bg_style: FetchInAppMessageResponseDataInAppMessageContentsBgStyle;
}
export interface FetchInAppMessageResponseDataInAppMessageContentsBgStyle {
  bg_color: string;
  overlay_color: string;
}
export interface FetchInAppMessageResponseDataInAppMessageTriggers {
  type: string;
  evt: string;
  evt_properties: Array<FetchInAppMessageResponseDataInAppMessageTriggersEvtProperties>;
  priority: number;
}
export interface FetchInAppMessageResponseDataInAppMessageTriggersEvtProperties {
  value_type: string;
  property: string;
  alias: string;
  condition: string;
  values: Array<string>;
}
export interface FetchInAppMessageResponseDataInAppMessageFrequencyCap {
  per_session: number;
  per_user: number;
  per_period: FetchInAppMessageResponseDataInAppMessageFrequencyCapForPeriod|null|undefined;
}
export interface FetchInAppMessageResponseDataInAppMessageFrequencyCapForPeriod {
  period_in_minutes: number|null|undefined;
  per_period: number|null|undefined;
}
export interface FetchInAppMessageResponseDataInAppMessageAvailableTime {
  days: Array<string>;
  start_min: number;
  end_min: number;
}
export interface FetchInAppMessageResponseDataInAppMessageExtConfig {
  growth_scenario: FetchInAppMessageResponseDataInAppMessageExtConfigGrowthScenario;
}
export interface FetchInAppMessageResponseDataInAppMessageExtConfigGrowthScenario {
  abx_gf_campaign_id: string;
  abx_gf_campaign_revision_no: number;
  abx_gf_step_id: string;
}
export interface InAppMessageClickAction {
  campaign_id: string;
  action_id: string | undefined;
  action_type: string | undefined;
  action_arg: string | undefined;
}
// endregion
