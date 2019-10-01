import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

import translationCht from './i18n_cht_Layout.json';
import translationEn from './i18n_en_Layout.json';

const resources = {
    US: {
        translation: translationEn
    },
    TW: {
        translation: translationCht
    }
};

i18n
    .use(detector)
    .use(reactI18nextModule)
    .init({
        resources,
        lng: 'TW',
        fallbackLng: 'US',

        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;