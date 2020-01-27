export class ResultPackage {
  static success<T>(data?: T) {
    return { data, success: true } as IResultPackage<T>;
  }

  static failed<T>(
    errorMessage?: string,
    errorCode?: string,
    errorDetail?: string,
    data?: T
  ) {
    return {
      data,
      success: false,
      errorCode,
      errorDetail,
      errorMessage
    } as IResultPackage<T>;
  }
}

export interface IResultPackage<T> {
  data?: T;
  success: boolean;
  errorMessage?: string;
  errorCode?: string;
  errorDetail?: string;
}
