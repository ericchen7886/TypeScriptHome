import * as React from 'react';
import * as ReactDOM from 'react-dom';
// css
import './index.css';
import '@progress/kendo-theme-material/dist/all.css';

// kendo intl
import { IntlProvider, load, LocalizationProvider, loadMessages } from '@progress/kendo-react-intl';

import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';

import numbers from 'cldr-numbers-full/main/zh-Hant/numbers.json';
import caGregorian from 'cldr-dates-full/main/zh-Hant/ca-gregorian.json';
import dateFields from 'cldr-dates-full/main/zh-Hant/dateFields.json';
import timeZoneNames from 'cldr-dates-full/main/zh-Hant/timeZoneNames.json';
import ReduxFullApp from './ReduxFullApp';

load(
    likelySubtags,
    currencyData,
    weekData, numbers,
    caGregorian,
    dateFields,
    timeZoneNames
);

import twMessages from './kendoTW.json';
loadMessages(twMessages, 'tw-TW');

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ReduxFullApp />, document.getElementById('root'));

serviceWorker.unregister();
