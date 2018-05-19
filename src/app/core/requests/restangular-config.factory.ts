import { environment } from '../../../environments/environment';

export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setPlainByDefault(true);
  RestangularProvider.setRequestSuffix('/');
  RestangularProvider.setBaseUrl(environment.api.baseUrl);

  RestangularProvider.addResponseInterceptor((data, operation, what, url, response) => {
    if (operation === 'remove') {
      return {};
    }
    return data;
  });
}

