/*
 * @Author: Chao Yang 
 * @Date: 2019-02-27 16:20:02 
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-02-27 16:53:57
 */
const dot = '.';
const PrefixMainSlider = 'main_slider';
const PrifixMainSliderTitleOutterWrapper = BuildKeyWithPrefixMainSlider('title_outter_wrapper');

function BuildKey (stringLeft: string, stringRight: string, joinCharacter: string = dot): string {
    return stringLeft + joinCharacter + stringRight;
}

function BuildKeyWithPrefixMainSlider (stringRight: string): string {
    return BuildKey(PrefixMainSlider, stringRight);
}

function BuildKeyWithPrifixMainSliderTitleOutterWrapper (stringRight: string): string {
    return BuildKey(PrifixMainSliderTitleOutterWrapper, stringRight);
}

function BuildKeyDictionary (key: object, dictionary: object): void {
    for (const prop of Object.keys(key)) {
        dictionary[prop] = BuildKeyWithPrifixMainSliderTitleOutterWrapper(key[prop]);
    }
}

const MainSliderTitleOutterWrapperKey = {
    Date: 'Date',
    WeAreGettingMarried: 'We_Are_Getting_Married',
    YouAreInvited: 'You_re_Invited'
};

const MainSliderTitleOutterWrapperDictionary:any = {};

BuildKeyDictionary(MainSliderTitleOutterWrapperKey, MainSliderTitleOutterWrapperDictionary);

export { MainSliderTitleOutterWrapperDictionary };


