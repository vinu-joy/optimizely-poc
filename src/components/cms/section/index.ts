// Auto generated dictionary
import { ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";
import styleDictionary from "./styles";

// Prefix entries - if needed
prefixDictionaryEntries(styleDictionary, "Styles");

// Build dictionary
export const sectionDictionary : ComponentTypeDictionary = [
    ...styleDictionary
];

// Export dictionary
export default sectionDictionary;

// Helper functions
function prefixDictionaryEntries(list: ComponentTypeDictionary, prefix: string) : ComponentTypeDictionary
{
    list.forEach((component, idx, dictionary) => {
        dictionary[idx].type = typeof component.type == 'string' ? prefix + "/" + component.type : [ prefix, ...component.type ]
    });
    return list;
}
