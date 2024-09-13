export interface IAppService {
  getHello(foo: string): string;
}
export const APP_SERVICE = Symbol('APP_SERVICE');
