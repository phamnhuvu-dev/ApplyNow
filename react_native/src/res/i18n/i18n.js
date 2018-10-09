/**
 * @providesModule I18n
 */

import I18n from 'react-native-i18n';
import en from './locales/en';
import vi from './locales/vi';


I18n.fallbacks = true;

I18n.translations = {
  en,
  vi
};

export default I18n;

export const I18n_full_name = I18n.t("full_name");
export const I18n_email = I18n.t("email");
export const I18n_phone = I18n.t("phone");