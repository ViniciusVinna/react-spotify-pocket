import { camelCase } from 'lodash';

export const getInfoFromUrlHash = (urlHash) => {
  if (!urlHash) {
    return { error: 'Acesso negado. Você não possui permissões para acessar o aplicativo' };
  }

  return urlHash
    .substring(1)
    .split("&")
    .reduce((accumulator, hashItem) => {
      if (hashItem) {
        const keyValue = hashItem.split('=');

        accumulator[camelCase(keyValue[0])] = decodeURIComponent(keyValue[1]);
      }

      return accumulator;
    }, {});
}
