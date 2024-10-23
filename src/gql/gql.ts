/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "fragment BasicFooterAldarData on BasicFooterAldar {\n  FooterLinks {\n    ...LinkItemData\n  }\n}": types.BasicFooterAldarDataFragmentDoc,
    "fragment FooterAldarBlockData on FooterAldarBlock {\n  FooterSection {\n    SectionTitle\n    SectionLinks {\n      title\n      text\n      url {\n        default\n      }\n    }\n  }\n}": types.FooterAldarBlockDataFragmentDoc,
    "fragment FooterSectionData on FooterSection {\n  SectionTitle\n  SectionLinks {\n    ...LinkItemData\n  }\n}": types.FooterSectionDataFragmentDoc,
    "fragment HeaderDetailData on HeaderDetail {\n  propertyName\n  propertyLocation\n  propertyType\n}": types.HeaderDetailDataFragmentDoc,
    "fragment HeaderLogoData on HeaderLogo {\n  _metadata {\n    key\n  }\n}": types.HeaderLogoDataFragmentDoc,
    "fragment HomeSectionOneTypeData on HomeSectionOneType {\n  MainTitle\n  SecondaryTitle\n  Description\n  BannerImage {\n    ...LinkData\n  }\n}": types.HomeSectionOneTypeDataFragmentDoc,
    "fragment HomeSectionOneTypePropertyData on HomeSectionOneTypeProperty {\n  MainTitle\n  SecondaryTitle\n  Description\n  BannerImage {\n    ...LinkData\n  }\n}": types.HomeSectionOneTypePropertyDataFragmentDoc,
    "fragment NavigationBlockData on NavigationBlock {\n  headerLogo {\n    url {\n      default\n    }\n  }\n  headerItems {\n    title\n    url {\n      base\n      default\n    }\n  }\n}": types.NavigationBlockDataFragmentDoc,
    "fragment PageSeoSettingsData on PageSeoSettings {\n  MetaTitle\n  MetaDescription\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}": types.PageSeoSettingsDataFragmentDoc,
    "fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}": types.PageSeoSettingsPropertyDataFragmentDoc,
    "fragment SimpleCardData on SimpleCard {\n  image {\n    ...LinkData\n  }\n}": types.SimpleCardDataFragmentDoc,
    "fragment DetailHeaderData on DetailHeader {\n  propertyName\n  propertyLocation\n}": types.DetailHeaderDataFragmentDoc,
    "fragment ExperienceElementTestData on ExperienceElementTest {\n  title\n}": types.ExperienceElementTestDataFragmentDoc,
    "fragment ImageElementData on ImageElement {\n  image {\n    ...ReferenceData\n  }\n  altText\n}": types.ImageElementDataFragmentDoc,
    "fragment TitleOneData on TitleOne {\n  Text\n}": types.TitleOneDataFragmentDoc,
    "fragment VideoElementData on VideoElement {\n  video {\n    ...ReferenceData\n  }\n  altText\n  cover {\n    ...ReferenceData\n  }\n}": types.VideoElementDataFragmentDoc,
    "fragment BlankExperienceData on BlankExperience {\n  BlankExperienceSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n  ...ExperienceData\n}": types.BlankExperienceDataFragmentDoc,
    "fragment DestinationPageTypeData on DestinationPageType {\n  DestinationID\n  ...ExperienceData\n}": types.DestinationPageTypeDataFragmentDoc,
    "fragment ExperienceOneData on ExperienceOne {\n  Title\n  ...ExperienceData\n}": types.ExperienceOneDataFragmentDoc,
    "fragment PrideOfPlaceTypeData on PrideOfPlaceType {\n  Title\n  description\n  ImageList {\n    ...LinkItemData\n  }\n  ...ExperienceData\n}": types.PrideOfPlaceTypeDataFragmentDoc,
    "fragment HomePageTypeData on HomePageType {\n  Block {\n    ...HomeSectionOneTypePropertyData\n  }\n}": types.HomePageTypeDataFragmentDoc,
    "query getAldarFooter {\n  FooterAldarBlock {\n    items {\n      FooterSection {\n        SectionTitle\n        SectionLinks {\n          title\n          text\n          url {\n            default\n          }\n        }\n      }\n    }\n  }\n}": types.getAldarFooterDocument,
    "query getAldarHeader {\n  NavigationBlock {\n    items {\n      headerLogo {\n        url {\n          default\n        }\n      }\n      headerItems {\n        title\n        url {\n          base\n          default\n        }\n      }\n    }\n  }\n}": types.getAldarHeaderDocument,
    "fragment IContentData on _IContent\n    {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment CompositionData on ICompositionNode {\n        name: displayName\n        layoutType: nodeType    \n        type\n        key\n        template: displayTemplateKey\n        settings: displaySettings {\n            key\n            value\n        }\n        ... on ICompositionStructureNode {\n            nodes @recursive(depth: 10) {\n                name: displayName\n            }\n        }\n        ... on ICompositionElementNode {\n            element {\n                ...ElementData\n            }\n        }\n    }\n\nfragment IElementData on _IElement {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment ElementData on _IElement {\n        ...IElementData\n    }\n\nfragment BlockData on _IContent {\n        ...IContentData\n    }\n\nfragment PageData on _IContent {\n        ...IContentData\n    }\n\nfragment LinkData on ContentUrl {\n        base\n        hierarchical\n        default\n    }\n\nfragment ReferenceData on ContentReference {\n        key\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentInfo on IContentMetadata {\n        key\n        locale\n        types\n        displayName\n        version\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentListItem on _IContent {\n        ...IContentData\n    }\n\nfragment ExperienceData on _IExperience {\n        composition {\n            ...CompositionData\n        }\n    }\n\nfragment LinkItemData on Link {\n        title\n        text\n        target\n        url {\n            ...LinkData\n        }\n    }": types.IContentDataFragmentDoc,
    "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...BlockData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) {\n        content: _Content(\n            where: {\n                _metadata: { url: { default: { eq: $path }, base: { eq: $domain } }, version: { eq: $version }}\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...PageData\n            }\n        }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }": types.getContentByIdDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BasicFooterAldarData on BasicFooterAldar {\n  FooterLinks {\n    ...LinkItemData\n  }\n}"): (typeof documents)["fragment BasicFooterAldarData on BasicFooterAldar {\n  FooterLinks {\n    ...LinkItemData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment FooterAldarBlockData on FooterAldarBlock {\n  FooterSection {\n    SectionTitle\n    SectionLinks {\n      title\n      text\n      url {\n        default\n      }\n    }\n  }\n}"): (typeof documents)["fragment FooterAldarBlockData on FooterAldarBlock {\n  FooterSection {\n    SectionTitle\n    SectionLinks {\n      title\n      text\n      url {\n        default\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment FooterSectionData on FooterSection {\n  SectionTitle\n  SectionLinks {\n    ...LinkItemData\n  }\n}"): (typeof documents)["fragment FooterSectionData on FooterSection {\n  SectionTitle\n  SectionLinks {\n    ...LinkItemData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HeaderDetailData on HeaderDetail {\n  propertyName\n  propertyLocation\n  propertyType\n}"): (typeof documents)["fragment HeaderDetailData on HeaderDetail {\n  propertyName\n  propertyLocation\n  propertyType\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HeaderLogoData on HeaderLogo {\n  _metadata {\n    key\n  }\n}"): (typeof documents)["fragment HeaderLogoData on HeaderLogo {\n  _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HomeSectionOneTypeData on HomeSectionOneType {\n  MainTitle\n  SecondaryTitle\n  Description\n  BannerImage {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment HomeSectionOneTypeData on HomeSectionOneType {\n  MainTitle\n  SecondaryTitle\n  Description\n  BannerImage {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HomeSectionOneTypePropertyData on HomeSectionOneTypeProperty {\n  MainTitle\n  SecondaryTitle\n  Description\n  BannerImage {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment HomeSectionOneTypePropertyData on HomeSectionOneTypeProperty {\n  MainTitle\n  SecondaryTitle\n  Description\n  BannerImage {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment NavigationBlockData on NavigationBlock {\n  headerLogo {\n    url {\n      default\n    }\n  }\n  headerItems {\n    title\n    url {\n      base\n      default\n    }\n  }\n}"): (typeof documents)["fragment NavigationBlockData on NavigationBlock {\n  headerLogo {\n    url {\n      default\n    }\n  }\n  headerItems {\n    title\n    url {\n      base\n      default\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageSeoSettingsData on PageSeoSettings {\n  MetaTitle\n  MetaDescription\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}"): (typeof documents)["fragment PageSeoSettingsData on PageSeoSettings {\n  MetaTitle\n  MetaDescription\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}"): (typeof documents)["fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment SimpleCardData on SimpleCard {\n  image {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment SimpleCardData on SimpleCard {\n  image {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment DetailHeaderData on DetailHeader {\n  propertyName\n  propertyLocation\n}"): (typeof documents)["fragment DetailHeaderData on DetailHeader {\n  propertyName\n  propertyLocation\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExperienceElementTestData on ExperienceElementTest {\n  title\n}"): (typeof documents)["fragment ExperienceElementTestData on ExperienceElementTest {\n  title\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ImageElementData on ImageElement {\n  image {\n    ...ReferenceData\n  }\n  altText\n}"): (typeof documents)["fragment ImageElementData on ImageElement {\n  image {\n    ...ReferenceData\n  }\n  altText\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment TitleOneData on TitleOne {\n  Text\n}"): (typeof documents)["fragment TitleOneData on TitleOne {\n  Text\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment VideoElementData on VideoElement {\n  video {\n    ...ReferenceData\n  }\n  altText\n  cover {\n    ...ReferenceData\n  }\n}"): (typeof documents)["fragment VideoElementData on VideoElement {\n  video {\n    ...ReferenceData\n  }\n  altText\n  cover {\n    ...ReferenceData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlankExperienceData on BlankExperience {\n  BlankExperienceSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n  ...ExperienceData\n}"): (typeof documents)["fragment BlankExperienceData on BlankExperience {\n  BlankExperienceSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment DestinationPageTypeData on DestinationPageType {\n  DestinationID\n  ...ExperienceData\n}"): (typeof documents)["fragment DestinationPageTypeData on DestinationPageType {\n  DestinationID\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExperienceOneData on ExperienceOne {\n  Title\n  ...ExperienceData\n}"): (typeof documents)["fragment ExperienceOneData on ExperienceOne {\n  Title\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PrideOfPlaceTypeData on PrideOfPlaceType {\n  Title\n  description\n  ImageList {\n    ...LinkItemData\n  }\n  ...ExperienceData\n}"): (typeof documents)["fragment PrideOfPlaceTypeData on PrideOfPlaceType {\n  Title\n  description\n  ImageList {\n    ...LinkItemData\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HomePageTypeData on HomePageType {\n  Block {\n    ...HomeSectionOneTypePropertyData\n  }\n}"): (typeof documents)["fragment HomePageTypeData on HomePageType {\n  Block {\n    ...HomeSectionOneTypePropertyData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getAldarFooter {\n  FooterAldarBlock {\n    items {\n      FooterSection {\n        SectionTitle\n        SectionLinks {\n          title\n          text\n          url {\n            default\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query getAldarFooter {\n  FooterAldarBlock {\n    items {\n      FooterSection {\n        SectionTitle\n        SectionLinks {\n          title\n          text\n          url {\n            default\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getAldarHeader {\n  NavigationBlock {\n    items {\n      headerLogo {\n        url {\n          default\n        }\n      }\n      headerItems {\n        title\n        url {\n          base\n          default\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query getAldarHeader {\n  NavigationBlock {\n    items {\n      headerLogo {\n        url {\n          default\n        }\n      }\n      headerItems {\n        title\n        url {\n          base\n          default\n        }\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment IContentData on _IContent\n    {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment CompositionData on ICompositionNode {\n        name: displayName\n        layoutType: nodeType    \n        type\n        key\n        template: displayTemplateKey\n        settings: displaySettings {\n            key\n            value\n        }\n        ... on ICompositionStructureNode {\n            nodes @recursive(depth: 10) {\n                name: displayName\n            }\n        }\n        ... on ICompositionElementNode {\n            element {\n                ...ElementData\n            }\n        }\n    }\n\nfragment IElementData on _IElement {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment ElementData on _IElement {\n        ...IElementData\n    }\n\nfragment BlockData on _IContent {\n        ...IContentData\n    }\n\nfragment PageData on _IContent {\n        ...IContentData\n    }\n\nfragment LinkData on ContentUrl {\n        base\n        hierarchical\n        default\n    }\n\nfragment ReferenceData on ContentReference {\n        key\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentInfo on IContentMetadata {\n        key\n        locale\n        types\n        displayName\n        version\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentListItem on _IContent {\n        ...IContentData\n    }\n\nfragment ExperienceData on _IExperience {\n        composition {\n            ...CompositionData\n        }\n    }\n\nfragment LinkItemData on Link {\n        title\n        text\n        target\n        url {\n            ...LinkData\n        }\n    }"): (typeof documents)["fragment IContentData on _IContent\n    {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment CompositionData on ICompositionNode {\n        name: displayName\n        layoutType: nodeType    \n        type\n        key\n        template: displayTemplateKey\n        settings: displaySettings {\n            key\n            value\n        }\n        ... on ICompositionStructureNode {\n            nodes @recursive(depth: 10) {\n                name: displayName\n            }\n        }\n        ... on ICompositionElementNode {\n            element {\n                ...ElementData\n            }\n        }\n    }\n\nfragment IElementData on _IElement {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment ElementData on _IElement {\n        ...IElementData\n    }\n\nfragment BlockData on _IContent {\n        ...IContentData\n    }\n\nfragment PageData on _IContent {\n        ...IContentData\n    }\n\nfragment LinkData on ContentUrl {\n        base\n        hierarchical\n        default\n    }\n\nfragment ReferenceData on ContentReference {\n        key\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentInfo on IContentMetadata {\n        key\n        locale\n        types\n        displayName\n        version\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentListItem on _IContent {\n        ...IContentData\n    }\n\nfragment ExperienceData on _IExperience {\n        composition {\n            ...CompositionData\n        }\n    }\n\nfragment LinkItemData on Link {\n        title\n        text\n        target\n        url {\n            ...LinkData\n        }\n    }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...BlockData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) {\n        content: _Content(\n            where: {\n                _metadata: { url: { default: { eq: $path }, base: { eq: $domain } }, version: { eq: $version }}\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...PageData\n            }\n        }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }"): (typeof documents)["query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...BlockData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) {\n        content: _Content(\n            where: {\n                _metadata: { url: { default: { eq: $path }, base: { eq: $domain } }, version: { eq: $version }}\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...PageData\n            }\n        }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;