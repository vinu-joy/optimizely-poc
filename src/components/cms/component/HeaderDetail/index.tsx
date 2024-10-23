import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { HeaderDetailDataFragmentDoc, type HeaderDetailDataFragment } from "@/gql/graphql";

/**
 * HeaderDetail
 * HeaderDetail
 */
export const HeaderDetailComponent : CmsComponent<HeaderDetailDataFragment> = ({ data, children }) => {
    const componentName = 'HeaderDetail'
    const componentInfo = 'HeaderDetail'
    return <div className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="mt-4 mx-4 flex flex-col">{ children }</div>}
    </div>
}
HeaderDetailComponent.displayName = "HeaderDetail (Component/HeaderDetail)"
HeaderDetailComponent.getDataFragment = () => ['HeaderDetailData', HeaderDetailDataFragmentDoc]

export default HeaderDetailComponent