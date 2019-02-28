/*
 * @Author: Chao Yang 
 * @Date: 2019-02-27 16:20:02 
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-02-28 15:49:59
 */
const dot = '.';

function BuildKey (stringLeft: string, stringRight: string, joinCharacter: string = dot): string {
    return stringLeft + joinCharacter + stringRight;
}

function BuildKeyDictionary (key: object, dictionary: object, buildKey: (t:any) => string): void {
    for (const prop of Object.keys(key)) {
        dictionary[prop] = buildKey(key[prop]);
    }
}

const PrefixMainSlider = 'main_slider';
function BuildKeyWithPrefixMainSlider (stringRight: string): string {
    return BuildKey(PrefixMainSlider, stringRight);
}

const PrifixMainSliderTitleOutterWrapper = BuildKeyWithPrefixMainSlider('title_outter_wrapper');
function BuildKeyWithPrifixMainSliderTitleOutterWrapper (stringRight: string): string {
    return BuildKey(PrifixMainSliderTitleOutterWrapper, stringRight);
}
const MainSliderTitleOutterWrapperKey = {
    Date: 'Date',
    WeAreGettingMarried: 'We_Are_Getting_Married',
    YouAreInvited: 'You_re_Invited'
};
const MainSliderTitleOutterWrapperDictionary:any = {};
BuildKeyDictionary(MainSliderTitleOutterWrapperKey, MainSliderTitleOutterWrapperDictionary, BuildKeyWithPrifixMainSliderTitleOutterWrapper);
export { MainSliderTitleOutterWrapperDictionary };

const PrefixMainSliderNavigation = BuildKeyWithPrefixMainSlider('navigation');
function BuildKeyWithPrifixMainSliderNavigation (stringRight: string): string {
    return BuildKey(PrefixMainSliderNavigation, stringRight);
}
const MainSliderNavigationKey = {
    Bridesmaid: 'Bridesmaid',
    Events: 'Events',
    Gallery: 'Gallery',
    Groomsmen: 'Groomsmen',
    Home: 'Home',
    Rsvp: 'Rsvp',
    Story: 'Story',
    WhereWhen: 'WhereWhen'
};
const MainSliderNavigationDictionary:any = {};
BuildKeyDictionary(MainSliderNavigationKey, MainSliderNavigationDictionary, BuildKeyWithPrifixMainSliderNavigation);
export { MainSliderNavigationDictionary };







const PrefixFooter = "footer";
function BuildKeyWithPrifixFooter (stringRight: string): string {
    return BuildKey(PrefixFooter, stringRight);
}
const FooterKey = {
    Signature: 'Signature',
    Thank: 'Thank',
    You: 'You'
};
const FooterDictionary:any = {};
BuildKeyDictionary(FooterKey, FooterDictionary, BuildKeyWithPrifixFooter);
export { FooterDictionary };


