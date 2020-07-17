export interface InitPushapeOptions {
  id_app: string;
  platform: string;
  uuid: string;
  regid: string;
  internal_id: string;
}

export interface RemovePushapeOptions {
  id_app: string;
  platform: string;
  uuid: string;
}

export interface InitPushapeResponse {
  push_id: string;
  status: number;
}
