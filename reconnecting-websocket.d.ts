declare class ReconnectingWebSocket {
  readonly readyState: number;
  constructor(url: string, protocols?: string | string[], options?: any);
  open();
  close(code?: number, reason?: string);
  refresh();
  send(data: string | ArrayBuffer | Blob);
  addEventListener(eventType: string, handler: (event: any) => void);
  removeEventListener(eventType: string, handler: (event: any) => void);
}

export default ReconnectingWebSocket;
