import type * as Schema from "./graphql";
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const LinkDataFragmentDoc = gql`
    fragment LinkData on ContentUrl {
  base
  hierarchical
  default
}
    `;
export const ReferenceDataFragmentDoc = gql`
    fragment ReferenceData on ContentReference {
  key
  url {
    ...LinkData
  }
}
    `;
export const HeaderBlockDataFragmentDoc = gql`
    fragment HeaderBlockData on HeaderBlock {
  menuItems {
    ...ReferenceData
  }
}
    `;
export const HomeSectionOneTypeDataFragmentDoc = gql`
    fragment HomeSectionOneTypeData on HomeSectionOneType {
  MainTitle
  SecondaryTitle
  Description
  BannerImage {
    ...LinkData
  }
}
    `;
export const PageSeoSettingsDataFragmentDoc = gql`
    fragment PageSeoSettingsData on PageSeoSettings {
  MetaTitle
  MetaDescription
  SharingImage {
    ...ReferenceData
  }
  GraphType
}
    `;
export const SimpleCardDataFragmentDoc = gql`
    fragment SimpleCardData on SimpleCard {
  image {
    ...LinkData
  }
}
    `;
export const PageSeoSettingsPropertyDataFragmentDoc = gql`
    fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {
  MetaTitle
  MetaDescription
  SharingImage {
    ...ReferenceData
  }
  GraphType
}
    `;
export const IContentInfoFragmentDoc = gql`
    fragment IContentInfo on IContentMetadata {
  key
  locale
  types
  displayName
  version
  url {
    ...LinkData
  }
}
    `;
export const IElementDataFragmentDoc = gql`
    fragment IElementData on _IElement {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const ElementDataFragmentDoc = gql`
    fragment ElementData on _IElement {
  ...IElementData
}
    `;
export const ExperienceElementTestDataFragmentDoc = gql`
    fragment ExperienceElementTestData on ExperienceElementTest {
  title
}
    `;
export const ImageElementDataFragmentDoc = gql`
    fragment ImageElementData on ImageElement {
  image {
    ...ReferenceData
  }
  altText
}
    `;
export const TitleOneDataFragmentDoc = gql`
    fragment TitleOneData on TitleOne {
  Text
}
    `;
export const VideoElementDataFragmentDoc = gql`
    fragment VideoElementData on VideoElement {
  video {
    ...ReferenceData
  }
  altText
  cover {
    ...ReferenceData
  }
}
    `;
export const CompositionDataFragmentDoc = gql`
    fragment CompositionData on ICompositionNode {
  name: displayName
  layoutType: nodeType
  type
  key
  template: displayTemplateKey
  settings: displaySettings {
    key
    value
  }
  ... on ICompositionStructureNode {
    nodes @recursive(depth: 10) {
      name: displayName
    }
  }
  ... on ICompositionElementNode {
    element {
      ...ElementData
      ...ExperienceElementTestData
      ...ImageElementData
      ...TitleOneData
      ...VideoElementData
    }
  }
}
    `;
export const ExperienceDataFragmentDoc = gql`
    fragment ExperienceData on _IExperience {
  composition {
    ...CompositionData
  }
}
    `;
export const BlankExperienceDataFragmentDoc = gql`
    fragment BlankExperienceData on BlankExperience {
  BlankExperienceSeoSettings {
    ...PageSeoSettingsPropertyData
  }
  ...ExperienceData
}
    `;
export const DestinationPageTypeDataFragmentDoc = gql`
    fragment DestinationPageTypeData on DestinationPageType {
  DestinationID
  ...ExperienceData
}
    `;
export const ExperienceOneDataFragmentDoc = gql`
    fragment ExperienceOneData on ExperienceOne {
  Title
  ...ExperienceData
}
    `;
export const LinkItemDataFragmentDoc = gql`
    fragment LinkItemData on Link {
  title
  text
  target
  url {
    ...LinkData
  }
}
    `;
export const PrideOfPlaceTypeDataFragmentDoc = gql`
    fragment PrideOfPlaceTypeData on PrideOfPlaceType {
  Title
  description
  ImageList {
    ...LinkItemData
  }
  ...ExperienceData
}
    `;
export const HomeSectionOneTypePropertyDataFragmentDoc = gql`
    fragment HomeSectionOneTypePropertyData on HomeSectionOneTypeProperty {
  MainTitle
  SecondaryTitle
  Description
  BannerImage {
    ...LinkData
  }
}
    `;
export const HomePageTypeDataFragmentDoc = gql`
    fragment HomePageTypeData on HomePageType {
  Block {
    ...HomeSectionOneTypePropertyData
  }
}
    `;
export const IContentDataFragmentDoc = gql`
    fragment IContentData on _IContent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const BlockDataFragmentDoc = gql`
    fragment BlockData on _IContent {
  ...IContentData
}
    `;
export const PageDataFragmentDoc = gql`
    fragment PageData on _IContent {
  ...IContentData
}
    `;
export const IContentListItemFragmentDoc = gql`
    fragment IContentListItem on _IContent {
  ...IContentData
}
    `;
export const getContentByIdDocument = gql`
    query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
  content: _Content(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items {
      ...BlockData
      ...PageData
      ...HeaderBlockData
      ...HomeSectionOneTypeData
      ...PageSeoSettingsData
      ...SimpleCardData
      ...BlankExperienceData
      ...DestinationPageTypeData
      ...ExperienceOneData
      ...PrideOfPlaceTypeData
      ...HomePageTypeData
    }
  }
}
    ${BlockDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${PageDataFragmentDoc}
${HeaderBlockDataFragmentDoc}
${ReferenceDataFragmentDoc}
${HomeSectionOneTypeDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${SimpleCardDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${ExperienceElementTestDataFragmentDoc}
${ImageElementDataFragmentDoc}
${TitleOneDataFragmentDoc}
${VideoElementDataFragmentDoc}
${DestinationPageTypeDataFragmentDoc}
${ExperienceOneDataFragmentDoc}
${PrideOfPlaceTypeDataFragmentDoc}
${LinkItemDataFragmentDoc}
${HomePageTypeDataFragmentDoc}
${HomeSectionOneTypePropertyDataFragmentDoc}`;
export const getContentByPathDocument = gql`
    query getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) {
  content: _Content(
    where: {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}
    locale: $locale
  ) {
    total
    items {
      ...PageData
      ...BlankExperienceData
      ...DestinationPageTypeData
      ...ExperienceOneData
      ...PrideOfPlaceTypeData
      ...HomePageTypeData
    }
  }
}
    ${PageDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}
${ReferenceDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${ExperienceElementTestDataFragmentDoc}
${ImageElementDataFragmentDoc}
${TitleOneDataFragmentDoc}
${VideoElementDataFragmentDoc}
${DestinationPageTypeDataFragmentDoc}
${ExperienceOneDataFragmentDoc}
${PrideOfPlaceTypeDataFragmentDoc}
${LinkItemDataFragmentDoc}
${HomePageTypeDataFragmentDoc}
${HomeSectionOneTypePropertyDataFragmentDoc}`;
export const getContentTypeDocument = gql`
    query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
  content: _Content(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items {
      _metadata {
        types
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getContentById(variables: Schema.getContentByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByIdQuery>(getContentByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentById', 'query', variables);
    },
    getContentByPath(variables: Schema.getContentByPathQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByPathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByPathQuery>(getContentByPathDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentByPath', 'query', variables);
    },
    getContentType(variables: Schema.getContentTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentTypeQuery>(getContentTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentType', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;